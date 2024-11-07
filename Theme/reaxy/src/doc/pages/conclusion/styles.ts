import { Theme } from "@mui/material";

export const styles = (theme: Theme) => ({
  cont: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    alignItems: "center",
  },
  wrapper: {
    display: "flex",
    flexDirection: { lg: "row", md: "row", sm: "column", xs: "column" },
    gap: "16px",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    padding: "16px",
  },

  iconBox: {
    "& .MuiSvgIcon-root": {
      color: "#FFA000",
      zIndex: 1,
      animationName: "icon",
      animationDuration: "2s",
      animationIterationCount: "infinite",
    },

    "@keyframes icon": {
      from: { transform: "rotate(0deg)" },
      to: { transform: "rotate(360deg)" },
    },
  },
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    ol: {
      color: theme.palette.primary.main,
    },
    a: {
      color: theme.palette.info.main,
      textDecoration: "none",
      fontWeight: 900,
    },
  },
  linkBox: { display: "flex", gap: "8px", flexDirection: "row" },
});
