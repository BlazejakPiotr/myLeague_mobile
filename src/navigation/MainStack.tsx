import {NavigationProp} from '@react-navigation/native';
import {BottomTabsParamList} from './BottomTabs';
import {createStackNavigator} from '@react-navigation/stack';
import {getColors} from '../utils/theme/theme';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/main/HomeScreen';
import FillSummonerScreen from '../screens/main/FillSummonerScreen';
import {StyleSheet, View, TextInput, TouchableOpacity} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {HomeFillSvg, HomeSvg} from '../assets/svg/Home';
import {ChampionsFillSvg, ChampionsSvg} from '../assets/svg/Champions';
import {LeaderboardFillSvg, LeaderboardSvg} from '../assets/svg/Leaderboard';
import {ItemsFillSvg, ItemsSvg} from '../assets/svg/Items';
import ChampionsScreen from '../screens/champions/ChampionsScreen';
import ItemsScreen from '../screens/items/ItemsScreen';
import LeaderboardScreen from '../screens/leaderboard/LeaderboardScreen';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {APP_PADDING, DEVICE_WIDTH} from '../utils/constants';
import {SearchSvg} from '../assets/svg/Search';
import {SettingsSvg} from '../assets/svg/Settings';

export type MainStackParamList = {
  Home: undefined;
  Summoner: undefined;
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

export type HomeTopTabsParamList = {
  Overview: undefined;
  Matches: undefined;
  Champions: undefined;
  Stats: undefined;
};

const Stack = createStackNavigator<MainStackParamList>();
const Tab = createBottomTabNavigator<MainStackParamList>();
export const Top = createMaterialTopTabNavigator<HomeTopTabsParamList>();

const HomeHeader = ({
  navigation,
}: {
  navigation: NavigationProp<MainStackParamList>;
}) => (
  <View style={styles.header}>
    <View style={styles.inputContainer}>
      <SearchSvg />
      <TextInput
        placeholder="Summoner name"
        placeholderTextColor={getColors('grey150')}
        style={styles.inputField}
      />
    </View>
    <TouchableOpacity onPress={() => navigation.navigate('FillSummoner')}>
      <SettingsSvg />
    </TouchableOpacity>
  </View>
);

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        header: HomeHeader,
        headerShown: true,
        cardStyle: {backgroundColor: getColors('hextechBlack')},
      }}
      initialRouteName={'Home'}>
      <Stack.Screen name="Home" component={HomeScreen} />
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
        tabBarShowLabel: false,
        tabBarStyle: styles.tabNav,
        headerShown: false,
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
  header: {
    width: DEVICE_WIDTH,
    paddingHorizontal: APP_PADDING,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexGrow: 1,
    backgroundColor: getColors('greyCool'),
    borderColor: getColors('grey150'),
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 20,
    paddingHorizontal: RFValue(10),
  },
  inputField: {
    color: getColors('gold100'),
  },
});
