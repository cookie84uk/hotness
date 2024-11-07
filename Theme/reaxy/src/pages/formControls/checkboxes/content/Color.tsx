import { Checkbox, Box } from "@mui/material";
import { pink } from "@mui/material/colors";
import React from "react";
import { MuiCard } from "@config/components";
// ** label
const label = { inputProps: { "aria-label": "Checkbox demo" } };

export function Color() {
  return (
    <MuiCard title={"Color checkboxes"}>
      <Box>
        <Checkbox {...label} defaultChecked />
        <Checkbox {...label} defaultChecked color="secondary" />
        <Checkbox {...label} defaultChecked color="success" />
        <Checkbox {...label} defaultChecked color="default" />
        <Checkbox
          {...label}
          defaultChecked
          sx={{
            color: pink[800],
            "&.Mui-checked": {
              color: pink[600],
            },
          }}
        />
      </Box>
    </MuiCard>
  );
}
