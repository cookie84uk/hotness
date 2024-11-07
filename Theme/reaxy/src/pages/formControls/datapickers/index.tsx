import { Grid } from "@mui/material";
import { Basic, DateOrTime, Variants, Views } from "./content";
import React from "react";

export default function DatePickers() {
  return (
    <Grid container spacing={3} direction={"row"}>
      <Grid item lg={6} xs={12} md={12}>
        <Basic />
      </Grid>
      <Grid item lg={6} xs={12} md={12}>
        <Views />
      </Grid>
      <Grid item lg={6} xs={12} md={12}>
        <Variants />
      </Grid>
      <Grid item lg={6} xs={12} md={12}>
        <DateOrTime />
      </Grid>
    </Grid>
  );
}
