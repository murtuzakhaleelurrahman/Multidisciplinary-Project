#!/usr/bin/env python3
"""ETA ML Pipeline - IEEE Research Mode"""

import os
import re
import pandas as pd
import numpy as np
import warnings
from scipy import stats
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_absolute_error, mean_squared_error
import xgboost as xgb
import matplotlib.pyplot as plt
import matplotlib
import shap

matplotlib.use('Agg')  # Use non-interactive backend
warnings.filterwarnings('ignore')

def load_data(filepath):
    """Load and parse trip history CSV"""
    print('\n' + '='*70)
    print('ETA ML PIPELINE - PREPROCESSING')
    print('='*70 + '\n')
    
    print('Loading: ' + filepath)
    df = pd.read_csv(filepath)
    print('Loaded ' + str(len(df)) + ' rows, ' + str(len(df.columns)) + ' columns')
    print('Columns: ' + str(list(df.columns)) + '\n')
    return df

def preprocess_data(df):
    """Preprocess: datetime, datetime features, missing values"""
    print('PREPROCESSING')
    print('-' * 70)
    
    # Parse timestamp - handle JavaScript format
    print('\n1. Parsing timestamp to datetime...')
    df['timestamp_str'] = df['timestamp'].str.split(' GMT').str[0]
    df['timestamp'] = pd.to_datetime(df['timestamp_str'], format='%a %b %d %Y %H:%M:%S')
    df = df.drop('timestamp_str', axis=1)
    print('   Timestamp range: ' + str(df["timestamp"].min()) + ' to ' + str(df["timestamp"].max()))
    
    # Sort by timestamp
    print('\n2. Sorting by timestamp ascending...')
    df = df.sort_values('timestamp').reset_index(drop=True)
    print('   Sorted ' + str(len(df)) + ' rows')
    
    # Check missing values (excluding coordinates)
    print('\n3. Checking for missing values...')
    cols_to_check = [col for col in df.columns if col != 'coordinates']
    df = df.dropna(subset=cols_to_check)
    print('   After dropping: ' + str(len(df)) + ' rows')
    
    # Create datetime features
    print('\n4. Creating datetime features...')
    df['is_weekend'] = df['timestamp'].dt.dayofweek.isin([5, 6]).astype(int)
    hour_radians = 2 * np.pi * df['hour_of_day'] / 24
    df['hour_sin'] = np.sin(hour_radians)
    df['hour_cos'] = np.cos(hour_radians)
    print('   Created: is_weekend, hour_sin, hour_cos')
    print('   Final shape: ' + str(df.shape))
    
    return df.reset_index(drop=True)

def create_rolling_features(df):
    """Create rolling features per segment"""
    print('\n5. Creating rolling features per segment...')
    print('   (Using shift() for no future leakage)')
    
    rolling_features = ['seg_speed_last_1', 'seg_speed_last_3_mean', 
                        'seg_speed_last_6_mean', 'seg_speed_std_6']
    
    for feature in rolling_features:
        df[feature] = np.nan
    
    segment_groups = df.groupby('segment')
    print('   Processing ' + str(df["segment"].nunique()) + ' segments...')
    
    for segment, group_df in segment_groups:
        segment_indices = group_df.index
        speeds = group_df['speed'].values
        
        seg_speed_last_1 = pd.Series(speeds).shift(1).values
        seg_speed_last_3_mean = pd.Series(speeds).rolling(window=3, min_periods=1).mean().shift(1).values
        seg_speed_last_6_mean = pd.Series(speeds).rolling(window=6, min_periods=1).mean().shift(1).values
        seg_speed_std_6 = pd.Series(speeds).rolling(window=6, min_periods=1).std().shift(1).values
        
        df.loc[segment_indices, 'seg_speed_last_1'] = seg_speed_last_1
        df.loc[segment_indices, 'seg_speed_last_3_mean'] = seg_speed_last_3_mean
        df.loc[segment_indices, 'seg_speed_last_6_mean'] = seg_speed_last_6_mean
        df.loc[segment_indices, 'seg_speed_std_6'] = seg_speed_std_6
    
    df['seg_speed_last_1'].fillna(df['speed'].mean(), inplace=True)
    df['seg_speed_last_3_mean'].fillna(df['speed'].mean(), inplace=True)
    df['seg_speed_last_6_mean'].fillna(df['speed'].mean(), inplace=True)
    df['seg_speed_std_6'].fillna(0, inplace=True)
    
    print('   Created rolling features for ' + str(df["segment"].nunique()) + ' segments')
    return df

