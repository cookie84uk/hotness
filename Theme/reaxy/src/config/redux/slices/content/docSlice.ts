import { IDocProps } from "@doc/models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// ** Initial state
export const initialState: IDocProps = {
  isOpen: false,
  currentSection: null,
  packageManager: "npm",
};

// ** Redux slice
const docSlice = createSlice({
  name: "doc",
  initialState,
  reducers: {
    // ** open
    setIsOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },

    setCurrentSection: (state, action: PayloadAction<string | null>) => {
      state.currentSection = action.payload;
    },

    setPackageManager: (state, action: PayloadAction<string>) => {
      state.packageManager = action.payload;
    },
  },
});

// ** Export actions and reducer
export const { setIsOpen, setCurrentSection,setPackageManager } = docSlice.actions;

export default docSlice.reducer;
