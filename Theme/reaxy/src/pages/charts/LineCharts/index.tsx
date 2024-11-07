import React from "react";
import { Grid } from "@mui/material";
import {
  DashedLineChart,
  JointLineScatterChart,
  LineChartConnectNulls,
  SimpleLineChart,
  SynchronizedLineChart,
  VerticalLineChart,
} from "./content";

export default function LineCharts() {
  return (
    <Grid container spacing={3} direction={"row"}>
      <Grid item xs={12} md={12} lg={6}>
        <SimpleLineChart />
      </Grid>
      <Grid item xs={12} md={12} lg={6}>
        <DashedLineChart />
      </Grid>
      <Grid item xs={12} md={12} lg={6}>
        <VerticalLineChart />
      </Grid>
      <Grid item xs={12} md={12} lg={6}>
        <JointLineScatterChart />
      </Grid>
      <Grid item xs={12} md={12} lg={6}>
        <LineChartConnectNulls />
      </Grid>
      <Grid item xs={12} md={12} lg={6}>
        <SynchronizedLineChart />
      </Grid>
    </Grid>
  );
}
