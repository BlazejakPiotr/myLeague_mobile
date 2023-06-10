import {NavigatorScreenParams} from '@react-navigation/native';
import {BottomTabs, BottomTabsParamList} from './BottomTabs';
import {createStackNavigator} from '@react-navigation/stack';
import {getColors} from '../utils/theme/theme';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/main/HomeScreen';
import FillSummonerScreen from '../screens/main/FillSummonerScreen';
import {StyleSheet, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {HomeFillSvg, HomeSvg} from '../assets/svg/Home';
import {ChampionsFillSvg, ChampionsSvg} from '../assets/svg/Champions';
import {LeaderboardFillSvg, LeaderboardSvg} from '../assets/svg/Leaderboard';
import {ItemsFillSvg, ItemsSvg} from '../assets/svg/Items';
import ChampionsScreen from '../screens/champions/ChampionsScreen';
import ItemsScreen from '../screens/items/ItemsScreen';
import LeaderboardScreen from '../screens/leaderboard/LeaderboardScreen';

export type MainStackParamList = {
  Home: undefined;
  HomeScreen: undefined;
  FillSummoner: undefined;
  Champion: undefined;
  ChampionsScreen: undefined;
  ChampionDetailsScreen: undefined;
  Item: undefined;
  ItemsScreen: undefined;
  ItemDetailsScreen: undefined;
  Leaderboard: undefined;
  LeaderboardScreen: undefined;
};

const Stack = createStackNavigator<MainStackParamList>();
const Tab = createBottomTabNavigator<MainStackParamList>();

function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName={'HomeScreen'}
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: getColors('hextechBlack')},
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="FillSummoner" component={FillSummonerScreen} />
    </Stack.Navigator>
  );
}

function ChampionStack() {
  return (
    <Stack.Navigator
      initialRouteName={'ChampionsScreen'}
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: getColors('hextechBlack')},
      }}>
      <Stack.Screen name="ChampionsScreen" component={ChampionsScreen} />
      <Stack.Screen
        name="ChampionDetailsScreen"
        component={FillSummonerScreen}
      />
    </Stack.Navigator>
  );
}

function ItemStack() {
  return (
    <Stack.Navigator
      initialRouteName={'ItemsScreen'}
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: getColors('hextechBlack')},
      }}>
      <Stack.Screen name="ItemsScreen" component={ItemsScreen} />
      <Stack.Screen name="ItemDetailsScreen" component={FillSummonerScreen} />
    </Stack.Navigator>
  );
}

function LeaderboardStack() {
  return (
    <Stack.Navigator
      initialRouteName={'LeaderboardScreen'}
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: getColors('hextechBlack')},
      }}>
      <Stack.Screen name="LeaderboardScreen" component={LeaderboardScreen} />
    </Stack.Navigator>
  );
}

function FillSummonerProfileStack() {
  return (
    <Stack.Navigator
      initialRouteName={'FillSummoner'}
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: getColors('hextechBlack')},
      }}>
      <Stack.Screen name="FillSummoner" component={FillSummonerScreen} />
    </Stack.Navigator>
  );
}

type BottomIcon = BottomTabNavigationOptions['tabBarIcon'];

const TabIcons: Record<keyof BottomTabsParamList, BottomIcon> = {
  Home: props => (props.focused ? <HomeFillSvg /> : <HomeSvg />),
  Champions: props => (props.focused ? <ChampionsFillSvg /> : <ChampionsSvg />),
  Items: props => (props.focused ? <ItemsFillSvg /> : <ItemsSvg />),
  Leaderboard: props =>
    props.focused ? <LeaderboardFillSvg /> : <LeaderboardSvg />,
};

export const MainStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabNav,
      })}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: TabIcons.Home,
        }}
      />
      <Tab.Screen
        name="Champion"
        component={ChampionStack}
        options={{
          tabBarIcon: TabIcons.Champions,
        }}
      />
      <Tab.Screen
        name="Item"
        component={ItemStack}
        options={{
          tabBarIcon: TabIcons.Items,
        }}
      />
      <Tab.Screen
        name="Leaderboard"
        component={LeaderboardStack}
        options={{
          tabBarIcon: TabIcons.Leaderboard,
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabNav: {
    backgroundColor: getColors('greyCool'),
    height: RFValue(80),
  },
});
