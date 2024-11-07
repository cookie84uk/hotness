import * as React from "react";
import { Grid } from "@mui/material";
import {
  ColorRadioButtons,
  CustomizedRadios,
  RadioButtonsGroup,
  SizeRadioButtons,
} from "./content";

export default function RadioGroup() {
  return (
    <Grid container spacing={3}>
      <Grid item lg={6} xs={12} md={12}>
        <RadioButtonsGroup />
      </Grid>
      <Grid item lg={6} xs={12} md={12}>
        <CustomizedRadios />
      </Grid>
      <Grid item lg={6} xs={12} md={12}>
        <SizeRadioButtons />
      </Grid>
      <Grid item lg={6} xs={12} md={12}>
        <ColorRadioButtons />
      </Grid>
    </Grid>
  );
}
