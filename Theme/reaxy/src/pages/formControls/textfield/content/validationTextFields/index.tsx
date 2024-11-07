import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import React from "react";
import { MuiCard } from "@config/components";
import { styles } from "../All.styles";

export function ValidationTextFields() {
  return (
    <MuiCard title="Validation Text Fields">
      <Box component="form" sx={styles.content} noValidate autoComplete="off">
        <Box>
          <TextField error label="Error" defaultValue="Hello World" fullWidth />
          <TextField
            error
            label="Error"
            defaultValue="Hello World"
            fullWidth
            helperText="Incorrect entry."
          />
        </Box>
        <Box>
          <TextField
            error
            label="Error"
            defaultValue="Hello World"
            variant="filled"
            fullWidth
          />
          <TextField
            error
            label="Error"
            defaultValue="Hello World"
            helperText="Incorrect entry."
            variant="filled"
            fullWidth
          />
        </Box>
        <Box>
          <TextField
            error
            label="Error"
            defaultValue="Hello World"
            variant="standard"
            fullWidth
          />
          <TextField
            error
            label="Error"
            defaultValue="Hello World"
            helperText="Incorrect entry."
            variant="standard"
            fullWidth
          />
        </Box>
      </Box>
    </MuiCard>
  );
}
