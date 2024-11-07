import * as React from "react";
import { Grid } from "@mui/material";
import { Cursor, PositionedTooltips, Variable } from "./content";

export default function Tooltip() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={12} lg={12}>
        <PositionedTooltips />
      </Grid>
      <Grid item xs={12} md={12} lg={6}>
        <Variable />
      </Grid>
      <Grid item xs={12} md={12} lg={6}>
        <Cursor />
      </Grid>
    </Grid>
  );
}
