import React from "react";
import { EngineeringIcon } from "@config/assets";
import { LayoutBox } from "@doc/components";
import { Grid } from "@mui/material";
import Content from "./contents/Content";
import { dataStructure } from "@doc/data";
import AppStructure from "./contents/AppStructure";

export default function Structure() {
  return (
    <LayoutBox background="paper" icon={<EngineeringIcon />} id="structure">
      <Grid container spacing={3}>
        <Grid item xs={12} md={12} lg={12}>
          <AppStructure />
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <Content data={dataStructure} />
        </Grid>
      </Grid>
    </LayoutBox>
  );
}
