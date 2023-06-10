import React, {useEffect} from 'react';
import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import {getColors} from '../utils/theme/theme';
import {useAppDispatch, useAppSelector} from '../store/hook';
import FillSummonerScreen from '../screens/main/FillSummonerScreen';
import {MainStack} from './MainStack';
import {loaderActions} from '../store/reducers/loader/loader.slice';
import SplashScreen from 'react-native-splash-screen';

export const navigationRef = createNavigationContainerRef();

export const AppNavigator = () => {
  const dispatch = useAppDispatch();

  const appState = useAppSelector(state => state.loader.state);

  useEffect(() => {
    setTimeout(() => dispatch(loaderActions.setState('NEED_FILL')), 2000);
  }, [dispatch]);

  useEffect(() => {
    if (appState !== 'LOADING') {
      SplashScreen.hide();
    }
  }, [appState]);

  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={getColors('hextechBlack')}
      />
      {appState === 'NEED_FILL' ? <FillSummonerScreen /> : <MainStack />}
    </NavigationContainer>
  );
};
