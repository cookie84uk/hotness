import {
  Box,
  Button,
  CardContent,
  Fab,
  IconButton,
  InputAdornment,
  Snackbar,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import { useNavigate } from "react-router-dom";
import { styles } from "@pages/pages/styles/Pages.styles";
import { useForm } from "react-hook-form";
import MuiAlert from "@mui/material/Alert";
import { AnimatePresence, CustomLabel, LoaderApp } from "@config/components";
import { useState } from "react";
import React from "react";
import { ILoginFormInputs } from "@config/models";
import { KeyIcon, MailIcon, Visibility, VisibilityOff } from "@config/assets";

const defaultValues: ILoginFormInputs = {
  email: "",
  password: "",
};

export default function Login() {
  // ** useState
  const [isLoading, setIsLoading] = useState(false);

  // ** mui snackbar
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

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
  } = useForm<ILoginFormInputs>({ defaultValues });

  const onSubmit = async (data: ILoginFormInputs) => {
    setIsLoading(true); // Start loading state
    // Reset existing errors
    Object.keys(errors).forEach((field) => {
      setError(field as keyof ILoginFormInputs, {
        type: "manual",
        message: "",
      });
    });

    let hasErrors = false;

    if (data.email.trim() === "") {
      setError("email", {
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
      hasErrors = true;
    }

    if (hasErrors) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSnackbarOpen(true);
      setIsLoading(false);
      return;
      // }
    } else {
      setTimeout(() => {
        setIsLoading(false);
        navigate("/");
        reset(defaultValues);
      }, 1000);
    }
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
              <LoginIcon />
            </Fab>
            <Button
              variant="contained"
              onClick={() => {
                navigate("/register");
              }}
            >
              <Typography color={"inherit"} variant="h6" fontWeight={500}>
                Don't have an account ? Sign up now!
              </Typography>
            </Button>
            <CardContent sx={style.cardContent}>
              <Box
                sx={style.form}
                component={"form"}
                onSubmit={handleSubmit(onSubmit)}
              >
                <Typography variant="h5" letterSpacing={4}>
                  MEMBER LOGIN
                </Typography>

                <TextField
                  autoFocus={true}
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
                  placeholder="password"
                  margin="dense"
                  id="password"
                  label={<CustomLabel icon={<KeyIcon />} name={"Password"} />}
                  fullWidth
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
                <Button type="submit" variant="contained" sx={style.button}>
                  SIGN IN
                </Button>
              </Box>
            </CardContent>
          </Box>
        </Box>
        <Snackbar
          open={snackbarOpen}
          onClose={handleSnackbarClose}
          autoHideDuration={2000}
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
