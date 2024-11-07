import React from "react";
import {
  Box,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { IChange } from "@config//models";
import { useAppSelector } from "@config/hooks";

export function Settings({ handleChange }: IChange) {
  // ** Redux
  const { values, users } = useAppSelector((state) => state.users);

  // ** specificId
  const specificId = values.id;

  // ** specificUser
  const specificUser = users.find((user) => user.id === specificId);

  return (
    <Box>
      <RadioGroup
        aria-label="status"
        name="status"
        defaultValue="active"
        value={values.status}
        onChange={handleChange}
        row
      >
        <FormControlLabel value="active" control={<Radio />} label="Active" />
        <FormControlLabel value="block" control={<Radio />} label="Blocked" />
      </RadioGroup>
      {specificUser && (
        <Typography key={specificUser.id}>
          {specificUser.registration}
          {specificUser.joined}
        </Typography>
      )}
    </Box>
  );
}
