import { initialMessages } from "@config/data/content/chat/chatData";
import { ChatState, IMessageChat, IUserChat } from "@config/models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";



const initialState: ChatState = {
  isOpen: true,
  selectedUser: null,
  inputText: "",
  messages: initialMessages,
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    toggleOpen(state) {
      state.isOpen = !state.isOpen;
    },
    setIsOpen(state, action: PayloadAction<boolean>) {
      state.isOpen = action.payload;
    },
    setUser(state, action: PayloadAction<IUserChat | null>) {
      state.selectedUser = action.payload;
    },
    setInputText(state, action: PayloadAction<string>) {
      state.inputText = action.payload;
    },
    sendMessage(state) {
      if (state.selectedUser) {
        const newMessage: IMessageChat = {
          id: state.messages[state.selectedUser.id].length + 1,
          senderId: state.selectedUser.id,
          text: state.inputText,
        };

        state.messages[state.selectedUser.id].push(newMessage);
        state.inputText = "";
      }
    },
  },
});

export const { toggleOpen, setUser, setInputText, sendMessage, setIsOpen } =
  chatSlice.actions;

export default chatSlice.reducer;
