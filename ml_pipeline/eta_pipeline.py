"""
🚀 SEGMENT-LEVEL ETA PREDICTION PIPELINE

This script reconstructs segment traversals from sparse bus telemetry data,
engineers features, and generates an ML-ready dataset for XGBoost training.

📊 Designed specifically for:
   - Sparse telemetry (~3-5 records per segment per hour)
   - Tier-2 Indian urban corridors (Vellore)
   - Non-linear congestion patterns

Pipeline Phases:
   1️⃣  Traversal Reconstruction: Converts raw telemetry → segment-level journeys
   2️⃣  Aggregation: Computes travel times, speeds, traffic stats per traversal
   3️⃣  Feature Engineering: Time encoding, categorical labels, temporal features
   4️⃣  Rolling Features: Historical congestion patterns (critical for ML)

Usage:
   python eta_pipeline.py
"""

import os
import json
import pandas as pd
import numpy as np
from datetime import datetime, timedelta
from pymongo import MongoClient
from dotenv import load_dotenv
import warnings

warnings.filterwarnings('ignore')

# ============================================================================
# 🔧 CONFIGURATION
# ============================================================================

load_dotenv()

MONGODB_URI = os.getenv("MONGODB_URI", "mongodb://localhost:27017/smart_transit")
DB_NAME = "smart_transit"
COLLECTION_NAME = "TripHistory"

# Output paths
OUTPUT_CSV = "segment_dataset.csv"
OUTPUT_STATS = "pipeline_stats.json"

# Data validation thresholds
MIN_TRAVERSAL_TIME_S = 30  # Ignore traversals < 30 seconds (noise)
MAX_TRAVERSAL_TIME_S = 7200  # Ignore traversals > 2 hours (unlikely)
MIN_POINTS_PER_TRAVERSAL = 2  # Need at least 2 data points


# ============================================================================
# 📥 PHASE 1: DATA EXTRACTION & TRAVERSAL RECONSTRUCTION
# ============================================================================

def connect_mongodb():
    """Establish MongoDB connection."""
    try:
        client = MongoClient(MONGODB_URI, serverSelectionTimeoutMS=5000)
        client.admin.command('ping')
        print("✅ Connected to MongoDB")
        return client
    except Exception as e:
        print(f"❌ MongoDB connection failed: {e}")
        print(f"   Ensure MONGODB_URI is correct: {MONGODB_URI}")
        raise


def load_trip_history(client):
    """Load raw telemetry from MongoDB."""
    db = client[DB_NAME]
    collection = db[COLLECTION_NAME]
    
    print(f"📥 Loading data from {DB_NAME}.{COLLECTION_NAME}...")
    
    # Query all records, sort by bus and timestamp
    raw_data = list(collection.find(
        {},
        {
            "bus_id": 1,
            "route_id": 1,
            "timestamp": 1,
            "day_of_week": 1,
            "hour_of_day": 1,
            "segment": 1,
            "speed": 1,
            "traffic_level": 1,
            "coordinates": 1,
            "_id": 0
        }
    ).sort([("bus_id", 1), ("route_id", 1), ("timestamp", 1)]))
    
    if not raw_data:
        print("❌ No data found in database. Run seed_traffic.js first.")
        return None
    
    print(f"   ✓ Loaded {len(raw_data)} raw records")
    
    # Convert to DataFrame
    df = pd.DataFrame(raw_data)
    df['timestamp'] = pd.to_datetime(df['timestamp'])
    
    return df


