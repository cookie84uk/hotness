import {
  Box,
  Button,
  CardContent,
  Fab,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { styles } from "@pages/pages/styles/Pages.styles";

import { IconButton, InputAdornment, Snackbar } from "@mui/material";
import { useForm } from "react-hook-form";
import MuiAlert from "@mui/material/Alert";
import { AnimatePresence, CustomLabel, LoaderApp } from "@config/components";
import { useState } from "react";
import { useDispatch } from "react-redux";

import React from "react";
import { setIsLogin } from "@config/redux";
import { IRegisterProps } from "@config/models";
import {
  KeyIcon,
  MailIcon,
  PersonAddIcon,
  PersonIcon,
  Visibility,
  VisibilityOff,
} from "@config/assets";

const defaultValues: IRegisterProps = {
  email: "",
  name: "",
  password: "",
  passwordConfirm: "",
};

export default function Register() {
  const dispatch = useDispatch();
  // ** useState
  const [isLoading, setIsLoading] = useState(false);

  // ** mui snackbar
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };
  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  // navigate
  const navigate = useNavigate();

  // export function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm<IRegisterProps>({ defaultValues });

  const onSubmit = async (data: IRegisterProps) => {
    // Reset existing errors
    Object.keys(errors).forEach((field) => {
      setError(field as keyof IRegisterProps, { type: "manual", message: "" });
    });

    let hasErrors = false;

    if (data.email.trim() === "") {
      setError("email", {
        type: "manual",
        message: "Email cannot be empty",
      });
      hasErrors = true;
    }

    if (data.name.trim() === "") {
      setError("name", {
        type: "manual",
        message: "Email cannot be empty",
      });
      hasErrors = true;
    }
    if (data.password.length <= 8) {
      setError("password", {
        type: "manual",
        message: "At least 8 characters",
      });
      hasErrors = true;
    }

    if (data.password.trim() === "") {
      setError("password", {
        type: "manual",
        message: "Password cannot be empty , at least 8 characters",
      });
      setError("passwordConfirm", {
        type: "manual",
        message: "Identification of the password",
      });
      hasErrors = true;
    }

    if (data.passwordConfirm.length !== data.password.length) {
      setError("password", {
        type: "manual",
        message: "Identification of the password",
      });
      setError("passwordConfirm", {
        type: "manual",
        message: "Identification of the password",
      });
      hasErrors = true;
    }

    if (hasErrors) {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate loading
      setIsLoading(false);
      setSnackbarOpen(true);
      return;
    }

    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate loading

    // ** Successful submission
    setIsLoading(false);
    navigate("/login");
    reset(defaultValues);
    dispatch(setIsLogin("HAS_TOKEN"));
  };

  const theme = useTheme();
  const style = styles(theme);

  if (isLoading) {
    return <LoaderApp />;
  }

  return (
    <Box sx={style.container}>
      <AnimatePresence direction={"center"} duration={1}>
        <Box sx={style.wrapper}>
          <Box sx={style.header}>
            <Fab color="secondary" aria-label="add">
              <PersonAddIcon />
            </Fab>
            <Button
              variant="contained"
              onClick={() => {
                navigate("/login");
              }}
            >
              <Typography color={"inherit"} variant="h6">
                Already have an account ? Sign in!
              </Typography>
            </Button>
            <CardContent sx={style.cardContent}>
              <Box
                sx={style.form}
                component={"form"}
                onSubmit={handleSubmit(onSubmit)}
              >
                <Typography variant="h5" fontWeight={500} letterSpacing={4}>
                  REGISTER MEMBER
                </Typography>

                <TextField
                  autoFocus={true}
                  fullWidth
                  variant="filled"
                  type="text"
                  placeholder="name"
                  helperText={<span color="error">{errors.name?.message}</span>}
                  label={<CustomLabel icon={<PersonIcon />} name={"Name"} />}
                  required={!!errors.name}
                  error={!!errors.name}
                  {...register("name")}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="email"
                  placeholder="email"
                  helperText={
                    <span color="error">{errors.email?.message}</span>
                  }
                  label={<CustomLabel icon={<MailIcon />} name={"Email"} />}
                  required={!!errors.email}
                  error={!!errors.email}
                  {...register("email")}
                />
                <TextField
                  margin="dense"
                  id="password"
                  label={<CustomLabel icon={<KeyIcon />} name={"Password"} />}
                  fullWidth
                  placeholder="password"
                  helperText={
                    <span color="error">{errors.password?.message}</span>
                  }
                  required={!!errors.password}
                  error={!!errors.password}
                  {...register("password")}
                  variant="filled"
                  type={showPassword ? "text" : "password"}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          sx={{
                            "&.MuiButtonBase-root": { boxShadow: 0 },
                            ".MuiSvgIcon-root": {
                              color: theme.palette.text.secondary,
                            },
                          }}
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  margin="dense"
                  id="passwordConfirm"
                  label={
                    <CustomLabel icon={<KeyIcon />} name={"Confirm Password"} />
                  }
                  fullWidth
                  placeholder="confirm password"
                  helperText={
                    <Typography variant="caption" color="error">
                      {errors.passwordConfirm?.message}
                    </Typography>
                  }
                  required={!!errors.passwordConfirm}
                  error={!!errors.passwordConfirm}
                  {...register("passwordConfirm")}
                  variant="filled"
                  type={showConfirmPassword ? "text" : "password"}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          sx={{
                            "&.MuiButtonBase-root": { boxShadow: 0 },
                            ".MuiSvgIcon-root": {
                              color: theme.palette.text.secondary,
                            },
                          }}
                          aria-label="toggle password visibility"
                          onClick={handleClickShowConfirmPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {showConfirmPassword ? (
                            <Visibility />
                          ) : (
                            <VisibilityOff />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <Button type="submit" variant="contained" sx={style.button}>
                  SIGN UP
                </Button>
              </Box>
            </CardContent>
          </Box>
        </Box>
        <Snackbar
          open={snackbarOpen}
          onClose={handleSnackbarClose}
          autoHideDuration={3000}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
        >
          <MuiAlert
            elevation={6}
            variant="filled"
            onClose={handleSnackbarClose}
            severity="error"
          >
            Field cannot be empty!
          </MuiAlert>
        </Snackbar>
      </AnimatePresence>
    </Box>
  );
}
