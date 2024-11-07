import * as React from "react";
import { Grid } from "@mui/material";
import {
  Basic,
  Customized,
  Positioned,
  SlideDirection,
  Transition,
} from "./content";

export default function Snackbar() {
  return (
    <Grid container spacing={3} direction={"row"}>
      <Grid item xs={12} md={12} lg={6}>
        <Basic />
      </Grid>
      <Grid item xs={12} md={12} lg={6}>
        <Transition />
      </Grid>
      <Grid item xs={12} md={12} lg={6}>
        <Positioned />
      </Grid>
      <Grid item xs={12} md={12} lg={6}>
        <Customized />
      </Grid>
      <Grid item xs={12} md={12} lg={6}>
        <SlideDirection />
      </Grid>
    </Grid>
  );
}
