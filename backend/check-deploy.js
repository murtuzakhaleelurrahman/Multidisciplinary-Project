#!/usr/bin/env node

/**
 * Backend Deployment Readiness Checker
 * Run this before deploying to ensure everything is configured correctly
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 Smart Transit - Backend Deployment Checker\n');

let checks = [];
let warnings = [];
let errors = [];

// Check 1: Package.json exists
if (fs.existsSync('package.json')) {
  checks.push('✅ package.json found');
  const pkg = require('./package.json');
  
  // Check dependencies
  const requiredDeps = ['express', 'cors', 'mongoose', 'dotenv'];
  const missing = requiredDeps.filter(dep => !pkg.dependencies?.[dep]);
  
  if (missing.length === 0) {
    checks.push('✅ All required dependencies present');
  } else {
    errors.push(`❌ Missing dependencies: ${missing.join(', ')}`);
  }
  
  // Check start script
  if (pkg.scripts?.start) {
    checks.push('✅ Start script configured');
  } else {
    warnings.push('⚠️  No start script in package.json');
  }
} else {
  errors.push('❌ package.json not found');
}

// Check 2: Main file exists
if (fs.existsSync('index.js')) {
  checks.push('✅ index.js found');
  
  // Check for essential endpoints
  const content = fs.readFileSync('index.js', 'utf8');
  
  if (content.includes('app.post("/api/auth/login"')) {
    checks.push('✅ Login endpoint exists');
  } else {
    errors.push('❌ Login endpoint missing');
  }
  
  if (content.includes('app.get("/api/health"')) {
    checks.push('✅ Health check endpoint exists');
  } else {
    warnings.push('⚠️  No health check endpoint (recommended)');
  }
  
  if (content.includes('mongoose.connect')) {
    checks.push('✅ MongoDB connection configured');
  } else {
    warnings.push('⚠️  No MongoDB connection found');
  }
  
  if (content.includes('app.use(cors())')) {
    checks.push('✅ CORS enabled');
  } else {
    errors.push('❌ CORS not configured (frontend will fail)');
  }
  
  // Check for process.env usage
  if (content.includes('process.env.PORT')) {
    checks.push('✅ PORT environment variable supported');
  } else {
    warnings.push('⚠️  Hardcoded port (should use process.env.PORT)');
  }
  
  if (content.includes('process.env.MONGODB_URI')) {
    checks.push('✅ MONGODB_URI environment variable supported');
  } else {
    warnings.push('⚠️  MongoDB URI not using environment variable');
  }
} else {
  errors.push('❌ index.js not found');
}

// Check 3: Models directory
if (fs.existsSync('models')) {
  const models = fs.readdirSync('models').filter(f => f.endsWith('.js'));
  checks.push(`✅ Models directory found (${models.length} models)`);
} else {
  warnings.push('⚠️  No models directory');
}

// Check 4: .env.example
if (fs.existsSync('.env.example')) {
  checks.push('✅ .env.example found');
} else {
  warnings.push('⚠️  No .env.example (create one for documentation)');
}

// Check 5: Deployment configs
const deployConfigs = {
  'render.yaml': 'Render',
  'railway.toml': 'Railway',
  'Procfile': 'Heroku'
};

const foundConfigs = [];
for (const [file, platform] of Object.entries(deployConfigs)) {
  if (fs.existsSync(file)) {
    foundConfigs.push(platform);
  }
}

if (foundConfigs.length > 0) {
  checks.push(`✅ Deployment configs: ${foundConfigs.join(', ')}`);
} else {
  warnings.push('⚠️  No deployment config files (render.yaml, railway.toml, Procfile)');
}

// Check 6: .gitignore
if (fs.existsSync('.gitignore')) {
  const gitignore = fs.readFileSync('.gitignore', 'utf8');
  if (gitignore.includes('node_modules')) {
    checks.push('✅ .gitignore includes node_modules');
  } else {
    warnings.push('⚠️  .gitignore should include node_modules');
  }
  
  if (gitignore.includes('.env')) {
    checks.push('✅ .gitignore includes .env');
  } else {
    errors.push('❌ .gitignore must include .env (security)');
  }
} else {
  warnings.push('⚠️  No .gitignore file');
}

// Print results
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

if (checks.length > 0) {
  console.log('PASSED CHECKS:');
  checks.forEach(check => console.log(`  ${check}`));
  console.log('');
}

if (warnings.length > 0) {
  console.log('WARNINGS:');
  warnings.forEach(warning => console.log(`  ${warning}`));
  console.log('');
}

if (errors.length > 0) {
  console.log('ERRORS:');
  errors.forEach(error => console.log(`  ${error}`));
  console.log('');
}

console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

// Summary
const total = checks.length + warnings.length + errors.length;
const score = Math.round((checks.length / total) * 100);

console.log(`Score: ${score}%\n`);

if (errors.length === 0) {
  console.log('🎉 READY FOR DEPLOYMENT!\n');
  console.log('Next steps:');
  console.log('  1. Create MongoDB Atlas account (free)');
  console.log('  2. Deploy to Render/Railway/Fly.io');
  console.log('  3. Set environment variables:');
  console.log('     - MONGODB_URI');
  console.log('     - PORT (usually 3100 or auto-assigned)');
  console.log('     - NODE_ENV=production');
  console.log('  4. Run: node seed_users.js (after deploy)');
  console.log('  5. Update frontend API URL\n');
  console.log('See QUICK_DEPLOY.md for detailed instructions.');
} else {
  console.log('❌ Fix errors before deploying.\n');
  process.exit(1);
}
