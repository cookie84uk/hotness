import React from "react";
import { Grid } from "@mui/material";
import { Charts } from "./content";
import { AreaChartRechart } from "./content";
import { MyPieChart } from "./content";
import { Calendar } from "./content/calendar";
import { TodoApp } from "./content/todo";
import Carousel from "./content/carousel";

export default function Dashboard() {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12} lg={6}>
          <Carousel />
        </Grid>
        <Grid item lg={6}>
          <Charts />
        </Grid>
        <Grid item xs={12} md={7} lg={7}>
          <AreaChartRechart />
        </Grid>
        <Grid item xs={12} md={5} lg={5}>
          <MyPieChart />
        </Grid>
        <Grid item xs={12} md={5} lg={5}>
          <Calendar />
        </Grid>
        <Grid item xs={12} md={7} lg={7}>
          <TodoApp />
        </Grid>
      </Grid>
    </>
  );
}
