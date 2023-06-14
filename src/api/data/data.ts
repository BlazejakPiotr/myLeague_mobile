import {IChampionsData} from '../../models/champion';
import {IItemsData} from '../../models/item';
import instanceData from '../../utils/axios/instance';

export const DataApi = {
  async getAllVersions() {
    const res = await instanceData.get<string[]>('api/versions.json');
    return res.data;
  },
  async getAllChampions() {
    const res = await instanceData.get<IChampionsData>('champion.json');
    return res.data;
  },
  async getAllItems() {
    const res = await instanceData.get<IItemsData>('item.json');
    return res.data;
  },
};
