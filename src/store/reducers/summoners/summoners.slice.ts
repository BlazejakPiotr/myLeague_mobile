import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ISummoner} from '../../../models/summoner';
import {IRankedResults} from '../../../models/leaderboards';

type SummonersState = {
  user: ISummoner;
  ranked: IRankedResults[];
};

const initialState: SummonersState = {
  user: {
    name: '',
    id: '',
    accountId: '',
    puuid: '',
    profileIconId: 0,
    revisionDate: 0,
    summonerLevel: 0,
  },
  ranked: [],
};

const summonersSlice = createSlice({
  name: 'summoners',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<ISummoner>) => {
      state.user = action.payload;
    },
    setRankedResults: (state, action: PayloadAction<IRankedResults[]>) => {
      state.ranked = action.payload;
    },
  },
});

export const summonerActions = summonersSlice.actions;
export default summonersSlice.reducer;
