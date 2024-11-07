import React from "react";
import { IChange } from "@config/models";
import { Box, TextField } from "@mui/material";
import {
  FacebookOutlinedIcon,
  GoogleIcon,
  TwitterIcon,
} from "@config/assets/icons";
import { useAppSelector } from "@config/hooks";
import { CustomLabel } from "@config/components";

export function SocialLife({ handleChange }: IChange) {
  // ** Redux
  const { values } = useAppSelector((state) => state.users);

  return (
    <Box>
      <TextField
        autoFocus
        margin="dense"
        name="google"
        value={values.google}
        onChange={handleChange}
        id="google"
        label={<CustomLabel icon={<GoogleIcon />} name={"Google"} />}
        fullWidth
        variant="filled"
      />
      <TextField
        margin="dense"
        name="facebook"
        value={values.facebook}
        onChange={handleChange}
        id="facebook"
        label={
          <CustomLabel icon={<FacebookOutlinedIcon />} name={"Facebook"} />
        }
        fullWidth
        variant="filled"
      />
      <TextField
        margin="dense"
        name="twitter"
        value={values.twitter}
        onChange={handleChange}
        id="google"
        label={<CustomLabel icon={<TwitterIcon />} name={"Twitter"} />}
        fullWidth
        variant="filled"
      />
    </Box>
  );
}
