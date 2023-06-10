import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {getColors} from '../utils/theme/theme';
import HomeScreen from '../screens/main/HomeScreen';

const Stack = createStackNavigator<LeaderboardStackParamList>();

export type LeaderboardStackParamList = {
  Leaderboard: undefined;
};
export const LeaderboardStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: getColors('hextechBlack')},
      }}>
      <Stack.Screen name="Leaderboard" component={HomeScreen} />
    </Stack.Navigator>
  );
};
