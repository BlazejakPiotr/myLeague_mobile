import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import {getColors} from '../../utils/theme/theme';
import AppButton from '../../components/_common/AppButton';
import AppText from '../../components/_common/AppText';
import FastImage from 'react-native-fast-image';
import SelectDropdown from 'react-native-select-dropdown';

const FillSummonerScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <FastImage
        resizeMode="contain"
        source={require('../../assets/img/myLeague_light.png')}
        style={styles.logo}
      />
      <View style={{width: '100%'}}>
        <AppText fFamily="BeaufortforLOL-Bold">SIGN IN</AppText>
        {/* <SelectDropdown data={} onSelect={(selectedItem, index) => {}} /> */}
        <TextInput style={styles.input} />
      </View>
      <AppButton
        color={getColors('gold500')}
        onPress={() => console.log('press')}
        padding={20}>
        <AppText s="l" fFamily="BeaufortforLOL-Heavy">
          LOGIN
        </AppText>
      </AppButton>
    </View>
  );
};

export default FillSummonerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: getColors('hextechBlack'),
    padding: 20,
  },
  logo: {resizeMode: 'cover', aspectRatio: 1, width: '70%'},
  input: {
    borderColor: getColors('blue100'),
    borderWidth: 1,
  },
});
