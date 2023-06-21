import {SummonersApi} from '../../../api/summoners/summoners.api';
import {ISummoner} from '../../../models/summoner';
import {AppThunk} from '../../AppThunk';
import {summonerActions} from './summoners.slice';

export const getSummonerByName =
  (name: string): AppThunk<Promise<ISummoner>> =>
  async dispatch => {
    const res = await SummonersApi.getSummonerByName(name);
    dispatch(summonerActions.setUser(res));
    return res;
  };
