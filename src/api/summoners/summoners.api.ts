import {ISummoner} from '../../models/summoner';
import {instanceSummoners} from '../../utils/axios/instance';
import {IRankedResults} from '../../models/leaderboards';
import {IMatch} from '../../models/matches';

export const SummonersApi = {
  async getSummonerByName(name: string) {
    const res = await instanceSummoners.get<ISummoner>(
      'lol/summoner/v4/summoners/by-name/' + name,
    );
    return res;
  },

  async getSummonerRankedResults(id: string) {
    const res = await instanceSummoners.get<IRankedResults[]>(
      'lol/league/v4/entries/by-summoner/' + id,
    );
    return res;
  },

  async getSummonerListOfMatches(puuid: string, type?: string) {
    const res = await instanceSummoners.get<string[]>(
      `lol/match/v5/matches/by-puuid/${puuid}/ids`,
      {params: {count: 100, type: type}},
    );
    return res;
  },

  async getMatchById(id: string) {
    const res = await instanceSummoners.get<IMatch>(
      `lol/match/v5/matches/${id}`,
    );
    return res;
  },
};
