import React from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {AppNavigator} from './src/navigation/AppNavigator';
import {StoreProvider} from './src/store/StoreProvider';
const App: React.FC = () => {
  return (
    <StoreProvider>
      <SafeAreaProvider>
        <KeyboardAvoidingView
          style={{flex: 1}}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
          <AppNavigator />
        </KeyboardAvoidingView>
      </SafeAreaProvider>
    </StoreProvider>
  );
};

export default App;
