import * as React from "react";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import {
  Button,
  Snackbar,
  useTheme,
  Grid,
  Box,
  SnackbarOrigin,
} from "@mui/material";
import { MuiCard } from "@config/components";
import { styles } from "./styles";

// ** mui alert
const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

interface State extends SnackbarOrigin {
  open: boolean;
}
export function Customized() {
  // ** useState
  // const [open, setOpen] = React.useState(false);

  const [state, setState] = React.useState<State>({
    open: false,
    vertical: "top",
    horizontal: "center",
  });

  const { vertical, horizontal, open } = state;

  // ** handle method
  const handleClick = (
    severity: AlertProps["severity"],
    newState: SnackbarOrigin
  ) => {
    setState({ ...newState, open: true });
    setSeverity(severity);
  };

  const handleClose = (
    _event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setState({ ...state, open: false });
  };

  const [severity, setSeverity] =
    React.useState<AlertProps["severity"]>("success");

  // ** styles
  const theme = useTheme();
  const style = styles(theme);

  return (
    <MuiCard title="Customized snackbar">
      <Grid container spacing={3}>
        <Grid item lg={6} md={12} xs={12}>
          <Box sx={style.buttonBox}>
            <Button
              color="error"
              fullWidth
              variant="outlined"
              onClick={() =>
                handleClick("error", { vertical: "top", horizontal: "left" })
              }
            >
              Open error snackbar
            </Button>
            <Button
              fullWidth
              variant="outlined"
              color="warning"
              onClick={() =>
                handleClick("warning", {
                  vertical: "bottom",
                  horizontal: "left",
                })
              }
            >
              Open warning snackbar
            </Button>
            <Button
              color="info"
              fullWidth
              variant="outlined"
              onClick={() =>
                handleClick("info", { vertical: "top", horizontal: "right" })
              }
            >
              Open info snackbar
            </Button>
            <Button
              color="success"
              fullWidth
              variant="outlined"
              onClick={() =>
                handleClick("success", {
                  vertical: "bottom",
                  horizontal: "right",
                })
              }
            >
              Open success snackbar
            </Button>
            <Snackbar
              anchorOrigin={{ vertical, horizontal }}
              open={open}
              autoHideDuration={6000}
              onClose={handleClose}
            >
              <Alert onClose={handleClose} severity={severity}>
                This is a {severity} message!
              </Alert>
            </Snackbar>
          </Box>
        </Grid>
        <Grid item lg={6} md={12} xs={12}>
          <Box sx={style.alertBox}>
            <Alert hidden sx={style.alertBox.alert} severity="error">
              This is an error message!
            </Alert>
            <Alert sx={style.alertBox.alert} severity="warning">
              This is a warning message!
            </Alert>
            <Alert sx={style.alertBox.alert} severity="info">
              This is an information message!
            </Alert>
            <Alert sx={style.alertBox.alert} severity="success">
              This is a success message!
            </Alert>
          </Box>
        </Grid>
      </Grid>
    </MuiCard>
  );
}
