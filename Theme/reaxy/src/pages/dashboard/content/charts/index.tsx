import React from "react";
import { Grid } from "@mui/material";
import { Product } from "./products";
import { Total } from "./total";
import { Refunds } from "./refunds";
import { Customers } from "./customers";

export function Charts() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={12} lg={6}>
        <Product />
      </Grid>
      <Grid item xs={12} md={12} lg={6}>
        <Total />
      </Grid>
      <Grid item xs={12} md={12} lg={6}>
        <Refunds />
      </Grid>
      <Grid item xs={12} md={12} lg={6}>
        <Customers />
      </Grid>
    </Grid>
  );
}
