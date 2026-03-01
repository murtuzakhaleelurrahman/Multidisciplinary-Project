require('dotenv').config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const axios = require("axios");
const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;
const ML_SERVICE_URL = process.env.ML_SERVICE_URL || 'https://vit-ml-service.onrender.com';

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
const Routes = require('./models/Routes');

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
   USER TICKETS ENDPOINT (for dashboard)
   Purpose: Return user's booked tickets with real occupancy data
   ========================================================= */
app.get("/api/user/tickets", async (req, res) => {
  try {
    // Get all active buses with their current data
    const buses = await ActiveFleet.find({
      last_updated: { $gte: new Date(Date.now() - OFFLINE_MS) }
    }).lean();

    if (!buses || buses.length === 0) {
      return res.json({ tickets: [] });
    }

    // Demo data: Generate realistic tickets for the logged-in user
    // In production, fetch from a "Bookings" or "Tickets" collection
    const demoTickets = buses.slice(0, 2).map((bus, idx) => {
      const occupancyPercent = Math.round(
        ((bus.passenger_count || 0) / 50) * 100
      );
      
      const routeData = [
        {
          id: "VLR_001",
          name: "Vellore Fort",
          source: "Vellore Fort",
          destination: "Katpadi Junction",
          routeCode: "ROUTE 4A",
          currentStop: "Green Circle"
        },
        {
          id: "VLR_002",
          name: "CMH Road",
          source: "VIT Gate",
          destination: "Melvisharam",
          routeCode: "ROUTE 3B",
          currentStop: "CMH Road"
        }
      ];

      const route = routeData[idx % routeData.length];
      
      // Calculate ETA based on last update
      const ageSeconds = (Date.now() - new Date(bus.last_updated).getTime()) / 1000;
      const eta = Math.max(5, Math.round((30 - ageSeconds / 10)));

      return {
        ticket_id: `TKT-${bus.bus_id}-${Date.now()}`,
        bus_id: bus.bus_id,
        route_code: route.routeCode,
        source: route.source,
        destination: route.destination,
        current_stop: route.currentStop,
        reserved_seats: idx + 1,
        occupancy_percentage: occupancyPercent,
        passenger_count: bus.passenger_count || 0,
        bus_capacity: 50,
        eta_minutes: eta,
        status: occupancyPercent > 85 ? "delayed" : "active",
        latitude: bus.latitude,
        longitude: bus.longitude,
        last_updated: bus.last_updated,
        booking_date: new Date(Date.now() - 86400000) // Yesterday
      };
    });

    res.json({ 
      tickets: demoTickets,
      count: demoTickets.length,
      timestamp: new Date().toISOString(),
      total_active_buses: buses.length
    });
  } catch (err) {
    console.error("User tickets fetch failed:", err.message);
    res.status(500).json({ error: "Failed to fetch user tickets" });
  }
});

/* =========================================================
   MATHEMATICAL ETA FALLBACK (Fault-Tolerant Design)
   =========================================================
   Purpose: Provides deterministic ETA when ML service is unavailable
   Method: Simple physics-based calculation using average historical speed
*/
function computeMathematicalETA(segment_distance_m, seg_speed_last_1, seg_speed_last_3_mean, seg_speed_last_6_mean) {
  // Use weighted average of recent speeds (favoring more recent data)
  const weight_1 = 0.5;
  const weight_3 = 0.3;
  const weight_6 = 0.2;
  
  const estimatedSpeedKmh = 
    (seg_speed_last_1 * weight_1) + 
    (seg_speed_last_3_mean * weight_3) + 
    (seg_speed_last_6_mean * weight_6);
  
  // Convert to m/s
  const speedMps = estimatedSpeedKmh * (1000.0 / 3600.0);
  
  // Calculate ETA
  const etaSeconds = segment_distance_m / speedMps;
  const etaMinutes = etaSeconds / 60.0;
  
  return {
    predicted_speed_kmh: Math.round(estimatedSpeedKmh * 100) / 100,
    predicted_eta_seconds: Math.round(etaSeconds * 100) / 100,
    predicted_eta_minutes: Math.round(etaMinutes * 100) / 100
  };
}

