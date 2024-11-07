import { Box, IconButton, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import {
  KeyIcon,
  PersonIcon,
  Visibility,
  VisibilityOff,
} from "@config/assets/icons";
import { IChange } from "@config/models";
import { useAppSelector } from "@config/hooks";
import React from "react";
import { CustomLabel } from "@config/components";

export function Basic({ handleChange }: IChange) {
  // ** Redux
  const { values } = useAppSelector((state) => state.users);

  // ** useState
  const [showPassword, setShowPassword] = useState(false);

  // ** handle methods
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <Box sx={{ width: "100%" }}>
      <TextField
        autoFocus={true}
        margin="dense"
        name="username"
        value={values.username}
        onChange={handleChange}
        id="username"
        label={<CustomLabel icon={<PersonIcon />} name={"Username"} />}
        fullWidth
        variant="filled"
      />

      <TextField
        autoFocus={false}
        margin="dense"
        name="password"
        value={values.password}
        onChange={handleChange}
        id="password"
        label={<CustomLabel icon={<KeyIcon />} name={"Password"} />}
        fullWidth
        variant="filled"
        type={showPassword ? "text" : "password"}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}
