import { Grid } from "@mui/material";
import { Bubble } from "./content";
import React from "react";

export default function BubbleChart() {
  return (
    <Grid container spacing={3} direction={"row"}>
      <Grid item lg={12} md={12} xs={12}>
        <Bubble />
      </Grid>
    </Grid>
  );
}
