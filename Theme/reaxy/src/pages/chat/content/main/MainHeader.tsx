import { Menu } from "@mui/icons-material";
import {
  Box,
  IconButton,
  MenuItem,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import { styles } from "./Main.styles";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconType } from "react-icons";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import VolumeMuteIcon from "@mui/icons-material/VolumeMute";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useAppDispatch, useAppSelector } from "@config/hooks";
import { CustomMenu } from "@config/components";
import { setUser, toggleOpen } from "@config/redux/slices/content/chatSlice";
import React from "react";
import { ArrowBackIcon } from "@config/assets";
import { useTranslation } from "react-i18next";

export function MainHeader() {
  // ** language
  const { t } = useTranslation("general");
  // ** useDispatch
  const dispatch = useAppDispatch();

  // ** redux
  const { selectedUser, isOpen } = useAppSelector((state) => state.slices.chat);

  // ** selected
  const selectedUserImg = selectedUser?.img;
  const selectedUserName = selectedUser?.name;

  // ** styles
  const theme = useTheme();
  const style = styles(theme);

  return (
    <Box sx={style.headerMain}>
      <Box sx={style.headerBox}>
        <Tooltip arrow placement="top" title={isOpen ? t("close") : t("open")}>
          <IconButton onClick={() => dispatch(toggleOpen())}>
            <Menu />
          </IconButton>
        </Tooltip>

        <Box sx={style.headerActions}>
          {selectedUser && (
            <>
              <Tooltip arrow placement="top" title={t("back")}>
                <IconButton onClick={() => dispatch(setUser(null))}>
                  <ArrowBackIcon />
                </IconButton>
              </Tooltip>
              <Tooltip arrow placement="top" title={selectedUserName}>
                <Box sx={style.img} component="img" src={selectedUserImg} />
              </Tooltip>
              <Typography color={"white"} variant="h5">
                {selectedUserName}
              </Typography>
            </>
          )}
        </Box>
      </Box>
      <CustomMenu icon={MoreVertIcon as IconType}>
        <Box sx={style.menuItem}>
          <MenuItem>
            <Box sx={style.listItem}>
              <AccountCircleIcon />
              <Typography variant="h6">Contact info</Typography>
            </Box>
          </MenuItem>
          <MenuItem>
            <Box sx={style.listItem}>
              <VolumeMuteIcon />
              <Typography variant="h6">Mute</Typography>
            </Box>
          </MenuItem>
          <MenuItem>
            <Box sx={style.listItem}>
              <DeleteForeverIcon />
              <Typography variant="h6">Clear chat</Typography>
            </Box>
          </MenuItem>
        </Box>
      </CustomMenu>
    </Box>
  );
}
