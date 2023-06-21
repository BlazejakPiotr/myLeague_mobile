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
//@ts-ignore
import {REACT_APP_API_KEY} from '@env';
import {LOCALES} from '../../utils/constants';
import {
  getListOfMatchIds,
  getMatchById,
  getSummonerByName,
  getSummonerRankedResults,
} from '../reducers/summoners/summoners.thunk';
import {matchActions} from '../reducers/matches/matches.slice';

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

      const summonerName = await AsyncStorage.getItem('name');
      const region = await AsyncStorage.getItem('region');

      if (!summonerName || !region) {
        dispatch(loaderActions.setState('NEED_FILL'));
      } else {
        const routing = LOCALES.find(el => el.id === region);
        instanceSummoners.defaults.baseURL = `https://${routing?.routing}/`;
        instanceSummoners.defaults.params = {
          api_key: REACT_APP_API_KEY,
        };
        await dispatch(getSummonerByName(summonerName)).then(data =>
          dispatch(getSummonerRankedResults(data.id)),
        );

        instanceSummoners.defaults.baseURL = `https://${routing?.continent}.api.riotgames.com/`;
        instanceSummoners.defaults.params = {
          api_key: REACT_APP_API_KEY,
        };
        await dispatch(getListOfMatchIds()).then(res => {
          const data = res.slice(0, 10);
          data.forEach(id => dispatch(getMatchById(id)));
          dispatch(matchActions.setMatchIds(res.slice(9, res.length - 1)));
          console.log(getState().match.matchIds.length);
        });

        dispatch(dataActions.setRegion(routing));
        dispatch(loaderActions.setState('PROFILE_FILLED'));
      }
    } catch (error) {
      console.log(error);
    }
  };
