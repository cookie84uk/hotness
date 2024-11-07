import React from "react";
import { Grid } from "@mui/material";
import {
  BasicSelect,
  DialogSelect,
  MultipleSelectChip,
  SelectLabels,
  SelectOtherProps,
  SelectVariants,
} from "./content";

export default function Select() {
  return (
    <Grid container spacing={3}>
      <Grid item lg={6} xs={12} md={12}>
        <BasicSelect />
      </Grid>
      <Grid item lg={6} xs={12} md={12}>
        <SelectVariants />
      </Grid>
      <Grid item lg={6} xs={12} md={12}>
        <SelectLabels />
      </Grid>
      <Grid item lg={6} xs={12} md={12}>
        <SelectOtherProps />
      </Grid>
      <Grid item lg={6} xs={12} md={12}>
        <MultipleSelectChip />
      </Grid>
      <Grid item lg={6} xs={12} md={12}>
        <DialogSelect />
      </Grid>
    </Grid>
  );
}
