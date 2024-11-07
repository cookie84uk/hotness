import { IUser, IUserState } from "@config/models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

function formatJoinDate(isoDateString: string | number | Date) {
  const joinedDate = new Date(isoDateString);

  const day = joinedDate.getDate();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = monthNames[joinedDate.getMonth()];
  const year = joinedDate.getFullYear();
  const hours = joinedDate.getHours();
  const minutes = joinedDate.getMinutes();

  const formattedDate = `Joined ${day} ${month}, ${year} at ${hours}:${
    minutes < 10 ? "0" : ""
  }${minutes}`;

  return formattedDate;
}

export const initialState: IUserState = {
  users: [],
  values: {
    id: 0,
    // id:  Math.floor(Math.random() * 1000000),

    name: "",
    surName: "",
    birthday: "",
    gender: "",
    password: "",
    username: "",
    email: "",
    position: "",
    phone: "",
    address: "",
    joined: formatJoinDate(new Date().toISOString()),
    company: "",
    salary: "",
    registration: "",
    url: "",
    status: "active",
    blocked: false,
    google: "",
    facebook: "",
    twitter: "",
  },
  loading: false,
  error: false,
  edit: false,
  block: null,
  id: "",
  isOpen: false,
  alignment: "left",
  alignments: "grid",
  searchUser: "",
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers(state, action: PayloadAction<IUser[]>) {
      state.users = action.payload;
    },
    setValues(state, action: PayloadAction<IUser>) {
      state.values = action.payload;
    },
    setEdit(state, action: PayloadAction<boolean>) {
      state.edit = action.payload;
    },
    setError(state, action: PayloadAction<boolean>) {
      state.error = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setIsOpen(state, action: PayloadAction<boolean>) {
      state.isOpen = action.payload;
    },
    setSearchUser(state, action: PayloadAction<string>) {
      state.searchUser = action.payload;
    },
    setAlignment(state, action: PayloadAction<string>) {
      state.alignment = action.payload;
    },
    setAlignments(state, action: PayloadAction<string>) {
      state.alignments = action.payload;
    },
    toggleBlocked(state, action: PayloadAction<boolean>) {
      state.block = action.payload;
    },
  },
});

export const {
  setUsers,
  setEdit,
  setIsOpen,
  setError,
  setLoading,
  setSearchUser,
  setAlignment,
  setAlignments,
  toggleBlocked,
  setValues,
} = userSlice.actions;

export default userSlice.reducer;
