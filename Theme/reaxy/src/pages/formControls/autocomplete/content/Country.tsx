import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Box } from "@mui/material";
import { MuiCard } from '@config/components'
import React from "react";
import { countries } from "@config/data";

export function Country() {
  return (
    <MuiCard title="Country autocomplete">
      <Autocomplete
        id="country-select-demo"
        fullWidth
        options={countries}
        autoHighlight
        getOptionLabel={(option) => option.label}
        renderOption={(props, option) => (
          <Box
            component="li"
            sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
            {...props}
          >
            <img
              loading="lazy"
              width="20"
              src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
              srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
              alt=""
            />
            {option.label} ({option.code}) +{option.phone}
          </Box>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Choose a country"
            inputProps={{
              ...params.inputProps,
              autoComplete: "new-password", // disable autocomplete and autofill
            }}
          />
        )}
      />
    </MuiCard>
  );
}
