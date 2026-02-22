require('dotenv').config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

/* Health / lifecycle thresholds (ms) */
const STALE_MS = 60 * 1000; // 60 seconds => STALE (aligned with frontend)
const OFFLINE_MS = 2 * 60 * 1000; // 2 minutes => GHOST / removal
const GC_INTERVAL_MS = 60 * 1000; // run garbage collection every 60s
const MAX_SPEED_MPS = process.env.NODE_ENV === "production" ? 35 : 45; // relax for simulator
const FREE_FLOW_SPEED_KMH = 30; // baseline for traffic modifier
const HEATMAP_WINDOW_HOURS = 4;
const HEATMAP_MIN_SAMPLES = 3;
app.use(cors());
app.use(express.json());

/* =========================================================
   DATABASE CONNECTION (MongoDB)
   ========================================================= */
let dbReady = false;
if (MONGODB_URI) {
  mongoose
    .connect(MONGODB_URI)
    .then(() => {
      dbReady = true;
      console.log("✅ MongoDB connected");
    })
    .catch((err) => {
      dbReady = false;
      console.error("❌ MongoDB connection error:", err.message);
    });
} else {
  console.warn("⚠️ MONGODB_URI not set. Backend requires MongoDB for smart features.");
}

/* =========================================================
   MODELS (DRY Principle - Single Source of Truth)
   ========================================================= */
const ActiveFleet = require('./models/ActiveFleet');
const TripHistory = require('./models/TripHistory');
const User = require('./models/User');

/* =========================================================
   GARBAGE COLLECTION
   =========================================================
   Purpose:
   - Prevents memory leaks
   - Removes buses that have truly gone silent
   - Frontend already handles "offline" visually
*/
setInterval(async () => {
  if (!dbReady) return;
  try {
    const cutoff = new Date(Date.now() - OFFLINE_MS);
    const result = await ActiveFleet.deleteMany({ last_updated: { $lt: cutoff } });
    if (result.deletedCount > 0) {
      console.log(`🗑️ Auto-removed offline buses: ${result.deletedCount}`);
    }
  } catch (err) {
    console.warn("GC error:", err.message);
  }
}, GC_INTERVAL_MS);

/* =========================================================
   HEALTH CHECK
   ========================================================= */
app.get("/", (req, res) => {
  res.send("✅ Smart Transit Backend Online");
});

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    timestamp: new Date().toISOString(),
    mongodb: dbReady ? "connected" : "disconnected",
    uptime: process.uptime()
  });
});

