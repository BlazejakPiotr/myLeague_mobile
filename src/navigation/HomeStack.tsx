import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {getColors} from '../utils/theme/theme';
import HomeScreen from '../screens/main/HomeScreen';
import FillSummonerScreen from '../screens/main/FillSummonerScreen';

const Stack = createStackNavigator<HomeStackParamList>();

export type HomeStackParamList = {
  Home: undefined;
  FillSummoner: undefined;
};
export const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: getColors('hextechBlack')},
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="FillSummoner" component={FillSummonerScreen} />
    </Stack.Navigator>
  );
};
