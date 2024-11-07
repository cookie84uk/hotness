import { Theme, alpha } from "@mui/material";

export const styles = (theme: Theme) => ({
  container: {
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "row",
    flexWrap: "wrap",
    listStyle: "none",
    ".colorW": {
      color: theme.palette.common.white,
    },
    ".colorM": {
      color: theme.palette.customColors.modeColor,
    },
    ".MuiChip-root": {
      padding: "16px",
      margin: 0,
      ".MuiAvatar-root": {
        margin: 0,
        color:
          theme.palette.mode === "dark"
            ? theme.palette.primary.main
            : theme.palette.common.white,
        background: theme.palette.customColors.modeColor,

        fontWeight: 500,
        fontSize: "1.17rem",
      },
      svg: {
        path: {
          fill: theme.palette.customColors.modeColor,
        },
      },
    },
    label: {
      fontWeight: 700,
    },
  },

  basic: {
    width: "100%",
    backgroundColor: theme.palette.text.disabled,
    color: theme.palette.common.white,
    svg: {
      path: {
        fill: theme.palette.common.white,
        stroke: theme.palette.common.white,
      },
    },
    "&:hover": {
      backgroundColor: alpha(theme.palette.text.disabled, 0.2),
      color: theme.palette.customColors.modeColor,
      svg: {
        path: {
          fill: theme.palette.common.white,
          stroke: theme.palette.customColors.modeColor,
        },
      },
    },
  },
  primary: {
    width: "100%",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    "& svg": {
      "& path": {
        fill: theme.palette.common.white,
        stroke: theme.palette.common.white,
      },
    },
    "&:hover": {
      backgroundColor: `${theme.palette.primary.dark} !important`,
      color: theme.palette.common.white,
      "& svg": {
        "& path": {
          fill: theme.palette.common.white,
          stroke: theme.palette.customColors.modeColor,
        },
      },
    },
  },

  secondary: {
    width: "100%",
    background: theme.palette.secondary.main,
    color: theme.palette.common.white,
    svg: {
      path: {
        fill: theme.palette.common.white,
        stroke: theme.palette.common.white,
      },
    },
    "&:hover": {
      backgroundColor: `${theme.palette.secondary.dark} !important`,
      color: theme.palette.common.white,
      svg: {
        path: {
          fill: theme.palette.common.white,
          stroke: theme.palette.customColors.modeColor,
        },
      },
    },
  },
  error: {
    width: "100%",
    backgroundColor: theme.palette.error.main,
    color: theme.palette.common.white,
    "& svg": {
      "& path": {
        fill: theme.palette.common.white,
        stroke: theme.palette.common.white,
      },
    },
    "&:hover": {
      backgroundColor: `${theme.palette.error.dark} !important`,
      color: theme.palette.common.white,
      "& svg": {
        "& path": {
          fill: theme.palette.common.white,
          stroke: theme.palette.customColors.modeColor,
        },
      },
    },
  },
  success: {
    width: "100%",
    backgroundColor: theme.palette.success.main,
    color: theme.palette.common.white,
    "& svg": {
      "& path": {
        fill: theme.palette.common.white,
        stroke: theme.palette.common.white,
      },
    },
    "&:hover": {
      backgroundColor: `${theme.palette.success.dark} !important`,
      color: theme.palette.common.white,
      "& svg": {
        "& path": {
          fill: theme.palette.common.white,
          stroke: theme.palette.customColors.modeColor,
        },
      },
    },
  },
  info: {
    width: "100%",
    backgroundColor: theme.palette.info.main,
    color: theme.palette.common.white,
    "& svg": {
      "& path": {
        fill: theme.palette.common.white,
        stroke: theme.palette.common.white,
      },
    },
    "&:hover": {
      backgroundColor: `${theme.palette.info.dark} !important`,
      color: theme.palette.common.white,
      "& svg": {
        "& path": {
          fill: theme.palette.common.white,
          stroke: theme.palette.customColors.modeColor,
        },
      },
    },
  },
  warning: {
    width: "100%",
    backgroundColor: theme.palette.warning.main,
    color: theme.palette.common.white,
    "& svg": {
      "& path": {
        // fill: theme.palette.common.white,
        stroke: theme.palette.common.white,
      },
    },
    "&:hover": {
      backgroundColor: `${theme.palette.warning.dark} !important`,
      color: theme.palette.common.white,
      "& svg": {
        "& path": {
          fill: theme.palette.common.white,
          stroke: theme.palette.customColors.modeColor,
        },
      },
    },
  },
});
