// backend/index.js

const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory bus data (Arduino replaces this later)
let busData = [
  {
    bus_id: "BUS01",
    latitude: 12.9716,
    longitude: 79.1588,
    passenger_count: 18,
    last_updated: new Date().toISOString()
  }
];

// Health check
app.get("/", (req, res) => {
  res.send("Bus Tracking Backend Running");
});

// Get live bus data
app.get("/api/bus_locations", (req, res) => {
  res.json(busData);
});

// Update bus data (Arduino / Simulator)
app.post("/api/bus/update", (req, res) => {
  const { bus_id, latitude, longitude, passenger_count } = req.body;

  if (
    !bus_id ||
    latitude === undefined ||
    longitude === undefined ||
    passenger_count === undefined
  ) {
    return res.status(400).json({ error: "Invalid data" });
  }

  busData = [
    {
      bus_id,
      latitude,
      longitude,
      passenger_count,
      last_updated: new Date().toISOString()
    }
  ];

  res.json({ message: "Bus data updated successfully" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
