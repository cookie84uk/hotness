import { Box, Divider, Typography } from "@mui/material";
import { styles } from "../Content.styles";
import { Content } from "./content/Content";
import React from "react";

export function Mode() {
  return (
    <Box>
      <Typography sx={styles.text} variant="h4">
        Choose theme skin
      </Typography>
      <Divider sx={styles.divider} />
      <Content />
    </Box>
  );
}
