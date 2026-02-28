# Data Seeder - Usage Guide

---
## IEEE ML Pipeline Update (February 26, 2026)
- Script: backend/eta_ml_pipeline.py
- Data: backend/trip_history_ml_ready.csv; STOP_DATA loaded from frontend/index.html
- Speed MAE: baseline 3.8504 km/h, XGBoost 2.6191 km/h (31.98% improvement)
- ETA MAE: baseline 187.0375 s, XGBoost 121.4031 s (35.09% improvement), Wilcoxon p=0.0
- Peak/off-peak ETA MAE: peak baseline 477.4938 s vs XGBoost 326.1945 s (31.69%); off-peak baseline 89.8007 s vs XGBoost 52.8446 s (41.15%)
- Outputs: backend/ml_results.csv and backend/ml_eta_results.csv

## Overview

This folder contains two seeders for populating your MongoDB database:
1. **`seed_traffic.js`** - Generates 30 days of historical traffic data
2. **`seed_users.js`** - Creates demo user accounts for authentication

Both seeders are essential for running the Smart Transit application with full functionality.

---

## Seeder 1: Traffic Data (`seed_traffic.js`)

### What This Does

Populates your MongoDB database with 30 days of simulated historical traffic data. This allows your "Smart Transit" features to work immediately without waiting days for real data to accumulate.

## Why You Need This

Your intelligent routing features depend on historical traffic patterns stored in the `TripHistory` collection. Without this data:
- The segment traffic API returns empty results
- ETAs fall back to generic speed estimates
- The "smart" features are dormant

## Installation & Running

### Step 1: Install Dependencies (if needed)
```bash
cd backend
npm install
```

### Step 2: Configure MongoDB URI

**Option A: Local MongoDB**
```bash
# Default: mongodb://localhost:27017/smart_transit
node seed_traffic.js
```

**Option B: MongoDB Atlas (Cloud)**
```bash
# Set environment variable first
$env:MONGODB_URI="mongodb+srv://username:password@cluster.mongodb.net/smart_transit"
node seed_traffic.js
```

**Option C: Hardcode in seed_traffic.js**
Edit line 13 in `seed_traffic.js`:
```javascript
const MONGODB_URI = "your_mongodb_connection_string_here";
```

### Step 3: Run the Seeder
```bash
node seed_traffic.js
```

Expected output:
```
✅ Connected to MongoDB. Starting Time Machine...
⏳ Generating 30 days of traffic history...
📍 Simulating 16 road segments
🚌 Simulating 5 buses per hour

📅 Progress: 5/30 days simulated...
📅 Progress: 10/30 days simulated...
...

💾 Inserting 34560 records into database...

✅ Success! Seeded 34560 historical traffic records.
📊 Coverage: 30 days × 16 segments × 72 samples/segment

🚀 Your backend is now "Smart"!
```

### Step 4: Restart Your Backend
```bash
node index.js
```

## What Gets Seeded

### Traffic Patterns
- **Weekday Morning Rush (8-10 AM)**: ~12 km/h (heavy congestion)
- **Weekday Evening Rush (5-7 PM)**: ~10 km/h (severe congestion)
- **Weekday Midday (11 AM-4 PM)**: ~25 km/h (moderate)
- **Nights & Weekends**: ~35 km/h (free flow)

### Road Segments
The seeder populates 16 key segments in Vellore:
- **Main Corridors**: New Bus Stand ↔ Fort ↔ Katpadi ↔ VIT
- **VIT Campus Loop**: Gate 1 → Gate 2 → Academic Block
- **Commercial Zones**: Fort Market Area, Circuit House
- **Residential**: Officers Colony, Green Circle

### Data Volume
- **30 days** of historical data
- **~3-5 data points per hour** per segment
- **~72 samples per segment** (realistic variance)
- **Total: ~35,000 records**

## How to Verify It's Working

### Backend Logs
After restarting your backend, you should see:
```
✅ MongoDB connected
🚀 Server running on port 3000
```

### Frontend Console
When the frontend loads, check the browser console (F12):
```
🚦 Traffic Profile Loaded: global=0.85, segments=16
```

If you see `segments=0`, the seeder didn't run successfully.

### Test the Intelligence

1. **Open the app** in your browser
2. **Select a stop** (e.g., "Vellore Fort")
3. **Check the ETA** displayed for nearby buses
4. **Compare times:**
   - During simulated rush hour (8-10 AM, 5-7 PM): ETAs should be longer
   - During off-peak hours: ETAs should be shorter

