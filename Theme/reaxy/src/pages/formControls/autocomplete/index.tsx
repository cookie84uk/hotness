import * as React from "react";
import { Grid } from "@mui/material";
import { Basic, Checkboxes, Country, Fixed } from "./content";

export default function AutoComplete() {
  return (
    <Grid container spacing={3} direction={"row"}>
      <Grid item xs={12} md={12} lg={6}>
        <Basic />
      </Grid>
      <Grid item xs={12} md={12} lg={6}>
        <Country />
      </Grid>
      <Grid item xs={12} md={12} lg={6}>
        <Fixed />
      </Grid>
      <Grid item xs={12} md={12} lg={6}>
        <Checkboxes />
      </Grid>
    </Grid>
  );
}