def split_data(df):
    """Chronological train/test split: 80% / 20%"""
    print('\n6. Chronological train/test split (80/20)...')
    
    split_idx = int(len(df) * 0.8)
    df_train = df.iloc[:split_idx].copy()
    df_test = df.iloc[split_idx:].copy()
    
    print('   Train: ' + str(len(df_train)) + ' rows (' + str(len(df_train)/len(df)*100) + '%)')
    print('   Test:  ' + str(len(df_test)) + ' rows (' + str(len(df_test)/len(df)*100) + '%)')
    print('   Train timestamps: ' + str(df_train["timestamp"].min()) + ' to ' + str(df_train["timestamp"].max()))
    print('   Test timestamps:  ' + str(df_test["timestamp"].min()) + ' to ' + str(df_test["timestamp"].max()))
    
    return df_train, df_test

def prepare_features(df_train, df_test):
    """Prepare feature matrices and target"""
    print('\n7. Preparing feature matrices and target...')
    
    feature_cols = ['is_weekend', 'hour_sin', 'hour_cos', 'hour_of_day',
                    'seg_speed_last_1', 'seg_speed_last_3_mean', 
                    'seg_speed_last_6_mean', 'seg_speed_std_6']
    
    X_train = df_train[feature_cols].copy()
    y_train = df_train['speed'].copy()
    X_test = df_test[feature_cols].copy()
    y_test = df_test['speed'].copy()
    
    print('   X_train shape: ' + str(X_train.shape))
    print('   y_train shape: ' + str(y_train.shape))
    print('   X_test shape: ' + str(X_test.shape))
    print('   y_test shape: ' + str(y_test.shape))
    print('   Target (speed) - Min: ' + str(y_train.min()) + ', Max: ' + str(y_train.max()) + ', Mean: ' + str(y_train.mean()))
    
    return X_train, y_train, X_test, y_test

def baseline_predictor(X_test, df_test):
    """Baseline: use seg_speed_last_1 as prediction"""
    print('\n8. Creating baseline predictor...')
    print('   Baseline = seg_speed_last_1')
    y_baseline = df_test['seg_speed_last_1'].values
    print('   Baseline predictions generated')
    return y_baseline

def train_models(X_train, y_train):
    """Train RandomForest and XGBoost"""
    print('\n9. Training models...')
    
    print('\n   Random Forest Regressor')
    print('   Parameters: n_estimators=100, max_depth=15, random_state=42')
    rf_model = RandomForestRegressor(n_estimators=100, max_depth=15, 
                                     random_state=42, n_jobs=-1)
    rf_model.fit(X_train, y_train)
    print('   Model trained')
    
    print('\n   XGBoost Regressor')
    print('   Parameters: n_estimators=100, max_depth=6, learning_rate=0.1')
    xgb_model = xgb.XGBRegressor(n_estimators=100, max_depth=6, 
                                  learning_rate=0.1, random_state=42)
    xgb_model.fit(X_train, y_train)
    print('   Model trained')
    
    return rf_model, xgb_model

def evaluate_models(y_test, y_baseline, y_rf, y_xgb):
    """Evaluate all models on test set"""
    print('\n10. Model Evaluation (Test Set)')
    print('-' * 70)
    
    mae_baseline = mean_absolute_error(y_test, y_baseline)
    mae_rf = mean_absolute_error(y_test, y_rf)
    mae_xgb = mean_absolute_error(y_test, y_xgb)
    
    rmse_baseline = np.sqrt(mean_squared_error(y_test, y_baseline))
    rmse_rf = np.sqrt(mean_squared_error(y_test, y_rf))
    rmse_xgb = np.sqrt(mean_squared_error(y_test, y_xgb))
    
    print('\nMEAN ABSOLUTE ERROR (MAE)')
    print('   Baseline:      ' + str(round(mae_baseline, 4)) + ' km/h')
    print('   RandomForest:  ' + str(round(mae_rf, 4)) + ' km/h')
    print('   XGBoost:       ' + str(round(mae_xgb, 4)) + ' km/h')
    
    print('\nROOT MEAN SQUARED ERROR (RMSE)')
    print('   Baseline:      ' + str(round(rmse_baseline, 4)) + ' km/h')
    print('   RandomForest:  ' + str(round(rmse_rf, 4)) + ' km/h')
    print('   XGBoost:       ' + str(round(rmse_xgb, 4)) + ' km/h')
    
    rf_mae_improvement = ((mae_baseline - mae_rf) / mae_baseline) * 100
    xgb_mae_improvement = ((mae_baseline - mae_xgb) / mae_baseline) * 100
    
    rf_rmse_improvement = ((rmse_baseline - rmse_rf) / rmse_baseline) * 100
    xgb_rmse_improvement = ((rmse_baseline - rmse_xgb) / rmse_baseline) * 100
    
    print('\n% IMPROVEMENT OVER BASELINE')
    print('\n   RandomForest:')
    print('      MAE improvement:  ' + str(round(rf_mae_improvement, 2)) + '%')
    print('      RMSE improvement: ' + str(round(rf_rmse_improvement, 2)) + '%')
    
    print('\n   XGBoost:')
    print('      MAE improvement:  ' + str(round(xgb_mae_improvement, 2)) + '%')
    print('      RMSE improvement: ' + str(round(xgb_rmse_improvement, 2)) + '%')
    
    print('\nSTATISTICAL SIGNIFICANCE (Wilcoxon signed-rank test)')
    
    rf_errors = np.abs(y_test.values - y_rf)
    baseline_errors = np.abs(y_test.values - y_baseline)
    statistic_rf, pvalue_rf = stats.wilcoxon(rf_errors, baseline_errors)
    
    xgb_errors = np.abs(y_test.values - y_xgb)
    statistic_xgb, pvalue_xgb = stats.wilcoxon(xgb_errors, baseline_errors)
    
    sig_rf = 'Significant' if pvalue_rf < 0.05 else 'Not significant'
    sig_xgb = 'Significant' if pvalue_xgb < 0.05 else 'Not significant'
    
    print('   RandomForest vs Baseline: p-value = ' + str(round(pvalue_rf, 6)) + ' (' + sig_rf + ')')
    print('   XGBoost vs Baseline:      p-value = ' + str(round(pvalue_xgb, 6)) + ' (' + sig_xgb + ')')
    
    return {
        'mae_baseline': mae_baseline,
        'mae_rf': mae_rf,
        'mae_xgb': mae_xgb,
        'rmse_baseline': rmse_baseline,
        'rmse_rf': rmse_rf,
        'rmse_xgb': rmse_xgb,
        'rf_mae_improvement': rf_mae_improvement,
        'xgb_mae_improvement': xgb_mae_improvement,
        'rf_rmse_improvement': rf_rmse_improvement,
        'xgb_rmse_improvement': xgb_rmse_improvement,
        'pvalue_rf': pvalue_rf,
        'pvalue_xgb': pvalue_xgb
    }

