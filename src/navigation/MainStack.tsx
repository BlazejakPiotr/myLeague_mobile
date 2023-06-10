import {NavigatorScreenParams} from '@react-navigation/native';
import {BottomTabs, BottomTabsParamList} from './BottomTabs';
import {createStackNavigator} from '@react-navigation/stack';
import {getColors} from '../utils/theme/theme';

export type MainStackParamList = {
  Tabs: NavigatorScreenParams<BottomTabsParamList>;
};

const Stack = createStackNavigator<MainStackParamList>();

export const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: getColors('hextechBlack'),
        },
      }}>
      <Stack.Screen name="Tabs" component={BottomTabs} />
    </Stack.Navigator>
  );
};
