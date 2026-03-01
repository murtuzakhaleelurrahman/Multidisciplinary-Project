# Code Citations

## License: unknown
https://github.com/ksakloth/Material-Informatics/blob/f437e685bc538ec0f4ded573cbc9fbda1ab0f5c6/citrine.py

```
Here's the **full modified script** with peak vs off-peak ETA analysis:

```python
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
    print('   Target (spee
```


## License: unknown
https://github.com/ksakloth/Material-Informatics/blob/f437e685bc538ec0f4ded573cbc9fbda1ab0f5c6/citrine.py

```
Here's the **full modified script** with peak vs off-peak ETA analysis:

```python
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
    print('   Target (spee
```


## License: unknown
https://github.com/ksakloth/Material-Informatics/blob/f437e685bc538ec0f4ded573cbc9fbda1ab0f5c6/citrine.py

```
Here's the **full modified script** with peak vs off-peak ETA analysis:

```python
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
    print('   Target (spee
```


## License: unknown
https://github.com/ksakloth/Material-Informatics/blob/f437e685bc538ec0f4ded573cbc9fbda1ab0f5c6/citrine.py

```
Here's the **full modified script** with peak vs off-peak ETA analysis:

```python
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
    print('   Target (spee
```


## License: unknown
https://github.com/ksakloth/Material-Informatics/blob/f437e685bc538ec0f4ded573cbc9fbda1ab0f5c6/citrine.py

```
Here's the **full modified script** with peak vs off-peak ETA analysis:

```python
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
    print('   Target (spee
```


## License: unknown
https://github.com/ksakloth/Material-Informatics/blob/f437e685bc538ec0f4ded573cbc9fbda1ab0f5c6/citrine.py

```
Here's the **full modified script** with peak vs off-peak ETA analysis:

```python
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
    print('   Target (spee
```


## License: unknown
https://github.com/ksakloth/Material-Informatics/blob/f437e685bc538ec0f4ded573cbc9fbda1ab0f5c6/citrine.py

```
Here's the **full modified script** with peak vs off-peak ETA analysis:

```python
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
    print('   Target (spee
```


## License: unknown
https://github.com/ksakloth/Material-Informatics/blob/f437e685bc538ec0f4ded573cbc9fbda1ab0f5c6/citrine.py

```
Here's the **full modified script** with peak vs off-peak ETA analysis:

```python
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
    print('   Target (spee
```

