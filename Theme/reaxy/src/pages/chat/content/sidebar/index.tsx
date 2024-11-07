import { Box, ListItemButton, Typography, useTheme } from "@mui/material";
import { styles } from "./Sidebar.styles";
import CircleIcon from "@mui/icons-material/Circle";
import { useEffect, useState } from "react";
import { SidebarHeader } from "./SidebarHeader";
import {
  useAppDispatch,
  useAppMediaQuery,
  useAppSelector,
  useLayoutSize,
} from "@config/hooks";
import { usersChat } from "@config/data";
import { IUserChat } from "@config/models";
import { setIsOpen, setUser } from "@config/redux/slices/content/chatSlice";
import React from "react";

export function Sidebar() {
  // ** redux
  const { isOpen, selectedUser } = useAppSelector((state) => state.slices.chat);

  const { isRtl } = useAppSelector((state) => state.palette);

  // ** useDispatch
  const dispatch = useAppDispatch();

  // ** useState
  const onlineStatuses = usersChat.map((user) => user.online);
  const [online, _setOnline] = useState(onlineStatuses);

  // ** hooks
  const { LAYOUT_SIZE } = useLayoutSize();

  const { isMdDown } = useAppMediaQuery();

  // ** useEffect
  useEffect(() => {
    if (isMdDown) {
      dispatch(setIsOpen(false));
    } else {
      dispatch(setIsOpen(true));
    }
  }, [isMdDown]);

  // ** handle method
  const handleUserSelect = (user: IUserChat) => {
    if (isMdDown) {
      if (selectedUser) dispatch(setIsOpen(false));
    }
    dispatch(setUser(user));
  };

  // ** styles
  const theme = useTheme();
  const style = styles(theme, { isOpen }, { LAYOUT_SIZE }, { isRtl });

  return (
    <Box sx={style.container}>
      <SidebarHeader />
      <Box sx={style.content}>
        {usersChat.map((user: IUserChat, index: number) => (
          <Box key={index}>
            <ListItemButton
              sx={style.listButton}
              className={selectedUser?.id === user.id ? "active" : ""}
              onClick={() => handleUserSelect(user)}
            >
              <Box sx={style.img} component={"img"} src={user.img} />
              <Box sx={style.text}>
                <Typography variant="h6">{user.name}</Typography>
                <Box sx={style.onlineContainer}>
                  {online[index] ? (
                    <>
                      <CircleIcon color="success" />
                      <Typography variant="subtitle1"> online </Typography>
                    </>
                  ) : (
                    <>
                      <CircleIcon color="error" />
                      <Typography variant="subtitle1"> offline </Typography>
                    </>
                  )}
                </Box>
              </Box>
            </ListItemButton>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
