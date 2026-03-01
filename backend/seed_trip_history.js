/* TripHistory Seeder
   Populates TripHistory collection with realistic segment speed data for ML testing
   Usage: node seed_trip_history.js
*/

require('dotenv').config();
const mongoose = require('mongoose');
const TripHistory = require('./models/TripHistory');

const MONGODB_URI = process.env.MONGODB_URI;

// Helper: Generate random speed within range
function randomSpeed(min, max) {
  return Math.round((Math.random() * (max - min) + min) * 10) / 10;
}

// Helper: Get day of week string
function getDayOfWeek(date) {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return days[date.getDay()];
}

async function seedTripHistory() {
  if (!MONGODB_URI) {
    console.error('❌ MONGODB_URI not set in .env');
    process.exit(1);
  }

  try {
    console.log('🔌 Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    // Clear existing TripHistory for ROUTE_1
    const deleteResult = await TripHistory.deleteMany({ route_id: "ROUTE_1" });
    console.log(`🗑️ Cleared ${deleteResult.deletedCount} existing ROUTE_1 trip records`);

    // Define segments with speed ranges
    const segments = [
      { 
        id: "VLR_001->VLR_002",
        minSpeed: 26,
        maxSpeed: 30,
        name: "Segment 1"
      },
      { 
        id: "VLR_002->VLR_003",
        minSpeed: 22,
        maxSpeed: 26,
        name: "Segment 2"
      },
      { 
        id: "VLR_003->VLR_004",
        minSpeed: 20,
        maxSpeed: 24,
        name: "Segment 3"
      }
    ];

    const RECORDS_PER_SEGMENT = 10;
    const TOTAL_WINDOW_MINUTES = 60;
    const tripRecords = [];
    const now = new Date();

    console.log('\n📊 Generating trip history data...');

    segments.forEach((segment, segIdx) => {
      console.log(`\n   ${segment.name} (${segment.id})`);
      console.log(`   Speed range: ${segment.minSpeed}–${segment.maxSpeed} km/h`);
      
      const segmentSpeeds = [];

      for (let i = 0; i < RECORDS_PER_SEGMENT; i++) {
        // Distribute timestamps over the last 60 minutes
        // Most recent record should have smallest offset
        const minutesAgo = Math.floor((RECORDS_PER_SEGMENT - 1 - i) * (TOTAL_WINDOW_MINUTES / RECORDS_PER_SEGMENT));
        const timestamp = new Date(now.getTime() - minutesAgo * 60 * 1000);
        
        const speed = randomSpeed(segment.minSpeed, segment.maxSpeed);
        segmentSpeeds.push(speed);

        // Determine traffic level based on speed
        let trafficLevel = "normal";
        if (speed < (segment.minSpeed + segment.maxSpeed) / 2 - 1) {
          trafficLevel = "moderate";
        } else if (speed < segment.minSpeed + 1) {
          trafficLevel = "heavy";
        }

        tripRecords.push({
          bus_id: `BUS_00${(segIdx % 3) + 1}`, // Rotate between BUS_001, BUS_002, BUS_003
          route_id: "ROUTE_1",
          timestamp: timestamp,
          day_of_week: getDayOfWeek(timestamp),
          hour_of_day: timestamp.getHours(),
          segment: segment.id,
          speed: speed,
          traffic_level: trafficLevel
        });
      }

      // Calculate statistics for display
      const avgSpeed = (segmentSpeeds.reduce((a, b) => a + b, 0) / segmentSpeeds.length).toFixed(1);
      const minRecorded = Math.min(...segmentSpeeds).toFixed(1);
      const maxRecorded = Math.max(...segmentSpeeds).toFixed(1);
      
      console.log(`   Generated ${RECORDS_PER_SEGMENT} records`);
      console.log(`   Avg: ${avgSpeed} km/h | Min: ${minRecorded} km/h | Max: ${maxRecorded} km/h`);
    });

    // Insert all records
    const result = await TripHistory.insertMany(tripRecords);
    console.log(`\n✅ Successfully inserted ${result.length} trip history records`);

    // Display summary
    console.log('\n📈 Summary:');
    console.log(`   Total records: ${result.length}`);
    console.log(`   Segments covered: ${segments.length}`);
    console.log(`   Records per segment: ${RECORDS_PER_SEGMENT}`);
    console.log(`   Time window: Last ${TOTAL_WINDOW_MINUTES} minutes`);
    console.log(`   Route: ROUTE_1`);

    // Display sample records
    console.log('\n📋 Sample records (latest per segment):');
    for (const segment of segments) {
      const latest = await TripHistory.findOne({ segment: segment.id })
        .sort({ timestamp: -1 })
        .lean();
      
      if (latest) {
        const timeAgo = Math.round((now - latest.timestamp) / 1000 / 60);
        console.log(`   ${segment.id}`);
        console.log(`      Speed: ${latest.speed} km/h | ${timeAgo}m ago | ${latest.traffic_level}`);
      }
    }

    await mongoose.connection.close();
    console.log('\n✅ Database connection closed');
    console.log('🎉 Seeding complete!\n');
    process.exit(0);

  } catch (err) {
    console.error('❌ Seeding error:', err.message);
    await mongoose.connection.close();
    process.exit(1);
  }
}

seedTripHistory();
