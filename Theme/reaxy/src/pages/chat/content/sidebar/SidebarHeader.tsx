import React from "react";
import { styles } from "./Sidebar.styles";
import { Box, MenuItem, Typography, useTheme } from "@mui/material";
import Admin from "@config/assets/images/admin/Admin.jpg";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconType } from "react-icons";
import PersonIcon from "@mui/icons-material/Person";
import EditIcon from "@mui/icons-material/Edit";
import SettingsIcon from "@mui/icons-material/Settings";
import { useNavigate } from "react-router-dom";
import { useAppSelector, useLayoutSize } from "@config/hooks";
import { CustomMenu } from "@config/components";

export function SidebarHeader() {
  // ** redux
  const { isOpen } = useAppSelector((state) => state.slices.chat);

  const { isRtl } = useAppSelector((state) => state.palette);

  // useNavigate
  const navigate = useNavigate();

  
  // ** hook
  const { LAYOUT_SIZE } = useLayoutSize();


  // ** styles
  const theme = useTheme();
  const style = styles(theme, { isOpen }, { LAYOUT_SIZE }, { isRtl });

  return (
    <Box sx={style.headerSidebar}>
      <Box sx={style.img} component={"img"} src={Admin} />
      <CustomMenu icon={MoreVertIcon as IconType}>
        <Box sx={style.menuItem}>
          <MenuItem onClick={() => navigate("/profile/user-info")}>
            <Box sx={style.listItem}>
              <PersonIcon />
              <Typography variant="h6">Profile</Typography>
            </Box>
          </MenuItem>
          <MenuItem>
            <Box sx={style.listItem}>
              <EditIcon />
              <Typography variant="h6">Settings</Typography>
            </Box>
          </MenuItem>
          <MenuItem onClick={() => navigate("/")}>
            <Box sx={style.listItem}>
              <SettingsIcon />
              <Typography variant="h6">Exit chat</Typography>
            </Box>
          </MenuItem>
        </Box>
      </CustomMenu>
    </Box>
  );
}
