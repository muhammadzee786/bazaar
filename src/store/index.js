import {configureStore} from '@reduxjs/toolkit';
import {persistStore, persistCombineReducers} from 'redux-persist';
import storage from '@react-native-async-storage/async-storage';

import reducers from './reducers';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['session', 'setting'],
};

const persistedReducer = persistCombineReducers(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const persistor = persistStore(store);

export {store, persistor};