def save_predictions(df_test, y_baseline, y_rf, y_xgb, metrics, output_file='ml_results.csv'):
    """Save predictions and metrics to CSV"""
    print('\nSaving predictions to ' + output_file + '...')
    
    results_df = pd.DataFrame({
        'timestamp': df_test['timestamp'].values,
        'segment': df_test['segment'].values,
        'actual_speed': df_test['speed'].values,
        'baseline_speed': y_baseline,
        'rf_speed': y_rf,
        'xgb_speed': y_xgb,
        'baseline_error': np.abs(df_test['speed'].values - y_baseline),
        'rf_error': np.abs(df_test['speed'].values - y_rf),
        'xgb_error': np.abs(df_test['speed'].values - y_xgb)
    })
    
    results_df.to_csv(output_file, index=False)
    print('   Saved ' + str(len(results_df)) + ' rows to ' + output_file)
    print('   Sample rows:')
    print(results_df.head(10).to_string(index=False))
    
    return results_df

def print_feature_importance(rf_model, xgb_model, feature_names):
    """Print feature importance from models"""
    print('\nFEATURE IMPORTANCE')
    print('-' * 70)
    
    print('\nRandom Forest Feature Importance:')
    rf_importance = pd.DataFrame({
        'feature': feature_names,
        'importance': rf_model.feature_importances_
    }).sort_values('importance', ascending=False)
    
    for idx, row in rf_importance.iterrows():
        bar = '█' * int(row['importance'] * 100)
        print('   ' + str(row['feature']).ljust(25) + ' ' + bar + ' ' + str(round(row['importance'], 4)))
    
    print('\nXGBoost Feature Importance:')
    xgb_importance_dict = xgb_model.get_booster().get_score(importance_type='weight')
    if xgb_importance_dict:
        xgb_importance = pd.DataFrame({
            'feature': list(xgb_importance_dict.keys()),
            'importance': list(xgb_importance_dict.values())
        }).sort_values('importance', ascending=False)
        
        for idx, row in xgb_importance.iterrows():
            max_imp = max(xgb_importance['importance'])
            bar = '█' * int(row['importance'] / max_imp * 50)
            print('   ' + str(row['feature']).ljust(25) + ' ' + bar + ' ' + str(int(row['importance'])))
    else:
        print('   (No features with non-zero importance)')

def load_stop_data(frontend_index_path):
    """Load STOP_DATA coordinates from frontend/index.html"""
    if not os.path.exists(frontend_index_path):
        raise FileNotFoundError('STOP_DATA file not found: ' + frontend_index_path)

    with open(frontend_index_path, 'r', encoding='utf-8') as file:
        content = file.read()

    pattern = r'\{\s*stop_id:\s*"([^"]+)",[^}]*?latitude:\s*([-0-9.]+),\s*longitude:\s*([-0-9.]+)'
    matches = re.findall(pattern, content)

    stop_map = {}
    for stop_id, lat_str, lon_str in matches:
        stop_map[stop_id] = {
            'latitude': float(lat_str),
            'longitude': float(lon_str)
        }

    if not stop_map:
        raise ValueError('No STOP_DATA entries found in frontend/index.html')

    return stop_map