def reconstruct_traversals(df):
    """
    🔵 PHASE 1: Reconstruct segment traversals from sparse telemetry.
    
    For each (bus_id, route_id), detect:
    - When bus enters a segment
    - When bus leaves that segment
    - Compute traverse duration
    
    Handles sparse data by grouping consecutive records of the same segment.
    """
    print("\n🔵 PHASE 1: Reconstructing Segment Traversals...")
    
    df = df.sort_values(['bus_id', 'route_id', 'timestamp']).reset_index(drop=True)
    
    traversals = []
    
    # Group by bus and route
    for (bus_id, route_id), bus_group in df.groupby(['bus_id', 'route_id']):
        bus_group = bus_group.sort_values('timestamp').reset_index(drop=True)
        
        # Detect segment changes (traversal boundaries)
        bus_group['segment_change'] = (
            bus_group['segment'] != bus_group['segment'].shift()
        ).fillna(True)
        
        # Assign traversal IDs based on segment changes
        bus_group['traversal_id'] = bus_group['segment_change'].cumsum()
        
        # For each segment traversal
        for (segment, trav_id), seg_group in bus_group.groupby(['segment', 'traversal_id']):
            
            # Skip if not enough data points or invalid segment
            if len(seg_group) < MIN_POINTS_PER_TRAVERSAL or pd.isna(segment):
                continue
            
            # Extract key times
            entry_ts = seg_group['timestamp'].iloc[0]
            exit_ts = seg_group['timestamp'].iloc[-1]
            travel_time_s = (exit_ts - entry_ts).total_seconds()
            
            # Validate traversal duration
            if not (MIN_TRAVERSAL_TIME_S <= travel_time_s <= MAX_TRAVERSAL_TIME_S):
                continue
            
            # Aggregate statistics
            traversal = {
                'bus_id': bus_id,
                'route_id': route_id,
                'segment': segment,
                'entry_ts': entry_ts,
                'exit_ts': exit_ts,
                'travel_time_s': travel_time_s,
                'avg_speed': seg_group['speed'].mean(),
                'max_speed': seg_group['speed'].max(),
                'min_speed': seg_group['speed'].min(),
                'std_speed': seg_group['speed'].std(),
                'traffic_level': seg_group['traffic_level'].iloc[0],
                'day_of_week': seg_group['day_of_week'].iloc[0],
                'hour_of_day': seg_group['hour_of_day'].iloc[0],
                'n_points': len(seg_group)
            }
            
            traversals.append(traversal)
    
    traversal_df = pd.DataFrame(traversals)
    print(f"   ✓ Reconstructed {len(traversal_df)} segment traversals")
    print(f"   ✓ Time range: {traversal_df['entry_ts'].min()} to {traversal_df['entry_ts'].max()}")
    
    return traversal_df


# ============================================================================
# 📊 PHASE 2: AGGREGATION & VALIDATION
# ============================================================================

def validate_and_clean(df):
    """
    🔵 PHASE 2: Validate traversals and remove outliers.
    """
    print("\n🔵 PHASE 2: Aggregation & Validation...")
    
    initial_count = len(df)
    
    # Remove NaN travel times
    df = df.dropna(subset=['travel_time_s', 'avg_speed'])
    
    # Remove extreme speed outliers (clearly erroneous)
    df = df[df['avg_speed'].between(1, 80)]
    df = df[df['travel_time_s'] > 0]
    
    removed = initial_count - len(df)
    if removed > 0:
        print(f"   ℹ Removed {removed} invalid traversals")
    
    # Summary statistics
    print(f"\n   📈 Traversal Statistics:")
    print(f"      Travel Time  → Mean: {df['travel_time_s'].mean():.1f}s | Std: {df['travel_time_s'].std():.1f}s")
    print(f"      Avg Speed    → Mean: {df['avg_speed'].mean():.1f} km/h | Std: {df['avg_speed'].std():.1f}")
    print(f"      Data Points  → Mean: {df['n_points'].mean():.1f} | Max: {df['n_points'].max()}")
    
    return df


# ============================================================================
# 🔧 PHASE 3: FEATURE ENGINEERING
# ============================================================================

