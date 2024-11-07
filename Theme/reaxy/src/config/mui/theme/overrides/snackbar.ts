// ** MUI Imports
import { Theme } from "@mui/material";

const snackbar = (theme: Theme) => {
  return {
    MuiSnackbar: {
      styleOverrides: {
        root: {
          ".MuiPaper-root": {
            display: "flex",
            alignItems: "center",
            color: theme.palette.customColors.modeColor,
            background: theme.palette.background.paper,
          },
          "& .MuiAlert-filled": {
            color: theme.palette.customColors.modeColor,
            background: theme.palette.background.paper,
          },
          "& .MuiAlert-filledSuccess": {
            background: theme.palette.success.main,
            color: theme.palette.common.white,
            ".MuiAlert-message": {
              color: theme.palette.common.white,
            },
            ".MuiPaper-root": {
              "& .MuiAlert-message": {
                color: theme.palette.common.white,
              },
            },
          },
          "& .MuiAlert-filledError": {
            background: theme.palette.error.main,
            color: theme.palette.common.white,
          },
          "& .MuiAlert-filledInfo": {
            background: theme.palette.info.main,
            color: theme.palette.common.white,
          },
          "& .MuiAlert-filledWarning": {
            background: theme.palette.warning.main,
            color: theme.palette.common.white,
          },
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          "& .MuiAlert-filledSuccess": {
            background: theme.palette.success.main,
            color: theme.palette.success.contrastText,
          },
          "& .MuiAlert-filledError": {
            background: theme.palette.error.main,
            color: theme.palette.error.contrastText,
          },
          filledSuccess: {
            backgroundColor: theme.palette.success.main,
            color: theme.palette.success.contrastText,
          },
          filledError: {
            backgroundColor: theme.palette.error.main,
            color: theme.palette.error.contrastText,
          },
        },
      },
    },
  };
};

export default snackbar;
