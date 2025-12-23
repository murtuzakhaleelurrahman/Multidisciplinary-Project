const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// STORE: Uses a Map for O(1) access
let busStore = new Map();

/* --- GARBAGE COLLECTION --- 
   Removes buses that haven't updated in 5 minutes 
   to prevent server memory leaks. */
setInterval(() => {
  const now = Date.now();
  busStore.forEach((bus, id) => {
    const age = now - new Date(bus.last_updated).getTime();
    if (age > 5 * 60 * 1000) { // 5 Minutes
      busStore.delete(id);
      console.log(`🗑️ Auto-removed stale bus: ${id}`);
    }
  });
}, 60 * 1000);

// API: Health Check
app.get("/", (req, res) => res.send("✅ Smart Transit Backend Online"));

// API: Get Fleet Data
app.get("/api/bus_locations", (req, res) => {
  res.json(Array.from(busStore.values()));
});

// API: Bus Telemetry Update
app.post("/api/bus/update", (req, res) => {
  const { bus_id, latitude, longitude, passenger_count } = req.body;
  
  // Basic Validation
  if (!bus_id || latitude === undefined || longitude === undefined) {
    return res.status(400).json({ error: "Invalid Telemetry Data" });
  }

  busStore.set(bus_id, {
    bus_id,
    latitude,
    longitude,
    passenger_count: passenger_count || 0,
    last_updated: new Date().toISOString()
  });

  res.json({ message: "Telemetry Received" });
});

// API: Hard System Reset (Fixes "Ghost Bus" issues during demos)
app.post("/api/system/reset", (req, res) => {
  busStore.clear();
  console.log("⚠️ System Wiped via Admin Command");
  res.json({ message: "System Reset Complete" });
});

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));