def haversine_meters(lat1, lon1, lat2, lon2):
    """Compute Haversine distance in meters"""
    radius_m = 6371000.0
    phi1 = np.radians(lat1)
    phi2 = np.radians(lat2)
    delta_phi = np.radians(lat2 - lat1)
    delta_lambda = np.radians(lon2 - lon1)
    
    a = np.sin(delta_phi / 2.0) ** 2 + np.cos(phi1) * np.cos(phi2) * np.sin(delta_lambda / 2.0) ** 2
    c = 2.0 * np.arctan2(np.sqrt(a), np.sqrt(1.0 - a))
    return radius_m * c

def compute_segment_distances(segments, stop_map):
    """Compute distance in meters for each segment"""
    distances = {}
    for segment in segments:
        if '->' not in segment:
            continue
        from_stop, to_stop = segment.split('->')
        from_stop = from_stop.strip()
        to_stop = to_stop.strip()
        if from_stop not in stop_map or to_stop not in stop_map:
            continue
        lat1 = stop_map[from_stop]['latitude']
        lon1 = stop_map[from_stop]['longitude']
        lat2 = stop_map[to_stop]['latitude']
        lon2 = stop_map[to_stop]['longitude']
        distances[segment] = haversine_meters(lat1, lon1, lat2, lon2)

    return distances

def evaluate_eta(df_test, y_baseline, y_xgb, frontend_index_path, output_file='ml_eta_results.csv'):
    """Evaluate ETA predictions in seconds and save results"""
    print('\nETA EVALUATION RESULTS')
    print('-' * 70)

    stop_map = load_stop_data(frontend_index_path)
    segment_distances = compute_segment_distances(df_test['segment'].unique(), stop_map)

    df_eta = df_test[['timestamp', 'segment', 'speed']].copy().reset_index(drop=True)
    df_eta['distance_m'] = df_eta['segment'].map(segment_distances)

    valid_mask = df_eta['distance_m'].notna().values
    df_eta = df_eta[valid_mask].reset_index(drop=True)

    speed_mps = df_eta['speed'].values * (1000.0 / 3600.0)
    baseline_mps = y_baseline[:len(df_test)] * (1000.0 / 3600.0)
    xgb_mps = y_xgb[:len(df_test)] * (1000.0 / 3600.0)

    baseline_mps = baseline_mps[valid_mask]
    xgb_mps = xgb_mps[valid_mask]

    df_eta['actual_eta_seconds'] = df_eta['distance_m'].values / speed_mps
    df_eta['baseline_eta_seconds'] = df_eta['distance_m'].values / baseline_mps
    df_eta['xgb_eta_seconds'] = df_eta['distance_m'].values / xgb_mps

    df_eta['baseline_eta_error'] = np.abs(df_eta['actual_eta_seconds'] - df_eta['baseline_eta_seconds'])
    df_eta['xgb_eta_error'] = np.abs(df_eta['actual_eta_seconds'] - df_eta['xgb_eta_seconds'])

    mae_baseline = mean_absolute_error(df_eta['actual_eta_seconds'], df_eta['baseline_eta_seconds'])
    mae_xgb = mean_absolute_error(df_eta['actual_eta_seconds'], df_eta['xgb_eta_seconds'])

    rmse_baseline = np.sqrt(mean_squared_error(df_eta['actual_eta_seconds'], df_eta['baseline_eta_seconds']))
    rmse_xgb = np.sqrt(mean_squared_error(df_eta['actual_eta_seconds'], df_eta['xgb_eta_seconds']))

    improvement = ((mae_baseline - mae_xgb) / mae_baseline) * 100.0
    stat_eta, pvalue_eta = stats.wilcoxon(df_eta['xgb_eta_error'], df_eta['baseline_eta_error'])

    print('Baseline MAE (seconds): ' + str(round(mae_baseline, 4)))
    print('XGBoost MAE (seconds):  ' + str(round(mae_xgb, 4)))
    print('Baseline RMSE (seconds): ' + str(round(rmse_baseline, 4)))
    print('XGBoost RMSE (seconds):  ' + str(round(rmse_xgb, 4)))
    print('% improvement over baseline: ' + str(round(improvement, 2)) + '%')
    print('Wilcoxon p-value: ' + str(round(pvalue_eta, 6)))

    df_eta.to_csv(output_file, index=False)
    print('Saved ETA results to ' + output_file)

    return {
        'eta_mae_baseline': mae_baseline,
        'eta_mae_xgb': mae_xgb,
        'eta_rmse_baseline': rmse_baseline,
        'eta_rmse_xgb': rmse_xgb,
        'eta_improvement': improvement,
        'eta_pvalue': pvalue_eta,
        'eta_rows': len(df_eta)
    }

