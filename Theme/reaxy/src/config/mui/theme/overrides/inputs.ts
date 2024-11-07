// ** MUI Imports
import { Theme, alpha } from "@mui/material/styles";

// ** Assets Import

const input = (theme: Theme) => {
  return {
    MuiInputBase: {
      styleOverrides: {
        root: {
          // ** add style
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: "14px",
          "&.Mui-focused:not(.Mui-error)": {
            color: theme.palette.primary.dark,
          },
          "&.Mui-error": {
            zIndex: 10,
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          // ** add style
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: alpha(theme.palette.primary.main, 0.2),

          "&:hover:not(.Mui-disabled)": {
            backgroundColor: alpha(theme.palette.primary.main, 0.08),
          },

          "&:before": {
            borderBottom: alpha(theme.palette.primary.main, 0.22),
          },

          "&:hover:not(.Mui-disabled):before": {
            borderBottom: alpha(theme.palette.primary.main, 0.32),
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          // ** add style
        },
      },
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: {
          // ** add style
        },
      },
    },
  };
};

export default input;
