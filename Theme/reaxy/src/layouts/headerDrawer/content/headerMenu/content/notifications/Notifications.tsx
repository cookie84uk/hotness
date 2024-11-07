import React, { useRef, useState } from "react";
import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Tab1, Tab2, Tab3 } from "./content";
import CommentIcon from "@mui/icons-material/Comment";
import DescriptionIcon from "@mui/icons-material/Description";
import InsertInvitationIcon from "@mui/icons-material/InsertInvitation";
import { styles } from "./Notifications.styles";
import { useOnClickOutside } from "@config/hooks";
import { MenuCustom } from "@config/components";
import { IconType } from "react-icons";

export function Notifications() {
  // ** useState
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [value, setValue] = React.useState("1");

  const handleClose = () => {
    if (anchorEl) {
      setAnchorEl(null);
    }
    setAnchorEl(null);
  };

  const handleChange: any = (
    _event: React.SyntheticEvent,
    newValue: string
  ) => {
    setValue(newValue);
  };

  // ** hook
  const tabRef = useRef<HTMLElement | null>(null);

  useOnClickOutside({ ref: tabRef, handler: handleClose });

  // ** style
  const theme = useTheme();
  const style = styles(theme);

  return (
    <MenuCustom
      children={
        <Box sx={style.container}>
          <TabContext value={value}>
            <Box sx={style.wrapper}>
              <TabPanel sx={style.tabRoot} value="1">
                <Tab1 handleClose={handleClose} />
              </TabPanel>
              <TabPanel sx={style.tabRoot} value="2">
                <Tab2 handleClose={handleClose} />
              </TabPanel>
              <TabPanel sx={style.tabRoot} value="3">
                <Tab3 handleClose={handleClose} />
              </TabPanel>
            </Box>
          </TabContext>
        </Box>
      }
      icon={NotificationsIcon as IconType}
      header={
        <TabContext value={value}>
          <Box sx={style.tabHeader} ref={tabRef}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab sx={style.icon} label={<CommentIcon />} value="1" />
              <Tab sx={style.icon} label={<DescriptionIcon />} value="2" />
              <Tab sx={style.icon} label={<InsertInvitationIcon />} value="3" />
            </TabList>
          </Box>
        </TabContext>
      }
    />
  );
}
