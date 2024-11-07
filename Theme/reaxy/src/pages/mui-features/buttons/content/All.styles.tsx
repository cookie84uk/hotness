import { Theme, alpha } from "@mui/material";

export const styles = (theme: Theme) => ({
  container: {
    "& .MuiButtonBase-root": {
      height: "40px",
      background: theme.palette.background.default,
      borderRadius: "4px",
      width: {lg:"unset", md:"unset", sm: "unset", xs:"100%" },
      ".MuiLoadingButton-loadingIndicator": {
        color: theme.palette.text.primary,
      },
      variants: [
        {
          props: { variant: "text" },
          style: {
            color: theme.palette.primary.main,
            background: "red  !important",
          },
        },
      ],
    },
  },

  basic: {
    "& .MuiLoadingButton-root": {
      color: theme.palette.customColors.modeColor,
    },
    color: theme.palette.customColors.modeColor,
    svg: {
      path: {
        fill: theme.palette.text.secondary,
        stroke: theme.palette.text.secondary,
      },
    },
    "&:hover": {
      background: alpha(theme.palette.text.disabled, 0.7),
      color: theme.palette.common.white,
      svg: {
        path: {
          fill: theme.palette.common.white,
        },
      },
    },
    "&:active": {
      color:
        theme.palette.mode === "dark"
          ? theme.palette.common.black
          : theme.palette.common.white,
      backgroundColor: theme.palette.text.primary,

      svg: {
        path: {
          fill:
            theme.palette.mode === "dark"
              ? theme.palette.common.black
              : theme.palette.common.white,
        },
      },
    },
  },
  primary: {
    "&.MuiButton-contained": {
      background: theme.palette.primary.main,
      color: theme.palette.common.white,
      svg: {
        path: {
          fill: alpha(theme.palette.primary.main, 0.2),
          stroke: theme.palette.common.white,
        },
      },
      "&:hover": {
        background: theme.palette.primary.dark,
        color: theme.palette.common.white,
        svg: {
          path: {
            fill: theme.palette.common.white,
            stroke: theme.palette.common.white,
          },
        },
      },
      "&:active": {
        color: theme.palette.common.white,
        backgroundColor: theme.palette.primary.main,

        svg: {
          path: {
            stroke: theme.palette.common.white,
          },
        },
      },
    },
    color: theme.palette.primary.main,
    svg: {
      path: {
        fill: theme.palette.primary.main,
        stroke: theme.palette.primary.main,
      },
    },
    "&:hover": {
      background: alpha(theme.palette.primary.main, 0.2),
      color: theme.palette.primary.main,
      svg: {
        path: {
          fill: alpha(theme.palette.primary.main, 0.2),
          stroke: theme.palette.primary.main,
        },
      },
    },
    "&:active": {
      color: theme.palette.common.white,
      backgroundColor: theme.palette.primary.dark,

      svg: {
        path: {
          stroke: theme.palette.common.white,
        },
      },
    },
  },
  secondary: {
    "&.MuiButton-contained": {
      background: theme.palette.secondary.main,
      color: theme.palette.common.white,
      svg: {
        path: {
          fill: alpha(theme.palette.secondary.main, 0.2),
          stroke: theme.palette.common.white,
        },
      },
      "&:hover": {
        background: theme.palette.secondary.dark,
        color: theme.palette.common.white,
        svg: {
          path: {
            fill: theme.palette.common.white,
            stroke: theme.palette.common.white,
          },
        },
      },
      "&:active": {
        color: theme.palette.common.white,
        backgroundColor: theme.palette.secondary.main,

        svg: {
          path: {
            stroke: theme.palette.common.white,
          },
        },
      },
    },
    color: theme.palette.secondary.main,
    svg: {
      path: {
        // stroke: alpha(theme.palette.secondary.main, 0.2),
        stroke: theme.palette.secondary.dark,
        fill: theme.palette.secondary.dark,
      },
    },
    "&:hover": {
      background: alpha(theme.palette.secondary.main, 0.2),
      color: theme.palette.secondary.dark,
      svg: {
        path: {
          stroke: alpha(theme.palette.secondary.main, 0.2),
          fill: theme.palette.secondary.dark,
        },
      },
    },

    "&:active": {
      color: theme.palette.common.white,
      backgroundColor: theme.palette.secondary.dark,

      svg: {
        path: {
          stroke: theme.palette.common.white,
        },
      },
    },
  },

  warning: {
    "&.MuiButton-contained": {
      background: theme.palette.warning.main,
      color: theme.palette.common.white,
      "&:hover": {
        background: theme.palette.warning.dark,
        color: theme.palette.common.white,
        svg: {
          path: {
            fill: alpha(theme.palette.warning.main, 0.2),
            stroke: theme.palette.warning.main,
          },
        },
      },
      "&:active": {
        color: theme.palette.common.white,
        backgroundColor: theme.palette.warning.main,

        svg: {
          path: {
            stroke: theme.palette.common.white,
          },
        },
      },
    },
    color: theme.palette.warning.main,
    svg: {
      path: {
        stroke: alpha(theme.palette.warning.main, 0.2),
        fill: theme.palette.warning.main,
      },
    },
    "&:hover": {
      background: alpha(theme.palette.warning.main, 0.2),
      color: theme.palette.warning.dark,
      svg: {
        path: {
          stroke: alpha(theme.palette.warning.main, 0.2),
          fill: theme.palette.warning.dark,
        },
      },
    },
    "&:active": {
      color: theme.palette.common.white,
      backgroundColor: theme.palette.warning.dark,

      svg: {
        path: {
          stroke: theme.palette.common.white,
        },
      },
    },
  },
  success: {
    "&.MuiButton-contained": {
      background: theme.palette.success.main,
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
  info: {
    "&.MuiButton-contained": {
      background: theme.palette.info.main,
      color: theme.palette.common.white,
      "&:hover": {
        background: theme.palette.info.dark,
        color: theme.palette.common.white,
        svg: {
          path: {
            fill: alpha(theme.palette.info.main, 0.2),
            stroke: theme.palette.info.main,
          },
        },
      },
      "&:active": {
        color: theme.palette.common.white,
        backgroundColor: theme.palette.info.main,

        svg: {
          path: {
            stroke: theme.palette.common.white,
          },
        },
      },
    },
    color: theme.palette.info.main,
    svg: {
      path: {
        stroke: alpha(theme.palette.info.main, 0.2),
        fill: theme.palette.info.dark,
      },
    },
    "&:hover": {
      background: alpha(theme.palette.info.main, 0.2),
      color: theme.palette.info.dark,
    },
    "&:active": {
      color: theme.palette.common.white,
      backgroundColor: theme.palette.info.dark,

      svg: {
        path: {
          stroke: theme.palette.common.white,
        },
      },
    },
  },
  error: {
    "&.MuiButton-contained": {
      background: theme.palette.error.main,
      color: theme.palette.common.white,
      "&:hover": {
        background: theme.palette.error.dark,
        color: theme.palette.common.white,
        svg: {
          path: {
            fill: alpha(theme.palette.error.main, 0.2),
            stroke: theme.palette.error.main,
          },
        },
      },
      "&:active": {
        color: theme.palette.common.white,
        backgroundColor: theme.palette.error.main,

        svg: {
          path: {
            stroke: theme.palette.common.white,
          },
        },
      },
    },
    color: theme.palette.error.main,
    svg: {
      path: {
        stroke: alpha(theme.palette.error.main, 0.2),
        fill: theme.palette.error.main,
      },
    },
    "&:hover": {
      background: alpha(theme.palette.error.main, 0.2),
      color: theme.palette.error.dark,
    },
    "&:active": {
      color: theme.palette.common.white,
      backgroundColor: theme.palette.error.dark,

      svg: {
        path: {
          stroke: theme.palette.common.white,
        },
      },
    },
  },
  disabled: {
    minWidth: "120px",

    "&.MuiLoadingButton-root": {
      color: theme.palette.customColors.modeColor,
    },
    "&.MuiButton-contained": {
      background: theme.palette.text.disabled,
      color: theme.palette.common.white,
      "&:hover": {
        background: theme.palette.text.disabled,
        color: theme.palette.common.white,
        svg: {
          path: {
            fill: alpha(theme.palette.text.disabled, 0.2),
            stroke: theme.palette.error.main,
          },
        },
      },
      "&:active": {
        color: theme.palette.common.white,
        backgroundColor: theme.palette.text.disabled,

        svg: {
          path: {
            stroke: theme.palette.common.white,
          },
        },
      },
    },
    color: theme.palette.text.disabled,
    svg: {
      path: {
        stroke: theme.palette.text.disabled,
      },
    },
    "&:hover": {
      background: alpha(theme.palette.text.disabled, 0.2),
      color: theme.palette.text.disabled,
    },
  },

  // *****!
  text: {
    fontWeight: 700,
    fontSize: "14px",
  },

  buttonPrimary: {
    color: theme.palette.text.primary,
    background: theme.palette.background.paper,
  },
  iconBContainer: {
    ".MuiButtonBase-root": {
      p: 1,
      height: "40px",
      width: "40px",
      border: "1px solid",
    },
  },

  fabS: {
    display: "flex",
    alignItems: "center",
  },
});
