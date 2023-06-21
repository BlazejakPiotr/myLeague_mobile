import {StyleSheet} from 'react-native';
import {getColors} from '../../utils/theme/theme';
import {useAppSelector} from '../../store/hook';
import {Top} from '../../navigation/MainStack';
import SummonerTabBar from '../../navigation/SummonerTabStack';
import OverviewTab from '../summoner/OverviewTab';

const HomeScreen: React.FC = () => {
  const state = useAppSelector(state => state.summoners.user);
  return (
    <Top.Navigator
      tabBar={props => <SummonerTabBar {...props} />}
      style={{
        flexGrow: 1,
      }}>
      <Top.Screen name="Overview" component={OverviewTab} />
      <Top.Screen
        name="Matches"
        component={OverviewTab}
        options={{title: 'Match history'}}
      />
      <Top.Screen name="Champions" component={OverviewTab} />
      <Top.Screen name="Stats" component={OverviewTab} />
    </Top.Navigator>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {backgroundColor: getColors('red')},
});
