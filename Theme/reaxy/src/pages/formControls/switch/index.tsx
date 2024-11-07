import React from "react";
import { Grid } from "@mui/material";
import {
  BasicSwitches,
  ColorSwitches,
  CustomizedSwitches,
  SwitchesGroup,
} from "./content";

export default function Switch() {
  return (
    <Grid container spacing={3} direction={"row"}>
      <Grid item lg={6} xs={12} md={12}>
        <BasicSwitches />
      </Grid>
      <Grid item lg={6} xs={12} md={12}>
        <ColorSwitches />
      </Grid>
      <Grid item lg={6} xs={12} md={12}>
        <CustomizedSwitches />
      </Grid>
      <Grid item lg={6} xs={12} md={12}>
        <SwitchesGroup />
      </Grid>
    </Grid>
  );
}
