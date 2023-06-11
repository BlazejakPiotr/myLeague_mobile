import {DataDragonApi} from '../../../api/dataDragon/dataDragon.api';
import {AppThunk} from '../../AppThunk';
import {dataDragonActions} from './dataDragon.slice';

export const fetchVersions =
  (): AppThunk<Promise<string[]>> => async dispatch => {
    const res = await DataDragonApi.getAllVersions();
    dispatch(dataDragonActions.setVersion(res));
    return res;
  };
