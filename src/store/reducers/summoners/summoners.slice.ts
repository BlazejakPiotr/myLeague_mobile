import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type SummonersState = {
  summonerName: string;
  id: string;
  accountId: string;
  puuid: string;
  tagLine: string;
};

const initialState: SummonersState = {
  summonerName: '',
  id: '',
  accountId: '',
  puuid: '',
  tagLine: '',
};

const summonersSlice = createSlice({
  name: 'summoners',
  initialState,
  reducers: {
    setUserName: (state, action: PayloadAction<string>) => {
      state.summonerName = action.payload.trim();
    },
  },
});

export const userActions = summonersSlice.actions;
export default summonersSlice.reducer;
