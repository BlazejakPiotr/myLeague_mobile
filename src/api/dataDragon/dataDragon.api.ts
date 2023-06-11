import {IChampionsData} from '../../models/champion';
import instance from '../../utils/axios/instance';

export const DataDragonApi = {
  async getAllVersions() {
    const res = await instance.get<string[]>('versions.json');
    return res.data;
  },
  async getAllChampions(version: string) {
    const res = await instance.get<IChampionsData>(
      `${version}/data/en_US/champions.json`,
    );
    return res.data;
  },
};
