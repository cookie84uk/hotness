import { IDataMailBox } from "@config/models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MailState {
  data: IDataMailBox[];
  selected: IDataMailBox;
  isOpen: boolean;
  isSender: boolean;
  selectedMenu: string;
  isDeleted: boolean;
  isRead: boolean;
  searchQuery: string;
}

export const initialState: MailState = {
  selected: {
    id: 0,
    subject: "",
    name: "",
    email: "",
    date: "",
    text: "",
    img: "",
    trash: false,
    starred: false,
    draft: false,
    isRead: false,
  },
  selectedMenu: "All",
  isOpen: true,
  isSender: false,
  isDeleted: false,
  data: [],
  isRead: false,
  searchQuery: "",
};

const mailBoxSlice = createSlice({
  name: "mailBox",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<IDataMailBox[]>) => {
      state.data = action.payload;
    },
    setSelected: (state, action: PayloadAction<IDataMailBox>) => {
      state.selected = action.payload;
    },
    setIsSender: (state, action: PayloadAction<boolean>) => {
      state.isSender = action.payload;
    },
    setIsDeleted: (state, action: PayloadAction<boolean>) => {
      state.isDeleted = action.payload;
    },
    toggleOpen: (state) => {
      state.isOpen = !state.isOpen;
    },
    setIsOpen(state, action: PayloadAction<boolean>) {
      state.isOpen = action.payload;
    },
    setSelectedMenu: (state, action: PayloadAction<string>) => {
      state.selectedMenu = action.payload;
    },
    setIsRead: (state, action: PayloadAction<boolean>) => {
      state.isRead = action.payload;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
  },
});

export const {
  setSelected,
  setIsSender,
  setIsOpen,
  setSelectedMenu,
  setData,
  toggleOpen,
  setIsDeleted,
  setIsRead,
  setSearchQuery,
} = mailBoxSlice.actions;
export default mailBoxSlice.reducer;
