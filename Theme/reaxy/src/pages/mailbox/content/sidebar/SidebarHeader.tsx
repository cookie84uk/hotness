import { styles } from "./Sidebar.styles";
import { Box, MenuItem, Typography, useTheme } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconType } from "react-icons";
import { useDispatch } from "react-redux";
import { useAppSelector, useLayoutSize } from "@config/hooks";
import { CustomMenu } from "@config/components";
import React from "react";
import {
  setSearchQuery,
  setSelectedMenu,
} from "@config/redux/slices/content/mailBoxSlice";

export function SidebarHeader() {
  // ** useDispatch
  const dispatch = useDispatch();

  // ** redux
  const { isOpen, searchQuery } = useAppSelector((state) => state.slices.mail);

  const { isRtl } = useAppSelector((state) => state.palette);

  // ** handle method
  const handleMenuClick = (menu: any) => {
    dispatch(setSelectedMenu(menu));
  };

  // ** hook
  const { LAYOUT_SIZE } = useLayoutSize();

  // ** styles
  const theme = useTheme();
  const style = styles(theme, { isOpen }, { LAYOUT_SIZE }, { isRtl });

  return (
    <Box sx={style.headerSidebar}>
      <Box sx={style.inputBox}>
        <Box
          component={"input"}
          type="text"
          placeholder="Search mail..."
          value={searchQuery}
          onChange={(e) => dispatch(setSearchQuery(e.target.value))}
        />
      </Box>
      <CustomMenu icon={MoreVertIcon as IconType}>
        <Box sx={style.menuItem}>
          <MenuItem onClick={() => handleMenuClick("All")}>
            <Box sx={style.listItem}>
              <Typography variant="body1">All</Typography>
            </Box>
          </MenuItem>
          <MenuItem onClick={() => handleMenuClick("Starred")}>
            <Box sx={style.listItem}>
              <Typography variant="body1">Starred</Typography>
            </Box>
          </MenuItem>
          <MenuItem onClick={() => handleMenuClick("Sent")}>
            <Box sx={style.listItem}>
              <Typography variant="body1">Sent</Typography>
            </Box>
          </MenuItem>
          <MenuItem onClick={() => handleMenuClick("Drafts")}>
            <Box sx={style.listItem}>
              <Typography variant="body1">Drafts</Typography>
            </Box>
          </MenuItem>
          <MenuItem onClick={() => handleMenuClick("Trash")}>
            <Box sx={style.listItem}>
              <Typography variant="body1">Trash</Typography>
            </Box>
          </MenuItem>
        </Box>
      </CustomMenu>
    </Box>
  );
}
