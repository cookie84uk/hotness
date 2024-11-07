import React from "react";
import { Grid } from "@mui/material";
import { BasicAccordion, Controlled, Customized } from "./content";

export default function Accordion() {
  return (
    <Grid container spacing={3} direction={"row"}>
      <Grid item xs={12} md={12} lg={6}>
        <BasicAccordion />
      </Grid>
      <Grid item xs={12} md={12} lg={6}>
        <Controlled />
      </Grid>
      <Grid item xs={12} md={12} lg={6}>
        <Customized />
      </Grid>
    </Grid>
  );
}
