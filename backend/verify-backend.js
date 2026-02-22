#!/usr/bin/env node

/**
 * Smart Transit - Backend Verifier
 * Checks if backend is properly responding before frontend attempts to connect
 */

const http = require('http');
const https = require('https');

const args = process.argv.slice(2);
const backendURL = args[0] || (process.env.BACKEND_URL || 'http://127.0.0.1:3100');

console.log('🔌 Smart Transit Backend Verifier\n');
console.log(`Testing: ${backendURL}\n`);

const protocol = backendURL.startsWith('https') ? https : http;
const healthEndpoint = `${backendURL}/api/health`;

protocol.get(healthEndpoint, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    console.log(`Status: ${res.statusCode}\n`);

    try {
      const json = JSON.parse(data);
      console.log('✅ Backend is online!\n');
      console.log('Response:');
      console.log(JSON.stringify(json, null, 2));
      console.log('');

      if (json.mongodb === 'connected') {
        console.log('✅ MongoDB connected');
        process.exit(0);
      } else if (json.mongodb === 'disconnected') {
        console.log('⚠️  MongoDB not connected');
        console.log('  - Check MONGODB_URI environment variable');
        console.log('  - Ensure MongoDB Atlas network access allows your IP');
        process.exit(1);
      }
    } catch (e) {
      console.log('❌ Backend returned invalid JSON:');
      console.log(data);
      process.exit(1);
    }
  });

}).on('error', (err) => {
  console.log('❌ Cannot connect to backend:\n');
  console.log(`Error: ${err.message}\n`);
  console.log('Possible causes:');
  console.log('  1. Backend not running');
  console.log('  2. Wrong URL');
  console.log('  3. Backend crashed');
  console.log('  4. Network issue\n');
  console.log('Check:');
  console.log(`  - Is backend running at ${backendURL}?`);
  console.log('  - Check backend logs for errors');
  process.exit(1);
});
