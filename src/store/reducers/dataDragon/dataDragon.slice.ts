import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IPlatforms, IRegions} from '../../../models/platforms';

type DataDragonState = {
  version?: string;
  platform: IPlatforms;
  region: IRegions;
};

const initialState: DataDragonState = {
  version: '',
  platform: 'EUW1',
  region: 'EUROPE',
};

const dataDragonSlice = createSlice({
  name: 'dataDragon',
  initialState,
  reducers: {
    setVersion: (state, action: PayloadAction<string[]>) => {
      state.version = action.payload[0];
    },
    setPlatform: (state, action: PayloadAction<IPlatforms>) => {
      state.platform = action.payload;
    },
    setRegion: (state, action: PayloadAction<IRegions>) => {
      state.version = action.payload;
    },
  },
});

export const dataDragonActions = dataDragonSlice.actions;
export default dataDragonSlice.reducer;