/* =========================================================
   AUTHENTICATION (DEMO-ONLY)
   =========================================================
   NOTE: This is a simplified login flow for demo use only.
   For production, use bcrypt + JWT and enforce auth on admin APIs.
*/
app.post("/api/auth/login", async (req, res) => {
  if (!dbReady) {
    return res.status(503).json({ error: "Database starting up... please wait 5 seconds." });
  }
  const { username, password } = req.body || {};

  try {
    const user = await User.findOne({ username }).lean();
    if (!user) {
      return res.status(401).json({ error: "User not found" });
    }

    const submittedPassword = password || '';
    if (user.password !== submittedPassword) {
      return res.status(401).json({ error: "Invalid password" });
    }

    res.json({
      username: user.username,
      role: user.role
    });
  } catch (err) {
    console.error("❌ Login Route Error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

/* =========================================================
   FETCH FLEET DATA
   ========================================================= */
app.get("/api/bus_locations", async (req, res) => {
  if (!dbReady) return res.status(503).json({ error: "Database not ready" });
  const now = Date.now();
  const buses = [];

  try {
    const fleet = await ActiveFleet.find({}).lean();
    fleet.forEach((bus) => {
      const age_ms = now - new Date(bus.last_updated).getTime();

      // Treat anything beyond OFFLINE_MS as a ghost and don't return it
      if (age_ms > OFFLINE_MS) return;

      const health = age_ms <= STALE_MS ? "live" : "stale";

      buses.push({
        bus_id: bus.bus_id,
        route_id: bus.route_id || null,
        latitude: bus.location?.coordinates?.[1],
        longitude: bus.location?.coordinates?.[0],
        passenger_count: bus.passenger_count || 0,
        monitored: bus.monitored === true,
        current_stop_id: bus.current_stop_id || null,
        current_speed: bus.current_speed || null,
        last_updated: bus.last_updated,
        age_ms,
        health
      });
    });

    res.json(buses);
  } catch (err) {
    console.error("Fetch fleet error:", err.message);
    res.status(500).json({ error: "Failed to fetch fleet" });
  }
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
app.post("/api/bus/update", async (req, res) => {
  if (!dbReady) return res.status(503).json({ error: "Database not ready" });
  const {
    bus_id,
    latitude,
    longitude,
    passenger_count,
    monitored,
    current_stop_id,
    route_id
  } = req.body;
  const now = Date.now();

  /* 1. Strict validation */
  if (!bus_id || latitude === undefined || longitude === undefined) {
    return res.status(400).json({ error: "Invalid Telemetry Data" });
  }

  try {
    /* 2. Fetch previous known state */
    const existingBus = await ActiveFleet.findOne({ bus_id }).lean();

    let computedSpeedKmh = null;
    let segment = null;

    if (existingBus) {
      /* 3. Calculate physics */
      const prevLat = existingBus.location?.coordinates?.[1];
      const prevLon = existingBus.location?.coordinates?.[0];
      const hasPrev = typeof prevLat === "number" && typeof prevLon === "number";
      if (hasPrev) {
        const dist = getDistance(prevLat, prevLon, latitude, longitude);
        const timeDiff =
          (now - new Date(existingBus.last_updated).getTime()) / 1000; // seconds

        /* 4. Speed sanity check */
        if (timeDiff > 0 && Number.isFinite(dist)) {
          const speed = dist / timeDiff; // m/s
          computedSpeedKmh = Math.round(speed * 3.6 * 10) / 10;

          // Threshold: ~126 km/h (very generous for a city bus)
          if (speed > MAX_SPEED_MPS) {
            console.warn(
              `⚠️ REJECTED GPS JUMP: ${bus_id} → ${Math.round(speed * 3.6)} km/h (limit=${Math.round(MAX_SPEED_MPS * 3.6)} km/h)`
            );
            return res.status(400).json({
              error: "GPS Glitch Detected: Speed too high"
            });
          }
        }
      }

      // SEGMENT REFINEMENT: Only create valid segments when we have both stops and meaningful movement
      const prevStop = existingBus.current_stop_id;
      const nextStop = current_stop_id;
      if (prevStop && nextStop && prevStop !== nextStop) {
        segment = `${prevStop}->${nextStop}`;
      }
    }

    /* 5. Save valid telemetry to live collection (upsert) */
    await ActiveFleet.findOneAndUpdate(
      { bus_id },
      {
        bus_id,
        route_id: route_id || existingBus?.route_id || null,
        location: { type: "Point", coordinates: [longitude, latitude] },
        current_speed: computedSpeedKmh,
        passenger_count: passenger_count || 0,
        monitored: monitored === true,
        current_stop_id: current_stop_id || null,
        last_updated: new Date()
      },
      { upsert: true, new: true }
    );

    /* 6. Archive telemetry (async) - Only save meaningful data */
    const nowDate = new Date();
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayOfWeek = dayNames[nowDate.getDay()];
    const hourOfDay = nowDate.getHours();

    let trafficLevel = "unknown";
    if (computedSpeedKmh !== null) {
      if (computedSpeedKmh >= 25) trafficLevel = "light";
      else if (computedSpeedKmh >= 15) trafficLevel = "medium";
      else trafficLevel = "heavy";
    }

    // Only archive if we have meaningful speed (> 1 km/h) and a valid segment
    if (segment && computedSpeedKmh && computedSpeedKmh > 1) {
      TripHistory.create({
        bus_id,
        route_id: route_id || existingBus?.route_id || null,
        timestamp: nowDate,
        day_of_week: dayOfWeek,
        hour_of_day: hourOfDay,
        segment,
        speed: computedSpeedKmh,
        traffic_level: trafficLevel,
        coordinates: [longitude, latitude]
      }).catch((err) => {
        console.warn("TripHistory archive error:", err.message);
      });
    }

    res.json({ message: "Telemetry Accepted" });
  } catch (err) {
    console.error("Telemetry update error:", err.message);
    res.status(500).json({ error: "Telemetry update failed" });
  }
});

/* =========================================================
   HARD RESET (DEMO SAFETY)
   ========================================================= */
app.post("/api/system/reset", async (req, res) => {
  if (!dbReady) return res.status(503).json({ error: "Database not ready" });
  try {
    await ActiveFleet.deleteMany({});
    console.log("☢️ System Reset Triggered");
    res.json({ message: "System Reset Complete" });
  } catch (err) {
    console.error("System reset error:", err.message);
    res.status(500).json({ error: "System reset failed" });
  }
});

/* =========================================================
   TRAFFIC PROFILE (PREDICTIVE ETA MODIFIER)
   ========================================================= */
app.get("/api/traffic_profile", async (req, res) => {
  if (!dbReady) return res.status(503).json({ error: "Database not ready" });
  try {
    const currentHour = new Date().getHours();
    const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);

    const agg = await TripHistory.aggregate([
      {
        $match: {
          timestamp: { $gte: thirtyDaysAgo },
          hour_of_day: currentHour,
          speed: { $ne: null }
        }
      },
      {
        $group: {
          _id: "$hour_of_day",
          avgSpeed: { $avg: "$speed" }
        }
      }
    ]);

    const avgSpeed = agg && agg.length ? agg[0].avgSpeed : null;
    let modifier = 1.0;
    if (avgSpeed && avgSpeed > 0) {
      modifier = Math.max(0.3, Math.min(1.2, avgSpeed / FREE_FLOW_SPEED_KMH));
    }

    const status = modifier < 0.7 ? "heavy_traffic" : modifier < 0.9 ? "moderate" : "normal";

    res.json({
      status,
      global_speed_modifier: Number(modifier.toFixed(2)),
      rush_hour_active: modifier < 0.8
    });
  } catch (err) {
    console.error("Traffic profile error:", err.message);
    res.status(500).json({ error: "Traffic profile unavailable" });
  }
});

/* =========================================================
   SEGMENT TRAFFIC API (Level 2 Intelligence)
   Returns average speeds for specific road segments for the current hour
   ========================================================= */
app.get("/api/traffic/segments", async (req, res) => {
  if (!dbReady) return res.status(503).json({ error: "Database not ready" });

  try {
    const currentHour = new Date().getHours();
    const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
    
    // Aggregation: Group data by "segment" for the current hour
    const report = await TripHistory.aggregate([
      {
        $match: {
          timestamp: { $gte: sevenDaysAgo },
          hour_of_day: currentHour,
          speed: { $ne: null, $gt: 1 },
          segment: { $ne: null, $exists: true }
        }
      },
      {
        $group: {
          _id: "$segment",
          avgSpeed: { $avg: "$speed" },
          sampleSize: { $sum: 1 }
        }
      },
      {
        $match: {
          sampleSize: { $gte: 3 } // Only return segments with at least 3 data points
        }
      }
    ]);

    // Convert array to a fast Lookup Map: { "VLR_001->VLR_002": 25.5, ... }
    const trafficMap = {};
    report.forEach(item => {
      trafficMap[item._id] = Math.round(item.avgSpeed * 10) / 10;
    });

    res.json({
      hour: currentHour,
      segments: trafficMap,
      count: Object.keys(trafficMap).length
    });

  } catch (err) {
    console.error("Segment traffic error:", err.message);
    res.status(500).json({ error: "Analysis failed" });
  }
});

/* =========================================================
   TRAFFIC HEATMAP API (Level 3 Intelligence)
   Returns average speeds per segment for the recent window
   ========================================================= */
app.get("/api/traffic/heatmap", async (req, res) => {
  if (!dbReady) return res.status(503).json({ error: "Database not ready" });

  try {
    const fourHoursAgo = new Date(Date.now() - HEATMAP_WINDOW_HOURS * 60 * 60 * 1000);

    const heatmapData = await TripHistory.aggregate([
      {
        $match: {
          timestamp: { $gte: fourHoursAgo },
          speed: { $ne: null, $gt: 1 },
          segment: { $ne: null, $exists: true }
        }
      },
      {
        $group: {
          _id: "$segment",
          avgSpeed: { $avg: "$speed" },
          sampleSize: { $sum: 1 },
          lastSeen: { $max: "$timestamp" }
        }
      },
      {
        $match: {
          sampleSize: { $gte: HEATMAP_MIN_SAMPLES }
        }
      }
    ]);

    res.json(heatmapData);
  } catch (err) {
    console.error("Heatmap generation failed:", err.message);
    res.status(500).json({ error: "Heatmap generation failed" });
  }
});

/* =========================================================
   START SERVER
   ========================================================= */
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
