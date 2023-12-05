import { createSlice } from '@reduxjs/toolkit';

const ratesSlice = createSlice({
  name: 'rates',
  initialState: [],
  reducers: {
    setRates(state, action) {
      console.log(state);
      state = action.payload;
    },
  },
});

export const { setRates } = ratesSlice.actions;
export const ratesReducer = ratesSlice.reducer;
