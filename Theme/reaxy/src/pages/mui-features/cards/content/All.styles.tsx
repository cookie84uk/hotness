import { Theme } from "@mui/material";

export const styles = (theme: Theme) => ({
  card: {
    "& .MuiCardHeader-root": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      "& .MuiTypography-root": {
        fontWeight: 500,
        color: `${theme.palette.common.white} !important`,
      },
    },

    ".MuiCardHeader-action": {
      display: "contents",
    },

    secondary: {
      background: theme.palette.secondary.main,
    },
    error: {
      background: theme.palette.error.main,
    },
    primary: {
      background: theme.palette.primary.main,
    },
  },
});
