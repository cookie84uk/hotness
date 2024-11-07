import {
  Checkbox,
  FormGroup,
  FormControlLabel,
  Typography,
} from "@mui/material";
import React from "react";
import { MuiCard } from "@config/components";
import { styles } from "./all.styles";

export function Label() {
  return (
    <MuiCard title={"Label checkboxes"}>
      <FormGroup sx={styles.container}>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label={<Typography variant="body1">Label</Typography>}
        />
        <FormControlLabel
          // required
          control={<Checkbox />}
          label={<Typography variant="body1">Required</Typography>}
        />
        <FormControlLabel
          disabled
          control={<Checkbox />}
          label={<Typography variant="body1">Disabled</Typography>}
        />
      </FormGroup>
    </MuiCard>
  );
}
