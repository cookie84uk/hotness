import { Grid } from "@mui/material";
import { Basic, NestedGrids } from "./content";
import React from "react";

export default function Grids() {
  return (
    <Grid container spacing={3}>
      <Grid item lg={12}>
        <Basic />
      </Grid>
      <Grid item lg={12}>
        <NestedGrids />
      </Grid>
    </Grid>
  );
}
