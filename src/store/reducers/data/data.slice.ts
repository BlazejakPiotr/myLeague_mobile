import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IContinent, IRegion} from '../../../models/locales';
import {IChampionsData} from '../../../models/champion';
import {IItemsData} from '../../../models/item';

type DataState = {
  version?: string;
  region: IRegion;
  continent: IContinent;
  champions: IChampionsData;
  items: IItemsData;
};

const initialState: DataState = {
  version: '',
  region: 'EUW1',
  continent: 'EUROPE',
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
    setRegion: (
      state,
      action: PayloadAction<{region: IRegion; continent: IContinent}>,
    ) => {
      state.region = action.payload.region;
      state.continent = action.payload.continent;
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
