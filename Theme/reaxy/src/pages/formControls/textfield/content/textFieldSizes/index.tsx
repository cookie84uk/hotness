import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import React from "react";
import { MuiCard } from "@config/components";
import { styles } from "../All.styles";

export function TextFieldSizes() {
  return (
    <MuiCard title="Text Field Sizes">
      <Box component="form" sx={styles.content} noValidate autoComplete="off">
        <Box>
          <TextField
            fullWidth
            label="Size"
            defaultValue="Small"
            size="small"
          />
          <TextField
            fullWidth
            label="Size"
            defaultValue="Normal"
          />
        </Box>
        <Box>
          <TextField
            fullWidth
            label="Size"
            defaultValue="Small"
            variant="filled"
            size="small"
          />
          <TextField
            fullWidth
            label="Size"
            defaultValue="Normal"
            variant="filled"
          />
        </Box>
        <Box>
          <TextField
            fullWidth
            label="Size"
            defaultValue="Small"
            size="small"
            variant="standard"
          />
          <TextField
            fullWidth
            label="Size"
            defaultValue="Normal"
            variant="standard"
          />
        </Box>
      </Box>
    </MuiCard>
  );
}
