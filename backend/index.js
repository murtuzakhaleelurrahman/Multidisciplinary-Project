const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;

/* Health / lifecycle thresholds (ms) */
const STALE_MS = 30 * 1000; // 30 seconds => STALE
const OFFLINE_MS = 2 * 60 * 1000; // 2 minutes => GHOST / removal
const GC_INTERVAL_MS = 60 * 1000; // run garbage collection every 60s
app.use(cors());
app.use(express.json());

/* =========================================================
   IN-MEMORY STORE
   =========================================================
   Map gives O(1) access and clean replacement per bus_id
*/
let busStore = new Map();

/* =========================================================
   GARBAGE COLLECTION
   =========================================================
   Purpose:
   - Prevents memory leaks
   - Removes buses that have truly gone silent
   - Frontend already handles "offline" visually
*/
setInterval(() => {
  const now = Date.now();

  busStore.forEach((bus, id) => {
    const age = now - new Date(bus.last_updated).getTime();
    if (age > OFFLINE_MS) {
      busStore.delete(id);
      console.log(`🗑️ Auto-removed offline bus: ${id} (age_ms=${age})`);
    }
  });
}, GC_INTERVAL_MS);

/* =========================================================
   HEALTH CHECK
   ========================================================= */
app.get("/", (req, res) => {
  res.send("✅ Smart Transit Backend Online");
});

/* =========================================================
   FETCH FLEET DATA
   ========================================================= */
app.get("/api/bus_locations", (req, res) => {
  const now = Date.now();
  const buses = [];

  busStore.forEach((bus) => {
    const age_ms = now - new Date(bus.last_updated).getTime();

    // Treat anything beyond OFFLINE_MS as a ghost and don't return it
    if (age_ms > OFFLINE_MS) return;

    const health = age_ms <= STALE_MS ? "live" : "stale";

    buses.push({ ...bus, age_ms, health });
  });

  res.json(buses);
});

/* =========================================================
   MATH HELPER – HAVERSINE DISTANCE (meters)
   =========================================================
   Purpose:
   - Calculates real-world distance between GPS points
   - Required for speed sanity checks
*/
function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371e3; // Earth radius in meters
  const φ1 = lat1 * Math.PI / 180;
  const φ2 = lat2 * Math.PI / 180;
  const Δφ = (lat2 - lat1) * Math.PI / 180;
  const Δλ = (lon2 - lon1) * Math.PI / 180;

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) *
    Math.sin(Δλ / 2) * Math.sin(Δλ / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in meters
}

/* =========================================================
   BUS TELEMETRY UPDATE (WITH SANITY CHECK)
   =========================================================
   Phase-1 Feature 3:
   - Rejects GPS drift / teleport glitches
   - Protects frontend animation from bad data
*/
app.post("/api/bus/update", (req, res) => {
  const {
    bus_id,
    latitude,
    longitude,
    passenger_count,
    monitored,
    current_stop_id
  } = req.body;
  const now = Date.now();

  /* 1. Strict validation */
  if (!bus_id || latitude === undefined || longitude === undefined) {
    return res.status(400).json({ error: "Invalid Telemetry Data" });
  }

  /* 2. Fetch previous known state */
  const existingBus = busStore.get(bus_id);

  if (existingBus) {
    /* 3. Calculate physics */
    const dist = getDistance(
      existingBus.latitude,
      existingBus.longitude,
      latitude,
      longitude
    );

    const timeDiff =
      (now - new Date(existingBus.last_updated).getTime()) / 1000; // seconds

    /* 4. Speed sanity check */
    if (timeDiff > 0) {
      const speed = dist / timeDiff; // m/s

      // Threshold: ~126 km/h (very generous for a city bus)
      if (speed > 35) {
        console.warn(
          `⚠️ REJECTED GPS JUMP: ${bus_id} → ${Math.round(speed * 3.6)} km/h`
        );
        return res.status(400).json({
          error: "GPS Glitch Detected: Speed too high"
        });
      }
    }
  }

  /* 5. Save valid telemetry */
  busStore.set(bus_id, {
    bus_id,
    latitude,
    longitude,
    passenger_count: passenger_count || 0,
    monitored: monitored === true,
    current_stop_id: current_stop_id || null,
    last_updated: new Date().toISOString()
  });

  res.json({ message: "Telemetry Accepted" });
});

/* =========================================================
   HARD RESET (DEMO SAFETY)
   ========================================================= */
app.post("/api/system/reset", (req, res) => {
  busStore.clear();
  console.log("☢️ System Reset Triggered");
  res.json({ message: "System Reset Complete" });
});

/* =========================================================
   START SERVER
   ========================================================= */
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
