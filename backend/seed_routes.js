/* Routes Seeder
   Populates Routes collection with demo route data
   Usage: node seed_routes.js
*/

require('dotenv').config();
const mongoose = require('mongoose');
const Routes = require('./models/Routes');

const MONGODB_URI = process.env.MONGODB_URI;

async function seedRoutes() {
  if (!MONGODB_URI) {
    console.error('❌ MONGODB_URI not set in .env');
    process.exit(1);
  }

  try {
    console.log('🔌 Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    // Clear existing routes
    await Routes.deleteMany({});
    console.log('🗑️ Cleared existing routes');

    // Define demo routes
    const demoRoutes = [
      {
        route_id: "ROUTE_1",
        route_name: "VIT Main Line",
        segments: [
          { from: "VLR_001", to: "VLR_002", distance_m: 1200 },
          { from: "VLR_002", to: "VLR_003", distance_m: 900 },
          { from: "VLR_003", to: "VLR_004", distance_m: 1500 }
        ]
      },
      {
        route_id: "ROUTE_2",
        route_name: "VIT Outer Loop",
        segments: [
          { from: "VLR_010", to: "VLR_011", distance_m: 800 },
          { from: "VLR_011", to: "VLR_012", distance_m: 1400 },
          { from: "VLR_012", to: "VLR_013", distance_m: 1100 },
          { from: "VLR_013", to: "VLR_014", distance_m: 900 },
          { from: "VLR_014", to: "VLR_015", distance_m: 1600 }
        ]
      }
    ];

    // Insert demo routes
    const result = await Routes.insertMany(demoRoutes);
    console.log(`✅ Seeded ${result.length} route(s)`);

    result.forEach(route => {
      console.log(`   📍 ${route.route_id}: ${route.route_name}`);
      console.log(`      Segments: ${route.segments.length}`);
      route.segments.forEach(seg => {
        console.log(`        ${seg.from} → ${seg.to} (${seg.distance_m}m)`);
      });
    });

    await mongoose.connection.close();
    console.log('✅ Seeding complete');
    process.exit(0);
  } catch (err) {
    console.error('❌ Seeding error:', err.message);
    process.exit(1);
  }
}

seedRoutes();
