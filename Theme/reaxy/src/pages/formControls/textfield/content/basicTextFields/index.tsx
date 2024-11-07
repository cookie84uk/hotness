import React from "react";
import { MuiCard } from "@config/components";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { styles } from "../All.styles";

export function BasicTextFields() {
  return (
    <MuiCard title="BasicTextFields">
      <Box component="form" sx={styles.container} noValidate autoComplete="off">
        <TextField label="Outlined" variant="outlined" />
        <TextField label="Filled" variant="filled" />
        <TextField label="Standard" variant="standard" />
      </Box>
    </MuiCard>
  );
}
