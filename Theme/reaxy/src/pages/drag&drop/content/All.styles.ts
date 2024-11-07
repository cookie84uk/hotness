import { Theme } from "@mui/material";

export const styles = (theme: Theme) => ({
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 4,
    cursor: "pointer",
    ".MuiSvgIcon-root": {
      fontSize: "5.6rem",
      width: "5.6rem",
      height: "5.6rem",
      color: theme.palette.primary.main,
      ".MuiTypography-root": { textAlign: "center" },
    },
  },
});
