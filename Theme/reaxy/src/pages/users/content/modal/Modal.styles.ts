import { Theme, alpha } from "@mui/material";

export const styles = (theme: Theme,
  ) => ({
  container: {
    minWidth: "120px",
    height: "300px",
    overflow: "auto",
    gap: 5,
    "&.MuiBox-root": {
      minWidth: "350px",
      display: "flex",
      flexDirection: "column",
      p: 3,
      "& .MuiBox-root": {
        display: "flex",
        flexDirection: "column",
        gap: 3,
      },
    },
  },

  success: {
    "&.MuiButton-contained": {
      color: theme.palette.common.white,
      "&:hover": {
        background: theme.palette.success.dark,
        color: theme.palette.common.white,
        svg: {
          path: {
            fill: alpha(theme.palette.success.main, 0.2),
            stroke: theme.palette.success.main,
          },
        },
      },
      "&:active": {
        color: theme.palette.common.white,
        backgroundColor: theme.palette.success.main,

        svg: {
          path: {
            stroke: theme.palette.common.white,
          },
        },
      },
    },
    color: theme.palette.success.main,
    svg: {
      path: {
        stroke: alpha(theme.palette.success.main, 0.2),
        fill: theme.palette.success.dark,
      },
    },
    "&:hover": {
      background: alpha(theme.palette.success.main, 0.2),
      color: theme.palette.success.dark,
    },
    "&:active": {
      color: theme.palette.common.white,
      backgroundColor: theme.palette.success.dark,

      svg: {
        path: {
          stroke: theme.palette.common.white,
        },
      },
    },
  },
});
