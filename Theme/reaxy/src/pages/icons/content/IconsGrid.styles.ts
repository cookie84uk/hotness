import { Theme } from "@mui/material";

export const styles = (theme: Theme) => ({
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    p: 2,
    cursor: "pointer",
    svg: {
      fontSize: "5.6rem",
      width: "5.6rem",
      height: "5.6rem",
      color: theme.palette.primary.main,
    },

    ".MuiTypography-root": {
      width: "100%",
      textOverflow: "ellipsis",
      overflow: "hidden",
      fontWeight: 400,
    },
  },
  iconContainer: { width: "100%", textAlign: "center", p: 3 },
});
