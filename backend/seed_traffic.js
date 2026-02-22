/* seed_traffic.js
   Run this ONCE to populate your MongoDB with 30 days of fake traffic history.
   Usage: node seed_traffic.js
   
   This script simulates realistic traffic patterns:
   - Weekday rush hours (8-10 AM, 5-7 PM): Heavy traffic (12 km/h avg)
   - Weekday midday (11 AM-4 PM): Moderate traffic (25 km/h avg)
   - Nights and weekends: Free flow (35 km/h avg)
*/

require('dotenv').config();
const mongoose = require("mongoose");
const TripHistory = require('./models/TripHistory'); // DRY: Use shared model

// Configuration - Reads from .env file or falls back to local MongoDB
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/smart_transit";
const DAYS_TO_SIMULATE = 30;
const BUS_COUNT = 5;

// Connect to MongoDB
console.log(`🔌 Connecting to MongoDB...`);
console.log(`   URI: ${MONGODB_URI.replace(/\/\/.*:.*@/, '//***:***@')}`); // Hide credentials in logs
mongoose.connect(MONGODB_URI)
  .then(() => console.log("✅ Connected to MongoDB. Starting Time Machine..."))
  .catch(err => {
    console.error("❌ MongoDB connection error:", err.message);
    console.error("\n💡 Tip: Ensure MONGODB_URI is set correctly in your .env file or environment variables.");
    process.exit(1);
  });

// Vellore Transit Segments (from your actual stop data)
// Format: "FromStop->ToStop"
const SEGMENTS = [
  // Main Route 1 (North-South Corridor)
  "VLR_001->VLR_002", // New Bus Stand -> Vellore Fort (High Traffic Zone)
  "VLR_002->VLR_003", // Fort -> Katpadi Junction
  "VLR_003->VLR_004", // Katpadi -> Bagayam
  "VLR_004->VLR_005", // Bagayam -> VIT Main Gate
  "VLR_005->VLR_006", // VIT Main -> VIT North Gate
  
  // Route 2 (East-West)
  "VLR_007->VLR_008", // Sathuvachari -> Thottapalayam
  "VLR_008->VLR_009", // Thottapalayam -> CMC Hospital
  "VLR_009->VLR_010", // CMC -> Gandhi Nagar
  
  // VIT Campus Loop
  "VLR_010->VLR_011", // VIT Gate 1 -> Gate 2 (Student Heavy)
  "VLR_011->VLR_012", // Gate 2 -> Academic Block
  "VLR_012->VLR_010", // Academic Block -> Gate 1
  
  // Commercial Zone
  "VLR_030->VLR_005", // Circuit House -> Pillayar Koil Street (Heavy Traffic)
  "VLR_002->VLR_030", // Fort -> Circuit House (Market Area)
  
  // Residential Areas
  "VLR_020->VLR_021", // Officers Colony -> Green Circle
  "VLR_021->VLR_022"  // Green Circle -> Vasanthapuram
];

