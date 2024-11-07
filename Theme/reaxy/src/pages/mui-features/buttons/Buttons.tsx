import React from "react";
import { Box, Grid } from "@mui/material";
import {
  Basic,
  ButtonWithIcons,
  ComplexButton,
  Contained,
  FabButtons,
  LoadingButtons,
  MyIconButton,
  Outlined,
  ToggleButtons,
} from "./content";

export default function Buttons() {
  return (
    <Box>
      <Grid container spacing={3} direction={"row"}>
        <Grid item xs={12} md={12} lg={6}>
          <Basic />
        </Grid>
        <Grid item xs={12} md={12} lg={6}>
          <Contained />
        </Grid>
        <Grid item xs={12} md={12} lg={6}>
          <Outlined />
        </Grid>
        <Grid item xs={12} md={12} lg={6}>
          <ButtonWithIcons />
        </Grid>
        <Grid item xs={12} md={12} lg={6}>
          <MyIconButton />
        </Grid>
        <Grid item xs={12} md={12} lg={6}>
          <ToggleButtons />
        </Grid>
        <Grid item xs={12} md={12} lg={6}>
          <ComplexButton />
        </Grid>
        <Grid item xs={12} md={12} lg={6}>
          <LoadingButtons />
        </Grid>
        <Grid item xs={12} md={12} lg={6}>
          <FabButtons />
        </Grid>
      </Grid>
    </Box>
  );
}
