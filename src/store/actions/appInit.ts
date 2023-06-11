import AsyncStorage from '@react-native-async-storage/async-storage';
import {AppThunk} from '../AppThunk';
import {loaderActions} from '../reducers/loader/loader.slice';
import {DataDragonApi} from '../../api/dataDragon/dataDragon.api';
import {dataDragonActions} from '../reducers/dataDragon/dataDragon.slice';

export const initApp =
  (): AppThunk<Promise<void>> => async (dispatch, getState) => {
    try {
      await DataDragonApi.getAllVersions().then(res =>
        dispatch(dataDragonActions.setVersion(res)),
      );

      const summonerName = await AsyncStorage.getItem('summonerName');
      const platform = await AsyncStorage.getItem('platform');

      if (!summonerName || !platform) {
        dispatch(loaderActions.setState('NEED_FILL'));
      } else {
        dispatch(loaderActions.setState('PROFILE_FILLED'));
      }
    } catch (error) {
      console.log(error);
    }
  };
