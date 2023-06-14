import {DataDragonApi} from '../../../api/dataDragon/dataDragon.api';
import {IChampionsData} from '../../../models/champion';
import {IItemsData} from '../../../models/item';
import {AppThunk} from '../../AppThunk';
import {dataDragonActions} from './dataDragon.slice';

export async function getClientVersion(): Promise<string | undefined> {
  const res = await DataDragonApi.getAllVersions();
  return res.shift();
}

export const fetchChampions =
  (): AppThunk<Promise<IChampionsData>> => async dispatch => {
    const res = await DataDragonApi.getAllChampions();
    dispatch(dataDragonActions.setChampions(res));
    return res;
  };

export const fetchItems =
  (): AppThunk<Promise<IItemsData>> => async dispatch => {
    const res = await DataDragonApi.getAllItems();
    dispatch(dataDragonActions.setItems(res));
    return res;
  };
