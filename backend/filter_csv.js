#!/usr/bin/env node

/**
 * Filter TripHistory CSV
 * Remove rows where segment contains undefined stops:
 * - VLR_038, VLR_047, VLR_052, VLR_054, VLR_081, VLR_082
 *
 * Input:  trip_history_clean.csv
 * Output: trip_history_ml_ready.csv
 */

const fs = require('fs');
const path = require('path');

const MISSING_STOPS = ['VLR_038', 'VLR_047', 'VLR_052', 'VLR_054', 'VLR_081', 'VLR_082'];

async function main() {
  console.log('\n╔════════════════════════════════════════════════════════════════╗');
  console.log('║        FILTERING TRIPHISTORY CSV - REMOVING MISSING STOPS     ║');
  console.log('╚════════════════════════════════════════════════════════════════╝\n');

  try {
    const inputPath = path.join(__dirname, 'trip_history_clean.csv');
    const outputPath = path.join(__dirname, 'trip_history_ml_ready.csv');

    // Read input file
    console.log(`📖 Reading: ${inputPath}`);
    const fileContent = fs.readFileSync(inputPath, 'utf-8');
    const lines = fileContent.split('\n');

    console.log(`   Total lines: ${lines.length}\n`);

    // Parse CSV
    const headers = lines[0];
    const dataLines = lines.slice(1).filter(line => line.trim().length > 0);

    console.log(`   Header: ${headers}`);
    console.log(`   Data rows: ${dataLines.length}\n`);

    // Find segment column index
    const headerArray = headers.split(',');
    const segmentIndex = headerArray.indexOf('segment');

    if (segmentIndex === -1) {
      throw new Error('segment column not found in CSV');
    }

    console.log(`   Segment column index: ${segmentIndex}\n`);

    // Filter rows
    console.log(`🔍 Filtering out segments containing:\n`);
    MISSING_STOPS.forEach(stop => {
      console.log(`   - ${stop}`);
    });
    console.log();

    const removedSegments = new Set();
    const filteredLines = [headers];
    let removedCount = 0;

    dataLines.forEach((line, idx) => {
      const fields = line.split(',');
      const segment = fields[segmentIndex];

      // Check if segment contains any missing stop
      const hasMissingStop = MISSING_STOPS.some(stop => segment && segment.includes(stop));

      if (!hasMissingStop) {
        filteredLines.push(line);
      } else {
        removedCount++;
        removedSegments.add(segment);
      }
    });

    // Write output file
    console.log(`💾 Writing filtered data to: ${outputPath}`);
    fs.writeFileSync(outputPath, filteredLines.join('\n'), 'utf-8');
    console.log(`✅ File written successfully\n`);

    // Calculate statistics
    const remainingDataRows = filteredLines.length - 1; // Exclude header
    const distinctSegments = new Set();

    filteredLines.slice(1).forEach(line => {
      const fields = line.split(',');
      const segment = fields[segmentIndex];
      if (segment && segment.trim().length > 0) {
        distinctSegments.add(segment);
      }
    });

    // Print results
    console.log('═══════════════════════════════════════════════════════════════');
    console.log('📊 FILTERING RESULTS');
    console.log('═══════════════════════════════════════════════════════════════\n');

    console.log(`⬜ Original rows (excluding header): ${dataLines.length}`);
    console.log(`🔴 Rows removed: ${removedCount}`);
    console.log(`✅ Rows remaining: ${remainingDataRows}\n`);

    const removalPercentage = ((removedCount / dataLines.length) * 100).toFixed(2);
    const retentionPercentage = ((remainingDataRows / dataLines.length) * 100).toFixed(2);

    console.log(`📊 Removal rate: ${removalPercentage}%`);
    console.log(`📈 Retention rate: ${retentionPercentage}%\n`);

    console.log('═══════════════════════════════════════════════════════════════');
    console.log('📋 SEGMENTS REMOVED');
    console.log('═══════════════════════════════════════════════════════════════\n');

    const sortedRemovedSegments = Array.from(removedSegments).sort();
    console.log(`Total distinct segments removed: ${sortedRemovedSegments.length}\n`);

    sortedRemovedSegments.forEach((segment, idx) => {
      console.log(`${idx + 1}. ${segment}`);
    });

    console.log();

    console.log('═══════════════════════════════════════════════════════════════');
    console.log('✅ DISTINCT SEGMENTS IN FILTERED DATA');
    console.log('═══════════════════════════════════════════════════════════════\n');

    const sortedSegments = Array.from(distinctSegments).sort();
    console.log(`Total distinct segments: ${sortedSegments.length}\n`);

    sortedSegments.forEach((segment, idx) => {
      console.log(`${idx + 1}. ${segment}`);
    });

    console.log();

    console.log('═══════════════════════════════════════════════════════════════');
    console.log('🔍 VERIFICATION: MISSING STOPS CHECK');
    console.log('═══════════════════════════════════════════════════════════════\n');

    let missingStopsFound = false;

    MISSING_STOPS.forEach(stop => {
      const found = Array.from(distinctSegments).some(segment => segment.includes(stop));
      const status = found ? '❌' : '✅';
      console.log(`${status} ${stop}: ${found ? 'FOUND (ERROR)' : 'Not found (good)'}`);
      if (found) missingStopsFound = true;
    });

    console.log();

    if (missingStopsFound) {
      console.log('❌ WARNING: Some missing stops were NOT fully removed!\n');
    } else {
      console.log('✅ CONFIRMED: No missing stops remain in filtered data!\n');
    }

    console.log('═══════════════════════════════════════════════════════════════');
    console.log('📁 OUTPUT SUMMARY');
    console.log('═══════════════════════════════════════════════════════════════\n');

    console.log(`Input file:        trip_history_clean.csv`);
    console.log(`Output file:       trip_history_ml_ready.csv`);
    console.log(`Location:          ${outputPath.replace(/\\/g, '/')}`);
    console.log(`File size:         ${fs.statSync(outputPath).size.toLocaleString()} bytes\n`);

    console.log(`Total rows exported: ${remainingDataRows}`);
    console.log(`Distinct segments:  ${distinctSegments.size}`);
    console.log(`Missing stops:      0 (all removed)\n`);

    console.log('✅ FILTERING COMPLETE!\n');

  } catch (err) {
    console.error('❌ Error:', err.message);
    process.exit(1);
  }
}

main().catch(err => {
  console.error('❌ Fatal error:', err.message);
  process.exit(1);
});
