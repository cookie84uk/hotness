import { createSlice } from "@reduxjs/toolkit";

const modeSlice = createSlice({
  name: "palette",
  initialState: {
    selectedPrimaryMode: localStorage.getItem("PALETTE_THEME") || "BLUE_LIGHT",
  },
  reducers: {
    setPrimaryMode: (state, action) => {
      state.selectedPrimaryMode = action.payload;
      localStorage.setItem("PALETTE_THEME", action.payload);
    },
  },
});

export const { setPrimaryMode } = modeSlice.actions;

export default modeSlice.reducer;
