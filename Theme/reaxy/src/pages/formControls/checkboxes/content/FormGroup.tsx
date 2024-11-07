import * as React from "react";
import {
  Checkbox,
  Box,
  FormControl,
  FormLabel,
  FormControlLabel,
  FormHelperText,
  FormGroup,
} from "@mui/material";
import { MuiCard } from "@config/components";
import { styles } from "./all.styles";

export function MyFormGroup() {
  // ** useState
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: false,
  });

  // ** handle method
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  // ** state
  const { gilad, jason, antoine } = state;

  // ** error
  const error = [gilad, jason, antoine].filter((v) => v).length !== 2;

  return (
    <MuiCard title={"Form group checkboxes"}>
      <Box sx={styles.container}>
        <FormControl
          sx={styles.indeterminate}
          component="fieldset"
          variant="standard"
        >
          <FormLabel component="legend">Assign responsibility</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={gilad}
                  onChange={handleChange}
                  name="gilad"
                />
              }
              label={"Gilad Gray"}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={jason}
                  onChange={handleChange}
                  name="jason"
                />
              }
              label={"Jason Killian"}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={antoine}
                  onChange={handleChange}
                  name="antoine"
                />
              }
              label={"Antoine Llorca"}
            />
          </FormGroup>
        </FormControl>
        <FormControl
          required
          error={error}
          component="fieldset"
          sx={{ m: 3 }}
          variant="standard"
        >
          <FormLabel component="legend">Pick two</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={gilad}
                  onChange={handleChange}
                  name="gilad"
                />
              }
              label={"Gilad Gray"}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={jason}
                  onChange={handleChange}
                  name="jason"
                />
              }
              label={"Jason Killian"}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={antoine}
                  onChange={handleChange}
                  name="antoine"
                />
              }
              label={"Antoine Llorca"}
            />
          </FormGroup>
          <FormHelperText>You can display an error</FormHelperText>
        </FormControl>
      </Box>
    </MuiCard>
  );
}
