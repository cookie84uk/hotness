import React from "react";
import { Grid } from "@mui/material";
import {
  BasicTabs,
  ColorTabs,
  CustomizedTabs,
  IconTabs,
  ScrollTabs,
  VerticalTabs,
} from "./content";

export default function Tabs() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={12} lg={6}>
        <BasicTabs />
      </Grid>
      <Grid item xs={12} md={12} lg={6}>
        <ColorTabs />
      </Grid>
      <Grid item xs={12} md={12} lg={6}>
        <ScrollTabs />
      </Grid>
      <Grid item xs={12} md={12} lg={6}>
        <IconTabs />
      </Grid>
      <Grid item xs={12} md={12} lg={6}>
        <VerticalTabs />
      </Grid>
      <Grid item xs={12} md={12} lg={6}>
        <CustomizedTabs />
      </Grid>
    </Grid>
  );
}