def evaluate_peak_offpeak_eta(df_test, y_baseline, y_xgb, frontend_index_path):
    """Evaluate ETA predictions for peak vs off-peak hours"""
    print('\nPEAK vs OFF-PEAK ETA PERFORMANCE')
    print('-' * 70)
    
    # Define peak hours: 8-10, 17-19
    peak_hours = set(list(range(8, 11)) + list(range(17, 20)))
    
    # Reset index and extract hour of day
    df_test_reset = df_test.reset_index(drop=True)
    df_test_reset['hour'] = df_test_reset['timestamp'].dt.hour
    
    # Create boolean masks for peak and off-peak
    peak_mask = df_test_reset['hour'].isin(peak_hours).values
    offpeak_mask = ~peak_mask
    
    # Load STOP_DATA and compute segment distances
    stop_map = load_stop_data(frontend_index_path)
    segment_distances = compute_segment_distances(df_test_reset['segment'].unique(), stop_map)
    
    # Helper function to compute ETA metrics for a subset
    def compute_eta_metrics(df_subset, y_baseline_subset, y_xgb_subset):
        """Compute MAE and improvement for peak or off-peak subset"""
        df_work = df_subset[['timestamp', 'segment', 'speed']].copy().reset_index(drop=True)
        df_work['distance_m'] = df_work['segment'].map(segment_distances)
        
        # Filter to valid segments only
        valid_mask = df_work['distance_m'].notna().values
        df_work = df_work[valid_mask].reset_index(drop=True)
        
        y_baseline_subset = y_baseline_subset[valid_mask]
        y_xgb_subset = y_xgb_subset[valid_mask]
        
        # Convert speeds to m/s
        speed_mps = df_work['speed'].values * (1000.0 / 3600.0)
        baseline_mps = y_baseline_subset * (1000.0 / 3600.0)
        xgb_mps = y_xgb_subset * (1000.0 / 3600.0)
        
        # Compute ETA in seconds
        df_work['actual_eta_seconds'] = df_work['distance_m'].values / speed_mps
        df_work['baseline_eta_seconds'] = df_work['distance_m'].values / baseline_mps
        df_work['xgb_eta_seconds'] = df_work['distance_m'].values / xgb_mps
        
        # Calculate MAE
        mae_baseline = mean_absolute_error(df_work['actual_eta_seconds'], df_work['baseline_eta_seconds'])
        mae_xgb = mean_absolute_error(df_work['actual_eta_seconds'], df_work['xgb_eta_seconds'])
        
        # Calculate improvement percentage
        improvement = ((mae_baseline - mae_xgb) / mae_baseline) * 100.0
        
        return mae_baseline, mae_xgb, improvement
    
    # Compute metrics for peak hours
    mae_baseline_peak, mae_xgb_peak, improvement_peak = compute_eta_metrics(
        df_test_reset[peak_mask].reset_index(drop=True),
        y_baseline[peak_mask],
        y_xgb[peak_mask]
    )
    
    # Compute metrics for off-peak hours
    mae_baseline_offpeak, mae_xgb_offpeak, improvement_offpeak = compute_eta_metrics(
        df_test_reset[offpeak_mask].reset_index(drop=True),
        y_baseline[offpeak_mask],
        y_xgb[offpeak_mask]
    )
    
    # Print results
    print('\nPeak MAE baseline:     ' + str(round(mae_baseline_peak, 4)) + ' seconds')
    print('Peak MAE XGBoost:      ' + str(round(mae_xgb_peak, 4)) + ' seconds')
    print('Peak improvement %:    ' + str(round(improvement_peak, 2)) + '%')
    
    print('\nOff-peak MAE baseline: ' + str(round(mae_baseline_offpeak, 4)) + ' seconds')
    print('Off-peak MAE XGBoost:  ' + str(round(mae_xgb_offpeak, 4)) + ' seconds')
    print('Off-peak improvement %: ' + str(round(improvement_offpeak, 2)) + '%')

def analyze_shap(xgb_model, X_test, feature_names):
    """SHAP Analysis for XGBoost - Feature Importance Explanation"""
    print('\nSHAP ANALYSIS FOR XGBOOST')
    print('-' * 70)
    
    print('Computing SHAP values...')
    explainer = shap.TreeExplainer(xgb_model)
    shap_values = explainer.shap_values(X_test)
    
    print('Generating SHAP summary plot (bar)...')
    plt.figure(figsize=(12, 8))
    shap.summary_plot(shap_values, X_test, feature_names=feature_names, plot_type='bar', show=False)
    plt.tight_layout()
    plt.savefig('shap_summary_bar.png', dpi=300, bbox_inches='tight')
    plt.close()
    print('   Saved: shap_summary_bar.png')
    
    print('Generating SHAP summary plot (dot)...')
    plt.figure(figsize=(12, 10))
    shap.summary_plot(shap_values, X_test, feature_names=feature_names, plot_type='dot', show=False)
    plt.tight_layout()
    plt.savefig('shap_summary_dot.png', dpi=300, bbox_inches='tight')
    plt.close()
    print('   Saved: shap_summary_dot.png')
    
    print('SHAP analysis complete')

