import React, {useState, useEffect} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import {getColors} from '../../utils/theme/theme';
import AppButton from '../../components/_common/AppButton';
import AppText from '../../components/_common/AppText';
import FastImage from 'react-native-fast-image';
import SelectDropdown from 'react-native-select-dropdown';
import {APP_PADDING, DEVICE_WIDTH, LOCALES} from '../../utils/constants';
import {IRegionDetails} from '../../models/locales';
import {ChevonBottomSvG} from '../../assets/svg/ChevonBottom';
import {RFValue} from 'react-native-responsive-fontsize';
import {useAppDispatch, useAppSelector} from '../../store/hook';
import Spinner from '../../components/_common/Spinner';
//@ts-ignore
import {REACT_APP_API_KEY} from '@env';
import {instanceSummoners} from '../../utils/axios/instance';
import {getSummonerByName} from '../../store/reducers/summoners/summoners.thunk';
import {loaderActions} from '../../store/reducers/loader/loader.slice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {dataActions} from '../../store/reducers/data/data.slice';

interface IFillSummonerErrors {
  region: string | null;
  name: string | null;
}

const FillSummonerScreen: React.FC = () => {
  const [region, setRegion] = useState<IRegionDetails>();
  const [name, setName] = useState<string>('');

  useEffect(() => {
    console.log(
      region,
      instanceSummoners.defaults.baseURL,
      instanceSummoners.defaults.params,
    );
  }, [region]);

  const [err, setErr] = useState<IFillSummonerErrors>({
    region: null,
    name: null,
  });
  const [loading, setLoading] = useState(false);

  const dispatch = useAppDispatch();
  const store = useAppSelector(state => state.summoners.user);

  const onClick = async () => {
    if (!region) {
      setErr({...err, region: 'Region not selected'});
    } else if (!name) {
      setErr({...err, name: 'Missing Summoner name'});
    } else {
      setErr({region: null, name: null});
      instanceSummoners.defaults.baseURL = `https://${region.routing}/`;
      instanceSummoners.defaults.params = {
        api_key: REACT_APP_API_KEY,
      };
      const res = await dispatch(getSummonerByName(name));
      if (res.accountId) {
        await AsyncStorage.setItem('name', name);
        await AsyncStorage.setItem('region', region.id);
        dispatch(dataActions.setRegion(region));
        dispatch(loaderActions.setState('PROFILE_FILLED'));
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <FastImage
          resizeMode="contain"
          source={require('../../assets/img/LoL_Logo_Rendered.png')}
          style={styles.logo}
        />
      </View>
      <View
        style={{
          flex: 2,
        }}>
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
          disabled={loading}
          dropdownStyle={styles.dropdown}
          renderDropdownIcon={() => <ChevonBottomSvG />}
          rowStyle={styles.dropdownRow}
          buttonStyle={[
            styles.inputField,
            {width: '100%'},
            err.region ? styles.err : styles.inputField,
          ]}
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
          fFamily="Spiegel_TT_Regular_Italic"
          align="right"
          s="xxs"
          mTop={RFValue(5)}
          mBot={RFValue(10)}
          color={getColors('red')}>
          {err.region}
        </AppText>

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
          editable={!loading}
          style={[styles.inputField, err.name ? styles.err : styles.inputField]}
          onChangeText={v => setName(v.trim())}
          placeholder="Your in-game name"
          placeholderTextColor={getColors('grey150')}
        />
        <AppText
          fFamily="Spiegel_TT_Regular_Italic"
          align="right"
          s="xxs"
          mTop={RFValue(5)}
          mBot={RFValue(10)}
          color={getColors('red')}>
          {err.name}
        </AppText>

        <View style={{alignItems: 'center', marginTop: RFValue(20)}}>
          {loading ? (
            <Spinner />
          ) : (
            <AppButton
              width={200}
              color={getColors('gold500')}
              onPress={onClick}
              padding={15}
              paddingHorizontal={60}>
              <AppText s="l" fFamily="BeaufortforLOL-Heavy">
                LOGIN
              </AppText>
            </AppButton>
          )}
        </View>
      </View>
    </View>
  );
};

export default FillSummonerScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    width: DEVICE_WIDTH,
    padding: APP_PADDING,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: getColors('hextechBlack'),
  },
  logo: {resizeMode: 'cover', aspectRatio: 1, width: '70%'},
  inputField: {
    alignSelf: 'stretch',
    backgroundColor: getColors('greyCool'),
    borderColor: getColors('grey150'),
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 20,
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
    borderWidth: 2,
    borderRadius: 5,
    zIndex: 5,
  },
  err: {
    borderColor: getColors('red'),
    borderWidth: 0.3,
  },
});
