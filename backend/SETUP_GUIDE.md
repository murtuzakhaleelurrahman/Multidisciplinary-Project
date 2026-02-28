# Smart Transit Backend - Quick Setup Guide

---
## IEEE ML Pipeline Update (February 26, 2026)
- Script: backend/eta_ml_pipeline.py
- Data: backend/trip_history_ml_ready.csv; STOP_DATA loaded from frontend/index.html
- Speed MAE: baseline 3.8504 km/h, XGBoost 2.6191 km/h (31.98% improvement)
- ETA MAE: baseline 187.0375 s, XGBoost 121.4031 s (35.09% improvement), Wilcoxon p=0.0
- Peak/off-peak ETA MAE: peak baseline 477.4938 s vs XGBoost 326.1945 s (31.69%); off-peak baseline 89.8007 s vs XGBoost 52.8446 s (41.15%)
- Outputs: backend/ml_results.csv and backend/ml_eta_results.csv

## Initial Setup

### 1. Install Dependencies
```powershell
cd backend
npm install
```

This installs:
- `express` - Web server framework
- `mongoose` - MongoDB ODM
- `cors` - Cross-origin resource sharing
- `dotenv` - Environment variable management

### 2. Configure Environment Variables

Create a `.env` file in the `backend` directory:

```powershell
# Copy the example file
Copy-Item .env.example .env
```

Edit `.env` and set your MongoDB connection:

**For Local MongoDB:**
```
MONGODB_URI=mongodb://localhost:27017/smart_transit
PORT=3000
NODE_ENV=development
```

**For MongoDB Atlas (Cloud):**
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/smart_transit
PORT=3000
NODE_ENV=production
```

### 3. Seed Demo Data

#### a) Seed Historical Traffic Data

Run the traffic data seeder to populate your database with 30 days of historical traffic:

```powershell
node seed_traffic.js
```

Expected output:
```
🔌 Connecting to MongoDB...
   URI: mongodb://***:***@localhost:27017/smart_transit
✅ Connected to MongoDB. Starting Time Machine...
⏳ Generating 30 days of traffic history...
📍 Simulating 16 road segments
🚌 Simulating 5 buses per hour

📅 Progress: 5/30 days simulated...
📅 Progress: 10/30 days simulated...
...

💾 Inserting 34560 records into database...

✅ Success! Seeded 34560 historical traffic records.
📊 Coverage: 30 days × 16 segments × ~72 samples/segment

🚀 Your backend is now "Smart"!
📡 Restart your backend server to activate intelligent routing.
```

#### b) Seed Demo Users (Optional)

If you want to test authentication, create demo users:

```powershell
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

**Demo accounts:**
- Username: `admin` / Password: `admin123` (role: admin)
- Username: `user` / Password: `user123` (role: user)
- Username: `demo` / Password: `demo123` (role: user)

> **Security Note**: These are demo-only credentials with plain-text passwords. Production should use bcrypt + JWT.

### 4. Start the Server

```powershell
node index.js
```

Expected output:
```
✅ MongoDB connected
🚀 Server running on port 3000
```

## Verification

### Check Database Connection
Your terminal should show:
```
✅ MongoDB connected
```

If you see an error, verify:
1. MongoDB is running (if using local)
2. MONGODB_URI in `.env` is correct
3. Network/firewall allows connection

### Test the API

**Health Check:**
```powershell
Invoke-RestMethod -Uri "http://localhost:3000"
```
Response: `✅ Smart Transit Backend Online`

**Fleet Data:**
```powershell
Invoke-RestMethod -Uri "http://localhost:3000/api/bus_locations"
```
Response: `[]` (empty array initially - buses added via frontend)

**Traffic Profile:**
```powershell
Invoke-RestMethod -Uri "http://localhost:3000/api/traffic_profile"
```
Response:
```json
{
  "status": "moderate",
  "global_speed_modifier": 0.85,
  "rush_hour_active": false
}
```

