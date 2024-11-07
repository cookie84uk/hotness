import { IUserSubmitForm } from "@config/models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const initialState: IUserSubmitForm = {
  acceptTerms: false,
  name: "Zeko",
  surName: "Ismayilov",
  email: "info@example.com",
  password: "123456789",
  confirmPassword: "123456789",
  birthday: "19.11.1989",
  gender: "male",
  position: "BestComp",
  phone: "+1(994)555555555",
  address: "Washington",
  job: "Web Developer",
  isFlipped: false,
  swiper: "",
};

const formHeaderSlice = createSlice({
  name: "formHeader",
  initialState,
  reducers: {
    setForm: (state, action: PayloadAction<IUserSubmitForm>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    setIsFlipped: (state, action: PayloadAction<boolean>) => {
      state.isFlipped = action.payload;
    },

    setSwiper: (state, action: PayloadAction<string>) => {
      state.swiper = action.payload;
    },
  },
});

export const { setForm, setIsFlipped, setSwiper } = formHeaderSlice.actions;
export default formHeaderSlice.reducer;
