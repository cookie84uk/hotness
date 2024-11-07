import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React from "react";
import {
  Android12Switch,
  AntSwitch,
  IOSSwitch,
  MaterialUISwitch,
  MuiCard,
} from "@config/components";
import { Box } from "@mui/material";
import { styles } from "../All.styles";

export function CustomizedSwitches() {
  return (
    <MuiCard title="Customized Switches">
      <Box sx={styles.container}>
        <FormGroup>
          <FormControlLabel
            control={<MaterialUISwitch defaultChecked />}
            label="MUI switch"
          />
          <FormControlLabel
            control={<Android12Switch defaultChecked />}
            label="Android 12"
          />
        </FormGroup>
        <FormGroup>
          <FormControlLabel
            control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
            label="iOS style"
          />
          <Stack direction="row" spacing={2} alignItems="center">
            <Typography>Off</Typography>
            <AntSwitch
              defaultChecked
              inputProps={{ "aria-label": "ant design" }}
            />
            <Typography>On</Typography>
          </Stack>
        </FormGroup>
      </Box>
    </MuiCard>
  );
}
