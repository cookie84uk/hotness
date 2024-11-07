import * as React from "react";
import { LinearProgress, Stack } from "@mui/material";
import { MuiCard } from '@config/components'

export function Linear() {
  return (
    <MuiCard title="Interactive progress">
      <Stack spacing={2}>
        <LinearProgress />
        <LinearProgress color="secondary" />
        <LinearProgress color="success" />
        <LinearProgress color="primary" />
        <LinearProgress color="error" />
        <LinearProgress color="warning" />
      </Stack>
    </MuiCard>
  );
}
