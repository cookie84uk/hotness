import { combineReducers, configureStore } from "@reduxjs/toolkit";
import palette from "./slices/paletteSlice";
import generalModels from "./slices/generalModelsSlice";
import { slices } from "./slices/slices";
import users from "./slices/userSlice";

const store = configureStore({
  reducer: {
    slices: combineReducers(slices),
    generalModels,
    palette,
    users,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
