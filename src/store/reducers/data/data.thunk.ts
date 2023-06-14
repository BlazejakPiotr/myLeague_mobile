import {DataApi} from '../../../api/data/data';
import {IChampionsData} from '../../../models/champion';
import {IItemsData} from '../../../models/item';
import {AppThunk} from '../../AppThunk';
import {dataActions} from './data.slice';

export async function getClientVersion(): Promise<string | undefined> {
  const res = await DataApi.getAllVersions();
  return res.shift();
}

export const fetchChampions =
  (): AppThunk<Promise<IChampionsData>> => async dispatch => {
    const res = await DataApi.getAllChampions();
    dispatch(dataActions.setChampions(res));
    return res;
  };

export const fetchItems =
  (): AppThunk<Promise<IItemsData>> => async dispatch => {
    const res = await DataApi.getAllItems();
    dispatch(dataActions.setItems(res));
    return res;
  };
