import React from "react";
import { Grid } from "@mui/material";
import {
  ContinuousSlider,
  CustomizedSlider,
  DiscreteSlider,
  MusicPlayerSlider,
  SliderSizes,
} from "./content";

export default function Slider() {
  return (
    <Grid container spacing={3}>
      <Grid item lg={6} xs={12} md={12}>
        <ContinuousSlider />
      </Grid>
      <Grid item lg={6} xs={12} md={12}>
        <SliderSizes />
      </Grid>
      <Grid item lg={6} xs={12} md={12}>
        <CustomizedSlider />
      </Grid>
      <Grid item lg={6} xs={12} md={12}>
        <MusicPlayerSlider />
      </Grid>
      <Grid item lg={6} xs={12} md={12}>
        <DiscreteSlider />
      </Grid>
    </Grid>
  );
}
