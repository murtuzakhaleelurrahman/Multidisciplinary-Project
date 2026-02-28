"""
🤖 XGBOOST ETA MODEL TRAINING

This script trains an XGBoost regressor on the segment-level dataset
to predict bus travel times and compare against mathematical ETA.

Usage:
   python train_eta_model.py

Output:
   - eta_model.json: Trained XGBoost model
   - model_evaluation.json: Performance metrics
   - feature_importance.csv: Feature importance ranking
   - model_predictions.csv: Test set predictions vs actuals
"""

import os
import json
import pandas as pd
import numpy as np
import xgboost as xgb
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.preprocessing import LabelEncoder
from sklearn.metrics import (
    mean_absolute_error,
    mean_squared_error,
    r2_score,
    mean_absolute_percentage_error
)
import warnings

warnings.filterwarnings('ignore')


# ============================================================================
# 🔧 CONFIGURATION
# ============================================================================

DATASET_PATH = "segment_dataset.csv"
MODEL_OUTPUT = "eta_model.json"
METRICS_OUTPUT = "model_evaluation.json"
FEATURE_IMPORTANCE_OUTPUT = "feature_importance.csv"
PREDICTIONS_OUTPUT = "model_predictions.csv"

RANDOM_STATE = 42
TEST_SIZE = 0.2


# ============================================================================
# 📊 DATA LOADING & PREPARATION
# ============================================================================

def load_and_prepare_data(dataset_path):
    """Load the ML dataset and prepare for training."""
    print("📥 Loading dataset...")
    
    if not os.path.exists(dataset_path):
        raise FileNotFoundError(
            f"Dataset not found: {dataset_path}\n"
            f"Please run 'python eta_pipeline.py' first to generate the dataset."
        )
    
    df = pd.read_csv(dataset_path)
    print(f"   ✓ Loaded {len(df)} traversal records")
    print(f"   ✓ Columns: {list(df.columns)}")
    
    # Validate dataset
    if 'travel_time_s' not in df.columns:
        raise ValueError("Dataset missing 'travel_time_s' column (target variable)")
    
    # Show basic statistics
    print(f"\n   📈 Target Variable (travel_time_s):")
    print(f"      Mean: {df['travel_time_s'].mean():.1f}s (~{df['travel_time_s'].mean()/60:.1f} minutes)")
    print(f"      Std:  {df['travel_time_s'].std():.1f}s")
    print(f"      Min:  {df['travel_time_s'].min():.1f}s")
    print(f"      Max:  {df['travel_time_s'].max():.1f}s")
    
    return df


def encode_categorical_features(X):
    """Encode categorical columns for tree model."""
    print("\n🔧 Encoding categorical features...")
    
    label_encoders = {}
    categorical_cols = X.select_dtypes(include=['object']).columns
    
    for col in categorical_cols:
        le = LabelEncoder()
        X[col] = le.fit_transform(X[col].astype(str))
        label_encoders[col] = le
        print(f"   ✓ Encoded '{col}': {len(le.classes_)} unique values")
    
    return X, label_encoders


def prepare_train_test_split(df, test_size=0.2, random_state=42):
    """Create train/test split."""
    print(f"\n📊 Creating train/test split ({int(100*(1-test_size))}% / {int(100*test_size)})...")
    
    # Separate features and target
    X = df.drop(['travel_time_s', 'entry_ts'], axis=1)
    y = df['travel_time_s']
    
    # Keep bus_id, route_id, segment for later analysis
    metadata = df[['bus_id', 'route_id', 'segment', 'entry_ts']].copy()
    
    # Encode categoricals
    X, encoders = encode_categorical_features(X)
    
    # Train-test split
    X_train, X_test, y_train, y_test, meta_train, meta_test = train_test_split(
        X, y, metadata,
        test_size=test_size,
        random_state=random_state
    )
    
    print(f"   ✓ Training set: {len(X_train)} samples")
    print(f"   ✓ Test set: {len(X_test)} samples")
    
    return X_train, X_test, y_train, y_test, meta_test, X.columns.tolist()


