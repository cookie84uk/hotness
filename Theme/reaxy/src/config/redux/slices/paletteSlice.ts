import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPaletteProps } from "@config/models";
import { layoutSize } from "@config/constant";

// ** Initial state
export const initialState: IPaletteProps = {
  isScroll: false,
  isRtl: false,
  open: false,
  variant: true,
  fixed: true,
  footer: false,
  show: true,
  vertical: true,
  drawerWidth: layoutSize.DRAWER_WIDTH.DEFAULT,
};

// ** Redux slice
const paletteSlice = createSlice({
  name: "palette",
  initialState,
  reducers: {
    // ** isScroll
    setIsScroll: (state, action: PayloadAction<boolean>) => {
      state.isScroll = action.payload;
    },

    // ** isRtl
    toggleRtl: (state) => {
      state.isRtl = !state.isRtl;
    },
    handleRtl: (state, action: PayloadAction<boolean>) => {
      state.isRtl = action.payload;
    },

    // ** open
    setOpen: (state, action: PayloadAction<boolean>) => {
      state.open = action.payload;
    },

    // ** variant drawer
    toggleVariant: (state) => {
      state.variant = !state.variant;
    },

    handleVariant: (state, action: PayloadAction<boolean>) => {
      state.variant = action.payload;
    },

    // ** position topBar
    togglePosition: (state) => {
      state.fixed = !state.fixed;
    },

    // ** show sidebar header
    setShowLogo: (state, action: PayloadAction<boolean>) => {
      state.show = action.payload;
    },

    // ** method drawer width
    handleRadioChange: (state, action: PayloadAction<string>) => {
      state.drawerWidth = action.payload;
    },

    // ** vertical horizontal menu
    toggleVertical: (state) => {
      state.vertical = !state.vertical;
    },

    handleVertical: (state, action: PayloadAction<boolean>) => {
      state.vertical = action.payload;
    },

    // ** show hide footer
    toggleFooter: (state) => {
      state.footer = !state.footer;
    },

    // ** Returns all states to their initial value
    handleReset: (state) => {
      Object.assign(state, initialState);
    },

    resetScroll: (state) => {
      state.isScroll = initialState.isScroll;
    },
  },
});

// ** Export actions and reducer
export const {
  toggleRtl,
  setOpen,
  toggleVariant,
  togglePosition,
  setShowLogo,
  handleRadioChange,
  toggleVertical,
  toggleFooter,
  handleVariant,
  handleReset,
  handleRtl,
  handleVertical,
  setIsScroll,
  resetScroll,
} = paletteSlice.actions;

export default paletteSlice.reducer;
