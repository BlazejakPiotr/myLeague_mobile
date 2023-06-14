import {IChampionsData} from '../../models/champion';
import {IItemsData} from '../../models/item';
import instance from '../../utils/axios/instance';

export const DataDragonApi = {
  async getAllVersions() {
    const res = await instance.get<string[]>('api/versions.json');
    return res.data;
  },
  async getAllChampions() {
    const res = await instance.get<IChampionsData>('champion.json');
    return res.data;
  },
  async getAllItems() {
    const res = await instance.get<IItemsData>('item.json');
    return res.data;
  },
};
