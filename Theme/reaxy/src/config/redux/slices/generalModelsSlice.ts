import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";
import {
  IGeneralModelsSlice,
  IGetLanguageTable,
  IGetTable,
  IThemeOptions,
} from "@config/models";

const initialState: IGeneralModelsSlice = {
  languages: [],
  currentModule: "dashboard",
  tableParams: {
    page: 0,
    pageSize: 5,
    filters: [],
    sortOptions: [],
  },
  themeOptions: {
    sidebarIsOpen: true,
    onHover: false,
  },
};

const generalModelsSlice = createSlice({
  name: "generalModels",
  initialState,
  reducers: {
    setCurrentModule: (
      state: Draft<IGeneralModelsSlice>,
      action: PayloadAction<string>
    ) => {
      state.currentModule = action.payload;
    },
    setLanguages: (
      state: Draft<IGeneralModelsSlice>,
      action: PayloadAction<IGetLanguageTable[]>
    ) => {
      state.languages = action.payload;
    },
    resetLanguages: () => {
      return initialState;
    },
    setTableParams: (
      state: Draft<IGeneralModelsSlice>,
      action: PayloadAction<Partial<IGetTable>>
    ) => {
      state.tableParams = { ...state.tableParams, ...action.payload };
    },
    setThemeOptions: (
      state: Draft<IGeneralModelsSlice>,
      action: PayloadAction<Partial<IThemeOptions>>
    ) => {
      state.themeOptions = { ...state.themeOptions, ...action.payload };
    },
    resetTableParams: (state: Draft<IGeneralModelsSlice>) => {
      state.tableParams = { ...state.tableParams, ...initialState.tableParams };
    },
  },
});

export const {
  setCurrentModule,
  setTableParams,
  resetTableParams,
  setLanguages,
  setThemeOptions,
  resetLanguages,
} = generalModelsSlice.actions;

export default generalModelsSlice.reducer;
