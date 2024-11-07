import { ILoginProps } from "@config/models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// ** localStorage initial
const initialIsLogin = localStorage.getItem("LOGGED_TOKEN") || "NO_TOKEN";

const initialState: ILoginProps = {
  isLoading: false,
  isLogin: initialIsLogin,
  email: "",
  password: "",
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setIsLogin: (state, action) => {
      state.isLogin = action.payload;
      localStorage.setItem("LOGGED_TOKEN", action.payload);
    },
  },
});

export const { setIsLoading, setIsLogin } = loginSlice.actions;
export default loginSlice.reducer;
