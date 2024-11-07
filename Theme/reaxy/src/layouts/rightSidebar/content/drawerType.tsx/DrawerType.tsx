import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import { styles } from "../Content.styles";
import { Content } from "./content";

export function DrawerType() {
  return (
    <Box>
      <Typography sx={styles.text} variant="h4">
        Choose menu type
      </Typography>
      <Divider sx={styles.divider} />
      <Content />
    </Box>
  );
}
