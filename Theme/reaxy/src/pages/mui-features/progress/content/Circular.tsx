import React from "react";
import { CircularProgress, Stack } from "@mui/material";
import { MuiCard } from "@config/components";

export function Circular() {
  return (
    <MuiCard title="Circular progress">
      <Stack spacing={2} direction="row">
        <CircularProgress color="secondary" />
        <CircularProgress color="success" />
        <CircularProgress color="inherit" />
        <CircularProgress color="error" />
        <CircularProgress color="warning" />
      </Stack>
    </MuiCard>
  );
}
