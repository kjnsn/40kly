import { createSlice } from "@reduxjs/toolkit";

export const gameSlice = createSlice({
  name: "game",
  initialState: {
    isPaused: false,
  },
  reducers: {
    pause: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.isPaused = true;
    },
    unpause: (state) => {
      state.isPaused = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { pause, unpause } = gameSlice.actions;

export default gameSlice.reducer;
