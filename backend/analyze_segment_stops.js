#!/usr/bin/env node

/**
 * Analyze Stop-Segment Consistency
 * - Extract from_stop and to_stop for each distinct segment
 * - Verify both stops exist in STOP_DATA
 * - Report missing stop coordinates
 */

require('dotenv').config();
const mongoose = require('mongoose');
const TripHistory = require('./models/TripHistory');

// STOP_DATA from frontend/index.html lines 1791-1830
const STOP_DATA = [
  { stop_id: "VLR_001", name: "Chittoor Bus Stand (Katpadi)", latitude: 12.966476, longitude: 79.137207, route: [1] },
  { stop_id: "VLR_002", name: "Vellore New Bus Stand", latitude: 12.936475, longitude: 79.135892, route: [1, 3] },
  { stop_id: "VLR_003", name: "Katpadi Junction Bus Stop", latitude: 12.971469, longitude: 79.137102, route: [1, 5] },
  { stop_id: "VLR_004", name: "Vellore Old Bus Stand", latitude: 12.922607, longitude: 79.132382, route: [1, 2, 3, 4] },
  { stop_id: "VLR_005", name: "Bagayam Bus Stop", latitude: 12.879824, longitude: 79.134430, route: [1] },
  { stop_id: "VLR_006", name: "Ranipet Bus Stand", latitude: 12.932658, longitude: 79.341241, route: [3] },
  { stop_id: "VLR_007", name: "Arcot Bus Stand", latitude: 12.908278, longitude: 79.324944, route: [3] },
  { stop_id: "VLR_008", name: "VIT Main Gate Bus Stop", latitude: 12.968626, longitude: 79.155955, route: [1, 2] },
  { stop_id: "VLR_009", name: "VIT Gate 11 Bus Stop", latitude: 12.966855, longitude: 79.163681, route: [2] },
  { stop_id: "VLR_010", name: "Auxilium College Bus Stop", latitude: 12.958578, longitude: 79.141752, route: [1] },
  { stop_id: "VLR_011", name: "Don Bosco Bus Stop", latitude: 12.953648, longitude: 79.141813, route: [1] },
  { stop_id: "VLR_012", name: "Silk Mill Bus Stop", latitude: 12.950214, longitude: 79.137357, route: [1, 2] },
  { stop_id: "VLR_013", name: "Virthampattu Bus Stop", latitude: 12.947251, longitude: 79.137298, route: [1] },
  { stop_id: "VLR_014", name: "Kangeyanallur Bus Stop", latitude: 12.953365, longitude: 79.152380, route: [2] },
  { stop_id: "VLR_015", name: "Gudiyatham Road Jn Bus Stop", latitude: 12.991947, longitude: 79.134455, route: [5] },
  { stop_id: "VLR_016", name: "Green Circle Bus Stop", latitude: 12.933905, longitude: 79.138261, route: [1, 2, 5] },
  { stop_id: "VLR_017", name: "CMC Main Gate Bus Stop", latitude: 12.925612, longitude: 79.133463, route: [1] },
  { stop_id: "VLR_018", name: "National Theatre Bus Stop", latitude: 12.930253, longitude: 79.134339, route: [1] },
  { stop_id: "VLR_019", name: "Pachaiyappas Silks Bus Stop", latitude: 12.928760, longitude: 79.133498, route: [2] },
  { stop_id: "VLR_020", name: "Vellore Fort Bus Stop", latitude: 12.920166, longitude: 79.131934, route: [1] },
  { stop_id: "VLR_021", name: "Raja Theatre Bus Stop", latitude: 12.914978, longitude: 79.132360, route: [4] },
  { stop_id: "VLR_022", name: "Thottapalayam Bus Stop", latitude: 12.929822, longitude: 79.133769, route: [2] },
  { stop_id: "VLR_023", name: "Vellore Collectorate Bus Stop", latitude: 12.935904, longitude: 79.150285, route: [3] },
  { stop_id: "VLR_024", name: "CMC Ranipet Campus Bus Stop", latitude: 12.940578, longitude: 79.238371, route: [3] },
  { stop_id: "VLR_025", name: "Melvisharam Bus Stop", latitude: 12.923716, longitude: 79.275651, route: [3] },
  { stop_id: "VLR_026", name: "Velapadi Bus Stop", latitude: 12.938072, longitude: 79.180348, route: [5] },
  { stop_id: "VLR_027", name: "Sainathapuram Bus Stop", latitude: 12.898338, longitude: 79.134862, route: [4] },
  { stop_id: "VLR_028", name: "Thorapadi Bus Stop", latitude: 12.893424, longitude: 79.124958, route: [1] },
  { stop_id: "VLR_029", name: "Vellore Central Prison Bus Stop", latitude: 12.887733, longitude: 79.122362, route: [4] },
  { stop_id: "VLR_030", name: "CMC Bagayam Bus Stop", latitude: 12.879434, longitude: 79.130284, route: [1] },
  { stop_id: "VLR_031", name: "Sripuram Golden Temple Bus Stop", latitude: 12.870224, longitude: 79.088109, route: [4] },
  { stop_id: "VLR_032", name: "Adukkamparai Bus Stop", latitude: 12.846146, longitude: 79.135788, route: [4] },
  { stop_id: "VLR_033", name: "Konavattam Bus Stop", latitude: 12.922699, longitude: 79.112934, route: [5] },
  { stop_id: "VLR_034", name: "Thiruvalam Bus Stop", latitude: 12.995986, longitude: 79.263269, route: [5] }
];