def engineer_features(df):
    """
    🔵 PHASE 3: Create ML-ready features.
    
    Core Features:
    - Time encoding (cyclic: hour_sin, hour_cos)
    - Categorical encoding (one-hot ready)
    - Derived boolean features (is_peak_hour, is_weekend)
    
    Speed Features:
    - avg_speed, max_speed, min_speed, std_speed
    """
    print("\n🔵 PHASE 3: Feature Engineering...")
    
    df = df.copy()
    
    # 1️⃣ Time-Based Features
    # Cyclic encoding for hour (critical for non-linear patterns)
    df['hour_sin'] = np.sin(2 * np.pi * df['hour_of_day'] / 24)
    df['hour_cos'] = np.cos(2 * np.pi * df['hour_of_day'] / 24)
    
    # Peak hour detection (8-10 AM, 5-7 PM on weekdays)
    df['is_peak_hour'] = (
        ((df['hour_of_day'] >= 8) & (df['hour_of_day'] <= 10)) |
        ((df['hour_of_day'] >= 17) & (df['hour_of_day'] <= 19))
    ).astype(int)
    
    # Weekend detection
    df['is_weekend'] = (
        (df['day_of_week'] == 'Saturday') | 
        (df['day_of_week'] == 'Sunday')
    ).astype(int)
    
    # 2️⃣ Speed Aggregates (already computed in Phase 1)
    # avg_speed, max_speed, min_speed, std_speed
    
    # 3️⃣ Traffic Level Encoding (prepare for one-hot)
    # traffic_level: light, medium, heavy, unknown
    
    print(f"   ✓ Created 4 derived features (hour_sin, hour_cos, is_peak_hour, is_weekend)")
    print(f"   ✓ Preserved speed features (avg, max, min, std)")
    
    return df


# ============================================================================
# 🎯 PHASE 4: ROLLING FEATURES (TEMPORAL CONGESTION PATTERNS)
# ============================================================================

def add_rolling_features(df):
    """
    🔵 PHASE 4: Historical rolling averages.
    
    Creates segment-level temporal features:
    - seg_tt_last_1: Last observed travel time
    - seg_tt_last_3_mean: Mean of last 3 traversals
    - seg_tt_last_7_mean: Mean of last 7 traversals
    - seg_tt_last_30_mean: Mean of last 30 traversals
    - seg_tt_std_7: Std of last 7 traversals (volatility)
    
    These are CRITICAL for ML superiority—captures congestion memory.
    """
    print("\n🔵 PHASE 4: Rolling Temporal Features...")
    
    # Sort by segment and entry time (ensures chronological order)
    df = df.sort_values(['route_id', 'segment', 'entry_ts']).reset_index(drop=True)
    
    # Initialize rolling feature columns
    rolling_features = [
        'seg_tt_last_1',
        'seg_tt_last_3_mean',
        'seg_tt_last_7_mean',
        'seg_tt_last_30_mean',
        'seg_tt_std_7',
        'seg_speed_last_3_mean'
    ]
    
    for col in rolling_features:
        df[col] = np.nan
    
    # Compute rolling features per (route_id, segment)
    for (route, segment), group in df.groupby(['route_id', 'segment']):
        group_indices = group.index
        
        for i, idx in enumerate(group_indices):
            # Use prior observations only (no lookahead bias)
            prior_idxs = group_indices[:i]
            
            if len(prior_idxs) > 0:
                prior_data = df.loc[prior_idxs]
                
                # Last 1 traversal
                df.loc[idx, 'seg_tt_last_1'] = prior_data['travel_time_s'].iloc[-1]
                
                # Last 3 mean
                if len(prior_data) >= 3:
                    df.loc[idx, 'seg_tt_last_3_mean'] = prior_data['travel_time_s'].iloc[-3:].mean()
                elif len(prior_data) > 0:
                    df.loc[idx, 'seg_tt_last_3_mean'] = prior_data['travel_time_s'].mean()
                
                # Last 7 mean and std
                if len(prior_data) >= 7:
                    df.loc[idx, 'seg_tt_last_7_mean'] = prior_data['travel_time_s'].iloc[-7:].mean()
                    df.loc[idx, 'seg_tt_std_7'] = prior_data['travel_time_s'].iloc[-7:].std()
                elif len(prior_data) > 1:
                    df.loc[idx, 'seg_tt_last_7_mean'] = prior_data['travel_time_s'].mean()
                    df.loc[idx, 'seg_tt_std_7'] = prior_data['travel_time_s'].std()
                
                # Last 30 mean
                if len(prior_data) >= 30:
                    df.loc[idx, 'seg_tt_last_30_mean'] = prior_data['travel_time_s'].iloc[-30:].mean()
                elif len(prior_data) > 0:
                    df.loc[idx, 'seg_tt_last_30_mean'] = prior_data['travel_time_s'].mean()
                
                # Speed rolling mean
                if len(prior_data) >= 3:
                    df.loc[idx, 'seg_speed_last_3_mean'] = prior_data['avg_speed'].iloc[-3:].mean()
                elif len(prior_data) > 0:
                    df.loc[idx, 'seg_speed_last_3_mean'] = prior_data['avg_speed'].mean()
    
    # Fill remaining NaNs with forward fill (use segment mean as fallback)
    for (route, segment), group in df.groupby(['route_id', 'segment']):
        group_indices = group.index
        segment_mean = df.loc[group_indices, 'travel_time_s'].mean()
        
        for col in rolling_features:
            missing = df.loc[group_indices, col].isna()
            if missing.any():
                df.loc[group_indices[missing], col] = segment_mean
    
    print(f"   ✓ Created 6 rolling temporal features")
    print(f"   ✓ Rolling windows: 1, 3, 7, 30 prior traversals")
    
    return df


