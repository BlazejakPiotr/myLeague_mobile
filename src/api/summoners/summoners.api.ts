import {ISummoner} from '../../models/summoner';
import {instanceSummoners} from '../../utils/axios/instance';

export const SummonersApi = {
  async getSummonerByName(name: string) {
    const res = await instanceSummoners.get<ISummoner>(
      'lol/summoner/v4/summoners/by-name/' + name,
    );
    return res.data;
  },
};
