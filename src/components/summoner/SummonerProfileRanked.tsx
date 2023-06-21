import {View} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import AppText from '../_common/AppText';
import {IRankedResults} from '../../models/leaderboards';
import {getRankedEmblems} from '../../utils/helpers';

const SummonerProfileRanked = ({rank}: {rank: IRankedResults}) => {
  return (
    <View style={{flex: 1}}>
      <AppText
        fFamily="Spiegel_TT_Regular"
        s="s"
        style={{textTransform: 'capitalize'}}>
        {rank.queueType.includes('SOLO') ? 'RANKED SOLO/DUO' : 'RANKED FLEX'}
      </AppText>
      <FastImage
        source={getRankedEmblems[rank.tier]}
        resizeMode="cover"
        style={{height: 100}}
      />
      <AppText fFamily="BeaufortforLOL-Bold" s="l">
        {rank.tier} {rank.rank}
      </AppText>
      <AppText fFamily="BeaufortforLOL-Bold" s="xs">
        {rank.leaguePoints}LP ({rank.wins}W {rank.losses}L)
      </AppText>
    </View>
  );
};

export default SummonerProfileRanked;
