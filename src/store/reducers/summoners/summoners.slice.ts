import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ISummoner} from '../../../models/summoner';

type SummonersState = {
  user: ISummoner;
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
};

const summonersSlice = createSlice({
  name: 'summoners',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<ISummoner>) => {
      state.user = action.payload;
    },
  },
});

export const summonerActions = summonersSlice.actions;
export default summonersSlice.reducer;
