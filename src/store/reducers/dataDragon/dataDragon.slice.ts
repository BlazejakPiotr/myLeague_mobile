import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IContinent, IRegion} from '../../../models/locales';

type DataDragonState = {
  version?: string;
  region: IRegion;
  continent: IContinent;
};

const initialState: DataDragonState = {
  version: '',
  region: 'EUW1',
  continent: 'EUROPE',
};

const dataDragonSlice = createSlice({
  name: 'dataDragon',
  initialState,
  reducers: {
    setVersion: (state, action: PayloadAction<string[]>) => {
      state.version = action.payload[0];
    },
    setRegion: (
      state,
      action: PayloadAction<{region: IRegion; continent: IContinent}>,
    ) => {
      state.region = action.payload.region;
      state.continent = action.payload.continent;
    },
  },
});

export const dataDragonActions = dataDragonSlice.actions;
export default dataDragonSlice.reducer;