const generateTraffic = async () => {
  const records = [];
  const now = new Date();
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  console.log(`⏳ Generating ${DAYS_TO_SIMULATE} days of traffic history...`);
  console.log(`📍 Simulating ${SEGMENTS.length} road segments`);
  console.log(`🚌 Simulating ${BUS_COUNT} buses per hour\n`);

  for (let d = 0; d < DAYS_TO_SIMULATE; d++) {
    // Go back 'd' days from current date
    const date = new Date();
    date.setDate(now.getDate() - d);
    const dayName = dayNames[date.getDay()];
    const isWeekend = (dayName === "Sunday" || dayName === "Saturday");

    // Simulate 24 hours
    for (let hour = 0; hour < 24; hour++) {
      
      // TRAFFIC LOGIC: Realistic Vellore patterns
      let baseSpeed = 35; // Free flow speed (km/h)
      
      if (!isWeekend) {
        // Weekday patterns
        if ((hour >= 8 && hour <= 10)) {
          // Morning Rush Hour (School/College/Office start)
          baseSpeed = 12; // Heavy congestion
        } else if ((hour >= 17 && hour <= 19)) {
          // Evening Rush Hour (Office close, peak shopping)
          baseSpeed = 10; // Severe congestion
        } else if (hour >= 11 && hour <= 16) {
          // Midday (Moderate traffic)
          baseSpeed = 25;
        } else if (hour >= 20 && hour <= 23) {
          // Evening (Light-Moderate)
          baseSpeed = 30;
        } else {
          // Early morning (Very light)
          baseSpeed = 40;
        }
      } else {
        // Weekend: Generally lighter, but some shopping peaks
        if (hour >= 10 && hour <= 13) {
          baseSpeed = 22; // Weekend shopping
        } else if (hour >= 17 && hour <= 20) {
          baseSpeed = 28; // Weekend evening
        } else {
          baseSpeed = 38; // Free flow
        }
      }

      // Generate data for each segment (with variance per segment)
      SEGMENTS.forEach((seg, idx) => {
        // Some segments are naturally slower (market areas, narrow roads)
        const segmentMultiplier = seg.includes("VLR_002") || seg.includes("VLR_030") 
          ? 0.85  // Fort/Market area is always slower
          : seg.includes("VLR_010") || seg.includes("VLR_011")
          ? 0.90  // VIT area has speed bumps
          : 1.0;  // Normal segments

        // Generate multiple data points per hour for better accuracy (simulate 3-5 buses)
        const samplesThisHour = Math.floor(Math.random() * 3) + 3;
        
        for (let sample = 0; sample < samplesThisHour; sample++) {
          // Add random variance (+/- 5 km/h) to simulate real-world variation
          const variance = (Math.random() * 10 - 5);
          const speed = Math.max(5, Math.round((baseSpeed * segmentMultiplier) + variance));
          
          // Classify traffic level
          let level = "light";
          if (speed < 15) level = "heavy";
          else if (speed < 25) level = "medium";

          // Create timestamp with minute variance within the hour
          const recordTime = new Date(date);
          recordTime.setHours(hour, Math.floor(Math.random() * 60), 0, 0);

          records.push({
            bus_id: `SIM-BUS-${Math.floor(Math.random() * BUS_COUNT) + 1}`,
            route_id: idx % 2 === 0 ? "ROUTE_1" : "ROUTE_2",
            timestamp: recordTime,
            day_of_week: dayName,
            hour_of_day: hour,
            segment: seg,
            speed: speed,
            traffic_level: level
          });
        }
      });
    }
    
    // Progress indicator
    if ((d + 1) % 5 === 0) {
      console.log(`📅 Progress: ${d + 1}/${DAYS_TO_SIMULATE} days simulated...`);
    }
  }

  // Bulk Insert to MongoDB
  try {
    console.log(`\n💾 Inserting ${records.length} records into database...`);
    await TripHistory.insertMany(records);
    
    console.log(`\n✅ Success! Seeded ${records.length} historical traffic records.`);
    console.log(`📊 Coverage: ${DAYS_TO_SIMULATE} days × ${SEGMENTS.length} segments × ~${Math.floor(records.length / (DAYS_TO_SIMULATE * SEGMENTS.length))} samples/segment\n`);
    console.log(`🚀 Your backend is now "Smart"!`);
    console.log(`📡 Restart your backend server to activate intelligent routing.\n`);
    console.log(`🧪 Test by selecting different stops at different times of day.`);
    console.log(`   You should see ETA variations based on rush hour patterns.\n`);
    
    // Display sample statistics
    const rushHourAvg = records
      .filter(r => !r.day_of_week.includes("Sunday") && !r.day_of_week.includes("Saturday") && (r.hour_of_day >= 8 && r.hour_of_day <= 10 || r.hour_of_day >= 17 && r.hour_of_day <= 19))
      .reduce((sum, r) => sum + r.speed, 0) / records.filter(r => !r.day_of_week.includes("Sunday") && !r.day_of_week.includes("Saturday") && (r.hour_of_day >= 8 && r.hour_of_day <= 10 || r.hour_of_day >= 17 && r.hour_of_day <= 19)).length;
    
    const normalAvg = records
      .filter(r => r.hour_of_day >= 0 && r.hour_of_day <= 7 || r.hour_of_day >= 20 && r.hour_of_day <= 23)
      .reduce((sum, r) => sum + r.speed, 0) / records.filter(r => r.hour_of_day >= 0 && r.hour_of_day <= 7 || r.hour_of_day >= 20 && r.hour_of_day <= 23).length;
    
    console.log(`📈 Average Speeds:`);
    console.log(`   Rush Hour (8-10 AM, 5-7 PM): ${Math.round(rushHourAvg)} km/h`);
    console.log(`   Normal Hours (Night): ${Math.round(normalAvg)} km/h`);
    console.log(`   Difference: ${Math.round(normalAvg - rushHourAvg)} km/h slower during rush hour\n`);
    
    process.exit(0);
  } catch (err) {
    console.error("\n❌ Error inserting records:", err.message);
    process.exit(1);
  }
};

// Execute the seeder
generateTraffic();
