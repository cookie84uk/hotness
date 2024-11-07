import { Grid } from "@mui/material";
import { ListDragDrop } from "./content";
import React from "react";

export default function DragDrop() {
  return (
    <Grid container spacing={3} direction={"row"}>
      <Grid item lg={12} md={12} xs={12}>
        <ListDragDrop />
      </Grid>
    </Grid>
  );
}
