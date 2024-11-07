import React from "react";
import { Grid } from "@mui/material";
import { ErrorCard } from "./content/ErrorCards";
import PrimaryCard from "./content/PrimaryCard";
import { SecondaryCard } from "./content/SecondaryCard";
import { BasicCard } from "./content/cardBody/BasicCard";
import { CardExample } from "./content/cardBody/CardExample";

export default function Cards() {
  return (
    <Grid container spacing={3}>
      <Grid item sm={12} md={12} lg={4}>
        <PrimaryCard />
      </Grid>
      <Grid item sm={12} md={12} lg={4}>
        <ErrorCard />
      </Grid>
      <Grid item sm={12} md={12} lg={4}>
        <SecondaryCard />
      </Grid>
      <Grid item sm={12} md={12} lg={6}>
        <CardExample />
      </Grid>
      <Grid item sm={12} md={12} lg={6}>
        <BasicCard />
      </Grid>
    </Grid>
  );
}
