import {SummonersApi} from '../../../api/summoners/summoners.api';
import {IRankedResults} from '../../../models/leaderboards';
import {IMatch} from '../../../models/matches';
import {ISummoner} from '../../../models/summoner';
import {AppThunk} from '../../AppThunk';
import {matchActions} from '../matches/matches.slice';
import {summonerActions} from './summoners.slice';

export const getSummonerByName =
  (name: string): AppThunk<Promise<ISummoner>> =>
  async dispatch => {
    const res = await SummonersApi.getSummonerByName(name);
    dispatch(summonerActions.setUser(res));
    return res;
  };

export const getSummonerRankedResults =
  (id: string): AppThunk<Promise<IRankedResults[]>> =>
  async dispatch => {
    const res = await SummonersApi.getSummonerRankedResults(id);
    dispatch(summonerActions.setRankedResults(res));
    return res;
  };

export const getListOfMatchIds =
  (): AppThunk<Promise<string[]>> => async (dispatch, getState) => {
    const puuid = getState().summoners.user.puuid;
    const res = await SummonersApi.getSummonerListOfMatches(puuid);
    dispatch(matchActions.setMatchIds(res));
    return res;
  };

export const getMatchById =
  (id: string): AppThunk<Promise<IMatch>> =>
  async dispatch => {
    const res = await SummonersApi.getMatchById(id);
    dispatch(matchActions.setMatchDetails(res));
    return res;
  };
