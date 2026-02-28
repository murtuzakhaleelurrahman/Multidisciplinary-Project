# Quick Reference – Evaluator Guide

---
## IEEE ML Pipeline Update (February 26, 2026)
- Script: backend/eta_ml_pipeline.py
- Data: backend/trip_history_ml_ready.csv; STOP_DATA loaded from frontend/index.html
- Speed MAE: baseline 3.8504 km/h, XGBoost 2.6191 km/h (31.98% improvement)
- ETA MAE: baseline 187.0375 s, XGBoost 121.4031 s (35.09% improvement), Wilcoxon p=0.0
- Peak/off-peak ETA MAE: peak baseline 477.4938 s vs XGBoost 326.1945 s (31.69%); off-peak baseline 89.8007 s vs XGBoost 52.8446 s (41.15%)
- Outputs: backend/ml_results.csv and backend/ml_eta_results.csv

## 🚀 Getting Started (2 minutes)

### 0. MongoDB Setup (First Time Only)
```bash
cd backend

# Copy environment template
cp .env.example .env

# Edit .env and set your MONGODB_URI
# For quick start, use MongoDB Atlas free tier:
# https://www.mongodb.com/cloud/atlas

# Seed demo data (30 days of traffic + demo users)
node seed_traffic.js
node seed_users.js
```

### 1. Start Backend
```bash
cd backend
npm install
node index.js
# Server running on http://localhost:3000
# Should show: ✅ MongoDB connected
```

### 2. Open Frontend
Open `frontend/index.html` in a browser (or `http://localhost:3000` if serving via Node)

### 3. Run Tests (30 seconds)
Open browser console (F12) and paste:
```javascript
runAllTests();
```
Expected: "✅ All tests passed!" with 15+ assertion checkmarks

---

## 📋 Quick Feature Walkthrough

| Feature | How to Try | Expected Result |
|---------|-----------|-----------------|
| **Live Tracking** | App boots → See bus icons on map | 100+ colored buses appear, animate smoothly |
| **Search Stop** | Search panel: Type "Vellore" → Click result | Map centers on stop, shows blue marker |
| **Monitor Bus** | Select bus → Choose stop → Click "Monitor" | Green HUD appears with ETA, pulsing animation |
| **Report Delay** | Click bus popup → "Report Delay" button 3x | Bus turns orange after 3rd report |
| **Guardian Mode** | Click share link → Opens tracking URL | Shows "📡 TRACKING BUS_ID" banner |
| **Dark Mode** | Click theme toggle (top right) | Page inverts to dark theme |
| **Focus Mode** | Click "Focus Nearby" button | Shows only buses within 5km |

---

## 🧪 Test Execution Guide

### Method 1: Console (Recommended)
```javascript
// Open F12 → Console tab
// Paste this:

// Test 1: ETA Calculation (4 assertions)
testComputeWeightedETA();

// Test 2: Delay Reporting (4 assertions)  
testDelayReporting();

// Test 3: Staleness Detection (3 assertions)
testStalenessLogic();

// Test 4: Ghost Bus Cleanup (4 assertions)
testGhostBusCleanup();

// Test 5: XSS Prevention (3 assertions)
testXSSPrevention();

// Run all at once:
runAllTests();
```

### Method 2: Load Test File
If serving via Node:
```html
<!-- Add to frontend/index.html before closing </body>: -->
<script src="../../tests/basic-tests.js"></script>
<script>
  window.addEventListener('load', () => {
    console.log('Type runAllTests() to run test suite');
  });
</script>
```

### Expected Test Output
```
🧪 Smart Transit Basic Tests Started

📊 Testing ETA Calculation...
✓ ETA Test 1 Passed: 1km at 20km/h = 3 min
✓ ETA Test 2 Passed: 500m at 18km/h = 1 min
✓ ETA Test 3 Passed: 1km at 20km/h (stale) = 4 min
✓ ETA Test 4 Passed: 2km at default speed = 7 min

🚨 Testing Delay Reporting...
✓ Delay Test 1 Passed: 1 report does not flag bus
✓ Delay Test 2 Passed: 2 reports do not flag bus
✓ Delay Test 3 Passed: 3 reports flag bus
✓ Delay Test 4 Passed: Duplicate reports prevented

⏱️ Testing Staleness Detection...
✓ Staleness Test 1 Passed: Recent data marked as fresh
✓ Staleness Test 2 Passed: Medium-age data marked as stale
✓ Staleness Test 3 Passed: Old data marked as offline

🗑️ Testing Ghost Bus Cleanup...
✓ Ghost Bus Test 1 Passed: Live bus not cleaned up
✓ Ghost Bus Test 2 Passed: Stale bus not cleaned up
✓ Ghost Bus Test 3 Passed: Dead bus cleaned up
✓ Ghost Bus Test 4 Passed: Cleanup identified 1 ghost bus(es)

🛡️ Testing XSS Prevention...
✓ XSS Test 1 Passed: Script tags escaped
✓ XSS Test 2 Passed: Event handlers escaped
✓ XSS Test 3 Passed: HTML entities escaped

✅ All tests passed!
```

