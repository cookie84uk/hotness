import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { MuiCard } from "@config/components";

// ** Item styles
const Item = styled(Paper)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.palette.background.default,
  background: theme.palette.background.default,
  height: "180px",
  ...theme.typography.body2,
  padding: theme.spacing(10),
  textAlign: "center",
  color: theme.palette.text.primary,
}));

function BasicGrid() {
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={6} md={6} lg={4}>
          <Item>Item-1</Item>
        </Grid>
        <Grid item xs={6} md={6} lg={4}>
          <Item>Item-2</Item>
        </Grid>
        <Grid item xs={6} md={6} lg={4}>
          <Item>Item-3</Item>
        </Grid>
        <Grid item xs={6} md={6} lg={4}>
          <Item>Item-4</Item>
        </Grid>
        <Grid item xs={6} md={6} lg={4}>
          <Item>Item-5</Item>
        </Grid>
        <Grid item xs={6} md={6} lg={4}>
          <Item>Item-6</Item>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export function Basic() {
  return (
    <MuiCard title="Basic grids">
      <Grid container spacing={1}>
        <Grid container item spacing={0.2}>
          <BasicGrid />
        </Grid>
      </Grid>
    </MuiCard>
  );
}
