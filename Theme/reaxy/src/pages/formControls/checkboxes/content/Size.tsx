import { Checkbox, Box } from "@mui/material";
import React from "react";
import { MuiCard } from "@config/components";

// ** label
const label = { inputProps: { "aria-label": "Checkbox demo" } };

export function Size() {
  return (
    <MuiCard title={"Size checkboxes"}>
      <Box>
        <Checkbox {...label} defaultChecked size="small" />
        <Checkbox {...label} defaultChecked />
        <Checkbox
          {...label}
          defaultChecked
          sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
        />
      </Box>
    </MuiCard>
  );
}
