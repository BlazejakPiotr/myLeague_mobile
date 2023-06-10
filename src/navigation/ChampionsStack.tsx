import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {getColors} from '../utils/theme/theme';
import HomeScreen from '../screens/main/HomeScreen';
import FillSummonerScreen from '../screens/main/FillSummonerScreen';

const Stack = createStackNavigator<ChampionStackParamList>();

export type ChampionStackParamList = {
  Champions: undefined;
  ChampionDetails: undefined;
};
export const ChampionStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: getColors('hextechBlack')},
      }}>
      <Stack.Screen name="Champions" component={HomeScreen} />
      <Stack.Screen name="ChampionDetails" component={FillSummonerScreen} />
    </Stack.Navigator>
  );
};
