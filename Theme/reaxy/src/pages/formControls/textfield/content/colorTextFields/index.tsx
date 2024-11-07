import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import React from "react";
import { MuiCard } from "@config/components";
import { styles } from "../All.styles";

export function ColorTextFields() {
  return (
    <MuiCard title="Color Text Fields">
      <Box component="form" sx={styles.container} noValidate autoComplete="off">
        <TextField label="Outlined secondary" color="secondary" focused />
        <TextField
          label="Filled success"
          variant="filled"
          color="success"
          focused
        />
        <TextField
          label="Standard warning"
          variant="standard"
          color="warning"
          focused
        />
      </Box>
    </MuiCard>
  );
}
