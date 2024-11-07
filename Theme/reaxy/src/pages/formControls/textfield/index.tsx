import React from "react";
import { Grid } from "@mui/material";
import {
  BasicTextFields,
  ColorTextFields,
  FormPropsTextFields,
  FullWidthTextField,
  InputAdornments,
  MultilineTextFields,
  SelectTextFields,
  TextFieldSizes,
  TextFieldsWithIcon,
  ValidationTextFields,
} from "./content";

export default function TextFields() {
  return (
    <Grid container spacing={3}>
      <Grid item lg={6} xs={12} md={12}>
        <BasicTextFields />
      </Grid>
      <Grid item lg={6} xs={12} md={12}>
        <ColorTextFields />
      </Grid>
      <Grid item lg={12} xs={12} md={12}>
        <FullWidthTextField />
      </Grid>
      <Grid item lg={6} xs={12} md={12}>
        <ValidationTextFields />
      </Grid>
      <Grid item lg={6} xs={12} md={12}>
        <MultilineTextFields />
      </Grid>
      <Grid item lg={6} xs={12} md={12}>
        <SelectTextFields />
      </Grid>
      <Grid item lg={6} xs={12} md={12}>
        <TextFieldsWithIcon />
      </Grid>
      <Grid item lg={6} xs={12} md={12}>
        <FormPropsTextFields />
      </Grid>
      <Grid item lg={6} xs={12} md={12}>
        <InputAdornments />
      </Grid>
      <Grid item lg={6} xs={12} md={12}>
        <TextFieldSizes />
      </Grid>
    </Grid>
  );
}