---

## 🔍 Code Organization Map

### Section Headers (7 major sections)
```
frontend/index.html
├── CONFIGURATION & INITIALIZATION (line 754)
├── GLOBAL STATE & CONFIGURATION (line 1074)
├── FLEET SYNCHRONIZATION & PROCESSING (line 2149)
├── FLEET DATA PROCESSING & VISUALIZATION (line 2187)
├── GUARDIAN MODE & GEOLOCATION TRACKING (line 1891)
├── MAIN BOOT & EVENT LOOP (line 2334)
└── UI INTERACTION HANDLERS (line 2342)
```

### Modular Design (5 focused modules)
1. **CONFIG** – Central settings (12 parameters)
2. **Security** – XSS protection (escapeHTML, sanitizeInput)
3. **ErrorHandler** – Error handling (safeFetch, handleError)
4. **UI** – User feedback (toast, updateStatus)
5. **DelayReporting** – Crowdsourced delays (reportDelay, isDelayed)

---

## 🛡️ Security & Error Handling Highlights

### Error Handling (Production-Grade)
- ✅ **0 silent errors**: All `.catch()` blocks log + notify users
- ✅ **User feedback**: Toast notifications for failures (4s auto-dismiss)
- ✅ **Console logging**: Developer-friendly error messages with context
- ✅ **Graceful fallbacks**: Invalid data → defaults (e.g., 18 km/h for ETA)

### XSS Protection
- ✅ **Input sanitization**: All user searches escape HTML
- ✅ **Popup content**: Bus info sanitized before rendering
- ✅ **Event handlers**: No inline onclick/onerror attributes

### Memory Management
- ✅ **Ghost bus cleanup**: Buses > 15s offline removed from map
- ✅ **Marker reference nullification**: `entry.marker = null` prevents heap accumulation
- ✅ **Set cleanup**: `state.stopAlertStates.clear()` on journey end

---

## 📊 Performance Metrics (Expected)

| Metric | Expected | Notes |
|--------|----------|-------|
| **Initial Load** | < 3s | DOM render + Leaflet init |
| **Fleet Sync Latency** | < 500ms | API call + marker update |
| **Map Animation** | 60 FPS | Smooth 2s polling cycle |
| **Marker Count** | 100-120 | Demo fleet size |
| **Memory (Long-running)** | < 100MB | With cleanup enabled |
| **Error Recovery** | < 2s | Automatic reconnect |

---

## 🎯 Evaluation Checklist

**Functional**:
- [ ] Live buses appear on map with correct positions
- [ ] Bus selection updates HUD with ETA/occupancy
- [ ] Stop monitoring alerts when bus approaches
- [ ] Delay reporting flags buses after 3 reports
- [ ] Guardian mode shares tracking link with 30min expiry
- [ ] Theme toggle switches dark/light mode

**Code Quality**:
- [ ] Section headers present (7 locations)
- [ ] 0 silent error catches (`catch(e) {}`)
- [ ] All errors logged to console
- [ ] Modular design with focused functions
- [ ] Comments explain "why" not just "what"

**Testing**:
- [ ] `runAllTests()` executes without errors
- [ ] All 15+ assertions pass (green checkmarks)
- [ ] Test output shows expected values
- [ ] Tests validate core logic (ETA, delays, staleness)

**Documentation**:
- [ ] README covers setup, features, architecture
- [ ] Testing section explains test execution
- [ ] Evaluation criteria table shows mapping
- [ ] Known limitations documented

**Security & Performance**:
- [ ] XSS prevention tests pass
- [ ] Ghost buses cleaned up (console logs visible)
- [ ] Marker references nullified (memory safe)
- [ ] No network errors when backend offline

---

## 📁 File Structure

```
d:\Multidisciplinary Project\
├── README.md (370 lines) ← Start here for overview
├── PRODUCTION_QUALITY_SUMMARY.md ← Detailed improvements
├── frontend/
│   └── index.html (2390 lines) ← Main application
├── backend/
│   ├── index.js ← Express server
│   └── package.json ← Dependencies
└── tests/
    └── basic-tests.js (247 lines) ← Test suite
```

---

## 🚨 Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| **Buses not appearing** | Check backend running + Network tab for `/api/bus_locations` |
| **Popup empty** | Open console; look for sanitization errors |
| **Tests not running** | Ensure `tests/basic-tests.js` loaded or paste code in console |
| **Dark mode not working** | Check `localStorage` → CSS variables updating |
| **Markers not animating** | Verify map zoom level; Leaflet animation disabled on tiny scales |

---

## ⏱️ Estimated Review Time: 15-20 minutes

1. **Feature demo**: 5 min (live tracking, monitoring, delay reporting)
2. **Code walkthrough**: 5 min (section headers, modular design)
3. **Test execution**: 2 min (runAllTests output)
4. **Documentation review**: 3 min (README + this guide)

---

**Last Updated**: February 2026  
**Version**: 1.0 Production-Ready  
**Status**: ✅ Ready for Evaluation
