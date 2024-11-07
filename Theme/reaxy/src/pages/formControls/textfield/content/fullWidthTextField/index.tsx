import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import React from "react";
import { MuiCard } from "@config/components";
import { styles } from "../All.styles";

export function FullWidthTextField() {
  return (
    <MuiCard title="Full Width Text Field">
      <Box
        sx={styles.content}
      >
        <TextField
          fullWidth
          variant="outlined"
          label="outlined fullWidth"
        />
        <TextField
          fullWidth
          variant="standard"
          label="standard fullWidth"
        />
        <TextField
          fullWidth
          variant="filled"
          label="filled fullWidth"
        />
      </Box>
    </MuiCard>
  );
}
