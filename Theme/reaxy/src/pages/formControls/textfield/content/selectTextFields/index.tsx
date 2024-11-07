import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { MuiCard } from "@config/components";
import { styles } from "../All.styles";

// ** currencies
const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];

export function SelectTextFields() {
  return (
    <MuiCard title="Select Text Fields">
      <Box
        component="form"
        sx={styles.content}
        noValidate
        autoComplete="off"
      >
        <Box>
          <TextField
            select
            fullWidth
            label="Select"
            defaultValue="EUR"
            helperText="Please select your currency"
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            fullWidth
            select
            label="Native select"
            defaultValue="EUR"
            SelectProps={{
              native: true,
            }}
            helperText="Please select your currency"
          >
            {currencies.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
        </Box>
        <Box>
          <TextField
            fullWidth
            select
            label="Select"
            defaultValue="EUR"
            helperText="Please select your currency"
            variant="filled"
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            fullWidth
            select
            label="Native select"
            defaultValue="EUR"
            SelectProps={{
              native: true,
            }}
            helperText="Please select your currency"
            variant="filled"
          >
            {currencies.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
        </Box>
        <Box>
          <TextField
            fullWidth
            select
            label="Select"
            defaultValue="EUR"
            helperText="Please select your currency"
            variant="standard"
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            fullWidth
            select
            label="Native select"
            defaultValue="EUR"
            SelectProps={{
              native: true,
            }}
            helperText="Please select your currency"
            variant="standard"
          >
            {currencies.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
        </Box>
      </Box>
    </MuiCard>
  );
}
