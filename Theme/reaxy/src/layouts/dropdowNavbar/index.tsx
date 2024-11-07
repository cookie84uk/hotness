import React from "react";
import { Box } from "@mui/material";
import { styles } from "./Navbar.styles.";
import { useAppSelector } from "@config/hooks";
import App from "./content";

export function Navbar() {
  const { fixed, vertical } = useAppSelector((state) => state.palette);

  const style = styles({ fixed }, { vertical });

  return (
    <Box sx={style.navbar}>
      <App />
    </Box>
  );
}
