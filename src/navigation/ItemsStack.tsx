import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {getColors} from '../utils/theme/theme';
import HomeScreen from '../screens/main/HomeScreen';
import FillSummonerScreen from '../screens/main/FillSummonerScreen';

const Stack = createStackNavigator<ItemStackParamList>();

export type ItemStackParamList = {
  Items: undefined;
  ItemDetails: undefined;
};
export const ItemStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: getColors('hextechBlack')},
      }}>
      <Stack.Screen name="Items" component={HomeScreen} />
      <Stack.Screen name="ItemDetails" component={FillSummonerScreen} />
    </Stack.Navigator>
  );
};
