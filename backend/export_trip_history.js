#!/usr/bin/env node

/**
 * Export TripHistory to CSV
 * - Connects to MongoDB
 * - Fetches all TripHistory records
 * - Filters by: speed (5-80 km/h) & segment not null
 * - Sorts by timestamp ascending
 * - Exports to trip_history_clean.csv
 * - Columns: bus_id, route_id, timestamp, day_of_week, hour_of_day, segment, speed, traffic_level, coordinates
 */

require('dotenv').config();
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const TripHistory = require('./models/TripHistory');

async function main() {
  console.log('\n╔════════════════════════════════════════════════════════════════╗');
  console.log('║          EXPORTING TRIPHISTORY TO CSV                         ║');
  console.log('╚════════════════════════════════════════════════════════════════╝\n');

  try {
    // Connect to MongoDB
    const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/smart_transit';
    console.log(`🔌 Connecting to MongoDB: ${mongoUri}`);
    await mongoose.connect(mongoUri);
    console.log('✅ Connected successfully\n');

    // Fetch records with filters
    console.log('📊 Fetching TripHistory records...');
    console.log('   Filters: speed >= 5 AND speed <= 80 AND segment != null');
    
    const records = await TripHistory.find({
      speed: { $gte: 5, $lte: 80 },
      segment: { $ne: null }
    })
    .sort({ timestamp: 1 })
    .lean();

    console.log(`✅ Fetched ${records.length} records matching filters\n`);

    // Prepare CSV data
    console.log('📝 Preparing CSV data...');
    
    const csvHeaders = [
      'bus_id',
      'route_id',
      'timestamp',
      'day_of_week',
      'hour_of_day',
      'segment',
      'speed',
      'traffic_level',
      'coordinates'
    ];

    const csvRows = [csvHeaders.join(',')];

    records.forEach((record, idx) => {
      // Format coordinates as "lat,lon" or empty if not available
      let coordinatesStr = '';
      if (record.coordinates && Array.isArray(record.coordinates) && record.coordinates.length === 2) {
        const [lon, lat] = record.coordinates;
        coordinatesStr = `${lat},${lon}`;
      }

      // Escape CSV fields that contain commas or quotes
      const escape = (field) => {
        const str = String(field !== undefined && field !== null ? field : '');
        if (str.includes(',') || str.includes('"') || str.includes('\n')) {
          return `"${str.replace(/"/g, '""')}"`;
        }
        return str;
      };

      const row = [
        escape(record.bus_id || ''),
        escape(record.route_id || ''),
        escape(record.timestamp || ''),
        escape(record.day_of_week || ''),
        escape(record.hour_of_day !== undefined ? record.hour_of_day : ''),
        escape(record.segment || ''),
        escape(record.speed !== undefined ? record.speed : ''),
        escape(record.traffic_level || ''),
        escape(coordinatesStr)
      ];

      csvRows.push(row.join(','));
    });

    // Write to CSV file
    const outputPath = path.join(__dirname, 'trip_history_clean.csv');
    console.log(`💾 Writing to file: ${outputPath}`);
    
    fs.writeFileSync(outputPath, csvRows.join('\n'), 'utf-8');
    console.log(`✅ CSV file written successfully\n`);

    // Print statistics
    console.log('═══════════════════════════════════════════════════════════════');
    console.log('📊 EXPORT STATISTICS');
    console.log('═══════════════════════════════════════════════════════════════\n');
    
    console.log(`✅ Total Records Exported:  ${records.length}`);
    console.log(`📁 Output File:             trip_history_clean.csv`);
    console.log(`📍 File Location:           ${outputPath}`);
    console.log(`📋 Columns:                 ${csvHeaders.length}`);
    console.log(`   - bus_id, route_id, timestamp, day_of_week, hour_of_day`);
    console.log(`   - segment, speed, traffic_level, coordinates\n`);

    // Breakdown by segment
    console.log('═══════════════════════════════════════════════════════════════');
    console.log('📊 BREAKDOWN BY SEGMENT');
    console.log('═══════════════════════════════════════════════════════════════\n');

    const segmentCounts = {};
    records.forEach(record => {
      const segment = record.segment || 'null';
      segmentCounts[segment] = (segmentCounts[segment] || 0) + 1;
    });

    const sortedSegments = Object.entries(segmentCounts)
      .sort((a, b) => b[1] - a[1]);

    sortedSegments.forEach((entry, idx) => {
      const [segment, count] = entry;
      const percentage = ((count / records.length) * 100).toFixed(1);
      console.log(`${idx + 1}. ${segment.padEnd(20)} : ${count.toString().padStart(5)} records (${percentage.padStart(5)}%)`);
    });

    console.log(`\nTotal Distinct Segments: ${sortedSegments.length}\n`);

    // Breakdown by hour
    console.log('═══════════════════════════════════════════════════════════════');
    console.log('⏰ BREAKDOWN BY HOUR');
    console.log('═══════════════════════════════════════════════════════════════\n');

    const hourCounts = {};
    records.forEach(record => {
      const hour = record.hour_of_day !== undefined ? record.hour_of_day : 'unknown';
      hourCounts[hour] = (hourCounts[hour] || 0) + 1;
    });

    for (let hour = 0; hour < 24; hour++) {
      const count = hourCounts[hour] || 0;
      const percentage = ((count / records.length) * 100).toFixed(1);
      const bar = '█'.repeat(Math.round(count / records.length * 100 / 5));
      console.log(`Hour ${String(hour).padStart(2, '0')}:00 | ${count.toString().padStart(5)} records (${percentage.padStart(5)}%) ${bar}`);
    }

    console.log();

    // Sample records
    console.log('═══════════════════════════════════════════════════════════════');
    console.log('📋 SAMPLE RECORDS (First 5)');
    console.log('═══════════════════════════════════════════════════════════════\n');

    records.slice(0, 5).forEach((record, idx) => {
      console.log(`${idx + 1}. bus_id: ${record.bus_id}`);
      console.log(`   segment: ${record.segment}`);
      console.log(`   speed: ${record.speed} km/h`);
      console.log(`   traffic_level: ${record.traffic_level}`);
      console.log(`   timestamp: ${record.timestamp}`);
      console.log(`   coordinates: [${record.coordinates ? record.coordinates[1] + ', ' + record.coordinates[0] : 'N/A'}]`);
      console.log();
    });

    // Speed statistics
    console.log('═══════════════════════════════════════════════════════════════');
    console.log('📈 SPEED STATISTICS');
    console.log('═══════════════════════════════════════════════════════════════\n');

    const speeds = records.map(r => r.speed).filter(s => s !== undefined && s !== null);
    const avgSpeed = speeds.reduce((a, b) => a + b, 0) / speeds.length;
    const minSpeed = Math.min(...speeds);
    const maxSpeed = Math.max(...speeds);
    const medianSpeed = speeds.sort((a, b) => a - b)[Math.floor(speeds.length / 2)];

    console.log(`Min Speed:    ${minSpeed.toFixed(2)} km/h`);
    console.log(`Max Speed:    ${maxSpeed.toFixed(2)} km/h`);
    console.log(`Avg Speed:    ${avgSpeed.toFixed(2)} km/h`);
    console.log(`Median Speed: ${medianSpeed.toFixed(2)} km/h\n`);

    // Traffic level breakdown
    console.log('═══════════════════════════════════════════════════════════════');
    console.log('🚗 TRAFFIC LEVEL BREAKDOWN');
    console.log('═══════════════════════════════════════════════════════════════\n');

    const trafficCounts = {};
    records.forEach(record => {
      const level = record.traffic_level || 'unknown';
      trafficCounts[level] = (trafficCounts[level] || 0) + 1;
    });

    const trafficLevels = ['light', 'medium', 'heavy', 'unknown'];
    trafficLevels.forEach(level => {
      const count = trafficCounts[level] || 0;
      const percentage = ((count / records.length) * 100).toFixed(1);
      console.log(`${level.padEnd(10)} : ${count.toString().padStart(5)} records (${percentage.padStart(5)}%)`);
    });

    console.log('\n✅ EXPORT COMPLETE!\n');

  } catch (err) {
    console.error('❌ Error:', err.message);
    process.exit(1);
  } finally {
    await mongoose.connection.close();
    console.log('✅ MongoDB connection closed.\n');
  }
}

main().catch(err => {
  console.error('❌ Fatal error:', err.message);
  process.exit(1);
});
