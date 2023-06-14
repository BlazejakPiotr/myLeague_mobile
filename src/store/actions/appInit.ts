import AsyncStorage from '@react-native-async-storage/async-storage';
import {AppThunk} from '../AppThunk';
import {loaderActions} from '../reducers/loader/loader.slice';
import {dataActions} from '../reducers/data/data.slice';
import {
  fetchChampions,
  fetchItems,
  getClientVersion,
} from '../reducers/data/data.thunk';
import {instanceData, instanceSummoners} from '../../utils/axios/instance';
import {config} from '../../config';

export const initApp =
  (): AppThunk<Promise<void>> => async (dispatch, getState) => {
    try {
      instanceData.defaults.baseURL = config.dataDragonUrl;
      await getClientVersion().then(res => {
        dispatch(dataActions.setVersion(res));
        instanceData.defaults.baseURL =
          config.dataDragonUrl +
          'cdn/' +
          getState().data.version +
          '/data/en_US/';
      });

      await Promise.all([dispatch(fetchChampions()), dispatch(fetchItems())]);

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
