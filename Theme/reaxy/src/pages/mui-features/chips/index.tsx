import React from "react";
import { Grid } from "@mui/material";
import { Array, AvatarChip, ColorChip, Custom, CustomIcon } from "./content";

export default function Chips() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={12} lg={6}>
        <AvatarChip />
      </Grid>
      <Grid item xs={12} md={12} lg={6}>
        <ColorChip />
      </Grid>
      <Grid item xs={12} md={12} lg={6}>
        <Array />
      </Grid>
      <Grid item xs={12} md={12} lg={6}>
        <CustomIcon />
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <Custom />
      </Grid>
    </Grid>
  );
}