**Segment Traffic:**
```powershell
Invoke-RestMethod -Uri "http://localhost:3000/api/traffic/segments"
```
Response:
```json
{
  "hour": 14,
  "segments": {
    "VLR_001->VLR_002": 24.5,
    "VLR_002->VLR_003": 26.2,
    ...
  },
  "count": 16
}
```

### Frontend Verification

1. Open your frontend in a browser
2. Open browser console (F12)
3. Look for:
   ```
   🚦 Traffic Profile Loaded: global=0.85, segments=16
   ```

If you see `segments=0`, the seeder didn't run successfully or the data is not being fetched.

## Troubleshooting

### "MongoDB connection error"

**Problem:** Backend can't connect to database

**Solutions:**
1. **Local MongoDB:** Ensure MongoDB is running
   ```powershell
   # Check if MongoDB is running
   Get-Service -Name MongoDB
   
   # Start MongoDB if stopped
   Start-Service -Name MongoDB
   ```

2. **MongoDB Atlas:** 
   - Verify credentials in MONGODB_URI
   - Check IP whitelist (add `0.0.0.0/0` for testing)
   - Ensure cluster is active

### "Cannot find module './models/TripHistory'"

**Problem:** Model files not found

**Solution:** Ensure the models folder exists:
```powershell
# Check structure
Get-ChildItem -Path backend -Recurse -File

# Should show:
# backend/
#   models/
#     ActiveFleet.js
#     TripHistory.js
#   index.js
#   seed_traffic.js
```

### Seeder runs but no segment data in frontend

**Problem:** Data exists but API returns empty

**Possible causes:**
1. Current hour has no data (unlikely with 30 days)
2. Schema mismatch between seeder and server
3. Wrong database/collection name

**Solution:**
```powershell
# Check TripHistory collection directly
# Use MongoDB Compass or shell to verify data exists
```

## Development Workflow

### Making Schema Changes

**IMPORTANT:** Models are now centralized in `backend/models/`

To add a new field (e.g., `weather`):

1. Edit `backend/models/TripHistory.js`:
   ```javascript
   weather: { type: String, default: "clear" }
   ```

2. Both `index.js` and `seed_traffic.js` automatically use the updated schema

3. No need to update schema in multiple places ✅

### Resetting Data

**Clear all historical data:**
```javascript
// In MongoDB shell or Compass
use smart_transit
db.TripHistory.drop()
```

Then re-run the seeder:
```powershell
node seed_traffic.js
```

**Clear active fleet:**
```powershell
Invoke-RestMethod -Uri "http://localhost:3000/api/system/reset" -Method POST
```

## Project Structure

```
backend/
├── models/               # Shared database schemas (DRY principle)
│   ├── ActiveFleet.js    # Real-time bus locations
│   ├── TripHistory.js    # Historical traffic data
│   └── User.js           # User authentication
├── index.js              # Main server (450+ lines)
├── seed_traffic.js       # Traffic data seeder
├── seed_users.js         # User data seeder
├── package.json          # Dependencies
├── .env                  # Environment config (create from .env.example)
├── .env.example          # Template for .env
├── SETUP_GUIDE.md        # This file
└── SEEDER_GUIDE.md       # Detailed seeder documentation
```

## Next Steps

1. ✅ Install dependencies
2. ✅ Configure `.env`
3. ✅ Run seeder
4. ✅ Start server
5. 🚀 Open frontend and test intelligent routing!

## Production Checklist

Before deploying:

- [ ] Set `NODE_ENV=production` in `.env`
- [ ] Use MongoDB Atlas (not local MongoDB)
- [ ] Add `.env` to `.gitignore` (never commit secrets!)
- [ ] Set secure CORS origins (not `*`)
- [ ] Enable MongoDB authentication
- [ ] Set up monitoring/logging
- [ ] Configure automatic backups for MongoDB
