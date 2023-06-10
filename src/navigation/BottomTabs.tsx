import React from 'react';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {HomeFillSvg, HomeSvg} from '../assets/svg/Home';
import {ChampionsFillSvg, ChampionsSvg} from '../assets/svg/Champions';
import {ItemsFillSvg, ItemsSvg} from '../assets/svg/Items';
import {LeaderboardFillSvg, LeaderboardSvg} from '../assets/svg/Leaderboard';
import {HomeStack} from './HomeStack';
import {ChampionStack} from './ChampionsStack';
import {ItemStack} from './ItemsStack';
import {LeaderboardStack} from './LeaderboardStack';

export type BottomTabsParamList = {
  Home: undefined;
  Champions: undefined;
  Items: undefined;
  Leaderboard: undefined;
};

type BottomIcon = BottomTabNavigationOptions['tabBarIcon'];

const TabIcons: Record<keyof BottomTabsParamList, BottomIcon> = {
  Home: props => (props.focused ? <HomeFillSvg /> : <HomeSvg />),
  Champions: props => (props.focused ? <ChampionsFillSvg /> : <ChampionsSvg />),
  Items: props => (props.focused ? <ItemsFillSvg /> : <ItemsSvg />),
  Leaderboard: props =>
    props.focused ? <LeaderboardFillSvg /> : <LeaderboardSvg />,
};

const Tab = createBottomTabNavigator<BottomTabsParamList>();

export function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false, tabBarShowLabel: false}}
      initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{tabBarIcon: TabIcons.Home}}
      />
      <Tab.Screen
        name="Champions"
        component={ChampionStack}
        options={{tabBarIcon: TabIcons.Champions}}
      />
      <Tab.Screen
        name="Items"
        component={ItemStack}
        options={{tabBarIcon: TabIcons.Items}}
      />
      <Tab.Screen
        name="Leaderboard"
        component={LeaderboardStack}
        options={{tabBarIcon: TabIcons.Leaderboard}}
      />
    </Tab.Navigator>
  );
}
