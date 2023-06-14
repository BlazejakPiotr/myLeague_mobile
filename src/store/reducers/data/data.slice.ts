import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IRegionDetails} from '../../../models/locales';
import {IChampionsData} from '../../../models/champion';
import {IItemsData} from '../../../models/item';

type DataState = {
  version?: string;
  region: IRegionDetails;
  champions: IChampionsData;
  items: IItemsData;
};

const initialState: DataState = {
  version: '',
  region: {
    routing: '',
    id: undefined,
    name: '',
    continent: undefined,
  },
  champions: {data: {}},
  items: {data: {}},
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setVersion: (state, action: PayloadAction<string | undefined>) => {
      state.version = action.payload;
    },
    setRegion: (state, action: PayloadAction<IRegionDetails>) => {
      state.region = action.payload;
    },
    setChampions: (state, action: PayloadAction<IChampionsData>) => {
      state.champions = action.payload;
    },
    setItems: (state, action: PayloadAction<IItemsData>) => {
      state.items = action.payload;
    },
  },
});

export const dataActions = dataSlice.actions;
export default dataSlice.reducer;
