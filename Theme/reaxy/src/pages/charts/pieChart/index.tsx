import React from "react";
import { Grid } from "@mui/material";
import {
  CustomActiveShapePieChart,
  PieChartWithCustomizedLabel,
  PieChartWithPaddingAngle,
  StraightAnglePieChart,
  TwoLevelPieChart,
  TwoSimplePieChart,
} from "./content";

export default function PieChart() {
  return (
    <Grid container spacing={3} direction={"row"}>
      <Grid item xs={12} md={12} lg={6}>
        <TwoLevelPieChart />
      </Grid>
      <Grid item xs={12} md={12} lg={6}>
        <StraightAnglePieChart />
      </Grid>
      <Grid item xs={12} md={12} lg={6}>
        <TwoSimplePieChart />
      </Grid>
      <Grid item xs={12} md={12} lg={6}>
        <CustomActiveShapePieChart />
      </Grid>
      <Grid item xs={12} md={12} lg={6}>
        <PieChartWithCustomizedLabel />
      </Grid>
      <Grid item xs={12} md={12} lg={6}>
        <PieChartWithPaddingAngle />
      </Grid>
    </Grid>
  );
}
