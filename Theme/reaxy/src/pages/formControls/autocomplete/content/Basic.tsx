import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { MuiCard } from "@config/components";
import { top100Films } from "@config/data";

export function Basic() {
  return (
    <MuiCard title={"Basic autocomplete"}>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={top100Films}
        fullWidth
        renderInput={(params) => <TextField {...params} label="Movie" />}
      />
    </MuiCard>
  );
}
