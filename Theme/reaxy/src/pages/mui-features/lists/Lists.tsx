import { Grid } from "@mui/material";
import {
  AvatarList,
  Basic,
  CheckboxList,
  FolderList,
  InteractiveList,
  NestedList,
  SwitchList,
} from "./content";
import React from "react";

export default function Lists() {
  return (
    <Grid container spacing={3} direction={"row"}>
      <Grid item xs={12} md={12} lg={6}>
        <Basic />
      </Grid>
      <Grid item xs={12} md={12} lg={6}>
        <AvatarList />
      </Grid>
      <Grid item xs={12} md={12} lg={6}>
        <FolderList />
      </Grid>
      <Grid item xs={12} md={12} lg={6}>
        <SwitchList />
      </Grid>
      <Grid item xs={12} md={12} lg={6}>
        <NestedList />
      </Grid>
      <Grid item xs={12} md={12} lg={6}>
        <CheckboxList />
      </Grid>
      <Grid item xs={12} md={12} lg={6}>
        <InteractiveList />
      </Grid>
    </Grid>
  );
}
