import React from "react";
import { MuiCard } from "@config/components";
import { Box } from "@mui/material";
import Switch from "@mui/material/Switch";

// ** label
const label = { inputProps: { "aria-label": "Switch demo" } };

export function BasicSwitches() {
  return (
    <MuiCard title="Basic Switches">
      <Box>
        <Switch {...label} defaultChecked />
        <Switch {...label} />
        <Switch {...label} disabled defaultChecked />
        <Switch {...label} disabled />
      </Box>
    </MuiCard>
  );
}
