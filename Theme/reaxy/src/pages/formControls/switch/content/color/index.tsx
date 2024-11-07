import Switch from "@mui/material/Switch";
import React from "react";
import { MuiCard, PinkSwitch } from "@config/components";
import { Box } from "@mui/material";

// ** label
const label = { inputProps: { "aria-label": "Color switch demo" } };

export function ColorSwitches() {
  return (
    <MuiCard title="Color Switches">
      <Box>
        <Switch {...label} defaultChecked />
        <Switch {...label} defaultChecked color="secondary" />
        <Switch {...label} defaultChecked color="warning" />
        <Switch {...label} defaultChecked color="default" />
        <PinkSwitch {...label} defaultChecked />
      </Box>
    </MuiCard>
  );
}
