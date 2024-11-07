import React from "react";
import { Grid } from "@mui/material";
import {
  Circular,
  Customize,
  Determinate,
  Interactive,
  Linear,
  LinearVariant,
} from "./content";

export default function Progress() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={12} lg={6}>
        <Circular />
      </Grid>
      <Grid item xs={12} md={12} lg={6}>
        <Determinate />
      </Grid>
      <Grid item xs={12} md={12} lg={6}>
        <Interactive />
      </Grid>
      <Grid item xs={12} md={12} lg={6}>
        <Customize />
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <Linear />
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <LinearVariant />
      </Grid>
    </Grid>
  );
}
