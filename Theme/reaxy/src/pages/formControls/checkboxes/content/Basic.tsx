import { Checkbox, Box } from "@mui/material";
import React from "react";
import { MuiCard } from "@config/components";

// ** label
const label = { inputProps: { "aria-label": "Checkbox demo" } };

export function Basic() {
  return (
    <MuiCard title={"Basic checkboxes"}>
      <Box>
        <Checkbox {...label} defaultChecked />
        <Checkbox {...label} />
        <Checkbox {...label} disabled />
        <Checkbox {...label} disabled checked />
      </Box>
    </MuiCard>
  );
}
