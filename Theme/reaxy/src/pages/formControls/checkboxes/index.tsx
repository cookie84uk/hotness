import { Grid } from "@mui/material";
import {
  Basic,
  Color,
  Icon,
  Indeterminate,
  Label,
  MyFormGroup,
  Size,
} from "./content";
import React from "react";

export default function Checkboxes() {
  return (
    <Grid container spacing={3} direction={"row"}>
      <Grid item xs={12} md={12} lg={6}>
        <Basic />
      </Grid>
      <Grid item xs={12} md={12} lg={6}>
        <Size />
      </Grid>
      <Grid item xs={12} md={12} lg={6}>
        <Color />
      </Grid>
      <Grid item xs={12} md={12} lg={6}>
        <Icon />
      </Grid>
      <Grid item xs={12} md={12} lg={6}>
        <Label />
      </Grid>
      <Grid item xs={12} md={12} lg={6}>
        <Indeterminate />
      </Grid>
      <Grid item xs={12} md={12} lg={6}>
        <MyFormGroup />
      </Grid>
    </Grid>
  );
}
