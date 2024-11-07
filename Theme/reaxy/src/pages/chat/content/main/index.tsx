import React, { useEffect, useRef } from "react";
import {
  Box,
  List,
  TextField,
  Typography,
  IconButton,
  useTheme,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import { MainHeader } from "./MainHeader";
import Admin from "@config/assets/images/admin/Admin.jpg";
import { FOOTER_HEIGHT, styles } from "./Main.styles";
import ChatIcon from "@mui/icons-material/Chat";
import { useAppDispatch, useAppSelector } from "@config/hooks";
import {
  sendMessage,
  setInputText,
} from "@config/redux/slices/content/chatSlice";
import { IMessageChat } from "@config/models";

export function Main() {
  // ** redux
  const { selectedUser, inputText, messages } = useAppSelector(
    (state) => state.slices.chat
  );

  // ** useDispatch
  const dispatch = useAppDispatch();

  // ** selected img
  const selectedUserImg = selectedUser?.img;

  // ** handle method
  const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputText.trim() === "") {
      return;
    }
    dispatch(sendMessage());
  };

  // ** useRef
  const scrollRef = useRef<HTMLDivElement>(null);

  // ** useEffect
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  // ** styles
  const theme = useTheme();
  const style = styles(theme);

  return (
    <Box sx={style.container}>
      <MainHeader />
      <Box component="form" onSubmit={handleSendMessage} sx={style.content}>
        <Box
          ref={scrollRef}
          sx={{
            ...style.scroll,
            height: !selectedUser ? "100%" : `calc(100% - ${FOOTER_HEIGHT})`,
          }}
        >
          {!selectedUser && (
            <Box sx={style.mainContent}>
              <ChatIcon />
              <Typography variant="h5">
                Select a interlocutor for talk
              </Typography>
            </Box>
          )}
          <Box sx={style.boxColumn}>
            {selectedUser &&
              messages[selectedUser.id]?.map((message: IMessageChat, index) => (
                <Box sx={style.boxColumn} key={index}>
                  {message.senderId === 1 && (
                    <List sx={style.users}>
                      <Box
                        sx={style.img}
                        component="img"
                        src={selectedUserImg}
                      />
                      <Box sx={style.boxText}>
                        <Typography sx={style.usertext}>
                          {message.text}
                        </Typography>
                      </Box>
                    </List>
                  )}
                  {message.senderId !== 0 && (
                    <List sx={style.listAdmin}>
                      <Box sx={style.img} component="img" src={Admin} />
                      <Box sx={style.boxText}>
                        <Typography sx={style.admintext}>
                          {message.text}
                        </Typography>
                      </Box>
                    </List>
                  )}
                </Box>
              ))}
          </Box>
        </Box>
        <Box
          sx={{
            ...style.inputContainer,
            p: selectedUser ? 3 : 0,
            borderTop: selectedUser
              ? `1px solid ${theme.palette.text.secondary}`
              : "none",
          }}
        >
          {selectedUser && (
            <>
              <TextField
                variant="filled"
                sx={style.input}
                type="text"
                value={inputText}
                onChange={(e) => dispatch(setInputText(e.target.value))}
              />
              <Box sx={style.action}>
                <IconButton
                  sx={style.file}
                  component="label"
                  htmlFor="fileInput"
                >
                  <AttachFileIcon />
                  <input
                    id="fileInput"
                    type="file"
                    style={{ display: "none" }}
                  />
                </IconButton>
                <IconButton sx={style.send} type="submit">
                  <SendIcon />
                </IconButton>
              </Box>
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
}
