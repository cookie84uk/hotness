import * as React from "react";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import { MuiCard } from "@config/components";

const ariaLabel = { "aria-label": "description" };

export function InputMui5() {
  return (
    <MuiCard title="Input Mui 5">
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1 },
        }}
        noValidate
        autoComplete="off"
      >
        <Input fullWidth defaultValue="Hello world" inputProps={ariaLabel} />
        <Input fullWidth placeholder="Placeholder" inputProps={ariaLabel} />
        <Input
          fullWidth
          disabled
          defaultValue="Disabled"
          inputProps={ariaLabel}
        />
        <Input fullWidth defaultValue="Error" error inputProps={ariaLabel} />
      </Box>
    </MuiCard>
  );
}
