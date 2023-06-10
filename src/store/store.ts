import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import loaderSlice from './reducers/loader/loader.slice';
import userSlice from './reducers/user/user.slice';

const rootReducer = combineReducers({
  loader: loaderSlice,
  user: userSlice,
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
