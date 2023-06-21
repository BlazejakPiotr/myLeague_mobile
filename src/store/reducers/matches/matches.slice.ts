import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IMatch} from '../../../models/matches';

type MatchState = {
  matchIds: string[];
  matchHistory: IMatch[];
};

const initialState: MatchState = {
  matchIds: [],
  matchHistory: [],
};

const matchSlice = createSlice({
  name: 'match',
  initialState,
  reducers: {
    setMatchIds: (state, action: PayloadAction<string[]>) => {
      state.matchIds = action.payload;
    },
    setMatchDetails: (state, action: PayloadAction<IMatch>) => {
      state.matchHistory = state.matchHistory.concat(action.payload);
    },
  },
});

export const matchActions = matchSlice.actions;
export default matchSlice.reducer;
