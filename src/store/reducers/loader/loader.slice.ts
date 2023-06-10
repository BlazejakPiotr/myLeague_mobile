import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type AppState = 'LOADING' | 'NEED_FILL' | 'PROFILE_FILLED';

interface LoaderStateI {
  state: AppState;
}

const initialState: LoaderStateI = {
  state: 'LOADING',
};

const loaderSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    setState(state, action: PayloadAction<AppState>) {
      state.state = action.payload;
    },
  },
});

export const loaderActions = loaderSlice.actions;
export default loaderSlice.reducer;
