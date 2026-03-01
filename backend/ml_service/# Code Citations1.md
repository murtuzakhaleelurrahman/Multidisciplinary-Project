# Code Citations

## License: unknown
https://github.com/AbdullahTonka/sunum/blob/9e572a71799c17ff3ac148518bbea12c6c2c30e3/index1.html

```
---

## 🔬 SEGMENT DISTANCE DEFINITION FORENSIC AUDIT

**Status**: Investigation Complete  
**Date**: February 26, 2026  
**Mode**: IEEE Research Mode (Read-only)

---

## 1️⃣ STOP COORDINATES STORAGE LOCATION

### **Primary Storage: Frontend STOP_DATA Array**
**File**: [frontend/index.html](frontend/index.html#L1791)  
**Lines**: 1791–1830  
**Structure**: JavaScript constant array (NOT MongoDB)

```javascript
const STOP_DATA = [
  // ================= PRECISE GOOGLE MAPS COORDINATES (34 Stops) =================
  // Updated with exact coordinates rounded to 6 decimal places for perfect Google Maps alignment
  
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
```

### **Schema Definition: TripHistory (Bus Coordinates)**
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js#L18)

```javascript
{
  coordinates: { type: [Number], default: undefined }  // [longitude, latitude] format
}
```

### **Stop Coordinate Summary**
| Property | Location | Format | Coverage |
|----------|----------|--------|----------|
| **Stop Coordinates** | Frontend STOP_DATA array (JavaScript) | `{ stop_id, latitude, longitude, ...}` | 34 stops (VLR_001 to VLR_034) |
| **Bus GPS Coordinates** | MongoDB TripHistory.coordinates | `[longitude, latitude]` (GeoJSON) | Real-time telemetry |
| **Bus Coordinates (ActiveFleet)** | [backend/models/ActiveFleet.js](backend/models/ActiveFleet.js#L13) | `{ location: { type: "Point", coordinates: [lon, lat] } }` | Live fleet |

---

## 2️⃣ SEGMENT DISTANCE STORAGE STATUS

### **FINDING: Segment Distance is NOT Stored**

**TripHistory Schema** (full content):
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js)

```javascript
const tripHistorySchema = new mongoose.Schema(
  {
    bus_id: { type: String, index: true },
    route_id: { type: String, default: null },
    timestamp: { type: Date, default: Date.now, index: true },
    day_of_week: { type: String },
    hour_of_day: { type: Number },
    segment: { type: String, default: null },
    speed: { type: Number, default: null },
    traffic_level: { type: String, default: "unknown" },
    coordinates: { type: [Number], default: undefined }
  },
  { collection: "TripHistory" }
);
```

**Fields Stored**: bus_id, route_id, timestamp, day_of_week, hour_of_day, segment, speed, traffic_level, coordinates

**✅ Fields Available for Distance Calculation**: segment (stop pair codes), coordinates (GPS point)  
**❌ Field NOT Present**: `distance` (segment length in meters)

### **Mentioned but Not Implemented**
**File**: [CURRENT_STATE_SUMMARY.md](CURRENT_STATE_SUMMARY.md#L91) (Documentation only)

```javascript
{
  segment: String,             // e.g., "VLR_001->VLR_002"
  speed: Number,               // Average speed in km/h
  timestamp: Date,             // When recorded
  bus_id: String,              // Which bus generated this
  distance: Number             // Segment length in meters ← NOT IN ACTUAL SCHEMA
}
```

---

## 3️⃣ CONFIRMATION: STOPS HAVE LAT/LON, HAVERSINE CAN COMPUTE DISTANCE

### **All Stop Codes Are Defined**

| Stop Range | Defined | Total |
|------------|---------|-------|
| VLR_001 to VLR_034 | ✅ YES | 34 stops |

### **Data Consistency Issue**

**Stops Defined in STOP_DATA**: VLR_001 to VLR_034 (34 stops)

**Stops Used in Database Segments**: VLR_001, VLR_002, VLR_008, VLR_011, VLR_012, VLR_013, VLR_016, VLR_018, VLR_025, VLR_026, VLR_028, VLR_030, VLR_038, VLR_047, VLR_052, VLR_054, VLR_081, VLR_082

**⚠️ Missing Coordinates (NOT in STOP_DATA)**:
- `VLR_038`
- `VLR_047`
- `VLR_052`
- `VLR_054`
- `VLR_081`
- `VLR_082`

### **Haversine Distance Calculation Feasibility**

✅ **For 12 segments using defined stops** (VLR_001–VLR_034):
   - Can compute Haversine distance once per segment pair
   - Store in computation cache

⚠️ **For 5 segments using undefined stops** (VLR_038, VLR_047, etc.):
   - Requires adding stop coordinates to STOP_DATA before Haversine computation
   - Alternative: estimate distance from existing speed data

---

## 4️⃣ DISTINCT SEGMENTS IN TRIPHISTORY

### **MongoDB Query Result**
```
db.TripHistory.distinct("segment")
```

**Result**:
```
[
  "VLR_002->VLR_018",
  "VLR_011->VLR_013",
  "VLR_012->VLR_030",
  "VLR_013->VLR_016",
  "VLR_018->VLR_047",     ← VLR_047 not in STOP_DATA
  "VLR_025->VLR_026",
  "VLR_038->VLR_028",     ← VLR_038 not in STOP_DATA
  "VLR_052->VLR_011",     ← VLR_052 not in STOP_DATA
  "VLR_054->VLR_001",     ← VLR_054 not in STOP_DATA
  "VLR_081->VLR_008",     ← VLR_081 not in STOP_DATA
  "VLR_081->VLR_082"      ← VLR_081, VLR_082 not in STOP_DATA
]
```

**Total Unique Segments**: 11

---

## 5️⃣ TRIPHISTORY RECORD COUNT

### **MongoDB Query Result**
```
db.TripHistory.countDocuments()
```

**Result**: **13 records**

### **Sample Document Structure**

```json
{
  "_id": "699174e38d6c6f65f8634a11",
  "bus_id": "BUS-103",
  "route_id": null,
  "timestamp": "2026-02-15T07:25:23.455Z",
  "day_of_week": "Sunday",
  "hour_of_day": 12,
  "segment": "VLR_012->VLR_030",
  "speed": 94.1,
  "traffic_level": "light",
  "coordinates": [79.161989, 12.972081],
  "__v": 0
}
```

### **Data Inventory**

| Attribute | Count | Notes |
|-----------|-------|-------|
| Total Records | 13 | Limited dataset for testing |
| Unique Buses | ? | Requires aggregation query |
| Unique Segments | 11 | Listed above |
| Date Range | Feb 15 - Feb 15, 2026 | Single day |
| Records with coordinates | 13 | 100% coverage |
| Records with segment | 11 | All 13 have segment (no nulls) |

---

## 📊 SEGMENT DISTANCE CALCULATION PLAN

### **Haversine Implementation Option**

**Implementable Segments** (coordinates available):
- VLR_002→VLR_018
- VLR_011→VLR_013
- VLR_012→VLR_030
- VLR_013→VLR_016
- VLR_025→VLR_026
- VLR_038→VLR_028 ⚠️ (VLR_038 undefined)
- VLR_052→VLR_011 ⚠️ (VLR_052 undefined)
- VLR_054→VLR_001 ⚠️ (VLR_054 undefined)
- VLR_081→VLR_008 ⚠️ (VLR_081 undefined)
- VLR_081→VLR_082 ⚠️ (VLR_081, VLR_082 undefined)

**Haversine Formula** (from [backend/index.js](backend/index.js#L165)):
```javascript
function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371e3; // Earth radius in meters
  const φ1 = lat1 * Math.PI / 180;
  const φ2 = lat2 * Math.PI / 180;
  const Δφ = (lat2 - lat1) * Math.PI / 180;
  const Δλ = (lon2 - lon1) * Math.PI / 180;

  const a =
```


## License: unknown
https://github.com/AbdullahTonka/sunum/blob/9e572a71799c17ff3ac148518bbea12c6c2c30e3/index1.html

```
---

## 🔬 SEGMENT DISTANCE DEFINITION FORENSIC AUDIT

**Status**: Investigation Complete  
**Date**: February 26, 2026  
**Mode**: IEEE Research Mode (Read-only)

---

## 1️⃣ STOP COORDINATES STORAGE LOCATION

### **Primary Storage: Frontend STOP_DATA Array**
**File**: [frontend/index.html](frontend/index.html#L1791)  
**Lines**: 1791–1830  
**Structure**: JavaScript constant array (NOT MongoDB)

```javascript
const STOP_DATA = [
  // ================= PRECISE GOOGLE MAPS COORDINATES (34 Stops) =================
  // Updated with exact coordinates rounded to 6 decimal places for perfect Google Maps alignment
  
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
```

### **Schema Definition: TripHistory (Bus Coordinates)**
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js#L18)

```javascript
{
  coordinates: { type: [Number], default: undefined }  // [longitude, latitude] format
}
```

### **Stop Coordinate Summary**
| Property | Location | Format | Coverage |
|----------|----------|--------|----------|
| **Stop Coordinates** | Frontend STOP_DATA array (JavaScript) | `{ stop_id, latitude, longitude, ...}` | 34 stops (VLR_001 to VLR_034) |
| **Bus GPS Coordinates** | MongoDB TripHistory.coordinates | `[longitude, latitude]` (GeoJSON) | Real-time telemetry |
| **Bus Coordinates (ActiveFleet)** | [backend/models/ActiveFleet.js](backend/models/ActiveFleet.js#L13) | `{ location: { type: "Point", coordinates: [lon, lat] } }` | Live fleet |

---

## 2️⃣ SEGMENT DISTANCE STORAGE STATUS

### **FINDING: Segment Distance is NOT Stored**

**TripHistory Schema** (full content):
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js)

```javascript
const tripHistorySchema = new mongoose.Schema(
  {
    bus_id: { type: String, index: true },
    route_id: { type: String, default: null },
    timestamp: { type: Date, default: Date.now, index: true },
    day_of_week: { type: String },
    hour_of_day: { type: Number },
    segment: { type: String, default: null },
    speed: { type: Number, default: null },
    traffic_level: { type: String, default: "unknown" },
    coordinates: { type: [Number], default: undefined }
  },
  { collection: "TripHistory" }
);
```

**Fields Stored**: bus_id, route_id, timestamp, day_of_week, hour_of_day, segment, speed, traffic_level, coordinates

**✅ Fields Available for Distance Calculation**: segment (stop pair codes), coordinates (GPS point)  
**❌ Field NOT Present**: `distance` (segment length in meters)

### **Mentioned but Not Implemented**
**File**: [CURRENT_STATE_SUMMARY.md](CURRENT_STATE_SUMMARY.md#L91) (Documentation only)

```javascript
{
  segment: String,             // e.g., "VLR_001->VLR_002"
  speed: Number,               // Average speed in km/h
  timestamp: Date,             // When recorded
  bus_id: String,              // Which bus generated this
  distance: Number             // Segment length in meters ← NOT IN ACTUAL SCHEMA
}
```

---

## 3️⃣ CONFIRMATION: STOPS HAVE LAT/LON, HAVERSINE CAN COMPUTE DISTANCE

### **All Stop Codes Are Defined**

| Stop Range | Defined | Total |
|------------|---------|-------|
| VLR_001 to VLR_034 | ✅ YES | 34 stops |

### **Data Consistency Issue**

**Stops Defined in STOP_DATA**: VLR_001 to VLR_034 (34 stops)

**Stops Used in Database Segments**: VLR_001, VLR_002, VLR_008, VLR_011, VLR_012, VLR_013, VLR_016, VLR_018, VLR_025, VLR_026, VLR_028, VLR_030, VLR_038, VLR_047, VLR_052, VLR_054, VLR_081, VLR_082

**⚠️ Missing Coordinates (NOT in STOP_DATA)**:
- `VLR_038`
- `VLR_047`
- `VLR_052`
- `VLR_054`
- `VLR_081`
- `VLR_082`

### **Haversine Distance Calculation Feasibility**

✅ **For 12 segments using defined stops** (VLR_001–VLR_034):
   - Can compute Haversine distance once per segment pair
   - Store in computation cache

⚠️ **For 5 segments using undefined stops** (VLR_038, VLR_047, etc.):
   - Requires adding stop coordinates to STOP_DATA before Haversine computation
   - Alternative: estimate distance from existing speed data

---

## 4️⃣ DISTINCT SEGMENTS IN TRIPHISTORY

### **MongoDB Query Result**
```
db.TripHistory.distinct("segment")
```

**Result**:
```
[
  "VLR_002->VLR_018",
  "VLR_011->VLR_013",
  "VLR_012->VLR_030",
  "VLR_013->VLR_016",
  "VLR_018->VLR_047",     ← VLR_047 not in STOP_DATA
  "VLR_025->VLR_026",
  "VLR_038->VLR_028",     ← VLR_038 not in STOP_DATA
  "VLR_052->VLR_011",     ← VLR_052 not in STOP_DATA
  "VLR_054->VLR_001",     ← VLR_054 not in STOP_DATA
  "VLR_081->VLR_008",     ← VLR_081 not in STOP_DATA
  "VLR_081->VLR_082"      ← VLR_081, VLR_082 not in STOP_DATA
]
```

**Total Unique Segments**: 11

---

## 5️⃣ TRIPHISTORY RECORD COUNT

### **MongoDB Query Result**
```
db.TripHistory.countDocuments()
```

**Result**: **13 records**

### **Sample Document Structure**

```json
{
  "_id": "699174e38d6c6f65f8634a11",
  "bus_id": "BUS-103",
  "route_id": null,
  "timestamp": "2026-02-15T07:25:23.455Z",
  "day_of_week": "Sunday",
  "hour_of_day": 12,
  "segment": "VLR_012->VLR_030",
  "speed": 94.1,
  "traffic_level": "light",
  "coordinates": [79.161989, 12.972081],
  "__v": 0
}
```

### **Data Inventory**

| Attribute | Count | Notes |
|-----------|-------|-------|
| Total Records | 13 | Limited dataset for testing |
| Unique Buses | ? | Requires aggregation query |
| Unique Segments | 11 | Listed above |
| Date Range | Feb 15 - Feb 15, 2026 | Single day |
| Records with coordinates | 13 | 100% coverage |
| Records with segment | 11 | All 13 have segment (no nulls) |

---

## 📊 SEGMENT DISTANCE CALCULATION PLAN

### **Haversine Implementation Option**

**Implementable Segments** (coordinates available):
- VLR_002→VLR_018
- VLR_011→VLR_013
- VLR_012→VLR_030
- VLR_013→VLR_016
- VLR_025→VLR_026
- VLR_038→VLR_028 ⚠️ (VLR_038 undefined)
- VLR_052→VLR_011 ⚠️ (VLR_052 undefined)
- VLR_054→VLR_001 ⚠️ (VLR_054 undefined)
- VLR_081→VLR_008 ⚠️ (VLR_081 undefined)
- VLR_081→VLR_082 ⚠️ (VLR_081, VLR_082 undefined)

**Haversine Formula** (from [backend/index.js](backend/index.js#L165)):
```javascript
function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371e3; // Earth radius in meters
  const φ1 = lat1 * Math.PI / 180;
  const φ2 = lat2 * Math.PI / 180;
  const Δφ = (lat2 - lat1) * Math.PI / 180;
  const Δλ = (lon2 - lon1) * Math.PI / 180;

  const a =
```


## License: unknown
https://github.com/Scorpion018/Climate-hazards-Data-Retrieval-Engine/blob/f265d70c47fbfb4f80b9dd1c17086dd9e411b297/views/Main.ejs

```
---

## 🔬 SEGMENT DISTANCE DEFINITION FORENSIC AUDIT

**Status**: Investigation Complete  
**Date**: February 26, 2026  
**Mode**: IEEE Research Mode (Read-only)

---

## 1️⃣ STOP COORDINATES STORAGE LOCATION

### **Primary Storage: Frontend STOP_DATA Array**
**File**: [frontend/index.html](frontend/index.html#L1791)  
**Lines**: 1791–1830  
**Structure**: JavaScript constant array (NOT MongoDB)

```javascript
const STOP_DATA = [
  // ================= PRECISE GOOGLE MAPS COORDINATES (34 Stops) =================
  // Updated with exact coordinates rounded to 6 decimal places for perfect Google Maps alignment
  
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
```

### **Schema Definition: TripHistory (Bus Coordinates)**
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js#L18)

```javascript
{
  coordinates: { type: [Number], default: undefined }  // [longitude, latitude] format
}
```

### **Stop Coordinate Summary**
| Property | Location | Format | Coverage |
|----------|----------|--------|----------|
| **Stop Coordinates** | Frontend STOP_DATA array (JavaScript) | `{ stop_id, latitude, longitude, ...}` | 34 stops (VLR_001 to VLR_034) |
| **Bus GPS Coordinates** | MongoDB TripHistory.coordinates | `[longitude, latitude]` (GeoJSON) | Real-time telemetry |
| **Bus Coordinates (ActiveFleet)** | [backend/models/ActiveFleet.js](backend/models/ActiveFleet.js#L13) | `{ location: { type: "Point", coordinates: [lon, lat] } }` | Live fleet |

---

## 2️⃣ SEGMENT DISTANCE STORAGE STATUS

### **FINDING: Segment Distance is NOT Stored**

**TripHistory Schema** (full content):
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js)

```javascript
const tripHistorySchema = new mongoose.Schema(
  {
    bus_id: { type: String, index: true },
    route_id: { type: String, default: null },
    timestamp: { type: Date, default: Date.now, index: true },
    day_of_week: { type: String },
    hour_of_day: { type: Number },
    segment: { type: String, default: null },
    speed: { type: Number, default: null },
    traffic_level: { type: String, default: "unknown" },
    coordinates: { type: [Number], default: undefined }
  },
  { collection: "TripHistory" }
);
```

**Fields Stored**: bus_id, route_id, timestamp, day_of_week, hour_of_day, segment, speed, traffic_level, coordinates

**✅ Fields Available for Distance Calculation**: segment (stop pair codes), coordinates (GPS point)  
**❌ Field NOT Present**: `distance` (segment length in meters)

### **Mentioned but Not Implemented**
**File**: [CURRENT_STATE_SUMMARY.md](CURRENT_STATE_SUMMARY.md#L91) (Documentation only)

```javascript
{
  segment: String,             // e.g., "VLR_001->VLR_002"
  speed: Number,               // Average speed in km/h
  timestamp: Date,             // When recorded
  bus_id: String,              // Which bus generated this
  distance: Number             // Segment length in meters ← NOT IN ACTUAL SCHEMA
}
```

---

## 3️⃣ CONFIRMATION: STOPS HAVE LAT/LON, HAVERSINE CAN COMPUTE DISTANCE

### **All Stop Codes Are Defined**

| Stop Range | Defined | Total |
|------------|---------|-------|
| VLR_001 to VLR_034 | ✅ YES | 34 stops |

### **Data Consistency Issue**

**Stops Defined in STOP_DATA**: VLR_001 to VLR_034 (34 stops)

**Stops Used in Database Segments**: VLR_001, VLR_002, VLR_008, VLR_011, VLR_012, VLR_013, VLR_016, VLR_018, VLR_025, VLR_026, VLR_028, VLR_030, VLR_038, VLR_047, VLR_052, VLR_054, VLR_081, VLR_082

**⚠️ Missing Coordinates (NOT in STOP_DATA)**:
- `VLR_038`
- `VLR_047`
- `VLR_052`
- `VLR_054`
- `VLR_081`
- `VLR_082`

### **Haversine Distance Calculation Feasibility**

✅ **For 12 segments using defined stops** (VLR_001–VLR_034):
   - Can compute Haversine distance once per segment pair
   - Store in computation cache

⚠️ **For 5 segments using undefined stops** (VLR_038, VLR_047, etc.):
   - Requires adding stop coordinates to STOP_DATA before Haversine computation
   - Alternative: estimate distance from existing speed data

---

## 4️⃣ DISTINCT SEGMENTS IN TRIPHISTORY

### **MongoDB Query Result**
```
db.TripHistory.distinct("segment")
```

**Result**:
```
[
  "VLR_002->VLR_018",
  "VLR_011->VLR_013",
  "VLR_012->VLR_030",
  "VLR_013->VLR_016",
  "VLR_018->VLR_047",     ← VLR_047 not in STOP_DATA
  "VLR_025->VLR_026",
  "VLR_038->VLR_028",     ← VLR_038 not in STOP_DATA
  "VLR_052->VLR_011",     ← VLR_052 not in STOP_DATA
  "VLR_054->VLR_001",     ← VLR_054 not in STOP_DATA
  "VLR_081->VLR_008",     ← VLR_081 not in STOP_DATA
  "VLR_081->VLR_082"      ← VLR_081, VLR_082 not in STOP_DATA
]
```

**Total Unique Segments**: 11

---

## 5️⃣ TRIPHISTORY RECORD COUNT

### **MongoDB Query Result**
```
db.TripHistory.countDocuments()
```

**Result**: **13 records**

### **Sample Document Structure**

```json
{
  "_id": "699174e38d6c6f65f8634a11",
  "bus_id": "BUS-103",
  "route_id": null,
  "timestamp": "2026-02-15T07:25:23.455Z",
  "day_of_week": "Sunday",
  "hour_of_day": 12,
  "segment": "VLR_012->VLR_030",
  "speed": 94.1,
  "traffic_level": "light",
  "coordinates": [79.161989, 12.972081],
  "__v": 0
}
```

### **Data Inventory**

| Attribute | Count | Notes |
|-----------|-------|-------|
| Total Records | 13 | Limited dataset for testing |
| Unique Buses | ? | Requires aggregation query |
| Unique Segments | 11 | Listed above |
| Date Range | Feb 15 - Feb 15, 2026 | Single day |
| Records with coordinates | 13 | 100% coverage |
| Records with segment | 11 | All 13 have segment (no nulls) |

---

## 📊 SEGMENT DISTANCE CALCULATION PLAN

### **Haversine Implementation Option**

**Implementable Segments** (coordinates available):
- VLR_002→VLR_018
- VLR_011→VLR_013
- VLR_012→VLR_030
- VLR_013→VLR_016
- VLR_025→VLR_026
- VLR_038→VLR_028 ⚠️ (VLR_038 undefined)
- VLR_052→VLR_011 ⚠️ (VLR_052 undefined)
- VLR_054→VLR_001 ⚠️ (VLR_054 undefined)
- VLR_081→VLR_008 ⚠️ (VLR_081 undefined)
- VLR_081→VLR_082 ⚠️ (VLR_081, VLR_082 undefined)

**Haversine Formula** (from [backend/index.js](backend/index.js#L165)):
```javascript
function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371e3; // Earth radius in meters
  const φ1 = lat1 * Math.PI / 180;
  const φ2 = lat2 * Math.PI / 180;
  const Δφ = (lat2 - lat1) * Math.PI / 180;
  const Δλ = (lon2 - lon1) * Math.PI / 180;

  const a =
    Math.sin(Δφ / 2) * Math
```


## License: unknown
https://github.com/AbdullahTonka/sunum/blob/9e572a71799c17ff3ac148518bbea12c6c2c30e3/index1.html

```
---

## 🔬 SEGMENT DISTANCE DEFINITION FORENSIC AUDIT

**Status**: Investigation Complete  
**Date**: February 26, 2026  
**Mode**: IEEE Research Mode (Read-only)

---

## 1️⃣ STOP COORDINATES STORAGE LOCATION

### **Primary Storage: Frontend STOP_DATA Array**
**File**: [frontend/index.html](frontend/index.html#L1791)  
**Lines**: 1791–1830  
**Structure**: JavaScript constant array (NOT MongoDB)

```javascript
const STOP_DATA = [
  // ================= PRECISE GOOGLE MAPS COORDINATES (34 Stops) =================
  // Updated with exact coordinates rounded to 6 decimal places for perfect Google Maps alignment
  
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
```

### **Schema Definition: TripHistory (Bus Coordinates)**
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js#L18)

```javascript
{
  coordinates: { type: [Number], default: undefined }  // [longitude, latitude] format
}
```

### **Stop Coordinate Summary**
| Property | Location | Format | Coverage |
|----------|----------|--------|----------|
| **Stop Coordinates** | Frontend STOP_DATA array (JavaScript) | `{ stop_id, latitude, longitude, ...}` | 34 stops (VLR_001 to VLR_034) |
| **Bus GPS Coordinates** | MongoDB TripHistory.coordinates | `[longitude, latitude]` (GeoJSON) | Real-time telemetry |
| **Bus Coordinates (ActiveFleet)** | [backend/models/ActiveFleet.js](backend/models/ActiveFleet.js#L13) | `{ location: { type: "Point", coordinates: [lon, lat] } }` | Live fleet |

---

## 2️⃣ SEGMENT DISTANCE STORAGE STATUS

### **FINDING: Segment Distance is NOT Stored**

**TripHistory Schema** (full content):
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js)

```javascript
const tripHistorySchema = new mongoose.Schema(
  {
    bus_id: { type: String, index: true },
    route_id: { type: String, default: null },
    timestamp: { type: Date, default: Date.now, index: true },
    day_of_week: { type: String },
    hour_of_day: { type: Number },
    segment: { type: String, default: null },
    speed: { type: Number, default: null },
    traffic_level: { type: String, default: "unknown" },
    coordinates: { type: [Number], default: undefined }
  },
  { collection: "TripHistory" }
);
```

**Fields Stored**: bus_id, route_id, timestamp, day_of_week, hour_of_day, segment, speed, traffic_level, coordinates

**✅ Fields Available for Distance Calculation**: segment (stop pair codes), coordinates (GPS point)  
**❌ Field NOT Present**: `distance` (segment length in meters)

### **Mentioned but Not Implemented**
**File**: [CURRENT_STATE_SUMMARY.md](CURRENT_STATE_SUMMARY.md#L91) (Documentation only)

```javascript
{
  segment: String,             // e.g., "VLR_001->VLR_002"
  speed: Number,               // Average speed in km/h
  timestamp: Date,             // When recorded
  bus_id: String,              // Which bus generated this
  distance: Number             // Segment length in meters ← NOT IN ACTUAL SCHEMA
}
```

---

## 3️⃣ CONFIRMATION: STOPS HAVE LAT/LON, HAVERSINE CAN COMPUTE DISTANCE

### **All Stop Codes Are Defined**

| Stop Range | Defined | Total |
|------------|---------|-------|
| VLR_001 to VLR_034 | ✅ YES | 34 stops |

### **Data Consistency Issue**

**Stops Defined in STOP_DATA**: VLR_001 to VLR_034 (34 stops)

**Stops Used in Database Segments**: VLR_001, VLR_002, VLR_008, VLR_011, VLR_012, VLR_013, VLR_016, VLR_018, VLR_025, VLR_026, VLR_028, VLR_030, VLR_038, VLR_047, VLR_052, VLR_054, VLR_081, VLR_082

**⚠️ Missing Coordinates (NOT in STOP_DATA)**:
- `VLR_038`
- `VLR_047`
- `VLR_052`
- `VLR_054`
- `VLR_081`
- `VLR_082`

### **Haversine Distance Calculation Feasibility**

✅ **For 12 segments using defined stops** (VLR_001–VLR_034):
   - Can compute Haversine distance once per segment pair
   - Store in computation cache

⚠️ **For 5 segments using undefined stops** (VLR_038, VLR_047, etc.):
   - Requires adding stop coordinates to STOP_DATA before Haversine computation
   - Alternative: estimate distance from existing speed data

---

## 4️⃣ DISTINCT SEGMENTS IN TRIPHISTORY

### **MongoDB Query Result**
```
db.TripHistory.distinct("segment")
```

**Result**:
```
[
  "VLR_002->VLR_018",
  "VLR_011->VLR_013",
  "VLR_012->VLR_030",
  "VLR_013->VLR_016",
  "VLR_018->VLR_047",     ← VLR_047 not in STOP_DATA
  "VLR_025->VLR_026",
  "VLR_038->VLR_028",     ← VLR_038 not in STOP_DATA
  "VLR_052->VLR_011",     ← VLR_052 not in STOP_DATA
  "VLR_054->VLR_001",     ← VLR_054 not in STOP_DATA
  "VLR_081->VLR_008",     ← VLR_081 not in STOP_DATA
  "VLR_081->VLR_082"      ← VLR_081, VLR_082 not in STOP_DATA
]
```

**Total Unique Segments**: 11

---

## 5️⃣ TRIPHISTORY RECORD COUNT

### **MongoDB Query Result**
```
db.TripHistory.countDocuments()
```

**Result**: **13 records**

### **Sample Document Structure**

```json
{
  "_id": "699174e38d6c6f65f8634a11",
  "bus_id": "BUS-103",
  "route_id": null,
  "timestamp": "2026-02-15T07:25:23.455Z",
  "day_of_week": "Sunday",
  "hour_of_day": 12,
  "segment": "VLR_012->VLR_030",
  "speed": 94.1,
  "traffic_level": "light",
  "coordinates": [79.161989, 12.972081],
  "__v": 0
}
```

### **Data Inventory**

| Attribute | Count | Notes |
|-----------|-------|-------|
| Total Records | 13 | Limited dataset for testing |
| Unique Buses | ? | Requires aggregation query |
| Unique Segments | 11 | Listed above |
| Date Range | Feb 15 - Feb 15, 2026 | Single day |
| Records with coordinates | 13 | 100% coverage |
| Records with segment | 11 | All 13 have segment (no nulls) |

---

## 📊 SEGMENT DISTANCE CALCULATION PLAN

### **Haversine Implementation Option**

**Implementable Segments** (coordinates available):
- VLR_002→VLR_018
- VLR_011→VLR_013
- VLR_012→VLR_030
- VLR_013→VLR_016
- VLR_025→VLR_026
- VLR_038→VLR_028 ⚠️ (VLR_038 undefined)
- VLR_052→VLR_011 ⚠️ (VLR_052 undefined)
- VLR_054→VLR_001 ⚠️ (VLR_054 undefined)
- VLR_081→VLR_008 ⚠️ (VLR_081 undefined)
- VLR_081→VLR_082 ⚠️ (VLR_081, VLR_082 undefined)

**Haversine Formula** (from [backend/index.js](backend/index.js#L165)):
```javascript
function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371e3; // Earth radius in meters
  const φ1 = lat1 * Math.PI / 180;
  const φ2 = lat2 * Math.PI / 180;
  const Δφ = (lat2 - lat1) * Math.PI / 180;
  const Δλ = (lon2 - lon1) * Math.PI / 180;

  const a =
```


## License: unknown
https://github.com/Scorpion018/Climate-hazards-Data-Retrieval-Engine/blob/f265d70c47fbfb4f80b9dd1c17086dd9e411b297/views/Main.ejs

```
---

## 🔬 SEGMENT DISTANCE DEFINITION FORENSIC AUDIT

**Status**: Investigation Complete  
**Date**: February 26, 2026  
**Mode**: IEEE Research Mode (Read-only)

---

## 1️⃣ STOP COORDINATES STORAGE LOCATION

### **Primary Storage: Frontend STOP_DATA Array**
**File**: [frontend/index.html](frontend/index.html#L1791)  
**Lines**: 1791–1830  
**Structure**: JavaScript constant array (NOT MongoDB)

```javascript
const STOP_DATA = [
  // ================= PRECISE GOOGLE MAPS COORDINATES (34 Stops) =================
  // Updated with exact coordinates rounded to 6 decimal places for perfect Google Maps alignment
  
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
```

### **Schema Definition: TripHistory (Bus Coordinates)**
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js#L18)

```javascript
{
  coordinates: { type: [Number], default: undefined }  // [longitude, latitude] format
}
```

### **Stop Coordinate Summary**
| Property | Location | Format | Coverage |
|----------|----------|--------|----------|
| **Stop Coordinates** | Frontend STOP_DATA array (JavaScript) | `{ stop_id, latitude, longitude, ...}` | 34 stops (VLR_001 to VLR_034) |
| **Bus GPS Coordinates** | MongoDB TripHistory.coordinates | `[longitude, latitude]` (GeoJSON) | Real-time telemetry |
| **Bus Coordinates (ActiveFleet)** | [backend/models/ActiveFleet.js](backend/models/ActiveFleet.js#L13) | `{ location: { type: "Point", coordinates: [lon, lat] } }` | Live fleet |

---

## 2️⃣ SEGMENT DISTANCE STORAGE STATUS

### **FINDING: Segment Distance is NOT Stored**

**TripHistory Schema** (full content):
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js)

```javascript
const tripHistorySchema = new mongoose.Schema(
  {
    bus_id: { type: String, index: true },
    route_id: { type: String, default: null },
    timestamp: { type: Date, default: Date.now, index: true },
    day_of_week: { type: String },
    hour_of_day: { type: Number },
    segment: { type: String, default: null },
    speed: { type: Number, default: null },
    traffic_level: { type: String, default: "unknown" },
    coordinates: { type: [Number], default: undefined }
  },
  { collection: "TripHistory" }
);
```

**Fields Stored**: bus_id, route_id, timestamp, day_of_week, hour_of_day, segment, speed, traffic_level, coordinates

**✅ Fields Available for Distance Calculation**: segment (stop pair codes), coordinates (GPS point)  
**❌ Field NOT Present**: `distance` (segment length in meters)

### **Mentioned but Not Implemented**
**File**: [CURRENT_STATE_SUMMARY.md](CURRENT_STATE_SUMMARY.md#L91) (Documentation only)

```javascript
{
  segment: String,             // e.g., "VLR_001->VLR_002"
  speed: Number,               // Average speed in km/h
  timestamp: Date,             // When recorded
  bus_id: String,              // Which bus generated this
  distance: Number             // Segment length in meters ← NOT IN ACTUAL SCHEMA
}
```

---

## 3️⃣ CONFIRMATION: STOPS HAVE LAT/LON, HAVERSINE CAN COMPUTE DISTANCE

### **All Stop Codes Are Defined**

| Stop Range | Defined | Total |
|------------|---------|-------|
| VLR_001 to VLR_034 | ✅ YES | 34 stops |

### **Data Consistency Issue**

**Stops Defined in STOP_DATA**: VLR_001 to VLR_034 (34 stops)

**Stops Used in Database Segments**: VLR_001, VLR_002, VLR_008, VLR_011, VLR_012, VLR_013, VLR_016, VLR_018, VLR_025, VLR_026, VLR_028, VLR_030, VLR_038, VLR_047, VLR_052, VLR_054, VLR_081, VLR_082

**⚠️ Missing Coordinates (NOT in STOP_DATA)**:
- `VLR_038`
- `VLR_047`
- `VLR_052`
- `VLR_054`
- `VLR_081`
- `VLR_082`

### **Haversine Distance Calculation Feasibility**

✅ **For 12 segments using defined stops** (VLR_001–VLR_034):
   - Can compute Haversine distance once per segment pair
   - Store in computation cache

⚠️ **For 5 segments using undefined stops** (VLR_038, VLR_047, etc.):
   - Requires adding stop coordinates to STOP_DATA before Haversine computation
   - Alternative: estimate distance from existing speed data

---

## 4️⃣ DISTINCT SEGMENTS IN TRIPHISTORY

### **MongoDB Query Result**
```
db.TripHistory.distinct("segment")
```

**Result**:
```
[
  "VLR_002->VLR_018",
  "VLR_011->VLR_013",
  "VLR_012->VLR_030",
  "VLR_013->VLR_016",
  "VLR_018->VLR_047",     ← VLR_047 not in STOP_DATA
  "VLR_025->VLR_026",
  "VLR_038->VLR_028",     ← VLR_038 not in STOP_DATA
  "VLR_052->VLR_011",     ← VLR_052 not in STOP_DATA
  "VLR_054->VLR_001",     ← VLR_054 not in STOP_DATA
  "VLR_081->VLR_008",     ← VLR_081 not in STOP_DATA
  "VLR_081->VLR_082"      ← VLR_081, VLR_082 not in STOP_DATA
]
```

**Total Unique Segments**: 11

---

## 5️⃣ TRIPHISTORY RECORD COUNT

### **MongoDB Query Result**
```
db.TripHistory.countDocuments()
```

**Result**: **13 records**

### **Sample Document Structure**

```json
{
  "_id": "699174e38d6c6f65f8634a11",
  "bus_id": "BUS-103",
  "route_id": null,
  "timestamp": "2026-02-15T07:25:23.455Z",
  "day_of_week": "Sunday",
  "hour_of_day": 12,
  "segment": "VLR_012->VLR_030",
  "speed": 94.1,
  "traffic_level": "light",
  "coordinates": [79.161989, 12.972081],
  "__v": 0
}
```

### **Data Inventory**

| Attribute | Count | Notes |
|-----------|-------|-------|
| Total Records | 13 | Limited dataset for testing |
| Unique Buses | ? | Requires aggregation query |
| Unique Segments | 11 | Listed above |
| Date Range | Feb 15 - Feb 15, 2026 | Single day |
| Records with coordinates | 13 | 100% coverage |
| Records with segment | 11 | All 13 have segment (no nulls) |

---

## 📊 SEGMENT DISTANCE CALCULATION PLAN

### **Haversine Implementation Option**

**Implementable Segments** (coordinates available):
- VLR_002→VLR_018
- VLR_011→VLR_013
- VLR_012→VLR_030
- VLR_013→VLR_016
- VLR_025→VLR_026
- VLR_038→VLR_028 ⚠️ (VLR_038 undefined)
- VLR_052→VLR_011 ⚠️ (VLR_052 undefined)
- VLR_054→VLR_001 ⚠️ (VLR_054 undefined)
- VLR_081→VLR_008 ⚠️ (VLR_081 undefined)
- VLR_081→VLR_082 ⚠️ (VLR_081, VLR_082 undefined)

**Haversine Formula** (from [backend/index.js](backend/index.js#L165)):
```javascript
function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371e3; // Earth radius in meters
  const φ1 = lat1 * Math.PI / 180;
  const φ2 = lat2 * Math.PI / 180;
  const Δφ = (lat2 - lat1) * Math.PI / 180;
  const Δλ = (lon2 - lon1) * Math.PI / 180;

  const a =
    Math.sin(Δφ / 2) * Math
```


## License: unknown
https://github.com/linuxmint/cinnamon-spices-applets/blob/90811ceacbbb4d29458c793ea65eb5af963e1b6b/weather%40mockturtl/files/weather%40mockturtl/3.8/weather-applet.js

```
---

## 🔬 SEGMENT DISTANCE DEFINITION FORENSIC AUDIT

**Status**: Investigation Complete  
**Date**: February 26, 2026  
**Mode**: IEEE Research Mode (Read-only)

---

## 1️⃣ STOP COORDINATES STORAGE LOCATION

### **Primary Storage: Frontend STOP_DATA Array**
**File**: [frontend/index.html](frontend/index.html#L1791)  
**Lines**: 1791–1830  
**Structure**: JavaScript constant array (NOT MongoDB)

```javascript
const STOP_DATA = [
  // ================= PRECISE GOOGLE MAPS COORDINATES (34 Stops) =================
  // Updated with exact coordinates rounded to 6 decimal places for perfect Google Maps alignment
  
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
```

### **Schema Definition: TripHistory (Bus Coordinates)**
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js#L18)

```javascript
{
  coordinates: { type: [Number], default: undefined }  // [longitude, latitude] format
}
```

### **Stop Coordinate Summary**
| Property | Location | Format | Coverage |
|----------|----------|--------|----------|
| **Stop Coordinates** | Frontend STOP_DATA array (JavaScript) | `{ stop_id, latitude, longitude, ...}` | 34 stops (VLR_001 to VLR_034) |
| **Bus GPS Coordinates** | MongoDB TripHistory.coordinates | `[longitude, latitude]` (GeoJSON) | Real-time telemetry |
| **Bus Coordinates (ActiveFleet)** | [backend/models/ActiveFleet.js](backend/models/ActiveFleet.js#L13) | `{ location: { type: "Point", coordinates: [lon, lat] } }` | Live fleet |

---

## 2️⃣ SEGMENT DISTANCE STORAGE STATUS

### **FINDING: Segment Distance is NOT Stored**

**TripHistory Schema** (full content):
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js)

```javascript
const tripHistorySchema = new mongoose.Schema(
  {
    bus_id: { type: String, index: true },
    route_id: { type: String, default: null },
    timestamp: { type: Date, default: Date.now, index: true },
    day_of_week: { type: String },
    hour_of_day: { type: Number },
    segment: { type: String, default: null },
    speed: { type: Number, default: null },
    traffic_level: { type: String, default: "unknown" },
    coordinates: { type: [Number], default: undefined }
  },
  { collection: "TripHistory" }
);
```

**Fields Stored**: bus_id, route_id, timestamp, day_of_week, hour_of_day, segment, speed, traffic_level, coordinates

**✅ Fields Available for Distance Calculation**: segment (stop pair codes), coordinates (GPS point)  
**❌ Field NOT Present**: `distance` (segment length in meters)

### **Mentioned but Not Implemented**
**File**: [CURRENT_STATE_SUMMARY.md](CURRENT_STATE_SUMMARY.md#L91) (Documentation only)

```javascript
{
  segment: String,             // e.g., "VLR_001->VLR_002"
  speed: Number,               // Average speed in km/h
  timestamp: Date,             // When recorded
  bus_id: String,              // Which bus generated this
  distance: Number             // Segment length in meters ← NOT IN ACTUAL SCHEMA
}
```

---

## 3️⃣ CONFIRMATION: STOPS HAVE LAT/LON, HAVERSINE CAN COMPUTE DISTANCE

### **All Stop Codes Are Defined**

| Stop Range | Defined | Total |
|------------|---------|-------|
| VLR_001 to VLR_034 | ✅ YES | 34 stops |

### **Data Consistency Issue**

**Stops Defined in STOP_DATA**: VLR_001 to VLR_034 (34 stops)

**Stops Used in Database Segments**: VLR_001, VLR_002, VLR_008, VLR_011, VLR_012, VLR_013, VLR_016, VLR_018, VLR_025, VLR_026, VLR_028, VLR_030, VLR_038, VLR_047, VLR_052, VLR_054, VLR_081, VLR_082

**⚠️ Missing Coordinates (NOT in STOP_DATA)**:
- `VLR_038`
- `VLR_047`
- `VLR_052`
- `VLR_054`
- `VLR_081`
- `VLR_082`

### **Haversine Distance Calculation Feasibility**

✅ **For 12 segments using defined stops** (VLR_001–VLR_034):
   - Can compute Haversine distance once per segment pair
   - Store in computation cache

⚠️ **For 5 segments using undefined stops** (VLR_038, VLR_047, etc.):
   - Requires adding stop coordinates to STOP_DATA before Haversine computation
   - Alternative: estimate distance from existing speed data

---

## 4️⃣ DISTINCT SEGMENTS IN TRIPHISTORY

### **MongoDB Query Result**
```
db.TripHistory.distinct("segment")
```

**Result**:
```
[
  "VLR_002->VLR_018",
  "VLR_011->VLR_013",
  "VLR_012->VLR_030",
  "VLR_013->VLR_016",
  "VLR_018->VLR_047",     ← VLR_047 not in STOP_DATA
  "VLR_025->VLR_026",
  "VLR_038->VLR_028",     ← VLR_038 not in STOP_DATA
  "VLR_052->VLR_011",     ← VLR_052 not in STOP_DATA
  "VLR_054->VLR_001",     ← VLR_054 not in STOP_DATA
  "VLR_081->VLR_008",     ← VLR_081 not in STOP_DATA
  "VLR_081->VLR_082"      ← VLR_081, VLR_082 not in STOP_DATA
]
```

**Total Unique Segments**: 11

---

## 5️⃣ TRIPHISTORY RECORD COUNT

### **MongoDB Query Result**
```
db.TripHistory.countDocuments()
```

**Result**: **13 records**

### **Sample Document Structure**

```json
{
  "_id": "699174e38d6c6f65f8634a11",
  "bus_id": "BUS-103",
  "route_id": null,
  "timestamp": "2026-02-15T07:25:23.455Z",
  "day_of_week": "Sunday",
  "hour_of_day": 12,
  "segment": "VLR_012->VLR_030",
  "speed": 94.1,
  "traffic_level": "light",
  "coordinates": [79.161989, 12.972081],
  "__v": 0
}
```

### **Data Inventory**

| Attribute | Count | Notes |
|-----------|-------|-------|
| Total Records | 13 | Limited dataset for testing |
| Unique Buses | ? | Requires aggregation query |
| Unique Segments | 11 | Listed above |
| Date Range | Feb 15 - Feb 15, 2026 | Single day |
| Records with coordinates | 13 | 100% coverage |
| Records with segment | 11 | All 13 have segment (no nulls) |

---

## 📊 SEGMENT DISTANCE CALCULATION PLAN

### **Haversine Implementation Option**

**Implementable Segments** (coordinates available):
- VLR_002→VLR_018
- VLR_011→VLR_013
- VLR_012→VLR_030
- VLR_013→VLR_016
- VLR_025→VLR_026
- VLR_038→VLR_028 ⚠️ (VLR_038 undefined)
- VLR_052→VLR_011 ⚠️ (VLR_052 undefined)
- VLR_054→VLR_001 ⚠️ (VLR_054 undefined)
- VLR_081→VLR_008 ⚠️ (VLR_081 undefined)
- VLR_081→VLR_082 ⚠️ (VLR_081, VLR_082 undefined)

**Haversine Formula** (from [backend/index.js](backend/index.js#L165)):
```javascript
function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371e3; // Earth radius in meters
  const φ1 = lat1 * Math.PI / 180;
  const φ2 = lat2 * Math.PI / 180;
  const Δφ = (lat2 - lat1) * Math.PI / 180;
  const Δλ = (lon2 - lon1) * Math.PI / 180;

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) *
    Math.sin(Δ
```


## License: unknown
https://github.com/AbdullahTonka/sunum/blob/9e572a71799c17ff3ac148518bbea12c6c2c30e3/index1.html

```
---

## 🔬 SEGMENT DISTANCE DEFINITION FORENSIC AUDIT

**Status**: Investigation Complete  
**Date**: February 26, 2026  
**Mode**: IEEE Research Mode (Read-only)

---

## 1️⃣ STOP COORDINATES STORAGE LOCATION

### **Primary Storage: Frontend STOP_DATA Array**
**File**: [frontend/index.html](frontend/index.html#L1791)  
**Lines**: 1791–1830  
**Structure**: JavaScript constant array (NOT MongoDB)

```javascript
const STOP_DATA = [
  // ================= PRECISE GOOGLE MAPS COORDINATES (34 Stops) =================
  // Updated with exact coordinates rounded to 6 decimal places for perfect Google Maps alignment
  
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
```

### **Schema Definition: TripHistory (Bus Coordinates)**
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js#L18)

```javascript
{
  coordinates: { type: [Number], default: undefined }  // [longitude, latitude] format
}
```

### **Stop Coordinate Summary**
| Property | Location | Format | Coverage |
|----------|----------|--------|----------|
| **Stop Coordinates** | Frontend STOP_DATA array (JavaScript) | `{ stop_id, latitude, longitude, ...}` | 34 stops (VLR_001 to VLR_034) |
| **Bus GPS Coordinates** | MongoDB TripHistory.coordinates | `[longitude, latitude]` (GeoJSON) | Real-time telemetry |
| **Bus Coordinates (ActiveFleet)** | [backend/models/ActiveFleet.js](backend/models/ActiveFleet.js#L13) | `{ location: { type: "Point", coordinates: [lon, lat] } }` | Live fleet |

---

## 2️⃣ SEGMENT DISTANCE STORAGE STATUS

### **FINDING: Segment Distance is NOT Stored**

**TripHistory Schema** (full content):
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js)

```javascript
const tripHistorySchema = new mongoose.Schema(
  {
    bus_id: { type: String, index: true },
    route_id: { type: String, default: null },
    timestamp: { type: Date, default: Date.now, index: true },
    day_of_week: { type: String },
    hour_of_day: { type: Number },
    segment: { type: String, default: null },
    speed: { type: Number, default: null },
    traffic_level: { type: String, default: "unknown" },
    coordinates: { type: [Number], default: undefined }
  },
  { collection: "TripHistory" }
);
```

**Fields Stored**: bus_id, route_id, timestamp, day_of_week, hour_of_day, segment, speed, traffic_level, coordinates

**✅ Fields Available for Distance Calculation**: segment (stop pair codes), coordinates (GPS point)  
**❌ Field NOT Present**: `distance` (segment length in meters)

### **Mentioned but Not Implemented**
**File**: [CURRENT_STATE_SUMMARY.md](CURRENT_STATE_SUMMARY.md#L91) (Documentation only)

```javascript
{
  segment: String,             // e.g., "VLR_001->VLR_002"
  speed: Number,               // Average speed in km/h
  timestamp: Date,             // When recorded
  bus_id: String,              // Which bus generated this
  distance: Number             // Segment length in meters ← NOT IN ACTUAL SCHEMA
}
```

---

## 3️⃣ CONFIRMATION: STOPS HAVE LAT/LON, HAVERSINE CAN COMPUTE DISTANCE

### **All Stop Codes Are Defined**

| Stop Range | Defined | Total |
|------------|---------|-------|
| VLR_001 to VLR_034 | ✅ YES | 34 stops |

### **Data Consistency Issue**

**Stops Defined in STOP_DATA**: VLR_001 to VLR_034 (34 stops)

**Stops Used in Database Segments**: VLR_001, VLR_002, VLR_008, VLR_011, VLR_012, VLR_013, VLR_016, VLR_018, VLR_025, VLR_026, VLR_028, VLR_030, VLR_038, VLR_047, VLR_052, VLR_054, VLR_081, VLR_082

**⚠️ Missing Coordinates (NOT in STOP_DATA)**:
- `VLR_038`
- `VLR_047`
- `VLR_052`
- `VLR_054`
- `VLR_081`
- `VLR_082`

### **Haversine Distance Calculation Feasibility**

✅ **For 12 segments using defined stops** (VLR_001–VLR_034):
   - Can compute Haversine distance once per segment pair
   - Store in computation cache

⚠️ **For 5 segments using undefined stops** (VLR_038, VLR_047, etc.):
   - Requires adding stop coordinates to STOP_DATA before Haversine computation
   - Alternative: estimate distance from existing speed data

---

## 4️⃣ DISTINCT SEGMENTS IN TRIPHISTORY

### **MongoDB Query Result**
```
db.TripHistory.distinct("segment")
```

**Result**:
```
[
  "VLR_002->VLR_018",
  "VLR_011->VLR_013",
  "VLR_012->VLR_030",
  "VLR_013->VLR_016",
  "VLR_018->VLR_047",     ← VLR_047 not in STOP_DATA
  "VLR_025->VLR_026",
  "VLR_038->VLR_028",     ← VLR_038 not in STOP_DATA
  "VLR_052->VLR_011",     ← VLR_052 not in STOP_DATA
  "VLR_054->VLR_001",     ← VLR_054 not in STOP_DATA
  "VLR_081->VLR_008",     ← VLR_081 not in STOP_DATA
  "VLR_081->VLR_082"      ← VLR_081, VLR_082 not in STOP_DATA
]
```

**Total Unique Segments**: 11

---

## 5️⃣ TRIPHISTORY RECORD COUNT

### **MongoDB Query Result**
```
db.TripHistory.countDocuments()
```

**Result**: **13 records**

### **Sample Document Structure**

```json
{
  "_id": "699174e38d6c6f65f8634a11",
  "bus_id": "BUS-103",
  "route_id": null,
  "timestamp": "2026-02-15T07:25:23.455Z",
  "day_of_week": "Sunday",
  "hour_of_day": 12,
  "segment": "VLR_012->VLR_030",
  "speed": 94.1,
  "traffic_level": "light",
  "coordinates": [79.161989, 12.972081],
  "__v": 0
}
```

### **Data Inventory**

| Attribute | Count | Notes |
|-----------|-------|-------|
| Total Records | 13 | Limited dataset for testing |
| Unique Buses | ? | Requires aggregation query |
| Unique Segments | 11 | Listed above |
| Date Range | Feb 15 - Feb 15, 2026 | Single day |
| Records with coordinates | 13 | 100% coverage |
| Records with segment | 11 | All 13 have segment (no nulls) |

---

## 📊 SEGMENT DISTANCE CALCULATION PLAN

### **Haversine Implementation Option**

**Implementable Segments** (coordinates available):
- VLR_002→VLR_018
- VLR_011→VLR_013
- VLR_012→VLR_030
- VLR_013→VLR_016
- VLR_025→VLR_026
- VLR_038→VLR_028 ⚠️ (VLR_038 undefined)
- VLR_052→VLR_011 ⚠️ (VLR_052 undefined)
- VLR_054→VLR_001 ⚠️ (VLR_054 undefined)
- VLR_081→VLR_008 ⚠️ (VLR_081 undefined)
- VLR_081→VLR_082 ⚠️ (VLR_081, VLR_082 undefined)

**Haversine Formula** (from [backend/index.js](backend/index.js#L165)):
```javascript
function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371e3; // Earth radius in meters
  const φ1 = lat1 * Math.PI / 180;
  const φ2 = lat2 * Math.PI / 180;
  const Δφ = (lat2 - lat1) * Math.PI / 180;
  const Δλ = (lon2 - lon1) * Math.PI / 180;

  const a =
```


## License: unknown
https://github.com/Scorpion018/Climate-hazards-Data-Retrieval-Engine/blob/f265d70c47fbfb4f80b9dd1c17086dd9e411b297/views/Main.ejs

```
---

## 🔬 SEGMENT DISTANCE DEFINITION FORENSIC AUDIT

**Status**: Investigation Complete  
**Date**: February 26, 2026  
**Mode**: IEEE Research Mode (Read-only)

---

## 1️⃣ STOP COORDINATES STORAGE LOCATION

### **Primary Storage: Frontend STOP_DATA Array**
**File**: [frontend/index.html](frontend/index.html#L1791)  
**Lines**: 1791–1830  
**Structure**: JavaScript constant array (NOT MongoDB)

```javascript
const STOP_DATA = [
  // ================= PRECISE GOOGLE MAPS COORDINATES (34 Stops) =================
  // Updated with exact coordinates rounded to 6 decimal places for perfect Google Maps alignment
  
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
```

### **Schema Definition: TripHistory (Bus Coordinates)**
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js#L18)

```javascript
{
  coordinates: { type: [Number], default: undefined }  // [longitude, latitude] format
}
```

### **Stop Coordinate Summary**
| Property | Location | Format | Coverage |
|----------|----------|--------|----------|
| **Stop Coordinates** | Frontend STOP_DATA array (JavaScript) | `{ stop_id, latitude, longitude, ...}` | 34 stops (VLR_001 to VLR_034) |
| **Bus GPS Coordinates** | MongoDB TripHistory.coordinates | `[longitude, latitude]` (GeoJSON) | Real-time telemetry |
| **Bus Coordinates (ActiveFleet)** | [backend/models/ActiveFleet.js](backend/models/ActiveFleet.js#L13) | `{ location: { type: "Point", coordinates: [lon, lat] } }` | Live fleet |

---

## 2️⃣ SEGMENT DISTANCE STORAGE STATUS

### **FINDING: Segment Distance is NOT Stored**

**TripHistory Schema** (full content):
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js)

```javascript
const tripHistorySchema = new mongoose.Schema(
  {
    bus_id: { type: String, index: true },
    route_id: { type: String, default: null },
    timestamp: { type: Date, default: Date.now, index: true },
    day_of_week: { type: String },
    hour_of_day: { type: Number },
    segment: { type: String, default: null },
    speed: { type: Number, default: null },
    traffic_level: { type: String, default: "unknown" },
    coordinates: { type: [Number], default: undefined }
  },
  { collection: "TripHistory" }
);
```

**Fields Stored**: bus_id, route_id, timestamp, day_of_week, hour_of_day, segment, speed, traffic_level, coordinates

**✅ Fields Available for Distance Calculation**: segment (stop pair codes), coordinates (GPS point)  
**❌ Field NOT Present**: `distance` (segment length in meters)

### **Mentioned but Not Implemented**
**File**: [CURRENT_STATE_SUMMARY.md](CURRENT_STATE_SUMMARY.md#L91) (Documentation only)

```javascript
{
  segment: String,             // e.g., "VLR_001->VLR_002"
  speed: Number,               // Average speed in km/h
  timestamp: Date,             // When recorded
  bus_id: String,              // Which bus generated this
  distance: Number             // Segment length in meters ← NOT IN ACTUAL SCHEMA
}
```

---

## 3️⃣ CONFIRMATION: STOPS HAVE LAT/LON, HAVERSINE CAN COMPUTE DISTANCE

### **All Stop Codes Are Defined**

| Stop Range | Defined | Total |
|------------|---------|-------|
| VLR_001 to VLR_034 | ✅ YES | 34 stops |

### **Data Consistency Issue**

**Stops Defined in STOP_DATA**: VLR_001 to VLR_034 (34 stops)

**Stops Used in Database Segments**: VLR_001, VLR_002, VLR_008, VLR_011, VLR_012, VLR_013, VLR_016, VLR_018, VLR_025, VLR_026, VLR_028, VLR_030, VLR_038, VLR_047, VLR_052, VLR_054, VLR_081, VLR_082

**⚠️ Missing Coordinates (NOT in STOP_DATA)**:
- `VLR_038`
- `VLR_047`
- `VLR_052`
- `VLR_054`
- `VLR_081`
- `VLR_082`

### **Haversine Distance Calculation Feasibility**

✅ **For 12 segments using defined stops** (VLR_001–VLR_034):
   - Can compute Haversine distance once per segment pair
   - Store in computation cache

⚠️ **For 5 segments using undefined stops** (VLR_038, VLR_047, etc.):
   - Requires adding stop coordinates to STOP_DATA before Haversine computation
   - Alternative: estimate distance from existing speed data

---

## 4️⃣ DISTINCT SEGMENTS IN TRIPHISTORY

### **MongoDB Query Result**
```
db.TripHistory.distinct("segment")
```

**Result**:
```
[
  "VLR_002->VLR_018",
  "VLR_011->VLR_013",
  "VLR_012->VLR_030",
  "VLR_013->VLR_016",
  "VLR_018->VLR_047",     ← VLR_047 not in STOP_DATA
  "VLR_025->VLR_026",
  "VLR_038->VLR_028",     ← VLR_038 not in STOP_DATA
  "VLR_052->VLR_011",     ← VLR_052 not in STOP_DATA
  "VLR_054->VLR_001",     ← VLR_054 not in STOP_DATA
  "VLR_081->VLR_008",     ← VLR_081 not in STOP_DATA
  "VLR_081->VLR_082"      ← VLR_081, VLR_082 not in STOP_DATA
]
```

**Total Unique Segments**: 11

---

## 5️⃣ TRIPHISTORY RECORD COUNT

### **MongoDB Query Result**
```
db.TripHistory.countDocuments()
```

**Result**: **13 records**

### **Sample Document Structure**

```json
{
  "_id": "699174e38d6c6f65f8634a11",
  "bus_id": "BUS-103",
  "route_id": null,
  "timestamp": "2026-02-15T07:25:23.455Z",
  "day_of_week": "Sunday",
  "hour_of_day": 12,
  "segment": "VLR_012->VLR_030",
  "speed": 94.1,
  "traffic_level": "light",
  "coordinates": [79.161989, 12.972081],
  "__v": 0
}
```

### **Data Inventory**

| Attribute | Count | Notes |
|-----------|-------|-------|
| Total Records | 13 | Limited dataset for testing |
| Unique Buses | ? | Requires aggregation query |
| Unique Segments | 11 | Listed above |
| Date Range | Feb 15 - Feb 15, 2026 | Single day |
| Records with coordinates | 13 | 100% coverage |
| Records with segment | 11 | All 13 have segment (no nulls) |

---

## 📊 SEGMENT DISTANCE CALCULATION PLAN

### **Haversine Implementation Option**

**Implementable Segments** (coordinates available):
- VLR_002→VLR_018
- VLR_011→VLR_013
- VLR_012→VLR_030
- VLR_013→VLR_016
- VLR_025→VLR_026
- VLR_038→VLR_028 ⚠️ (VLR_038 undefined)
- VLR_052→VLR_011 ⚠️ (VLR_052 undefined)
- VLR_054→VLR_001 ⚠️ (VLR_054 undefined)
- VLR_081→VLR_008 ⚠️ (VLR_081 undefined)
- VLR_081→VLR_082 ⚠️ (VLR_081, VLR_082 undefined)

**Haversine Formula** (from [backend/index.js](backend/index.js#L165)):
```javascript
function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371e3; // Earth radius in meters
  const φ1 = lat1 * Math.PI / 180;
  const φ2 = lat2 * Math.PI / 180;
  const Δφ = (lat2 - lat1) * Math.PI / 180;
  const Δλ = (lon2 - lon1) * Math.PI / 180;

  const a =
    Math.sin(Δφ / 2) * Math
```


## License: unknown
https://github.com/linuxmint/cinnamon-spices-applets/blob/90811ceacbbb4d29458c793ea65eb5af963e1b6b/weather%40mockturtl/files/weather%40mockturtl/3.8/weather-applet.js

```
---

## 🔬 SEGMENT DISTANCE DEFINITION FORENSIC AUDIT

**Status**: Investigation Complete  
**Date**: February 26, 2026  
**Mode**: IEEE Research Mode (Read-only)

---

## 1️⃣ STOP COORDINATES STORAGE LOCATION

### **Primary Storage: Frontend STOP_DATA Array**
**File**: [frontend/index.html](frontend/index.html#L1791)  
**Lines**: 1791–1830  
**Structure**: JavaScript constant array (NOT MongoDB)

```javascript
const STOP_DATA = [
  // ================= PRECISE GOOGLE MAPS COORDINATES (34 Stops) =================
  // Updated with exact coordinates rounded to 6 decimal places for perfect Google Maps alignment
  
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
```

### **Schema Definition: TripHistory (Bus Coordinates)**
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js#L18)

```javascript
{
  coordinates: { type: [Number], default: undefined }  // [longitude, latitude] format
}
```

### **Stop Coordinate Summary**
| Property | Location | Format | Coverage |
|----------|----------|--------|----------|
| **Stop Coordinates** | Frontend STOP_DATA array (JavaScript) | `{ stop_id, latitude, longitude, ...}` | 34 stops (VLR_001 to VLR_034) |
| **Bus GPS Coordinates** | MongoDB TripHistory.coordinates | `[longitude, latitude]` (GeoJSON) | Real-time telemetry |
| **Bus Coordinates (ActiveFleet)** | [backend/models/ActiveFleet.js](backend/models/ActiveFleet.js#L13) | `{ location: { type: "Point", coordinates: [lon, lat] } }` | Live fleet |

---

## 2️⃣ SEGMENT DISTANCE STORAGE STATUS

### **FINDING: Segment Distance is NOT Stored**

**TripHistory Schema** (full content):
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js)

```javascript
const tripHistorySchema = new mongoose.Schema(
  {
    bus_id: { type: String, index: true },
    route_id: { type: String, default: null },
    timestamp: { type: Date, default: Date.now, index: true },
    day_of_week: { type: String },
    hour_of_day: { type: Number },
    segment: { type: String, default: null },
    speed: { type: Number, default: null },
    traffic_level: { type: String, default: "unknown" },
    coordinates: { type: [Number], default: undefined }
  },
  { collection: "TripHistory" }
);
```

**Fields Stored**: bus_id, route_id, timestamp, day_of_week, hour_of_day, segment, speed, traffic_level, coordinates

**✅ Fields Available for Distance Calculation**: segment (stop pair codes), coordinates (GPS point)  
**❌ Field NOT Present**: `distance` (segment length in meters)

### **Mentioned but Not Implemented**
**File**: [CURRENT_STATE_SUMMARY.md](CURRENT_STATE_SUMMARY.md#L91) (Documentation only)

```javascript
{
  segment: String,             // e.g., "VLR_001->VLR_002"
  speed: Number,               // Average speed in km/h
  timestamp: Date,             // When recorded
  bus_id: String,              // Which bus generated this
  distance: Number             // Segment length in meters ← NOT IN ACTUAL SCHEMA
}
```

---

## 3️⃣ CONFIRMATION: STOPS HAVE LAT/LON, HAVERSINE CAN COMPUTE DISTANCE

### **All Stop Codes Are Defined**

| Stop Range | Defined | Total |
|------------|---------|-------|
| VLR_001 to VLR_034 | ✅ YES | 34 stops |

### **Data Consistency Issue**

**Stops Defined in STOP_DATA**: VLR_001 to VLR_034 (34 stops)

**Stops Used in Database Segments**: VLR_001, VLR_002, VLR_008, VLR_011, VLR_012, VLR_013, VLR_016, VLR_018, VLR_025, VLR_026, VLR_028, VLR_030, VLR_038, VLR_047, VLR_052, VLR_054, VLR_081, VLR_082

**⚠️ Missing Coordinates (NOT in STOP_DATA)**:
- `VLR_038`
- `VLR_047`
- `VLR_052`
- `VLR_054`
- `VLR_081`
- `VLR_082`

### **Haversine Distance Calculation Feasibility**

✅ **For 12 segments using defined stops** (VLR_001–VLR_034):
   - Can compute Haversine distance once per segment pair
   - Store in computation cache

⚠️ **For 5 segments using undefined stops** (VLR_038, VLR_047, etc.):
   - Requires adding stop coordinates to STOP_DATA before Haversine computation
   - Alternative: estimate distance from existing speed data

---

## 4️⃣ DISTINCT SEGMENTS IN TRIPHISTORY

### **MongoDB Query Result**
```
db.TripHistory.distinct("segment")
```

**Result**:
```
[
  "VLR_002->VLR_018",
  "VLR_011->VLR_013",
  "VLR_012->VLR_030",
  "VLR_013->VLR_016",
  "VLR_018->VLR_047",     ← VLR_047 not in STOP_DATA
  "VLR_025->VLR_026",
  "VLR_038->VLR_028",     ← VLR_038 not in STOP_DATA
  "VLR_052->VLR_011",     ← VLR_052 not in STOP_DATA
  "VLR_054->VLR_001",     ← VLR_054 not in STOP_DATA
  "VLR_081->VLR_008",     ← VLR_081 not in STOP_DATA
  "VLR_081->VLR_082"      ← VLR_081, VLR_082 not in STOP_DATA
]
```

**Total Unique Segments**: 11

---

## 5️⃣ TRIPHISTORY RECORD COUNT

### **MongoDB Query Result**
```
db.TripHistory.countDocuments()
```

**Result**: **13 records**

### **Sample Document Structure**

```json
{
  "_id": "699174e38d6c6f65f8634a11",
  "bus_id": "BUS-103",
  "route_id": null,
  "timestamp": "2026-02-15T07:25:23.455Z",
  "day_of_week": "Sunday",
  "hour_of_day": 12,
  "segment": "VLR_012->VLR_030",
  "speed": 94.1,
  "traffic_level": "light",
  "coordinates": [79.161989, 12.972081],
  "__v": 0
}
```

### **Data Inventory**

| Attribute | Count | Notes |
|-----------|-------|-------|
| Total Records | 13 | Limited dataset for testing |
| Unique Buses | ? | Requires aggregation query |
| Unique Segments | 11 | Listed above |
| Date Range | Feb 15 - Feb 15, 2026 | Single day |
| Records with coordinates | 13 | 100% coverage |
| Records with segment | 11 | All 13 have segment (no nulls) |

---

## 📊 SEGMENT DISTANCE CALCULATION PLAN

### **Haversine Implementation Option**

**Implementable Segments** (coordinates available):
- VLR_002→VLR_018
- VLR_011→VLR_013
- VLR_012→VLR_030
- VLR_013→VLR_016
- VLR_025→VLR_026
- VLR_038→VLR_028 ⚠️ (VLR_038 undefined)
- VLR_052→VLR_011 ⚠️ (VLR_052 undefined)
- VLR_054→VLR_001 ⚠️ (VLR_054 undefined)
- VLR_081→VLR_008 ⚠️ (VLR_081 undefined)
- VLR_081→VLR_082 ⚠️ (VLR_081, VLR_082 undefined)

**Haversine Formula** (from [backend/index.js](backend/index.js#L165)):
```javascript
function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371e3; // Earth radius in meters
  const φ1 = lat1 * Math.PI / 180;
  const φ2 = lat2 * Math.PI / 180;
  const Δφ = (lat2 - lat1) * Math.PI / 180;
  const Δλ = (lon2 - lon1) * Math.PI / 180;

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) *
    Math.sin(Δ
```


## License: unknown
https://github.com/barskykd/barskykd.github.io/blob/8cd678f4a54c9e80fe64e1edf7da7f1fbabe2317/streetcalc/main.js

```
---

## 🔬 SEGMENT DISTANCE DEFINITION FORENSIC AUDIT

**Status**: Investigation Complete  
**Date**: February 26, 2026  
**Mode**: IEEE Research Mode (Read-only)

---

## 1️⃣ STOP COORDINATES STORAGE LOCATION

### **Primary Storage: Frontend STOP_DATA Array**
**File**: [frontend/index.html](frontend/index.html#L1791)  
**Lines**: 1791–1830  
**Structure**: JavaScript constant array (NOT MongoDB)

```javascript
const STOP_DATA = [
  // ================= PRECISE GOOGLE MAPS COORDINATES (34 Stops) =================
  // Updated with exact coordinates rounded to 6 decimal places for perfect Google Maps alignment
  
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
```

### **Schema Definition: TripHistory (Bus Coordinates)**
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js#L18)

```javascript
{
  coordinates: { type: [Number], default: undefined }  // [longitude, latitude] format
}
```

### **Stop Coordinate Summary**
| Property | Location | Format | Coverage |
|----------|----------|--------|----------|
| **Stop Coordinates** | Frontend STOP_DATA array (JavaScript) | `{ stop_id, latitude, longitude, ...}` | 34 stops (VLR_001 to VLR_034) |
| **Bus GPS Coordinates** | MongoDB TripHistory.coordinates | `[longitude, latitude]` (GeoJSON) | Real-time telemetry |
| **Bus Coordinates (ActiveFleet)** | [backend/models/ActiveFleet.js](backend/models/ActiveFleet.js#L13) | `{ location: { type: "Point", coordinates: [lon, lat] } }` | Live fleet |

---

## 2️⃣ SEGMENT DISTANCE STORAGE STATUS

### **FINDING: Segment Distance is NOT Stored**

**TripHistory Schema** (full content):
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js)

```javascript
const tripHistorySchema = new mongoose.Schema(
  {
    bus_id: { type: String, index: true },
    route_id: { type: String, default: null },
    timestamp: { type: Date, default: Date.now, index: true },
    day_of_week: { type: String },
    hour_of_day: { type: Number },
    segment: { type: String, default: null },
    speed: { type: Number, default: null },
    traffic_level: { type: String, default: "unknown" },
    coordinates: { type: [Number], default: undefined }
  },
  { collection: "TripHistory" }
);
```

**Fields Stored**: bus_id, route_id, timestamp, day_of_week, hour_of_day, segment, speed, traffic_level, coordinates

**✅ Fields Available for Distance Calculation**: segment (stop pair codes), coordinates (GPS point)  
**❌ Field NOT Present**: `distance` (segment length in meters)

### **Mentioned but Not Implemented**
**File**: [CURRENT_STATE_SUMMARY.md](CURRENT_STATE_SUMMARY.md#L91) (Documentation only)

```javascript
{
  segment: String,             // e.g., "VLR_001->VLR_002"
  speed: Number,               // Average speed in km/h
  timestamp: Date,             // When recorded
  bus_id: String,              // Which bus generated this
  distance: Number             // Segment length in meters ← NOT IN ACTUAL SCHEMA
}
```

---

## 3️⃣ CONFIRMATION: STOPS HAVE LAT/LON, HAVERSINE CAN COMPUTE DISTANCE

### **All Stop Codes Are Defined**

| Stop Range | Defined | Total |
|------------|---------|-------|
| VLR_001 to VLR_034 | ✅ YES | 34 stops |

### **Data Consistency Issue**

**Stops Defined in STOP_DATA**: VLR_001 to VLR_034 (34 stops)

**Stops Used in Database Segments**: VLR_001, VLR_002, VLR_008, VLR_011, VLR_012, VLR_013, VLR_016, VLR_018, VLR_025, VLR_026, VLR_028, VLR_030, VLR_038, VLR_047, VLR_052, VLR_054, VLR_081, VLR_082

**⚠️ Missing Coordinates (NOT in STOP_DATA)**:
- `VLR_038`
- `VLR_047`
- `VLR_052`
- `VLR_054`
- `VLR_081`
- `VLR_082`

### **Haversine Distance Calculation Feasibility**

✅ **For 12 segments using defined stops** (VLR_001–VLR_034):
   - Can compute Haversine distance once per segment pair
   - Store in computation cache

⚠️ **For 5 segments using undefined stops** (VLR_038, VLR_047, etc.):
   - Requires adding stop coordinates to STOP_DATA before Haversine computation
   - Alternative: estimate distance from existing speed data

---

## 4️⃣ DISTINCT SEGMENTS IN TRIPHISTORY

### **MongoDB Query Result**
```
db.TripHistory.distinct("segment")
```

**Result**:
```
[
  "VLR_002->VLR_018",
  "VLR_011->VLR_013",
  "VLR_012->VLR_030",
  "VLR_013->VLR_016",
  "VLR_018->VLR_047",     ← VLR_047 not in STOP_DATA
  "VLR_025->VLR_026",
  "VLR_038->VLR_028",     ← VLR_038 not in STOP_DATA
  "VLR_052->VLR_011",     ← VLR_052 not in STOP_DATA
  "VLR_054->VLR_001",     ← VLR_054 not in STOP_DATA
  "VLR_081->VLR_008",     ← VLR_081 not in STOP_DATA
  "VLR_081->VLR_082"      ← VLR_081, VLR_082 not in STOP_DATA
]
```

**Total Unique Segments**: 11

---

## 5️⃣ TRIPHISTORY RECORD COUNT

### **MongoDB Query Result**
```
db.TripHistory.countDocuments()
```

**Result**: **13 records**

### **Sample Document Structure**

```json
{
  "_id": "699174e38d6c6f65f8634a11",
  "bus_id": "BUS-103",
  "route_id": null,
  "timestamp": "2026-02-15T07:25:23.455Z",
  "day_of_week": "Sunday",
  "hour_of_day": 12,
  "segment": "VLR_012->VLR_030",
  "speed": 94.1,
  "traffic_level": "light",
  "coordinates": [79.161989, 12.972081],
  "__v": 0
}
```

### **Data Inventory**

| Attribute | Count | Notes |
|-----------|-------|-------|
| Total Records | 13 | Limited dataset for testing |
| Unique Buses | ? | Requires aggregation query |
| Unique Segments | 11 | Listed above |
| Date Range | Feb 15 - Feb 15, 2026 | Single day |
| Records with coordinates | 13 | 100% coverage |
| Records with segment | 11 | All 13 have segment (no nulls) |

---

## 📊 SEGMENT DISTANCE CALCULATION PLAN

### **Haversine Implementation Option**

**Implementable Segments** (coordinates available):
- VLR_002→VLR_018
- VLR_011→VLR_013
- VLR_012→VLR_030
- VLR_013→VLR_016
- VLR_025→VLR_026
- VLR_038→VLR_028 ⚠️ (VLR_038 undefined)
- VLR_052→VLR_011 ⚠️ (VLR_052 undefined)
- VLR_054→VLR_001 ⚠️ (VLR_054 undefined)
- VLR_081→VLR_008 ⚠️ (VLR_081 undefined)
- VLR_081→VLR_082 ⚠️ (VLR_081, VLR_082 undefined)

**Haversine Formula** (from [backend/index.js](backend/index.js#L165)):
```javascript
function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371e3; // Earth radius in meters
  const φ1 = lat1 * Math.PI / 180;
  const φ2 = lat2 * Math.PI / 180;
  const Δφ = (lat2 - lat1) * Math.PI / 180;
  const Δλ = (lon2 - lon1) * Math.PI / 180;

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) *
    Math.sin(Δλ / 2) * Math.sin(Δλ / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance
```


## License: unknown
https://github.com/AbdullahTonka/sunum/blob/9e572a71799c17ff3ac148518bbea12c6c2c30e3/index1.html

```
---

## 🔬 SEGMENT DISTANCE DEFINITION FORENSIC AUDIT

**Status**: Investigation Complete  
**Date**: February 26, 2026  
**Mode**: IEEE Research Mode (Read-only)

---

## 1️⃣ STOP COORDINATES STORAGE LOCATION

### **Primary Storage: Frontend STOP_DATA Array**
**File**: [frontend/index.html](frontend/index.html#L1791)  
**Lines**: 1791–1830  
**Structure**: JavaScript constant array (NOT MongoDB)

```javascript
const STOP_DATA = [
  // ================= PRECISE GOOGLE MAPS COORDINATES (34 Stops) =================
  // Updated with exact coordinates rounded to 6 decimal places for perfect Google Maps alignment
  
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
```

### **Schema Definition: TripHistory (Bus Coordinates)**
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js#L18)

```javascript
{
  coordinates: { type: [Number], default: undefined }  // [longitude, latitude] format
}
```

### **Stop Coordinate Summary**
| Property | Location | Format | Coverage |
|----------|----------|--------|----------|
| **Stop Coordinates** | Frontend STOP_DATA array (JavaScript) | `{ stop_id, latitude, longitude, ...}` | 34 stops (VLR_001 to VLR_034) |
| **Bus GPS Coordinates** | MongoDB TripHistory.coordinates | `[longitude, latitude]` (GeoJSON) | Real-time telemetry |
| **Bus Coordinates (ActiveFleet)** | [backend/models/ActiveFleet.js](backend/models/ActiveFleet.js#L13) | `{ location: { type: "Point", coordinates: [lon, lat] } }` | Live fleet |

---

## 2️⃣ SEGMENT DISTANCE STORAGE STATUS

### **FINDING: Segment Distance is NOT Stored**

**TripHistory Schema** (full content):
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js)

```javascript
const tripHistorySchema = new mongoose.Schema(
  {
    bus_id: { type: String, index: true },
    route_id: { type: String, default: null },
    timestamp: { type: Date, default: Date.now, index: true },
    day_of_week: { type: String },
    hour_of_day: { type: Number },
    segment: { type: String, default: null },
    speed: { type: Number, default: null },
    traffic_level: { type: String, default: "unknown" },
    coordinates: { type: [Number], default: undefined }
  },
  { collection: "TripHistory" }
);
```

**Fields Stored**: bus_id, route_id, timestamp, day_of_week, hour_of_day, segment, speed, traffic_level, coordinates

**✅ Fields Available for Distance Calculation**: segment (stop pair codes), coordinates (GPS point)  
**❌ Field NOT Present**: `distance` (segment length in meters)

### **Mentioned but Not Implemented**
**File**: [CURRENT_STATE_SUMMARY.md](CURRENT_STATE_SUMMARY.md#L91) (Documentation only)

```javascript
{
  segment: String,             // e.g., "VLR_001->VLR_002"
  speed: Number,               // Average speed in km/h
  timestamp: Date,             // When recorded
  bus_id: String,              // Which bus generated this
  distance: Number             // Segment length in meters ← NOT IN ACTUAL SCHEMA
}
```

---

## 3️⃣ CONFIRMATION: STOPS HAVE LAT/LON, HAVERSINE CAN COMPUTE DISTANCE

### **All Stop Codes Are Defined**

| Stop Range | Defined | Total |
|------------|---------|-------|
| VLR_001 to VLR_034 | ✅ YES | 34 stops |

### **Data Consistency Issue**

**Stops Defined in STOP_DATA**: VLR_001 to VLR_034 (34 stops)

**Stops Used in Database Segments**: VLR_001, VLR_002, VLR_008, VLR_011, VLR_012, VLR_013, VLR_016, VLR_018, VLR_025, VLR_026, VLR_028, VLR_030, VLR_038, VLR_047, VLR_052, VLR_054, VLR_081, VLR_082

**⚠️ Missing Coordinates (NOT in STOP_DATA)**:
- `VLR_038`
- `VLR_047`
- `VLR_052`
- `VLR_054`
- `VLR_081`
- `VLR_082`

### **Haversine Distance Calculation Feasibility**

✅ **For 12 segments using defined stops** (VLR_001–VLR_034):
   - Can compute Haversine distance once per segment pair
   - Store in computation cache

⚠️ **For 5 segments using undefined stops** (VLR_038, VLR_047, etc.):
   - Requires adding stop coordinates to STOP_DATA before Haversine computation
   - Alternative: estimate distance from existing speed data

---

## 4️⃣ DISTINCT SEGMENTS IN TRIPHISTORY

### **MongoDB Query Result**
```
db.TripHistory.distinct("segment")
```

**Result**:
```
[
  "VLR_002->VLR_018",
  "VLR_011->VLR_013",
  "VLR_012->VLR_030",
  "VLR_013->VLR_016",
  "VLR_018->VLR_047",     ← VLR_047 not in STOP_DATA
  "VLR_025->VLR_026",
  "VLR_038->VLR_028",     ← VLR_038 not in STOP_DATA
  "VLR_052->VLR_011",     ← VLR_052 not in STOP_DATA
  "VLR_054->VLR_001",     ← VLR_054 not in STOP_DATA
  "VLR_081->VLR_008",     ← VLR_081 not in STOP_DATA
  "VLR_081->VLR_082"      ← VLR_081, VLR_082 not in STOP_DATA
]
```

**Total Unique Segments**: 11

---

## 5️⃣ TRIPHISTORY RECORD COUNT

### **MongoDB Query Result**
```
db.TripHistory.countDocuments()
```

**Result**: **13 records**

### **Sample Document Structure**

```json
{
  "_id": "699174e38d6c6f65f8634a11",
  "bus_id": "BUS-103",
  "route_id": null,
  "timestamp": "2026-02-15T07:25:23.455Z",
  "day_of_week": "Sunday",
  "hour_of_day": 12,
  "segment": "VLR_012->VLR_030",
  "speed": 94.1,
  "traffic_level": "light",
  "coordinates": [79.161989, 12.972081],
  "__v": 0
}
```

### **Data Inventory**

| Attribute | Count | Notes |
|-----------|-------|-------|
| Total Records | 13 | Limited dataset for testing |
| Unique Buses | ? | Requires aggregation query |
| Unique Segments | 11 | Listed above |
| Date Range | Feb 15 - Feb 15, 2026 | Single day |
| Records with coordinates | 13 | 100% coverage |
| Records with segment | 11 | All 13 have segment (no nulls) |

---

## 📊 SEGMENT DISTANCE CALCULATION PLAN

### **Haversine Implementation Option**

**Implementable Segments** (coordinates available):
- VLR_002→VLR_018
- VLR_011→VLR_013
- VLR_012→VLR_030
- VLR_013→VLR_016
- VLR_025→VLR_026
- VLR_038→VLR_028 ⚠️ (VLR_038 undefined)
- VLR_052→VLR_011 ⚠️ (VLR_052 undefined)
- VLR_054→VLR_001 ⚠️ (VLR_054 undefined)
- VLR_081→VLR_008 ⚠️ (VLR_081 undefined)
- VLR_081→VLR_082 ⚠️ (VLR_081, VLR_082 undefined)

**Haversine Formula** (from [backend/index.js](backend/index.js#L165)):
```javascript
function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371e3; // Earth radius in meters
  const φ1 = lat1 * Math.PI / 180;
  const φ2 = lat2 * Math.PI / 180;
  const Δφ = (lat2 - lat1) * Math.PI / 180;
  const Δλ = (lon2 - lon1) * Math.PI / 180;

  const a =
```


## License: unknown
https://github.com/Scorpion018/Climate-hazards-Data-Retrieval-Engine/blob/f265d70c47fbfb4f80b9dd1c17086dd9e411b297/views/Main.ejs

```
---

## 🔬 SEGMENT DISTANCE DEFINITION FORENSIC AUDIT

**Status**: Investigation Complete  
**Date**: February 26, 2026  
**Mode**: IEEE Research Mode (Read-only)

---

## 1️⃣ STOP COORDINATES STORAGE LOCATION

### **Primary Storage: Frontend STOP_DATA Array**
**File**: [frontend/index.html](frontend/index.html#L1791)  
**Lines**: 1791–1830  
**Structure**: JavaScript constant array (NOT MongoDB)

```javascript
const STOP_DATA = [
  // ================= PRECISE GOOGLE MAPS COORDINATES (34 Stops) =================
  // Updated with exact coordinates rounded to 6 decimal places for perfect Google Maps alignment
  
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
```

### **Schema Definition: TripHistory (Bus Coordinates)**
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js#L18)

```javascript
{
  coordinates: { type: [Number], default: undefined }  // [longitude, latitude] format
}
```

### **Stop Coordinate Summary**
| Property | Location | Format | Coverage |
|----------|----------|--------|----------|
| **Stop Coordinates** | Frontend STOP_DATA array (JavaScript) | `{ stop_id, latitude, longitude, ...}` | 34 stops (VLR_001 to VLR_034) |
| **Bus GPS Coordinates** | MongoDB TripHistory.coordinates | `[longitude, latitude]` (GeoJSON) | Real-time telemetry |
| **Bus Coordinates (ActiveFleet)** | [backend/models/ActiveFleet.js](backend/models/ActiveFleet.js#L13) | `{ location: { type: "Point", coordinates: [lon, lat] } }` | Live fleet |

---

## 2️⃣ SEGMENT DISTANCE STORAGE STATUS

### **FINDING: Segment Distance is NOT Stored**

**TripHistory Schema** (full content):
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js)

```javascript
const tripHistorySchema = new mongoose.Schema(
  {
    bus_id: { type: String, index: true },
    route_id: { type: String, default: null },
    timestamp: { type: Date, default: Date.now, index: true },
    day_of_week: { type: String },
    hour_of_day: { type: Number },
    segment: { type: String, default: null },
    speed: { type: Number, default: null },
    traffic_level: { type: String, default: "unknown" },
    coordinates: { type: [Number], default: undefined }
  },
  { collection: "TripHistory" }
);
```

**Fields Stored**: bus_id, route_id, timestamp, day_of_week, hour_of_day, segment, speed, traffic_level, coordinates

**✅ Fields Available for Distance Calculation**: segment (stop pair codes), coordinates (GPS point)  
**❌ Field NOT Present**: `distance` (segment length in meters)

### **Mentioned but Not Implemented**
**File**: [CURRENT_STATE_SUMMARY.md](CURRENT_STATE_SUMMARY.md#L91) (Documentation only)

```javascript
{
  segment: String,             // e.g., "VLR_001->VLR_002"
  speed: Number,               // Average speed in km/h
  timestamp: Date,             // When recorded
  bus_id: String,              // Which bus generated this
  distance: Number             // Segment length in meters ← NOT IN ACTUAL SCHEMA
}
```

---

## 3️⃣ CONFIRMATION: STOPS HAVE LAT/LON, HAVERSINE CAN COMPUTE DISTANCE

### **All Stop Codes Are Defined**

| Stop Range | Defined | Total |
|------------|---------|-------|
| VLR_001 to VLR_034 | ✅ YES | 34 stops |

### **Data Consistency Issue**

**Stops Defined in STOP_DATA**: VLR_001 to VLR_034 (34 stops)

**Stops Used in Database Segments**: VLR_001, VLR_002, VLR_008, VLR_011, VLR_012, VLR_013, VLR_016, VLR_018, VLR_025, VLR_026, VLR_028, VLR_030, VLR_038, VLR_047, VLR_052, VLR_054, VLR_081, VLR_082

**⚠️ Missing Coordinates (NOT in STOP_DATA)**:
- `VLR_038`
- `VLR_047`
- `VLR_052`
- `VLR_054`
- `VLR_081`
- `VLR_082`

### **Haversine Distance Calculation Feasibility**

✅ **For 12 segments using defined stops** (VLR_001–VLR_034):
   - Can compute Haversine distance once per segment pair
   - Store in computation cache

⚠️ **For 5 segments using undefined stops** (VLR_038, VLR_047, etc.):
   - Requires adding stop coordinates to STOP_DATA before Haversine computation
   - Alternative: estimate distance from existing speed data

---

## 4️⃣ DISTINCT SEGMENTS IN TRIPHISTORY

### **MongoDB Query Result**
```
db.TripHistory.distinct("segment")
```

**Result**:
```
[
  "VLR_002->VLR_018",
  "VLR_011->VLR_013",
  "VLR_012->VLR_030",
  "VLR_013->VLR_016",
  "VLR_018->VLR_047",     ← VLR_047 not in STOP_DATA
  "VLR_025->VLR_026",
  "VLR_038->VLR_028",     ← VLR_038 not in STOP_DATA
  "VLR_052->VLR_011",     ← VLR_052 not in STOP_DATA
  "VLR_054->VLR_001",     ← VLR_054 not in STOP_DATA
  "VLR_081->VLR_008",     ← VLR_081 not in STOP_DATA
  "VLR_081->VLR_082"      ← VLR_081, VLR_082 not in STOP_DATA
]
```

**Total Unique Segments**: 11

---

## 5️⃣ TRIPHISTORY RECORD COUNT

### **MongoDB Query Result**
```
db.TripHistory.countDocuments()
```

**Result**: **13 records**

### **Sample Document Structure**

```json
{
  "_id": "699174e38d6c6f65f8634a11",
  "bus_id": "BUS-103",
  "route_id": null,
  "timestamp": "2026-02-15T07:25:23.455Z",
  "day_of_week": "Sunday",
  "hour_of_day": 12,
  "segment": "VLR_012->VLR_030",
  "speed": 94.1,
  "traffic_level": "light",
  "coordinates": [79.161989, 12.972081],
  "__v": 0
}
```

### **Data Inventory**

| Attribute | Count | Notes |
|-----------|-------|-------|
| Total Records | 13 | Limited dataset for testing |
| Unique Buses | ? | Requires aggregation query |
| Unique Segments | 11 | Listed above |
| Date Range | Feb 15 - Feb 15, 2026 | Single day |
| Records with coordinates | 13 | 100% coverage |
| Records with segment | 11 | All 13 have segment (no nulls) |

---

## 📊 SEGMENT DISTANCE CALCULATION PLAN

### **Haversine Implementation Option**

**Implementable Segments** (coordinates available):
- VLR_002→VLR_018
- VLR_011→VLR_013
- VLR_012→VLR_030
- VLR_013→VLR_016
- VLR_025→VLR_026
- VLR_038→VLR_028 ⚠️ (VLR_038 undefined)
- VLR_052→VLR_011 ⚠️ (VLR_052 undefined)
- VLR_054→VLR_001 ⚠️ (VLR_054 undefined)
- VLR_081→VLR_008 ⚠️ (VLR_081 undefined)
- VLR_081→VLR_082 ⚠️ (VLR_081, VLR_082 undefined)

**Haversine Formula** (from [backend/index.js](backend/index.js#L165)):
```javascript
function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371e3; // Earth radius in meters
  const φ1 = lat1 * Math.PI / 180;
  const φ2 = lat2 * Math.PI / 180;
  const Δφ = (lat2 - lat1) * Math.PI / 180;
  const Δλ = (lon2 - lon1) * Math.PI / 180;

  const a =
    Math.sin(Δφ / 2) * Math
```


## License: unknown
https://github.com/linuxmint/cinnamon-spices-applets/blob/90811ceacbbb4d29458c793ea65eb5af963e1b6b/weather%40mockturtl/files/weather%40mockturtl/3.8/weather-applet.js

```
---

## 🔬 SEGMENT DISTANCE DEFINITION FORENSIC AUDIT

**Status**: Investigation Complete  
**Date**: February 26, 2026  
**Mode**: IEEE Research Mode (Read-only)

---

## 1️⃣ STOP COORDINATES STORAGE LOCATION

### **Primary Storage: Frontend STOP_DATA Array**
**File**: [frontend/index.html](frontend/index.html#L1791)  
**Lines**: 1791–1830  
**Structure**: JavaScript constant array (NOT MongoDB)

```javascript
const STOP_DATA = [
  // ================= PRECISE GOOGLE MAPS COORDINATES (34 Stops) =================
  // Updated with exact coordinates rounded to 6 decimal places for perfect Google Maps alignment
  
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
```

### **Schema Definition: TripHistory (Bus Coordinates)**
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js#L18)

```javascript
{
  coordinates: { type: [Number], default: undefined }  // [longitude, latitude] format
}
```

### **Stop Coordinate Summary**
| Property | Location | Format | Coverage |
|----------|----------|--------|----------|
| **Stop Coordinates** | Frontend STOP_DATA array (JavaScript) | `{ stop_id, latitude, longitude, ...}` | 34 stops (VLR_001 to VLR_034) |
| **Bus GPS Coordinates** | MongoDB TripHistory.coordinates | `[longitude, latitude]` (GeoJSON) | Real-time telemetry |
| **Bus Coordinates (ActiveFleet)** | [backend/models/ActiveFleet.js](backend/models/ActiveFleet.js#L13) | `{ location: { type: "Point", coordinates: [lon, lat] } }` | Live fleet |

---

## 2️⃣ SEGMENT DISTANCE STORAGE STATUS

### **FINDING: Segment Distance is NOT Stored**

**TripHistory Schema** (full content):
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js)

```javascript
const tripHistorySchema = new mongoose.Schema(
  {
    bus_id: { type: String, index: true },
    route_id: { type: String, default: null },
    timestamp: { type: Date, default: Date.now, index: true },
    day_of_week: { type: String },
    hour_of_day: { type: Number },
    segment: { type: String, default: null },
    speed: { type: Number, default: null },
    traffic_level: { type: String, default: "unknown" },
    coordinates: { type: [Number], default: undefined }
  },
  { collection: "TripHistory" }
);
```

**Fields Stored**: bus_id, route_id, timestamp, day_of_week, hour_of_day, segment, speed, traffic_level, coordinates

**✅ Fields Available for Distance Calculation**: segment (stop pair codes), coordinates (GPS point)  
**❌ Field NOT Present**: `distance` (segment length in meters)

### **Mentioned but Not Implemented**
**File**: [CURRENT_STATE_SUMMARY.md](CURRENT_STATE_SUMMARY.md#L91) (Documentation only)

```javascript
{
  segment: String,             // e.g., "VLR_001->VLR_002"
  speed: Number,               // Average speed in km/h
  timestamp: Date,             // When recorded
  bus_id: String,              // Which bus generated this
  distance: Number             // Segment length in meters ← NOT IN ACTUAL SCHEMA
}
```

---

## 3️⃣ CONFIRMATION: STOPS HAVE LAT/LON, HAVERSINE CAN COMPUTE DISTANCE

### **All Stop Codes Are Defined**

| Stop Range | Defined | Total |
|------------|---------|-------|
| VLR_001 to VLR_034 | ✅ YES | 34 stops |

### **Data Consistency Issue**

**Stops Defined in STOP_DATA**: VLR_001 to VLR_034 (34 stops)

**Stops Used in Database Segments**: VLR_001, VLR_002, VLR_008, VLR_011, VLR_012, VLR_013, VLR_016, VLR_018, VLR_025, VLR_026, VLR_028, VLR_030, VLR_038, VLR_047, VLR_052, VLR_054, VLR_081, VLR_082

**⚠️ Missing Coordinates (NOT in STOP_DATA)**:
- `VLR_038`
- `VLR_047`
- `VLR_052`
- `VLR_054`
- `VLR_081`
- `VLR_082`

### **Haversine Distance Calculation Feasibility**

✅ **For 12 segments using defined stops** (VLR_001–VLR_034):
   - Can compute Haversine distance once per segment pair
   - Store in computation cache

⚠️ **For 5 segments using undefined stops** (VLR_038, VLR_047, etc.):
   - Requires adding stop coordinates to STOP_DATA before Haversine computation
   - Alternative: estimate distance from existing speed data

---

## 4️⃣ DISTINCT SEGMENTS IN TRIPHISTORY

### **MongoDB Query Result**
```
db.TripHistory.distinct("segment")
```

**Result**:
```
[
  "VLR_002->VLR_018",
  "VLR_011->VLR_013",
  "VLR_012->VLR_030",
  "VLR_013->VLR_016",
  "VLR_018->VLR_047",     ← VLR_047 not in STOP_DATA
  "VLR_025->VLR_026",
  "VLR_038->VLR_028",     ← VLR_038 not in STOP_DATA
  "VLR_052->VLR_011",     ← VLR_052 not in STOP_DATA
  "VLR_054->VLR_001",     ← VLR_054 not in STOP_DATA
  "VLR_081->VLR_008",     ← VLR_081 not in STOP_DATA
  "VLR_081->VLR_082"      ← VLR_081, VLR_082 not in STOP_DATA
]
```

**Total Unique Segments**: 11

---

## 5️⃣ TRIPHISTORY RECORD COUNT

### **MongoDB Query Result**
```
db.TripHistory.countDocuments()
```

**Result**: **13 records**

### **Sample Document Structure**

```json
{
  "_id": "699174e38d6c6f65f8634a11",
  "bus_id": "BUS-103",
  "route_id": null,
  "timestamp": "2026-02-15T07:25:23.455Z",
  "day_of_week": "Sunday",
  "hour_of_day": 12,
  "segment": "VLR_012->VLR_030",
  "speed": 94.1,
  "traffic_level": "light",
  "coordinates": [79.161989, 12.972081],
  "__v": 0
}
```

### **Data Inventory**

| Attribute | Count | Notes |
|-----------|-------|-------|
| Total Records | 13 | Limited dataset for testing |
| Unique Buses | ? | Requires aggregation query |
| Unique Segments | 11 | Listed above |
| Date Range | Feb 15 - Feb 15, 2026 | Single day |
| Records with coordinates | 13 | 100% coverage |
| Records with segment | 11 | All 13 have segment (no nulls) |

---

## 📊 SEGMENT DISTANCE CALCULATION PLAN

### **Haversine Implementation Option**

**Implementable Segments** (coordinates available):
- VLR_002→VLR_018
- VLR_011→VLR_013
- VLR_012→VLR_030
- VLR_013→VLR_016
- VLR_025→VLR_026
- VLR_038→VLR_028 ⚠️ (VLR_038 undefined)
- VLR_052→VLR_011 ⚠️ (VLR_052 undefined)
- VLR_054→VLR_001 ⚠️ (VLR_054 undefined)
- VLR_081→VLR_008 ⚠️ (VLR_081 undefined)
- VLR_081→VLR_082 ⚠️ (VLR_081, VLR_082 undefined)

**Haversine Formula** (from [backend/index.js](backend/index.js#L165)):
```javascript
function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371e3; // Earth radius in meters
  const φ1 = lat1 * Math.PI / 180;
  const φ2 = lat2 * Math.PI / 180;
  const Δφ = (lat2 - lat1) * Math.PI / 180;
  const Δλ = (lon2 - lon1) * Math.PI / 180;

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) *
    Math.sin(Δ
```


## License: unknown
https://github.com/barskykd/barskykd.github.io/blob/8cd678f4a54c9e80fe64e1edf7da7f1fbabe2317/streetcalc/main.js

```
---

## 🔬 SEGMENT DISTANCE DEFINITION FORENSIC AUDIT

**Status**: Investigation Complete  
**Date**: February 26, 2026  
**Mode**: IEEE Research Mode (Read-only)

---

## 1️⃣ STOP COORDINATES STORAGE LOCATION

### **Primary Storage: Frontend STOP_DATA Array**
**File**: [frontend/index.html](frontend/index.html#L1791)  
**Lines**: 1791–1830  
**Structure**: JavaScript constant array (NOT MongoDB)

```javascript
const STOP_DATA = [
  // ================= PRECISE GOOGLE MAPS COORDINATES (34 Stops) =================
  // Updated with exact coordinates rounded to 6 decimal places for perfect Google Maps alignment
  
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
```

### **Schema Definition: TripHistory (Bus Coordinates)**
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js#L18)

```javascript
{
  coordinates: { type: [Number], default: undefined }  // [longitude, latitude] format
}
```

### **Stop Coordinate Summary**
| Property | Location | Format | Coverage |
|----------|----------|--------|----------|
| **Stop Coordinates** | Frontend STOP_DATA array (JavaScript) | `{ stop_id, latitude, longitude, ...}` | 34 stops (VLR_001 to VLR_034) |
| **Bus GPS Coordinates** | MongoDB TripHistory.coordinates | `[longitude, latitude]` (GeoJSON) | Real-time telemetry |
| **Bus Coordinates (ActiveFleet)** | [backend/models/ActiveFleet.js](backend/models/ActiveFleet.js#L13) | `{ location: { type: "Point", coordinates: [lon, lat] } }` | Live fleet |

---

## 2️⃣ SEGMENT DISTANCE STORAGE STATUS

### **FINDING: Segment Distance is NOT Stored**

**TripHistory Schema** (full content):
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js)

```javascript
const tripHistorySchema = new mongoose.Schema(
  {
    bus_id: { type: String, index: true },
    route_id: { type: String, default: null },
    timestamp: { type: Date, default: Date.now, index: true },
    day_of_week: { type: String },
    hour_of_day: { type: Number },
    segment: { type: String, default: null },
    speed: { type: Number, default: null },
    traffic_level: { type: String, default: "unknown" },
    coordinates: { type: [Number], default: undefined }
  },
  { collection: "TripHistory" }
);
```

**Fields Stored**: bus_id, route_id, timestamp, day_of_week, hour_of_day, segment, speed, traffic_level, coordinates

**✅ Fields Available for Distance Calculation**: segment (stop pair codes), coordinates (GPS point)  
**❌ Field NOT Present**: `distance` (segment length in meters)

### **Mentioned but Not Implemented**
**File**: [CURRENT_STATE_SUMMARY.md](CURRENT_STATE_SUMMARY.md#L91) (Documentation only)

```javascript
{
  segment: String,             // e.g., "VLR_001->VLR_002"
  speed: Number,               // Average speed in km/h
  timestamp: Date,             // When recorded
  bus_id: String,              // Which bus generated this
  distance: Number             // Segment length in meters ← NOT IN ACTUAL SCHEMA
}
```

---

## 3️⃣ CONFIRMATION: STOPS HAVE LAT/LON, HAVERSINE CAN COMPUTE DISTANCE

### **All Stop Codes Are Defined**

| Stop Range | Defined | Total |
|------------|---------|-------|
| VLR_001 to VLR_034 | ✅ YES | 34 stops |

### **Data Consistency Issue**

**Stops Defined in STOP_DATA**: VLR_001 to VLR_034 (34 stops)

**Stops Used in Database Segments**: VLR_001, VLR_002, VLR_008, VLR_011, VLR_012, VLR_013, VLR_016, VLR_018, VLR_025, VLR_026, VLR_028, VLR_030, VLR_038, VLR_047, VLR_052, VLR_054, VLR_081, VLR_082

**⚠️ Missing Coordinates (NOT in STOP_DATA)**:
- `VLR_038`
- `VLR_047`
- `VLR_052`
- `VLR_054`
- `VLR_081`
- `VLR_082`

### **Haversine Distance Calculation Feasibility**

✅ **For 12 segments using defined stops** (VLR_001–VLR_034):
   - Can compute Haversine distance once per segment pair
   - Store in computation cache

⚠️ **For 5 segments using undefined stops** (VLR_038, VLR_047, etc.):
   - Requires adding stop coordinates to STOP_DATA before Haversine computation
   - Alternative: estimate distance from existing speed data

---

## 4️⃣ DISTINCT SEGMENTS IN TRIPHISTORY

### **MongoDB Query Result**
```
db.TripHistory.distinct("segment")
```

**Result**:
```
[
  "VLR_002->VLR_018",
  "VLR_011->VLR_013",
  "VLR_012->VLR_030",
  "VLR_013->VLR_016",
  "VLR_018->VLR_047",     ← VLR_047 not in STOP_DATA
  "VLR_025->VLR_026",
  "VLR_038->VLR_028",     ← VLR_038 not in STOP_DATA
  "VLR_052->VLR_011",     ← VLR_052 not in STOP_DATA
  "VLR_054->VLR_001",     ← VLR_054 not in STOP_DATA
  "VLR_081->VLR_008",     ← VLR_081 not in STOP_DATA
  "VLR_081->VLR_082"      ← VLR_081, VLR_082 not in STOP_DATA
]
```

**Total Unique Segments**: 11

---

## 5️⃣ TRIPHISTORY RECORD COUNT

### **MongoDB Query Result**
```
db.TripHistory.countDocuments()
```

**Result**: **13 records**

### **Sample Document Structure**

```json
{
  "_id": "699174e38d6c6f65f8634a11",
  "bus_id": "BUS-103",
  "route_id": null,
  "timestamp": "2026-02-15T07:25:23.455Z",
  "day_of_week": "Sunday",
  "hour_of_day": 12,
  "segment": "VLR_012->VLR_030",
  "speed": 94.1,
  "traffic_level": "light",
  "coordinates": [79.161989, 12.972081],
  "__v": 0
}
```

### **Data Inventory**

| Attribute | Count | Notes |
|-----------|-------|-------|
| Total Records | 13 | Limited dataset for testing |
| Unique Buses | ? | Requires aggregation query |
| Unique Segments | 11 | Listed above |
| Date Range | Feb 15 - Feb 15, 2026 | Single day |
| Records with coordinates | 13 | 100% coverage |
| Records with segment | 11 | All 13 have segment (no nulls) |

---

## 📊 SEGMENT DISTANCE CALCULATION PLAN

### **Haversine Implementation Option**

**Implementable Segments** (coordinates available):
- VLR_002→VLR_018
- VLR_011→VLR_013
- VLR_012→VLR_030
- VLR_013→VLR_016
- VLR_025→VLR_026
- VLR_038→VLR_028 ⚠️ (VLR_038 undefined)
- VLR_052→VLR_011 ⚠️ (VLR_052 undefined)
- VLR_054→VLR_001 ⚠️ (VLR_054 undefined)
- VLR_081→VLR_008 ⚠️ (VLR_081 undefined)
- VLR_081→VLR_082 ⚠️ (VLR_081, VLR_082 undefined)

**Haversine Formula** (from [backend/index.js](backend/index.js#L165)):
```javascript
function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371e3; // Earth radius in meters
  const φ1 = lat1 * Math.PI / 180;
  const φ2 = lat2 * Math.PI / 180;
  const Δφ = (lat2 - lat1) * Math.PI / 180;
  const Δλ = (lon2 - lon1) * Math.PI / 180;

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) *
    Math.sin(Δλ / 2) * Math.sin(Δλ / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance
```


## License: unknown
https://github.com/AbdullahTonka/sunum/blob/9e572a71799c17ff3ac148518bbea12c6c2c30e3/index1.html

```
---

## 🔬 SEGMENT DISTANCE DEFINITION FORENSIC AUDIT

**Status**: Investigation Complete  
**Date**: February 26, 2026  
**Mode**: IEEE Research Mode (Read-only)

---

## 1️⃣ STOP COORDINATES STORAGE LOCATION

### **Primary Storage: Frontend STOP_DATA Array**
**File**: [frontend/index.html](frontend/index.html#L1791)  
**Lines**: 1791–1830  
**Structure**: JavaScript constant array (NOT MongoDB)

```javascript
const STOP_DATA = [
  // ================= PRECISE GOOGLE MAPS COORDINATES (34 Stops) =================
  // Updated with exact coordinates rounded to 6 decimal places for perfect Google Maps alignment
  
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
```

### **Schema Definition: TripHistory (Bus Coordinates)**
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js#L18)

```javascript
{
  coordinates: { type: [Number], default: undefined }  // [longitude, latitude] format
}
```

### **Stop Coordinate Summary**
| Property | Location | Format | Coverage |
|----------|----------|--------|----------|
| **Stop Coordinates** | Frontend STOP_DATA array (JavaScript) | `{ stop_id, latitude, longitude, ...}` | 34 stops (VLR_001 to VLR_034) |
| **Bus GPS Coordinates** | MongoDB TripHistory.coordinates | `[longitude, latitude]` (GeoJSON) | Real-time telemetry |
| **Bus Coordinates (ActiveFleet)** | [backend/models/ActiveFleet.js](backend/models/ActiveFleet.js#L13) | `{ location: { type: "Point", coordinates: [lon, lat] } }` | Live fleet |

---

## 2️⃣ SEGMENT DISTANCE STORAGE STATUS

### **FINDING: Segment Distance is NOT Stored**

**TripHistory Schema** (full content):
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js)

```javascript
const tripHistorySchema = new mongoose.Schema(
  {
    bus_id: { type: String, index: true },
    route_id: { type: String, default: null },
    timestamp: { type: Date, default: Date.now, index: true },
    day_of_week: { type: String },
    hour_of_day: { type: Number },
    segment: { type: String, default: null },
    speed: { type: Number, default: null },
    traffic_level: { type: String, default: "unknown" },
    coordinates: { type: [Number], default: undefined }
  },
  { collection: "TripHistory" }
);
```

**Fields Stored**: bus_id, route_id, timestamp, day_of_week, hour_of_day, segment, speed, traffic_level, coordinates

**✅ Fields Available for Distance Calculation**: segment (stop pair codes), coordinates (GPS point)  
**❌ Field NOT Present**: `distance` (segment length in meters)

### **Mentioned but Not Implemented**
**File**: [CURRENT_STATE_SUMMARY.md](CURRENT_STATE_SUMMARY.md#L91) (Documentation only)

```javascript
{
  segment: String,             // e.g., "VLR_001->VLR_002"
  speed: Number,               // Average speed in km/h
  timestamp: Date,             // When recorded
  bus_id: String,              // Which bus generated this
  distance: Number             // Segment length in meters ← NOT IN ACTUAL SCHEMA
}
```

---

## 3️⃣ CONFIRMATION: STOPS HAVE LAT/LON, HAVERSINE CAN COMPUTE DISTANCE

### **All Stop Codes Are Defined**

| Stop Range | Defined | Total |
|------------|---------|-------|
| VLR_001 to VLR_034 | ✅ YES | 34 stops |

### **Data Consistency Issue**

**Stops Defined in STOP_DATA**: VLR_001 to VLR_034 (34 stops)

**Stops Used in Database Segments**: VLR_001, VLR_002, VLR_008, VLR_011, VLR_012, VLR_013, VLR_016, VLR_018, VLR_025, VLR_026, VLR_028, VLR_030, VLR_038, VLR_047, VLR_052, VLR_054, VLR_081, VLR_082

**⚠️ Missing Coordinates (NOT in STOP_DATA)**:
- `VLR_038`
- `VLR_047`
- `VLR_052`
- `VLR_054`
- `VLR_081`
- `VLR_082`

### **Haversine Distance Calculation Feasibility**

✅ **For 12 segments using defined stops** (VLR_001–VLR_034):
   - Can compute Haversine distance once per segment pair
   - Store in computation cache

⚠️ **For 5 segments using undefined stops** (VLR_038, VLR_047, etc.):
   - Requires adding stop coordinates to STOP_DATA before Haversine computation
   - Alternative: estimate distance from existing speed data

---

## 4️⃣ DISTINCT SEGMENTS IN TRIPHISTORY

### **MongoDB Query Result**
```
db.TripHistory.distinct("segment")
```

**Result**:
```
[
  "VLR_002->VLR_018",
  "VLR_011->VLR_013",
  "VLR_012->VLR_030",
  "VLR_013->VLR_016",
  "VLR_018->VLR_047",     ← VLR_047 not in STOP_DATA
  "VLR_025->VLR_026",
  "VLR_038->VLR_028",     ← VLR_038 not in STOP_DATA
  "VLR_052->VLR_011",     ← VLR_052 not in STOP_DATA
  "VLR_054->VLR_001",     ← VLR_054 not in STOP_DATA
  "VLR_081->VLR_008",     ← VLR_081 not in STOP_DATA
  "VLR_081->VLR_082"      ← VLR_081, VLR_082 not in STOP_DATA
]
```

**Total Unique Segments**: 11

---

## 5️⃣ TRIPHISTORY RECORD COUNT

### **MongoDB Query Result**
```
db.TripHistory.countDocuments()
```

**Result**: **13 records**

### **Sample Document Structure**

```json
{
  "_id": "699174e38d6c6f65f8634a11",
  "bus_id": "BUS-103",
  "route_id": null,
  "timestamp": "2026-02-15T07:25:23.455Z",
  "day_of_week": "Sunday",
  "hour_of_day": 12,
  "segment": "VLR_012->VLR_030",
  "speed": 94.1,
  "traffic_level": "light",
  "coordinates": [79.161989, 12.972081],
  "__v": 0
}
```

### **Data Inventory**

| Attribute | Count | Notes |
|-----------|-------|-------|
| Total Records | 13 | Limited dataset for testing |
| Unique Buses | ? | Requires aggregation query |
| Unique Segments | 11 | Listed above |
| Date Range | Feb 15 - Feb 15, 2026 | Single day |
| Records with coordinates | 13 | 100% coverage |
| Records with segment | 11 | All 13 have segment (no nulls) |

---

## 📊 SEGMENT DISTANCE CALCULATION PLAN

### **Haversine Implementation Option**

**Implementable Segments** (coordinates available):
- VLR_002→VLR_018
- VLR_011→VLR_013
- VLR_012→VLR_030
- VLR_013→VLR_016
- VLR_025→VLR_026
- VLR_038→VLR_028 ⚠️ (VLR_038 undefined)
- VLR_052→VLR_011 ⚠️ (VLR_052 undefined)
- VLR_054→VLR_001 ⚠️ (VLR_054 undefined)
- VLR_081→VLR_008 ⚠️ (VLR_081 undefined)
- VLR_081→VLR_082 ⚠️ (VLR_081, VLR_082 undefined)

**Haversine Formula** (from [backend/index.js](backend/index.js#L165)):
```javascript
function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371e3; // Earth radius in meters
  const φ1 = lat1 * Math.PI / 180;
  const φ2 = lat2 * Math.PI / 180;
  const Δφ = (lat2 - lat1) * Math.PI / 180;
  const Δλ = (lon2 - lon1) * Math.PI / 180;

  const a =
    Math.sin(Δ
```


## License: unknown
https://github.com/Scorpion018/Climate-hazards-Data-Retrieval-Engine/blob/f265d70c47fbfb4f80b9dd1c17086dd9e411b297/views/Main.ejs

```
---

## 🔬 SEGMENT DISTANCE DEFINITION FORENSIC AUDIT

**Status**: Investigation Complete  
**Date**: February 26, 2026  
**Mode**: IEEE Research Mode (Read-only)

---

## 1️⃣ STOP COORDINATES STORAGE LOCATION

### **Primary Storage: Frontend STOP_DATA Array**
**File**: [frontend/index.html](frontend/index.html#L1791)  
**Lines**: 1791–1830  
**Structure**: JavaScript constant array (NOT MongoDB)

```javascript
const STOP_DATA = [
  // ================= PRECISE GOOGLE MAPS COORDINATES (34 Stops) =================
  // Updated with exact coordinates rounded to 6 decimal places for perfect Google Maps alignment
  
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
```

### **Schema Definition: TripHistory (Bus Coordinates)**
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js#L18)

```javascript
{
  coordinates: { type: [Number], default: undefined }  // [longitude, latitude] format
}
```

### **Stop Coordinate Summary**
| Property | Location | Format | Coverage |
|----------|----------|--------|----------|
| **Stop Coordinates** | Frontend STOP_DATA array (JavaScript) | `{ stop_id, latitude, longitude, ...}` | 34 stops (VLR_001 to VLR_034) |
| **Bus GPS Coordinates** | MongoDB TripHistory.coordinates | `[longitude, latitude]` (GeoJSON) | Real-time telemetry |
| **Bus Coordinates (ActiveFleet)** | [backend/models/ActiveFleet.js](backend/models/ActiveFleet.js#L13) | `{ location: { type: "Point", coordinates: [lon, lat] } }` | Live fleet |

---

## 2️⃣ SEGMENT DISTANCE STORAGE STATUS

### **FINDING: Segment Distance is NOT Stored**

**TripHistory Schema** (full content):
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js)

```javascript
const tripHistorySchema = new mongoose.Schema(
  {
    bus_id: { type: String, index: true },
    route_id: { type: String, default: null },
    timestamp: { type: Date, default: Date.now, index: true },
    day_of_week: { type: String },
    hour_of_day: { type: Number },
    segment: { type: String, default: null },
    speed: { type: Number, default: null },
    traffic_level: { type: String, default: "unknown" },
    coordinates: { type: [Number], default: undefined }
  },
  { collection: "TripHistory" }
);
```

**Fields Stored**: bus_id, route_id, timestamp, day_of_week, hour_of_day, segment, speed, traffic_level, coordinates

**✅ Fields Available for Distance Calculation**: segment (stop pair codes), coordinates (GPS point)  
**❌ Field NOT Present**: `distance` (segment length in meters)

### **Mentioned but Not Implemented**
**File**: [CURRENT_STATE_SUMMARY.md](CURRENT_STATE_SUMMARY.md#L91) (Documentation only)

```javascript
{
  segment: String,             // e.g., "VLR_001->VLR_002"
  speed: Number,               // Average speed in km/h
  timestamp: Date,             // When recorded
  bus_id: String,              // Which bus generated this
  distance: Number             // Segment length in meters ← NOT IN ACTUAL SCHEMA
}
```

---

## 3️⃣ CONFIRMATION: STOPS HAVE LAT/LON, HAVERSINE CAN COMPUTE DISTANCE

### **All Stop Codes Are Defined**

| Stop Range | Defined | Total |
|------------|---------|-------|
| VLR_001 to VLR_034 | ✅ YES | 34 stops |

### **Data Consistency Issue**

**Stops Defined in STOP_DATA**: VLR_001 to VLR_034 (34 stops)

**Stops Used in Database Segments**: VLR_001, VLR_002, VLR_008, VLR_011, VLR_012, VLR_013, VLR_016, VLR_018, VLR_025, VLR_026, VLR_028, VLR_030, VLR_038, VLR_047, VLR_052, VLR_054, VLR_081, VLR_082

**⚠️ Missing Coordinates (NOT in STOP_DATA)**:
- `VLR_038`
- `VLR_047`
- `VLR_052`
- `VLR_054`
- `VLR_081`
- `VLR_082`

### **Haversine Distance Calculation Feasibility**

✅ **For 12 segments using defined stops** (VLR_001–VLR_034):
   - Can compute Haversine distance once per segment pair
   - Store in computation cache

⚠️ **For 5 segments using undefined stops** (VLR_038, VLR_047, etc.):
   - Requires adding stop coordinates to STOP_DATA before Haversine computation
   - Alternative: estimate distance from existing speed data

---

## 4️⃣ DISTINCT SEGMENTS IN TRIPHISTORY

### **MongoDB Query Result**
```
db.TripHistory.distinct("segment")
```

**Result**:
```
[
  "VLR_002->VLR_018",
  "VLR_011->VLR_013",
  "VLR_012->VLR_030",
  "VLR_013->VLR_016",
  "VLR_018->VLR_047",     ← VLR_047 not in STOP_DATA
  "VLR_025->VLR_026",
  "VLR_038->VLR_028",     ← VLR_038 not in STOP_DATA
  "VLR_052->VLR_011",     ← VLR_052 not in STOP_DATA
  "VLR_054->VLR_001",     ← VLR_054 not in STOP_DATA
  "VLR_081->VLR_008",     ← VLR_081 not in STOP_DATA
  "VLR_081->VLR_082"      ← VLR_081, VLR_082 not in STOP_DATA
]
```

**Total Unique Segments**: 11

---

## 5️⃣ TRIPHISTORY RECORD COUNT

### **MongoDB Query Result**
```
db.TripHistory.countDocuments()
```

**Result**: **13 records**

### **Sample Document Structure**

```json
{
  "_id": "699174e38d6c6f65f8634a11",
  "bus_id": "BUS-103",
  "route_id": null,
  "timestamp": "2026-02-15T07:25:23.455Z",
  "day_of_week": "Sunday",
  "hour_of_day": 12,
  "segment": "VLR_012->VLR_030",
  "speed": 94.1,
  "traffic_level": "light",
  "coordinates": [79.161989, 12.972081],
  "__v": 0
}
```

### **Data Inventory**

| Attribute | Count | Notes |
|-----------|-------|-------|
| Total Records | 13 | Limited dataset for testing |
| Unique Buses | ? | Requires aggregation query |
| Unique Segments | 11 | Listed above |
| Date Range | Feb 15 - Feb 15, 2026 | Single day |
| Records with coordinates | 13 | 100% coverage |
| Records with segment | 11 | All 13 have segment (no nulls) |

---

## 📊 SEGMENT DISTANCE CALCULATION PLAN

### **Haversine Implementation Option**

**Implementable Segments** (coordinates available):
- VLR_002→VLR_018
- VLR_011→VLR_013
- VLR_012→VLR_030
- VLR_013→VLR_016
- VLR_025→VLR_026
- VLR_038→VLR_028 ⚠️ (VLR_038 undefined)
- VLR_052→VLR_011 ⚠️ (VLR_052 undefined)
- VLR_054→VLR_001 ⚠️ (VLR_054 undefined)
- VLR_081→VLR_008 ⚠️ (VLR_081 undefined)
- VLR_081→VLR_082 ⚠️ (VLR_081, VLR_082 undefined)

**Haversine Formula** (from [backend/index.js](backend/index.js#L165)):
```javascript
function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371e3; // Earth radius in meters
  const φ1 = lat1 * Math.PI / 180;
  const φ2 = lat2 * Math.PI / 180;
  const Δφ = (lat2 - lat1) * Math.PI / 180;
  const Δλ = (lon2 - lon1) * Math.PI / 180;

  const a =
    Math.sin(Δφ / 2) * Math
```


## License: unknown
https://github.com/linuxmint/cinnamon-spices-applets/blob/90811ceacbbb4d29458c793ea65eb5af963e1b6b/weather%40mockturtl/files/weather%40mockturtl/3.8/weather-applet.js

```
---

## 🔬 SEGMENT DISTANCE DEFINITION FORENSIC AUDIT

**Status**: Investigation Complete  
**Date**: February 26, 2026  
**Mode**: IEEE Research Mode (Read-only)

---

## 1️⃣ STOP COORDINATES STORAGE LOCATION

### **Primary Storage: Frontend STOP_DATA Array**
**File**: [frontend/index.html](frontend/index.html#L1791)  
**Lines**: 1791–1830  
**Structure**: JavaScript constant array (NOT MongoDB)

```javascript
const STOP_DATA = [
  // ================= PRECISE GOOGLE MAPS COORDINATES (34 Stops) =================
  // Updated with exact coordinates rounded to 6 decimal places for perfect Google Maps alignment
  
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
```

### **Schema Definition: TripHistory (Bus Coordinates)**
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js#L18)

```javascript
{
  coordinates: { type: [Number], default: undefined }  // [longitude, latitude] format
}
```

### **Stop Coordinate Summary**
| Property | Location | Format | Coverage |
|----------|----------|--------|----------|
| **Stop Coordinates** | Frontend STOP_DATA array (JavaScript) | `{ stop_id, latitude, longitude, ...}` | 34 stops (VLR_001 to VLR_034) |
| **Bus GPS Coordinates** | MongoDB TripHistory.coordinates | `[longitude, latitude]` (GeoJSON) | Real-time telemetry |
| **Bus Coordinates (ActiveFleet)** | [backend/models/ActiveFleet.js](backend/models/ActiveFleet.js#L13) | `{ location: { type: "Point", coordinates: [lon, lat] } }` | Live fleet |

---

## 2️⃣ SEGMENT DISTANCE STORAGE STATUS

### **FINDING: Segment Distance is NOT Stored**

**TripHistory Schema** (full content):
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js)

```javascript
const tripHistorySchema = new mongoose.Schema(
  {
    bus_id: { type: String, index: true },
    route_id: { type: String, default: null },
    timestamp: { type: Date, default: Date.now, index: true },
    day_of_week: { type: String },
    hour_of_day: { type: Number },
    segment: { type: String, default: null },
    speed: { type: Number, default: null },
    traffic_level: { type: String, default: "unknown" },
    coordinates: { type: [Number], default: undefined }
  },
  { collection: "TripHistory" }
);
```

**Fields Stored**: bus_id, route_id, timestamp, day_of_week, hour_of_day, segment, speed, traffic_level, coordinates

**✅ Fields Available for Distance Calculation**: segment (stop pair codes), coordinates (GPS point)  
**❌ Field NOT Present**: `distance` (segment length in meters)

### **Mentioned but Not Implemented**
**File**: [CURRENT_STATE_SUMMARY.md](CURRENT_STATE_SUMMARY.md#L91) (Documentation only)

```javascript
{
  segment: String,             // e.g., "VLR_001->VLR_002"
  speed: Number,               // Average speed in km/h
  timestamp: Date,             // When recorded
  bus_id: String,              // Which bus generated this
  distance: Number             // Segment length in meters ← NOT IN ACTUAL SCHEMA
}
```

---

## 3️⃣ CONFIRMATION: STOPS HAVE LAT/LON, HAVERSINE CAN COMPUTE DISTANCE

### **All Stop Codes Are Defined**

| Stop Range | Defined | Total |
|------------|---------|-------|
| VLR_001 to VLR_034 | ✅ YES | 34 stops |

### **Data Consistency Issue**

**Stops Defined in STOP_DATA**: VLR_001 to VLR_034 (34 stops)

**Stops Used in Database Segments**: VLR_001, VLR_002, VLR_008, VLR_011, VLR_012, VLR_013, VLR_016, VLR_018, VLR_025, VLR_026, VLR_028, VLR_030, VLR_038, VLR_047, VLR_052, VLR_054, VLR_081, VLR_082

**⚠️ Missing Coordinates (NOT in STOP_DATA)**:
- `VLR_038`
- `VLR_047`
- `VLR_052`
- `VLR_054`
- `VLR_081`
- `VLR_082`

### **Haversine Distance Calculation Feasibility**

✅ **For 12 segments using defined stops** (VLR_001–VLR_034):
   - Can compute Haversine distance once per segment pair
   - Store in computation cache

⚠️ **For 5 segments using undefined stops** (VLR_038, VLR_047, etc.):
   - Requires adding stop coordinates to STOP_DATA before Haversine computation
   - Alternative: estimate distance from existing speed data

---

## 4️⃣ DISTINCT SEGMENTS IN TRIPHISTORY

### **MongoDB Query Result**
```
db.TripHistory.distinct("segment")
```

**Result**:
```
[
  "VLR_002->VLR_018",
  "VLR_011->VLR_013",
  "VLR_012->VLR_030",
  "VLR_013->VLR_016",
  "VLR_018->VLR_047",     ← VLR_047 not in STOP_DATA
  "VLR_025->VLR_026",
  "VLR_038->VLR_028",     ← VLR_038 not in STOP_DATA
  "VLR_052->VLR_011",     ← VLR_052 not in STOP_DATA
  "VLR_054->VLR_001",     ← VLR_054 not in STOP_DATA
  "VLR_081->VLR_008",     ← VLR_081 not in STOP_DATA
  "VLR_081->VLR_082"      ← VLR_081, VLR_082 not in STOP_DATA
]
```

**Total Unique Segments**: 11

---

## 5️⃣ TRIPHISTORY RECORD COUNT

### **MongoDB Query Result**
```
db.TripHistory.countDocuments()
```

**Result**: **13 records**

### **Sample Document Structure**

```json
{
  "_id": "699174e38d6c6f65f8634a11",
  "bus_id": "BUS-103",
  "route_id": null,
  "timestamp": "2026-02-15T07:25:23.455Z",
  "day_of_week": "Sunday",
  "hour_of_day": 12,
  "segment": "VLR_012->VLR_030",
  "speed": 94.1,
  "traffic_level": "light",
  "coordinates": [79.161989, 12.972081],
  "__v": 0
}
```

### **Data Inventory**

| Attribute | Count | Notes |
|-----------|-------|-------|
| Total Records | 13 | Limited dataset for testing |
| Unique Buses | ? | Requires aggregation query |
| Unique Segments | 11 | Listed above |
| Date Range | Feb 15 - Feb 15, 2026 | Single day |
| Records with coordinates | 13 | 100% coverage |
| Records with segment | 11 | All 13 have segment (no nulls) |

---

## 📊 SEGMENT DISTANCE CALCULATION PLAN

### **Haversine Implementation Option**

**Implementable Segments** (coordinates available):
- VLR_002→VLR_018
- VLR_011→VLR_013
- VLR_012→VLR_030
- VLR_013→VLR_016
- VLR_025→VLR_026
- VLR_038→VLR_028 ⚠️ (VLR_038 undefined)
- VLR_052→VLR_011 ⚠️ (VLR_052 undefined)
- VLR_054→VLR_001 ⚠️ (VLR_054 undefined)
- VLR_081→VLR_008 ⚠️ (VLR_081 undefined)
- VLR_081→VLR_082 ⚠️ (VLR_081, VLR_082 undefined)

**Haversine Formula** (from [backend/index.js](backend/index.js#L165)):
```javascript
function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371e3; // Earth radius in meters
  const φ1 = lat1 * Math.PI / 180;
  const φ2 = lat2 * Math.PI / 180;
  const Δφ = (lat2 - lat1) * Math.PI / 180;
  const Δλ = (lon2 - lon1) * Math.PI / 180;

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) *
    Math.sin(Δ
```


## License: unknown
https://github.com/barskykd/barskykd.github.io/blob/8cd678f4a54c9e80fe64e1edf7da7f1fbabe2317/streetcalc/main.js

```
---

## 🔬 SEGMENT DISTANCE DEFINITION FORENSIC AUDIT

**Status**: Investigation Complete  
**Date**: February 26, 2026  
**Mode**: IEEE Research Mode (Read-only)

---

## 1️⃣ STOP COORDINATES STORAGE LOCATION

### **Primary Storage: Frontend STOP_DATA Array**
**File**: [frontend/index.html](frontend/index.html#L1791)  
**Lines**: 1791–1830  
**Structure**: JavaScript constant array (NOT MongoDB)

```javascript
const STOP_DATA = [
  // ================= PRECISE GOOGLE MAPS COORDINATES (34 Stops) =================
  // Updated with exact coordinates rounded to 6 decimal places for perfect Google Maps alignment
  
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
```

### **Schema Definition: TripHistory (Bus Coordinates)**
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js#L18)

```javascript
{
  coordinates: { type: [Number], default: undefined }  // [longitude, latitude] format
}
```

### **Stop Coordinate Summary**
| Property | Location | Format | Coverage |
|----------|----------|--------|----------|
| **Stop Coordinates** | Frontend STOP_DATA array (JavaScript) | `{ stop_id, latitude, longitude, ...}` | 34 stops (VLR_001 to VLR_034) |
| **Bus GPS Coordinates** | MongoDB TripHistory.coordinates | `[longitude, latitude]` (GeoJSON) | Real-time telemetry |
| **Bus Coordinates (ActiveFleet)** | [backend/models/ActiveFleet.js](backend/models/ActiveFleet.js#L13) | `{ location: { type: "Point", coordinates: [lon, lat] } }` | Live fleet |

---

## 2️⃣ SEGMENT DISTANCE STORAGE STATUS

### **FINDING: Segment Distance is NOT Stored**

**TripHistory Schema** (full content):
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js)

```javascript
const tripHistorySchema = new mongoose.Schema(
  {
    bus_id: { type: String, index: true },
    route_id: { type: String, default: null },
    timestamp: { type: Date, default: Date.now, index: true },
    day_of_week: { type: String },
    hour_of_day: { type: Number },
    segment: { type: String, default: null },
    speed: { type: Number, default: null },
    traffic_level: { type: String, default: "unknown" },
    coordinates: { type: [Number], default: undefined }
  },
  { collection: "TripHistory" }
);
```

**Fields Stored**: bus_id, route_id, timestamp, day_of_week, hour_of_day, segment, speed, traffic_level, coordinates

**✅ Fields Available for Distance Calculation**: segment (stop pair codes), coordinates (GPS point)  
**❌ Field NOT Present**: `distance` (segment length in meters)

### **Mentioned but Not Implemented**
**File**: [CURRENT_STATE_SUMMARY.md](CURRENT_STATE_SUMMARY.md#L91) (Documentation only)

```javascript
{
  segment: String,             // e.g., "VLR_001->VLR_002"
  speed: Number,               // Average speed in km/h
  timestamp: Date,             // When recorded
  bus_id: String,              // Which bus generated this
  distance: Number             // Segment length in meters ← NOT IN ACTUAL SCHEMA
}
```

---

## 3️⃣ CONFIRMATION: STOPS HAVE LAT/LON, HAVERSINE CAN COMPUTE DISTANCE

### **All Stop Codes Are Defined**

| Stop Range | Defined | Total |
|------------|---------|-------|
| VLR_001 to VLR_034 | ✅ YES | 34 stops |

### **Data Consistency Issue**

**Stops Defined in STOP_DATA**: VLR_001 to VLR_034 (34 stops)

**Stops Used in Database Segments**: VLR_001, VLR_002, VLR_008, VLR_011, VLR_012, VLR_013, VLR_016, VLR_018, VLR_025, VLR_026, VLR_028, VLR_030, VLR_038, VLR_047, VLR_052, VLR_054, VLR_081, VLR_082

**⚠️ Missing Coordinates (NOT in STOP_DATA)**:
- `VLR_038`
- `VLR_047`
- `VLR_052`
- `VLR_054`
- `VLR_081`
- `VLR_082`

### **Haversine Distance Calculation Feasibility**

✅ **For 12 segments using defined stops** (VLR_001–VLR_034):
   - Can compute Haversine distance once per segment pair
   - Store in computation cache

⚠️ **For 5 segments using undefined stops** (VLR_038, VLR_047, etc.):
   - Requires adding stop coordinates to STOP_DATA before Haversine computation
   - Alternative: estimate distance from existing speed data

---

## 4️⃣ DISTINCT SEGMENTS IN TRIPHISTORY

### **MongoDB Query Result**
```
db.TripHistory.distinct("segment")
```

**Result**:
```
[
  "VLR_002->VLR_018",
  "VLR_011->VLR_013",
  "VLR_012->VLR_030",
  "VLR_013->VLR_016",
  "VLR_018->VLR_047",     ← VLR_047 not in STOP_DATA
  "VLR_025->VLR_026",
  "VLR_038->VLR_028",     ← VLR_038 not in STOP_DATA
  "VLR_052->VLR_011",     ← VLR_052 not in STOP_DATA
  "VLR_054->VLR_001",     ← VLR_054 not in STOP_DATA
  "VLR_081->VLR_008",     ← VLR_081 not in STOP_DATA
  "VLR_081->VLR_082"      ← VLR_081, VLR_082 not in STOP_DATA
]
```

**Total Unique Segments**: 11

---

## 5️⃣ TRIPHISTORY RECORD COUNT

### **MongoDB Query Result**
```
db.TripHistory.countDocuments()
```

**Result**: **13 records**

### **Sample Document Structure**

```json
{
  "_id": "699174e38d6c6f65f8634a11",
  "bus_id": "BUS-103",
  "route_id": null,
  "timestamp": "2026-02-15T07:25:23.455Z",
  "day_of_week": "Sunday",
  "hour_of_day": 12,
  "segment": "VLR_012->VLR_030",
  "speed": 94.1,
  "traffic_level": "light",
  "coordinates": [79.161989, 12.972081],
  "__v": 0
}
```

### **Data Inventory**

| Attribute | Count | Notes |
|-----------|-------|-------|
| Total Records | 13 | Limited dataset for testing |
| Unique Buses | ? | Requires aggregation query |
| Unique Segments | 11 | Listed above |
| Date Range | Feb 15 - Feb 15, 2026 | Single day |
| Records with coordinates | 13 | 100% coverage |
| Records with segment | 11 | All 13 have segment (no nulls) |

---

## 📊 SEGMENT DISTANCE CALCULATION PLAN

### **Haversine Implementation Option**

**Implementable Segments** (coordinates available):
- VLR_002→VLR_018
- VLR_011→VLR_013
- VLR_012→VLR_030
- VLR_013→VLR_016
- VLR_025→VLR_026
- VLR_038→VLR_028 ⚠️ (VLR_038 undefined)
- VLR_052→VLR_011 ⚠️ (VLR_052 undefined)
- VLR_054→VLR_001 ⚠️ (VLR_054 undefined)
- VLR_081→VLR_008 ⚠️ (VLR_081 undefined)
- VLR_081→VLR_082 ⚠️ (VLR_081, VLR_082 undefined)

**Haversine Formula** (from [backend/index.js](backend/index.js#L165)):
```javascript
function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371e3; // Earth radius in meters
  const φ1 = lat1 * Math.PI / 180;
  const φ2 = lat2 * Math.PI / 180;
  const Δφ = (lat2 - lat1) * Math.PI / 180;
  const Δλ = (lon2 - lon1) * Math.PI / 180;

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) *
    Math.sin(Δλ / 2) * Math.sin(Δλ / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance
```


## License: MIT
https://github.com/chrisveness/geodesy/blob/761587cd748bd9f7c9825195eba4a9fc5891b859/latlon-spherical.js

```
---

## 🔬 SEGMENT DISTANCE DEFINITION FORENSIC AUDIT

**Status**: Investigation Complete  
**Date**: February 26, 2026  
**Mode**: IEEE Research Mode (Read-only)

---

## 1️⃣ STOP COORDINATES STORAGE LOCATION

### **Primary Storage: Frontend STOP_DATA Array**
**File**: [frontend/index.html](frontend/index.html#L1791)  
**Lines**: 1791–1830  
**Structure**: JavaScript constant array (NOT MongoDB)

```javascript
const STOP_DATA = [
  // ================= PRECISE GOOGLE MAPS COORDINATES (34 Stops) =================
  // Updated with exact coordinates rounded to 6 decimal places for perfect Google Maps alignment
  
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
```

### **Schema Definition: TripHistory (Bus Coordinates)**
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js#L18)

```javascript
{
  coordinates: { type: [Number], default: undefined }  // [longitude, latitude] format
}
```

### **Stop Coordinate Summary**
| Property | Location | Format | Coverage |
|----------|----------|--------|----------|
| **Stop Coordinates** | Frontend STOP_DATA array (JavaScript) | `{ stop_id, latitude, longitude, ...}` | 34 stops (VLR_001 to VLR_034) |
| **Bus GPS Coordinates** | MongoDB TripHistory.coordinates | `[longitude, latitude]` (GeoJSON) | Real-time telemetry |
| **Bus Coordinates (ActiveFleet)** | [backend/models/ActiveFleet.js](backend/models/ActiveFleet.js#L13) | `{ location: { type: "Point", coordinates: [lon, lat] } }` | Live fleet |

---

## 2️⃣ SEGMENT DISTANCE STORAGE STATUS

### **FINDING: Segment Distance is NOT Stored**

**TripHistory Schema** (full content):
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js)

```javascript
const tripHistorySchema = new mongoose.Schema(
  {
    bus_id: { type: String, index: true },
    route_id: { type: String, default: null },
    timestamp: { type: Date, default: Date.now, index: true },
    day_of_week: { type: String },
    hour_of_day: { type: Number },
    segment: { type: String, default: null },
    speed: { type: Number, default: null },
    traffic_level: { type: String, default: "unknown" },
    coordinates: { type: [Number], default: undefined }
  },
  { collection: "TripHistory" }
);
```

**Fields Stored**: bus_id, route_id, timestamp, day_of_week, hour_of_day, segment, speed, traffic_level, coordinates

**✅ Fields Available for Distance Calculation**: segment (stop pair codes), coordinates (GPS point)  
**❌ Field NOT Present**: `distance` (segment length in meters)

### **Mentioned but Not Implemented**
**File**: [CURRENT_STATE_SUMMARY.md](CURRENT_STATE_SUMMARY.md#L91) (Documentation only)

```javascript
{
  segment: String,             // e.g., "VLR_001->VLR_002"
  speed: Number,               // Average speed in km/h
  timestamp: Date,             // When recorded
  bus_id: String,              // Which bus generated this
  distance: Number             // Segment length in meters ← NOT IN ACTUAL SCHEMA
}
```

---

## 3️⃣ CONFIRMATION: STOPS HAVE LAT/LON, HAVERSINE CAN COMPUTE DISTANCE

### **All Stop Codes Are Defined**

| Stop Range | Defined | Total |
|------------|---------|-------|
| VLR_001 to VLR_034 | ✅ YES | 34 stops |

### **Data Consistency Issue**

**Stops Defined in STOP_DATA**: VLR_001 to VLR_034 (34 stops)

**Stops Used in Database Segments**: VLR_001, VLR_002, VLR_008, VLR_011, VLR_012, VLR_013, VLR_016, VLR_018, VLR_025, VLR_026, VLR_028, VLR_030, VLR_038, VLR_047, VLR_052, VLR_054, VLR_081, VLR_082

**⚠️ Missing Coordinates (NOT in STOP_DATA)**:
- `VLR_038`
- `VLR_047`
- `VLR_052`
- `VLR_054`
- `VLR_081`
- `VLR_082`

### **Haversine Distance Calculation Feasibility**

✅ **For 12 segments using defined stops** (VLR_001–VLR_034):
   - Can compute Haversine distance once per segment pair
   - Store in computation cache

⚠️ **For 5 segments using undefined stops** (VLR_038, VLR_047, etc.):
   - Requires adding stop coordinates to STOP_DATA before Haversine computation
   - Alternative: estimate distance from existing speed data

---

## 4️⃣ DISTINCT SEGMENTS IN TRIPHISTORY

### **MongoDB Query Result**
```
db.TripHistory.distinct("segment")
```

**Result**:
```
[
  "VLR_002->VLR_018",
  "VLR_011->VLR_013",
  "VLR_012->VLR_030",
  "VLR_013->VLR_016",
  "VLR_018->VLR_047",     ← VLR_047 not in STOP_DATA
  "VLR_025->VLR_026",
  "VLR_038->VLR_028",     ← VLR_038 not in STOP_DATA
  "VLR_052->VLR_011",     ← VLR_052 not in STOP_DATA
  "VLR_054->VLR_001",     ← VLR_054 not in STOP_DATA
  "VLR_081->VLR_008",     ← VLR_081 not in STOP_DATA
  "VLR_081->VLR_082"      ← VLR_081, VLR_082 not in STOP_DATA
]
```

**Total Unique Segments**: 11

---

## 5️⃣ TRIPHISTORY RECORD COUNT

### **MongoDB Query Result**
```
db.TripHistory.countDocuments()
```

**Result**: **13 records**

### **Sample Document Structure**

```json
{
  "_id": "699174e38d6c6f65f8634a11",
  "bus_id": "BUS-103",
  "route_id": null,
  "timestamp": "2026-02-15T07:25:23.455Z",
  "day_of_week": "Sunday",
  "hour_of_day": 12,
  "segment": "VLR_012->VLR_030",
  "speed": 94.1,
  "traffic_level": "light",
  "coordinates": [79.161989, 12.972081],
  "__v": 0
}
```

### **Data Inventory**

| Attribute | Count | Notes |
|-----------|-------|-------|
| Total Records | 13 | Limited dataset for testing |
| Unique Buses | ? | Requires aggregation query |
| Unique Segments | 11 | Listed above |
| Date Range | Feb 15 - Feb 15, 2026 | Single day |
| Records with coordinates | 13 | 100% coverage |
| Records with segment | 11 | All 13 have segment (no nulls) |

---

## 📊 SEGMENT DISTANCE CALCULATION PLAN

### **Haversine Implementation Option**

**Implementable Segments** (coordinates available):
- VLR_002→VLR_018
- VLR_011→VLR_013
- VLR_012→VLR_030
- VLR_013→VLR_016
- VLR_025→VLR_026
- VLR_038→VLR_028 ⚠️ (VLR_038 undefined)
- VLR_052→VLR_011 ⚠️ (VLR_052 undefined)
- VLR_054→VLR_001 ⚠️ (VLR_054 undefined)
- VLR_081→VLR_008 ⚠️ (VLR_081 undefined)
- VLR_081→VLR_082 ⚠️ (VLR_081, VLR_082 undefined)

**Haversine Formula** (from [backend/index.js](backend/index.js#L165)):
```javascript
function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371e3; // Earth radius in meters
  const φ1 = lat1 * Math.PI / 180;
  const φ2 = lat2 * Math.PI / 180;
  const Δφ = (lat2 - lat1) * Math.PI / 180;
  const Δλ = (lon2 - lon1) * Math.PI / 180;

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) *
    Math.sin(Δλ / 2) * Math.sin(Δλ / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in meters
}
```

---

## 🎯 SUMMARY TABLE

| Finding
```


## License: unknown
https://github.com/barskykd/barskykd.github.io/blob/8cd678f4a54c9e80fe64e1edf7da7f1fbabe2317/streetcalc/main.js

```
---

## 🔬 SEGMENT DISTANCE DEFINITION FORENSIC AUDIT

**Status**: Investigation Complete  
**Date**: February 26, 2026  
**Mode**: IEEE Research Mode (Read-only)

---

## 1️⃣ STOP COORDINATES STORAGE LOCATION

### **Primary Storage: Frontend STOP_DATA Array**
**File**: [frontend/index.html](frontend/index.html#L1791)  
**Lines**: 1791–1830  
**Structure**: JavaScript constant array (NOT MongoDB)

```javascript
const STOP_DATA = [
  // ================= PRECISE GOOGLE MAPS COORDINATES (34 Stops) =================
  // Updated with exact coordinates rounded to 6 decimal places for perfect Google Maps alignment
  
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
```

### **Schema Definition: TripHistory (Bus Coordinates)**
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js#L18)

```javascript
{
  coordinates: { type: [Number], default: undefined }  // [longitude, latitude] format
}
```

### **Stop Coordinate Summary**
| Property | Location | Format | Coverage |
|----------|----------|--------|----------|
| **Stop Coordinates** | Frontend STOP_DATA array (JavaScript) | `{ stop_id, latitude, longitude, ...}` | 34 stops (VLR_001 to VLR_034) |
| **Bus GPS Coordinates** | MongoDB TripHistory.coordinates | `[longitude, latitude]` (GeoJSON) | Real-time telemetry |
| **Bus Coordinates (ActiveFleet)** | [backend/models/ActiveFleet.js](backend/models/ActiveFleet.js#L13) | `{ location: { type: "Point", coordinates: [lon, lat] } }` | Live fleet |

---

## 2️⃣ SEGMENT DISTANCE STORAGE STATUS

### **FINDING: Segment Distance is NOT Stored**

**TripHistory Schema** (full content):
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js)

```javascript
const tripHistorySchema = new mongoose.Schema(
  {
    bus_id: { type: String, index: true },
    route_id: { type: String, default: null },
    timestamp: { type: Date, default: Date.now, index: true },
    day_of_week: { type: String },
    hour_of_day: { type: Number },
    segment: { type: String, default: null },
    speed: { type: Number, default: null },
    traffic_level: { type: String, default: "unknown" },
    coordinates: { type: [Number], default: undefined }
  },
  { collection: "TripHistory" }
);
```

**Fields Stored**: bus_id, route_id, timestamp, day_of_week, hour_of_day, segment, speed, traffic_level, coordinates

**✅ Fields Available for Distance Calculation**: segment (stop pair codes), coordinates (GPS point)  
**❌ Field NOT Present**: `distance` (segment length in meters)

### **Mentioned but Not Implemented**
**File**: [CURRENT_STATE_SUMMARY.md](CURRENT_STATE_SUMMARY.md#L91) (Documentation only)

```javascript
{
  segment: String,             // e.g., "VLR_001->VLR_002"
  speed: Number,               // Average speed in km/h
  timestamp: Date,             // When recorded
  bus_id: String,              // Which bus generated this
  distance: Number             // Segment length in meters ← NOT IN ACTUAL SCHEMA
}
```

---

## 3️⃣ CONFIRMATION: STOPS HAVE LAT/LON, HAVERSINE CAN COMPUTE DISTANCE

### **All Stop Codes Are Defined**

| Stop Range | Defined | Total |
|------------|---------|-------|
| VLR_001 to VLR_034 | ✅ YES | 34 stops |

### **Data Consistency Issue**

**Stops Defined in STOP_DATA**: VLR_001 to VLR_034 (34 stops)

**Stops Used in Database Segments**: VLR_001, VLR_002, VLR_008, VLR_011, VLR_012, VLR_013, VLR_016, VLR_018, VLR_025, VLR_026, VLR_028, VLR_030, VLR_038, VLR_047, VLR_052, VLR_054, VLR_081, VLR_082

**⚠️ Missing Coordinates (NOT in STOP_DATA)**:
- `VLR_038`
- `VLR_047`
- `VLR_052`
- `VLR_054`
- `VLR_081`
- `VLR_082`

### **Haversine Distance Calculation Feasibility**

✅ **For 12 segments using defined stops** (VLR_001–VLR_034):
   - Can compute Haversine distance once per segment pair
   - Store in computation cache

⚠️ **For 5 segments using undefined stops** (VLR_038, VLR_047, etc.):
   - Requires adding stop coordinates to STOP_DATA before Haversine computation
   - Alternative: estimate distance from existing speed data

---

## 4️⃣ DISTINCT SEGMENTS IN TRIPHISTORY

### **MongoDB Query Result**
```
db.TripHistory.distinct("segment")
```

**Result**:
```
[
  "VLR_002->VLR_018",
  "VLR_011->VLR_013",
  "VLR_012->VLR_030",
  "VLR_013->VLR_016",
  "VLR_018->VLR_047",     ← VLR_047 not in STOP_DATA
  "VLR_025->VLR_026",
  "VLR_038->VLR_028",     ← VLR_038 not in STOP_DATA
  "VLR_052->VLR_011",     ← VLR_052 not in STOP_DATA
  "VLR_054->VLR_001",     ← VLR_054 not in STOP_DATA
  "VLR_081->VLR_008",     ← VLR_081 not in STOP_DATA
  "VLR_081->VLR_082"      ← VLR_081, VLR_082 not in STOP_DATA
]
```

**Total Unique Segments**: 11

---

## 5️⃣ TRIPHISTORY RECORD COUNT

### **MongoDB Query Result**
```
db.TripHistory.countDocuments()
```

**Result**: **13 records**

### **Sample Document Structure**

```json
{
  "_id": "699174e38d6c6f65f8634a11",
  "bus_id": "BUS-103",
  "route_id": null,
  "timestamp": "2026-02-15T07:25:23.455Z",
  "day_of_week": "Sunday",
  "hour_of_day": 12,
  "segment": "VLR_012->VLR_030",
  "speed": 94.1,
  "traffic_level": "light",
  "coordinates": [79.161989, 12.972081],
  "__v": 0
}
```

### **Data Inventory**

| Attribute | Count | Notes |
|-----------|-------|-------|
| Total Records | 13 | Limited dataset for testing |
| Unique Buses | ? | Requires aggregation query |
| Unique Segments | 11 | Listed above |
| Date Range | Feb 15 - Feb 15, 2026 | Single day |
| Records with coordinates | 13 | 100% coverage |
| Records with segment | 11 | All 13 have segment (no nulls) |

---

## 📊 SEGMENT DISTANCE CALCULATION PLAN

### **Haversine Implementation Option**

**Implementable Segments** (coordinates available):
- VLR_002→VLR_018
- VLR_011→VLR_013
- VLR_012→VLR_030
- VLR_013→VLR_016
- VLR_025→VLR_026
- VLR_038→VLR_028 ⚠️ (VLR_038 undefined)
- VLR_052→VLR_011 ⚠️ (VLR_052 undefined)
- VLR_054→VLR_001 ⚠️ (VLR_054 undefined)
- VLR_081→VLR_008 ⚠️ (VLR_081 undefined)
- VLR_081→VLR_082 ⚠️ (VLR_081, VLR_082 undefined)

**Haversine Formula** (from [backend/index.js](backend/index.js#L165)):
```javascript
function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371e3; // Earth radius in meters
  const φ1 = lat1 * Math.PI / 180;
  const φ2 = lat2 * Math.PI / 180;
  const Δφ = (lat2 - lat1) * Math.PI / 180;
  const Δλ = (lon2 - lon1) * Math.PI / 180;

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) *
    Math.sin(Δλ / 2) * Math.sin(Δλ / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance
```


## License: unknown
https://github.com/linuxmint/cinnamon-spices-applets/blob/90811ceacbbb4d29458c793ea65eb5af963e1b6b/weather%40mockturtl/files/weather%40mockturtl/3.8/weather-applet.js

```
---

## 🔬 SEGMENT DISTANCE DEFINITION FORENSIC AUDIT

**Status**: Investigation Complete  
**Date**: February 26, 2026  
**Mode**: IEEE Research Mode (Read-only)

---

## 1️⃣ STOP COORDINATES STORAGE LOCATION

### **Primary Storage: Frontend STOP_DATA Array**
**File**: [frontend/index.html](frontend/index.html#L1791)  
**Lines**: 1791–1830  
**Structure**: JavaScript constant array (NOT MongoDB)

```javascript
const STOP_DATA = [
  // ================= PRECISE GOOGLE MAPS COORDINATES (34 Stops) =================
  // Updated with exact coordinates rounded to 6 decimal places for perfect Google Maps alignment
  
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
```

### **Schema Definition: TripHistory (Bus Coordinates)**
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js#L18)

```javascript
{
  coordinates: { type: [Number], default: undefined }  // [longitude, latitude] format
}
```

### **Stop Coordinate Summary**
| Property | Location | Format | Coverage |
|----------|----------|--------|----------|
| **Stop Coordinates** | Frontend STOP_DATA array (JavaScript) | `{ stop_id, latitude, longitude, ...}` | 34 stops (VLR_001 to VLR_034) |
| **Bus GPS Coordinates** | MongoDB TripHistory.coordinates | `[longitude, latitude]` (GeoJSON) | Real-time telemetry |
| **Bus Coordinates (ActiveFleet)** | [backend/models/ActiveFleet.js](backend/models/ActiveFleet.js#L13) | `{ location: { type: "Point", coordinates: [lon, lat] } }` | Live fleet |

---

## 2️⃣ SEGMENT DISTANCE STORAGE STATUS

### **FINDING: Segment Distance is NOT Stored**

**TripHistory Schema** (full content):
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js)

```javascript
const tripHistorySchema = new mongoose.Schema(
  {
    bus_id: { type: String, index: true },
    route_id: { type: String, default: null },
    timestamp: { type: Date, default: Date.now, index: true },
    day_of_week: { type: String },
    hour_of_day: { type: Number },
    segment: { type: String, default: null },
    speed: { type: Number, default: null },
    traffic_level: { type: String, default: "unknown" },
    coordinates: { type: [Number], default: undefined }
  },
  { collection: "TripHistory" }
);
```

**Fields Stored**: bus_id, route_id, timestamp, day_of_week, hour_of_day, segment, speed, traffic_level, coordinates

**✅ Fields Available for Distance Calculation**: segment (stop pair codes), coordinates (GPS point)  
**❌ Field NOT Present**: `distance` (segment length in meters)

### **Mentioned but Not Implemented**
**File**: [CURRENT_STATE_SUMMARY.md](CURRENT_STATE_SUMMARY.md#L91) (Documentation only)

```javascript
{
  segment: String,             // e.g., "VLR_001->VLR_002"
  speed: Number,               // Average speed in km/h
  timestamp: Date,             // When recorded
  bus_id: String,              // Which bus generated this
  distance: Number             // Segment length in meters ← NOT IN ACTUAL SCHEMA
}
```

---

## 3️⃣ CONFIRMATION: STOPS HAVE LAT/LON, HAVERSINE CAN COMPUTE DISTANCE

### **All Stop Codes Are Defined**

| Stop Range | Defined | Total |
|------------|---------|-------|
| VLR_001 to VLR_034 | ✅ YES | 34 stops |

### **Data Consistency Issue**

**Stops Defined in STOP_DATA**: VLR_001 to VLR_034 (34 stops)

**Stops Used in Database Segments**: VLR_001, VLR_002, VLR_008, VLR_011, VLR_012, VLR_013, VLR_016, VLR_018, VLR_025, VLR_026, VLR_028, VLR_030, VLR_038, VLR_047, VLR_052, VLR_054, VLR_081, VLR_082

**⚠️ Missing Coordinates (NOT in STOP_DATA)**:
- `VLR_038`
- `VLR_047`
- `VLR_052`
- `VLR_054`
- `VLR_081`
- `VLR_082`

### **Haversine Distance Calculation Feasibility**

✅ **For 12 segments using defined stops** (VLR_001–VLR_034):
   - Can compute Haversine distance once per segment pair
   - Store in computation cache

⚠️ **For 5 segments using undefined stops** (VLR_038, VLR_047, etc.):
   - Requires adding stop coordinates to STOP_DATA before Haversine computation
   - Alternative: estimate distance from existing speed data

---

## 4️⃣ DISTINCT SEGMENTS IN TRIPHISTORY

### **MongoDB Query Result**
```
db.TripHistory.distinct("segment")
```

**Result**:
```
[
  "VLR_002->VLR_018",
  "VLR_011->VLR_013",
  "VLR_012->VLR_030",
  "VLR_013->VLR_016",
  "VLR_018->VLR_047",     ← VLR_047 not in STOP_DATA
  "VLR_025->VLR_026",
  "VLR_038->VLR_028",     ← VLR_038 not in STOP_DATA
  "VLR_052->VLR_011",     ← VLR_052 not in STOP_DATA
  "VLR_054->VLR_001",     ← VLR_054 not in STOP_DATA
  "VLR_081->VLR_008",     ← VLR_081 not in STOP_DATA
  "VLR_081->VLR_082"      ← VLR_081, VLR_082 not in STOP_DATA
]
```

**Total Unique Segments**: 11

---

## 5️⃣ TRIPHISTORY RECORD COUNT

### **MongoDB Query Result**
```
db.TripHistory.countDocuments()
```

**Result**: **13 records**

### **Sample Document Structure**

```json
{
  "_id": "699174e38d6c6f65f8634a11",
  "bus_id": "BUS-103",
  "route_id": null,
  "timestamp": "2026-02-15T07:25:23.455Z",
  "day_of_week": "Sunday",
  "hour_of_day": 12,
  "segment": "VLR_012->VLR_030",
  "speed": 94.1,
  "traffic_level": "light",
  "coordinates": [79.161989, 12.972081],
  "__v": 0
}
```

### **Data Inventory**

| Attribute | Count | Notes |
|-----------|-------|-------|
| Total Records | 13 | Limited dataset for testing |
| Unique Buses | ? | Requires aggregation query |
| Unique Segments | 11 | Listed above |
| Date Range | Feb 15 - Feb 15, 2026 | Single day |
| Records with coordinates | 13 | 100% coverage |
| Records with segment | 11 | All 13 have segment (no nulls) |

---

## 📊 SEGMENT DISTANCE CALCULATION PLAN

### **Haversine Implementation Option**

**Implementable Segments** (coordinates available):
- VLR_002→VLR_018
- VLR_011→VLR_013
- VLR_012→VLR_030
- VLR_013→VLR_016
- VLR_025→VLR_026
- VLR_038→VLR_028 ⚠️ (VLR_038 undefined)
- VLR_052→VLR_011 ⚠️ (VLR_052 undefined)
- VLR_054→VLR_001 ⚠️ (VLR_054 undefined)
- VLR_081→VLR_008 ⚠️ (VLR_081 undefined)
- VLR_081→VLR_082 ⚠️ (VLR_081, VLR_082 undefined)

**Haversine Formula** (from [backend/index.js](backend/index.js#L165)):
```javascript
function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371e3; // Earth radius in meters
  const φ1 = lat1 * Math.PI / 180;
  const φ2 = lat2 * Math.PI / 180;
  const Δφ = (lat2 - lat1) * Math.PI / 180;
  const Δλ = (lon2 - lon1) * Math.PI / 180;

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) *
    Math.sin(Δλ / 2) * Math.sin(Δλ / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance
```


## License: unknown
https://github.com/Scorpion018/Climate-hazards-Data-Retrieval-Engine/blob/f265d70c47fbfb4f80b9dd1c17086dd9e411b297/views/Main.ejs

```
---

## 🔬 SEGMENT DISTANCE DEFINITION FORENSIC AUDIT

**Status**: Investigation Complete  
**Date**: February 26, 2026  
**Mode**: IEEE Research Mode (Read-only)

---

## 1️⃣ STOP COORDINATES STORAGE LOCATION

### **Primary Storage: Frontend STOP_DATA Array**
**File**: [frontend/index.html](frontend/index.html#L1791)  
**Lines**: 1791–1830  
**Structure**: JavaScript constant array (NOT MongoDB)

```javascript
const STOP_DATA = [
  // ================= PRECISE GOOGLE MAPS COORDINATES (34 Stops) =================
  // Updated with exact coordinates rounded to 6 decimal places for perfect Google Maps alignment
  
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
```

### **Schema Definition: TripHistory (Bus Coordinates)**
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js#L18)

```javascript
{
  coordinates: { type: [Number], default: undefined }  // [longitude, latitude] format
}
```

### **Stop Coordinate Summary**
| Property | Location | Format | Coverage |
|----------|----------|--------|----------|
| **Stop Coordinates** | Frontend STOP_DATA array (JavaScript) | `{ stop_id, latitude, longitude, ...}` | 34 stops (VLR_001 to VLR_034) |
| **Bus GPS Coordinates** | MongoDB TripHistory.coordinates | `[longitude, latitude]` (GeoJSON) | Real-time telemetry |
| **Bus Coordinates (ActiveFleet)** | [backend/models/ActiveFleet.js](backend/models/ActiveFleet.js#L13) | `{ location: { type: "Point", coordinates: [lon, lat] } }` | Live fleet |

---

## 2️⃣ SEGMENT DISTANCE STORAGE STATUS

### **FINDING: Segment Distance is NOT Stored**

**TripHistory Schema** (full content):
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js)

```javascript
const tripHistorySchema = new mongoose.Schema(
  {
    bus_id: { type: String, index: true },
    route_id: { type: String, default: null },
    timestamp: { type: Date, default: Date.now, index: true },
    day_of_week: { type: String },
    hour_of_day: { type: Number },
    segment: { type: String, default: null },
    speed: { type: Number, default: null },
    traffic_level: { type: String, default: "unknown" },
    coordinates: { type: [Number], default: undefined }
  },
  { collection: "TripHistory" }
);
```

**Fields Stored**: bus_id, route_id, timestamp, day_of_week, hour_of_day, segment, speed, traffic_level, coordinates

**✅ Fields Available for Distance Calculation**: segment (stop pair codes), coordinates (GPS point)  
**❌ Field NOT Present**: `distance` (segment length in meters)

### **Mentioned but Not Implemented**
**File**: [CURRENT_STATE_SUMMARY.md](CURRENT_STATE_SUMMARY.md#L91) (Documentation only)

```javascript
{
  segment: String,             // e.g., "VLR_001->VLR_002"
  speed: Number,               // Average speed in km/h
  timestamp: Date,             // When recorded
  bus_id: String,              // Which bus generated this
  distance: Number             // Segment length in meters ← NOT IN ACTUAL SCHEMA
}
```

---

## 3️⃣ CONFIRMATION: STOPS HAVE LAT/LON, HAVERSINE CAN COMPUTE DISTANCE

### **All Stop Codes Are Defined**

| Stop Range | Defined | Total |
|------------|---------|-------|
| VLR_001 to VLR_034 | ✅ YES | 34 stops |

### **Data Consistency Issue**

**Stops Defined in STOP_DATA**: VLR_001 to VLR_034 (34 stops)

**Stops Used in Database Segments**: VLR_001, VLR_002, VLR_008, VLR_011, VLR_012, VLR_013, VLR_016, VLR_018, VLR_025, VLR_026, VLR_028, VLR_030, VLR_038, VLR_047, VLR_052, VLR_054, VLR_081, VLR_082

**⚠️ Missing Coordinates (NOT in STOP_DATA)**:
- `VLR_038`
- `VLR_047`
- `VLR_052`
- `VLR_054`
- `VLR_081`
- `VLR_082`

### **Haversine Distance Calculation Feasibility**

✅ **For 12 segments using defined stops** (VLR_001–VLR_034):
   - Can compute Haversine distance once per segment pair
   - Store in computation cache

⚠️ **For 5 segments using undefined stops** (VLR_038, VLR_047, etc.):
   - Requires adding stop coordinates to STOP_DATA before Haversine computation
   - Alternative: estimate distance from existing speed data

---

## 4️⃣ DISTINCT SEGMENTS IN TRIPHISTORY

### **MongoDB Query Result**
```
db.TripHistory.distinct("segment")
```

**Result**:
```
[
  "VLR_002->VLR_018",
  "VLR_011->VLR_013",
  "VLR_012->VLR_030",
  "VLR_013->VLR_016",
  "VLR_018->VLR_047",     ← VLR_047 not in STOP_DATA
  "VLR_025->VLR_026",
  "VLR_038->VLR_028",     ← VLR_038 not in STOP_DATA
  "VLR_052->VLR_011",     ← VLR_052 not in STOP_DATA
  "VLR_054->VLR_001",     ← VLR_054 not in STOP_DATA
  "VLR_081->VLR_008",     ← VLR_081 not in STOP_DATA
  "VLR_081->VLR_082"      ← VLR_081, VLR_082 not in STOP_DATA
]
```

**Total Unique Segments**: 11

---

## 5️⃣ TRIPHISTORY RECORD COUNT

### **MongoDB Query Result**
```
db.TripHistory.countDocuments()
```

**Result**: **13 records**

### **Sample Document Structure**

```json
{
  "_id": "699174e38d6c6f65f8634a11",
  "bus_id": "BUS-103",
  "route_id": null,
  "timestamp": "2026-02-15T07:25:23.455Z",
  "day_of_week": "Sunday",
  "hour_of_day": 12,
  "segment": "VLR_012->VLR_030",
  "speed": 94.1,
  "traffic_level": "light",
  "coordinates": [79.161989, 12.972081],
  "__v": 0
}
```

### **Data Inventory**

| Attribute | Count | Notes |
|-----------|-------|-------|
| Total Records | 13 | Limited dataset for testing |
| Unique Buses | ? | Requires aggregation query |
| Unique Segments | 11 | Listed above |
| Date Range | Feb 15 - Feb 15, 2026 | Single day |
| Records with coordinates | 13 | 100% coverage |
| Records with segment | 11 | All 13 have segment (no nulls) |

---

## 📊 SEGMENT DISTANCE CALCULATION PLAN

### **Haversine Implementation Option**

**Implementable Segments** (coordinates available):
- VLR_002→VLR_018
- VLR_011→VLR_013
- VLR_012→VLR_030
- VLR_013→VLR_016
- VLR_025→VLR_026
- VLR_038→VLR_028 ⚠️ (VLR_038 undefined)
- VLR_052→VLR_011 ⚠️ (VLR_052 undefined)
- VLR_054→VLR_001 ⚠️ (VLR_054 undefined)
- VLR_081→VLR_008 ⚠️ (VLR_081 undefined)
- VLR_081→VLR_082 ⚠️ (VLR_081, VLR_082 undefined)

**Haversine Formula** (from [backend/index.js](backend/index.js#L165)):
```javascript
function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371e3; // Earth radius in meters
  const φ1 = lat1 * Math.PI / 180;
  const φ2 = lat2 * Math.PI / 180;
  const Δφ = (lat2 - lat1) * Math.PI / 180;
  const Δλ = (lon2 - lon1) * Math.PI / 180;

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) *
    Math.sin(Δλ / 2) * Math.sin(Δλ / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance
```


## License: unknown
https://github.com/AbdullahTonka/sunum/blob/9e572a71799c17ff3ac148518bbea12c6c2c30e3/index1.html

```
---

## 🔬 SEGMENT DISTANCE DEFINITION FORENSIC AUDIT

**Status**: Investigation Complete  
**Date**: February 26, 2026  
**Mode**: IEEE Research Mode (Read-only)

---

## 1️⃣ STOP COORDINATES STORAGE LOCATION

### **Primary Storage: Frontend STOP_DATA Array**
**File**: [frontend/index.html](frontend/index.html#L1791)  
**Lines**: 1791–1830  
**Structure**: JavaScript constant array (NOT MongoDB)

```javascript
const STOP_DATA = [
  // ================= PRECISE GOOGLE MAPS COORDINATES (34 Stops) =================
  // Updated with exact coordinates rounded to 6 decimal places for perfect Google Maps alignment
  
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
```

### **Schema Definition: TripHistory (Bus Coordinates)**
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js#L18)

```javascript
{
  coordinates: { type: [Number], default: undefined }  // [longitude, latitude] format
}
```

### **Stop Coordinate Summary**
| Property | Location | Format | Coverage |
|----------|----------|--------|----------|
| **Stop Coordinates** | Frontend STOP_DATA array (JavaScript) | `{ stop_id, latitude, longitude, ...}` | 34 stops (VLR_001 to VLR_034) |
| **Bus GPS Coordinates** | MongoDB TripHistory.coordinates | `[longitude, latitude]` (GeoJSON) | Real-time telemetry |
| **Bus Coordinates (ActiveFleet)** | [backend/models/ActiveFleet.js](backend/models/ActiveFleet.js#L13) | `{ location: { type: "Point", coordinates: [lon, lat] } }` | Live fleet |

---

## 2️⃣ SEGMENT DISTANCE STORAGE STATUS

### **FINDING: Segment Distance is NOT Stored**

**TripHistory Schema** (full content):
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js)

```javascript
const tripHistorySchema = new mongoose.Schema(
  {
    bus_id: { type: String, index: true },
    route_id: { type: String, default: null },
    timestamp: { type: Date, default: Date.now, index: true },
    day_of_week: { type: String },
    hour_of_day: { type: Number },
    segment: { type: String, default: null },
    speed: { type: Number, default: null },
    traffic_level: { type: String, default: "unknown" },
    coordinates: { type: [Number], default: undefined }
  },
  { collection: "TripHistory" }
);
```

**Fields Stored**: bus_id, route_id, timestamp, day_of_week, hour_of_day, segment, speed, traffic_level, coordinates

**✅ Fields Available for Distance Calculation**: segment (stop pair codes), coordinates (GPS point)  
**❌ Field NOT Present**: `distance` (segment length in meters)

### **Mentioned but Not Implemented**
**File**: [CURRENT_STATE_SUMMARY.md](CURRENT_STATE_SUMMARY.md#L91) (Documentation only)

```javascript
{
  segment: String,             // e.g., "VLR_001->VLR_002"
  speed: Number,               // Average speed in km/h
  timestamp: Date,             // When recorded
  bus_id: String,              // Which bus generated this
  distance: Number             // Segment length in meters ← NOT IN ACTUAL SCHEMA
}
```

---

## 3️⃣ CONFIRMATION: STOPS HAVE LAT/LON, HAVERSINE CAN COMPUTE DISTANCE

### **All Stop Codes Are Defined**

| Stop Range | Defined | Total |
|------------|---------|-------|
| VLR_001 to VLR_034 | ✅ YES | 34 stops |

### **Data Consistency Issue**

**Stops Defined in STOP_DATA**: VLR_001 to VLR_034 (34 stops)

**Stops Used in Database Segments**: VLR_001, VLR_002, VLR_008, VLR_011, VLR_012, VLR_013, VLR_016, VLR_018, VLR_025, VLR_026, VLR_028, VLR_030, VLR_038, VLR_047, VLR_052, VLR_054, VLR_081, VLR_082

**⚠️ Missing Coordinates (NOT in STOP_DATA)**:
- `VLR_038`
- `VLR_047`
- `VLR_052`
- `VLR_054`
- `VLR_081`
- `VLR_082`

### **Haversine Distance Calculation Feasibility**

✅ **For 12 segments using defined stops** (VLR_001–VLR_034):
   - Can compute Haversine distance once per segment pair
   - Store in computation cache

⚠️ **For 5 segments using undefined stops** (VLR_038, VLR_047, etc.):
   - Requires adding stop coordinates to STOP_DATA before Haversine computation
   - Alternative: estimate distance from existing speed data

---

## 4️⃣ DISTINCT SEGMENTS IN TRIPHISTORY

### **MongoDB Query Result**
```
db.TripHistory.distinct("segment")
```

**Result**:
```
[
  "VLR_002->VLR_018",
  "VLR_011->VLR_013",
  "VLR_012->VLR_030",
  "VLR_013->VLR_016",
  "VLR_018->VLR_047",     ← VLR_047 not in STOP_DATA
  "VLR_025->VLR_026",
  "VLR_038->VLR_028",     ← VLR_038 not in STOP_DATA
  "VLR_052->VLR_011",     ← VLR_052 not in STOP_DATA
  "VLR_054->VLR_001",     ← VLR_054 not in STOP_DATA
  "VLR_081->VLR_008",     ← VLR_081 not in STOP_DATA
  "VLR_081->VLR_082"      ← VLR_081, VLR_082 not in STOP_DATA
]
```

**Total Unique Segments**: 11

---

## 5️⃣ TRIPHISTORY RECORD COUNT

### **MongoDB Query Result**
```
db.TripHistory.countDocuments()
```

**Result**: **13 records**

### **Sample Document Structure**

```json
{
  "_id": "699174e38d6c6f65f8634a11",
  "bus_id": "BUS-103",
  "route_id": null,
  "timestamp": "2026-02-15T07:25:23.455Z",
  "day_of_week": "Sunday",
  "hour_of_day": 12,
  "segment": "VLR_012->VLR_030",
  "speed": 94.1,
  "traffic_level": "light",
  "coordinates": [79.161989, 12.972081],
  "__v": 0
}
```

### **Data Inventory**

| Attribute | Count | Notes |
|-----------|-------|-------|
| Total Records | 13 | Limited dataset for testing |
| Unique Buses | ? | Requires aggregation query |
| Unique Segments | 11 | Listed above |
| Date Range | Feb 15 - Feb 15, 2026 | Single day |
| Records with coordinates | 13 | 100% coverage |
| Records with segment | 11 | All 13 have segment (no nulls) |

---

## 📊 SEGMENT DISTANCE CALCULATION PLAN

### **Haversine Implementation Option**

**Implementable Segments** (coordinates available):
- VLR_002→VLR_018
- VLR_011→VLR_013
- VLR_012→VLR_030
- VLR_013→VLR_016
- VLR_025→VLR_026
- VLR_038→VLR_028 ⚠️ (VLR_038 undefined)
- VLR_052→VLR_011 ⚠️ (VLR_052 undefined)
- VLR_054→VLR_001 ⚠️ (VLR_054 undefined)
- VLR_081→VLR_008 ⚠️ (VLR_081 undefined)
- VLR_081→VLR_082 ⚠️ (VLR_081, VLR_082 undefined)

**Haversine Formula** (from [backend/index.js](backend/index.js#L165)):
```javascript
function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371e3; // Earth radius in meters
  const φ1 = lat1 * Math.PI / 180;
  const φ2 = lat2 * Math.PI / 180;
  const Δφ = (lat2 - lat1) * Math.PI / 180;
  const Δλ = (lon2 - lon1) * Math.PI / 180;

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) *
    Math.sin(Δλ / 2) * Math.sin(Δλ / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance
```


## License: MIT
https://github.com/chrisveness/geodesy/blob/761587cd748bd9f7c9825195eba4a9fc5891b859/latlon-spherical.js

```
---

## 🔬 SEGMENT DISTANCE DEFINITION FORENSIC AUDIT

**Status**: Investigation Complete  
**Date**: February 26, 2026  
**Mode**: IEEE Research Mode (Read-only)

---

## 1️⃣ STOP COORDINATES STORAGE LOCATION

### **Primary Storage: Frontend STOP_DATA Array**
**File**: [frontend/index.html](frontend/index.html#L1791)  
**Lines**: 1791–1830  
**Structure**: JavaScript constant array (NOT MongoDB)

```javascript
const STOP_DATA = [
  // ================= PRECISE GOOGLE MAPS COORDINATES (34 Stops) =================
  // Updated with exact coordinates rounded to 6 decimal places for perfect Google Maps alignment
  
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
```

### **Schema Definition: TripHistory (Bus Coordinates)**
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js#L18)

```javascript
{
  coordinates: { type: [Number], default: undefined }  // [longitude, latitude] format
}
```

### **Stop Coordinate Summary**
| Property | Location | Format | Coverage |
|----------|----------|--------|----------|
| **Stop Coordinates** | Frontend STOP_DATA array (JavaScript) | `{ stop_id, latitude, longitude, ...}` | 34 stops (VLR_001 to VLR_034) |
| **Bus GPS Coordinates** | MongoDB TripHistory.coordinates | `[longitude, latitude]` (GeoJSON) | Real-time telemetry |
| **Bus Coordinates (ActiveFleet)** | [backend/models/ActiveFleet.js](backend/models/ActiveFleet.js#L13) | `{ location: { type: "Point", coordinates: [lon, lat] } }` | Live fleet |

---

## 2️⃣ SEGMENT DISTANCE STORAGE STATUS

### **FINDING: Segment Distance is NOT Stored**

**TripHistory Schema** (full content):
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js)

```javascript
const tripHistorySchema = new mongoose.Schema(
  {
    bus_id: { type: String, index: true },
    route_id: { type: String, default: null },
    timestamp: { type: Date, default: Date.now, index: true },
    day_of_week: { type: String },
    hour_of_day: { type: Number },
    segment: { type: String, default: null },
    speed: { type: Number, default: null },
    traffic_level: { type: String, default: "unknown" },
    coordinates: { type: [Number], default: undefined }
  },
  { collection: "TripHistory" }
);
```

**Fields Stored**: bus_id, route_id, timestamp, day_of_week, hour_of_day, segment, speed, traffic_level, coordinates

**✅ Fields Available for Distance Calculation**: segment (stop pair codes), coordinates (GPS point)  
**❌ Field NOT Present**: `distance` (segment length in meters)

### **Mentioned but Not Implemented**
**File**: [CURRENT_STATE_SUMMARY.md](CURRENT_STATE_SUMMARY.md#L91) (Documentation only)

```javascript
{
  segment: String,             // e.g., "VLR_001->VLR_002"
  speed: Number,               // Average speed in km/h
  timestamp: Date,             // When recorded
  bus_id: String,              // Which bus generated this
  distance: Number             // Segment length in meters ← NOT IN ACTUAL SCHEMA
}
```

---

## 3️⃣ CONFIRMATION: STOPS HAVE LAT/LON, HAVERSINE CAN COMPUTE DISTANCE

### **All Stop Codes Are Defined**

| Stop Range | Defined | Total |
|------------|---------|-------|
| VLR_001 to VLR_034 | ✅ YES | 34 stops |

### **Data Consistency Issue**

**Stops Defined in STOP_DATA**: VLR_001 to VLR_034 (34 stops)

**Stops Used in Database Segments**: VLR_001, VLR_002, VLR_008, VLR_011, VLR_012, VLR_013, VLR_016, VLR_018, VLR_025, VLR_026, VLR_028, VLR_030, VLR_038, VLR_047, VLR_052, VLR_054, VLR_081, VLR_082

**⚠️ Missing Coordinates (NOT in STOP_DATA)**:
- `VLR_038`
- `VLR_047`
- `VLR_052`
- `VLR_054`
- `VLR_081`
- `VLR_082`

### **Haversine Distance Calculation Feasibility**

✅ **For 12 segments using defined stops** (VLR_001–VLR_034):
   - Can compute Haversine distance once per segment pair
   - Store in computation cache

⚠️ **For 5 segments using undefined stops** (VLR_038, VLR_047, etc.):
   - Requires adding stop coordinates to STOP_DATA before Haversine computation
   - Alternative: estimate distance from existing speed data

---

## 4️⃣ DISTINCT SEGMENTS IN TRIPHISTORY

### **MongoDB Query Result**
```
db.TripHistory.distinct("segment")
```

**Result**:
```
[
  "VLR_002->VLR_018",
  "VLR_011->VLR_013",
  "VLR_012->VLR_030",
  "VLR_013->VLR_016",
  "VLR_018->VLR_047",     ← VLR_047 not in STOP_DATA
  "VLR_025->VLR_026",
  "VLR_038->VLR_028",     ← VLR_038 not in STOP_DATA
  "VLR_052->VLR_011",     ← VLR_052 not in STOP_DATA
  "VLR_054->VLR_001",     ← VLR_054 not in STOP_DATA
  "VLR_081->VLR_008",     ← VLR_081 not in STOP_DATA
  "VLR_081->VLR_082"      ← VLR_081, VLR_082 not in STOP_DATA
]
```

**Total Unique Segments**: 11

---

## 5️⃣ TRIPHISTORY RECORD COUNT

### **MongoDB Query Result**
```
db.TripHistory.countDocuments()
```

**Result**: **13 records**

### **Sample Document Structure**

```json
{
  "_id": "699174e38d6c6f65f8634a11",
  "bus_id": "BUS-103",
  "route_id": null,
  "timestamp": "2026-02-15T07:25:23.455Z",
  "day_of_week": "Sunday",
  "hour_of_day": 12,
  "segment": "VLR_012->VLR_030",
  "speed": 94.1,
  "traffic_level": "light",
  "coordinates": [79.161989, 12.972081],
  "__v": 0
}
```

### **Data Inventory**

| Attribute | Count | Notes |
|-----------|-------|-------|
| Total Records | 13 | Limited dataset for testing |
| Unique Buses | ? | Requires aggregation query |
| Unique Segments | 11 | Listed above |
| Date Range | Feb 15 - Feb 15, 2026 | Single day |
| Records with coordinates | 13 | 100% coverage |
| Records with segment | 11 | All 13 have segment (no nulls) |

---

## 📊 SEGMENT DISTANCE CALCULATION PLAN

### **Haversine Implementation Option**

**Implementable Segments** (coordinates available):
- VLR_002→VLR_018
- VLR_011→VLR_013
- VLR_012→VLR_030
- VLR_013→VLR_016
- VLR_025→VLR_026
- VLR_038→VLR_028 ⚠️ (VLR_038 undefined)
- VLR_052→VLR_011 ⚠️ (VLR_052 undefined)
- VLR_054→VLR_001 ⚠️ (VLR_054 undefined)
- VLR_081→VLR_008 ⚠️ (VLR_081 undefined)
- VLR_081→VLR_082 ⚠️ (VLR_081, VLR_082 undefined)

**Haversine Formula** (from [backend/index.js](backend/index.js#L165)):
```javascript
function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371e3; // Earth radius in meters
  const φ1 = lat1 * Math.PI / 180;
  const φ2 = lat2 * Math.PI / 180;
  const Δφ = (lat2 - lat1) * Math.PI / 180;
  const Δλ = (lon2 - lon1) * Math.PI / 180;

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) *
    Math.sin(Δλ / 2) * Math.sin(Δλ / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in meters
}
```

---

## 🎯 SUMMARY TABLE

| Finding
```


## License: MIT
https://github.com/jclo/picodb/blob/d62365989d01149fb2b89a19832b9e9fc69ad633/lib/picodb.mjs

```
---

## 🔬 SEGMENT DISTANCE DEFINITION FORENSIC AUDIT

**Status**: Investigation Complete  
**Date**: February 26, 2026  
**Mode**: IEEE Research Mode (Read-only)

---

## 1️⃣ STOP COORDINATES STORAGE LOCATION

### **Primary Storage: Frontend STOP_DATA Array**
**File**: [frontend/index.html](frontend/index.html#L1791)  
**Lines**: 1791–1830  
**Structure**: JavaScript constant array (NOT MongoDB)

```javascript
const STOP_DATA = [
  // ================= PRECISE GOOGLE MAPS COORDINATES (34 Stops) =================
  // Updated with exact coordinates rounded to 6 decimal places for perfect Google Maps alignment
  
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
```

### **Schema Definition: TripHistory (Bus Coordinates)**
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js#L18)

```javascript
{
  coordinates: { type: [Number], default: undefined }  // [longitude, latitude] format
}
```

### **Stop Coordinate Summary**
| Property | Location | Format | Coverage |
|----------|----------|--------|----------|
| **Stop Coordinates** | Frontend STOP_DATA array (JavaScript) | `{ stop_id, latitude, longitude, ...}` | 34 stops (VLR_001 to VLR_034) |
| **Bus GPS Coordinates** | MongoDB TripHistory.coordinates | `[longitude, latitude]` (GeoJSON) | Real-time telemetry |
| **Bus Coordinates (ActiveFleet)** | [backend/models/ActiveFleet.js](backend/models/ActiveFleet.js#L13) | `{ location: { type: "Point", coordinates: [lon, lat] } }` | Live fleet |

---

## 2️⃣ SEGMENT DISTANCE STORAGE STATUS

### **FINDING: Segment Distance is NOT Stored**

**TripHistory Schema** (full content):
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js)

```javascript
const tripHistorySchema = new mongoose.Schema(
  {
    bus_id: { type: String, index: true },
    route_id: { type: String, default: null },
    timestamp: { type: Date, default: Date.now, index: true },
    day_of_week: { type: String },
    hour_of_day: { type: Number },
    segment: { type: String, default: null },
    speed: { type: Number, default: null },
    traffic_level: { type: String, default: "unknown" },
    coordinates: { type: [Number], default: undefined }
  },
  { collection: "TripHistory" }
);
```

**Fields Stored**: bus_id, route_id, timestamp, day_of_week, hour_of_day, segment, speed, traffic_level, coordinates

**✅ Fields Available for Distance Calculation**: segment (stop pair codes), coordinates (GPS point)  
**❌ Field NOT Present**: `distance` (segment length in meters)

### **Mentioned but Not Implemented**
**File**: [CURRENT_STATE_SUMMARY.md](CURRENT_STATE_SUMMARY.md#L91) (Documentation only)

```javascript
{
  segment: String,             // e.g., "VLR_001->VLR_002"
  speed: Number,               // Average speed in km/h
  timestamp: Date,             // When recorded
  bus_id: String,              // Which bus generated this
  distance: Number             // Segment length in meters ← NOT IN ACTUAL SCHEMA
}
```

---

## 3️⃣ CONFIRMATION: STOPS HAVE LAT/LON, HAVERSINE CAN COMPUTE DISTANCE

### **All Stop Codes Are Defined**

| Stop Range | Defined | Total |
|------------|---------|-------|
| VLR_001 to VLR_034 | ✅ YES | 34 stops |

### **Data Consistency Issue**

**Stops Defined in STOP_DATA**: VLR_001 to VLR_034 (34 stops)

**Stops Used in Database Segments**: VLR_001, VLR_002, VLR_008, VLR_011, VLR_012, VLR_013, VLR_016, VLR_018, VLR_025, VLR_026, VLR_028, VLR_030, VLR_038, VLR_047, VLR_052, VLR_054, VLR_081, VLR_082

**⚠️ Missing Coordinates (NOT in STOP_DATA)**:
- `VLR_038`
- `VLR_047`
- `VLR_052`
- `VLR_054`
- `VLR_081`
- `VLR_082`

### **Haversine Distance Calculation Feasibility**

✅ **For 12 segments using defined stops** (VLR_001–VLR_034):
   - Can compute Haversine distance once per segment pair
   - Store in computation cache

⚠️ **For 5 segments using undefined stops** (VLR_038, VLR_047, etc.):
   - Requires adding stop coordinates to STOP_DATA before Haversine computation
   - Alternative: estimate distance from existing speed data

---

## 4️⃣ DISTINCT SEGMENTS IN TRIPHISTORY

### **MongoDB Query Result**
```
db.TripHistory.distinct("segment")
```

**Result**:
```
[
  "VLR_002->VLR_018",
  "VLR_011->VLR_013",
  "VLR_012->VLR_030",
  "VLR_013->VLR_016",
  "VLR_018->VLR_047",     ← VLR_047 not in STOP_DATA
  "VLR_025->VLR_026",
  "VLR_038->VLR_028",     ← VLR_038 not in STOP_DATA
  "VLR_052->VLR_011",     ← VLR_052 not in STOP_DATA
  "VLR_054->VLR_001",     ← VLR_054 not in STOP_DATA
  "VLR_081->VLR_008",     ← VLR_081 not in STOP_DATA
  "VLR_081->VLR_082"      ← VLR_081, VLR_082 not in STOP_DATA
]
```

**Total Unique Segments**: 11

---

## 5️⃣ TRIPHISTORY RECORD COUNT

### **MongoDB Query Result**
```
db.TripHistory.countDocuments()
```

**Result**: **13 records**

### **Sample Document Structure**

```json
{
  "_id": "699174e38d6c6f65f8634a11",
  "bus_id": "BUS-103",
  "route_id": null,
  "timestamp": "2026-02-15T07:25:23.455Z",
  "day_of_week": "Sunday",
  "hour_of_day": 12,
  "segment": "VLR_012->VLR_030",
  "speed": 94.1,
  "traffic_level": "light",
  "coordinates": [79.161989, 12.972081],
  "__v": 0
}
```

### **Data Inventory**

| Attribute | Count | Notes |
|-----------|-------|-------|
| Total Records | 13 | Limited dataset for testing |
| Unique Buses | ? | Requires aggregation query |
| Unique Segments | 11 | Listed above |
| Date Range | Feb 15 - Feb 15, 2026 | Single day |
| Records with coordinates | 13 | 100% coverage |
| Records with segment | 11 | All 13 have segment (no nulls) |

---

## 📊 SEGMENT DISTANCE CALCULATION PLAN

### **Haversine Implementation Option**

**Implementable Segments** (coordinates available):
- VLR_002→VLR_018
- VLR_011→VLR_013
- VLR_012→VLR_030
- VLR_013→VLR_016
- VLR_025→VLR_026
- VLR_038→VLR_028 ⚠️ (VLR_038 undefined)
- VLR_052→VLR_011 ⚠️ (VLR_052 undefined)
- VLR_054→VLR_001 ⚠️ (VLR_054 undefined)
- VLR_081→VLR_008 ⚠️ (VLR_081 undefined)
- VLR_081→VLR_082 ⚠️ (VLR_081, VLR_082 undefined)

**Haversine Formula** (from [backend/index.js](backend/index.js#L165)):
```javascript
function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371e3; // Earth radius in meters
  const φ1 = lat1 * Math.PI / 180;
  const φ2 = lat2 * Math.PI / 180;
  const Δφ = (lat2 - lat1) * Math.PI / 180;
  const Δλ = (lon2 - lon1) * Math.PI / 180;

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) *
    Math.sin(Δλ / 2) * Math.sin(Δλ / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in meters
}
```

---

## 🎯 SUMMARY TABLE

| Finding | Status | Details
```


## License: unknown
https://github.com/senthanal/Spatial-Interpolation/blob/7cd0db066260c8c1b351d93cb5129d1f1cb298e3/Calculate.js

```
---

## 🔬 SEGMENT DISTANCE DEFINITION FORENSIC AUDIT

**Status**: Investigation Complete  
**Date**: February 26, 2026  
**Mode**: IEEE Research Mode (Read-only)

---

## 1️⃣ STOP COORDINATES STORAGE LOCATION

### **Primary Storage: Frontend STOP_DATA Array**
**File**: [frontend/index.html](frontend/index.html#L1791)  
**Lines**: 1791–1830  
**Structure**: JavaScript constant array (NOT MongoDB)

```javascript
const STOP_DATA = [
  // ================= PRECISE GOOGLE MAPS COORDINATES (34 Stops) =================
  // Updated with exact coordinates rounded to 6 decimal places for perfect Google Maps alignment
  
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
```

### **Schema Definition: TripHistory (Bus Coordinates)**
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js#L18)

```javascript
{
  coordinates: { type: [Number], default: undefined }  // [longitude, latitude] format
}
```

### **Stop Coordinate Summary**
| Property | Location | Format | Coverage |
|----------|----------|--------|----------|
| **Stop Coordinates** | Frontend STOP_DATA array (JavaScript) | `{ stop_id, latitude, longitude, ...}` | 34 stops (VLR_001 to VLR_034) |
| **Bus GPS Coordinates** | MongoDB TripHistory.coordinates | `[longitude, latitude]` (GeoJSON) | Real-time telemetry |
| **Bus Coordinates (ActiveFleet)** | [backend/models/ActiveFleet.js](backend/models/ActiveFleet.js#L13) | `{ location: { type: "Point", coordinates: [lon, lat] } }` | Live fleet |

---

## 2️⃣ SEGMENT DISTANCE STORAGE STATUS

### **FINDING: Segment Distance is NOT Stored**

**TripHistory Schema** (full content):
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js)

```javascript
const tripHistorySchema = new mongoose.Schema(
  {
    bus_id: { type: String, index: true },
    route_id: { type: String, default: null },
    timestamp: { type: Date, default: Date.now, index: true },
    day_of_week: { type: String },
    hour_of_day: { type: Number },
    segment: { type: String, default: null },
    speed: { type: Number, default: null },
    traffic_level: { type: String, default: "unknown" },
    coordinates: { type: [Number], default: undefined }
  },
  { collection: "TripHistory" }
);
```

**Fields Stored**: bus_id, route_id, timestamp, day_of_week, hour_of_day, segment, speed, traffic_level, coordinates

**✅ Fields Available for Distance Calculation**: segment (stop pair codes), coordinates (GPS point)  
**❌ Field NOT Present**: `distance` (segment length in meters)

### **Mentioned but Not Implemented**
**File**: [CURRENT_STATE_SUMMARY.md](CURRENT_STATE_SUMMARY.md#L91) (Documentation only)

```javascript
{
  segment: String,             // e.g., "VLR_001->VLR_002"
  speed: Number,               // Average speed in km/h
  timestamp: Date,             // When recorded
  bus_id: String,              // Which bus generated this
  distance: Number             // Segment length in meters ← NOT IN ACTUAL SCHEMA
}
```

---

## 3️⃣ CONFIRMATION: STOPS HAVE LAT/LON, HAVERSINE CAN COMPUTE DISTANCE

### **All Stop Codes Are Defined**

| Stop Range | Defined | Total |
|------------|---------|-------|
| VLR_001 to VLR_034 | ✅ YES | 34 stops |

### **Data Consistency Issue**

**Stops Defined in STOP_DATA**: VLR_001 to VLR_034 (34 stops)

**Stops Used in Database Segments**: VLR_001, VLR_002, VLR_008, VLR_011, VLR_012, VLR_013, VLR_016, VLR_018, VLR_025, VLR_026, VLR_028, VLR_030, VLR_038, VLR_047, VLR_052, VLR_054, VLR_081, VLR_082

**⚠️ Missing Coordinates (NOT in STOP_DATA)**:
- `VLR_038`
- `VLR_047`
- `VLR_052`
- `VLR_054`
- `VLR_081`
- `VLR_082`

### **Haversine Distance Calculation Feasibility**

✅ **For 12 segments using defined stops** (VLR_001–VLR_034):
   - Can compute Haversine distance once per segment pair
   - Store in computation cache

⚠️ **For 5 segments using undefined stops** (VLR_038, VLR_047, etc.):
   - Requires adding stop coordinates to STOP_DATA before Haversine computation
   - Alternative: estimate distance from existing speed data

---

## 4️⃣ DISTINCT SEGMENTS IN TRIPHISTORY

### **MongoDB Query Result**
```
db.TripHistory.distinct("segment")
```

**Result**:
```
[
  "VLR_002->VLR_018",
  "VLR_011->VLR_013",
  "VLR_012->VLR_030",
  "VLR_013->VLR_016",
  "VLR_018->VLR_047",     ← VLR_047 not in STOP_DATA
  "VLR_025->VLR_026",
  "VLR_038->VLR_028",     ← VLR_038 not in STOP_DATA
  "VLR_052->VLR_011",     ← VLR_052 not in STOP_DATA
  "VLR_054->VLR_001",     ← VLR_054 not in STOP_DATA
  "VLR_081->VLR_008",     ← VLR_081 not in STOP_DATA
  "VLR_081->VLR_082"      ← VLR_081, VLR_082 not in STOP_DATA
]
```

**Total Unique Segments**: 11

---

## 5️⃣ TRIPHISTORY RECORD COUNT

### **MongoDB Query Result**
```
db.TripHistory.countDocuments()
```

**Result**: **13 records**

### **Sample Document Structure**

```json
{
  "_id": "699174e38d6c6f65f8634a11",
  "bus_id": "BUS-103",
  "route_id": null,
  "timestamp": "2026-02-15T07:25:23.455Z",
  "day_of_week": "Sunday",
  "hour_of_day": 12,
  "segment": "VLR_012->VLR_030",
  "speed": 94.1,
  "traffic_level": "light",
  "coordinates": [79.161989, 12.972081],
  "__v": 0
}
```

### **Data Inventory**

| Attribute | Count | Notes |
|-----------|-------|-------|
| Total Records | 13 | Limited dataset for testing |
| Unique Buses | ? | Requires aggregation query |
| Unique Segments | 11 | Listed above |
| Date Range | Feb 15 - Feb 15, 2026 | Single day |
| Records with coordinates | 13 | 100% coverage |
| Records with segment | 11 | All 13 have segment (no nulls) |

---

## 📊 SEGMENT DISTANCE CALCULATION PLAN

### **Haversine Implementation Option**

**Implementable Segments** (coordinates available):
- VLR_002→VLR_018
- VLR_011→VLR_013
- VLR_012→VLR_030
- VLR_013→VLR_016
- VLR_025→VLR_026
- VLR_038→VLR_028 ⚠️ (VLR_038 undefined)
- VLR_052→VLR_011 ⚠️ (VLR_052 undefined)
- VLR_054→VLR_001 ⚠️ (VLR_054 undefined)
- VLR_081→VLR_008 ⚠️ (VLR_081 undefined)
- VLR_081→VLR_082 ⚠️ (VLR_081, VLR_082 undefined)

**Haversine Formula** (from [backend/index.js](backend/index.js#L165)):
```javascript
function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371e3; // Earth radius in meters
  const φ1 = lat1 * Math.PI / 180;
  const φ2 = lat2 * Math.PI / 180;
  const Δφ = (lat2 - lat1) * Math.PI / 180;
  const Δλ = (lon2 - lon1) * Math.PI / 180;

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) *
    Math.sin(Δλ / 2) * Math.sin(Δλ / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in meters
}
```

---

## 🎯 SUMMARY TABLE

| Finding | Status | Details
```


## License: unknown
https://github.com/barskykd/barskykd.github.io/blob/8cd678f4a54c9e80fe64e1edf7da7f1fbabe2317/streetcalc/main.js

```
---

## 🔬 SEGMENT DISTANCE DEFINITION FORENSIC AUDIT

**Status**: Investigation Complete  
**Date**: February 26, 2026  
**Mode**: IEEE Research Mode (Read-only)

---

## 1️⃣ STOP COORDINATES STORAGE LOCATION

### **Primary Storage: Frontend STOP_DATA Array**
**File**: [frontend/index.html](frontend/index.html#L1791)  
**Lines**: 1791–1830  
**Structure**: JavaScript constant array (NOT MongoDB)

```javascript
const STOP_DATA = [
  // ================= PRECISE GOOGLE MAPS COORDINATES (34 Stops) =================
  // Updated with exact coordinates rounded to 6 decimal places for perfect Google Maps alignment
  
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
```

### **Schema Definition: TripHistory (Bus Coordinates)**
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js#L18)

```javascript
{
  coordinates: { type: [Number], default: undefined }  // [longitude, latitude] format
}
```

### **Stop Coordinate Summary**
| Property | Location | Format | Coverage |
|----------|----------|--------|----------|
| **Stop Coordinates** | Frontend STOP_DATA array (JavaScript) | `{ stop_id, latitude, longitude, ...}` | 34 stops (VLR_001 to VLR_034) |
| **Bus GPS Coordinates** | MongoDB TripHistory.coordinates | `[longitude, latitude]` (GeoJSON) | Real-time telemetry |
| **Bus Coordinates (ActiveFleet)** | [backend/models/ActiveFleet.js](backend/models/ActiveFleet.js#L13) | `{ location: { type: "Point", coordinates: [lon, lat] } }` | Live fleet |

---

## 2️⃣ SEGMENT DISTANCE STORAGE STATUS

### **FINDING: Segment Distance is NOT Stored**

**TripHistory Schema** (full content):
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js)

```javascript
const tripHistorySchema = new mongoose.Schema(
  {
    bus_id: { type: String, index: true },
    route_id: { type: String, default: null },
    timestamp: { type: Date, default: Date.now, index: true },
    day_of_week: { type: String },
    hour_of_day: { type: Number },
    segment: { type: String, default: null },
    speed: { type: Number, default: null },
    traffic_level: { type: String, default: "unknown" },
    coordinates: { type: [Number], default: undefined }
  },
  { collection: "TripHistory" }
);
```

**Fields Stored**: bus_id, route_id, timestamp, day_of_week, hour_of_day, segment, speed, traffic_level, coordinates

**✅ Fields Available for Distance Calculation**: segment (stop pair codes), coordinates (GPS point)  
**❌ Field NOT Present**: `distance` (segment length in meters)

### **Mentioned but Not Implemented**
**File**: [CURRENT_STATE_SUMMARY.md](CURRENT_STATE_SUMMARY.md#L91) (Documentation only)

```javascript
{
  segment: String,             // e.g., "VLR_001->VLR_002"
  speed: Number,               // Average speed in km/h
  timestamp: Date,             // When recorded
  bus_id: String,              // Which bus generated this
  distance: Number             // Segment length in meters ← NOT IN ACTUAL SCHEMA
}
```

---

## 3️⃣ CONFIRMATION: STOPS HAVE LAT/LON, HAVERSINE CAN COMPUTE DISTANCE

### **All Stop Codes Are Defined**

| Stop Range | Defined | Total |
|------------|---------|-------|
| VLR_001 to VLR_034 | ✅ YES | 34 stops |

### **Data Consistency Issue**

**Stops Defined in STOP_DATA**: VLR_001 to VLR_034 (34 stops)

**Stops Used in Database Segments**: VLR_001, VLR_002, VLR_008, VLR_011, VLR_012, VLR_013, VLR_016, VLR_018, VLR_025, VLR_026, VLR_028, VLR_030, VLR_038, VLR_047, VLR_052, VLR_054, VLR_081, VLR_082

**⚠️ Missing Coordinates (NOT in STOP_DATA)**:
- `VLR_038`
- `VLR_047`
- `VLR_052`
- `VLR_054`
- `VLR_081`
- `VLR_082`

### **Haversine Distance Calculation Feasibility**

✅ **For 12 segments using defined stops** (VLR_001–VLR_034):
   - Can compute Haversine distance once per segment pair
   - Store in computation cache

⚠️ **For 5 segments using undefined stops** (VLR_038, VLR_047, etc.):
   - Requires adding stop coordinates to STOP_DATA before Haversine computation
   - Alternative: estimate distance from existing speed data

---

## 4️⃣ DISTINCT SEGMENTS IN TRIPHISTORY

### **MongoDB Query Result**
```
db.TripHistory.distinct("segment")
```

**Result**:
```
[
  "VLR_002->VLR_018",
  "VLR_011->VLR_013",
  "VLR_012->VLR_030",
  "VLR_013->VLR_016",
  "VLR_018->VLR_047",     ← VLR_047 not in STOP_DATA
  "VLR_025->VLR_026",
  "VLR_038->VLR_028",     ← VLR_038 not in STOP_DATA
  "VLR_052->VLR_011",     ← VLR_052 not in STOP_DATA
  "VLR_054->VLR_001",     ← VLR_054 not in STOP_DATA
  "VLR_081->VLR_008",     ← VLR_081 not in STOP_DATA
  "VLR_081->VLR_082"      ← VLR_081, VLR_082 not in STOP_DATA
]
```

**Total Unique Segments**: 11

---

## 5️⃣ TRIPHISTORY RECORD COUNT

### **MongoDB Query Result**
```
db.TripHistory.countDocuments()
```

**Result**: **13 records**

### **Sample Document Structure**

```json
{
  "_id": "699174e38d6c6f65f8634a11",
  "bus_id": "BUS-103",
  "route_id": null,
  "timestamp": "2026-02-15T07:25:23.455Z",
  "day_of_week": "Sunday",
  "hour_of_day": 12,
  "segment": "VLR_012->VLR_030",
  "speed": 94.1,
  "traffic_level": "light",
  "coordinates": [79.161989, 12.972081],
  "__v": 0
}
```

### **Data Inventory**

| Attribute | Count | Notes |
|-----------|-------|-------|
| Total Records | 13 | Limited dataset for testing |
| Unique Buses | ? | Requires aggregation query |
| Unique Segments | 11 | Listed above |
| Date Range | Feb 15 - Feb 15, 2026 | Single day |
| Records with coordinates | 13 | 100% coverage |
| Records with segment | 11 | All 13 have segment (no nulls) |

---

## 📊 SEGMENT DISTANCE CALCULATION PLAN

### **Haversine Implementation Option**

**Implementable Segments** (coordinates available):
- VLR_002→VLR_018
- VLR_011→VLR_013
- VLR_012→VLR_030
- VLR_013→VLR_016
- VLR_025→VLR_026
- VLR_038→VLR_028 ⚠️ (VLR_038 undefined)
- VLR_052→VLR_011 ⚠️ (VLR_052 undefined)
- VLR_054→VLR_001 ⚠️ (VLR_054 undefined)
- VLR_081→VLR_008 ⚠️ (VLR_081 undefined)
- VLR_081→VLR_082 ⚠️ (VLR_081, VLR_082 undefined)

**Haversine Formula** (from [backend/index.js](backend/index.js#L165)):
```javascript
function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371e3; // Earth radius in meters
  const φ1 = lat1 * Math.PI / 180;
  const φ2 = lat2 * Math.PI / 180;
  const Δφ = (lat2 - lat1) * Math.PI / 180;
  const Δλ = (lon2 - lon1) * Math.PI / 180;

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) *
    Math.sin(Δλ / 2) * Math.sin(Δλ / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in meters
}
```

---

## 🎯 SUMMARY TABLE
```


## License: unknown
https://github.com/linuxmint/cinnamon-spices-applets/blob/90811ceacbbb4d29458c793ea65eb5af963e1b6b/weather%40mockturtl/files/weather%40mockturtl/3.8/weather-applet.js

```
---

## 🔬 SEGMENT DISTANCE DEFINITION FORENSIC AUDIT

**Status**: Investigation Complete  
**Date**: February 26, 2026  
**Mode**: IEEE Research Mode (Read-only)

---

## 1️⃣ STOP COORDINATES STORAGE LOCATION

### **Primary Storage: Frontend STOP_DATA Array**
**File**: [frontend/index.html](frontend/index.html#L1791)  
**Lines**: 1791–1830  
**Structure**: JavaScript constant array (NOT MongoDB)

```javascript
const STOP_DATA = [
  // ================= PRECISE GOOGLE MAPS COORDINATES (34 Stops) =================
  // Updated with exact coordinates rounded to 6 decimal places for perfect Google Maps alignment
  
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
```

### **Schema Definition: TripHistory (Bus Coordinates)**
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js#L18)

```javascript
{
  coordinates: { type: [Number], default: undefined }  // [longitude, latitude] format
}
```

### **Stop Coordinate Summary**
| Property | Location | Format | Coverage |
|----------|----------|--------|----------|
| **Stop Coordinates** | Frontend STOP_DATA array (JavaScript) | `{ stop_id, latitude, longitude, ...}` | 34 stops (VLR_001 to VLR_034) |
| **Bus GPS Coordinates** | MongoDB TripHistory.coordinates | `[longitude, latitude]` (GeoJSON) | Real-time telemetry |
| **Bus Coordinates (ActiveFleet)** | [backend/models/ActiveFleet.js](backend/models/ActiveFleet.js#L13) | `{ location: { type: "Point", coordinates: [lon, lat] } }` | Live fleet |

---

## 2️⃣ SEGMENT DISTANCE STORAGE STATUS

### **FINDING: Segment Distance is NOT Stored**

**TripHistory Schema** (full content):
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js)

```javascript
const tripHistorySchema = new mongoose.Schema(
  {
    bus_id: { type: String, index: true },
    route_id: { type: String, default: null },
    timestamp: { type: Date, default: Date.now, index: true },
    day_of_week: { type: String },
    hour_of_day: { type: Number },
    segment: { type: String, default: null },
    speed: { type: Number, default: null },
    traffic_level: { type: String, default: "unknown" },
    coordinates: { type: [Number], default: undefined }
  },
  { collection: "TripHistory" }
);
```

**Fields Stored**: bus_id, route_id, timestamp, day_of_week, hour_of_day, segment, speed, traffic_level, coordinates

**✅ Fields Available for Distance Calculation**: segment (stop pair codes), coordinates (GPS point)  
**❌ Field NOT Present**: `distance` (segment length in meters)

### **Mentioned but Not Implemented**
**File**: [CURRENT_STATE_SUMMARY.md](CURRENT_STATE_SUMMARY.md#L91) (Documentation only)

```javascript
{
  segment: String,             // e.g., "VLR_001->VLR_002"
  speed: Number,               // Average speed in km/h
  timestamp: Date,             // When recorded
  bus_id: String,              // Which bus generated this
  distance: Number             // Segment length in meters ← NOT IN ACTUAL SCHEMA
}
```

---

## 3️⃣ CONFIRMATION: STOPS HAVE LAT/LON, HAVERSINE CAN COMPUTE DISTANCE

### **All Stop Codes Are Defined**

| Stop Range | Defined | Total |
|------------|---------|-------|
| VLR_001 to VLR_034 | ✅ YES | 34 stops |

### **Data Consistency Issue**

**Stops Defined in STOP_DATA**: VLR_001 to VLR_034 (34 stops)

**Stops Used in Database Segments**: VLR_001, VLR_002, VLR_008, VLR_011, VLR_012, VLR_013, VLR_016, VLR_018, VLR_025, VLR_026, VLR_028, VLR_030, VLR_038, VLR_047, VLR_052, VLR_054, VLR_081, VLR_082

**⚠️ Missing Coordinates (NOT in STOP_DATA)**:
- `VLR_038`
- `VLR_047`
- `VLR_052`
- `VLR_054`
- `VLR_081`
- `VLR_082`

### **Haversine Distance Calculation Feasibility**

✅ **For 12 segments using defined stops** (VLR_001–VLR_034):
   - Can compute Haversine distance once per segment pair
   - Store in computation cache

⚠️ **For 5 segments using undefined stops** (VLR_038, VLR_047, etc.):
   - Requires adding stop coordinates to STOP_DATA before Haversine computation
   - Alternative: estimate distance from existing speed data

---

## 4️⃣ DISTINCT SEGMENTS IN TRIPHISTORY

### **MongoDB Query Result**
```
db.TripHistory.distinct("segment")
```

**Result**:
```
[
  "VLR_002->VLR_018",
  "VLR_011->VLR_013",
  "VLR_012->VLR_030",
  "VLR_013->VLR_016",
  "VLR_018->VLR_047",     ← VLR_047 not in STOP_DATA
  "VLR_025->VLR_026",
  "VLR_038->VLR_028",     ← VLR_038 not in STOP_DATA
  "VLR_052->VLR_011",     ← VLR_052 not in STOP_DATA
  "VLR_054->VLR_001",     ← VLR_054 not in STOP_DATA
  "VLR_081->VLR_008",     ← VLR_081 not in STOP_DATA
  "VLR_081->VLR_082"      ← VLR_081, VLR_082 not in STOP_DATA
]
```

**Total Unique Segments**: 11

---

## 5️⃣ TRIPHISTORY RECORD COUNT

### **MongoDB Query Result**
```
db.TripHistory.countDocuments()
```

**Result**: **13 records**

### **Sample Document Structure**

```json
{
  "_id": "699174e38d6c6f65f8634a11",
  "bus_id": "BUS-103",
  "route_id": null,
  "timestamp": "2026-02-15T07:25:23.455Z",
  "day_of_week": "Sunday",
  "hour_of_day": 12,
  "segment": "VLR_012->VLR_030",
  "speed": 94.1,
  "traffic_level": "light",
  "coordinates": [79.161989, 12.972081],
  "__v": 0
}
```

### **Data Inventory**

| Attribute | Count | Notes |
|-----------|-------|-------|
| Total Records | 13 | Limited dataset for testing |
| Unique Buses | ? | Requires aggregation query |
| Unique Segments | 11 | Listed above |
| Date Range | Feb 15 - Feb 15, 2026 | Single day |
| Records with coordinates | 13 | 100% coverage |
| Records with segment | 11 | All 13 have segment (no nulls) |

---

## 📊 SEGMENT DISTANCE CALCULATION PLAN

### **Haversine Implementation Option**

**Implementable Segments** (coordinates available):
- VLR_002→VLR_018
- VLR_011→VLR_013
- VLR_012→VLR_030
- VLR_013→VLR_016
- VLR_025→VLR_026
- VLR_038→VLR_028 ⚠️ (VLR_038 undefined)
- VLR_052→VLR_011 ⚠️ (VLR_052 undefined)
- VLR_054→VLR_001 ⚠️ (VLR_054 undefined)
- VLR_081→VLR_008 ⚠️ (VLR_081 undefined)
- VLR_081→VLR_082 ⚠️ (VLR_081, VLR_082 undefined)

**Haversine Formula** (from [backend/index.js](backend/index.js#L165)):
```javascript
function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371e3; // Earth radius in meters
  const φ1 = lat1 * Math.PI / 180;
  const φ2 = lat2 * Math.PI / 180;
  const Δφ = (lat2 - lat1) * Math.PI / 180;
  const Δλ = (lon2 - lon1) * Math.PI / 180;

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) *
    Math.sin(Δλ / 2) * Math.sin(Δλ / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in meters
}
```

---

## 🎯 SUMMARY TABLE
```


## License: unknown
https://github.com/Scorpion018/Climate-hazards-Data-Retrieval-Engine/blob/f265d70c47fbfb4f80b9dd1c17086dd9e411b297/views/Main.ejs

```
---

## 🔬 SEGMENT DISTANCE DEFINITION FORENSIC AUDIT

**Status**: Investigation Complete  
**Date**: February 26, 2026  
**Mode**: IEEE Research Mode (Read-only)

---

## 1️⃣ STOP COORDINATES STORAGE LOCATION

### **Primary Storage: Frontend STOP_DATA Array**
**File**: [frontend/index.html](frontend/index.html#L1791)  
**Lines**: 1791–1830  
**Structure**: JavaScript constant array (NOT MongoDB)

```javascript
const STOP_DATA = [
  // ================= PRECISE GOOGLE MAPS COORDINATES (34 Stops) =================
  // Updated with exact coordinates rounded to 6 decimal places for perfect Google Maps alignment
  
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
```

### **Schema Definition: TripHistory (Bus Coordinates)**
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js#L18)

```javascript
{
  coordinates: { type: [Number], default: undefined }  // [longitude, latitude] format
}
```

### **Stop Coordinate Summary**
| Property | Location | Format | Coverage |
|----------|----------|--------|----------|
| **Stop Coordinates** | Frontend STOP_DATA array (JavaScript) | `{ stop_id, latitude, longitude, ...}` | 34 stops (VLR_001 to VLR_034) |
| **Bus GPS Coordinates** | MongoDB TripHistory.coordinates | `[longitude, latitude]` (GeoJSON) | Real-time telemetry |
| **Bus Coordinates (ActiveFleet)** | [backend/models/ActiveFleet.js](backend/models/ActiveFleet.js#L13) | `{ location: { type: "Point", coordinates: [lon, lat] } }` | Live fleet |

---

## 2️⃣ SEGMENT DISTANCE STORAGE STATUS

### **FINDING: Segment Distance is NOT Stored**

**TripHistory Schema** (full content):
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js)

```javascript
const tripHistorySchema = new mongoose.Schema(
  {
    bus_id: { type: String, index: true },
    route_id: { type: String, default: null },
    timestamp: { type: Date, default: Date.now, index: true },
    day_of_week: { type: String },
    hour_of_day: { type: Number },
    segment: { type: String, default: null },
    speed: { type: Number, default: null },
    traffic_level: { type: String, default: "unknown" },
    coordinates: { type: [Number], default: undefined }
  },
  { collection: "TripHistory" }
);
```

**Fields Stored**: bus_id, route_id, timestamp, day_of_week, hour_of_day, segment, speed, traffic_level, coordinates

**✅ Fields Available for Distance Calculation**: segment (stop pair codes), coordinates (GPS point)  
**❌ Field NOT Present**: `distance` (segment length in meters)

### **Mentioned but Not Implemented**
**File**: [CURRENT_STATE_SUMMARY.md](CURRENT_STATE_SUMMARY.md#L91) (Documentation only)

```javascript
{
  segment: String,             // e.g., "VLR_001->VLR_002"
  speed: Number,               // Average speed in km/h
  timestamp: Date,             // When recorded
  bus_id: String,              // Which bus generated this
  distance: Number             // Segment length in meters ← NOT IN ACTUAL SCHEMA
}
```

---

## 3️⃣ CONFIRMATION: STOPS HAVE LAT/LON, HAVERSINE CAN COMPUTE DISTANCE

### **All Stop Codes Are Defined**

| Stop Range | Defined | Total |
|------------|---------|-------|
| VLR_001 to VLR_034 | ✅ YES | 34 stops |

### **Data Consistency Issue**

**Stops Defined in STOP_DATA**: VLR_001 to VLR_034 (34 stops)

**Stops Used in Database Segments**: VLR_001, VLR_002, VLR_008, VLR_011, VLR_012, VLR_013, VLR_016, VLR_018, VLR_025, VLR_026, VLR_028, VLR_030, VLR_038, VLR_047, VLR_052, VLR_054, VLR_081, VLR_082

**⚠️ Missing Coordinates (NOT in STOP_DATA)**:
- `VLR_038`
- `VLR_047`
- `VLR_052`
- `VLR_054`
- `VLR_081`
- `VLR_082`

### **Haversine Distance Calculation Feasibility**

✅ **For 12 segments using defined stops** (VLR_001–VLR_034):
   - Can compute Haversine distance once per segment pair
   - Store in computation cache

⚠️ **For 5 segments using undefined stops** (VLR_038, VLR_047, etc.):
   - Requires adding stop coordinates to STOP_DATA before Haversine computation
   - Alternative: estimate distance from existing speed data

---

## 4️⃣ DISTINCT SEGMENTS IN TRIPHISTORY

### **MongoDB Query Result**
```
db.TripHistory.distinct("segment")
```

**Result**:
```
[
  "VLR_002->VLR_018",
  "VLR_011->VLR_013",
  "VLR_012->VLR_030",
  "VLR_013->VLR_016",
  "VLR_018->VLR_047",     ← VLR_047 not in STOP_DATA
  "VLR_025->VLR_026",
  "VLR_038->VLR_028",     ← VLR_038 not in STOP_DATA
  "VLR_052->VLR_011",     ← VLR_052 not in STOP_DATA
  "VLR_054->VLR_001",     ← VLR_054 not in STOP_DATA
  "VLR_081->VLR_008",     ← VLR_081 not in STOP_DATA
  "VLR_081->VLR_082"      ← VLR_081, VLR_082 not in STOP_DATA
]
```

**Total Unique Segments**: 11

---

## 5️⃣ TRIPHISTORY RECORD COUNT

### **MongoDB Query Result**
```
db.TripHistory.countDocuments()
```

**Result**: **13 records**

### **Sample Document Structure**

```json
{
  "_id": "699174e38d6c6f65f8634a11",
  "bus_id": "BUS-103",
  "route_id": null,
  "timestamp": "2026-02-15T07:25:23.455Z",
  "day_of_week": "Sunday",
  "hour_of_day": 12,
  "segment": "VLR_012->VLR_030",
  "speed": 94.1,
  "traffic_level": "light",
  "coordinates": [79.161989, 12.972081],
  "__v": 0
}
```

### **Data Inventory**

| Attribute | Count | Notes |
|-----------|-------|-------|
| Total Records | 13 | Limited dataset for testing |
| Unique Buses | ? | Requires aggregation query |
| Unique Segments | 11 | Listed above |
| Date Range | Feb 15 - Feb 15, 2026 | Single day |
| Records with coordinates | 13 | 100% coverage |
| Records with segment | 11 | All 13 have segment (no nulls) |

---

## 📊 SEGMENT DISTANCE CALCULATION PLAN

### **Haversine Implementation Option**

**Implementable Segments** (coordinates available):
- VLR_002→VLR_018
- VLR_011→VLR_013
- VLR_012→VLR_030
- VLR_013→VLR_016
- VLR_025→VLR_026
- VLR_038→VLR_028 ⚠️ (VLR_038 undefined)
- VLR_052→VLR_011 ⚠️ (VLR_052 undefined)
- VLR_054→VLR_001 ⚠️ (VLR_054 undefined)
- VLR_081→VLR_008 ⚠️ (VLR_081 undefined)
- VLR_081→VLR_082 ⚠️ (VLR_081, VLR_082 undefined)

**Haversine Formula** (from [backend/index.js](backend/index.js#L165)):
```javascript
function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371e3; // Earth radius in meters
  const φ1 = lat1 * Math.PI / 180;
  const φ2 = lat2 * Math.PI / 180;
  const Δφ = (lat2 - lat1) * Math.PI / 180;
  const Δλ = (lon2 - lon1) * Math.PI / 180;

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) *
    Math.sin(Δλ / 2) * Math.sin(Δλ / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in meters
}
```

---

## 🎯 SUMMARY TABLE
```


## License: unknown
https://github.com/AbdullahTonka/sunum/blob/9e572a71799c17ff3ac148518bbea12c6c2c30e3/index1.html

```
---

## 🔬 SEGMENT DISTANCE DEFINITION FORENSIC AUDIT

**Status**: Investigation Complete  
**Date**: February 26, 2026  
**Mode**: IEEE Research Mode (Read-only)

---

## 1️⃣ STOP COORDINATES STORAGE LOCATION

### **Primary Storage: Frontend STOP_DATA Array**
**File**: [frontend/index.html](frontend/index.html#L1791)  
**Lines**: 1791–1830  
**Structure**: JavaScript constant array (NOT MongoDB)

```javascript
const STOP_DATA = [
  // ================= PRECISE GOOGLE MAPS COORDINATES (34 Stops) =================
  // Updated with exact coordinates rounded to 6 decimal places for perfect Google Maps alignment
  
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
```

### **Schema Definition: TripHistory (Bus Coordinates)**
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js#L18)

```javascript
{
  coordinates: { type: [Number], default: undefined }  // [longitude, latitude] format
}
```

### **Stop Coordinate Summary**
| Property | Location | Format | Coverage |
|----------|----------|--------|----------|
| **Stop Coordinates** | Frontend STOP_DATA array (JavaScript) | `{ stop_id, latitude, longitude, ...}` | 34 stops (VLR_001 to VLR_034) |
| **Bus GPS Coordinates** | MongoDB TripHistory.coordinates | `[longitude, latitude]` (GeoJSON) | Real-time telemetry |
| **Bus Coordinates (ActiveFleet)** | [backend/models/ActiveFleet.js](backend/models/ActiveFleet.js#L13) | `{ location: { type: "Point", coordinates: [lon, lat] } }` | Live fleet |

---

## 2️⃣ SEGMENT DISTANCE STORAGE STATUS

### **FINDING: Segment Distance is NOT Stored**

**TripHistory Schema** (full content):
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js)

```javascript
const tripHistorySchema = new mongoose.Schema(
  {
    bus_id: { type: String, index: true },
    route_id: { type: String, default: null },
    timestamp: { type: Date, default: Date.now, index: true },
    day_of_week: { type: String },
    hour_of_day: { type: Number },
    segment: { type: String, default: null },
    speed: { type: Number, default: null },
    traffic_level: { type: String, default: "unknown" },
    coordinates: { type: [Number], default: undefined }
  },
  { collection: "TripHistory" }
);
```

**Fields Stored**: bus_id, route_id, timestamp, day_of_week, hour_of_day, segment, speed, traffic_level, coordinates

**✅ Fields Available for Distance Calculation**: segment (stop pair codes), coordinates (GPS point)  
**❌ Field NOT Present**: `distance` (segment length in meters)

### **Mentioned but Not Implemented**
**File**: [CURRENT_STATE_SUMMARY.md](CURRENT_STATE_SUMMARY.md#L91) (Documentation only)

```javascript
{
  segment: String,             // e.g., "VLR_001->VLR_002"
  speed: Number,               // Average speed in km/h
  timestamp: Date,             // When recorded
  bus_id: String,              // Which bus generated this
  distance: Number             // Segment length in meters ← NOT IN ACTUAL SCHEMA
}
```

---

## 3️⃣ CONFIRMATION: STOPS HAVE LAT/LON, HAVERSINE CAN COMPUTE DISTANCE

### **All Stop Codes Are Defined**

| Stop Range | Defined | Total |
|------------|---------|-------|
| VLR_001 to VLR_034 | ✅ YES | 34 stops |

### **Data Consistency Issue**

**Stops Defined in STOP_DATA**: VLR_001 to VLR_034 (34 stops)

**Stops Used in Database Segments**: VLR_001, VLR_002, VLR_008, VLR_011, VLR_012, VLR_013, VLR_016, VLR_018, VLR_025, VLR_026, VLR_028, VLR_030, VLR_038, VLR_047, VLR_052, VLR_054, VLR_081, VLR_082

**⚠️ Missing Coordinates (NOT in STOP_DATA)**:
- `VLR_038`
- `VLR_047`
- `VLR_052`
- `VLR_054`
- `VLR_081`
- `VLR_082`

### **Haversine Distance Calculation Feasibility**

✅ **For 12 segments using defined stops** (VLR_001–VLR_034):
   - Can compute Haversine distance once per segment pair
   - Store in computation cache

⚠️ **For 5 segments using undefined stops** (VLR_038, VLR_047, etc.):
   - Requires adding stop coordinates to STOP_DATA before Haversine computation
   - Alternative: estimate distance from existing speed data

---

## 4️⃣ DISTINCT SEGMENTS IN TRIPHISTORY

### **MongoDB Query Result**
```
db.TripHistory.distinct("segment")
```

**Result**:
```
[
  "VLR_002->VLR_018",
  "VLR_011->VLR_013",
  "VLR_012->VLR_030",
  "VLR_013->VLR_016",
  "VLR_018->VLR_047",     ← VLR_047 not in STOP_DATA
  "VLR_025->VLR_026",
  "VLR_038->VLR_028",     ← VLR_038 not in STOP_DATA
  "VLR_052->VLR_011",     ← VLR_052 not in STOP_DATA
  "VLR_054->VLR_001",     ← VLR_054 not in STOP_DATA
  "VLR_081->VLR_008",     ← VLR_081 not in STOP_DATA
  "VLR_081->VLR_082"      ← VLR_081, VLR_082 not in STOP_DATA
]
```

**Total Unique Segments**: 11

---

## 5️⃣ TRIPHISTORY RECORD COUNT

### **MongoDB Query Result**
```
db.TripHistory.countDocuments()
```

**Result**: **13 records**

### **Sample Document Structure**

```json
{
  "_id": "699174e38d6c6f65f8634a11",
  "bus_id": "BUS-103",
  "route_id": null,
  "timestamp": "2026-02-15T07:25:23.455Z",
  "day_of_week": "Sunday",
  "hour_of_day": 12,
  "segment": "VLR_012->VLR_030",
  "speed": 94.1,
  "traffic_level": "light",
  "coordinates": [79.161989, 12.972081],
  "__v": 0
}
```

### **Data Inventory**

| Attribute | Count | Notes |
|-----------|-------|-------|
| Total Records | 13 | Limited dataset for testing |
| Unique Buses | ? | Requires aggregation query |
| Unique Segments | 11 | Listed above |
| Date Range | Feb 15 - Feb 15, 2026 | Single day |
| Records with coordinates | 13 | 100% coverage |
| Records with segment | 11 | All 13 have segment (no nulls) |

---

## 📊 SEGMENT DISTANCE CALCULATION PLAN

### **Haversine Implementation Option**

**Implementable Segments** (coordinates available):
- VLR_002→VLR_018
- VLR_011→VLR_013
- VLR_012→VLR_030
- VLR_013→VLR_016
- VLR_025→VLR_026
- VLR_038→VLR_028 ⚠️ (VLR_038 undefined)
- VLR_052→VLR_011 ⚠️ (VLR_052 undefined)
- VLR_054→VLR_001 ⚠️ (VLR_054 undefined)
- VLR_081→VLR_008 ⚠️ (VLR_081 undefined)
- VLR_081→VLR_082 ⚠️ (VLR_081, VLR_082 undefined)

**Haversine Formula** (from [backend/index.js](backend/index.js#L165)):
```javascript
function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371e3; // Earth radius in meters
  const φ1 = lat1 * Math.PI / 180;
  const φ2 = lat2 * Math.PI / 180;
  const Δφ = (lat2 - lat1) * Math.PI / 180;
  const Δλ = (lon2 - lon1) * Math.PI / 180;

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) *
    Math.sin(Δλ / 2) * Math.sin(Δλ / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in meters
}
```

---

## 🎯 SUMMARY TABLE
```


## License: MIT
https://github.com/chrisveness/geodesy/blob/761587cd748bd9f7c9825195eba4a9fc5891b859/latlon-spherical.js

```
---

## 🔬 SEGMENT DISTANCE DEFINITION FORENSIC AUDIT

**Status**: Investigation Complete  
**Date**: February 26, 2026  
**Mode**: IEEE Research Mode (Read-only)

---

## 1️⃣ STOP COORDINATES STORAGE LOCATION

### **Primary Storage: Frontend STOP_DATA Array**
**File**: [frontend/index.html](frontend/index.html#L1791)  
**Lines**: 1791–1830  
**Structure**: JavaScript constant array (NOT MongoDB)

```javascript
const STOP_DATA = [
  // ================= PRECISE GOOGLE MAPS COORDINATES (34 Stops) =================
  // Updated with exact coordinates rounded to 6 decimal places for perfect Google Maps alignment
  
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
```

### **Schema Definition: TripHistory (Bus Coordinates)**
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js#L18)

```javascript
{
  coordinates: { type: [Number], default: undefined }  // [longitude, latitude] format
}
```

### **Stop Coordinate Summary**
| Property | Location | Format | Coverage |
|----------|----------|--------|----------|
| **Stop Coordinates** | Frontend STOP_DATA array (JavaScript) | `{ stop_id, latitude, longitude, ...}` | 34 stops (VLR_001 to VLR_034) |
| **Bus GPS Coordinates** | MongoDB TripHistory.coordinates | `[longitude, latitude]` (GeoJSON) | Real-time telemetry |
| **Bus Coordinates (ActiveFleet)** | [backend/models/ActiveFleet.js](backend/models/ActiveFleet.js#L13) | `{ location: { type: "Point", coordinates: [lon, lat] } }` | Live fleet |

---

## 2️⃣ SEGMENT DISTANCE STORAGE STATUS

### **FINDING: Segment Distance is NOT Stored**

**TripHistory Schema** (full content):
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js)

```javascript
const tripHistorySchema = new mongoose.Schema(
  {
    bus_id: { type: String, index: true },
    route_id: { type: String, default: null },
    timestamp: { type: Date, default: Date.now, index: true },
    day_of_week: { type: String },
    hour_of_day: { type: Number },
    segment: { type: String, default: null },
    speed: { type: Number, default: null },
    traffic_level: { type: String, default: "unknown" },
    coordinates: { type: [Number], default: undefined }
  },
  { collection: "TripHistory" }
);
```

**Fields Stored**: bus_id, route_id, timestamp, day_of_week, hour_of_day, segment, speed, traffic_level, coordinates

**✅ Fields Available for Distance Calculation**: segment (stop pair codes), coordinates (GPS point)  
**❌ Field NOT Present**: `distance` (segment length in meters)

### **Mentioned but Not Implemented**
**File**: [CURRENT_STATE_SUMMARY.md](CURRENT_STATE_SUMMARY.md#L91) (Documentation only)

```javascript
{
  segment: String,             // e.g., "VLR_001->VLR_002"
  speed: Number,               // Average speed in km/h
  timestamp: Date,             // When recorded
  bus_id: String,              // Which bus generated this
  distance: Number             // Segment length in meters ← NOT IN ACTUAL SCHEMA
}
```

---

## 3️⃣ CONFIRMATION: STOPS HAVE LAT/LON, HAVERSINE CAN COMPUTE DISTANCE

### **All Stop Codes Are Defined**

| Stop Range | Defined | Total |
|------------|---------|-------|
| VLR_001 to VLR_034 | ✅ YES | 34 stops |

### **Data Consistency Issue**

**Stops Defined in STOP_DATA**: VLR_001 to VLR_034 (34 stops)

**Stops Used in Database Segments**: VLR_001, VLR_002, VLR_008, VLR_011, VLR_012, VLR_013, VLR_016, VLR_018, VLR_025, VLR_026, VLR_028, VLR_030, VLR_038, VLR_047, VLR_052, VLR_054, VLR_081, VLR_082

**⚠️ Missing Coordinates (NOT in STOP_DATA)**:
- `VLR_038`
- `VLR_047`
- `VLR_052`
- `VLR_054`
- `VLR_081`
- `VLR_082`

### **Haversine Distance Calculation Feasibility**

✅ **For 12 segments using defined stops** (VLR_001–VLR_034):
   - Can compute Haversine distance once per segment pair
   - Store in computation cache

⚠️ **For 5 segments using undefined stops** (VLR_038, VLR_047, etc.):
   - Requires adding stop coordinates to STOP_DATA before Haversine computation
   - Alternative: estimate distance from existing speed data

---

## 4️⃣ DISTINCT SEGMENTS IN TRIPHISTORY

### **MongoDB Query Result**
```
db.TripHistory.distinct("segment")
```

**Result**:
```
[
  "VLR_002->VLR_018",
  "VLR_011->VLR_013",
  "VLR_012->VLR_030",
  "VLR_013->VLR_016",
  "VLR_018->VLR_047",     ← VLR_047 not in STOP_DATA
  "VLR_025->VLR_026",
  "VLR_038->VLR_028",     ← VLR_038 not in STOP_DATA
  "VLR_052->VLR_011",     ← VLR_052 not in STOP_DATA
  "VLR_054->VLR_001",     ← VLR_054 not in STOP_DATA
  "VLR_081->VLR_008",     ← VLR_081 not in STOP_DATA
  "VLR_081->VLR_082"      ← VLR_081, VLR_082 not in STOP_DATA
]
```

**Total Unique Segments**: 11

---

## 5️⃣ TRIPHISTORY RECORD COUNT

### **MongoDB Query Result**
```
db.TripHistory.countDocuments()
```

**Result**: **13 records**

### **Sample Document Structure**

```json
{
  "_id": "699174e38d6c6f65f8634a11",
  "bus_id": "BUS-103",
  "route_id": null,
  "timestamp": "2026-02-15T07:25:23.455Z",
  "day_of_week": "Sunday",
  "hour_of_day": 12,
  "segment": "VLR_012->VLR_030",
  "speed": 94.1,
  "traffic_level": "light",
  "coordinates": [79.161989, 12.972081],
  "__v": 0
}
```

### **Data Inventory**

| Attribute | Count | Notes |
|-----------|-------|-------|
| Total Records | 13 | Limited dataset for testing |
| Unique Buses | ? | Requires aggregation query |
| Unique Segments | 11 | Listed above |
| Date Range | Feb 15 - Feb 15, 2026 | Single day |
| Records with coordinates | 13 | 100% coverage |
| Records with segment | 11 | All 13 have segment (no nulls) |

---

## 📊 SEGMENT DISTANCE CALCULATION PLAN

### **Haversine Implementation Option**

**Implementable Segments** (coordinates available):
- VLR_002→VLR_018
- VLR_011→VLR_013
- VLR_012→VLR_030
- VLR_013→VLR_016
- VLR_025→VLR_026
- VLR_038→VLR_028 ⚠️ (VLR_038 undefined)
- VLR_052→VLR_011 ⚠️ (VLR_052 undefined)
- VLR_054→VLR_001 ⚠️ (VLR_054 undefined)
- VLR_081→VLR_008 ⚠️ (VLR_081 undefined)
- VLR_081→VLR_082 ⚠️ (VLR_081, VLR_082 undefined)

**Haversine Formula** (from [backend/index.js](backend/index.js#L165)):
```javascript
function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371e3; // Earth radius in meters
  const φ1 = lat1 * Math.PI / 180;
  const φ2 = lat2 * Math.PI / 180;
  const Δφ = (lat2 - lat1) * Math.PI / 180;
  const Δλ = (lon2 - lon1) * Math.PI / 180;

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) *
    Math.sin(Δλ / 2) * Math.sin(Δλ / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in meters
}
```

---

## 🎯 SUMMARY TABLE

| Finding
```


## License: MIT
https://github.com/jclo/picodb/blob/d62365989d01149fb2b89a19832b9e9fc69ad633/lib/picodb.mjs

```
---

## 🔬 SEGMENT DISTANCE DEFINITION FORENSIC AUDIT

**Status**: Investigation Complete  
**Date**: February 26, 2026  
**Mode**: IEEE Research Mode (Read-only)

---

## 1️⃣ STOP COORDINATES STORAGE LOCATION

### **Primary Storage: Frontend STOP_DATA Array**
**File**: [frontend/index.html](frontend/index.html#L1791)  
**Lines**: 1791–1830  
**Structure**: JavaScript constant array (NOT MongoDB)

```javascript
const STOP_DATA = [
  // ================= PRECISE GOOGLE MAPS COORDINATES (34 Stops) =================
  // Updated with exact coordinates rounded to 6 decimal places for perfect Google Maps alignment
  
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
```

### **Schema Definition: TripHistory (Bus Coordinates)**
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js#L18)

```javascript
{
  coordinates: { type: [Number], default: undefined }  // [longitude, latitude] format
}
```

### **Stop Coordinate Summary**
| Property | Location | Format | Coverage |
|----------|----------|--------|----------|
| **Stop Coordinates** | Frontend STOP_DATA array (JavaScript) | `{ stop_id, latitude, longitude, ...}` | 34 stops (VLR_001 to VLR_034) |
| **Bus GPS Coordinates** | MongoDB TripHistory.coordinates | `[longitude, latitude]` (GeoJSON) | Real-time telemetry |
| **Bus Coordinates (ActiveFleet)** | [backend/models/ActiveFleet.js](backend/models/ActiveFleet.js#L13) | `{ location: { type: "Point", coordinates: [lon, lat] } }` | Live fleet |

---

## 2️⃣ SEGMENT DISTANCE STORAGE STATUS

### **FINDING: Segment Distance is NOT Stored**

**TripHistory Schema** (full content):
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js)

```javascript
const tripHistorySchema = new mongoose.Schema(
  {
    bus_id: { type: String, index: true },
    route_id: { type: String, default: null },
    timestamp: { type: Date, default: Date.now, index: true },
    day_of_week: { type: String },
    hour_of_day: { type: Number },
    segment: { type: String, default: null },
    speed: { type: Number, default: null },
    traffic_level: { type: String, default: "unknown" },
    coordinates: { type: [Number], default: undefined }
  },
  { collection: "TripHistory" }
);
```

**Fields Stored**: bus_id, route_id, timestamp, day_of_week, hour_of_day, segment, speed, traffic_level, coordinates

**✅ Fields Available for Distance Calculation**: segment (stop pair codes), coordinates (GPS point)  
**❌ Field NOT Present**: `distance` (segment length in meters)

### **Mentioned but Not Implemented**
**File**: [CURRENT_STATE_SUMMARY.md](CURRENT_STATE_SUMMARY.md#L91) (Documentation only)

```javascript
{
  segment: String,             // e.g., "VLR_001->VLR_002"
  speed: Number,               // Average speed in km/h
  timestamp: Date,             // When recorded
  bus_id: String,              // Which bus generated this
  distance: Number             // Segment length in meters ← NOT IN ACTUAL SCHEMA
}
```

---

## 3️⃣ CONFIRMATION: STOPS HAVE LAT/LON, HAVERSINE CAN COMPUTE DISTANCE

### **All Stop Codes Are Defined**

| Stop Range | Defined | Total |
|------------|---------|-------|
| VLR_001 to VLR_034 | ✅ YES | 34 stops |

### **Data Consistency Issue**

**Stops Defined in STOP_DATA**: VLR_001 to VLR_034 (34 stops)

**Stops Used in Database Segments**: VLR_001, VLR_002, VLR_008, VLR_011, VLR_012, VLR_013, VLR_016, VLR_018, VLR_025, VLR_026, VLR_028, VLR_030, VLR_038, VLR_047, VLR_052, VLR_054, VLR_081, VLR_082

**⚠️ Missing Coordinates (NOT in STOP_DATA)**:
- `VLR_038`
- `VLR_047`
- `VLR_052`
- `VLR_054`
- `VLR_081`
- `VLR_082`

### **Haversine Distance Calculation Feasibility**

✅ **For 12 segments using defined stops** (VLR_001–VLR_034):
   - Can compute Haversine distance once per segment pair
   - Store in computation cache

⚠️ **For 5 segments using undefined stops** (VLR_038, VLR_047, etc.):
   - Requires adding stop coordinates to STOP_DATA before Haversine computation
   - Alternative: estimate distance from existing speed data

---

## 4️⃣ DISTINCT SEGMENTS IN TRIPHISTORY

### **MongoDB Query Result**
```
db.TripHistory.distinct("segment")
```

**Result**:
```
[
  "VLR_002->VLR_018",
  "VLR_011->VLR_013",
  "VLR_012->VLR_030",
  "VLR_013->VLR_016",
  "VLR_018->VLR_047",     ← VLR_047 not in STOP_DATA
  "VLR_025->VLR_026",
  "VLR_038->VLR_028",     ← VLR_038 not in STOP_DATA
  "VLR_052->VLR_011",     ← VLR_052 not in STOP_DATA
  "VLR_054->VLR_001",     ← VLR_054 not in STOP_DATA
  "VLR_081->VLR_008",     ← VLR_081 not in STOP_DATA
  "VLR_081->VLR_082"      ← VLR_081, VLR_082 not in STOP_DATA
]
```

**Total Unique Segments**: 11

---

## 5️⃣ TRIPHISTORY RECORD COUNT

### **MongoDB Query Result**
```
db.TripHistory.countDocuments()
```

**Result**: **13 records**

### **Sample Document Structure**

```json
{
  "_id": "699174e38d6c6f65f8634a11",
  "bus_id": "BUS-103",
  "route_id": null,
  "timestamp": "2026-02-15T07:25:23.455Z",
  "day_of_week": "Sunday",
  "hour_of_day": 12,
  "segment": "VLR_012->VLR_030",
  "speed": 94.1,
  "traffic_level": "light",
  "coordinates": [79.161989, 12.972081],
  "__v": 0
}
```

### **Data Inventory**

| Attribute | Count | Notes |
|-----------|-------|-------|
| Total Records | 13 | Limited dataset for testing |
| Unique Buses | ? | Requires aggregation query |
| Unique Segments | 11 | Listed above |
| Date Range | Feb 15 - Feb 15, 2026 | Single day |
| Records with coordinates | 13 | 100% coverage |
| Records with segment | 11 | All 13 have segment (no nulls) |

---

## 📊 SEGMENT DISTANCE CALCULATION PLAN

### **Haversine Implementation Option**

**Implementable Segments** (coordinates available):
- VLR_002→VLR_018
- VLR_011→VLR_013
- VLR_012→VLR_030
- VLR_013→VLR_016
- VLR_025→VLR_026
- VLR_038→VLR_028 ⚠️ (VLR_038 undefined)
- VLR_052→VLR_011 ⚠️ (VLR_052 undefined)
- VLR_054→VLR_001 ⚠️ (VLR_054 undefined)
- VLR_081→VLR_008 ⚠️ (VLR_081 undefined)
- VLR_081→VLR_082 ⚠️ (VLR_081, VLR_082 undefined)

**Haversine Formula** (from [backend/index.js](backend/index.js#L165)):
```javascript
function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371e3; // Earth radius in meters
  const φ1 = lat1 * Math.PI / 180;
  const φ2 = lat2 * Math.PI / 180;
  const Δφ = (lat2 - lat1) * Math.PI / 180;
  const Δλ = (lon2 - lon1) * Math.PI / 180;

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) *
    Math.sin(Δλ / 2) * Math.sin(Δλ / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in meters
}
```

---

## 🎯 SUMMARY TABLE

| Finding | Status | Details
```


## License: unknown
https://github.com/senthanal/Spatial-Interpolation/blob/7cd0db066260c8c1b351d93cb5129d1f1cb298e3/Calculate.js

```
---

## 🔬 SEGMENT DISTANCE DEFINITION FORENSIC AUDIT

**Status**: Investigation Complete  
**Date**: February 26, 2026  
**Mode**: IEEE Research Mode (Read-only)

---

## 1️⃣ STOP COORDINATES STORAGE LOCATION

### **Primary Storage: Frontend STOP_DATA Array**
**File**: [frontend/index.html](frontend/index.html#L1791)  
**Lines**: 1791–1830  
**Structure**: JavaScript constant array (NOT MongoDB)

```javascript
const STOP_DATA = [
  // ================= PRECISE GOOGLE MAPS COORDINATES (34 Stops) =================
  // Updated with exact coordinates rounded to 6 decimal places for perfect Google Maps alignment
  
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
```

### **Schema Definition: TripHistory (Bus Coordinates)**
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js#L18)

```javascript
{
  coordinates: { type: [Number], default: undefined }  // [longitude, latitude] format
}
```

### **Stop Coordinate Summary**
| Property | Location | Format | Coverage |
|----------|----------|--------|----------|
| **Stop Coordinates** | Frontend STOP_DATA array (JavaScript) | `{ stop_id, latitude, longitude, ...}` | 34 stops (VLR_001 to VLR_034) |
| **Bus GPS Coordinates** | MongoDB TripHistory.coordinates | `[longitude, latitude]` (GeoJSON) | Real-time telemetry |
| **Bus Coordinates (ActiveFleet)** | [backend/models/ActiveFleet.js](backend/models/ActiveFleet.js#L13) | `{ location: { type: "Point", coordinates: [lon, lat] } }` | Live fleet |

---

## 2️⃣ SEGMENT DISTANCE STORAGE STATUS

### **FINDING: Segment Distance is NOT Stored**

**TripHistory Schema** (full content):
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js)

```javascript
const tripHistorySchema = new mongoose.Schema(
  {
    bus_id: { type: String, index: true },
    route_id: { type: String, default: null },
    timestamp: { type: Date, default: Date.now, index: true },
    day_of_week: { type: String },
    hour_of_day: { type: Number },
    segment: { type: String, default: null },
    speed: { type: Number, default: null },
    traffic_level: { type: String, default: "unknown" },
    coordinates: { type: [Number], default: undefined }
  },
  { collection: "TripHistory" }
);
```

**Fields Stored**: bus_id, route_id, timestamp, day_of_week, hour_of_day, segment, speed, traffic_level, coordinates

**✅ Fields Available for Distance Calculation**: segment (stop pair codes), coordinates (GPS point)  
**❌ Field NOT Present**: `distance` (segment length in meters)

### **Mentioned but Not Implemented**
**File**: [CURRENT_STATE_SUMMARY.md](CURRENT_STATE_SUMMARY.md#L91) (Documentation only)

```javascript
{
  segment: String,             // e.g., "VLR_001->VLR_002"
  speed: Number,               // Average speed in km/h
  timestamp: Date,             // When recorded
  bus_id: String,              // Which bus generated this
  distance: Number             // Segment length in meters ← NOT IN ACTUAL SCHEMA
}
```

---

## 3️⃣ CONFIRMATION: STOPS HAVE LAT/LON, HAVERSINE CAN COMPUTE DISTANCE

### **All Stop Codes Are Defined**

| Stop Range | Defined | Total |
|------------|---------|-------|
| VLR_001 to VLR_034 | ✅ YES | 34 stops |

### **Data Consistency Issue**

**Stops Defined in STOP_DATA**: VLR_001 to VLR_034 (34 stops)

**Stops Used in Database Segments**: VLR_001, VLR_002, VLR_008, VLR_011, VLR_012, VLR_013, VLR_016, VLR_018, VLR_025, VLR_026, VLR_028, VLR_030, VLR_038, VLR_047, VLR_052, VLR_054, VLR_081, VLR_082

**⚠️ Missing Coordinates (NOT in STOP_DATA)**:
- `VLR_038`
- `VLR_047`
- `VLR_052`
- `VLR_054`
- `VLR_081`
- `VLR_082`

### **Haversine Distance Calculation Feasibility**

✅ **For 12 segments using defined stops** (VLR_001–VLR_034):
   - Can compute Haversine distance once per segment pair
   - Store in computation cache

⚠️ **For 5 segments using undefined stops** (VLR_038, VLR_047, etc.):
   - Requires adding stop coordinates to STOP_DATA before Haversine computation
   - Alternative: estimate distance from existing speed data

---

## 4️⃣ DISTINCT SEGMENTS IN TRIPHISTORY

### **MongoDB Query Result**
```
db.TripHistory.distinct("segment")
```

**Result**:
```
[
  "VLR_002->VLR_018",
  "VLR_011->VLR_013",
  "VLR_012->VLR_030",
  "VLR_013->VLR_016",
  "VLR_018->VLR_047",     ← VLR_047 not in STOP_DATA
  "VLR_025->VLR_026",
  "VLR_038->VLR_028",     ← VLR_038 not in STOP_DATA
  "VLR_052->VLR_011",     ← VLR_052 not in STOP_DATA
  "VLR_054->VLR_001",     ← VLR_054 not in STOP_DATA
  "VLR_081->VLR_008",     ← VLR_081 not in STOP_DATA
  "VLR_081->VLR_082"      ← VLR_081, VLR_082 not in STOP_DATA
]
```

**Total Unique Segments**: 11

---

## 5️⃣ TRIPHISTORY RECORD COUNT

### **MongoDB Query Result**
```
db.TripHistory.countDocuments()
```

**Result**: **13 records**

### **Sample Document Structure**

```json
{
  "_id": "699174e38d6c6f65f8634a11",
  "bus_id": "BUS-103",
  "route_id": null,
  "timestamp": "2026-02-15T07:25:23.455Z",
  "day_of_week": "Sunday",
  "hour_of_day": 12,
  "segment": "VLR_012->VLR_030",
  "speed": 94.1,
  "traffic_level": "light",
  "coordinates": [79.161989, 12.972081],
  "__v": 0
}
```

### **Data Inventory**

| Attribute | Count | Notes |
|-----------|-------|-------|
| Total Records | 13 | Limited dataset for testing |
| Unique Buses | ? | Requires aggregation query |
| Unique Segments | 11 | Listed above |
| Date Range | Feb 15 - Feb 15, 2026 | Single day |
| Records with coordinates | 13 | 100% coverage |
| Records with segment | 11 | All 13 have segment (no nulls) |

---

## 📊 SEGMENT DISTANCE CALCULATION PLAN

### **Haversine Implementation Option**

**Implementable Segments** (coordinates available):
- VLR_002→VLR_018
- VLR_011→VLR_013
- VLR_012→VLR_030
- VLR_013→VLR_016
- VLR_025→VLR_026
- VLR_038→VLR_028 ⚠️ (VLR_038 undefined)
- VLR_052→VLR_011 ⚠️ (VLR_052 undefined)
- VLR_054→VLR_001 ⚠️ (VLR_054 undefined)
- VLR_081→VLR_008 ⚠️ (VLR_081 undefined)
- VLR_081→VLR_082 ⚠️ (VLR_081, VLR_082 undefined)

**Haversine Formula** (from [backend/index.js](backend/index.js#L165)):
```javascript
function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371e3; // Earth radius in meters
  const φ1 = lat1 * Math.PI / 180;
  const φ2 = lat2 * Math.PI / 180;
  const Δφ = (lat2 - lat1) * Math.PI / 180;
  const Δλ = (lon2 - lon1) * Math.PI / 180;

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) *
    Math.sin(Δλ / 2) * Math.sin(Δλ / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in meters
}
```

---

## 🎯 SUMMARY TABLE

| Finding | Status | Details
```


## License: unknown
https://github.com/barskykd/barskykd.github.io/blob/8cd678f4a54c9e80fe64e1edf7da7f1fbabe2317/streetcalc/main.js

```
---

## 🔬 SEGMENT DISTANCE DEFINITION FORENSIC AUDIT

**Status**: Investigation Complete  
**Date**: February 26, 2026  
**Mode**: IEEE Research Mode (Read-only)

---

## 1️⃣ STOP COORDINATES STORAGE LOCATION

### **Primary Storage: Frontend STOP_DATA Array**
**File**: [frontend/index.html](frontend/index.html#L1791)  
**Lines**: 1791–1830  
**Structure**: JavaScript constant array (NOT MongoDB)

```javascript
const STOP_DATA = [
  // ================= PRECISE GOOGLE MAPS COORDINATES (34 Stops) =================
  // Updated with exact coordinates rounded to 6 decimal places for perfect Google Maps alignment
  
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
```

### **Schema Definition: TripHistory (Bus Coordinates)**
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js#L18)

```javascript
{
  coordinates: { type: [Number], default: undefined }  // [longitude, latitude] format
}
```

### **Stop Coordinate Summary**
| Property | Location | Format | Coverage |
|----------|----------|--------|----------|
| **Stop Coordinates** | Frontend STOP_DATA array (JavaScript) | `{ stop_id, latitude, longitude, ...}` | 34 stops (VLR_001 to VLR_034) |
| **Bus GPS Coordinates** | MongoDB TripHistory.coordinates | `[longitude, latitude]` (GeoJSON) | Real-time telemetry |
| **Bus Coordinates (ActiveFleet)** | [backend/models/ActiveFleet.js](backend/models/ActiveFleet.js#L13) | `{ location: { type: "Point", coordinates: [lon, lat] } }` | Live fleet |

---

## 2️⃣ SEGMENT DISTANCE STORAGE STATUS

### **FINDING: Segment Distance is NOT Stored**

**TripHistory Schema** (full content):
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js)

```javascript
const tripHistorySchema = new mongoose.Schema(
  {
    bus_id: { type: String, index: true },
    route_id: { type: String, default: null },
    timestamp: { type: Date, default: Date.now, index: true },
    day_of_week: { type: String },
    hour_of_day: { type: Number },
    segment: { type: String, default: null },
    speed: { type: Number, default: null },
    traffic_level: { type: String, default: "unknown" },
    coordinates: { type: [Number], default: undefined }
  },
  { collection: "TripHistory" }
);
```

**Fields Stored**: bus_id, route_id, timestamp, day_of_week, hour_of_day, segment, speed, traffic_level, coordinates

**✅ Fields Available for Distance Calculation**: segment (stop pair codes), coordinates (GPS point)  
**❌ Field NOT Present**: `distance` (segment length in meters)

### **Mentioned but Not Implemented**
**File**: [CURRENT_STATE_SUMMARY.md](CURRENT_STATE_SUMMARY.md#L91) (Documentation only)

```javascript
{
  segment: String,             // e.g., "VLR_001->VLR_002"
  speed: Number,               // Average speed in km/h
  timestamp: Date,             // When recorded
  bus_id: String,              // Which bus generated this
  distance: Number             // Segment length in meters ← NOT IN ACTUAL SCHEMA
}
```

---

## 3️⃣ CONFIRMATION: STOPS HAVE LAT/LON, HAVERSINE CAN COMPUTE DISTANCE

### **All Stop Codes Are Defined**

| Stop Range | Defined | Total |
|------------|---------|-------|
| VLR_001 to VLR_034 | ✅ YES | 34 stops |

### **Data Consistency Issue**

**Stops Defined in STOP_DATA**: VLR_001 to VLR_034 (34 stops)

**Stops Used in Database Segments**: VLR_001, VLR_002, VLR_008, VLR_011, VLR_012, VLR_013, VLR_016, VLR_018, VLR_025, VLR_026, VLR_028, VLR_030, VLR_038, VLR_047, VLR_052, VLR_054, VLR_081, VLR_082

**⚠️ Missing Coordinates (NOT in STOP_DATA)**:
- `VLR_038`
- `VLR_047`
- `VLR_052`
- `VLR_054`
- `VLR_081`
- `VLR_082`

### **Haversine Distance Calculation Feasibility**

✅ **For 12 segments using defined stops** (VLR_001–VLR_034):
   - Can compute Haversine distance once per segment pair
   - Store in computation cache

⚠️ **For 5 segments using undefined stops** (VLR_038, VLR_047, etc.):
   - Requires adding stop coordinates to STOP_DATA before Haversine computation
   - Alternative: estimate distance from existing speed data

---

## 4️⃣ DISTINCT SEGMENTS IN TRIPHISTORY

### **MongoDB Query Result**
```
db.TripHistory.distinct("segment")
```

**Result**:
```
[
  "VLR_002->VLR_018",
  "VLR_011->VLR_013",
  "VLR_012->VLR_030",
  "VLR_013->VLR_016",
  "VLR_018->VLR_047",     ← VLR_047 not in STOP_DATA
  "VLR_025->VLR_026",
  "VLR_038->VLR_028",     ← VLR_038 not in STOP_DATA
  "VLR_052->VLR_011",     ← VLR_052 not in STOP_DATA
  "VLR_054->VLR_001",     ← VLR_054 not in STOP_DATA
  "VLR_081->VLR_008",     ← VLR_081 not in STOP_DATA
  "VLR_081->VLR_082"      ← VLR_081, VLR_082 not in STOP_DATA
]
```

**Total Unique Segments**: 11

---

## 5️⃣ TRIPHISTORY RECORD COUNT

### **MongoDB Query Result**
```
db.TripHistory.countDocuments()
```

**Result**: **13 records**

### **Sample Document Structure**

```json
{
  "_id": "699174e38d6c6f65f8634a11",
  "bus_id": "BUS-103",
  "route_id": null,
  "timestamp": "2026-02-15T07:25:23.455Z",
  "day_of_week": "Sunday",
  "hour_of_day": 12,
  "segment": "VLR_012->VLR_030",
  "speed": 94.1,
  "traffic_level": "light",
  "coordinates": [79.161989, 12.972081],
  "__v": 0
}
```

### **Data Inventory**

| Attribute | Count | Notes |
|-----------|-------|-------|
| Total Records | 13 | Limited dataset for testing |
| Unique Buses | ? | Requires aggregation query |
| Unique Segments | 11 | Listed above |
| Date Range | Feb 15 - Feb 15, 2026 | Single day |
| Records with coordinates | 13 | 100% coverage |
| Records with segment | 11 | All 13 have segment (no nulls) |

---

## 📊 SEGMENT DISTANCE CALCULATION PLAN

### **Haversine Implementation Option**

**Implementable Segments** (coordinates available):
- VLR_002→VLR_018
- VLR_011→VLR_013
- VLR_012→VLR_030
- VLR_013→VLR_016
- VLR_025→VLR_026
- VLR_038→VLR_028 ⚠️ (VLR_038 undefined)
- VLR_052→VLR_011 ⚠️ (VLR_052 undefined)
- VLR_054→VLR_001 ⚠️ (VLR_054 undefined)
- VLR_081→VLR_008 ⚠️ (VLR_081 undefined)
- VLR_081→VLR_082 ⚠️ (VLR_081, VLR_082 undefined)

**Haversine Formula** (from [backend/index.js](backend/index.js#L165)):
```javascript
function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371e3; // Earth radius in meters
  const φ1 = lat1 * Math.PI / 180;
  const φ2 = lat2 * Math.PI / 180;
  const Δφ = (lat2 - lat1) * Math.PI / 180;
  const Δλ = (lon2 - lon1) * Math.PI / 180;

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) *
    Math.sin(Δλ / 2) * Math.sin(Δλ / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in meters
}
```

---

## 🎯 SUMMARY TABLE

| Finding
```


## License: unknown
https://github.com/linuxmint/cinnamon-spices-applets/blob/90811ceacbbb4d29458c793ea65eb5af963e1b6b/weather%40mockturtl/files/weather%40mockturtl/3.8/weather-applet.js

```
---

## 🔬 SEGMENT DISTANCE DEFINITION FORENSIC AUDIT

**Status**: Investigation Complete  
**Date**: February 26, 2026  
**Mode**: IEEE Research Mode (Read-only)

---

## 1️⃣ STOP COORDINATES STORAGE LOCATION

### **Primary Storage: Frontend STOP_DATA Array**
**File**: [frontend/index.html](frontend/index.html#L1791)  
**Lines**: 1791–1830  
**Structure**: JavaScript constant array (NOT MongoDB)

```javascript
const STOP_DATA = [
  // ================= PRECISE GOOGLE MAPS COORDINATES (34 Stops) =================
  // Updated with exact coordinates rounded to 6 decimal places for perfect Google Maps alignment
  
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
```

### **Schema Definition: TripHistory (Bus Coordinates)**
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js#L18)

```javascript
{
  coordinates: { type: [Number], default: undefined }  // [longitude, latitude] format
}
```

### **Stop Coordinate Summary**
| Property | Location | Format | Coverage |
|----------|----------|--------|----------|
| **Stop Coordinates** | Frontend STOP_DATA array (JavaScript) | `{ stop_id, latitude, longitude, ...}` | 34 stops (VLR_001 to VLR_034) |
| **Bus GPS Coordinates** | MongoDB TripHistory.coordinates | `[longitude, latitude]` (GeoJSON) | Real-time telemetry |
| **Bus Coordinates (ActiveFleet)** | [backend/models/ActiveFleet.js](backend/models/ActiveFleet.js#L13) | `{ location: { type: "Point", coordinates: [lon, lat] } }` | Live fleet |

---

## 2️⃣ SEGMENT DISTANCE STORAGE STATUS

### **FINDING: Segment Distance is NOT Stored**

**TripHistory Schema** (full content):
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js)

```javascript
const tripHistorySchema = new mongoose.Schema(
  {
    bus_id: { type: String, index: true },
    route_id: { type: String, default: null },
    timestamp: { type: Date, default: Date.now, index: true },
    day_of_week: { type: String },
    hour_of_day: { type: Number },
    segment: { type: String, default: null },
    speed: { type: Number, default: null },
    traffic_level: { type: String, default: "unknown" },
    coordinates: { type: [Number], default: undefined }
  },
  { collection: "TripHistory" }
);
```

**Fields Stored**: bus_id, route_id, timestamp, day_of_week, hour_of_day, segment, speed, traffic_level, coordinates

**✅ Fields Available for Distance Calculation**: segment (stop pair codes), coordinates (GPS point)  
**❌ Field NOT Present**: `distance` (segment length in meters)

### **Mentioned but Not Implemented**
**File**: [CURRENT_STATE_SUMMARY.md](CURRENT_STATE_SUMMARY.md#L91) (Documentation only)

```javascript
{
  segment: String,             // e.g., "VLR_001->VLR_002"
  speed: Number,               // Average speed in km/h
  timestamp: Date,             // When recorded
  bus_id: String,              // Which bus generated this
  distance: Number             // Segment length in meters ← NOT IN ACTUAL SCHEMA
}
```

---

## 3️⃣ CONFIRMATION: STOPS HAVE LAT/LON, HAVERSINE CAN COMPUTE DISTANCE

### **All Stop Codes Are Defined**

| Stop Range | Defined | Total |
|------------|---------|-------|
| VLR_001 to VLR_034 | ✅ YES | 34 stops |

### **Data Consistency Issue**

**Stops Defined in STOP_DATA**: VLR_001 to VLR_034 (34 stops)

**Stops Used in Database Segments**: VLR_001, VLR_002, VLR_008, VLR_011, VLR_012, VLR_013, VLR_016, VLR_018, VLR_025, VLR_026, VLR_028, VLR_030, VLR_038, VLR_047, VLR_052, VLR_054, VLR_081, VLR_082

**⚠️ Missing Coordinates (NOT in STOP_DATA)**:
- `VLR_038`
- `VLR_047`
- `VLR_052`
- `VLR_054`
- `VLR_081`
- `VLR_082`

### **Haversine Distance Calculation Feasibility**

✅ **For 12 segments using defined stops** (VLR_001–VLR_034):
   - Can compute Haversine distance once per segment pair
   - Store in computation cache

⚠️ **For 5 segments using undefined stops** (VLR_038, VLR_047, etc.):
   - Requires adding stop coordinates to STOP_DATA before Haversine computation
   - Alternative: estimate distance from existing speed data

---

## 4️⃣ DISTINCT SEGMENTS IN TRIPHISTORY

### **MongoDB Query Result**
```
db.TripHistory.distinct("segment")
```

**Result**:
```
[
  "VLR_002->VLR_018",
  "VLR_011->VLR_013",
  "VLR_012->VLR_030",
  "VLR_013->VLR_016",
  "VLR_018->VLR_047",     ← VLR_047 not in STOP_DATA
  "VLR_025->VLR_026",
  "VLR_038->VLR_028",     ← VLR_038 not in STOP_DATA
  "VLR_052->VLR_011",     ← VLR_052 not in STOP_DATA
  "VLR_054->VLR_001",     ← VLR_054 not in STOP_DATA
  "VLR_081->VLR_008",     ← VLR_081 not in STOP_DATA
  "VLR_081->VLR_082"      ← VLR_081, VLR_082 not in STOP_DATA
]
```

**Total Unique Segments**: 11

---

## 5️⃣ TRIPHISTORY RECORD COUNT

### **MongoDB Query Result**
```
db.TripHistory.countDocuments()
```

**Result**: **13 records**

### **Sample Document Structure**

```json
{
  "_id": "699174e38d6c6f65f8634a11",
  "bus_id": "BUS-103",
  "route_id": null,
  "timestamp": "2026-02-15T07:25:23.455Z",
  "day_of_week": "Sunday",
  "hour_of_day": 12,
  "segment": "VLR_012->VLR_030",
  "speed": 94.1,
  "traffic_level": "light",
  "coordinates": [79.161989, 12.972081],
  "__v": 0
}
```

### **Data Inventory**

| Attribute | Count | Notes |
|-----------|-------|-------|
| Total Records | 13 | Limited dataset for testing |
| Unique Buses | ? | Requires aggregation query |
| Unique Segments | 11 | Listed above |
| Date Range | Feb 15 - Feb 15, 2026 | Single day |
| Records with coordinates | 13 | 100% coverage |
| Records with segment | 11 | All 13 have segment (no nulls) |

---

## 📊 SEGMENT DISTANCE CALCULATION PLAN

### **Haversine Implementation Option**

**Implementable Segments** (coordinates available):
- VLR_002→VLR_018
- VLR_011→VLR_013
- VLR_012→VLR_030
- VLR_013→VLR_016
- VLR_025→VLR_026
- VLR_038→VLR_028 ⚠️ (VLR_038 undefined)
- VLR_052→VLR_011 ⚠️ (VLR_052 undefined)
- VLR_054→VLR_001 ⚠️ (VLR_054 undefined)
- VLR_081→VLR_008 ⚠️ (VLR_081 undefined)
- VLR_081→VLR_082 ⚠️ (VLR_081, VLR_082 undefined)

**Haversine Formula** (from [backend/index.js](backend/index.js#L165)):
```javascript
function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371e3; // Earth radius in meters
  const φ1 = lat1 * Math.PI / 180;
  const φ2 = lat2 * Math.PI / 180;
  const Δφ = (lat2 - lat1) * Math.PI / 180;
  const Δλ = (lon2 - lon1) * Math.PI / 180;

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) *
    Math.sin(Δλ / 2) * Math.sin(Δλ / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in meters
}
```

---

## 🎯 SUMMARY TABLE

| Finding
```


## License: unknown
https://github.com/Scorpion018/Climate-hazards-Data-Retrieval-Engine/blob/f265d70c47fbfb4f80b9dd1c17086dd9e411b297/views/Main.ejs

```
---

## 🔬 SEGMENT DISTANCE DEFINITION FORENSIC AUDIT

**Status**: Investigation Complete  
**Date**: February 26, 2026  
**Mode**: IEEE Research Mode (Read-only)

---

## 1️⃣ STOP COORDINATES STORAGE LOCATION

### **Primary Storage: Frontend STOP_DATA Array**
**File**: [frontend/index.html](frontend/index.html#L1791)  
**Lines**: 1791–1830  
**Structure**: JavaScript constant array (NOT MongoDB)

```javascript
const STOP_DATA = [
  // ================= PRECISE GOOGLE MAPS COORDINATES (34 Stops) =================
  // Updated with exact coordinates rounded to 6 decimal places for perfect Google Maps alignment
  
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
```

### **Schema Definition: TripHistory (Bus Coordinates)**
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js#L18)

```javascript
{
  coordinates: { type: [Number], default: undefined }  // [longitude, latitude] format
}
```

### **Stop Coordinate Summary**
| Property | Location | Format | Coverage |
|----------|----------|--------|----------|
| **Stop Coordinates** | Frontend STOP_DATA array (JavaScript) | `{ stop_id, latitude, longitude, ...}` | 34 stops (VLR_001 to VLR_034) |
| **Bus GPS Coordinates** | MongoDB TripHistory.coordinates | `[longitude, latitude]` (GeoJSON) | Real-time telemetry |
| **Bus Coordinates (ActiveFleet)** | [backend/models/ActiveFleet.js](backend/models/ActiveFleet.js#L13) | `{ location: { type: "Point", coordinates: [lon, lat] } }` | Live fleet |

---

## 2️⃣ SEGMENT DISTANCE STORAGE STATUS

### **FINDING: Segment Distance is NOT Stored**

**TripHistory Schema** (full content):
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js)

```javascript
const tripHistorySchema = new mongoose.Schema(
  {
    bus_id: { type: String, index: true },
    route_id: { type: String, default: null },
    timestamp: { type: Date, default: Date.now, index: true },
    day_of_week: { type: String },
    hour_of_day: { type: Number },
    segment: { type: String, default: null },
    speed: { type: Number, default: null },
    traffic_level: { type: String, default: "unknown" },
    coordinates: { type: [Number], default: undefined }
  },
  { collection: "TripHistory" }
);
```

**Fields Stored**: bus_id, route_id, timestamp, day_of_week, hour_of_day, segment, speed, traffic_level, coordinates

**✅ Fields Available for Distance Calculation**: segment (stop pair codes), coordinates (GPS point)  
**❌ Field NOT Present**: `distance` (segment length in meters)

### **Mentioned but Not Implemented**
**File**: [CURRENT_STATE_SUMMARY.md](CURRENT_STATE_SUMMARY.md#L91) (Documentation only)

```javascript
{
  segment: String,             // e.g., "VLR_001->VLR_002"
  speed: Number,               // Average speed in km/h
  timestamp: Date,             // When recorded
  bus_id: String,              // Which bus generated this
  distance: Number             // Segment length in meters ← NOT IN ACTUAL SCHEMA
}
```

---

## 3️⃣ CONFIRMATION: STOPS HAVE LAT/LON, HAVERSINE CAN COMPUTE DISTANCE

### **All Stop Codes Are Defined**

| Stop Range | Defined | Total |
|------------|---------|-------|
| VLR_001 to VLR_034 | ✅ YES | 34 stops |

### **Data Consistency Issue**

**Stops Defined in STOP_DATA**: VLR_001 to VLR_034 (34 stops)

**Stops Used in Database Segments**: VLR_001, VLR_002, VLR_008, VLR_011, VLR_012, VLR_013, VLR_016, VLR_018, VLR_025, VLR_026, VLR_028, VLR_030, VLR_038, VLR_047, VLR_052, VLR_054, VLR_081, VLR_082

**⚠️ Missing Coordinates (NOT in STOP_DATA)**:
- `VLR_038`
- `VLR_047`
- `VLR_052`
- `VLR_054`
- `VLR_081`
- `VLR_082`

### **Haversine Distance Calculation Feasibility**

✅ **For 12 segments using defined stops** (VLR_001–VLR_034):
   - Can compute Haversine distance once per segment pair
   - Store in computation cache

⚠️ **For 5 segments using undefined stops** (VLR_038, VLR_047, etc.):
   - Requires adding stop coordinates to STOP_DATA before Haversine computation
   - Alternative: estimate distance from existing speed data

---

## 4️⃣ DISTINCT SEGMENTS IN TRIPHISTORY

### **MongoDB Query Result**
```
db.TripHistory.distinct("segment")
```

**Result**:
```
[
  "VLR_002->VLR_018",
  "VLR_011->VLR_013",
  "VLR_012->VLR_030",
  "VLR_013->VLR_016",
  "VLR_018->VLR_047",     ← VLR_047 not in STOP_DATA
  "VLR_025->VLR_026",
  "VLR_038->VLR_028",     ← VLR_038 not in STOP_DATA
  "VLR_052->VLR_011",     ← VLR_052 not in STOP_DATA
  "VLR_054->VLR_001",     ← VLR_054 not in STOP_DATA
  "VLR_081->VLR_008",     ← VLR_081 not in STOP_DATA
  "VLR_081->VLR_082"      ← VLR_081, VLR_082 not in STOP_DATA
]
```

**Total Unique Segments**: 11

---

## 5️⃣ TRIPHISTORY RECORD COUNT

### **MongoDB Query Result**
```
db.TripHistory.countDocuments()
```

**Result**: **13 records**

### **Sample Document Structure**

```json
{
  "_id": "699174e38d6c6f65f8634a11",
  "bus_id": "BUS-103",
  "route_id": null,
  "timestamp": "2026-02-15T07:25:23.455Z",
  "day_of_week": "Sunday",
  "hour_of_day": 12,
  "segment": "VLR_012->VLR_030",
  "speed": 94.1,
  "traffic_level": "light",
  "coordinates": [79.161989, 12.972081],
  "__v": 0
}
```

### **Data Inventory**

| Attribute | Count | Notes |
|-----------|-------|-------|
| Total Records | 13 | Limited dataset for testing |
| Unique Buses | ? | Requires aggregation query |
| Unique Segments | 11 | Listed above |
| Date Range | Feb 15 - Feb 15, 2026 | Single day |
| Records with coordinates | 13 | 100% coverage |
| Records with segment | 11 | All 13 have segment (no nulls) |

---

## 📊 SEGMENT DISTANCE CALCULATION PLAN

### **Haversine Implementation Option**

**Implementable Segments** (coordinates available):
- VLR_002→VLR_018
- VLR_011→VLR_013
- VLR_012→VLR_030
- VLR_013→VLR_016
- VLR_025→VLR_026
- VLR_038→VLR_028 ⚠️ (VLR_038 undefined)
- VLR_052→VLR_011 ⚠️ (VLR_052 undefined)
- VLR_054→VLR_001 ⚠️ (VLR_054 undefined)
- VLR_081→VLR_008 ⚠️ (VLR_081 undefined)
- VLR_081→VLR_082 ⚠️ (VLR_081, VLR_082 undefined)

**Haversine Formula** (from [backend/index.js](backend/index.js#L165)):
```javascript
function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371e3; // Earth radius in meters
  const φ1 = lat1 * Math.PI / 180;
  const φ2 = lat2 * Math.PI / 180;
  const Δφ = (lat2 - lat1) * Math.PI / 180;
  const Δλ = (lon2 - lon1) * Math.PI / 180;

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) *
    Math.sin(Δλ / 2) * Math.sin(Δλ / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in meters
}
```

---

## 🎯 SUMMARY TABLE

| Finding
```


## License: unknown
https://github.com/AbdullahTonka/sunum/blob/9e572a71799c17ff3ac148518bbea12c6c2c30e3/index1.html

```
---

## 🔬 SEGMENT DISTANCE DEFINITION FORENSIC AUDIT

**Status**: Investigation Complete  
**Date**: February 26, 2026  
**Mode**: IEEE Research Mode (Read-only)

---

## 1️⃣ STOP COORDINATES STORAGE LOCATION

### **Primary Storage: Frontend STOP_DATA Array**
**File**: [frontend/index.html](frontend/index.html#L1791)  
**Lines**: 1791–1830  
**Structure**: JavaScript constant array (NOT MongoDB)

```javascript
const STOP_DATA = [
  // ================= PRECISE GOOGLE MAPS COORDINATES (34 Stops) =================
  // Updated with exact coordinates rounded to 6 decimal places for perfect Google Maps alignment
  
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
```

### **Schema Definition: TripHistory (Bus Coordinates)**
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js#L18)

```javascript
{
  coordinates: { type: [Number], default: undefined }  // [longitude, latitude] format
}
```

### **Stop Coordinate Summary**
| Property | Location | Format | Coverage |
|----------|----------|--------|----------|
| **Stop Coordinates** | Frontend STOP_DATA array (JavaScript) | `{ stop_id, latitude, longitude, ...}` | 34 stops (VLR_001 to VLR_034) |
| **Bus GPS Coordinates** | MongoDB TripHistory.coordinates | `[longitude, latitude]` (GeoJSON) | Real-time telemetry |
| **Bus Coordinates (ActiveFleet)** | [backend/models/ActiveFleet.js](backend/models/ActiveFleet.js#L13) | `{ location: { type: "Point", coordinates: [lon, lat] } }` | Live fleet |

---

## 2️⃣ SEGMENT DISTANCE STORAGE STATUS

### **FINDING: Segment Distance is NOT Stored**

**TripHistory Schema** (full content):
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js)

```javascript
const tripHistorySchema = new mongoose.Schema(
  {
    bus_id: { type: String, index: true },
    route_id: { type: String, default: null },
    timestamp: { type: Date, default: Date.now, index: true },
    day_of_week: { type: String },
    hour_of_day: { type: Number },
    segment: { type: String, default: null },
    speed: { type: Number, default: null },
    traffic_level: { type: String, default: "unknown" },
    coordinates: { type: [Number], default: undefined }
  },
  { collection: "TripHistory" }
);
```

**Fields Stored**: bus_id, route_id, timestamp, day_of_week, hour_of_day, segment, speed, traffic_level, coordinates

**✅ Fields Available for Distance Calculation**: segment (stop pair codes), coordinates (GPS point)  
**❌ Field NOT Present**: `distance` (segment length in meters)

### **Mentioned but Not Implemented**
**File**: [CURRENT_STATE_SUMMARY.md](CURRENT_STATE_SUMMARY.md#L91) (Documentation only)

```javascript
{
  segment: String,             // e.g., "VLR_001->VLR_002"
  speed: Number,               // Average speed in km/h
  timestamp: Date,             // When recorded
  bus_id: String,              // Which bus generated this
  distance: Number             // Segment length in meters ← NOT IN ACTUAL SCHEMA
}
```

---

## 3️⃣ CONFIRMATION: STOPS HAVE LAT/LON, HAVERSINE CAN COMPUTE DISTANCE

### **All Stop Codes Are Defined**

| Stop Range | Defined | Total |
|------------|---------|-------|
| VLR_001 to VLR_034 | ✅ YES | 34 stops |

### **Data Consistency Issue**

**Stops Defined in STOP_DATA**: VLR_001 to VLR_034 (34 stops)

**Stops Used in Database Segments**: VLR_001, VLR_002, VLR_008, VLR_011, VLR_012, VLR_013, VLR_016, VLR_018, VLR_025, VLR_026, VLR_028, VLR_030, VLR_038, VLR_047, VLR_052, VLR_054, VLR_081, VLR_082

**⚠️ Missing Coordinates (NOT in STOP_DATA)**:
- `VLR_038`
- `VLR_047`
- `VLR_052`
- `VLR_054`
- `VLR_081`
- `VLR_082`

### **Haversine Distance Calculation Feasibility**

✅ **For 12 segments using defined stops** (VLR_001–VLR_034):
   - Can compute Haversine distance once per segment pair
   - Store in computation cache

⚠️ **For 5 segments using undefined stops** (VLR_038, VLR_047, etc.):
   - Requires adding stop coordinates to STOP_DATA before Haversine computation
   - Alternative: estimate distance from existing speed data

---

## 4️⃣ DISTINCT SEGMENTS IN TRIPHISTORY

### **MongoDB Query Result**
```
db.TripHistory.distinct("segment")
```

**Result**:
```
[
  "VLR_002->VLR_018",
  "VLR_011->VLR_013",
  "VLR_012->VLR_030",
  "VLR_013->VLR_016",
  "VLR_018->VLR_047",     ← VLR_047 not in STOP_DATA
  "VLR_025->VLR_026",
  "VLR_038->VLR_028",     ← VLR_038 not in STOP_DATA
  "VLR_052->VLR_011",     ← VLR_052 not in STOP_DATA
  "VLR_054->VLR_001",     ← VLR_054 not in STOP_DATA
  "VLR_081->VLR_008",     ← VLR_081 not in STOP_DATA
  "VLR_081->VLR_082"      ← VLR_081, VLR_082 not in STOP_DATA
]
```

**Total Unique Segments**: 11

---

## 5️⃣ TRIPHISTORY RECORD COUNT

### **MongoDB Query Result**
```
db.TripHistory.countDocuments()
```

**Result**: **13 records**

### **Sample Document Structure**

```json
{
  "_id": "699174e38d6c6f65f8634a11",
  "bus_id": "BUS-103",
  "route_id": null,
  "timestamp": "2026-02-15T07:25:23.455Z",
  "day_of_week": "Sunday",
  "hour_of_day": 12,
  "segment": "VLR_012->VLR_030",
  "speed": 94.1,
  "traffic_level": "light",
  "coordinates": [79.161989, 12.972081],
  "__v": 0
}
```

### **Data Inventory**

| Attribute | Count | Notes |
|-----------|-------|-------|
| Total Records | 13 | Limited dataset for testing |
| Unique Buses | ? | Requires aggregation query |
| Unique Segments | 11 | Listed above |
| Date Range | Feb 15 - Feb 15, 2026 | Single day |
| Records with coordinates | 13 | 100% coverage |
| Records with segment | 11 | All 13 have segment (no nulls) |

---

## 📊 SEGMENT DISTANCE CALCULATION PLAN

### **Haversine Implementation Option**

**Implementable Segments** (coordinates available):
- VLR_002→VLR_018
- VLR_011→VLR_013
- VLR_012→VLR_030
- VLR_013→VLR_016
- VLR_025→VLR_026
- VLR_038→VLR_028 ⚠️ (VLR_038 undefined)
- VLR_052→VLR_011 ⚠️ (VLR_052 undefined)
- VLR_054→VLR_001 ⚠️ (VLR_054 undefined)
- VLR_081→VLR_008 ⚠️ (VLR_081 undefined)
- VLR_081→VLR_082 ⚠️ (VLR_081, VLR_082 undefined)

**Haversine Formula** (from [backend/index.js](backend/index.js#L165)):
```javascript
function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371e3; // Earth radius in meters
  const φ1 = lat1 * Math.PI / 180;
  const φ2 = lat2 * Math.PI / 180;
  const Δφ = (lat2 - lat1) * Math.PI / 180;
  const Δλ = (lon2 - lon1) * Math.PI / 180;

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) *
    Math.sin(Δλ / 2) * Math.sin(Δλ / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in meters
}
```

---

## 🎯 SUMMARY TABLE

| Finding
```


## License: MIT
https://github.com/chrisveness/geodesy/blob/761587cd748bd9f7c9825195eba4a9fc5891b859/latlon-spherical.js

```
---

## 🔬 SEGMENT DISTANCE DEFINITION FORENSIC AUDIT

**Status**: Investigation Complete  
**Date**: February 26, 2026  
**Mode**: IEEE Research Mode (Read-only)

---

## 1️⃣ STOP COORDINATES STORAGE LOCATION

### **Primary Storage: Frontend STOP_DATA Array**
**File**: [frontend/index.html](frontend/index.html#L1791)  
**Lines**: 1791–1830  
**Structure**: JavaScript constant array (NOT MongoDB)

```javascript
const STOP_DATA = [
  // ================= PRECISE GOOGLE MAPS COORDINATES (34 Stops) =================
  // Updated with exact coordinates rounded to 6 decimal places for perfect Google Maps alignment
  
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
```

### **Schema Definition: TripHistory (Bus Coordinates)**
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js#L18)

```javascript
{
  coordinates: { type: [Number], default: undefined }  // [longitude, latitude] format
}
```

### **Stop Coordinate Summary**
| Property | Location | Format | Coverage |
|----------|----------|--------|----------|
| **Stop Coordinates** | Frontend STOP_DATA array (JavaScript) | `{ stop_id, latitude, longitude, ...}` | 34 stops (VLR_001 to VLR_034) |
| **Bus GPS Coordinates** | MongoDB TripHistory.coordinates | `[longitude, latitude]` (GeoJSON) | Real-time telemetry |
| **Bus Coordinates (ActiveFleet)** | [backend/models/ActiveFleet.js](backend/models/ActiveFleet.js#L13) | `{ location: { type: "Point", coordinates: [lon, lat] } }` | Live fleet |

---

## 2️⃣ SEGMENT DISTANCE STORAGE STATUS

### **FINDING: Segment Distance is NOT Stored**

**TripHistory Schema** (full content):
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js)

```javascript
const tripHistorySchema = new mongoose.Schema(
  {
    bus_id: { type: String, index: true },
    route_id: { type: String, default: null },
    timestamp: { type: Date, default: Date.now, index: true },
    day_of_week: { type: String },
    hour_of_day: { type: Number },
    segment: { type: String, default: null },
    speed: { type: Number, default: null },
    traffic_level: { type: String, default: "unknown" },
    coordinates: { type: [Number], default: undefined }
  },
  { collection: "TripHistory" }
);
```

**Fields Stored**: bus_id, route_id, timestamp, day_of_week, hour_of_day, segment, speed, traffic_level, coordinates

**✅ Fields Available for Distance Calculation**: segment (stop pair codes), coordinates (GPS point)  
**❌ Field NOT Present**: `distance` (segment length in meters)

### **Mentioned but Not Implemented**
**File**: [CURRENT_STATE_SUMMARY.md](CURRENT_STATE_SUMMARY.md#L91) (Documentation only)

```javascript
{
  segment: String,             // e.g., "VLR_001->VLR_002"
  speed: Number,               // Average speed in km/h
  timestamp: Date,             // When recorded
  bus_id: String,              // Which bus generated this
  distance: Number             // Segment length in meters ← NOT IN ACTUAL SCHEMA
}
```

---

## 3️⃣ CONFIRMATION: STOPS HAVE LAT/LON, HAVERSINE CAN COMPUTE DISTANCE

### **All Stop Codes Are Defined**

| Stop Range | Defined | Total |
|------------|---------|-------|
| VLR_001 to VLR_034 | ✅ YES | 34 stops |

### **Data Consistency Issue**

**Stops Defined in STOP_DATA**: VLR_001 to VLR_034 (34 stops)

**Stops Used in Database Segments**: VLR_001, VLR_002, VLR_008, VLR_011, VLR_012, VLR_013, VLR_016, VLR_018, VLR_025, VLR_026, VLR_028, VLR_030, VLR_038, VLR_047, VLR_052, VLR_054, VLR_081, VLR_082

**⚠️ Missing Coordinates (NOT in STOP_DATA)**:
- `VLR_038`
- `VLR_047`
- `VLR_052`
- `VLR_054`
- `VLR_081`
- `VLR_082`

### **Haversine Distance Calculation Feasibility**

✅ **For 12 segments using defined stops** (VLR_001–VLR_034):
   - Can compute Haversine distance once per segment pair
   - Store in computation cache

⚠️ **For 5 segments using undefined stops** (VLR_038, VLR_047, etc.):
   - Requires adding stop coordinates to STOP_DATA before Haversine computation
   - Alternative: estimate distance from existing speed data

---

## 4️⃣ DISTINCT SEGMENTS IN TRIPHISTORY

### **MongoDB Query Result**
```
db.TripHistory.distinct("segment")
```

**Result**:
```
[
  "VLR_002->VLR_018",
  "VLR_011->VLR_013",
  "VLR_012->VLR_030",
  "VLR_013->VLR_016",
  "VLR_018->VLR_047",     ← VLR_047 not in STOP_DATA
  "VLR_025->VLR_026",
  "VLR_038->VLR_028",     ← VLR_038 not in STOP_DATA
  "VLR_052->VLR_011",     ← VLR_052 not in STOP_DATA
  "VLR_054->VLR_001",     ← VLR_054 not in STOP_DATA
  "VLR_081->VLR_008",     ← VLR_081 not in STOP_DATA
  "VLR_081->VLR_082"      ← VLR_081, VLR_082 not in STOP_DATA
]
```

**Total Unique Segments**: 11

---

## 5️⃣ TRIPHISTORY RECORD COUNT

### **MongoDB Query Result**
```
db.TripHistory.countDocuments()
```

**Result**: **13 records**

### **Sample Document Structure**

```json
{
  "_id": "699174e38d6c6f65f8634a11",
  "bus_id": "BUS-103",
  "route_id": null,
  "timestamp": "2026-02-15T07:25:23.455Z",
  "day_of_week": "Sunday",
  "hour_of_day": 12,
  "segment": "VLR_012->VLR_030",
  "speed": 94.1,
  "traffic_level": "light",
  "coordinates": [79.161989, 12.972081],
  "__v": 0
}
```

### **Data Inventory**

| Attribute | Count | Notes |
|-----------|-------|-------|
| Total Records | 13 | Limited dataset for testing |
| Unique Buses | ? | Requires aggregation query |
| Unique Segments | 11 | Listed above |
| Date Range | Feb 15 - Feb 15, 2026 | Single day |
| Records with coordinates | 13 | 100% coverage |
| Records with segment | 11 | All 13 have segment (no nulls) |

---

## 📊 SEGMENT DISTANCE CALCULATION PLAN

### **Haversine Implementation Option**

**Implementable Segments** (coordinates available):
- VLR_002→VLR_018
- VLR_011→VLR_013
- VLR_012→VLR_030
- VLR_013→VLR_016
- VLR_025→VLR_026
- VLR_038→VLR_028 ⚠️ (VLR_038 undefined)
- VLR_052→VLR_011 ⚠️ (VLR_052 undefined)
- VLR_054→VLR_001 ⚠️ (VLR_054 undefined)
- VLR_081→VLR_008 ⚠️ (VLR_081 undefined)
- VLR_081→VLR_082 ⚠️ (VLR_081, VLR_082 undefined)

**Haversine Formula** (from [backend/index.js](backend/index.js#L165)):
```javascript
function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371e3; // Earth radius in meters
  const φ1 = lat1 * Math.PI / 180;
  const φ2 = lat2 * Math.PI / 180;
  const Δφ = (lat2 - lat1) * Math.PI / 180;
  const Δλ = (lon2 - lon1) * Math.PI / 180;

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) *
    Math.sin(Δλ / 2) * Math.sin(Δλ / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in meters
}
```

---

## 🎯 SUMMARY TABLE

| Finding
```


## License: MIT
https://github.com/jclo/picodb/blob/d62365989d01149fb2b89a19832b9e9fc69ad633/lib/picodb.mjs

```
---

## 🔬 SEGMENT DISTANCE DEFINITION FORENSIC AUDIT

**Status**: Investigation Complete  
**Date**: February 26, 2026  
**Mode**: IEEE Research Mode (Read-only)

---

## 1️⃣ STOP COORDINATES STORAGE LOCATION

### **Primary Storage: Frontend STOP_DATA Array**
**File**: [frontend/index.html](frontend/index.html#L1791)  
**Lines**: 1791–1830  
**Structure**: JavaScript constant array (NOT MongoDB)

```javascript
const STOP_DATA = [
  // ================= PRECISE GOOGLE MAPS COORDINATES (34 Stops) =================
  // Updated with exact coordinates rounded to 6 decimal places for perfect Google Maps alignment
  
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
```

### **Schema Definition: TripHistory (Bus Coordinates)**
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js#L18)

```javascript
{
  coordinates: { type: [Number], default: undefined }  // [longitude, latitude] format
}
```

### **Stop Coordinate Summary**
| Property | Location | Format | Coverage |
|----------|----------|--------|----------|
| **Stop Coordinates** | Frontend STOP_DATA array (JavaScript) | `{ stop_id, latitude, longitude, ...}` | 34 stops (VLR_001 to VLR_034) |
| **Bus GPS Coordinates** | MongoDB TripHistory.coordinates | `[longitude, latitude]` (GeoJSON) | Real-time telemetry |
| **Bus Coordinates (ActiveFleet)** | [backend/models/ActiveFleet.js](backend/models/ActiveFleet.js#L13) | `{ location: { type: "Point", coordinates: [lon, lat] } }` | Live fleet |

---

## 2️⃣ SEGMENT DISTANCE STORAGE STATUS

### **FINDING: Segment Distance is NOT Stored**

**TripHistory Schema** (full content):
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js)

```javascript
const tripHistorySchema = new mongoose.Schema(
  {
    bus_id: { type: String, index: true },
    route_id: { type: String, default: null },
    timestamp: { type: Date, default: Date.now, index: true },
    day_of_week: { type: String },
    hour_of_day: { type: Number },
    segment: { type: String, default: null },
    speed: { type: Number, default: null },
    traffic_level: { type: String, default: "unknown" },
    coordinates: { type: [Number], default: undefined }
  },
  { collection: "TripHistory" }
);
```

**Fields Stored**: bus_id, route_id, timestamp, day_of_week, hour_of_day, segment, speed, traffic_level, coordinates

**✅ Fields Available for Distance Calculation**: segment (stop pair codes), coordinates (GPS point)  
**❌ Field NOT Present**: `distance` (segment length in meters)

### **Mentioned but Not Implemented**
**File**: [CURRENT_STATE_SUMMARY.md](CURRENT_STATE_SUMMARY.md#L91) (Documentation only)

```javascript
{
  segment: String,             // e.g., "VLR_001->VLR_002"
  speed: Number,               // Average speed in km/h
  timestamp: Date,             // When recorded
  bus_id: String,              // Which bus generated this
  distance: Number             // Segment length in meters ← NOT IN ACTUAL SCHEMA
}
```

---

## 3️⃣ CONFIRMATION: STOPS HAVE LAT/LON, HAVERSINE CAN COMPUTE DISTANCE

### **All Stop Codes Are Defined**

| Stop Range | Defined | Total |
|------------|---------|-------|
| VLR_001 to VLR_034 | ✅ YES | 34 stops |

### **Data Consistency Issue**

**Stops Defined in STOP_DATA**: VLR_001 to VLR_034 (34 stops)

**Stops Used in Database Segments**: VLR_001, VLR_002, VLR_008, VLR_011, VLR_012, VLR_013, VLR_016, VLR_018, VLR_025, VLR_026, VLR_028, VLR_030, VLR_038, VLR_047, VLR_052, VLR_054, VLR_081, VLR_082

**⚠️ Missing Coordinates (NOT in STOP_DATA)**:
- `VLR_038`
- `VLR_047`
- `VLR_052`
- `VLR_054`
- `VLR_081`
- `VLR_082`

### **Haversine Distance Calculation Feasibility**

✅ **For 12 segments using defined stops** (VLR_001–VLR_034):
   - Can compute Haversine distance once per segment pair
   - Store in computation cache

⚠️ **For 5 segments using undefined stops** (VLR_038, VLR_047, etc.):
   - Requires adding stop coordinates to STOP_DATA before Haversine computation
   - Alternative: estimate distance from existing speed data

---

## 4️⃣ DISTINCT SEGMENTS IN TRIPHISTORY

### **MongoDB Query Result**
```
db.TripHistory.distinct("segment")
```

**Result**:
```
[
  "VLR_002->VLR_018",
  "VLR_011->VLR_013",
  "VLR_012->VLR_030",
  "VLR_013->VLR_016",
  "VLR_018->VLR_047",     ← VLR_047 not in STOP_DATA
  "VLR_025->VLR_026",
  "VLR_038->VLR_028",     ← VLR_038 not in STOP_DATA
  "VLR_052->VLR_011",     ← VLR_052 not in STOP_DATA
  "VLR_054->VLR_001",     ← VLR_054 not in STOP_DATA
  "VLR_081->VLR_008",     ← VLR_081 not in STOP_DATA
  "VLR_081->VLR_082"      ← VLR_081, VLR_082 not in STOP_DATA
]
```

**Total Unique Segments**: 11

---

## 5️⃣ TRIPHISTORY RECORD COUNT

### **MongoDB Query Result**
```
db.TripHistory.countDocuments()
```

**Result**: **13 records**

### **Sample Document Structure**

```json
{
  "_id": "699174e38d6c6f65f8634a11",
  "bus_id": "BUS-103",
  "route_id": null,
  "timestamp": "2026-02-15T07:25:23.455Z",
  "day_of_week": "Sunday",
  "hour_of_day": 12,
  "segment": "VLR_012->VLR_030",
  "speed": 94.1,
  "traffic_level": "light",
  "coordinates": [79.161989, 12.972081],
  "__v": 0
}
```

### **Data Inventory**

| Attribute | Count | Notes |
|-----------|-------|-------|
| Total Records | 13 | Limited dataset for testing |
| Unique Buses | ? | Requires aggregation query |
| Unique Segments | 11 | Listed above |
| Date Range | Feb 15 - Feb 15, 2026 | Single day |
| Records with coordinates | 13 | 100% coverage |
| Records with segment | 11 | All 13 have segment (no nulls) |

---

## 📊 SEGMENT DISTANCE CALCULATION PLAN

### **Haversine Implementation Option**

**Implementable Segments** (coordinates available):
- VLR_002→VLR_018
- VLR_011→VLR_013
- VLR_012→VLR_030
- VLR_013→VLR_016
- VLR_025→VLR_026
- VLR_038→VLR_028 ⚠️ (VLR_038 undefined)
- VLR_052→VLR_011 ⚠️ (VLR_052 undefined)
- VLR_054→VLR_001 ⚠️ (VLR_054 undefined)
- VLR_081→VLR_008 ⚠️ (VLR_081 undefined)
- VLR_081→VLR_082 ⚠️ (VLR_081, VLR_082 undefined)

**Haversine Formula** (from [backend/index.js](backend/index.js#L165)):
```javascript
function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371e3; // Earth radius in meters
  const φ1 = lat1 * Math.PI / 180;
  const φ2 = lat2 * Math.PI / 180;
  const Δφ = (lat2 - lat1) * Math.PI / 180;
  const Δλ = (lon2 - lon1) * Math.PI / 180;

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) *
    Math.sin(Δλ / 2) * Math.sin(Δλ / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in meters
}
```

---

## 🎯 SUMMARY TABLE

| Finding | Status | Details
```


## License: unknown
https://github.com/senthanal/Spatial-Interpolation/blob/7cd0db066260c8c1b351d93cb5129d1f1cb298e3/Calculate.js

```
---

## 🔬 SEGMENT DISTANCE DEFINITION FORENSIC AUDIT

**Status**: Investigation Complete  
**Date**: February 26, 2026  
**Mode**: IEEE Research Mode (Read-only)

---

## 1️⃣ STOP COORDINATES STORAGE LOCATION

### **Primary Storage: Frontend STOP_DATA Array**
**File**: [frontend/index.html](frontend/index.html#L1791)  
**Lines**: 1791–1830  
**Structure**: JavaScript constant array (NOT MongoDB)

```javascript
const STOP_DATA = [
  // ================= PRECISE GOOGLE MAPS COORDINATES (34 Stops) =================
  // Updated with exact coordinates rounded to 6 decimal places for perfect Google Maps alignment
  
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
```

### **Schema Definition: TripHistory (Bus Coordinates)**
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js#L18)

```javascript
{
  coordinates: { type: [Number], default: undefined }  // [longitude, latitude] format
}
```

### **Stop Coordinate Summary**
| Property | Location | Format | Coverage |
|----------|----------|--------|----------|
| **Stop Coordinates** | Frontend STOP_DATA array (JavaScript) | `{ stop_id, latitude, longitude, ...}` | 34 stops (VLR_001 to VLR_034) |
| **Bus GPS Coordinates** | MongoDB TripHistory.coordinates | `[longitude, latitude]` (GeoJSON) | Real-time telemetry |
| **Bus Coordinates (ActiveFleet)** | [backend/models/ActiveFleet.js](backend/models/ActiveFleet.js#L13) | `{ location: { type: "Point", coordinates: [lon, lat] } }` | Live fleet |

---

## 2️⃣ SEGMENT DISTANCE STORAGE STATUS

### **FINDING: Segment Distance is NOT Stored**

**TripHistory Schema** (full content):
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js)

```javascript
const tripHistorySchema = new mongoose.Schema(
  {
    bus_id: { type: String, index: true },
    route_id: { type: String, default: null },
    timestamp: { type: Date, default: Date.now, index: true },
    day_of_week: { type: String },
    hour_of_day: { type: Number },
    segment: { type: String, default: null },
    speed: { type: Number, default: null },
    traffic_level: { type: String, default: "unknown" },
    coordinates: { type: [Number], default: undefined }
  },
  { collection: "TripHistory" }
);
```

**Fields Stored**: bus_id, route_id, timestamp, day_of_week, hour_of_day, segment, speed, traffic_level, coordinates

**✅ Fields Available for Distance Calculation**: segment (stop pair codes), coordinates (GPS point)  
**❌ Field NOT Present**: `distance` (segment length in meters)

### **Mentioned but Not Implemented**
**File**: [CURRENT_STATE_SUMMARY.md](CURRENT_STATE_SUMMARY.md#L91) (Documentation only)

```javascript
{
  segment: String,             // e.g., "VLR_001->VLR_002"
  speed: Number,               // Average speed in km/h
  timestamp: Date,             // When recorded
  bus_id: String,              // Which bus generated this
  distance: Number             // Segment length in meters ← NOT IN ACTUAL SCHEMA
}
```

---

## 3️⃣ CONFIRMATION: STOPS HAVE LAT/LON, HAVERSINE CAN COMPUTE DISTANCE

### **All Stop Codes Are Defined**

| Stop Range | Defined | Total |
|------------|---------|-------|
| VLR_001 to VLR_034 | ✅ YES | 34 stops |

### **Data Consistency Issue**

**Stops Defined in STOP_DATA**: VLR_001 to VLR_034 (34 stops)

**Stops Used in Database Segments**: VLR_001, VLR_002, VLR_008, VLR_011, VLR_012, VLR_013, VLR_016, VLR_018, VLR_025, VLR_026, VLR_028, VLR_030, VLR_038, VLR_047, VLR_052, VLR_054, VLR_081, VLR_082

**⚠️ Missing Coordinates (NOT in STOP_DATA)**:
- `VLR_038`
- `VLR_047`
- `VLR_052`
- `VLR_054`
- `VLR_081`
- `VLR_082`

### **Haversine Distance Calculation Feasibility**

✅ **For 12 segments using defined stops** (VLR_001–VLR_034):
   - Can compute Haversine distance once per segment pair
   - Store in computation cache

⚠️ **For 5 segments using undefined stops** (VLR_038, VLR_047, etc.):
   - Requires adding stop coordinates to STOP_DATA before Haversine computation
   - Alternative: estimate distance from existing speed data

---

## 4️⃣ DISTINCT SEGMENTS IN TRIPHISTORY

### **MongoDB Query Result**
```
db.TripHistory.distinct("segment")
```

**Result**:
```
[
  "VLR_002->VLR_018",
  "VLR_011->VLR_013",
  "VLR_012->VLR_030",
  "VLR_013->VLR_016",
  "VLR_018->VLR_047",     ← VLR_047 not in STOP_DATA
  "VLR_025->VLR_026",
  "VLR_038->VLR_028",     ← VLR_038 not in STOP_DATA
  "VLR_052->VLR_011",     ← VLR_052 not in STOP_DATA
  "VLR_054->VLR_001",     ← VLR_054 not in STOP_DATA
  "VLR_081->VLR_008",     ← VLR_081 not in STOP_DATA
  "VLR_081->VLR_082"      ← VLR_081, VLR_082 not in STOP_DATA
]
```

**Total Unique Segments**: 11

---

## 5️⃣ TRIPHISTORY RECORD COUNT

### **MongoDB Query Result**
```
db.TripHistory.countDocuments()
```

**Result**: **13 records**

### **Sample Document Structure**

```json
{
  "_id": "699174e38d6c6f65f8634a11",
  "bus_id": "BUS-103",
  "route_id": null,
  "timestamp": "2026-02-15T07:25:23.455Z",
  "day_of_week": "Sunday",
  "hour_of_day": 12,
  "segment": "VLR_012->VLR_030",
  "speed": 94.1,
  "traffic_level": "light",
  "coordinates": [79.161989, 12.972081],
  "__v": 0
}
```

### **Data Inventory**

| Attribute | Count | Notes |
|-----------|-------|-------|
| Total Records | 13 | Limited dataset for testing |
| Unique Buses | ? | Requires aggregation query |
| Unique Segments | 11 | Listed above |
| Date Range | Feb 15 - Feb 15, 2026 | Single day |
| Records with coordinates | 13 | 100% coverage |
| Records with segment | 11 | All 13 have segment (no nulls) |

---

## 📊 SEGMENT DISTANCE CALCULATION PLAN

### **Haversine Implementation Option**

**Implementable Segments** (coordinates available):
- VLR_002→VLR_018
- VLR_011→VLR_013
- VLR_012→VLR_030
- VLR_013→VLR_016
- VLR_025→VLR_026
- VLR_038→VLR_028 ⚠️ (VLR_038 undefined)
- VLR_052→VLR_011 ⚠️ (VLR_052 undefined)
- VLR_054→VLR_001 ⚠️ (VLR_054 undefined)
- VLR_081→VLR_008 ⚠️ (VLR_081 undefined)
- VLR_081→VLR_082 ⚠️ (VLR_081, VLR_082 undefined)

**Haversine Formula** (from [backend/index.js](backend/index.js#L165)):
```javascript
function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371e3; // Earth radius in meters
  const φ1 = lat1 * Math.PI / 180;
  const φ2 = lat2 * Math.PI / 180;
  const Δφ = (lat2 - lat1) * Math.PI / 180;
  const Δλ = (lon2 - lon1) * Math.PI / 180;

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) *
    Math.sin(Δλ / 2) * Math.sin(Δλ / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in meters
}
```

---

## 🎯 SUMMARY TABLE

| Finding | Status | Details
```


## License: MIT
https://github.com/chrisveness/geodesy/blob/761587cd748bd9f7c9825195eba4a9fc5891b859/latlon-spherical.js

```
---

## 🔬 SEGMENT DISTANCE DEFINITION FORENSIC AUDIT

**Status**: Investigation Complete  
**Date**: February 26, 2026  
**Mode**: IEEE Research Mode (Read-only)

---

## 1️⃣ STOP COORDINATES STORAGE LOCATION

### **Primary Storage: Frontend STOP_DATA Array**
**File**: [frontend/index.html](frontend/index.html#L1791)  
**Lines**: 1791–1830  
**Structure**: JavaScript constant array (NOT MongoDB)

```javascript
const STOP_DATA = [
  // ================= PRECISE GOOGLE MAPS COORDINATES (34 Stops) =================
  // Updated with exact coordinates rounded to 6 decimal places for perfect Google Maps alignment
  
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
```

### **Schema Definition: TripHistory (Bus Coordinates)**
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js#L18)

```javascript
{
  coordinates: { type: [Number], default: undefined }  // [longitude, latitude] format
}
```

### **Stop Coordinate Summary**
| Property | Location | Format | Coverage |
|----------|----------|--------|----------|
| **Stop Coordinates** | Frontend STOP_DATA array (JavaScript) | `{ stop_id, latitude, longitude, ...}` | 34 stops (VLR_001 to VLR_034) |
| **Bus GPS Coordinates** | MongoDB TripHistory.coordinates | `[longitude, latitude]` (GeoJSON) | Real-time telemetry |
| **Bus Coordinates (ActiveFleet)** | [backend/models/ActiveFleet.js](backend/models/ActiveFleet.js#L13) | `{ location: { type: "Point", coordinates: [lon, lat] } }` | Live fleet |

---

## 2️⃣ SEGMENT DISTANCE STORAGE STATUS

### **FINDING: Segment Distance is NOT Stored**

**TripHistory Schema** (full content):
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js)

```javascript
const tripHistorySchema = new mongoose.Schema(
  {
    bus_id: { type: String, index: true },
    route_id: { type: String, default: null },
    timestamp: { type: Date, default: Date.now, index: true },
    day_of_week: { type: String },
    hour_of_day: { type: Number },
    segment: { type: String, default: null },
    speed: { type: Number, default: null },
    traffic_level: { type: String, default: "unknown" },
    coordinates: { type: [Number], default: undefined }
  },
  { collection: "TripHistory" }
);
```

**Fields Stored**: bus_id, route_id, timestamp, day_of_week, hour_of_day, segment, speed, traffic_level, coordinates

**✅ Fields Available for Distance Calculation**: segment (stop pair codes), coordinates (GPS point)  
**❌ Field NOT Present**: `distance` (segment length in meters)

### **Mentioned but Not Implemented**
**File**: [CURRENT_STATE_SUMMARY.md](CURRENT_STATE_SUMMARY.md#L91) (Documentation only)

```javascript
{
  segment: String,             // e.g., "VLR_001->VLR_002"
  speed: Number,               // Average speed in km/h
  timestamp: Date,             // When recorded
  bus_id: String,              // Which bus generated this
  distance: Number             // Segment length in meters ← NOT IN ACTUAL SCHEMA
}
```

---

## 3️⃣ CONFIRMATION: STOPS HAVE LAT/LON, HAVERSINE CAN COMPUTE DISTANCE

### **All Stop Codes Are Defined**

| Stop Range | Defined | Total |
|------------|---------|-------|
| VLR_001 to VLR_034 | ✅ YES | 34 stops |

### **Data Consistency Issue**

**Stops Defined in STOP_DATA**: VLR_001 to VLR_034 (34 stops)

**Stops Used in Database Segments**: VLR_001, VLR_002, VLR_008, VLR_011, VLR_012, VLR_013, VLR_016, VLR_018, VLR_025, VLR_026, VLR_028, VLR_030, VLR_038, VLR_047, VLR_052, VLR_054, VLR_081, VLR_082

**⚠️ Missing Coordinates (NOT in STOP_DATA)**:
- `VLR_038`
- `VLR_047`
- `VLR_052`
- `VLR_054`
- `VLR_081`
- `VLR_082`

### **Haversine Distance Calculation Feasibility**

✅ **For 12 segments using defined stops** (VLR_001–VLR_034):
   - Can compute Haversine distance once per segment pair
   - Store in computation cache

⚠️ **For 5 segments using undefined stops** (VLR_038, VLR_047, etc.):
   - Requires adding stop coordinates to STOP_DATA before Haversine computation
   - Alternative: estimate distance from existing speed data

---

## 4️⃣ DISTINCT SEGMENTS IN TRIPHISTORY

### **MongoDB Query Result**
```
db.TripHistory.distinct("segment")
```

**Result**:
```
[
  "VLR_002->VLR_018",
  "VLR_011->VLR_013",
  "VLR_012->VLR_030",
  "VLR_013->VLR_016",
  "VLR_018->VLR_047",     ← VLR_047 not in STOP_DATA
  "VLR_025->VLR_026",
  "VLR_038->VLR_028",     ← VLR_038 not in STOP_DATA
  "VLR_052->VLR_011",     ← VLR_052 not in STOP_DATA
  "VLR_054->VLR_001",     ← VLR_054 not in STOP_DATA
  "VLR_081->VLR_008",     ← VLR_081 not in STOP_DATA
  "VLR_081->VLR_082"      ← VLR_081, VLR_082 not in STOP_DATA
]
```

**Total Unique Segments**: 11

---

## 5️⃣ TRIPHISTORY RECORD COUNT

### **MongoDB Query Result**
```
db.TripHistory.countDocuments()
```

**Result**: **13 records**

### **Sample Document Structure**

```json
{
  "_id": "699174e38d6c6f65f8634a11",
  "bus_id": "BUS-103",
  "route_id": null,
  "timestamp": "2026-02-15T07:25:23.455Z",
  "day_of_week": "Sunday",
  "hour_of_day": 12,
  "segment": "VLR_012->VLR_030",
  "speed": 94.1,
  "traffic_level": "light",
  "coordinates": [79.161989, 12.972081],
  "__v": 0
}
```

### **Data Inventory**

| Attribute | Count | Notes |
|-----------|-------|-------|
| Total Records | 13 | Limited dataset for testing |
| Unique Buses | ? | Requires aggregation query |
| Unique Segments | 11 | Listed above |
| Date Range | Feb 15 - Feb 15, 2026 | Single day |
| Records with coordinates | 13 | 100% coverage |
| Records with segment | 11 | All 13 have segment (no nulls) |

---

## 📊 SEGMENT DISTANCE CALCULATION PLAN

### **Haversine Implementation Option**

**Implementable Segments** (coordinates available):
- VLR_002→VLR_018
- VLR_011→VLR_013
- VLR_012→VLR_030
- VLR_013→VLR_016
- VLR_025→VLR_026
- VLR_038→VLR_028 ⚠️ (VLR_038 undefined)
- VLR_052→VLR_011 ⚠️ (VLR_052 undefined)
- VLR_054→VLR_001 ⚠️ (VLR_054 undefined)
- VLR_081→VLR_008 ⚠️ (VLR_081 undefined)
- VLR_081→VLR_082 ⚠️ (VLR_081, VLR_082 undefined)

**Haversine Formula** (from [backend/index.js](backend/index.js#L165)):
```javascript
function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371e3; // Earth radius in meters
  const φ1 = lat1 * Math.PI / 180;
  const φ2 = lat2 * Math.PI / 180;
  const Δφ = (lat2 - lat1) * Math.PI / 180;
  const Δλ = (lon2 - lon1) * Math.PI / 180;

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) *
    Math.sin(Δλ / 2) * Math.sin(Δλ / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in meters
}
```

---

## 🎯 SUMMARY TABLE

| Finding
```


## License: unknown
https://github.com/barskykd/barskykd.github.io/blob/8cd678f4a54c9e80fe64e1edf7da7f1fbabe2317/streetcalc/main.js

```
---

## 🔬 SEGMENT DISTANCE DEFINITION FORENSIC AUDIT

**Status**: Investigation Complete  
**Date**: February 26, 2026  
**Mode**: IEEE Research Mode (Read-only)

---

## 1️⃣ STOP COORDINATES STORAGE LOCATION

### **Primary Storage: Frontend STOP_DATA Array**
**File**: [frontend/index.html](frontend/index.html#L1791)  
**Lines**: 1791–1830  
**Structure**: JavaScript constant array (NOT MongoDB)

```javascript
const STOP_DATA = [
  // ================= PRECISE GOOGLE MAPS COORDINATES (34 Stops) =================
  // Updated with exact coordinates rounded to 6 decimal places for perfect Google Maps alignment
  
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
```

### **Schema Definition: TripHistory (Bus Coordinates)**
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js#L18)

```javascript
{
  coordinates: { type: [Number], default: undefined }  // [longitude, latitude] format
}
```

### **Stop Coordinate Summary**
| Property | Location | Format | Coverage |
|----------|----------|--------|----------|
| **Stop Coordinates** | Frontend STOP_DATA array (JavaScript) | `{ stop_id, latitude, longitude, ...}` | 34 stops (VLR_001 to VLR_034) |
| **Bus GPS Coordinates** | MongoDB TripHistory.coordinates | `[longitude, latitude]` (GeoJSON) | Real-time telemetry |
| **Bus Coordinates (ActiveFleet)** | [backend/models/ActiveFleet.js](backend/models/ActiveFleet.js#L13) | `{ location: { type: "Point", coordinates: [lon, lat] } }` | Live fleet |

---

## 2️⃣ SEGMENT DISTANCE STORAGE STATUS

### **FINDING: Segment Distance is NOT Stored**

**TripHistory Schema** (full content):
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js)

```javascript
const tripHistorySchema = new mongoose.Schema(
  {
    bus_id: { type: String, index: true },
    route_id: { type: String, default: null },
    timestamp: { type: Date, default: Date.now, index: true },
    day_of_week: { type: String },
    hour_of_day: { type: Number },
    segment: { type: String, default: null },
    speed: { type: Number, default: null },
    traffic_level: { type: String, default: "unknown" },
    coordinates: { type: [Number], default: undefined }
  },
  { collection: "TripHistory" }
);
```

**Fields Stored**: bus_id, route_id, timestamp, day_of_week, hour_of_day, segment, speed, traffic_level, coordinates

**✅ Fields Available for Distance Calculation**: segment (stop pair codes), coordinates (GPS point)  
**❌ Field NOT Present**: `distance` (segment length in meters)

### **Mentioned but Not Implemented**
**File**: [CURRENT_STATE_SUMMARY.md](CURRENT_STATE_SUMMARY.md#L91) (Documentation only)

```javascript
{
  segment: String,             // e.g., "VLR_001->VLR_002"
  speed: Number,               // Average speed in km/h
  timestamp: Date,             // When recorded
  bus_id: String,              // Which bus generated this
  distance: Number             // Segment length in meters ← NOT IN ACTUAL SCHEMA
}
```

---

## 3️⃣ CONFIRMATION: STOPS HAVE LAT/LON, HAVERSINE CAN COMPUTE DISTANCE

### **All Stop Codes Are Defined**

| Stop Range | Defined | Total |
|------------|---------|-------|
| VLR_001 to VLR_034 | ✅ YES | 34 stops |

### **Data Consistency Issue**

**Stops Defined in STOP_DATA**: VLR_001 to VLR_034 (34 stops)

**Stops Used in Database Segments**: VLR_001, VLR_002, VLR_008, VLR_011, VLR_012, VLR_013, VLR_016, VLR_018, VLR_025, VLR_026, VLR_028, VLR_030, VLR_038, VLR_047, VLR_052, VLR_054, VLR_081, VLR_082

**⚠️ Missing Coordinates (NOT in STOP_DATA)**:
- `VLR_038`
- `VLR_047`
- `VLR_052`
- `VLR_054`
- `VLR_081`
- `VLR_082`

### **Haversine Distance Calculation Feasibility**

✅ **For 12 segments using defined stops** (VLR_001–VLR_034):
   - Can compute Haversine distance once per segment pair
   - Store in computation cache

⚠️ **For 5 segments using undefined stops** (VLR_038, VLR_047, etc.):
   - Requires adding stop coordinates to STOP_DATA before Haversine computation
   - Alternative: estimate distance from existing speed data

---

## 4️⃣ DISTINCT SEGMENTS IN TRIPHISTORY

### **MongoDB Query Result**
```
db.TripHistory.distinct("segment")
```

**Result**:
```
[
  "VLR_002->VLR_018",
  "VLR_011->VLR_013",
  "VLR_012->VLR_030",
  "VLR_013->VLR_016",
  "VLR_018->VLR_047",     ← VLR_047 not in STOP_DATA
  "VLR_025->VLR_026",
  "VLR_038->VLR_028",     ← VLR_038 not in STOP_DATA
  "VLR_052->VLR_011",     ← VLR_052 not in STOP_DATA
  "VLR_054->VLR_001",     ← VLR_054 not in STOP_DATA
  "VLR_081->VLR_008",     ← VLR_081 not in STOP_DATA
  "VLR_081->VLR_082"      ← VLR_081, VLR_082 not in STOP_DATA
]
```

**Total Unique Segments**: 11

---

## 5️⃣ TRIPHISTORY RECORD COUNT

### **MongoDB Query Result**
```
db.TripHistory.countDocuments()
```

**Result**: **13 records**

### **Sample Document Structure**

```json
{
  "_id": "699174e38d6c6f65f8634a11",
  "bus_id": "BUS-103",
  "route_id": null,
  "timestamp": "2026-02-15T07:25:23.455Z",
  "day_of_week": "Sunday",
  "hour_of_day": 12,
  "segment": "VLR_012->VLR_030",
  "speed": 94.1,
  "traffic_level": "light",
  "coordinates": [79.161989, 12.972081],
  "__v": 0
}
```

### **Data Inventory**

| Attribute | Count | Notes |
|-----------|-------|-------|
| Total Records | 13 | Limited dataset for testing |
| Unique Buses | ? | Requires aggregation query |
| Unique Segments | 11 | Listed above |
| Date Range | Feb 15 - Feb 15, 2026 | Single day |
| Records with coordinates | 13 | 100% coverage |
| Records with segment | 11 | All 13 have segment (no nulls) |

---

## 📊 SEGMENT DISTANCE CALCULATION PLAN

### **Haversine Implementation Option**

**Implementable Segments** (coordinates available):
- VLR_002→VLR_018
- VLR_011→VLR_013
- VLR_012→VLR_030
- VLR_013→VLR_016
- VLR_025→VLR_026
- VLR_038→VLR_028 ⚠️ (VLR_038 undefined)
- VLR_052→VLR_011 ⚠️ (VLR_052 undefined)
- VLR_054→VLR_001 ⚠️ (VLR_054 undefined)
- VLR_081→VLR_008 ⚠️ (VLR_081 undefined)
- VLR_081→VLR_082 ⚠️ (VLR_081, VLR_082 undefined)

**Haversine Formula** (from [backend/index.js](backend/index.js#L165)):
```javascript
function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371e3; // Earth radius in meters
  const φ1 = lat1 * Math.PI / 180;
  const φ2 = lat2 * Math.PI / 180;
  const Δφ = (lat2 - lat1) * Math.PI / 180;
  const Δλ = (lon2 - lon1) * Math.PI / 180;

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) *
    Math.sin(Δλ / 2) * Math.sin(Δλ / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in meters
}
```

---

## 🎯 SUMMARY TABLE

| Finding
```


## License: unknown
https://github.com/linuxmint/cinnamon-spices-applets/blob/90811ceacbbb4d29458c793ea65eb5af963e1b6b/weather%40mockturtl/files/weather%40mockturtl/3.8/weather-applet.js

```
---

## 🔬 SEGMENT DISTANCE DEFINITION FORENSIC AUDIT

**Status**: Investigation Complete  
**Date**: February 26, 2026  
**Mode**: IEEE Research Mode (Read-only)

---

## 1️⃣ STOP COORDINATES STORAGE LOCATION

### **Primary Storage: Frontend STOP_DATA Array**
**File**: [frontend/index.html](frontend/index.html#L1791)  
**Lines**: 1791–1830  
**Structure**: JavaScript constant array (NOT MongoDB)

```javascript
const STOP_DATA = [
  // ================= PRECISE GOOGLE MAPS COORDINATES (34 Stops) =================
  // Updated with exact coordinates rounded to 6 decimal places for perfect Google Maps alignment
  
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
```

### **Schema Definition: TripHistory (Bus Coordinates)**
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js#L18)

```javascript
{
  coordinates: { type: [Number], default: undefined }  // [longitude, latitude] format
}
```

### **Stop Coordinate Summary**
| Property | Location | Format | Coverage |
|----------|----------|--------|----------|
| **Stop Coordinates** | Frontend STOP_DATA array (JavaScript) | `{ stop_id, latitude, longitude, ...}` | 34 stops (VLR_001 to VLR_034) |
| **Bus GPS Coordinates** | MongoDB TripHistory.coordinates | `[longitude, latitude]` (GeoJSON) | Real-time telemetry |
| **Bus Coordinates (ActiveFleet)** | [backend/models/ActiveFleet.js](backend/models/ActiveFleet.js#L13) | `{ location: { type: "Point", coordinates: [lon, lat] } }` | Live fleet |

---

## 2️⃣ SEGMENT DISTANCE STORAGE STATUS

### **FINDING: Segment Distance is NOT Stored**

**TripHistory Schema** (full content):
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js)

```javascript
const tripHistorySchema = new mongoose.Schema(
  {
    bus_id: { type: String, index: true },
    route_id: { type: String, default: null },
    timestamp: { type: Date, default: Date.now, index: true },
    day_of_week: { type: String },
    hour_of_day: { type: Number },
    segment: { type: String, default: null },
    speed: { type: Number, default: null },
    traffic_level: { type: String, default: "unknown" },
    coordinates: { type: [Number], default: undefined }
  },
  { collection: "TripHistory" }
);
```

**Fields Stored**: bus_id, route_id, timestamp, day_of_week, hour_of_day, segment, speed, traffic_level, coordinates

**✅ Fields Available for Distance Calculation**: segment (stop pair codes), coordinates (GPS point)  
**❌ Field NOT Present**: `distance` (segment length in meters)

### **Mentioned but Not Implemented**
**File**: [CURRENT_STATE_SUMMARY.md](CURRENT_STATE_SUMMARY.md#L91) (Documentation only)

```javascript
{
  segment: String,             // e.g., "VLR_001->VLR_002"
  speed: Number,               // Average speed in km/h
  timestamp: Date,             // When recorded
  bus_id: String,              // Which bus generated this
  distance: Number             // Segment length in meters ← NOT IN ACTUAL SCHEMA
}
```

---

## 3️⃣ CONFIRMATION: STOPS HAVE LAT/LON, HAVERSINE CAN COMPUTE DISTANCE

### **All Stop Codes Are Defined**

| Stop Range | Defined | Total |
|------------|---------|-------|
| VLR_001 to VLR_034 | ✅ YES | 34 stops |

### **Data Consistency Issue**

**Stops Defined in STOP_DATA**: VLR_001 to VLR_034 (34 stops)

**Stops Used in Database Segments**: VLR_001, VLR_002, VLR_008, VLR_011, VLR_012, VLR_013, VLR_016, VLR_018, VLR_025, VLR_026, VLR_028, VLR_030, VLR_038, VLR_047, VLR_052, VLR_054, VLR_081, VLR_082

**⚠️ Missing Coordinates (NOT in STOP_DATA)**:
- `VLR_038`
- `VLR_047`
- `VLR_052`
- `VLR_054`
- `VLR_081`
- `VLR_082`

### **Haversine Distance Calculation Feasibility**

✅ **For 12 segments using defined stops** (VLR_001–VLR_034):
   - Can compute Haversine distance once per segment pair
   - Store in computation cache

⚠️ **For 5 segments using undefined stops** (VLR_038, VLR_047, etc.):
   - Requires adding stop coordinates to STOP_DATA before Haversine computation
   - Alternative: estimate distance from existing speed data

---

## 4️⃣ DISTINCT SEGMENTS IN TRIPHISTORY

### **MongoDB Query Result**
```
db.TripHistory.distinct("segment")
```

**Result**:
```
[
  "VLR_002->VLR_018",
  "VLR_011->VLR_013",
  "VLR_012->VLR_030",
  "VLR_013->VLR_016",
  "VLR_018->VLR_047",     ← VLR_047 not in STOP_DATA
  "VLR_025->VLR_026",
  "VLR_038->VLR_028",     ← VLR_038 not in STOP_DATA
  "VLR_052->VLR_011",     ← VLR_052 not in STOP_DATA
  "VLR_054->VLR_001",     ← VLR_054 not in STOP_DATA
  "VLR_081->VLR_008",     ← VLR_081 not in STOP_DATA
  "VLR_081->VLR_082"      ← VLR_081, VLR_082 not in STOP_DATA
]
```

**Total Unique Segments**: 11

---

## 5️⃣ TRIPHISTORY RECORD COUNT

### **MongoDB Query Result**
```
db.TripHistory.countDocuments()
```

**Result**: **13 records**

### **Sample Document Structure**

```json
{
  "_id": "699174e38d6c6f65f8634a11",
  "bus_id": "BUS-103",
  "route_id": null,
  "timestamp": "2026-02-15T07:25:23.455Z",
  "day_of_week": "Sunday",
  "hour_of_day": 12,
  "segment": "VLR_012->VLR_030",
  "speed": 94.1,
  "traffic_level": "light",
  "coordinates": [79.161989, 12.972081],
  "__v": 0
}
```

### **Data Inventory**

| Attribute | Count | Notes |
|-----------|-------|-------|
| Total Records | 13 | Limited dataset for testing |
| Unique Buses | ? | Requires aggregation query |
| Unique Segments | 11 | Listed above |
| Date Range | Feb 15 - Feb 15, 2026 | Single day |
| Records with coordinates | 13 | 100% coverage |
| Records with segment | 11 | All 13 have segment (no nulls) |

---

## 📊 SEGMENT DISTANCE CALCULATION PLAN

### **Haversine Implementation Option**

**Implementable Segments** (coordinates available):
- VLR_002→VLR_018
- VLR_011→VLR_013
- VLR_012→VLR_030
- VLR_013→VLR_016
- VLR_025→VLR_026
- VLR_038→VLR_028 ⚠️ (VLR_038 undefined)
- VLR_052→VLR_011 ⚠️ (VLR_052 undefined)
- VLR_054→VLR_001 ⚠️ (VLR_054 undefined)
- VLR_081→VLR_008 ⚠️ (VLR_081 undefined)
- VLR_081→VLR_082 ⚠️ (VLR_081, VLR_082 undefined)

**Haversine Formula** (from [backend/index.js](backend/index.js#L165)):
```javascript
function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371e3; // Earth radius in meters
  const φ1 = lat1 * Math.PI / 180;
  const φ2 = lat2 * Math.PI / 180;
  const Δφ = (lat2 - lat1) * Math.PI / 180;
  const Δλ = (lon2 - lon1) * Math.PI / 180;

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) *
    Math.sin(Δλ / 2) * Math.sin(Δλ / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in meters
}
```

---

## 🎯 SUMMARY TABLE

| Finding
```


## License: unknown
https://github.com/Scorpion018/Climate-hazards-Data-Retrieval-Engine/blob/f265d70c47fbfb4f80b9dd1c17086dd9e411b297/views/Main.ejs

```
---

## 🔬 SEGMENT DISTANCE DEFINITION FORENSIC AUDIT

**Status**: Investigation Complete  
**Date**: February 26, 2026  
**Mode**: IEEE Research Mode (Read-only)

---

## 1️⃣ STOP COORDINATES STORAGE LOCATION

### **Primary Storage: Frontend STOP_DATA Array**
**File**: [frontend/index.html](frontend/index.html#L1791)  
**Lines**: 1791–1830  
**Structure**: JavaScript constant array (NOT MongoDB)

```javascript
const STOP_DATA = [
  // ================= PRECISE GOOGLE MAPS COORDINATES (34 Stops) =================
  // Updated with exact coordinates rounded to 6 decimal places for perfect Google Maps alignment
  
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
```

### **Schema Definition: TripHistory (Bus Coordinates)**
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js#L18)

```javascript
{
  coordinates: { type: [Number], default: undefined }  // [longitude, latitude] format
}
```

### **Stop Coordinate Summary**
| Property | Location | Format | Coverage |
|----------|----------|--------|----------|
| **Stop Coordinates** | Frontend STOP_DATA array (JavaScript) | `{ stop_id, latitude, longitude, ...}` | 34 stops (VLR_001 to VLR_034) |
| **Bus GPS Coordinates** | MongoDB TripHistory.coordinates | `[longitude, latitude]` (GeoJSON) | Real-time telemetry |
| **Bus Coordinates (ActiveFleet)** | [backend/models/ActiveFleet.js](backend/models/ActiveFleet.js#L13) | `{ location: { type: "Point", coordinates: [lon, lat] } }` | Live fleet |

---

## 2️⃣ SEGMENT DISTANCE STORAGE STATUS

### **FINDING: Segment Distance is NOT Stored**

**TripHistory Schema** (full content):
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js)

```javascript
const tripHistorySchema = new mongoose.Schema(
  {
    bus_id: { type: String, index: true },
    route_id: { type: String, default: null },
    timestamp: { type: Date, default: Date.now, index: true },
    day_of_week: { type: String },
    hour_of_day: { type: Number },
    segment: { type: String, default: null },
    speed: { type: Number, default: null },
    traffic_level: { type: String, default: "unknown" },
    coordinates: { type: [Number], default: undefined }
  },
  { collection: "TripHistory" }
);
```

**Fields Stored**: bus_id, route_id, timestamp, day_of_week, hour_of_day, segment, speed, traffic_level, coordinates

**✅ Fields Available for Distance Calculation**: segment (stop pair codes), coordinates (GPS point)  
**❌ Field NOT Present**: `distance` (segment length in meters)

### **Mentioned but Not Implemented**
**File**: [CURRENT_STATE_SUMMARY.md](CURRENT_STATE_SUMMARY.md#L91) (Documentation only)

```javascript
{
  segment: String,             // e.g., "VLR_001->VLR_002"
  speed: Number,               // Average speed in km/h
  timestamp: Date,             // When recorded
  bus_id: String,              // Which bus generated this
  distance: Number             // Segment length in meters ← NOT IN ACTUAL SCHEMA
}
```

---

## 3️⃣ CONFIRMATION: STOPS HAVE LAT/LON, HAVERSINE CAN COMPUTE DISTANCE

### **All Stop Codes Are Defined**

| Stop Range | Defined | Total |
|------------|---------|-------|
| VLR_001 to VLR_034 | ✅ YES | 34 stops |

### **Data Consistency Issue**

**Stops Defined in STOP_DATA**: VLR_001 to VLR_034 (34 stops)

**Stops Used in Database Segments**: VLR_001, VLR_002, VLR_008, VLR_011, VLR_012, VLR_013, VLR_016, VLR_018, VLR_025, VLR_026, VLR_028, VLR_030, VLR_038, VLR_047, VLR_052, VLR_054, VLR_081, VLR_082

**⚠️ Missing Coordinates (NOT in STOP_DATA)**:
- `VLR_038`
- `VLR_047`
- `VLR_052`
- `VLR_054`
- `VLR_081`
- `VLR_082`

### **Haversine Distance Calculation Feasibility**

✅ **For 12 segments using defined stops** (VLR_001–VLR_034):
   - Can compute Haversine distance once per segment pair
   - Store in computation cache

⚠️ **For 5 segments using undefined stops** (VLR_038, VLR_047, etc.):
   - Requires adding stop coordinates to STOP_DATA before Haversine computation
   - Alternative: estimate distance from existing speed data

---

## 4️⃣ DISTINCT SEGMENTS IN TRIPHISTORY

### **MongoDB Query Result**
```
db.TripHistory.distinct("segment")
```

**Result**:
```
[
  "VLR_002->VLR_018",
  "VLR_011->VLR_013",
  "VLR_012->VLR_030",
  "VLR_013->VLR_016",
  "VLR_018->VLR_047",     ← VLR_047 not in STOP_DATA
  "VLR_025->VLR_026",
  "VLR_038->VLR_028",     ← VLR_038 not in STOP_DATA
  "VLR_052->VLR_011",     ← VLR_052 not in STOP_DATA
  "VLR_054->VLR_001",     ← VLR_054 not in STOP_DATA
  "VLR_081->VLR_008",     ← VLR_081 not in STOP_DATA
  "VLR_081->VLR_082"      ← VLR_081, VLR_082 not in STOP_DATA
]
```

**Total Unique Segments**: 11

---

## 5️⃣ TRIPHISTORY RECORD COUNT

### **MongoDB Query Result**
```
db.TripHistory.countDocuments()
```

**Result**: **13 records**

### **Sample Document Structure**

```json
{
  "_id": "699174e38d6c6f65f8634a11",
  "bus_id": "BUS-103",
  "route_id": null,
  "timestamp": "2026-02-15T07:25:23.455Z",
  "day_of_week": "Sunday",
  "hour_of_day": 12,
  "segment": "VLR_012->VLR_030",
  "speed": 94.1,
  "traffic_level": "light",
  "coordinates": [79.161989, 12.972081],
  "__v": 0
}
```

### **Data Inventory**

| Attribute | Count | Notes |
|-----------|-------|-------|
| Total Records | 13 | Limited dataset for testing |
| Unique Buses | ? | Requires aggregation query |
| Unique Segments | 11 | Listed above |
| Date Range | Feb 15 - Feb 15, 2026 | Single day |
| Records with coordinates | 13 | 100% coverage |
| Records with segment | 11 | All 13 have segment (no nulls) |

---

## 📊 SEGMENT DISTANCE CALCULATION PLAN

### **Haversine Implementation Option**

**Implementable Segments** (coordinates available):
- VLR_002→VLR_018
- VLR_011→VLR_013
- VLR_012→VLR_030
- VLR_013→VLR_016
- VLR_025→VLR_026
- VLR_038→VLR_028 ⚠️ (VLR_038 undefined)
- VLR_052→VLR_011 ⚠️ (VLR_052 undefined)
- VLR_054→VLR_001 ⚠️ (VLR_054 undefined)
- VLR_081→VLR_008 ⚠️ (VLR_081 undefined)
- VLR_081→VLR_082 ⚠️ (VLR_081, VLR_082 undefined)

**Haversine Formula** (from [backend/index.js](backend/index.js#L165)):
```javascript
function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371e3; // Earth radius in meters
  const φ1 = lat1 * Math.PI / 180;
  const φ2 = lat2 * Math.PI / 180;
  const Δφ = (lat2 - lat1) * Math.PI / 180;
  const Δλ = (lon2 - lon1) * Math.PI / 180;

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) *
    Math.sin(Δλ / 2) * Math.sin(Δλ / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in meters
}
```

---

## 🎯 SUMMARY TABLE

| Finding
```


## License: unknown
https://github.com/AbdullahTonka/sunum/blob/9e572a71799c17ff3ac148518bbea12c6c2c30e3/index1.html

```
---

## 🔬 SEGMENT DISTANCE DEFINITION FORENSIC AUDIT

**Status**: Investigation Complete  
**Date**: February 26, 2026  
**Mode**: IEEE Research Mode (Read-only)

---

## 1️⃣ STOP COORDINATES STORAGE LOCATION

### **Primary Storage: Frontend STOP_DATA Array**
**File**: [frontend/index.html](frontend/index.html#L1791)  
**Lines**: 1791–1830  
**Structure**: JavaScript constant array (NOT MongoDB)

```javascript
const STOP_DATA = [
  // ================= PRECISE GOOGLE MAPS COORDINATES (34 Stops) =================
  // Updated with exact coordinates rounded to 6 decimal places for perfect Google Maps alignment
  
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
```

### **Schema Definition: TripHistory (Bus Coordinates)**
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js#L18)

```javascript
{
  coordinates: { type: [Number], default: undefined }  // [longitude, latitude] format
}
```

### **Stop Coordinate Summary**
| Property | Location | Format | Coverage |
|----------|----------|--------|----------|
| **Stop Coordinates** | Frontend STOP_DATA array (JavaScript) | `{ stop_id, latitude, longitude, ...}` | 34 stops (VLR_001 to VLR_034) |
| **Bus GPS Coordinates** | MongoDB TripHistory.coordinates | `[longitude, latitude]` (GeoJSON) | Real-time telemetry |
| **Bus Coordinates (ActiveFleet)** | [backend/models/ActiveFleet.js](backend/models/ActiveFleet.js#L13) | `{ location: { type: "Point", coordinates: [lon, lat] } }` | Live fleet |

---

## 2️⃣ SEGMENT DISTANCE STORAGE STATUS

### **FINDING: Segment Distance is NOT Stored**

**TripHistory Schema** (full content):
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js)

```javascript
const tripHistorySchema = new mongoose.Schema(
  {
    bus_id: { type: String, index: true },
    route_id: { type: String, default: null },
    timestamp: { type: Date, default: Date.now, index: true },
    day_of_week: { type: String },
    hour_of_day: { type: Number },
    segment: { type: String, default: null },
    speed: { type: Number, default: null },
    traffic_level: { type: String, default: "unknown" },
    coordinates: { type: [Number], default: undefined }
  },
  { collection: "TripHistory" }
);
```

**Fields Stored**: bus_id, route_id, timestamp, day_of_week, hour_of_day, segment, speed, traffic_level, coordinates

**✅ Fields Available for Distance Calculation**: segment (stop pair codes), coordinates (GPS point)  
**❌ Field NOT Present**: `distance` (segment length in meters)

### **Mentioned but Not Implemented**
**File**: [CURRENT_STATE_SUMMARY.md](CURRENT_STATE_SUMMARY.md#L91) (Documentation only)

```javascript
{
  segment: String,             // e.g., "VLR_001->VLR_002"
  speed: Number,               // Average speed in km/h
  timestamp: Date,             // When recorded
  bus_id: String,              // Which bus generated this
  distance: Number             // Segment length in meters ← NOT IN ACTUAL SCHEMA
}
```

---

## 3️⃣ CONFIRMATION: STOPS HAVE LAT/LON, HAVERSINE CAN COMPUTE DISTANCE

### **All Stop Codes Are Defined**

| Stop Range | Defined | Total |
|------------|---------|-------|
| VLR_001 to VLR_034 | ✅ YES | 34 stops |

### **Data Consistency Issue**

**Stops Defined in STOP_DATA**: VLR_001 to VLR_034 (34 stops)

**Stops Used in Database Segments**: VLR_001, VLR_002, VLR_008, VLR_011, VLR_012, VLR_013, VLR_016, VLR_018, VLR_025, VLR_026, VLR_028, VLR_030, VLR_038, VLR_047, VLR_052, VLR_054, VLR_081, VLR_082

**⚠️ Missing Coordinates (NOT in STOP_DATA)**:
- `VLR_038`
- `VLR_047`
- `VLR_052`
- `VLR_054`
- `VLR_081`
- `VLR_082`

### **Haversine Distance Calculation Feasibility**

✅ **For 12 segments using defined stops** (VLR_001–VLR_034):
   - Can compute Haversine distance once per segment pair
   - Store in computation cache

⚠️ **For 5 segments using undefined stops** (VLR_038, VLR_047, etc.):
   - Requires adding stop coordinates to STOP_DATA before Haversine computation
   - Alternative: estimate distance from existing speed data

---

## 4️⃣ DISTINCT SEGMENTS IN TRIPHISTORY

### **MongoDB Query Result**
```
db.TripHistory.distinct("segment")
```

**Result**:
```
[
  "VLR_002->VLR_018",
  "VLR_011->VLR_013",
  "VLR_012->VLR_030",
  "VLR_013->VLR_016",
  "VLR_018->VLR_047",     ← VLR_047 not in STOP_DATA
  "VLR_025->VLR_026",
  "VLR_038->VLR_028",     ← VLR_038 not in STOP_DATA
  "VLR_052->VLR_011",     ← VLR_052 not in STOP_DATA
  "VLR_054->VLR_001",     ← VLR_054 not in STOP_DATA
  "VLR_081->VLR_008",     ← VLR_081 not in STOP_DATA
  "VLR_081->VLR_082"      ← VLR_081, VLR_082 not in STOP_DATA
]
```

**Total Unique Segments**: 11

---

## 5️⃣ TRIPHISTORY RECORD COUNT

### **MongoDB Query Result**
```
db.TripHistory.countDocuments()
```

**Result**: **13 records**

### **Sample Document Structure**

```json
{
  "_id": "699174e38d6c6f65f8634a11",
  "bus_id": "BUS-103",
  "route_id": null,
  "timestamp": "2026-02-15T07:25:23.455Z",
  "day_of_week": "Sunday",
  "hour_of_day": 12,
  "segment": "VLR_012->VLR_030",
  "speed": 94.1,
  "traffic_level": "light",
  "coordinates": [79.161989, 12.972081],
  "__v": 0
}
```

### **Data Inventory**

| Attribute | Count | Notes |
|-----------|-------|-------|
| Total Records | 13 | Limited dataset for testing |
| Unique Buses | ? | Requires aggregation query |
| Unique Segments | 11 | Listed above |
| Date Range | Feb 15 - Feb 15, 2026 | Single day |
| Records with coordinates | 13 | 100% coverage |
| Records with segment | 11 | All 13 have segment (no nulls) |

---

## 📊 SEGMENT DISTANCE CALCULATION PLAN

### **Haversine Implementation Option**

**Implementable Segments** (coordinates available):
- VLR_002→VLR_018
- VLR_011→VLR_013
- VLR_012→VLR_030
- VLR_013→VLR_016
- VLR_025→VLR_026
- VLR_038→VLR_028 ⚠️ (VLR_038 undefined)
- VLR_052→VLR_011 ⚠️ (VLR_052 undefined)
- VLR_054→VLR_001 ⚠️ (VLR_054 undefined)
- VLR_081→VLR_008 ⚠️ (VLR_081 undefined)
- VLR_081→VLR_082 ⚠️ (VLR_081, VLR_082 undefined)

**Haversine Formula** (from [backend/index.js](backend/index.js#L165)):
```javascript
function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371e3; // Earth radius in meters
  const φ1 = lat1 * Math.PI / 180;
  const φ2 = lat2 * Math.PI / 180;
  const Δφ = (lat2 - lat1) * Math.PI / 180;
  const Δλ = (lon2 - lon1) * Math.PI / 180;

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) *
    Math.sin(Δλ / 2) * Math.sin(Δλ / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in meters
}
```

---

## 🎯 SUMMARY TABLE

| Finding
```


## License: MIT
https://github.com/jclo/picodb/blob/d62365989d01149fb2b89a19832b9e9fc69ad633/lib/picodb.mjs

```
---

## 🔬 SEGMENT DISTANCE DEFINITION FORENSIC AUDIT

**Status**: Investigation Complete  
**Date**: February 26, 2026  
**Mode**: IEEE Research Mode (Read-only)

---

## 1️⃣ STOP COORDINATES STORAGE LOCATION

### **Primary Storage: Frontend STOP_DATA Array**
**File**: [frontend/index.html](frontend/index.html#L1791)  
**Lines**: 1791–1830  
**Structure**: JavaScript constant array (NOT MongoDB)

```javascript
const STOP_DATA = [
  // ================= PRECISE GOOGLE MAPS COORDINATES (34 Stops) =================
  // Updated with exact coordinates rounded to 6 decimal places for perfect Google Maps alignment
  
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
```

### **Schema Definition: TripHistory (Bus Coordinates)**
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js#L18)

```javascript
{
  coordinates: { type: [Number], default: undefined }  // [longitude, latitude] format
}
```

### **Stop Coordinate Summary**
| Property | Location | Format | Coverage |
|----------|----------|--------|----------|
| **Stop Coordinates** | Frontend STOP_DATA array (JavaScript) | `{ stop_id, latitude, longitude, ...}` | 34 stops (VLR_001 to VLR_034) |
| **Bus GPS Coordinates** | MongoDB TripHistory.coordinates | `[longitude, latitude]` (GeoJSON) | Real-time telemetry |
| **Bus Coordinates (ActiveFleet)** | [backend/models/ActiveFleet.js](backend/models/ActiveFleet.js#L13) | `{ location: { type: "Point", coordinates: [lon, lat] } }` | Live fleet |

---

## 2️⃣ SEGMENT DISTANCE STORAGE STATUS

### **FINDING: Segment Distance is NOT Stored**

**TripHistory Schema** (full content):
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js)

```javascript
const tripHistorySchema = new mongoose.Schema(
  {
    bus_id: { type: String, index: true },
    route_id: { type: String, default: null },
    timestamp: { type: Date, default: Date.now, index: true },
    day_of_week: { type: String },
    hour_of_day: { type: Number },
    segment: { type: String, default: null },
    speed: { type: Number, default: null },
    traffic_level: { type: String, default: "unknown" },
    coordinates: { type: [Number], default: undefined }
  },
  { collection: "TripHistory" }
);
```

**Fields Stored**: bus_id, route_id, timestamp, day_of_week, hour_of_day, segment, speed, traffic_level, coordinates

**✅ Fields Available for Distance Calculation**: segment (stop pair codes), coordinates (GPS point)  
**❌ Field NOT Present**: `distance` (segment length in meters)

### **Mentioned but Not Implemented**
**File**: [CURRENT_STATE_SUMMARY.md](CURRENT_STATE_SUMMARY.md#L91) (Documentation only)

```javascript
{
  segment: String,             // e.g., "VLR_001->VLR_002"
  speed: Number,               // Average speed in km/h
  timestamp: Date,             // When recorded
  bus_id: String,              // Which bus generated this
  distance: Number             // Segment length in meters ← NOT IN ACTUAL SCHEMA
}
```

---

## 3️⃣ CONFIRMATION: STOPS HAVE LAT/LON, HAVERSINE CAN COMPUTE DISTANCE

### **All Stop Codes Are Defined**

| Stop Range | Defined | Total |
|------------|---------|-------|
| VLR_001 to VLR_034 | ✅ YES | 34 stops |

### **Data Consistency Issue**

**Stops Defined in STOP_DATA**: VLR_001 to VLR_034 (34 stops)

**Stops Used in Database Segments**: VLR_001, VLR_002, VLR_008, VLR_011, VLR_012, VLR_013, VLR_016, VLR_018, VLR_025, VLR_026, VLR_028, VLR_030, VLR_038, VLR_047, VLR_052, VLR_054, VLR_081, VLR_082

**⚠️ Missing Coordinates (NOT in STOP_DATA)**:
- `VLR_038`
- `VLR_047`
- `VLR_052`
- `VLR_054`
- `VLR_081`
- `VLR_082`

### **Haversine Distance Calculation Feasibility**

✅ **For 12 segments using defined stops** (VLR_001–VLR_034):
   - Can compute Haversine distance once per segment pair
   - Store in computation cache

⚠️ **For 5 segments using undefined stops** (VLR_038, VLR_047, etc.):
   - Requires adding stop coordinates to STOP_DATA before Haversine computation
   - Alternative: estimate distance from existing speed data

---

## 4️⃣ DISTINCT SEGMENTS IN TRIPHISTORY

### **MongoDB Query Result**
```
db.TripHistory.distinct("segment")
```

**Result**:
```
[
  "VLR_002->VLR_018",
  "VLR_011->VLR_013",
  "VLR_012->VLR_030",
  "VLR_013->VLR_016",
  "VLR_018->VLR_047",     ← VLR_047 not in STOP_DATA
  "VLR_025->VLR_026",
  "VLR_038->VLR_028",     ← VLR_038 not in STOP_DATA
  "VLR_052->VLR_011",     ← VLR_052 not in STOP_DATA
  "VLR_054->VLR_001",     ← VLR_054 not in STOP_DATA
  "VLR_081->VLR_008",     ← VLR_081 not in STOP_DATA
  "VLR_081->VLR_082"      ← VLR_081, VLR_082 not in STOP_DATA
]
```

**Total Unique Segments**: 11

---

## 5️⃣ TRIPHISTORY RECORD COUNT

### **MongoDB Query Result**
```
db.TripHistory.countDocuments()
```

**Result**: **13 records**

### **Sample Document Structure**

```json
{
  "_id": "699174e38d6c6f65f8634a11",
  "bus_id": "BUS-103",
  "route_id": null,
  "timestamp": "2026-02-15T07:25:23.455Z",
  "day_of_week": "Sunday",
  "hour_of_day": 12,
  "segment": "VLR_012->VLR_030",
  "speed": 94.1,
  "traffic_level": "light",
  "coordinates": [79.161989, 12.972081],
  "__v": 0
}
```

### **Data Inventory**

| Attribute | Count | Notes |
|-----------|-------|-------|
| Total Records | 13 | Limited dataset for testing |
| Unique Buses | ? | Requires aggregation query |
| Unique Segments | 11 | Listed above |
| Date Range | Feb 15 - Feb 15, 2026 | Single day |
| Records with coordinates | 13 | 100% coverage |
| Records with segment | 11 | All 13 have segment (no nulls) |

---

## 📊 SEGMENT DISTANCE CALCULATION PLAN

### **Haversine Implementation Option**

**Implementable Segments** (coordinates available):
- VLR_002→VLR_018
- VLR_011→VLR_013
- VLR_012→VLR_030
- VLR_013→VLR_016
- VLR_025→VLR_026
- VLR_038→VLR_028 ⚠️ (VLR_038 undefined)
- VLR_052→VLR_011 ⚠️ (VLR_052 undefined)
- VLR_054→VLR_001 ⚠️ (VLR_054 undefined)
- VLR_081→VLR_008 ⚠️ (VLR_081 undefined)
- VLR_081→VLR_082 ⚠️ (VLR_081, VLR_082 undefined)

**Haversine Formula** (from [backend/index.js](backend/index.js#L165)):
```javascript
function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371e3; // Earth radius in meters
  const φ1 = lat1 * Math.PI / 180;
  const φ2 = lat2 * Math.PI / 180;
  const Δφ = (lat2 - lat1) * Math.PI / 180;
  const Δλ = (lon2 - lon1) * Math.PI / 180;

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) *
    Math.sin(Δλ / 2) * Math.sin(Δλ / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in meters
}
```

---

## 🎯 SUMMARY TABLE

| Finding | Status | Details
```


## License: unknown
https://github.com/senthanal/Spatial-Interpolation/blob/7cd0db066260c8c1b351d93cb5129d1f1cb298e3/Calculate.js

```
---

## 🔬 SEGMENT DISTANCE DEFINITION FORENSIC AUDIT

**Status**: Investigation Complete  
**Date**: February 26, 2026  
**Mode**: IEEE Research Mode (Read-only)

---

## 1️⃣ STOP COORDINATES STORAGE LOCATION

### **Primary Storage: Frontend STOP_DATA Array**
**File**: [frontend/index.html](frontend/index.html#L1791)  
**Lines**: 1791–1830  
**Structure**: JavaScript constant array (NOT MongoDB)

```javascript
const STOP_DATA = [
  // ================= PRECISE GOOGLE MAPS COORDINATES (34 Stops) =================
  // Updated with exact coordinates rounded to 6 decimal places for perfect Google Maps alignment
  
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
```

### **Schema Definition: TripHistory (Bus Coordinates)**
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js#L18)

```javascript
{
  coordinates: { type: [Number], default: undefined }  // [longitude, latitude] format
}
```

### **Stop Coordinate Summary**
| Property | Location | Format | Coverage |
|----------|----------|--------|----------|
| **Stop Coordinates** | Frontend STOP_DATA array (JavaScript) | `{ stop_id, latitude, longitude, ...}` | 34 stops (VLR_001 to VLR_034) |
| **Bus GPS Coordinates** | MongoDB TripHistory.coordinates | `[longitude, latitude]` (GeoJSON) | Real-time telemetry |
| **Bus Coordinates (ActiveFleet)** | [backend/models/ActiveFleet.js](backend/models/ActiveFleet.js#L13) | `{ location: { type: "Point", coordinates: [lon, lat] } }` | Live fleet |

---

## 2️⃣ SEGMENT DISTANCE STORAGE STATUS

### **FINDING: Segment Distance is NOT Stored**

**TripHistory Schema** (full content):
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js)

```javascript
const tripHistorySchema = new mongoose.Schema(
  {
    bus_id: { type: String, index: true },
    route_id: { type: String, default: null },
    timestamp: { type: Date, default: Date.now, index: true },
    day_of_week: { type: String },
    hour_of_day: { type: Number },
    segment: { type: String, default: null },
    speed: { type: Number, default: null },
    traffic_level: { type: String, default: "unknown" },
    coordinates: { type: [Number], default: undefined }
  },
  { collection: "TripHistory" }
);
```

**Fields Stored**: bus_id, route_id, timestamp, day_of_week, hour_of_day, segment, speed, traffic_level, coordinates

**✅ Fields Available for Distance Calculation**: segment (stop pair codes), coordinates (GPS point)  
**❌ Field NOT Present**: `distance` (segment length in meters)

### **Mentioned but Not Implemented**
**File**: [CURRENT_STATE_SUMMARY.md](CURRENT_STATE_SUMMARY.md#L91) (Documentation only)

```javascript
{
  segment: String,             // e.g., "VLR_001->VLR_002"
  speed: Number,               // Average speed in km/h
  timestamp: Date,             // When recorded
  bus_id: String,              // Which bus generated this
  distance: Number             // Segment length in meters ← NOT IN ACTUAL SCHEMA
}
```

---

## 3️⃣ CONFIRMATION: STOPS HAVE LAT/LON, HAVERSINE CAN COMPUTE DISTANCE

### **All Stop Codes Are Defined**

| Stop Range | Defined | Total |
|------------|---------|-------|
| VLR_001 to VLR_034 | ✅ YES | 34 stops |

### **Data Consistency Issue**

**Stops Defined in STOP_DATA**: VLR_001 to VLR_034 (34 stops)

**Stops Used in Database Segments**: VLR_001, VLR_002, VLR_008, VLR_011, VLR_012, VLR_013, VLR_016, VLR_018, VLR_025, VLR_026, VLR_028, VLR_030, VLR_038, VLR_047, VLR_052, VLR_054, VLR_081, VLR_082

**⚠️ Missing Coordinates (NOT in STOP_DATA)**:
- `VLR_038`
- `VLR_047`
- `VLR_052`
- `VLR_054`
- `VLR_081`
- `VLR_082`

### **Haversine Distance Calculation Feasibility**

✅ **For 12 segments using defined stops** (VLR_001–VLR_034):
   - Can compute Haversine distance once per segment pair
   - Store in computation cache

⚠️ **For 5 segments using undefined stops** (VLR_038, VLR_047, etc.):
   - Requires adding stop coordinates to STOP_DATA before Haversine computation
   - Alternative: estimate distance from existing speed data

---

## 4️⃣ DISTINCT SEGMENTS IN TRIPHISTORY

### **MongoDB Query Result**
```
db.TripHistory.distinct("segment")
```

**Result**:
```
[
  "VLR_002->VLR_018",
  "VLR_011->VLR_013",
  "VLR_012->VLR_030",
  "VLR_013->VLR_016",
  "VLR_018->VLR_047",     ← VLR_047 not in STOP_DATA
  "VLR_025->VLR_026",
  "VLR_038->VLR_028",     ← VLR_038 not in STOP_DATA
  "VLR_052->VLR_011",     ← VLR_052 not in STOP_DATA
  "VLR_054->VLR_001",     ← VLR_054 not in STOP_DATA
  "VLR_081->VLR_008",     ← VLR_081 not in STOP_DATA
  "VLR_081->VLR_082"      ← VLR_081, VLR_082 not in STOP_DATA
]
```

**Total Unique Segments**: 11

---

## 5️⃣ TRIPHISTORY RECORD COUNT

### **MongoDB Query Result**
```
db.TripHistory.countDocuments()
```

**Result**: **13 records**

### **Sample Document Structure**

```json
{
  "_id": "699174e38d6c6f65f8634a11",
  "bus_id": "BUS-103",
  "route_id": null,
  "timestamp": "2026-02-15T07:25:23.455Z",
  "day_of_week": "Sunday",
  "hour_of_day": 12,
  "segment": "VLR_012->VLR_030",
  "speed": 94.1,
  "traffic_level": "light",
  "coordinates": [79.161989, 12.972081],
  "__v": 0
}
```

### **Data Inventory**

| Attribute | Count | Notes |
|-----------|-------|-------|
| Total Records | 13 | Limited dataset for testing |
| Unique Buses | ? | Requires aggregation query |
| Unique Segments | 11 | Listed above |
| Date Range | Feb 15 - Feb 15, 2026 | Single day |
| Records with coordinates | 13 | 100% coverage |
| Records with segment | 11 | All 13 have segment (no nulls) |

---

## 📊 SEGMENT DISTANCE CALCULATION PLAN

### **Haversine Implementation Option**

**Implementable Segments** (coordinates available):
- VLR_002→VLR_018
- VLR_011→VLR_013
- VLR_012→VLR_030
- VLR_013→VLR_016
- VLR_025→VLR_026
- VLR_038→VLR_028 ⚠️ (VLR_038 undefined)
- VLR_052→VLR_011 ⚠️ (VLR_052 undefined)
- VLR_054→VLR_001 ⚠️ (VLR_054 undefined)
- VLR_081→VLR_008 ⚠️ (VLR_081 undefined)
- VLR_081→VLR_082 ⚠️ (VLR_081, VLR_082 undefined)

**Haversine Formula** (from [backend/index.js](backend/index.js#L165)):
```javascript
function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371e3; // Earth radius in meters
  const φ1 = lat1 * Math.PI / 180;
  const φ2 = lat2 * Math.PI / 180;
  const Δφ = (lat2 - lat1) * Math.PI / 180;
  const Δλ = (lon2 - lon1) * Math.PI / 180;

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) *
    Math.sin(Δλ / 2) * Math.sin(Δλ / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in meters
}
```

---

## 🎯 SUMMARY TABLE

| Finding | Status | Details
```


## License: MIT
https://github.com/chrisveness/geodesy/blob/761587cd748bd9f7c9825195eba4a9fc5891b859/latlon-spherical.js

```
---

## 🔬 SEGMENT DISTANCE DEFINITION FORENSIC AUDIT

**Status**: Investigation Complete  
**Date**: February 26, 2026  
**Mode**: IEEE Research Mode (Read-only)

---

## 1️⃣ STOP COORDINATES STORAGE LOCATION

### **Primary Storage: Frontend STOP_DATA Array**
**File**: [frontend/index.html](frontend/index.html#L1791)  
**Lines**: 1791–1830  
**Structure**: JavaScript constant array (NOT MongoDB)

```javascript
const STOP_DATA = [
  // ================= PRECISE GOOGLE MAPS COORDINATES (34 Stops) =================
  // Updated with exact coordinates rounded to 6 decimal places for perfect Google Maps alignment
  
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
```

### **Schema Definition: TripHistory (Bus Coordinates)**
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js#L18)

```javascript
{
  coordinates: { type: [Number], default: undefined }  // [longitude, latitude] format
}
```

### **Stop Coordinate Summary**
| Property | Location | Format | Coverage |
|----------|----------|--------|----------|
| **Stop Coordinates** | Frontend STOP_DATA array (JavaScript) | `{ stop_id, latitude, longitude, ...}` | 34 stops (VLR_001 to VLR_034) |
| **Bus GPS Coordinates** | MongoDB TripHistory.coordinates | `[longitude, latitude]` (GeoJSON) | Real-time telemetry |
| **Bus Coordinates (ActiveFleet)** | [backend/models/ActiveFleet.js](backend/models/ActiveFleet.js#L13) | `{ location: { type: "Point", coordinates: [lon, lat] } }` | Live fleet |

---

## 2️⃣ SEGMENT DISTANCE STORAGE STATUS

### **FINDING: Segment Distance is NOT Stored**

**TripHistory Schema** (full content):
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js)

```javascript
const tripHistorySchema = new mongoose.Schema(
  {
    bus_id: { type: String, index: true },
    route_id: { type: String, default: null },
    timestamp: { type: Date, default: Date.now, index: true },
    day_of_week: { type: String },
    hour_of_day: { type: Number },
    segment: { type: String, default: null },
    speed: { type: Number, default: null },
    traffic_level: { type: String, default: "unknown" },
    coordinates: { type: [Number], default: undefined }
  },
  { collection: "TripHistory" }
);
```

**Fields Stored**: bus_id, route_id, timestamp, day_of_week, hour_of_day, segment, speed, traffic_level, coordinates

**✅ Fields Available for Distance Calculation**: segment (stop pair codes), coordinates (GPS point)  
**❌ Field NOT Present**: `distance` (segment length in meters)

### **Mentioned but Not Implemented**
**File**: [CURRENT_STATE_SUMMARY.md](CURRENT_STATE_SUMMARY.md#L91) (Documentation only)

```javascript
{
  segment: String,             // e.g., "VLR_001->VLR_002"
  speed: Number,               // Average speed in km/h
  timestamp: Date,             // When recorded
  bus_id: String,              // Which bus generated this
  distance: Number             // Segment length in meters ← NOT IN ACTUAL SCHEMA
}
```

---

## 3️⃣ CONFIRMATION: STOPS HAVE LAT/LON, HAVERSINE CAN COMPUTE DISTANCE

### **All Stop Codes Are Defined**

| Stop Range | Defined | Total |
|------------|---------|-------|
| VLR_001 to VLR_034 | ✅ YES | 34 stops |

### **Data Consistency Issue**

**Stops Defined in STOP_DATA**: VLR_001 to VLR_034 (34 stops)

**Stops Used in Database Segments**: VLR_001, VLR_002, VLR_008, VLR_011, VLR_012, VLR_013, VLR_016, VLR_018, VLR_025, VLR_026, VLR_028, VLR_030, VLR_038, VLR_047, VLR_052, VLR_054, VLR_081, VLR_082

**⚠️ Missing Coordinates (NOT in STOP_DATA)**:
- `VLR_038`
- `VLR_047`
- `VLR_052`
- `VLR_054`
- `VLR_081`
- `VLR_082`

### **Haversine Distance Calculation Feasibility**

✅ **For 12 segments using defined stops** (VLR_001–VLR_034):
   - Can compute Haversine distance once per segment pair
   - Store in computation cache

⚠️ **For 5 segments using undefined stops** (VLR_038, VLR_047, etc.):
   - Requires adding stop coordinates to STOP_DATA before Haversine computation
   - Alternative: estimate distance from existing speed data

---

## 4️⃣ DISTINCT SEGMENTS IN TRIPHISTORY

### **MongoDB Query Result**
```
db.TripHistory.distinct("segment")
```

**Result**:
```
[
  "VLR_002->VLR_018",
  "VLR_011->VLR_013",
  "VLR_012->VLR_030",
  "VLR_013->VLR_016",
  "VLR_018->VLR_047",     ← VLR_047 not in STOP_DATA
  "VLR_025->VLR_026",
  "VLR_038->VLR_028",     ← VLR_038 not in STOP_DATA
  "VLR_052->VLR_011",     ← VLR_052 not in STOP_DATA
  "VLR_054->VLR_001",     ← VLR_054 not in STOP_DATA
  "VLR_081->VLR_008",     ← VLR_081 not in STOP_DATA
  "VLR_081->VLR_082"      ← VLR_081, VLR_082 not in STOP_DATA
]
```

**Total Unique Segments**: 11

---

## 5️⃣ TRIPHISTORY RECORD COUNT

### **MongoDB Query Result**
```
db.TripHistory.countDocuments()
```

**Result**: **13 records**

### **Sample Document Structure**

```json
{
  "_id": "699174e38d6c6f65f8634a11",
  "bus_id": "BUS-103",
  "route_id": null,
  "timestamp": "2026-02-15T07:25:23.455Z",
  "day_of_week": "Sunday",
  "hour_of_day": 12,
  "segment": "VLR_012->VLR_030",
  "speed": 94.1,
  "traffic_level": "light",
  "coordinates": [79.161989, 12.972081],
  "__v": 0
}
```

### **Data Inventory**

| Attribute | Count | Notes |
|-----------|-------|-------|
| Total Records | 13 | Limited dataset for testing |
| Unique Buses | ? | Requires aggregation query |
| Unique Segments | 11 | Listed above |
| Date Range | Feb 15 - Feb 15, 2026 | Single day |
| Records with coordinates | 13 | 100% coverage |
| Records with segment | 11 | All 13 have segment (no nulls) |

---

## 📊 SEGMENT DISTANCE CALCULATION PLAN

### **Haversine Implementation Option**

**Implementable Segments** (coordinates available):
- VLR_002→VLR_018
- VLR_011→VLR_013
- VLR_012→VLR_030
- VLR_013→VLR_016
- VLR_025→VLR_026
- VLR_038→VLR_028 ⚠️ (VLR_038 undefined)
- VLR_052→VLR_011 ⚠️ (VLR_052 undefined)
- VLR_054→VLR_001 ⚠️ (VLR_054 undefined)
- VLR_081→VLR_008 ⚠️ (VLR_081 undefined)
- VLR_081→VLR_082 ⚠️ (VLR_081, VLR_082 undefined)

**Haversine Formula** (from [backend/index.js](backend/index.js#L165)):
```javascript
function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371e3; // Earth radius in meters
  const φ1 = lat1 * Math.PI / 180;
  const φ2 = lat2 * Math.PI / 180;
  const Δφ = (lat2 - lat1) * Math.PI / 180;
  const Δλ = (lon2 - lon1) * Math.PI / 180;

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) *
    Math.sin(Δλ / 2) * Math.sin(Δλ / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in meters
}
```

---

## 🎯 SUMMARY TABLE

| Finding
```


## License: unknown
https://github.com/barskykd/barskykd.github.io/blob/8cd678f4a54c9e80fe64e1edf7da7f1fbabe2317/streetcalc/main.js

```
---

## 🔬 SEGMENT DISTANCE DEFINITION FORENSIC AUDIT

**Status**: Investigation Complete  
**Date**: February 26, 2026  
**Mode**: IEEE Research Mode (Read-only)

---

## 1️⃣ STOP COORDINATES STORAGE LOCATION

### **Primary Storage: Frontend STOP_DATA Array**
**File**: [frontend/index.html](frontend/index.html#L1791)  
**Lines**: 1791–1830  
**Structure**: JavaScript constant array (NOT MongoDB)

```javascript
const STOP_DATA = [
  // ================= PRECISE GOOGLE MAPS COORDINATES (34 Stops) =================
  // Updated with exact coordinates rounded to 6 decimal places for perfect Google Maps alignment
  
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
```

### **Schema Definition: TripHistory (Bus Coordinates)**
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js#L18)

```javascript
{
  coordinates: { type: [Number], default: undefined }  // [longitude, latitude] format
}
```

### **Stop Coordinate Summary**
| Property | Location | Format | Coverage |
|----------|----------|--------|----------|
| **Stop Coordinates** | Frontend STOP_DATA array (JavaScript) | `{ stop_id, latitude, longitude, ...}` | 34 stops (VLR_001 to VLR_034) |
| **Bus GPS Coordinates** | MongoDB TripHistory.coordinates | `[longitude, latitude]` (GeoJSON) | Real-time telemetry |
| **Bus Coordinates (ActiveFleet)** | [backend/models/ActiveFleet.js](backend/models/ActiveFleet.js#L13) | `{ location: { type: "Point", coordinates: [lon, lat] } }` | Live fleet |

---

## 2️⃣ SEGMENT DISTANCE STORAGE STATUS

### **FINDING: Segment Distance is NOT Stored**

**TripHistory Schema** (full content):
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js)

```javascript
const tripHistorySchema = new mongoose.Schema(
  {
    bus_id: { type: String, index: true },
    route_id: { type: String, default: null },
    timestamp: { type: Date, default: Date.now, index: true },
    day_of_week: { type: String },
    hour_of_day: { type: Number },
    segment: { type: String, default: null },
    speed: { type: Number, default: null },
    traffic_level: { type: String, default: "unknown" },
    coordinates: { type: [Number], default: undefined }
  },
  { collection: "TripHistory" }
);
```

**Fields Stored**: bus_id, route_id, timestamp, day_of_week, hour_of_day, segment, speed, traffic_level, coordinates

**✅ Fields Available for Distance Calculation**: segment (stop pair codes), coordinates (GPS point)  
**❌ Field NOT Present**: `distance` (segment length in meters)

### **Mentioned but Not Implemented**
**File**: [CURRENT_STATE_SUMMARY.md](CURRENT_STATE_SUMMARY.md#L91) (Documentation only)

```javascript
{
  segment: String,             // e.g., "VLR_001->VLR_002"
  speed: Number,               // Average speed in km/h
  timestamp: Date,             // When recorded
  bus_id: String,              // Which bus generated this
  distance: Number             // Segment length in meters ← NOT IN ACTUAL SCHEMA
}
```

---

## 3️⃣ CONFIRMATION: STOPS HAVE LAT/LON, HAVERSINE CAN COMPUTE DISTANCE

### **All Stop Codes Are Defined**

| Stop Range | Defined | Total |
|------------|---------|-------|
| VLR_001 to VLR_034 | ✅ YES | 34 stops |

### **Data Consistency Issue**

**Stops Defined in STOP_DATA**: VLR_001 to VLR_034 (34 stops)

**Stops Used in Database Segments**: VLR_001, VLR_002, VLR_008, VLR_011, VLR_012, VLR_013, VLR_016, VLR_018, VLR_025, VLR_026, VLR_028, VLR_030, VLR_038, VLR_047, VLR_052, VLR_054, VLR_081, VLR_082

**⚠️ Missing Coordinates (NOT in STOP_DATA)**:
- `VLR_038`
- `VLR_047`
- `VLR_052`
- `VLR_054`
- `VLR_081`
- `VLR_082`

### **Haversine Distance Calculation Feasibility**

✅ **For 12 segments using defined stops** (VLR_001–VLR_034):
   - Can compute Haversine distance once per segment pair
   - Store in computation cache

⚠️ **For 5 segments using undefined stops** (VLR_038, VLR_047, etc.):
   - Requires adding stop coordinates to STOP_DATA before Haversine computation
   - Alternative: estimate distance from existing speed data

---

## 4️⃣ DISTINCT SEGMENTS IN TRIPHISTORY

### **MongoDB Query Result**
```
db.TripHistory.distinct("segment")
```

**Result**:
```
[
  "VLR_002->VLR_018",
  "VLR_011->VLR_013",
  "VLR_012->VLR_030",
  "VLR_013->VLR_016",
  "VLR_018->VLR_047",     ← VLR_047 not in STOP_DATA
  "VLR_025->VLR_026",
  "VLR_038->VLR_028",     ← VLR_038 not in STOP_DATA
  "VLR_052->VLR_011",     ← VLR_052 not in STOP_DATA
  "VLR_054->VLR_001",     ← VLR_054 not in STOP_DATA
  "VLR_081->VLR_008",     ← VLR_081 not in STOP_DATA
  "VLR_081->VLR_082"      ← VLR_081, VLR_082 not in STOP_DATA
]
```

**Total Unique Segments**: 11

---

## 5️⃣ TRIPHISTORY RECORD COUNT

### **MongoDB Query Result**
```
db.TripHistory.countDocuments()
```

**Result**: **13 records**

### **Sample Document Structure**

```json
{
  "_id": "699174e38d6c6f65f8634a11",
  "bus_id": "BUS-103",
  "route_id": null,
  "timestamp": "2026-02-15T07:25:23.455Z",
  "day_of_week": "Sunday",
  "hour_of_day": 12,
  "segment": "VLR_012->VLR_030",
  "speed": 94.1,
  "traffic_level": "light",
  "coordinates": [79.161989, 12.972081],
  "__v": 0
}
```

### **Data Inventory**

| Attribute | Count | Notes |
|-----------|-------|-------|
| Total Records | 13 | Limited dataset for testing |
| Unique Buses | ? | Requires aggregation query |
| Unique Segments | 11 | Listed above |
| Date Range | Feb 15 - Feb 15, 2026 | Single day |
| Records with coordinates | 13 | 100% coverage |
| Records with segment | 11 | All 13 have segment (no nulls) |

---

## 📊 SEGMENT DISTANCE CALCULATION PLAN

### **Haversine Implementation Option**

**Implementable Segments** (coordinates available):
- VLR_002→VLR_018
- VLR_011→VLR_013
- VLR_012→VLR_030
- VLR_013→VLR_016
- VLR_025→VLR_026
- VLR_038→VLR_028 ⚠️ (VLR_038 undefined)
- VLR_052→VLR_011 ⚠️ (VLR_052 undefined)
- VLR_054→VLR_001 ⚠️ (VLR_054 undefined)
- VLR_081→VLR_008 ⚠️ (VLR_081 undefined)
- VLR_081→VLR_082 ⚠️ (VLR_081, VLR_082 undefined)

**Haversine Formula** (from [backend/index.js](backend/index.js#L165)):
```javascript
function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371e3; // Earth radius in meters
  const φ1 = lat1 * Math.PI / 180;
  const φ2 = lat2 * Math.PI / 180;
  const Δφ = (lat2 - lat1) * Math.PI / 180;
  const Δλ = (lon2 - lon1) * Math.PI / 180;

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) *
    Math.sin(Δλ / 2) * Math.sin(Δλ / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in meters
}
```

---

## 🎯 SUMMARY TABLE

| Finding
```


## License: unknown
https://github.com/linuxmint/cinnamon-spices-applets/blob/90811ceacbbb4d29458c793ea65eb5af963e1b6b/weather%40mockturtl/files/weather%40mockturtl/3.8/weather-applet.js

```
---

## 🔬 SEGMENT DISTANCE DEFINITION FORENSIC AUDIT

**Status**: Investigation Complete  
**Date**: February 26, 2026  
**Mode**: IEEE Research Mode (Read-only)

---

## 1️⃣ STOP COORDINATES STORAGE LOCATION

### **Primary Storage: Frontend STOP_DATA Array**
**File**: [frontend/index.html](frontend/index.html#L1791)  
**Lines**: 1791–1830  
**Structure**: JavaScript constant array (NOT MongoDB)

```javascript
const STOP_DATA = [
  // ================= PRECISE GOOGLE MAPS COORDINATES (34 Stops) =================
  // Updated with exact coordinates rounded to 6 decimal places for perfect Google Maps alignment
  
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
```

### **Schema Definition: TripHistory (Bus Coordinates)**
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js#L18)

```javascript
{
  coordinates: { type: [Number], default: undefined }  // [longitude, latitude] format
}
```

### **Stop Coordinate Summary**
| Property | Location | Format | Coverage |
|----------|----------|--------|----------|
| **Stop Coordinates** | Frontend STOP_DATA array (JavaScript) | `{ stop_id, latitude, longitude, ...}` | 34 stops (VLR_001 to VLR_034) |
| **Bus GPS Coordinates** | MongoDB TripHistory.coordinates | `[longitude, latitude]` (GeoJSON) | Real-time telemetry |
| **Bus Coordinates (ActiveFleet)** | [backend/models/ActiveFleet.js](backend/models/ActiveFleet.js#L13) | `{ location: { type: "Point", coordinates: [lon, lat] } }` | Live fleet |

---

## 2️⃣ SEGMENT DISTANCE STORAGE STATUS

### **FINDING: Segment Distance is NOT Stored**

**TripHistory Schema** (full content):
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js)

```javascript
const tripHistorySchema = new mongoose.Schema(
  {
    bus_id: { type: String, index: true },
    route_id: { type: String, default: null },
    timestamp: { type: Date, default: Date.now, index: true },
    day_of_week: { type: String },
    hour_of_day: { type: Number },
    segment: { type: String, default: null },
    speed: { type: Number, default: null },
    traffic_level: { type: String, default: "unknown" },
    coordinates: { type: [Number], default: undefined }
  },
  { collection: "TripHistory" }
);
```

**Fields Stored**: bus_id, route_id, timestamp, day_of_week, hour_of_day, segment, speed, traffic_level, coordinates

**✅ Fields Available for Distance Calculation**: segment (stop pair codes), coordinates (GPS point)  
**❌ Field NOT Present**: `distance` (segment length in meters)

### **Mentioned but Not Implemented**
**File**: [CURRENT_STATE_SUMMARY.md](CURRENT_STATE_SUMMARY.md#L91) (Documentation only)

```javascript
{
  segment: String,             // e.g., "VLR_001->VLR_002"
  speed: Number,               // Average speed in km/h
  timestamp: Date,             // When recorded
  bus_id: String,              // Which bus generated this
  distance: Number             // Segment length in meters ← NOT IN ACTUAL SCHEMA
}
```

---

## 3️⃣ CONFIRMATION: STOPS HAVE LAT/LON, HAVERSINE CAN COMPUTE DISTANCE

### **All Stop Codes Are Defined**

| Stop Range | Defined | Total |
|------------|---------|-------|
| VLR_001 to VLR_034 | ✅ YES | 34 stops |

### **Data Consistency Issue**

**Stops Defined in STOP_DATA**: VLR_001 to VLR_034 (34 stops)

**Stops Used in Database Segments**: VLR_001, VLR_002, VLR_008, VLR_011, VLR_012, VLR_013, VLR_016, VLR_018, VLR_025, VLR_026, VLR_028, VLR_030, VLR_038, VLR_047, VLR_052, VLR_054, VLR_081, VLR_082

**⚠️ Missing Coordinates (NOT in STOP_DATA)**:
- `VLR_038`
- `VLR_047`
- `VLR_052`
- `VLR_054`
- `VLR_081`
- `VLR_082`

### **Haversine Distance Calculation Feasibility**

✅ **For 12 segments using defined stops** (VLR_001–VLR_034):
   - Can compute Haversine distance once per segment pair
   - Store in computation cache

⚠️ **For 5 segments using undefined stops** (VLR_038, VLR_047, etc.):
   - Requires adding stop coordinates to STOP_DATA before Haversine computation
   - Alternative: estimate distance from existing speed data

---

## 4️⃣ DISTINCT SEGMENTS IN TRIPHISTORY

### **MongoDB Query Result**
```
db.TripHistory.distinct("segment")
```

**Result**:
```
[
  "VLR_002->VLR_018",
  "VLR_011->VLR_013",
  "VLR_012->VLR_030",
  "VLR_013->VLR_016",
  "VLR_018->VLR_047",     ← VLR_047 not in STOP_DATA
  "VLR_025->VLR_026",
  "VLR_038->VLR_028",     ← VLR_038 not in STOP_DATA
  "VLR_052->VLR_011",     ← VLR_052 not in STOP_DATA
  "VLR_054->VLR_001",     ← VLR_054 not in STOP_DATA
  "VLR_081->VLR_008",     ← VLR_081 not in STOP_DATA
  "VLR_081->VLR_082"      ← VLR_081, VLR_082 not in STOP_DATA
]
```

**Total Unique Segments**: 11

---

## 5️⃣ TRIPHISTORY RECORD COUNT

### **MongoDB Query Result**
```
db.TripHistory.countDocuments()
```

**Result**: **13 records**

### **Sample Document Structure**

```json
{
  "_id": "699174e38d6c6f65f8634a11",
  "bus_id": "BUS-103",
  "route_id": null,
  "timestamp": "2026-02-15T07:25:23.455Z",
  "day_of_week": "Sunday",
  "hour_of_day": 12,
  "segment": "VLR_012->VLR_030",
  "speed": 94.1,
  "traffic_level": "light",
  "coordinates": [79.161989, 12.972081],
  "__v": 0
}
```

### **Data Inventory**

| Attribute | Count | Notes |
|-----------|-------|-------|
| Total Records | 13 | Limited dataset for testing |
| Unique Buses | ? | Requires aggregation query |
| Unique Segments | 11 | Listed above |
| Date Range | Feb 15 - Feb 15, 2026 | Single day |
| Records with coordinates | 13 | 100% coverage |
| Records with segment | 11 | All 13 have segment (no nulls) |

---

## 📊 SEGMENT DISTANCE CALCULATION PLAN

### **Haversine Implementation Option**

**Implementable Segments** (coordinates available):
- VLR_002→VLR_018
- VLR_011→VLR_013
- VLR_012→VLR_030
- VLR_013→VLR_016
- VLR_025→VLR_026
- VLR_038→VLR_028 ⚠️ (VLR_038 undefined)
- VLR_052→VLR_011 ⚠️ (VLR_052 undefined)
- VLR_054→VLR_001 ⚠️ (VLR_054 undefined)
- VLR_081→VLR_008 ⚠️ (VLR_081 undefined)
- VLR_081→VLR_082 ⚠️ (VLR_081, VLR_082 undefined)

**Haversine Formula** (from [backend/index.js](backend/index.js#L165)):
```javascript
function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371e3; // Earth radius in meters
  const φ1 = lat1 * Math.PI / 180;
  const φ2 = lat2 * Math.PI / 180;
  const Δφ = (lat2 - lat1) * Math.PI / 180;
  const Δλ = (lon2 - lon1) * Math.PI / 180;

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) *
    Math.sin(Δλ / 2) * Math.sin(Δλ / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in meters
}
```

---

## 🎯 SUMMARY TABLE

| Finding
```


## License: unknown
https://github.com/Scorpion018/Climate-hazards-Data-Retrieval-Engine/blob/f265d70c47fbfb4f80b9dd1c17086dd9e411b297/views/Main.ejs

```
---

## 🔬 SEGMENT DISTANCE DEFINITION FORENSIC AUDIT

**Status**: Investigation Complete  
**Date**: February 26, 2026  
**Mode**: IEEE Research Mode (Read-only)

---

## 1️⃣ STOP COORDINATES STORAGE LOCATION

### **Primary Storage: Frontend STOP_DATA Array**
**File**: [frontend/index.html](frontend/index.html#L1791)  
**Lines**: 1791–1830  
**Structure**: JavaScript constant array (NOT MongoDB)

```javascript
const STOP_DATA = [
  // ================= PRECISE GOOGLE MAPS COORDINATES (34 Stops) =================
  // Updated with exact coordinates rounded to 6 decimal places for perfect Google Maps alignment
  
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
```

### **Schema Definition: TripHistory (Bus Coordinates)**
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js#L18)

```javascript
{
  coordinates: { type: [Number], default: undefined }  // [longitude, latitude] format
}
```

### **Stop Coordinate Summary**
| Property | Location | Format | Coverage |
|----------|----------|--------|----------|
| **Stop Coordinates** | Frontend STOP_DATA array (JavaScript) | `{ stop_id, latitude, longitude, ...}` | 34 stops (VLR_001 to VLR_034) |
| **Bus GPS Coordinates** | MongoDB TripHistory.coordinates | `[longitude, latitude]` (GeoJSON) | Real-time telemetry |
| **Bus Coordinates (ActiveFleet)** | [backend/models/ActiveFleet.js](backend/models/ActiveFleet.js#L13) | `{ location: { type: "Point", coordinates: [lon, lat] } }` | Live fleet |

---

## 2️⃣ SEGMENT DISTANCE STORAGE STATUS

### **FINDING: Segment Distance is NOT Stored**

**TripHistory Schema** (full content):
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js)

```javascript
const tripHistorySchema = new mongoose.Schema(
  {
    bus_id: { type: String, index: true },
    route_id: { type: String, default: null },
    timestamp: { type: Date, default: Date.now, index: true },
    day_of_week: { type: String },
    hour_of_day: { type: Number },
    segment: { type: String, default: null },
    speed: { type: Number, default: null },
    traffic_level: { type: String, default: "unknown" },
    coordinates: { type: [Number], default: undefined }
  },
  { collection: "TripHistory" }
);
```

**Fields Stored**: bus_id, route_id, timestamp, day_of_week, hour_of_day, segment, speed, traffic_level, coordinates

**✅ Fields Available for Distance Calculation**: segment (stop pair codes), coordinates (GPS point)  
**❌ Field NOT Present**: `distance` (segment length in meters)

### **Mentioned but Not Implemented**
**File**: [CURRENT_STATE_SUMMARY.md](CURRENT_STATE_SUMMARY.md#L91) (Documentation only)

```javascript
{
  segment: String,             // e.g., "VLR_001->VLR_002"
  speed: Number,               // Average speed in km/h
  timestamp: Date,             // When recorded
  bus_id: String,              // Which bus generated this
  distance: Number             // Segment length in meters ← NOT IN ACTUAL SCHEMA
}
```

---

## 3️⃣ CONFIRMATION: STOPS HAVE LAT/LON, HAVERSINE CAN COMPUTE DISTANCE

### **All Stop Codes Are Defined**

| Stop Range | Defined | Total |
|------------|---------|-------|
| VLR_001 to VLR_034 | ✅ YES | 34 stops |

### **Data Consistency Issue**

**Stops Defined in STOP_DATA**: VLR_001 to VLR_034 (34 stops)

**Stops Used in Database Segments**: VLR_001, VLR_002, VLR_008, VLR_011, VLR_012, VLR_013, VLR_016, VLR_018, VLR_025, VLR_026, VLR_028, VLR_030, VLR_038, VLR_047, VLR_052, VLR_054, VLR_081, VLR_082

**⚠️ Missing Coordinates (NOT in STOP_DATA)**:
- `VLR_038`
- `VLR_047`
- `VLR_052`
- `VLR_054`
- `VLR_081`
- `VLR_082`

### **Haversine Distance Calculation Feasibility**

✅ **For 12 segments using defined stops** (VLR_001–VLR_034):
   - Can compute Haversine distance once per segment pair
   - Store in computation cache

⚠️ **For 5 segments using undefined stops** (VLR_038, VLR_047, etc.):
   - Requires adding stop coordinates to STOP_DATA before Haversine computation
   - Alternative: estimate distance from existing speed data

---

## 4️⃣ DISTINCT SEGMENTS IN TRIPHISTORY

### **MongoDB Query Result**
```
db.TripHistory.distinct("segment")
```

**Result**:
```
[
  "VLR_002->VLR_018",
  "VLR_011->VLR_013",
  "VLR_012->VLR_030",
  "VLR_013->VLR_016",
  "VLR_018->VLR_047",     ← VLR_047 not in STOP_DATA
  "VLR_025->VLR_026",
  "VLR_038->VLR_028",     ← VLR_038 not in STOP_DATA
  "VLR_052->VLR_011",     ← VLR_052 not in STOP_DATA
  "VLR_054->VLR_001",     ← VLR_054 not in STOP_DATA
  "VLR_081->VLR_008",     ← VLR_081 not in STOP_DATA
  "VLR_081->VLR_082"      ← VLR_081, VLR_082 not in STOP_DATA
]
```

**Total Unique Segments**: 11

---

## 5️⃣ TRIPHISTORY RECORD COUNT

### **MongoDB Query Result**
```
db.TripHistory.countDocuments()
```

**Result**: **13 records**

### **Sample Document Structure**

```json
{
  "_id": "699174e38d6c6f65f8634a11",
  "bus_id": "BUS-103",
  "route_id": null,
  "timestamp": "2026-02-15T07:25:23.455Z",
  "day_of_week": "Sunday",
  "hour_of_day": 12,
  "segment": "VLR_012->VLR_030",
  "speed": 94.1,
  "traffic_level": "light",
  "coordinates": [79.161989, 12.972081],
  "__v": 0
}
```

### **Data Inventory**

| Attribute | Count | Notes |
|-----------|-------|-------|
| Total Records | 13 | Limited dataset for testing |
| Unique Buses | ? | Requires aggregation query |
| Unique Segments | 11 | Listed above |
| Date Range | Feb 15 - Feb 15, 2026 | Single day |
| Records with coordinates | 13 | 100% coverage |
| Records with segment | 11 | All 13 have segment (no nulls) |

---

## 📊 SEGMENT DISTANCE CALCULATION PLAN

### **Haversine Implementation Option**

**Implementable Segments** (coordinates available):
- VLR_002→VLR_018
- VLR_011→VLR_013
- VLR_012→VLR_030
- VLR_013→VLR_016
- VLR_025→VLR_026
- VLR_038→VLR_028 ⚠️ (VLR_038 undefined)
- VLR_052→VLR_011 ⚠️ (VLR_052 undefined)
- VLR_054→VLR_001 ⚠️ (VLR_054 undefined)
- VLR_081→VLR_008 ⚠️ (VLR_081 undefined)
- VLR_081→VLR_082 ⚠️ (VLR_081, VLR_082 undefined)

**Haversine Formula** (from [backend/index.js](backend/index.js#L165)):
```javascript
function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371e3; // Earth radius in meters
  const φ1 = lat1 * Math.PI / 180;
  const φ2 = lat2 * Math.PI / 180;
  const Δφ = (lat2 - lat1) * Math.PI / 180;
  const Δλ = (lon2 - lon1) * Math.PI / 180;

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) *
    Math.sin(Δλ / 2) * Math.sin(Δλ / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in meters
}
```

---

## 🎯 SUMMARY TABLE

| Finding
```


## License: unknown
https://github.com/AbdullahTonka/sunum/blob/9e572a71799c17ff3ac148518bbea12c6c2c30e3/index1.html

```
---

## 🔬 SEGMENT DISTANCE DEFINITION FORENSIC AUDIT

**Status**: Investigation Complete  
**Date**: February 26, 2026  
**Mode**: IEEE Research Mode (Read-only)

---

## 1️⃣ STOP COORDINATES STORAGE LOCATION

### **Primary Storage: Frontend STOP_DATA Array**
**File**: [frontend/index.html](frontend/index.html#L1791)  
**Lines**: 1791–1830  
**Structure**: JavaScript constant array (NOT MongoDB)

```javascript
const STOP_DATA = [
  // ================= PRECISE GOOGLE MAPS COORDINATES (34 Stops) =================
  // Updated with exact coordinates rounded to 6 decimal places for perfect Google Maps alignment
  
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
```

### **Schema Definition: TripHistory (Bus Coordinates)**
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js#L18)

```javascript
{
  coordinates: { type: [Number], default: undefined }  // [longitude, latitude] format
}
```

### **Stop Coordinate Summary**
| Property | Location | Format | Coverage |
|----------|----------|--------|----------|
| **Stop Coordinates** | Frontend STOP_DATA array (JavaScript) | `{ stop_id, latitude, longitude, ...}` | 34 stops (VLR_001 to VLR_034) |
| **Bus GPS Coordinates** | MongoDB TripHistory.coordinates | `[longitude, latitude]` (GeoJSON) | Real-time telemetry |
| **Bus Coordinates (ActiveFleet)** | [backend/models/ActiveFleet.js](backend/models/ActiveFleet.js#L13) | `{ location: { type: "Point", coordinates: [lon, lat] } }` | Live fleet |

---

## 2️⃣ SEGMENT DISTANCE STORAGE STATUS

### **FINDING: Segment Distance is NOT Stored**

**TripHistory Schema** (full content):
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js)

```javascript
const tripHistorySchema = new mongoose.Schema(
  {
    bus_id: { type: String, index: true },
    route_id: { type: String, default: null },
    timestamp: { type: Date, default: Date.now, index: true },
    day_of_week: { type: String },
    hour_of_day: { type: Number },
    segment: { type: String, default: null },
    speed: { type: Number, default: null },
    traffic_level: { type: String, default: "unknown" },
    coordinates: { type: [Number], default: undefined }
  },
  { collection: "TripHistory" }
);
```

**Fields Stored**: bus_id, route_id, timestamp, day_of_week, hour_of_day, segment, speed, traffic_level, coordinates

**✅ Fields Available for Distance Calculation**: segment (stop pair codes), coordinates (GPS point)  
**❌ Field NOT Present**: `distance` (segment length in meters)

### **Mentioned but Not Implemented**
**File**: [CURRENT_STATE_SUMMARY.md](CURRENT_STATE_SUMMARY.md#L91) (Documentation only)

```javascript
{
  segment: String,             // e.g., "VLR_001->VLR_002"
  speed: Number,               // Average speed in km/h
  timestamp: Date,             // When recorded
  bus_id: String,              // Which bus generated this
  distance: Number             // Segment length in meters ← NOT IN ACTUAL SCHEMA
}
```

---

## 3️⃣ CONFIRMATION: STOPS HAVE LAT/LON, HAVERSINE CAN COMPUTE DISTANCE

### **All Stop Codes Are Defined**

| Stop Range | Defined | Total |
|------------|---------|-------|
| VLR_001 to VLR_034 | ✅ YES | 34 stops |

### **Data Consistency Issue**

**Stops Defined in STOP_DATA**: VLR_001 to VLR_034 (34 stops)

**Stops Used in Database Segments**: VLR_001, VLR_002, VLR_008, VLR_011, VLR_012, VLR_013, VLR_016, VLR_018, VLR_025, VLR_026, VLR_028, VLR_030, VLR_038, VLR_047, VLR_052, VLR_054, VLR_081, VLR_082

**⚠️ Missing Coordinates (NOT in STOP_DATA)**:
- `VLR_038`
- `VLR_047`
- `VLR_052`
- `VLR_054`
- `VLR_081`
- `VLR_082`

### **Haversine Distance Calculation Feasibility**

✅ **For 12 segments using defined stops** (VLR_001–VLR_034):
   - Can compute Haversine distance once per segment pair
   - Store in computation cache

⚠️ **For 5 segments using undefined stops** (VLR_038, VLR_047, etc.):
   - Requires adding stop coordinates to STOP_DATA before Haversine computation
   - Alternative: estimate distance from existing speed data

---

## 4️⃣ DISTINCT SEGMENTS IN TRIPHISTORY

### **MongoDB Query Result**
```
db.TripHistory.distinct("segment")
```

**Result**:
```
[
  "VLR_002->VLR_018",
  "VLR_011->VLR_013",
  "VLR_012->VLR_030",
  "VLR_013->VLR_016",
  "VLR_018->VLR_047",     ← VLR_047 not in STOP_DATA
  "VLR_025->VLR_026",
  "VLR_038->VLR_028",     ← VLR_038 not in STOP_DATA
  "VLR_052->VLR_011",     ← VLR_052 not in STOP_DATA
  "VLR_054->VLR_001",     ← VLR_054 not in STOP_DATA
  "VLR_081->VLR_008",     ← VLR_081 not in STOP_DATA
  "VLR_081->VLR_082"      ← VLR_081, VLR_082 not in STOP_DATA
]
```

**Total Unique Segments**: 11

---

## 5️⃣ TRIPHISTORY RECORD COUNT

### **MongoDB Query Result**
```
db.TripHistory.countDocuments()
```

**Result**: **13 records**

### **Sample Document Structure**

```json
{
  "_id": "699174e38d6c6f65f8634a11",
  "bus_id": "BUS-103",
  "route_id": null,
  "timestamp": "2026-02-15T07:25:23.455Z",
  "day_of_week": "Sunday",
  "hour_of_day": 12,
  "segment": "VLR_012->VLR_030",
  "speed": 94.1,
  "traffic_level": "light",
  "coordinates": [79.161989, 12.972081],
  "__v": 0
}
```

### **Data Inventory**

| Attribute | Count | Notes |
|-----------|-------|-------|
| Total Records | 13 | Limited dataset for testing |
| Unique Buses | ? | Requires aggregation query |
| Unique Segments | 11 | Listed above |
| Date Range | Feb 15 - Feb 15, 2026 | Single day |
| Records with coordinates | 13 | 100% coverage |
| Records with segment | 11 | All 13 have segment (no nulls) |

---

## 📊 SEGMENT DISTANCE CALCULATION PLAN

### **Haversine Implementation Option**

**Implementable Segments** (coordinates available):
- VLR_002→VLR_018
- VLR_011→VLR_013
- VLR_012→VLR_030
- VLR_013→VLR_016
- VLR_025→VLR_026
- VLR_038→VLR_028 ⚠️ (VLR_038 undefined)
- VLR_052→VLR_011 ⚠️ (VLR_052 undefined)
- VLR_054→VLR_001 ⚠️ (VLR_054 undefined)
- VLR_081→VLR_008 ⚠️ (VLR_081 undefined)
- VLR_081→VLR_082 ⚠️ (VLR_081, VLR_082 undefined)

**Haversine Formula** (from [backend/index.js](backend/index.js#L165)):
```javascript
function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371e3; // Earth radius in meters
  const φ1 = lat1 * Math.PI / 180;
  const φ2 = lat2 * Math.PI / 180;
  const Δφ = (lat2 - lat1) * Math.PI / 180;
  const Δλ = (lon2 - lon1) * Math.PI / 180;

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) *
    Math.sin(Δλ / 2) * Math.sin(Δλ / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in meters
}
```

---

## 🎯 SUMMARY TABLE

| Finding
```


## License: MIT
https://github.com/jclo/picodb/blob/d62365989d01149fb2b89a19832b9e9fc69ad633/lib/picodb.mjs

```
---

## 🔬 SEGMENT DISTANCE DEFINITION FORENSIC AUDIT

**Status**: Investigation Complete  
**Date**: February 26, 2026  
**Mode**: IEEE Research Mode (Read-only)

---

## 1️⃣ STOP COORDINATES STORAGE LOCATION

### **Primary Storage: Frontend STOP_DATA Array**
**File**: [frontend/index.html](frontend/index.html#L1791)  
**Lines**: 1791–1830  
**Structure**: JavaScript constant array (NOT MongoDB)

```javascript
const STOP_DATA = [
  // ================= PRECISE GOOGLE MAPS COORDINATES (34 Stops) =================
  // Updated with exact coordinates rounded to 6 decimal places for perfect Google Maps alignment
  
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
```

### **Schema Definition: TripHistory (Bus Coordinates)**
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js#L18)

```javascript
{
  coordinates: { type: [Number], default: undefined }  // [longitude, latitude] format
}
```

### **Stop Coordinate Summary**
| Property | Location | Format | Coverage |
|----------|----------|--------|----------|
| **Stop Coordinates** | Frontend STOP_DATA array (JavaScript) | `{ stop_id, latitude, longitude, ...}` | 34 stops (VLR_001 to VLR_034) |
| **Bus GPS Coordinates** | MongoDB TripHistory.coordinates | `[longitude, latitude]` (GeoJSON) | Real-time telemetry |
| **Bus Coordinates (ActiveFleet)** | [backend/models/ActiveFleet.js](backend/models/ActiveFleet.js#L13) | `{ location: { type: "Point", coordinates: [lon, lat] } }` | Live fleet |

---

## 2️⃣ SEGMENT DISTANCE STORAGE STATUS

### **FINDING: Segment Distance is NOT Stored**

**TripHistory Schema** (full content):
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js)

```javascript
const tripHistorySchema = new mongoose.Schema(
  {
    bus_id: { type: String, index: true },
    route_id: { type: String, default: null },
    timestamp: { type: Date, default: Date.now, index: true },
    day_of_week: { type: String },
    hour_of_day: { type: Number },
    segment: { type: String, default: null },
    speed: { type: Number, default: null },
    traffic_level: { type: String, default: "unknown" },
    coordinates: { type: [Number], default: undefined }
  },
  { collection: "TripHistory" }
);
```

**Fields Stored**: bus_id, route_id, timestamp, day_of_week, hour_of_day, segment, speed, traffic_level, coordinates

**✅ Fields Available for Distance Calculation**: segment (stop pair codes), coordinates (GPS point)  
**❌ Field NOT Present**: `distance` (segment length in meters)

### **Mentioned but Not Implemented**
**File**: [CURRENT_STATE_SUMMARY.md](CURRENT_STATE_SUMMARY.md#L91) (Documentation only)

```javascript
{
  segment: String,             // e.g., "VLR_001->VLR_002"
  speed: Number,               // Average speed in km/h
  timestamp: Date,             // When recorded
  bus_id: String,              // Which bus generated this
  distance: Number             // Segment length in meters ← NOT IN ACTUAL SCHEMA
}
```

---

## 3️⃣ CONFIRMATION: STOPS HAVE LAT/LON, HAVERSINE CAN COMPUTE DISTANCE

### **All Stop Codes Are Defined**

| Stop Range | Defined | Total |
|------------|---------|-------|
| VLR_001 to VLR_034 | ✅ YES | 34 stops |

### **Data Consistency Issue**

**Stops Defined in STOP_DATA**: VLR_001 to VLR_034 (34 stops)

**Stops Used in Database Segments**: VLR_001, VLR_002, VLR_008, VLR_011, VLR_012, VLR_013, VLR_016, VLR_018, VLR_025, VLR_026, VLR_028, VLR_030, VLR_038, VLR_047, VLR_052, VLR_054, VLR_081, VLR_082

**⚠️ Missing Coordinates (NOT in STOP_DATA)**:
- `VLR_038`
- `VLR_047`
- `VLR_052`
- `VLR_054`
- `VLR_081`
- `VLR_082`

### **Haversine Distance Calculation Feasibility**

✅ **For 12 segments using defined stops** (VLR_001–VLR_034):
   - Can compute Haversine distance once per segment pair
   - Store in computation cache

⚠️ **For 5 segments using undefined stops** (VLR_038, VLR_047, etc.):
   - Requires adding stop coordinates to STOP_DATA before Haversine computation
   - Alternative: estimate distance from existing speed data

---

## 4️⃣ DISTINCT SEGMENTS IN TRIPHISTORY

### **MongoDB Query Result**
```
db.TripHistory.distinct("segment")
```

**Result**:
```
[
  "VLR_002->VLR_018",
  "VLR_011->VLR_013",
  "VLR_012->VLR_030",
  "VLR_013->VLR_016",
  "VLR_018->VLR_047",     ← VLR_047 not in STOP_DATA
  "VLR_025->VLR_026",
  "VLR_038->VLR_028",     ← VLR_038 not in STOP_DATA
  "VLR_052->VLR_011",     ← VLR_052 not in STOP_DATA
  "VLR_054->VLR_001",     ← VLR_054 not in STOP_DATA
  "VLR_081->VLR_008",     ← VLR_081 not in STOP_DATA
  "VLR_081->VLR_082"      ← VLR_081, VLR_082 not in STOP_DATA
]
```

**Total Unique Segments**: 11

---

## 5️⃣ TRIPHISTORY RECORD COUNT

### **MongoDB Query Result**
```
db.TripHistory.countDocuments()
```

**Result**: **13 records**

### **Sample Document Structure**

```json
{
  "_id": "699174e38d6c6f65f8634a11",
  "bus_id": "BUS-103",
  "route_id": null,
  "timestamp": "2026-02-15T07:25:23.455Z",
  "day_of_week": "Sunday",
  "hour_of_day": 12,
  "segment": "VLR_012->VLR_030",
  "speed": 94.1,
  "traffic_level": "light",
  "coordinates": [79.161989, 12.972081],
  "__v": 0
}
```

### **Data Inventory**

| Attribute | Count | Notes |
|-----------|-------|-------|
| Total Records | 13 | Limited dataset for testing |
| Unique Buses | ? | Requires aggregation query |
| Unique Segments | 11 | Listed above |
| Date Range | Feb 15 - Feb 15, 2026 | Single day |
| Records with coordinates | 13 | 100% coverage |
| Records with segment | 11 | All 13 have segment (no nulls) |

---

## 📊 SEGMENT DISTANCE CALCULATION PLAN

### **Haversine Implementation Option**

**Implementable Segments** (coordinates available):
- VLR_002→VLR_018
- VLR_011→VLR_013
- VLR_012→VLR_030
- VLR_013→VLR_016
- VLR_025→VLR_026
- VLR_038→VLR_028 ⚠️ (VLR_038 undefined)
- VLR_052→VLR_011 ⚠️ (VLR_052 undefined)
- VLR_054→VLR_001 ⚠️ (VLR_054 undefined)
- VLR_081→VLR_008 ⚠️ (VLR_081 undefined)
- VLR_081→VLR_082 ⚠️ (VLR_081, VLR_082 undefined)

**Haversine Formula** (from [backend/index.js](backend/index.js#L165)):
```javascript
function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371e3; // Earth radius in meters
  const φ1 = lat1 * Math.PI / 180;
  const φ2 = lat2 * Math.PI / 180;
  const Δφ = (lat2 - lat1) * Math.PI / 180;
  const Δλ = (lon2 - lon1) * Math.PI / 180;

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) *
    Math.sin(Δλ / 2) * Math.sin(Δλ / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in meters
}
```

---

## 🎯 SUMMARY TABLE

| Finding | Status | Details
```


## License: unknown
https://github.com/senthanal/Spatial-Interpolation/blob/7cd0db066260c8c1b351d93cb5129d1f1cb298e3/Calculate.js

```
---

## 🔬 SEGMENT DISTANCE DEFINITION FORENSIC AUDIT

**Status**: Investigation Complete  
**Date**: February 26, 2026  
**Mode**: IEEE Research Mode (Read-only)

---

## 1️⃣ STOP COORDINATES STORAGE LOCATION

### **Primary Storage: Frontend STOP_DATA Array**
**File**: [frontend/index.html](frontend/index.html#L1791)  
**Lines**: 1791–1830  
**Structure**: JavaScript constant array (NOT MongoDB)

```javascript
const STOP_DATA = [
  // ================= PRECISE GOOGLE MAPS COORDINATES (34 Stops) =================
  // Updated with exact coordinates rounded to 6 decimal places for perfect Google Maps alignment
  
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
```

### **Schema Definition: TripHistory (Bus Coordinates)**
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js#L18)

```javascript
{
  coordinates: { type: [Number], default: undefined }  // [longitude, latitude] format
}
```

### **Stop Coordinate Summary**
| Property | Location | Format | Coverage |
|----------|----------|--------|----------|
| **Stop Coordinates** | Frontend STOP_DATA array (JavaScript) | `{ stop_id, latitude, longitude, ...}` | 34 stops (VLR_001 to VLR_034) |
| **Bus GPS Coordinates** | MongoDB TripHistory.coordinates | `[longitude, latitude]` (GeoJSON) | Real-time telemetry |
| **Bus Coordinates (ActiveFleet)** | [backend/models/ActiveFleet.js](backend/models/ActiveFleet.js#L13) | `{ location: { type: "Point", coordinates: [lon, lat] } }` | Live fleet |

---

## 2️⃣ SEGMENT DISTANCE STORAGE STATUS

### **FINDING: Segment Distance is NOT Stored**

**TripHistory Schema** (full content):
**File**: [backend/models/TripHistory.js](backend/models/TripHistory.js)

```javascript
const tripHistorySchema = new mongoose.Schema(
  {
    bus_id: { type: String, index: true },
    route_id: { type: String, default: null },
    timestamp: { type: Date, default: Date.now, index: true },
    day_of_week: { type: String },
    hour_of_day: { type: Number },
    segment: { type: String, default: null },
    speed: { type: Number, default: null },
    traffic_level: { type: String, default: "unknown" },
    coordinates: { type: [Number], default: undefined }
  },
  { collection: "TripHistory" }
);
```

**Fields Stored**: bus_id, route_id, timestamp, day_of_week, hour_of_day, segment, speed, traffic_level, coordinates

**✅ Fields Available for Distance Calculation**: segment (stop pair codes), coordinates (GPS point)  
**❌ Field NOT Present**: `distance` (segment length in meters)

### **Mentioned but Not Implemented**
**File**: [CURRENT_STATE_SUMMARY.md](CURRENT_STATE_SUMMARY.md#L91) (Documentation only)

```javascript
{
  segment: String,             // e.g., "VLR_001->VLR_002"
  speed: Number,               // Average speed in km/h
  timestamp: Date,             // When recorded
  bus_id: String,              // Which bus generated this
  distance: Number             // Segment length in meters ← NOT IN ACTUAL SCHEMA
}
```

---

## 3️⃣ CONFIRMATION: STOPS HAVE LAT/LON, HAVERSINE CAN COMPUTE DISTANCE

### **All Stop Codes Are Defined**

| Stop Range | Defined | Total |
|------------|---------|-------|
| VLR_001 to VLR_034 | ✅ YES | 34 stops |

### **Data Consistency Issue**

**Stops Defined in STOP_DATA**: VLR_001 to VLR_034 (34 stops)

**Stops Used in Database Segments**: VLR_001, VLR_002, VLR_008, VLR_011, VLR_012, VLR_013, VLR_016, VLR_018, VLR_025, VLR_026, VLR_028, VLR_030, VLR_038, VLR_047, VLR_052, VLR_054, VLR_081, VLR_082

**⚠️ Missing Coordinates (NOT in STOP_DATA)**:
- `VLR_038`
- `VLR_047`
- `VLR_052`
- `VLR_054`
- `VLR_081`
- `VLR_082`

### **Haversine Distance Calculation Feasibility**

✅ **For 12 segments using defined stops** (VLR_001–VLR_034):
   - Can compute Haversine distance once per segment pair
   - Store in computation cache

⚠️ **For 5 segments using undefined stops** (VLR_038, VLR_047, etc.):
   - Requires adding stop coordinates to STOP_DATA before Haversine computation
   - Alternative: estimate distance from existing speed data

---

## 4️⃣ DISTINCT SEGMENTS IN TRIPHISTORY

### **MongoDB Query Result**
```
db.TripHistory.distinct("segment")
```

**Result**:
```
[
  "VLR_002->VLR_018",
  "VLR_011->VLR_013",
  "VLR_012->VLR_030",
  "VLR_013->VLR_016",
  "VLR_018->VLR_047",     ← VLR_047 not in STOP_DATA
  "VLR_025->VLR_026",
  "VLR_038->VLR_028",     ← VLR_038 not in STOP_DATA
  "VLR_052->VLR_011",     ← VLR_052 not in STOP_DATA
  "VLR_054->VLR_001",     ← VLR_054 not in STOP_DATA
  "VLR_081->VLR_008",     ← VLR_081 not in STOP_DATA
  "VLR_081->VLR_082"      ← VLR_081, VLR_082 not in STOP_DATA
]
```

**Total Unique Segments**: 11

---

## 5️⃣ TRIPHISTORY RECORD COUNT

### **MongoDB Query Result**
```
db.TripHistory.countDocuments()
```

**Result**: **13 records**

### **Sample Document Structure**

```json
{
  "_id": "699174e38d6c6f65f8634a11",
  "bus_id": "BUS-103",
  "route_id": null,
  "timestamp": "2026-02-15T07:25:23.455Z",
  "day_of_week": "Sunday",
  "hour_of_day": 12,
  "segment": "VLR_012->VLR_030",
  "speed": 94.1,
  "traffic_level": "light",
  "coordinates": [79.161989, 12.972081],
  "__v": 0
}
```

### **Data Inventory**

| Attribute | Count | Notes |
|-----------|-------|-------|
| Total Records | 13 | Limited dataset for testing |
| Unique Buses | ? | Requires aggregation query |
| Unique Segments | 11 | Listed above |
| Date Range | Feb 15 - Feb 15, 2026 | Single day |
| Records with coordinates | 13 | 100% coverage |
| Records with segment | 11 | All 13 have segment (no nulls) |

---

## 📊 SEGMENT DISTANCE CALCULATION PLAN

### **Haversine Implementation Option**

**Implementable Segments** (coordinates available):
- VLR_002→VLR_018
- VLR_011→VLR_013
- VLR_012→VLR_030
- VLR_013→VLR_016
- VLR_025→VLR_026
- VLR_038→VLR_028 ⚠️ (VLR_038 undefined)
- VLR_052→VLR_011 ⚠️ (VLR_052 undefined)
- VLR_054→VLR_001 ⚠️ (VLR_054 undefined)
- VLR_081→VLR_008 ⚠️ (VLR_081 undefined)
- VLR_081→VLR_082 ⚠️ (VLR_081, VLR_082 undefined)

**Haversine Formula** (from [backend/index.js](backend/index.js#L165)):
```javascript
function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371e3; // Earth radius in meters
  const φ1 = lat1 * Math.PI / 180;
  const φ2 = lat2 * Math.PI / 180;
  const Δφ = (lat2 - lat1) * Math.PI / 180;
  const Δλ = (lon2 - lon1) * Math.PI / 180;

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) *
    Math.sin(Δλ / 2) * Math.sin(Δλ / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in meters
}
```

---

## 🎯 SUMMARY TABLE

| Finding | Status | Details
```

