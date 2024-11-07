import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import { Content } from "./content";
import { styles } from "../Content.styles";

export function MenuType() {
  return (
    <Box>
      <Typography sx={styles.text} variant="h4">
        Choose menu
      </Typography>
      <Divider sx={styles.divider} />
      <Content />
    </Box>
  );
}
