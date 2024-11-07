import { Box, Divider, Typography } from "@mui/material";
import { Content } from "./content";
import { styles } from "../Content.styles";
import React from "react";

export function LayoutConfig() {
  return (
    <Box>
      <Typography sx={styles.text} variant="h4">
        Layout
      </Typography>
      <Divider sx={styles.divider} />
      <Content />
    </Box>
  );
}