// Create lookup map for O(1) stop queries
const stopMap = new Map();
STOP_DATA.forEach(stop => {
  stopMap.set(stop.stop_id, {
    name: stop.name,
    latitude: stop.latitude,
    longitude: stop.longitude
  });
});

async function main() {
  console.log('\n╔════════════════════════════════════════════════════════════════╗');
  console.log('║         STOP-SEGMENT CONSISTENCY ANALYSIS                      ║');
  console.log('╚════════════════════════════════════════════════════════════════╝\n');

  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/smart_transit');
    console.log('✅ Connected to MongoDB\n');

    // Get distinct segments
    const segments = await TripHistory.distinct('segment');
    console.log(`📊 Total Distinct Segments: ${segments.length}\n`);

    // Analyze each segment
    const segmentAnalysis = [];
    const missingStops = new Set();
    const segmentsWithMissingCoords = [];

    for (const segment of segments) {
      if (!segment) {
        console.log('⚠️  Null segment found - skipping');
        continue;
      }

      // Parse segment format: "VLR_001->VLR_002"
      const parts = segment.split('->');
      if (parts.length !== 2) {
        console.log(`⚠️  Invalid segment format: ${segment}`);
        continue;
      }

      const fromStop = parts[0].trim();
      const toStop = parts[1].trim();

      // Check if both stops exist in STOP_DATA
      const fromExists = stopMap.has(fromStop);
      const toExists = stopMap.has(toStop);

      const fromCoords = fromExists ? {
        lat: stopMap.get(fromStop).latitude,
        lon: stopMap.get(fromStop).longitude
      } : null;

      const toCoords = toExists ? {
        lat: stopMap.get(toStop).latitude,
        lon: stopMap.get(toStop).longitude
      } : null;

      // Record analysis
      const record = {
        segment,
        fromStop,
        toStop,
        fromExists,
        toExists,
        fromCoords,
        toCoords,
        distanceComputable: fromExists && toExists
      };

      segmentAnalysis.push(record);

      // Track missing stops
      if (!fromExists) missingStops.add(fromStop);
      if (!toExists) missingStops.add(toStop);

      // Track segments with missing coordinates
      if (!fromExists || !toExists) {
        segmentsWithMissingCoords.push(record);
      }
    }

    // Display results
    console.log('═══════════════════════════════════════════════════════════════');
    console.log('📋 SEGMENT-STOP MAPPING (All Segments)');
    console.log('═══════════════════════════════════════════════════════════════\n');

    segmentAnalysis.forEach((record, idx) => {
      const distanceStatus = record.distanceComputable ? '✅' : '❌';
      console.log(`${idx + 1}. ${record.segment}`);
      console.log(`   ${distanceStatus} From: ${record.fromStop} ${record.fromExists ? '(defined)' : '(MISSING)'}${record.fromCoords ? ` [${record.fromCoords.lat}, ${record.fromCoords.lon}]` : ''}`);
      console.log(`   ${distanceStatus} To:   ${record.toStop} ${record.toExists ? '(defined)' : '(MISSING)'}${record.toCoords ? ` [${record.toCoords.lat}, ${record.toCoords.lon}]` : ''}`);
      console.log();
    });

    // Summary statistics
    console.log('═══════════════════════════════════════════════════════════════');
    console.log('📊 SUMMARY STATISTICS');
    console.log('═══════════════════════════════════════════════════════════════\n');

    const computableCount = segmentAnalysis.filter(s => s.distanceComputable).length;
    const incomputableCount = segmentAnalysis.length - computableCount;

    console.log(`✅ Segments with complete coordinates:  ${computableCount}/${segments.length} (${((computableCount/segments.length)*100).toFixed(1)}%)`);
    console.log(`❌ Segments with missing coordinates:   ${incomputableCount}/${segments.length} (${((incomputableCount/segments.length)*100).toFixed(1)}%)\n`);

    // Display missing stops
    if (missingStops.size > 0) {
      console.log('═══════════════════════════════════════════════════════════════');
      console.log('🔴 MISSING STOPS (Not in STOP_DATA)');
      console.log('═══════════════════════════════════════════════════════════════\n');
      
      const sortedMissing = Array.from(missingStops).sort();
      sortedMissing.forEach((stop, idx) => {
        console.log(`${idx + 1}. ${stop}`);
      });
      console.log(`\nTotal Missing Stops: ${missingStops.size}\n`);

      // Search for these stops in codebase
      console.log('═══════════════════════════════════════════════════════════════');
      console.log('🔍 SEARCHING CODEBASE FOR MISSING STOP DEFINITIONS');
      console.log('═══════════════════════════════════════════════════════════════\n');

      const fs = require('fs');
      const path = require('path');

      sortedMissing.forEach(stopId => {
        console.log(`Looking for ${stopId}...`);
        
        // Search in key files
        const filesToSearch = [
          '../frontend/index.html',
          '../frontend/configure.html',
          '../backend/index.js',
          '../backend/seed_traffic.js',
          '../backend/models/User.js',
          '../backend/models/ActiveFleet.js'
        ];

        let found = false;

        filesToSearch.forEach(file => {
          try {
            const fullPath = path.join(__dirname, file);
            if (fs.existsSync(fullPath)) {
              const content = fs.readFileSync(fullPath, 'utf-8');
              if (content.includes(stopId)) {
                console.log(`   ⚠️  FOUND in: ${file}`);
                found = true;
              }
            }
          } catch (e) {
            // File not found or readable
          }
        });

        if (!found) {
          console.log(`   ❌ NOT FOUND in any code files`);
        }
        console.log();
      });
    }

    // Display segments with missing coordinates
    if (segmentsWithMissingCoords.length > 0) {
      console.log('═══════════════════════════════════════════════════════════════');
      console.log('⚠️  SEGMENTS WITH MISSING COORDINATES');
      console.log('═══════════════════════════════════════════════════════════════\n');

      segmentsWithMissingCoords.forEach((record, idx) => {
        console.log(`${idx + 1}. ${record.segment}`);
        if (!record.fromExists) {
          console.log(`   ❌ From Stop Missing: ${record.fromStop}`);
        }
        if (!record.toExists) {
          console.log(`   ❌ To Stop Missing: ${record.toStop}`);
        }
        console.log();
      });
    }

    // Final status
    console.log('═══════════════════════════════════════════════════════════════');
    console.log('✅ CONCLUSION FOR ML DISTANCE COMPUTATION');
    console.log('═══════════════════════════════════════════════════════════════\n');

    if (computableCount === segments.length) {
      console.log(`🎯 READY: All ${segments.length} segments have complete lat/lon coordinates.`);
      console.log('   ✅ Haversine distance computation can be applied to 100% of data.\n');
    } else {
      console.log(`⚠️  PARTIAL: ${computableCount}/${segments.length} segments (${((computableCount/segments.length)*100).toFixed(1)}%) have complete coordinates.`);
      console.log(`    ${incomputableCount} segment(s) have missing stop definitions.\n`);
      console.log(`   ❌ Cannot compute Haversine for segments with missing stops:\n`);
      segmentsWithMissingCoords.forEach(record => {
        console.log(`      - ${record.segment}`);
      });
      console.log();
    }

  } catch (err) {
    console.error('❌ Error:', err.message);
  } finally {
    await mongoose.connection.close();
    console.log('\n✅ Analysis complete. MongoDB connection closed.\n');
  }
}

main().catch(console.error);
