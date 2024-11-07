import * as React from "react";
import { Grid } from "@mui/material";
import {
  Basic,
  Confirmation,
  DraggableDialog,
  Form,
  FullScreen,
  Responsive,
  Scroll,
  Size,
  SlideDialog,
} from "./content";

export default function Dialog() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={12} lg={6}>
        <Basic />
      </Grid>
      <Grid item xs={12} md={12} lg={6}>
        <SlideDialog />
      </Grid>
      <Grid item xs={12} md={12} lg={6}>
        <Form />
      </Grid>
      <Grid item xs={12} md={12} lg={6}>
        <FullScreen />
      </Grid>
      <Grid item xs={12} md={12} lg={6}>
        <Size />
      </Grid>
      <Grid item xs={12} md={12} lg={6}>
        <Responsive />
      </Grid>
      <Grid item xs={12} md={12} lg={6}>
        <Scroll />
      </Grid>
      <Grid item xs={12} md={12} lg={6}>
        <DraggableDialog />
      </Grid>
      <Grid item xs={12} md={12} lg={6}>
        <Confirmation />
      </Grid>
    </Grid>
  );
}
