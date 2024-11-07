import { Chip, Stack, useTheme } from "@mui/material";
import { MuiCard } from "@config/components";
import { styles } from "./All.styles";
import React from "react";

export function ColorChip() {
  // ** styles
  const theme = useTheme();
  const style = styles(theme);
  return (
    <MuiCard title="Color chip">
      <Stack direction="row" spacing={1} sx={style.container}>
        <Chip label="basic" className="colorM" />
        <Chip label="Primary" className="colorW" color="primary" />
        <Chip label="Secondary" color="secondary" className="colorW" />
        <Chip label="Error" color="error" className="colorW" />
        <Chip label="Success" color="success" className="colorW" />
        <Chip label="Warning" color="warning" className="colorW" />
      </Stack>
    </MuiCard>
  );
}
