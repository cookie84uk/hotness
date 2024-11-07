import React from "react";
import { Box, Grid } from "@mui/material";
import { styles } from "./Content.styles";
import AdminImage from "./views/admin";
import ReaxyCard from "./views/card";
import FlipCard from "./views/flipp";

export function Content() {
  return (
    <Box sx={styles.container}>
      <Grid container spacing={3}>
        <Grid item lg={2} md={2} sm={2}>
          <AdminImage />
        </Grid>
        <Grid item lg={5} md={5} sm={5}>
          <ReaxyCard />
        </Grid>
        <Grid item lg={5} md={5} sm={5}>
          <FlipCard />
        </Grid>
      </Grid>
    </Box>
  );
}
