import React, {useState} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import {getColors} from '../../utils/theme/theme';
import AppButton from '../../components/_common/AppButton';
import AppText from '../../components/_common/AppText';
import FastImage from 'react-native-fast-image';
import SelectDropdown from 'react-native-select-dropdown';
import {LOCALES} from '../../utils/constants';
import {IRegionDetails} from '../../models/locales';
import {ChevonBottomSvG} from '../../assets/svg/ChevonBottom';
import {RFValue} from 'react-native-responsive-fontsize';
import {useAppDispatch, useAppSelector} from '../../store/hook';
import {dataActions} from '../../store/reducers/data/data.slice';
import {userActions} from '../../store/reducers/summoners/summoners.slice';

const FillSummonerScreen: React.FC = () => {
  const [region, setRegion] = useState<IRegionDetails>();
  const [name, setName] = useState<string>('');
  const dispatch = useAppDispatch();
  const store = useAppSelector(state => state.data);

  const onClick = async () => {
    if (region && name) {
      dispatch(dataActions.setRegion(region));
      dispatch(userActions.setUserName(name));
    }
  };

  return (
    <View style={styles.container}>
      <FastImage
        resizeMode="contain"
        source={require('../../assets/img/myLeague_light.png')}
        style={styles.logo}
      />
      <View style={{width: '100%'}}>
        <AppText fFamily="BeaufortforLOL-Bold" s="l" mBot={RFValue(20)}>
          SIGN IN
        </AppText>
        <AppText
          fFamily="Spiegel_TT_SemiBold"
          align="left"
          s="s"
          mBot={RFValue(5)}
          style={{paddingHorizontal: 10}}
          color={getColors('grey100')}>
          Region
        </AppText>
        <SelectDropdown
          data={LOCALES}
          dropdownStyle={styles.dropdown}
          renderDropdownIcon={() => <ChevonBottomSvG />}
          rowStyle={styles.dropdownRow}
          buttonStyle={styles.dropdownBtn}
          renderCustomizedButtonChild={selectedItem => (
            <AppText fFamily="Spiegel_TT_Regular" s="s" align="left">
              {selectedItem ? selectedItem.name : 'Select region'}
            </AppText>
          )}
          renderCustomizedRowChild={item => (
            <AppText fFamily="Spiegel_TT_Regular" s="s" align="left">
              {item.name}
            </AppText>
          )}
          onSelect={(selectedItem: IRegionDetails) => {
            setRegion(selectedItem);
          }}
          defaultButtonText={'Select region'}
        />
        <AppText
          fFamily="Spiegel_TT_SemiBold"
          align="left"
          s="s"
          mBot={RFValue(5)}
          style={{paddingHorizontal: 10}}
          color={getColors('grey100')}>
          Summoners name
        </AppText>
        <TextInput
          style={styles.dropdownBtn}
          onChangeText={v => setName(v.trim())}
          placeholder="Your in-game name"
          placeholderTextColor={getColors('grey150')}
        />
      </View>
      <AppButton
        color={getColors('gold500')}
        onPress={() => console.log(LOCALES.find(el => el.id === region?.id))}
        padding={15}
        paddingHorizontal={60}>
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
    padding: 20,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: getColors('hextechBlack'),
  },
  logo: {resizeMode: 'cover', aspectRatio: 1, width: '70%'},
  dropdownBtn: {
    width: '100%',
    backgroundColor: getColors('greyCool'),
    borderColor: getColors('grey150'),
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 20,
    marginBottom: 20,
    color: getColors('gold100'),
  },
  dropdownRow: {
    backgroundColor: getColors('greyCool'),
    paddingHorizontal: 20,
    color: getColors('black'),
    borderBottomColor: getColors('grey150'),
  },

  dropdown: {
    borderColor: getColors('grey150'),
    borderWidth: 1,
    borderRadius: 5,
  },
});
