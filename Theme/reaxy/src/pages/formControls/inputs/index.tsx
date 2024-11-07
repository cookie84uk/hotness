import React from "react";
import { Grid } from "@mui/material";
import { Basic, Customization, InputMui5, Outlined } from "./content";

export default function Inputs() {
  return (
    <Grid container spacing={3}>
      <Grid item lg={6} xs={12} md={12}>
        <Basic />
      </Grid>
      <Grid item lg={6} xs={12} md={12}>
        <Customization />
      </Grid>
      <Grid item lg={12} xs={12} md={12}>
        <InputMui5 />
      </Grid>
      <Grid item lg={12} xs={12} md={12}>
        <Outlined />
      </Grid>
    </Grid>
  );
}