# ============================================================================
# 🤖 MODEL TRAINING
# ============================================================================

def train_xgboost_model(X_train, y_train, X_test, y_test):
    """Train XGBoost regressor with optimized hyperparameters."""
    print("\n🤖 Training XGBoost model...")
    
    model = xgb.XGBRegressor(
        n_estimators=200,          # Number of boosting rounds
        max_depth=6,               # Tree depth
        learning_rate=0.1,         # Shrinkage
        subsample=0.8,             # Row sampling
        colsample_bytree=0.8,      # Feature sampling
        min_child_weight=1,        # Minimum child weight
        gamma=0,                   # Minimum loss reduction
        random_state=RANDOM_STATE,
        tree_method='hist',        # Faster histogram-based method
        device='cpu'
    )
    
    # Train with early stopping
    model.fit(
        X_train, y_train,
        eval_set=[(X_test, y_test)],
        verbose=False,
        early_stopping_rounds=20
    )
    
    print(f"   ✓ Model trained ({model.n_estimators} estimators)")
    
    return model


# ============================================================================
# 📈 MODEL EVALUATION
# ============================================================================

def evaluate_model(model, X_train, X_test, y_train, y_test, meta_test):
    """Evaluate model on train and test sets."""
    print("\n📈 Evaluating model...")
    
    # Predictions
    y_train_pred = model.predict(X_train)
    y_test_pred = model.predict(X_test)
    
    # Metrics
    metrics = {
        'train': {
            'mae': float(mean_absolute_error(y_train, y_train_pred)),
            'rmse': float(np.sqrt(mean_squared_error(y_train, y_train_pred))),
            'r2': float(r2_score(y_train, y_train_pred)),
            'mape': float(mean_absolute_percentage_error(y_train, y_train_pred))
        },
        'test': {
            'mae': float(mean_absolute_error(y_test, y_test_pred)),
            'rmse': float(np.sqrt(mean_squared_error(y_test, y_test_pred))),
            'r2': float(r2_score(y_test, y_test_pred)),
            'mape': float(mean_absolute_percentage_error(y_test, y_test_pred))
        }
    }
    
    # Display metrics
    print(f"\n   Training Set:")
    print(f"      MAE:  {metrics['train']['mae']:.2f}s")
    print(f"      RMSE: {metrics['train']['rmse']:.2f}s")
    print(f"      R²:   {metrics['train']['r2']:.4f}")
    print(f"      MAPE: {metrics['train']['mape']:.2%}")
    
    print(f"\n   Test Set:")
    print(f"      MAE:  {metrics['test']['mae']:.2f}s ({metrics['test']['mae']/y_test.mean()*100:.1f}% of mean)")
    print(f"      RMSE: {metrics['test']['rmse']:.2f}s")
    print(f"      R²:   {metrics['test']['r2']:.4f}")
    print(f"      MAPE: {metrics['test']['mape']:.2%}")
    
    # Cross-validation score
    cv_scores = cross_val_score(model, X_test, y_test, cv=5, scoring='r2')
    print(f"\n   Cross-Validation (5-fold):")
    print(f"      R² Mean: {cv_scores.mean():.4f} ± {cv_scores.std():.4f}")
    
    metrics['cross_validation'] = {
        'r2_mean': float(cv_scores.mean()),
        'r2_std': float(cv_scores.std())
    }
    
    return metrics, y_test_pred, y_test


def analyze_feature_importance(model, feature_names):
    """Analyze and display feature importance."""
    print("\n⭐ Feature Importance Analysis:")
    
    importance_df = pd.DataFrame({
        'feature': feature_names,
        'importance': model.feature_importances_,
        'importance_pct': (model.feature_importances_ / model.feature_importances_.sum()) * 100
    }).sort_values('importance', ascending=False)
    
    print(f"\n   Top 15 Features (by XGBoost gain):")
    for idx, row in importance_df.head(15).iterrows():
        print(f"      {row['feature']:30s} {row['importance_pct']:6.2f}%")
    
    return importance_df


