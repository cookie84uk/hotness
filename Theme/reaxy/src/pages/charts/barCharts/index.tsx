import { Grid } from "@mui/material";
import {
  BarChartWithMinHeight,
  BrushBarChart,
  CustomBarChart,
  MixBarChart,
  Simple,
  VerticalBarChart,
} from "./content";
import React from "react";

export default function BarCharts() {
  return (
    <Grid container spacing={3} direction={"row"}>
      <Grid item xs={12} md={12} lg={6}>
        <VerticalBarChart />
      </Grid>
      <Grid item xs={12} md={12} lg={6}>
        <Simple />
      </Grid>
      <Grid item xs={12} md={12} lg={6}>
        <MixBarChart />
      </Grid>
      <Grid item xs={12} md={12} lg={6}>
        <CustomBarChart />
      </Grid>
      <Grid item xs={12} md={12} lg={6}>
        <BarChartWithMinHeight />
      </Grid>
      <Grid item xs={12} md={12} lg={6}>
        <BrushBarChart />
      </Grid>
    </Grid>
  );
}
