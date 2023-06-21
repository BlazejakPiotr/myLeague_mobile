import {ScrollView, StyleSheet} from 'react-native';
import AppText from '../../components/_common/AppText';
import {getColors} from '../../utils/theme/theme';
import {APP_PADDING, DEVICE_WIDTH} from '../../utils/constants';
import FastImage from 'react-native-fast-image';
import {useAppSelector} from '../../store/hook';
import {getRankedEmblems} from '../../utils/helpers';
import SummonerProfileMain from '../../components/summoner/SummonerProfileMain';
import {View} from 'react-native';
import SummonerProfileRanked from '../../components/summoner/SummonerProfileRanked';

const OverviewTab: React.FC = () => {
  const userData = useAppSelector(state => state.summoners);
  const matchData = useAppSelector(state => state.match.matchHistory);
  const region = useAppSelector(state => state.data.region);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <SummonerProfileMain region={region.name} user={userData.user} />
      <View style={styles.ranked}>
        {userData?.ranked?.map(element => (
          <SummonerProfileRanked rank={element} />
        ))}
      </View>
      {matchData.slice(0, 3).map(match => (
        <View>
          <AppText>{match.info.gameId}</AppText>
        </View>
      ))}
    </ScrollView>
  );
};

export default OverviewTab;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: getColors('blue700'),
    alignContent: 'center',
    // padding
    width: DEVICE_WIDTH,

    flexDirection: 'column',
  },
  ranked: {
    width: DEVICE_WIDTH,
    flexDirection: 'row',
    paddingVertical: APP_PADDING,
  },
});
