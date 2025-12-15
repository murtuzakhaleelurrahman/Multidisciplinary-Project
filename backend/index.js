// backend/index.js

const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Temporary in-memory data (later comes from Arduino)
let busData = [
  {
    bus_id: "BUS01",
    latitude: 12.9716,
    longitude: 79.1588,
    passenger_count: 18,
    last_updated: new Date().toISOString()
  }
];

// Test route
app.get("/", (req, res) => {
  res.send("Bus Tracking Backend Running");
});

// Get bus locations
app.get("/api/bus_locations", (req, res) => {
  res.json(busData);
});

// Update bus data (this simulates Arduino POST)
app.post("/api/bus/update", (req, res) => {
  const { bus_id, latitude, longitude, passenger_count } = req.body;

  busData = [
    {
      bus_id,
      latitude,
      longitude,
      passenger_count,
      last_updated: new Date().toISOString()
    }
  ];

  res.json({ message: "Bus data updated" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