### API Test
Check the segment traffic endpoint directly:
```bash
# PowerShell
Invoke-RestMethod -Uri "http://localhost:3000/api/traffic/segments"
```

Expected response:
```json
{
  "hour": 9,
  "segments": {
    "VLR_001->VLR_002": 12.5,
    "VLR_002->VLR_003": 14.2,
    "VLR_010->VLR_011": 11.8,
    ...
  },
  "count": 16
}
```

## Troubleshooting

### Error: "MongoDB connection error"
- Verify your MongoDB is running (if local)
- Check MONGODB_URI is correct
- Ensure your IP is whitelisted (if using Atlas)

### Error: "Collection already exists"
The seeder can be run multiple times safely. It will add more historical data (which can improve accuracy).

To **reset and start fresh**:
```javascript
// In MongoDB shell or Compass
use smart_transit
db.TripHistory.drop()
```

Then run the seeder again.

### "segments=0" in frontend
This means:
1. Seeder didn't run successfully, OR
2. Current hour has no data (unlikely with 30 days of data)

**Fix**: Check backend logs for errors, verify TripHistory collection has data.

## Advanced Configuration

### Customize Traffic Patterns
Edit the `baseSpeed` logic in `seed_traffic.js` (lines 95-120) to adjust:
- Rush hour severity
- Peak hours
- Weekend patterns

### Add More Segments
Add to the `SEGMENTS` array (lines 43-66):
```javascript
"YOUR_STOP_A->YOUR_STOP_B"
```

### Change Simulation Period
```javascript
const DAYS_TO_SIMULATE = 60; // Simulate 2 months instead
```

## Production Notes

⚠️ **Do NOT run this seeder in production** with real user data. This is for:
- Development testing
- Demos
- Initial system bootstrapping

Once real buses generate traffic data, the historical patterns will naturally accumulate and replace the simulated data.

## Next Steps

After seeding traffic data:
1. Test the intelligent routing with different stops
2. Monitor the frontend console for segment data
3. Add simulated buses and watch the system learn in real-time
4. Compare ETA accuracy between rush hour and off-peak times

---

## Seeder 2: User Data (`seed_users.js`)

### What This Does

Creates demo user accounts in the `User` collection for testing authentication features.

### Why You Need This

The backend has authentication endpoints (`/api/auth/login`) that require valid users in the database. Without seeded users, you cannot test login functionality.

### Running the Seeder

```bash
cd backend
node seed_users.js
```

Expected output:
```
✅ MongoDB connected
🗑️ Cleared existing users
👤 Creating demo users...
   ✓ admin / admin123
   ✓ user / user123
   ✓ demo / demo123
✅ Successfully seeded 3 users
```

### Created Accounts

| Username | Password | Role | Description |
|----------|----------|------|-------------|
| `admin` | `admin123` | admin | Administrator account |
| `user` | `user123` | user | Standard user account |
| `demo` | `demo123` | user | Demo/guest account |

> **⚠️ Security Warning**: These are **demo-only** credentials with plain-text passwords. In production, use bcrypt for hashing and JWT for authentication tokens.

### Testing Authentication

After seeding users, test the login endpoint:

```bash
# PowerShell
$body = @{
    username = "admin"
    password = "admin123"
} | ConvertTo-Json

Invoke-RestMethod -Uri "http://localhost:3000/api/auth/login" `
    -Method POST `
    -Body $body `
    -ContentType "application/json"
```

Expected response:
```json
{
  "username": "admin",
  "role": "admin"
}
```

### Resetting Users

To clear and re-seed users:

```bash
# The seeder automatically clears existing users before seeding
node seed_users.js
```

Or manually in MongoDB:
```javascript
use smart_transit
db.User.drop()
```

---

## Complete Setup Workflow

For a fresh installation:

```bash
cd backend

# 1. Install dependencies
npm install

# 2. Configure environment
cp .env.example .env
# Edit .env and set MONGODB_URI

# 3. Seed traffic data
node seed_traffic.js

# 4. Seed demo users
node seed_users.js

# 5. Start backend
node index.js
```

Now your Smart Transit backend is fully configured with:
- ✅ Historical traffic patterns
- ✅ Demo user accounts
- ✅ All API endpoints functional

---

## Production Considerations

⚠️ **Do NOT use these seeders in production** as-is:

### Traffic Seeder
- Replace simulated data with real GPS telemetry
- Let TripHistory accumulate organically from actual bus movements
- Use seeders only for initial bootstrapping

### User Seeder
- Never use plain-text passwords in production
- Implement bcrypt password hashing
- Use JWT tokens for session management
- Add email verification and password reset flows
- Remove hardcoded demo accounts
