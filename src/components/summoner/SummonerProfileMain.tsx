import {View, StyleSheet} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {config} from '../../config';
import {ISummoner} from '../../models/summoner';
import {getColors} from '../../utils/theme/theme';
import AppText from '../_common/AppText';
import {APP_PADDING} from '../../utils/constants';

const SummonerProfileMain = ({
  user,
  region,
}: {
  user: ISummoner;
  region: string;
}) => {
  return (
    <View style={styles.container}>
      <FastImage
        source={{
          uri:
            config.dataDragonUrl +
            'cdn/13.12.1/img/profileicon/' +
            user.profileIconId +
            '.png',
        }}
        style={{width: 75, height: 75, flex: 1}}
        resizeMode="contain"
      />
      <View style={{flex: 3, marginLeft: 20}}>
        <AppText s="H3" align="left">
          {user.name}
        </AppText>
        <AppText align="left" s="s">
          {region} - Level {user.summonerLevel}
        </AppText>
      </View>
    </View>
  );
};

export default SummonerProfileMain;

const styles = StyleSheet.create({
  container: {
    flexShrink: 1,
    backgroundColor: getColors('blue700'),
    alignContent: 'center',
    justifyContent: 'center',
    padding: APP_PADDING,
    flexDirection: 'row',
  },
});
