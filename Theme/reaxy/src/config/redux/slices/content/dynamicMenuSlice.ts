import { INavDataProps } from "@config/models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DynamicState {
  itemData: INavDataProps[];
}

const initialState: DynamicState = {
  itemData: [],
};

const dynamicMenuSlice = createSlice({
  name: "dynamic",
  initialState,
  reducers: {
    setItemData: (state, action: PayloadAction<INavDataProps[]>) => {
      state.itemData = action.payload;
    },
  },
});

export const { setItemData } = dynamicMenuSlice.actions;
export default dynamicMenuSlice.reducer;
