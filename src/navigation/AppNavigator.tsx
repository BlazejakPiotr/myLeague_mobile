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

export const navigationRef = createNavigationContainerRef();

export const AppNavigator = () => {
  const dispatch = useAppDispatch();

  const appState = useAppSelector(state => state.loader.state);

  useEffect(() => {
    setTimeout(() => dispatch(loaderActions.setState('PROFILE_FILLED')), 2000);
  }, [dispatch]);
  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={getColors('hextechBlack')}
      />
      {appState === 'NEED_FILL' ? <FillSummonerScreen /> : null}
      {appState === 'PROFILE_FILLED' ? <MainStack /> : null}
    </NavigationContainer>
  );
};
