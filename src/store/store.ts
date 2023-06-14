import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import loaderSlice from './reducers/loader/loader.slice';
import summonersSlice from './reducers/summoners/summoners.slice';
import dataSlice from './reducers/data/data.slice';

const rootReducer = combineReducers({
  loader: loaderSlice,
  summoners: summonersSlice,
  data: dataSlice,
});

const persistedReducer = persistReducer(
  {
    key: 'root',
    version: 1,
    storage: AsyncStorage,
    whitelist: ['user'],
  },
  rootReducer,
);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
