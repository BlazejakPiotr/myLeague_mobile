import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Region} from '../../../models/user';

type UserState = {
  region: Region;
  summonerName: string;
  id: string;
  accountId: string;
  puuid: string;
  tagLine: string;
};

const initialState: UserState = {
  region: undefined,
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