def analyze_eta_residuals(df_test, y_baseline, y_xgb, frontend_index_path):
    """Residual Error Analysis for ETA Predictions"""
    print('\nRESIDUAL ERROR ANALYSIS (ETA LEVEL)')
    print('-' * 70)
    
    # Load STOP_DATA and compute segment distances
    stop_map = load_stop_data(frontend_index_path)
    segment_distances = compute_segment_distances(df_test['segment'].unique(), stop_map)
    
    df_work = df_test[['timestamp', 'segment', 'speed']].copy().reset_index(drop=True)
    df_work['distance_m'] = df_work['segment'].map(segment_distances)
    
    # Filter to valid segments
    valid_mask = df_work['distance_m'].notna().values
    df_work = df_work[valid_mask].reset_index(drop=True)
    
    y_baseline_valid = y_baseline[valid_mask]
    y_xgb_valid = y_xgb[valid_mask]
    
    # Convert speeds to m/s
    speed_mps = df_work['speed'].values * (1000.0 / 3600.0)
    baseline_mps = y_baseline_valid * (1000.0 / 3600.0)
    xgb_mps = y_xgb_valid * (1000.0 / 3600.0)
    
    # Compute ETA and residuals
    actual_eta_seconds = df_work['distance_m'].values / speed_mps
    baseline_eta_seconds = df_work['distance_m'].values / baseline_mps
    xgb_eta_seconds = df_work['distance_m'].values / xgb_mps
    
    baseline_residuals = baseline_eta_seconds - actual_eta_seconds
    xgb_residuals = xgb_eta_seconds - actual_eta_seconds
    
    print('Computing residuals...')
    print('   Baseline residuals - Min: ' + str(round(baseline_residuals.min(), 2)) + 
          ', Max: ' + str(round(baseline_residuals.max(), 2)) + 
          ', Mean: ' + str(round(baseline_residuals.mean(), 2)))
    print('   XGBoost residuals - Min: ' + str(round(xgb_residuals.min(), 2)) + 
          ', Max: ' + str(round(xgb_residuals.max(), 2)) + 
          ', Mean: ' + str(round(xgb_residuals.mean(), 2)))
    
    # Create residual histogram
    print('Generating residual histogram...')
    fig, axes = plt.subplots(1, 2, figsize=(15, 5))
    
    axes[0].hist(baseline_residuals, bins=50, alpha=0.7, color='blue', edgecolor='black')
    axes[0].set_title('Baseline ETA Residuals Distribution', fontsize=14, fontweight='bold')
    axes[0].set_xlabel('Residual (seconds)', fontsize=12)
    axes[0].set_ylabel('Frequency', fontsize=12)
    axes[0].axvline(baseline_residuals.mean(), color='red', linestyle='--', linewidth=2, label=f'Mean: {baseline_residuals.mean():.2f}s')
    axes[0].legend()
    axes[0].grid(True, alpha=0.3)
    
    axes[1].hist(xgb_residuals, bins=50, alpha=0.7, color='green', edgecolor='black')
    axes[1].set_title('XGBoost ETA Residuals Distribution', fontsize=14, fontweight='bold')
    axes[1].set_xlabel('Residual (seconds)', fontsize=12)
    axes[1].set_ylabel('Frequency', fontsize=12)
    axes[1].axvline(xgb_residuals.mean(), color='red', linestyle='--', linewidth=2, label=f'Mean: {xgb_residuals.mean():.2f}s')
    axes[1].legend()
    axes[1].grid(True, alpha=0.3)
    
    plt.tight_layout()
    plt.savefig('eta_residual_histogram.png', dpi=300, bbox_inches='tight')
    plt.close()
    print('   Saved: eta_residual_histogram.png')