def save_predictions(y_test, y_pred, meta_test, output_path):
    """Save predictions for analysis."""
    predictions_df = meta_test.copy()
    predictions_df['actual_travel_time_s'] = y_test.values
    predictions_df['predicted_travel_time_s'] = y_pred
    predictions_df['error_s'] = y_pred - y_test.values
    predictions_df['error_pct'] = (predictions_df['error_s'] / y_test.values) * 100
    
    predictions_df.to_csv(output_path, index=False)
    print(f"\n   ✓ Predictions saved: {output_path}")
    
    return predictions_df


# ============================================================================
# 💾 MODEL PERSISTENCE
# ============================================================================

def save_model_and_metrics(model, metrics, importance_df, model_path, metrics_path, importance_path):
    """Save model, metrics, and feature importance."""
    print(f"\n💾 Saving results...")
    
    # Save XGBoost model
    model.save_model(model_path)
    print(f"   ✓ Model saved: {model_path}")
    
    # Save metrics
    with open(metrics_path, 'w') as f:
        json.dump(metrics, f, indent=2)
    print(f"   ✓ Metrics saved: {metrics_path}")
    
    # Save feature importance
    importance_df.to_csv(importance_path, index=False)
    print(f"   ✓ Feature importance saved: {importance_path}")


# ============================================================================
# 🎯 MATHEMATICAL ETA BASELINE (FOR COMPARISON)
# ============================================================================

def compute_mathematical_eta_baseline(df):
    """
    Compute simple mathematical ETA baseline for comparison.
    
    ETA = distance / avg_speed
    
    Here we use segment average speed as proxy.
    """
    print("\n📐 Computing Mathematical ETA Baseline...")
    
    # Baseline: Use segment average speed across all data
    segment_avg_speed = df.groupby('segment')['avg_speed'].mean()
    
    # Segment lengths (dummy: 2km per segment for Vellore routes)
    # In real scenario, these would be from route master data
    segment_lengths_km = {segment: 2.0 for segment in segment_avg_speed.index}
    
    # Compute baseline ETAs
    baseline_etas = []
    
    for segment in df['segment'].unique():
        if segment in segment_lengths_km:
            length = segment_lengths_km[segment]
            avg_speed = segment_avg_speed.get(segment, 20)
            
            # ETA in seconds = distance / speed * 3600
            eta_s = (length / max(avg_speed, 1)) * 3600
            baseline_etas.append({
                'segment': segment,
                'baseline_eta_s': eta_s,
                'baseline_eta_min': eta_s / 60
            })
    
    baseline_df = pd.DataFrame(baseline_etas)
    print(f"   ✓ Computed baseline ETAs for {len(baseline_df)} segments")
    print(f"   ✓ Average baseline ETA: {baseline_df['baseline_eta_s'].mean():.1f}s")
    
    return baseline_df


# ============================================================================
# 📊 COMPARISON REPORT
# ============================================================================