/* =========================================================
   REUSABLE ML ETA PREDICTION FUNCTION (Service Layer)
   =========================================================
   Purpose: Centralized async function to call remote ML service
   Benefits:
   - Single source of truth for ML service communication
   - Easy to test, mock, or swap services
   - Consistent error handling across all callers
   - Production-grade architecture
*/
async function getPredictedETA(payload) {
  const startTime = Date.now();
  
  try {
    // Call Render-deployed ML service
    const response = await axios.post(`${ML_SERVICE_URL}/predict`, payload, {
      timeout: 15000, // 15 second timeout for remote service
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    const latency = Date.now() - startTime;
    console.log(`✓ ML inference latency: ${latency} ms (Render service)`);
    
    return {
      success: true,
      mode: "ml",
      data: response.data,
      inference_time_ms: latency
    };
  } catch (err) {
    const latency = Date.now() - startTime;
    console.error(`✗ ML service error (${latency} ms):`, err.message);
    
    // Return error details for caller to handle
    return {
      success: false,
      mode: "failed",
      error: err.message,
      code: err.code,
      inference_time_ms: latency
    };
  }
}

/* =========================================================
   ML-POWERED ETA PREDICTION ENDPOINT (Clean Architecture)
   =========================================================
   Route: POST /api/ml-eta
   Purpose: Predict ETA using remote ML service with automatic fallback
   
   Request body:
   {
     "segment_distance_m": number,
     "hour_of_day": 0-23,
     "is_weekend": 0 or 1,
     "seg_speed_last_1": number,
     "seg_speed_last_3_mean": number,
     "seg_speed_last_6_mean": number,
     "seg_speed_std_6": number
   }
   
   Response (ML mode):
   {
     "mode": "ml",
     "predicted_speed_kmh": number,
     "predicted_eta_seconds": number,
     "predicted_eta_minutes": number,
     "inference_time_ms": number
   }
   
   Response (Fallback mode):
   {
     "mode": "fallback",
     "method": "weighted_average",
     "predicted_speed_kmh": number,
     "predicted_eta_seconds": number,
     "predicted_eta_minutes": number,
     "warning": "ML service unavailable..."
   }
*/
app.post("/api/ml-eta", async (req, res) => {
  const {
    segment_distance_m,
    hour_of_day,
    is_weekend,
    seg_speed_last_1,
    seg_speed_last_3_mean,
    seg_speed_last_6_mean,
    seg_speed_std_6
  } = req.body;

  // Validate required fields
  const requiredFields = [
    "segment_distance_m",
    "hour_of_day",
    "is_weekend",
    "seg_speed_last_1",
    "seg_speed_last_3_mean",
    "seg_speed_last_6_mean",
    "seg_speed_std_6"
  ];

  const missingFields = requiredFields.filter(field => req.body[field] === undefined);
  if (missingFields.length > 0) {
    return res.status(400).json({
      error: "Missing required fields",
      missing: missingFields,
      required: requiredFields
    });
  }

  // Prepare payload for ML service
  const payload = {
    segment_distance_m,
    hour_of_day,
    is_weekend,
    seg_speed_last_1,
    seg_speed_last_3_mean,
    seg_speed_last_6_mean,
    seg_speed_std_6
  };

  // Call ML service via reusable function
  const mlResult = await getPredictedETA(payload);

  // If ML service succeeded, return its result
  if (mlResult.success) {
    return res.json({
      mode: "ml",
      ...mlResult.data,
      inference_time_ms: mlResult.inference_time_ms
    });
  }

  // ML service failed - use fallback
  console.warn(`⚠️ ML service failed (${mlResult.error}). Using mathematical fallback.`);
  
  const fallbackResult = computeMathematicalETA(
    segment_distance_m,
    seg_speed_last_1,
    seg_speed_last_3_mean,
    seg_speed_last_6_mean
  );

  res.json({
    mode: "fallback",
    method: "weighted_average",
    ...fallbackResult,
    inference_time_ms: mlResult.inference_time_ms,
    warning: `ML service unavailable (${mlResult.error}). Using deterministic fallback.`,
    fallback_reason: mlResult.code || "connection_error"
  });
});

/* =========================================================
   QUICK TEST ENDPOINT (Testing ML Service Connection)
   ========================================================= */
app.get("/quick-test-eta", async (req, res) => {
  try {
    const response = await axios.post(
      `${process.env.ML_SERVICE_URL}/predict`,
      {
        segment_distance_m: 1500,
        hour_of_day: 17,
        is_weekend: 0,
        seg_speed_last_1: 22.0,
        seg_speed_last_3_mean: 21.5,
        seg_speed_last_6_mean: 20.8,
        seg_speed_std_6: 3.5
      },
      {
        headers: { "Content-Type": "application/json" },
        timeout: 60000   // 60 seconds
      }
    );

    res.json({
      mode: "ml-direct-test",
      ml_response: response.data
    });

  } catch (error) {
    res.status(500).json({
      mode: "error",
      message: error.message,
      details: error.response?.data || null
    });
  }
});

/* =========================================================
   ROUTE ETA API (ML-Powered Full Route Estimation)
   Calculates total ETA with ML prediction + intelligent fallback
   ========================================================= */
app.get("/api/route/:routeId/eta", async (req, res) => {
  if (!dbReady) return res.status(503).json({ error: "Database not ready" });

  const { routeId } = req.params;

  try {
    // Fetch route definition
    const route = await Routes.findOne({ route_id: routeId });
    if (!route) {
      return res.status(404).json({ error: `Route ${routeId} not found` });
    }

    // Get current time context
    const currentHour = new Date().getHours();
    const currentDate = new Date();
    const isWeekend = currentDate.getDay() === 0 || currentDate.getDay() === 6 ? 1 : 0;
    const FALLBACK_SPEED_KMH = 25;
    const MIN_SAMPLES_FOR_ML = 2; // Minimum data points to attempt ML

    // Helper: Extract traffic features for a segment from TripHistory
    const getSegmentFeatures = async (segmentId) => {
      const recentData = await TripHistory.find({
        segment: segmentId,
        speed: { $ne: null, $gt: 1 },
        hour_of_day: currentHour
      })
        .sort({ timestamp: -1 })
        .limit(6)
        .lean();

      if (recentData.length < MIN_SAMPLES_FOR_ML) {
        return null; // Insufficient data
      }

      const speeds = recentData.map(d => d.speed);
      const seg_speed_last_1 = speeds[0];
      const seg_speed_last_3_mean = speeds.slice(0, 3).reduce((a, b) => a + b, 0) / Math.min(3, speeds.length);
      const seg_speed_last_6_mean = speeds.reduce((a, b) => a + b, 0) / speeds.length;
      
      // Calculate standard deviation
      const mean = seg_speed_last_6_mean;
      const variance = speeds.reduce((sum, v) => sum + Math.pow(v - mean, 2), 0) / speeds.length;
      const seg_speed_std_6 = Math.sqrt(variance);

      return {
        seg_speed_last_1,
        seg_speed_last_3_mean: Math.round(seg_speed_last_3_mean * 10) / 10,
        seg_speed_last_6_mean: Math.round(seg_speed_last_6_mean * 10) / 10,
        seg_speed_std_6: Math.round(seg_speed_std_6 * 10) / 10,
        sample_count: speeds.length
      };
    };

    // Helper: Call ML service for segment ETA prediction
    const callMLETA = async (segment, features) => {
      try {
        const mlPayload = {
          segment_distance_m: segment.distance_m,
          hour_of_day: currentHour,
          is_weekend: isWeekend,
          seg_speed_last_1: features.seg_speed_last_1,
          seg_speed_last_3_mean: features.seg_speed_last_3_mean,
          seg_speed_last_6_mean: features.seg_speed_last_6_mean,
          seg_speed_std_6: features.seg_speed_std_6
        };

        const mlResponse = await axios.post(
          `${ML_SERVICE_URL}/predict`,
          mlPayload,
          { timeout: 15000 }
        );

        if (mlResponse.data && mlResponse.data.predicted_eta_seconds) {
          return {
            eta_seconds: mlResponse.data.predicted_eta_seconds,
            source: "ml",
            success: true
          };
        }
      } catch (error) {
        console.warn(`ML service unavailable for segment: ${error.message}`);
      }
      
      return null;
    };

    // Helper: Calculate fallback ETA
    const getFallbackETA = (distanceM) => {
      const distanceKm = distanceM / 1000;
      return {
        eta_seconds: Math.round((distanceKm / FALLBACK_SPEED_KMH) * 3600),
        source: "fallback",
        success: false
      };
    };

    // Process each segment
    let totalEtaSeconds = 0;
    let mlSuccessCount = 0;
    const segmentDetails = [];

    for (const segment of route.segments) {
      const segmentId = `${segment.from}->${segment.to}`;
      
      // Step 1: Get traffic features
      const features = await getSegmentFeatures(segmentId);
      
      let segmentResult = null;

      if (features) {
        // Step 2: Try ML prediction
        segmentResult = await callMLETA(segment, features);
      }

      // Step 3: Fallback if needed
      if (!segmentResult) {
        segmentResult = getFallbackETA(segment.distance_m);
      } else {
        mlSuccessCount++;
      }

      totalEtaSeconds += segmentResult.eta_seconds;

      segmentDetails.push({
        from: segment.from,
        to: segment.to,
        distance_m: segment.distance_m,
        speed_kmh: Math.round((segment.distance_m / 1000 / (segmentResult.eta_seconds / 3600)) * 10) / 10,
        eta_seconds: segmentResult.eta_seconds,
        source: segmentResult.source
      });
    }

    const totalEtaMinutes = Math.round(totalEtaSeconds / 60);
    const overallMode = mlSuccessCount === route.segments.length ? "ml" : mlSuccessCount > 0 ? "ml-hybrid" : "fallback";

    res.json({
      route_id: routeId,
      route_name: route.route_name,
      total_distance_m: route.segments.reduce((sum, seg) => sum + seg.distance_m, 0),
      total_eta_seconds: Math.round(totalEtaSeconds),
      total_eta_minutes: totalEtaMinutes,
      mode: overallMode,
      current_hour: currentHour,
      is_weekend: isWeekend,
      ml_segments: mlSuccessCount,
      fallback_segments: route.segments.length - mlSuccessCount,
      segments: segmentDetails
    });

  } catch (err) {
    console.error("Route ETA error:", err.message);
    res.status(500).json({ error: "ETA calculation failed" });
  }
});

/* =========================================================
   START SERVER
   ========================================================= */
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