def analyze_eta_error_cdf(df_test, y_baseline, y_xgb, frontend_index_path):
    """Cumulative Distribution Function Comparison for ETA Errors"""
    print('\nCDF COMPARISON (BASELINE vs XGBOOST)')
    print('-' * 70)
    
    # Load STOP_DATA and compute segment distances
    stop_map = load_stop_data(frontend_index_path)
    segment_distances = compute_segment_distances(df_test['segment'].unique(), stop_map)
    
    df_work = df_test[['timestamp', 'segment', 'speed']].copy().reset_index(drop=True)
    df_work['distance_m'] = df_work['segment'].map(segment_distances)
    
    # Filter to valid segments
    valid_mask = df_work['distance_m'].notna().values
    df_work = df_work[valid_mask].reset_index(drop=True)
    
    y_baseline_valid = y_baseline[valid_mask]
    y_xgb_valid = y_xgb[valid_mask]
    
    # Convert speeds to m/s
    speed_mps = df_work['speed'].values * (1000.0 / 3600.0)
    baseline_mps = y_baseline_valid * (1000.0 / 3600.0)
    xgb_mps = y_xgb_valid * (1000.0 / 3600.0)
    
    # Compute ETA and absolute errors
    actual_eta_seconds = df_work['distance_m'].values / speed_mps
    baseline_eta_seconds = df_work['distance_m'].values / baseline_mps
    xgb_eta_seconds = df_work['distance_m'].values / xgb_mps
    
    baseline_abs_errors = np.abs(baseline_eta_seconds - actual_eta_seconds)
    xgb_abs_errors = np.abs(xgb_eta_seconds - actual_eta_seconds)
    
    print('Computing CDFs...')
    
    # Compute CDFs
    baseline_sorted = np.sort(baseline_abs_errors)
    xgb_sorted = np.sort(xgb_abs_errors)
    
    baseline_cdf = np.arange(1, len(baseline_sorted) + 1) / len(baseline_sorted)
    xgb_cdf = np.arange(1, len(xgb_sorted) + 1) / len(xgb_sorted)
    
    print('Generating CDF comparison plot...')
    plt.figure(figsize=(12, 7))
    
    plt.plot(baseline_sorted, baseline_cdf, label='Baseline', linewidth=2.5, color='blue')
    plt.plot(xgb_sorted, xgb_cdf, label='XGBoost', linewidth=2.5, color='green')
    
    plt.xlabel('Absolute ETA Error (seconds)', fontsize=12, fontweight='bold')
    plt.ylabel('Cumulative Probability', fontsize=12, fontweight='bold')
    plt.title('CDF Comparison: Baseline vs XGBoost ETA Errors', fontsize=14, fontweight='bold')
    plt.legend(fontsize=12, loc='lower right')
    plt.grid(True, alpha=0.3)
    plt.tight_layout()
    
    plt.savefig('eta_error_cdf.png', dpi=300, bbox_inches='tight')
    plt.close()
    print('   Saved: eta_error_cdf.png')

def compute_percentile_metrics(df_test, y_baseline, y_xgb, frontend_index_path):
    """Compute P50 and P90 error percentiles for Baseline and XGBoost"""
    print('\nPERCENTILE METRICS (P50 and P90 ETA ERROR)')
    print('-' * 70)
    
    # Load STOP_DATA and compute segment distances
    stop_map = load_stop_data(frontend_index_path)
    segment_distances = compute_segment_distances(df_test['segment'].unique(), stop_map)
    
    df_work = df_test[['timestamp', 'segment', 'speed']].copy().reset_index(drop=True)
    df_work['distance_m'] = df_work['segment'].map(segment_distances)
    
    # Filter to valid segments
    valid_mask = df_work['distance_m'].notna().values
    df_work = df_work[valid_mask].reset_index(drop=True)
    
    y_baseline_valid = y_baseline[valid_mask]
    y_xgb_valid = y_xgb[valid_mask]
    
    # Convert speeds to m/s
    speed_mps = df_work['speed'].values * (1000.0 / 3600.0)
    baseline_mps = y_baseline_valid * (1000.0 / 3600.0)
    xgb_mps = y_xgb_valid * (1000.0 / 3600.0)
    
    # Compute ETA and absolute errors
    actual_eta_seconds = df_work['distance_m'].values / speed_mps
    baseline_eta_seconds = df_work['distance_m'].values / baseline_mps
    xgb_eta_seconds = df_work['distance_m'].values / xgb_mps
    
    baseline_abs_errors = np.abs(baseline_eta_seconds - actual_eta_seconds)
    xgb_abs_errors = np.abs(xgb_eta_seconds - actual_eta_seconds)
    
    # Compute percentiles
    baseline_p50 = np.percentile(baseline_abs_errors, 50)
    baseline_p90 = np.percentile(baseline_abs_errors, 90)
    xgb_p50 = np.percentile(xgb_abs_errors, 50)
    xgb_p90 = np.percentile(xgb_abs_errors, 90)
    
    print('\nBASELINE:')
    print('   P50 (median) ETA error: ' + str(round(baseline_p50, 4)) + ' seconds')
    print('   P90 ETA error:          ' + str(round(baseline_p90, 4)) + ' seconds')
    
    print('\nXGBOOST:')
    print('   P50 (median) ETA error: ' + str(round(xgb_p50, 4)) + ' seconds')
    print('   P90 ETA error:          ' + str(round(xgb_p90, 4)) + ' seconds')
    
    print('\nIMPROVEMENT:')
    p50_improvement = ((baseline_p50 - xgb_p50) / baseline_p50) * 100.0
    p90_improvement = ((baseline_p90 - xgb_p90) / baseline_p90) * 100.0
    print('   P50 improvement: ' + str(round(p50_improvement, 2)) + '%')
    print('   P90 improvement: ' + str(round(p90_improvement, 2)) + '%')
    
    return {
        'baseline_p50': baseline_p50,
        'baseline_p90': baseline_p90,
        'xgb_p50': xgb_p50,
        'xgb_p90': xgb_p90,
        'p50_improvement': p50_improvement,
        'p90_improvement': p90_improvement
    }

