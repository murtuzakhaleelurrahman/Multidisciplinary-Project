#!/usr/bin/env python3
"""Production ML Training Script - Train and Save XGBoost ETA Model"""

import pandas as pd
import numpy as np
import pickle
import warnings
from sklearn.metrics import mean_absolute_error
import xgboost as xgb

warnings.filterwarnings('ignore')

def load_data(filepath):
    """Load and parse trip history CSV"""
    print('\n' + '='*70)
    print('PRODUCTION ML TRAINING - XGBoost ETA Model')
    print('='*70 + '\n')
    
    print('Loading: ' + filepath)
    df = pd.read_csv(filepath)
    print('Loaded ' + str(len(df)) + ' rows, ' + str(len(df.columns)) + ' columns\n')
    return df

def preprocess_data(df):
    """Preprocess: datetime, datetime features, missing values"""
    print('PREPROCESSING DATA')
    print('-' * 70)
    
    # Parse timestamp
    print('1. Parsing timestamp...')
    df['timestamp_str'] = df['timestamp'].str.split(' GMT').str[0]
    df['timestamp'] = pd.to_datetime(df['timestamp_str'], format='%a %b %d %Y %H:%M:%S')
    df = df.drop('timestamp_str', axis=1)
    
    # Sort by timestamp
    print('2. Sorting by timestamp...')
    df = df.sort_values('timestamp').reset_index(drop=True)
    
    # Check missing values
    print('3. Removing missing values...')
    cols_to_check = [col for col in df.columns if col != 'coordinates']
    df = df.dropna(subset=cols_to_check)
    
    # Create datetime features
    print('4. Creating datetime features...')
    df['is_weekend'] = df['timestamp'].dt.dayofweek.isin([5, 6]).astype(int)
    hour_radians = 2 * np.pi * df['hour_of_day'] / 24
    df['hour_sin'] = np.sin(hour_radians)
    df['hour_cos'] = np.cos(hour_radians)
    
    print('   Preprocessed ' + str(len(df)) + ' rows')
    return df.reset_index(drop=True)

def create_rolling_features(df):
    """Create rolling features per segment"""
    print('\n5. Creating rolling features per segment...')
    
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
    
    # Fill NaN values with global mean/zero
    df['seg_speed_last_1'].fillna(df['speed'].mean(), inplace=True)
    df['seg_speed_last_3_mean'].fillna(df['speed'].mean(), inplace=True)
    df['seg_speed_last_6_mean'].fillna(df['speed'].mean(), inplace=True)
    df['seg_speed_std_6'].fillna(0, inplace=True)
    
    print('   Rolling features created')
    return df

def split_data(df):
    """Chronological train/test split: 80% / 20%"""
    print('\n6. Splitting data (80% train / 20% test)...')
    
    split_idx = int(len(df) * 0.8)
    df_train = df.iloc[:split_idx].copy()
    df_test = df.iloc[split_idx:].copy()
    
    print('   Train: ' + str(len(df_train)) + ' rows')
    print('   Test:  ' + str(len(df_test)) + ' rows')
    
    return df_train, df_test

def prepare_features(df_train, df_test):
    """Prepare feature matrices and target"""
    print('\n7. Preparing feature matrices...')
    
    feature_cols = ['is_weekend', 'hour_sin', 'hour_cos', 'hour_of_day',
                    'seg_speed_last_1', 'seg_speed_last_3_mean', 
                    'seg_speed_last_6_mean', 'seg_speed_std_6']
    
    X_train = df_train[feature_cols].copy()
    y_train = df_train['speed'].copy()
    X_test = df_test[feature_cols].copy()
    y_test = df_test['speed'].copy()
    
    print('   X_train shape: ' + str(X_train.shape))
    print('   X_test shape: ' + str(X_test.shape))
    
    return X_train, y_train, X_test, y_test, feature_cols

def train_xgboost(X_train, y_train, X_test, y_test):
    """Train XGBoost model"""
    print('\n8. Training XGBoost model...')
    print('   Parameters: n_estimators=100, max_depth=6, learning_rate=0.1')
    
    model = xgb.XGBRegressor(
        n_estimators=100,
        max_depth=6,
        learning_rate=0.1,
        random_state=42
    )
    
    model.fit(X_train, y_train)
    
    # Quick validation
    y_pred = model.predict(X_test)
    mae = mean_absolute_error(y_test, y_pred)
    
    print('   Model trained successfully')
    print('   Validation MAE: ' + str(round(mae, 4)) + ' km/h')
    
    return model

def save_model(model, feature_cols):
    """Save trained model and feature columns"""
    print('\n9. Saving model artifacts...')
    
    # Save model
    with open('xgb_eta_model.pkl', 'wb') as f:
        pickle.dump(model, f)
    print('   ✓ Saved: xgb_eta_model.pkl')
    
    # Save feature columns
    with open('feature_columns.pkl', 'wb') as f:
        pickle.dump(feature_cols, f)
    print('   ✓ Saved: feature_columns.pkl')

def main():
    """Main training pipeline"""
    try:
        # Load and preprocess data
        df = load_data('trip_history_ml_ready.csv')
        df = preprocess_data(df)
        df = create_rolling_features(df)
        
        # Split data
        df_train, df_test = split_data(df)
        
        # Prepare features
        X_train, y_train, X_test, y_test, feature_cols = prepare_features(df_train, df_test)
        
        # Train model
        model = train_xgboost(X_train, y_train, X_test, y_test)
        
        # Save model
        save_model(model, feature_cols)
        
        # Final summary
        print('\n' + '='*70)
        print('TRAINING COMPLETE')
        print('='*70)
        print('\nModel artifacts saved:')
        print('   → xgb_eta_model.pkl')
        print('   → feature_columns.pkl')
        print('\nReady for production inference!')
        print('Use predict_eta.py to make predictions.\n')
        
    except Exception as e:
        print('\nError: ' + str(e))
        import traceback
        traceback.print_exc()

if __name__ == '__main__':
    main()
