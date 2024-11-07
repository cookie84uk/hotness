import { Box } from "@mui/material";
import {
  Account,
  Apps,
  Fullscreen,
  Language,
  Notifications,
  Search,
} from "./content";
import { styles } from "./HeaderMenu.styles";
import React from "react";

export function HeaderMenu() {
  // ** styles
  const style = styles();
  return (
    <Box sx={{ ...style.container }}>
      <Search />
      <Language />
      <Fullscreen />
      <Apps />
      <Notifications />
      <Account />
    </Box>
  );
}
