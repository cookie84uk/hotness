// ** MUI Imports
import { Theme } from "@mui/material/styles";

const fab = (theme: Theme) => {
  return {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          "&.Mui-focusVisible": {
            boxShadow: "unset",
          },
          "&.Mui-disabled": {
            borderColor: "#E0E0E0",
          },
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "1.4rem",
          lineHeight: "1.42em",
          padding: "8px 16px",
          minWidth: "100px",
          textTransform: "unset",
          boxShadow: "unset",
          "&:hover, &:active": {
            boxShadow: "unset",
          },
          ".MuiButton-startIcon": {
            margin: "0 .3em 0 0",
          },
        },
      },
      variants: [
        {
          props: { variant: "outlined", color: "secondary" },
          style: {
            color: theme.palette.primary.main,
            transition: ".2s ease-in-out all",

            ".MuiButton-startIcon": {
              svg: {
                path: {
                  transition: ".2s ease-in-out all",
                  stroke: theme.palette.primary.main,
                },
              },
            },

            "&:hover": {
              color: theme.palette.common.white,

              ".MuiButton-startIcon": {
                svg: {
                  path: {
                    stroke: theme.palette.common.white,
                  },
                },
              },
            },
          },
        },
        {
          props: { variant: "outlined", color: "primary" },
          style: {
            fontWeight: 400,
            transition: ".2s ease-in-out all",

            ".MuiButton-startIcon": {
              svg: {
                path: {
                  transition: ".2s ease-in-out all",
                  stroke: theme.palette.primary.main,
                },
              },
            },

            "&:hover": {
              color: theme.palette.common.white,

              ".MuiButton-startIcon": {
                svg: {
                  path: {
                    stroke: theme.palette.common.white,
                  },
                },
              },
            },

            "&:active": {
              color: theme.palette.common.white,

              ".MuiButton-startIcon": {
                svg: {
                  path: {
                    stroke: theme.palette.common.white,
                  },
                },
              },
            },
          },
        },
        {
          props: { variant: "contained", color: "primary" },
          style: {
            fontWeight: 400,
            transition: ".2s ease-in-out all",

            ".MuiButton-startIcon": {
              svg: {
                path: {
                  transition: ".2s ease-in-out all",
                  stroke: theme.palette.common.white,
                },
              },
            },

            "&:hover": {
              color: theme.palette.common.white,
            },

            "&:active": {
              color: theme.palette.common.white,
              backgroundColor: theme.palette.primary.dark,
            },
          },
        },
      ],
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          padding: "0 8px",

          "&:hover": {
            backgroundColor: "unset",
          },

          "&.MuiIconButton-edgeEnd": {
            marginRight: "8px",
          },
        },
      },
    },
  };
};

export default fab;