def generate_comparison_report(y_test, y_pred, baseline_df, predictions_df):
    """Generate comparison between ML and mathematical ETA."""
    print("\n🔬 ML vs Mathematical ETA Comparison:")
    
    ml_mae = mean_absolute_error(y_test, y_pred)
    ml_rmse = np.sqrt(mean_squared_error(y_test, y_pred))
    
    # Merge baseline with predictions
    comparison = predictions_df.merge(baseline_df, on='segment', how='left')
    
    # Compute mathematical baseline error
    baseline_mae = mean_absolute_error(comparison['actual_travel_time_s'], comparison['baseline_eta_s'])
    baseline_rmse = np.sqrt(mean_squared_error(comparison['actual_travel_time_s'], comparison['baseline_eta_s']))
    
    # Calculate improvement
    improvement_mae = ((baseline_mae - ml_mae) / baseline_mae) * 100
    improvement_rmse = ((baseline_rmse - ml_rmse) / baseline_rmse) * 100
    
    print(f"\n   Mathematical Baseline:")
    print(f"      MAE:  {baseline_mae:.2f}s")
    print(f"      RMSE: {baseline_rmse:.2f}s")
    
    print(f"\n   ML Model (XGBoost):")
    print(f"      MAE:  {ml_mae:.2f}s")
    print(f"      RMSE: {ml_rmse:.2f}s")
    
    print(f"\n   🎯 ML Improvement:")
    print(f"      MAE:  {improvement_mae:.1f}% better")
    print(f"      RMSE: {improvement_rmse:.1f}% better")
    
    return {
        'baseline_mae': baseline_mae,
        'baseline_rmse': baseline_rmse,
        'ml_mae': ml_mae,
        'ml_rmse': ml_rmse,
        'improvement_mae_pct': improvement_mae,
        'improvement_rmse_pct': improvement_rmse
    }


# ============================================================================
# 🚀 MAIN EXECUTION
# ============================================================================

def main():
    """Execute full ML training pipeline."""
    
    print("\n" + "="*78)
    print("🤖 XGBOOST ETA MODEL TRAINING")
    print("="*78)
    
    try:
        # Load data
        df = load_and_prepare_data(DATASET_PATH)
        
        # Prepare train/test split
        X_train, X_test, y_train, y_test, meta_test, feature_names = prepare_train_test_split(
            df, test_size=TEST_SIZE, random_state=RANDOM_STATE
        )
        
        # Train model
        model = train_xgboost_model(X_train, y_train, X_test, y_test)
        
        # Evaluate
        metrics, y_pred, y_test_eval = evaluate_model(model, X_train, X_test, y_train, y_test, meta_test)
        
        # Feature importance
        importance_df = analyze_feature_importance(model, feature_names)
        
        # Save model and metrics
        save_model_and_metrics(model, metrics, importance_df, MODEL_OUTPUT, METRICS_OUTPUT, FEATURE_IMPORTANCE_OUTPUT)
        
        # Save predictions
        predictions_df = save_predictions(y_test_eval, y_pred, meta_test, PREDICTIONS_OUTPUT)
        
        # Mathematical baseline comparison
        baseline_df = compute_mathematical_eta_baseline(df)
        comparison = generate_comparison_report(y_test_eval, y_pred, baseline_df, predictions_df)
        
        print("\n" + "="*78)
        print("✅ MODEL TRAINING COMPLETE")
        print("="*78)
        print(f"\n📁 Output Files:")
        print(f"   1. {MODEL_OUTPUT} - Trained XGBoost model")
        print(f"   2. {METRICS_OUTPUT} - Performance metrics")
        print(f"   3. {FEATURE_IMPORTANCE_OUTPUT} - Feature rankings")
        print(f"   4. {PREDICTIONS_OUTPUT} - Test predictions")
        
        print(f"\n🎯 Key Takeaways:")
        print(f"   • XGBoost MAE: {metrics['test']['mae']:.2f}s")
        print(f"   • R² Score: {metrics['test']['r2']:.4f}")
        print(f"   • Top feature: {importance_df.iloc[0]['feature']}")
        print(f"   • ML vs Mathematical ETA: {comparison['improvement_mae_pct']:.1f}% better")
        
        print(f"\n📊 Next Steps:")
        print(f"   → Integrate model into backend API")
        print(f"   → Serve predictions via /api/eta endpoint")
        print(f"   → Monitor real-world performance")
        print(f"   → Retrain monthly with new data")
        
        print("\n" + "="*78 + "\n")
        
    except Exception as e:
        print(f"\n❌ Training failed: {str(e)}")
        raise


if __name__ == "__main__":
    main()
