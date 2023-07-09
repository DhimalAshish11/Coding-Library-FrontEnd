import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  burrows: [],
};
const BurrowSlice = createSlice({
  name: "burrow",
  initialState,
  reducers: {
    setBurrow: (state, { payload }) => {
      state.burrows = payload;
    },
  },
});

const { reducer, actions } = BurrowSlice;

export const { setBurrow } = actions;
export default reducer;
