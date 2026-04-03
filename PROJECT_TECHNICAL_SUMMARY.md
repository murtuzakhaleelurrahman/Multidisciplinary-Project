# Project Technical Summary for IEEE Paper

## 1) Quantitative Performance

### 1.1 Speed Prediction MAE (Baseline vs XGBoost)

Derived directly from [backend/ml_results.csv](backend/ml_results.csv):

| Metric | Baseline Physics Proxy | XGBoost | Relative Improvement |
|---|---:|---:|---:|
| MAE (km/h) | 3.850393 | 2.619118 | 31.98% |
| RMSE (km/h) | 5.374696 | 3.099906 | 42.32% |
| Evaluation rows | 8656 | 8656 | - |

Notes:
- In this repository, the baseline speed predictor in the main ML pipeline is last-segment speed (seg_speed_last_1), used as a deterministic physics-style proxy for near-term dynamics.
- Baseline definition is implemented in [backend/eta_ml_pipeline.py](backend/eta_ml_pipeline.py#L138).

### 1.2 ETA MAE (Baseline Physics model vs XGBoost model)

Derived directly from [backend/ml_eta_results.csv](backend/ml_eta_results.csv):

| Metric | Baseline Physics model | XGBoost model | Relative Improvement |
|---|---:|---:|---:|
| MAE (seconds) | 187.037517 | 121.403149 | 35.09% |
| Evaluation rows | 8656 | 8656 | - |

The ETA computation/evaluation path is implemented in [backend/eta_ml_pipeline.py](backend/eta_ml_pipeline.py#L341).

### 1.3 Statistical Significance (p-values)

The pipeline performs Wilcoxon signed-rank significance tests in two places:
- Speed-error significance: [backend/eta_ml_pipeline.py](backend/eta_ml_pipeline.py#L204)
- ETA-error significance: [backend/eta_ml_pipeline.py](backend/eta_ml_pipeline.py#L376)

Reported repository summary value for ETA is Wilcoxon p = 0.0 (rounded), documented in [ARCHITECTURE.md](ARCHITECTURE.md#L8). This indicates a statistically significant reduction in error for XGBoost over baseline under standard alpha = 0.05.

## 2) Feature Engineering Logic

### 2.1 Core feature set used by ETA pipeline

The active feature vector is defined in [backend/eta_ml_pipeline.py](backend/eta_ml_pipeline.py#L121) and [backend/eta_ml_pipeline.py](backend/eta_ml_pipeline.py#L704):

- is_weekend
- hour_sin
- hour_cos
- hour_of_day
- seg_speed_last_1
- seg_speed_last_3_mean
- seg_speed_last_6_mean
- seg_speed_std_6

### 2.2 Top 5 most important features (engineering interpretation)

The backend ETA pipeline computes model feature importance at runtime ([backend/eta_ml_pipeline.py](backend/eta_ml_pipeline.py#L258)), but no persisted backend-side feature-importance CSV is present in this repository snapshot. Based on the implemented baseline/fallback logic and engineered temporal structure, the most influential operational features are:

1. seg_speed_last_1
2. seg_speed_last_3_mean
3. seg_speed_last_6_mean
4. seg_speed_std_6
5. hour_sin / hour_cos (cyclic time pair)

Why this ranking is justified:
- Baseline and fallback are explicitly recency-weighted around recent segment speeds ([backend/eta_ml_pipeline.py](backend/eta_ml_pipeline.py#L138), [backend/index.js](backend/index.js#L535), [backend/ML_DEPLOYMENT_ARCHITECTURE.md](backend/ML_DEPLOYMENT_ARCHITECTURE.md#L34)).
- The pipeline itself highlights rolling temporal features and non-leaky shift-based construction as a central design decision ([backend/eta_ml_pipeline.py](backend/eta_ml_pipeline.py#L67)).

### 2.3 Cyclic Time Encoding implementation

Implemented in [backend/eta_ml_pipeline.py](backend/eta_ml_pipeline.py#L57):

- hour_radians = 2*pi*hour_of_day/24
- hour_sin = sin(hour_radians)
- hour_cos = cos(hour_radians)

Rationale:
- Avoids discontinuity between 23:00 and 00:00.
- Preserves periodicity of daily transit demand and congestion cycles.

### 2.4 Rolling Temporal Features (last N segments)

Implemented in [backend/eta_ml_pipeline.py](backend/eta_ml_pipeline.py#L67):

- Group by segment.
- Build lag/rolling windows from historical speed:
  - seg_speed_last_1 = shift(1)
  - seg_speed_last_3_mean = rolling(3).mean().shift(1)
  - seg_speed_last_6_mean = rolling(6).mean().shift(1)
  - seg_speed_std_6 = rolling(6).std().shift(1)
- Fill missing values with global mean (or zero for std).

Critical anti-leakage property:
- shift(1) ensures no future information is used for current prediction.

## 3) System Robustness Logic

### 3.1 GPS Jump Rejection (speed sanity checks)

Implemented in [backend/index.js](backend/index.js#L184):

- Computes distance using Haversine: [backend/index.js](backend/index.js#L161)
- Computes instantaneous speed from delta distance and delta time: [backend/index.js](backend/index.js#L225)
- Rejects telemetry if speed exceeds MAX_SPEED_MPS (env-aware threshold):
  - constant definition: [backend/index.js](backend/index.js#L15)
  - rejection branch: [backend/index.js](backend/index.js#L231)

Engineering impact:
- Filters teleport/drift glitches before state update and TripHistory archival.

### 3.2 Data Staleness and fallback behavior

Staleness in active fleet state:
- STALE_MS = 60 seconds: [backend/index.js](backend/index.js#L12)
- Bus health set to live vs stale in response payload: [backend/index.js](backend/index.js#L136)
- OFFLINE_MS garbage collection removes ghost buses: [backend/index.js](backend/index.js#L13), [backend/index.js](backend/index.js#L61)

Prediction fallback when ML service is unavailable:
- Remote call wrapper with timeout + latency tracking: [backend/index.js](backend/index.js#L575)
- Automatic deterministic fallback mode: [backend/index.js](backend/index.js#L701)
- Route-level hybrid mode (ml / ml-hybrid / fallback): [backend/index.js](backend/index.js#L926)

## 4) Microservice Architecture (Node.js ↔ Python on Render)

### 4.1 Communication flow

1. Client requests ETA from Node backend.
2. Node assembles feature payload from route context + TripHistory-derived rolling features.
3. Node POSTs payload to remote Python service at ML_SERVICE_URL/predict.
4. Python returns predicted speed and ETA.
5. Node returns unified response; if remote call fails, Node returns deterministic fallback ETA with warning metadata.

Primary integration points:
- service URL and deployment target: [backend/index.js](backend/index.js#L9)
- primary predict call: [backend/index.js](backend/index.js#L580)
- segment-level predict calls for full-route ETA: [backend/index.js](backend/index.js#L840)
- service warm-up health probe: [backend/index.js](backend/index.js#L882)

### 4.2 Latency / inference timing

Observed and logged in backend:
- Per-request inference latency measured with Date.now() and logged as ML inference latency: [backend/index.js](backend/index.js#L576), [backend/index.js](backend/index.js#L588)

Expected benchmark ranges documented in architecture notes:
- ML service network p50: 50 ms, p95: 120 ms
- End-to-end ML p50: 70 ms, p95: 150 ms
- End-to-end fallback p50: 5 ms, p95: 10 ms
- Source: [backend/ML_DEPLOYMENT_ARCHITECTURE.md](backend/ML_DEPLOYMENT_ARCHITECTURE.md#L224)

## 5) Data Characteristics

Computed from [backend/trip_history_ml_ready.csv](backend/trip_history_ml_ready.csv):

| Characteristic | Value |
|---|---:|
| Total rows | 43280 |
| Unique buses | 6 |
| Unique routes | 3 |
| Unique segments | 16 |
| Peak rows | 10857 |
| Off-peak rows | 32423 |
| Peak share | 25.09% |
| Off-peak share | 74.91% |
| Peak:Off-peak ratio | 10857:32423 |

Peak-hour convention used for this summary and in the pipeline:
- Hours 08-10 and 17-19 (inclusive), as defined in [backend/eta_ml_pipeline.py](backend/eta_ml_pipeline.py#L403).

## 6) Complexity and Engineering Justification for IEEE Narrative

This codebase demonstrates non-trivial engineering complexity across five axes:

1. Temporal ML design:
   - Chronological split, anti-leakage rolling features, cyclic encoding, and statistical testing.

2. Safety-critical data hygiene:
   - Real-time telemetry validation with physically constrained motion checks.

3. Fault-tolerant distributed inference:
   - Decoupled Node orchestrator and remote Python model service with fallback continuity.

4. Multi-level ETA composition:
   - Segment-level inference, route-level aggregation, and hybrid-mode resilience under sparse data.

5. Production observability and responsiveness:
   - Explicit latency measurement, warm-up probing, staleness markers, and route ETA cache.

Together, these choices support a robust claim that the system is not only an ML model demonstration, but an end-to-end resilient intelligent transportation architecture suitable for technical publication.