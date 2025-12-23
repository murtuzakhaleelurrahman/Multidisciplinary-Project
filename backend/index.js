const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

/*
  In-memory data store
  In real deployment, Arduino replaces this
*/
let busData = [
  {
    bus_id: "BUS-HW-01",
    latitude: 12.9716,
    longitude: 79.1588,
    passenger_count: 18,
    last_updated: new Date().toISOString()
  }
];

// Health check
app.get("/", (req, res) => {
  res.send("✅ Bus Tracking Backend Running");
});

// Get all bus locations
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
    return res.status(400).json({ error: "Invalid payload" });
  }

  const index = busData.findIndex(b => b.bus_id === bus_id);

  const updatedBus = {
    bus_id,
    latitude,
    longitude,
    passenger_count,
    last_updated: new Date().toISOString()
  };

  if (index !== -1) {
    busData[index] = updatedBus;
  } else {
    busData.push(updatedBus);
  }

  res.json({ message: "Bus data updated" });
});

app.listen(PORT, () => {
  console.log(`🚍 Backend running on port ${PORT}`);
});