# ============================================================================
# 📋 FINAL DATASET PREPARATION
# ============================================================================

def prepare_final_dataset(df):
    """Select and order columns for final ML dataset."""
    print("\n📋 Preparing Final Dataset...")
    
    # Define column order for ML model
    ml_columns = [
        # Identifiers (for traceability)
        'bus_id',
        'route_id',
        'segment',
        'entry_ts',
        
        # 🎯 TARGET VARIABLE
        'travel_time_s',
        
        # NUMERICAL FEATURES
        'avg_speed',
        'max_speed',
        'min_speed',
        'std_speed',
        'n_points',
        
        # TIME FEATURES (CYCLIC ENCODING)
        'hour_of_day',
        'hour_sin',
        'hour_cos',
        
        # BOOLEAN FEATURES
        'is_peak_hour',
        'is_weekend',
        
        # TRAFFIC CATEGORICAL
        'traffic_level',
        
        # ROLLING TEMPORAL FEATURES (CRITICAL)
        'seg_tt_last_1',
        'seg_tt_last_3_mean',
        'seg_tt_last_7_mean',
        'seg_tt_last_30_mean',
        'seg_tt_std_7',
        'seg_speed_last_3_mean',
    ]
    
    df = df[ml_columns].copy()
    
    # Remove any remaining rows with NaN in critical columns
    df = df.dropna(subset=['travel_time_s', 'avg_speed'])
    
    print(f"   ✓ Final dataset shape: {df.shape}")
    print(f"   ✓ Columns: {len(df.columns)}")
    
    return df


# ============================================================================
# 📊 STATISTICS & EXPORT
# ============================================================================

def generate_statistics(df, traversal_df):
    """Generate pipeline statistics for validation."""
    
    stats = {
        "pipeline_timestamp": datetime.now().isoformat(),
        "raw_records_loaded": len(traversal_df),
        "final_dataset_rows": len(df),
        "columns": len(df.columns),
        "date_range": {
            "start": str(df['entry_ts'].min()),
            "end": str(df['entry_ts'].max())
        },
        "target_variable": {
            "travel_time_s": {
                "mean": float(df['travel_time_s'].mean()),
                "std": float(df['travel_time_s'].std()),
                "min": float(df['travel_time_s'].min()),
                "max": float(df['travel_time_s'].max()),
                "median": float(df['travel_time_s'].median())
            }
        },
        "speed_statistics": {
            "avg_speed_kmh": {
                "mean": float(df['avg_speed'].mean()),
                "std": float(df['avg_speed'].std())
            }
        },
        "categorical_breakdowns": {
            "segments": df['segment'].nunique(),
            "routes": df['route_id'].nunique(),
            "buses": df['bus_id'].nunique(),
            "traffic_levels": df['traffic_level'].value_counts().to_dict(),
            "peak_vs_offpeak": {
                "peak_hour": int(df['is_peak_hour'].sum()),
                "off_peak": int((1 - df['is_peak_hour']).sum())
            }
        },
        "rolling_features_coverage": {
            "seg_tt_last_1_filled": int(df['seg_tt_last_1'].notna().sum()),
            "seg_tt_last_3_mean_filled": int(df['seg_tt_last_3_mean'].notna().sum()),
            "seg_tt_last_7_mean_filled": int(df['seg_tt_last_7_mean'].notna().sum()),
            "seg_tt_last_30_mean_filled": int(df['seg_tt_last_30_mean'].notna().sum())
        }
    }
    
    return stats


