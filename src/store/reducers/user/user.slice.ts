import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type UserState = {
  summonerName: string;
  id: string;
  accountId: string;
  puuid: string;
  tagLine: string;
};

const initialState: UserState = {
  summonerName: '',
  id: '',
  accountId: '',
  puuid: '',
  tagLine: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
