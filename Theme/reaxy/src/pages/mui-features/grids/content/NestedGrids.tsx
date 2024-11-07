import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography, useTheme } from "@mui/material";
import { styles } from "./All.styles";
import { MuiCard } from "@config/components";

// ** Item styles
const Item = styled(Paper)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.palette.background.default,
  background: theme.palette.background.default,
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.primary,
  overflow: "hidden",
}));

export function NestedGrids() {
  // ** styles
  const theme = useTheme();
  const style = styles(theme);

  return (
    <MuiCard title="Grids">
      <Typography sx={style.text} variant="h6">
        Column widths are integer values between 1 and 12. They apply at any
        breakpoint and indicate how many columns are occupied by the component.
      </Typography>
      <Box sx={style.gridContent}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Item>xs=12</Item>
          </Grid>
          <Grid item xs={1}>
            <Item>xs=1</Item>
          </Grid>
          <Grid item xs={11}>
            <Item>xs=11</Item>
          </Grid>
          <Grid item xs={10}>
            <Item>xs=10</Item>
          </Grid>
          <Grid item xs={2}>
            <Item>xs=2</Item>
          </Grid>
          <Grid item xs={3}>
            <Item>xs=3</Item>
          </Grid>
          <Grid item xs={9}>
            <Item>xs=9</Item>
          </Grid>
          <Grid item xs={8}>
            <Item>xs=8</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>xs=4</Item>
          </Grid>
          <Grid item xs={5}>
            <Item>xs=5</Item>
          </Grid>
          <Grid item xs={7}>
            <Item>xs=7</Item>
          </Grid>
          <Grid item xs={6}>
            <Item>xs=6</Item>
          </Grid>
          <Grid item xs={6}>
            <Item>xs=6</Item>
          </Grid>
        </Grid>
      </Box>
    </MuiCard>
  );
}