def export_dataset(df, stats, output_csv, output_stats):
    """Export final dataset and statistics."""
    print(f"\n📤 Exporting Results...")
    
    # Export CSV
    df.to_csv(output_csv, index=False)
    print(f"   ✓ CSV exported: {output_csv}")
    print(f"     ({len(df)} rows × {len(df.columns)} columns)")
    
    # Export statistics
    with open(output_stats, 'w') as f:
        json.dump(stats, f, indent=2)
    print(f"   ✓ Statistics exported: {output_stats}")


# ============================================================================
# 🚀 MAIN PIPELINE EXECUTION
# ============================================================================

def main():
    """Execute the full ETA prediction pipeline."""
    
    print("\n" + "="*78)
    print("🚀 SEGMENT-LEVEL ETA PREDICTION PIPELINE")
    print("   4-Phase Data Processing Pipeline for Sparse Bus Telemetry")
    print("="*78)
    
    try:
        # Connect to MongoDB
        client = connect_mongodb()
        
        # Load raw data
        df_raw = load_trip_history(client)
        if df_raw is None:
            return
        
        print(f"\n   📊 Raw Data Summary:")
        print(f"      Records: {len(df_raw)}")
        print(f"      Buses: {df_raw['bus_id'].nunique()}")
        print(f"      Routes: {df_raw['route_id'].nunique()}")
        print(f"      Segments: {df_raw['segment'].nunique()}")
        print(f"      Date Range: {df_raw['timestamp'].min()} to {df_raw['timestamp'].max()}")
        
        # ============================================================
        # PHASE 1: Reconstruct Traversals
        # ============================================================
        traversal_df = reconstruct_traversals(df_raw)
        
        # ============================================================
        # PHASE 2: Validate & Clean
        # ============================================================
        traversal_df = validate_and_clean(traversal_df)
        
        # ============================================================
        # PHASE 3: Feature Engineering
        # ============================================================
        traversal_df = engineer_features(traversal_df)
        
        # ============================================================
        # PHASE 4: Rolling Features (CRITICAL FOR ML)
        # ============================================================
        traversal_df = add_rolling_features(traversal_df)
        
        # ============================================================
        # Final Dataset Preparation
        # ============================================================
        final_df = prepare_final_dataset(traversal_df)
        
        # ============================================================
        # Generate Statistics
        # ============================================================
        stats = generate_statistics(final_df, traversal_df)
        
        # ============================================================
        # Export Results
        # ============================================================
        export_dataset(final_df, stats, OUTPUT_CSV, OUTPUT_STATS)
        
        # ============================================================
        # Final Summary
        # ============================================================
        print("\n" + "="*78)
        print("✅ PIPELINE COMPLETE")
        print("="*78)
        print(f"\n📁 Output Files:")
        print(f"   1. {OUTPUT_CSV} - ML-ready dataset ({len(final_df)} rows)")
        print(f"   2. {OUTPUT_STATS} - Pipeline statistics & metadata")
        
        print(f"\n🎯 Next Steps:")
        print(f"   → Use '{OUTPUT_CSV}' to train XGBoost model")
        print(f"   → Compare predictions vs mathematical ETA")
        print(f"   → Analyze feature importance (rolling features)")
        print(f"\n📊 Key Insights:")
        print(f"   • Average travel time: {stats['target_variable']['travel_time_s']['mean']:.1f}s")
        print(f"   • Peak hour occurrences: {stats['categorical_breakdowns']['peak_vs_offpeak']['peak_hour']}")
        print(f"   • Segments in dataset: {stats['categorical_breakdowns']['segments']}")
        print(f"   • Data density: {len(final_df) / stats['categorical_breakdowns']['segments']:.1f} traversals/segment")
        
        print("\n" + "="*78 + "\n")
        
    except Exception as e:
        print(f"\n❌ Pipeline execution failed:")
        print(f"   {str(e)}")
        raise


if __name__ == "__main__":
    main()