def main():
    """Main pipeline"""
    try:
        df = load_data('trip_history_ml_ready.csv')
        df = preprocess_data(df)
        df = create_rolling_features(df)
        df_train, df_test = split_data(df)
        X_train, y_train, X_test, y_test = prepare_features(df_train, df_test)
        y_baseline = baseline_predictor(X_test, df_test)
        rf_model, xgb_model = train_models(X_train, y_train)
        y_rf = rf_model.predict(X_test)
        y_xgb = xgb_model.predict(X_test)
        metrics = evaluate_models(y_test, y_baseline, y_rf, y_xgb)

        frontend_index_path = os.path.join('..', 'frontend', 'index.html')
        eta_metrics = evaluate_eta(df_test, y_baseline, y_xgb, frontend_index_path)
        
        # Peak vs off-peak analysis
        evaluate_peak_offpeak_eta(df_test, y_baseline, y_xgb, frontend_index_path)
        
        feature_cols = ['is_weekend', 'hour_sin', 'hour_cos', 'hour_of_day',
                        'seg_speed_last_1', 'seg_speed_last_3_mean', 
                        'seg_speed_last_6_mean', 'seg_speed_std_6']
        print_feature_importance(rf_model, xgb_model, feature_cols)
        
        results_df = save_predictions(df_test, y_baseline, y_rf, y_xgb, metrics)
        
        # ============================================================
        # ADVANCED MODEL ANALYSIS (IEEE Research Mode)
        # ============================================================
        print('\n' + '=' * 70)
        print('ADVANCED MODEL ANALYSIS')
        print('=' * 70)
        
        # SHAP Analysis
        analyze_shap(xgb_model, X_test, feature_cols)
        
        # Residual Error Analysis
        analyze_eta_residuals(df_test, y_baseline, y_xgb, frontend_index_path)
        
        # CDF Comparison
        analyze_eta_error_cdf(df_test, y_baseline, y_xgb, frontend_index_path)
        
        # Percentile Metrics
        percentile_metrics = compute_percentile_metrics(df_test, y_baseline, y_xgb, frontend_index_path)
        
        # ============================================================
        # FINAL SUMMARY
        # ============================================================
        print('\n' + '=' * 70)
        print('PIPELINE COMPLETE')
        print('=' * 70)
        print('\nSummary:')
        print('   Total records processed: ' + str(len(df)))
        print('   Train set: ' + str(len(df_train)) + ' records')
        print('   Test set: ' + str(len(df_test)) + ' records')
        best_model = 'XGBoost' if metrics['mae_xgb'] < metrics['mae_rf'] else 'RandomForest'
        print('   Best model: ' + best_model)
        print('   Best MAE: ' + str(round(min(metrics['mae_rf'], metrics['mae_xgb']), 4)) + ' km/h')
        print('   Baseline MAE: ' + str(round(metrics['mae_baseline'], 4)) + ' km/h')
        print('   Improvement: ' + str(round(max(metrics['rf_mae_improvement'], metrics['xgb_mae_improvement']), 2)) + '%\n')
        print('   ETA MAE (baseline): ' + str(round(eta_metrics['eta_mae_baseline'], 4)) + ' sec')
        print('   ETA MAE (xgboost):  ' + str(round(eta_metrics['eta_mae_xgb'], 4)) + ' sec')
        print('   ETA improvement:    ' + str(round(eta_metrics['eta_improvement'], 2)) + '%')
        print('   ETA p-value:        ' + str(round(eta_metrics['eta_pvalue'], 6)) + '\n')
        
        print('\n' + '=' * 70)
        print('PERCENTILE METRICS SUMMARY')
        print('=' * 70)
        print('   Baseline P50: ' + str(round(percentile_metrics['baseline_p50'], 4)) + ' sec')
        print('   XGBoost P50:  ' + str(round(percentile_metrics['xgb_p50'], 4)) + ' sec')
        print('   P50 Improvement: ' + str(round(percentile_metrics['p50_improvement'], 2)) + '%\n')
        print('   Baseline P90: ' + str(round(percentile_metrics['baseline_p90'], 4)) + ' sec')
        print('   XGBoost P90:  ' + str(round(percentile_metrics['xgb_p90'], 4)) + ' sec')
        print('   P90 Improvement: ' + str(round(percentile_metrics['p90_improvement'], 2)) + '%\n')
        
        print('\n' + '=' * 70)
        print('GENERATED VISUALIZATIONS')
        print('=' * 70)
        print('   ✓ shap_summary_bar.png (SHAP Bar Plot)')
        print('   ✓ shap_summary_dot.png (SHAP Dot Plot)')
        print('   ✓ eta_residual_histogram.png (Residual Distribution)')
        print('   ✓ eta_error_cdf.png (Error CDF Comparison)')
        print('\nAll plots saved successfully!')
        
    except Exception as e:
        print('\nError: ' + str(e))
        import traceback
        traceback.print_exc()

if __name__ == '__main__':
    main()
