import React from "react";
import { MuiCard } from "@config/components";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { styles } from "../All.styles";

export function FormPropsTextFields() {
  return (
    <MuiCard title="Form Props Text Fields">
      <Box component="form" sx={styles.content} noValidate autoComplete="off">
        <Box>
          <TextField
            required
            fullWidth
            label="Required"
            defaultValue="Hello World"
          />
          <TextField
            fullWidth
            disabled
            label="Disabled"
            defaultValue="Hello World"
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            autoComplete="current-password"
          />
          <TextField
            fullWidth
            label="Read Only"
            defaultValue="Hello World"
            InputProps={{
              readOnly: true,
            }}
          />
        </Box>
        <Box>
          <TextField
            fullWidth
            label="Number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            fullWidth
            label="Search field"
            type="search"
          />
          <TextField
            fullWidth
            label="Helper text"
            defaultValue="Default Value"
            helperText="Some important text"
          />
        </Box>
        <Box>
          <TextField
            fullWidth
            required
            label="Required"
            defaultValue="Hello World"
            variant="filled"
          />
          <TextField
            fullWidth
            disabled
            label="Disabled"
            defaultValue="Hello World"
            variant="filled"
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="filled"
          />
          <TextField
            fullWidth
            label="Read Only"
            defaultValue="Hello World"
            InputProps={{
              readOnly: true,
            }}
            variant="filled"
          />
        </Box>
        <Box>
          <TextField
            fullWidth
            label="Number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
          />
          <TextField
            fullWidth
            label="Search field"
            type="search"
            variant="filled"
          />
          <TextField
            fullWidth
            label="Helper text"
            defaultValue="Default Value"
            helperText="Some important text"
            variant="filled"
          />
        </Box>
        <Box>
          <TextField
            required
            fullWidth
            label="Required"
            defaultValue="Hello World"
            variant="standard"
          />
          <TextField
            disabled
            fullWidth
            label="Disabled"
            defaultValue="Hello World"
            variant="standard"
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="standard"
          />
          <TextField
            fullWidth
            label="Read Only"
            defaultValue="Hello World"
            InputProps={{
              readOnly: true,
            }}
            variant="standard"
          />
        </Box>
        <Box>
          <TextField
            fullWidth
            id="standard-number"
            label="Number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
          />
          <TextField
            fullWidth
            label="Search field"
            type="search"
            variant="standard"
          />
          <TextField
            fullWidth
            label="Helper text"
            defaultValue="Default Value"
            helperText="Some important text"
            variant="standard"
          />
        </Box>
      </Box>
    </MuiCard>
  );
}
