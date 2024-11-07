import React from "react";
import {
  ApartmentIcon,
  MilitaryTechIcon,
  MonetizationOnIcon,
} from "@config/assets/icons";
import { Box, InputAdornment, TextField } from "@mui/material";
import { IChange } from "@config/models";
import { useAppSelector } from "@config/hooks";
import { CustomLabel } from "@config/components";

export function Work({ handleChange }: IChange) {
  // ** redux
  const { values } = useAppSelector((state) => state.users);

  return (
    <Box>
      <TextField
        autoFocus
        margin="dense"
        name="company"
        value={values.company}
        onChange={handleChange}
        id="company"
        label={<CustomLabel icon={<ApartmentIcon />} name={"Company"} />}
        fullWidth
        variant="filled"
      />
      <TextField
        margin="dense"
        name="position"
        value={values.position}
        onChange={handleChange}
        id="position"
        label={<CustomLabel icon={<MilitaryTechIcon />} name={"Position"} />}
        fullWidth
        variant="filled"
      />

      <TextField
        margin="dense"
        name="salary"
        value={values.salary}
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
          endAdornment: <InputAdornment position="start">.00</InputAdornment>,
        }}
        onChange={handleChange}
        id="salary"
        label={<CustomLabel icon={<MonetizationOnIcon />} name={"Salary"} />}
        fullWidth
        variant="filled"
      />
    </Box>
  );
}
