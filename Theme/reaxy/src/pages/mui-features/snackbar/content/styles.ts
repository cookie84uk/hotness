import { Theme } from "@mui/material";

export const styles = (theme: Theme) => ({
  buttonBox: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    gap: "16px",
  },

  wrap: {
    display: "flex",
    flexDirection: {
      lg: "row",
      md: "column",
      sm: "column",
      xs: "column",
    },
    gap: 3,
  },

  alertBox: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    gap: "16px",
    alert: {
      color: theme.palette.common.white,
      width: "100%",
    },
    ".MuiPaper-root": {
      display: "flex",
      alignItems: "center",
      height: "40px",
      gap: "16px",
      ".MuiAlert-message": {
        height: "40px",
        display: "flex",
        alignItems: "center",
      },
      ".MuiAlert-icon": {
        height: "40px",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        margin: 0,
      },
    },
  },
});
