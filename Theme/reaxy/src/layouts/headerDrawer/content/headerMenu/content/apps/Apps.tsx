import AppsIcon from "@mui/icons-material/Apps";
import {
  Box,
  Grid,
  ListItemIcon,
  MenuItem,
  Typography,
  useTheme,
} from "@mui/material";
import { styles } from "./Apps.styles";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SettingsIcon from "@mui/icons-material/Settings";
import InsertInvitationIcon from "@mui/icons-material/InsertInvitation";
import ImageIcon from "@mui/icons-material/Image";
import ArticleIcon from "@mui/icons-material/Article";
import MailIcon from "@mui/icons-material/Mail";
import PlaceIcon from "@mui/icons-material/Place";
import type { IconType } from "react-icons";
import React from "react";
import { MenuCustom } from "@config/components";

interface Apps {
  label: string;
  icon: IconType;
}

const appsItem = [
  { label: "My account", icon: <PersonIcon /> },
  { label: "Search", icon: <SearchIcon /> },
  { label: "Player", icon: <PlayArrowIcon /> },
  { label: "Settings", icon: <SettingsIcon /> },
  { label: "Calendar", icon: <InsertInvitationIcon /> },
  { label: "Galery", icon: <ImageIcon /> },
  { label: "Documents", icon: <ArticleIcon /> },
  { label: "Mail", icon: <MailIcon /> },
  { label: "Maps", icon: <PlaceIcon /> },
];

export function Apps() {
  // ** style
  const theme = useTheme();
  const style = styles(theme);

  return (
    <Box sx={style.container}>
      <MenuCustom
        icon={AppsIcon as IconType}
        header={
          <Box sx={style.header}>
            <Typography variant="h5" sx={style.typographyHeader}>
              APPLICATIONS
            </Typography>
          </Box>
        }
      >
        <Box sx={style.wrapper}>
          <Grid container>
            {appsItem.map((item: any, index: any) => (
              <Grid key={index} item xs={4} textAlign={"center"}>
                <MenuItem sx={style.menuItem}>
                  <ListItemIcon sx={style.icon}>{item.icon}</ListItemIcon>
                  <Typography sx={style.typography} variant="body2">
                    {item.label}
                  </Typography>
                </MenuItem>
              </Grid>
            ))}
          </Grid>
        </Box>
      </MenuCustom>
    </Box>
  );
}
