import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';
import store from './store';

interface StoreProviderProps {
  children: React.ReactNode;
}

export const StoreProvider = ({children}: StoreProviderProps) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistStore(store)}>
        {children}
      </PersistGate>
    </Provider>
  );
};
