import { layoutSize } from "@config/constant";
import { Theme, alpha } from "@mui/material/styles";

const drawer = (
  theme: Theme,
  { drawerWidth }: { drawerWidth: string },
  { vertical }: { vertical: boolean },
  { DEFAULT }: { DEFAULT: boolean },
  { COMPACT }: { COMPACT: boolean },
  { MINI }: { MINI: boolean },
  { sidebarIsOpen }: { sidebarIsOpen: any },
  { variant }: { variant: boolean },
  { onHover }: { onHover: any },
  { show }: { show: boolean }
) => {
  return {
    MuiDrawer: {
      styleOverrides: {
        root: {
          display: vertical ? "flex" : "none",
          zIndex: !variant ? 3505 : 1200,
          ".MuiBackdrop-root": {
            background: alpha(theme.palette.primary.main, 0.4),
          },
          "& .MuiPaper-root": {
            boxShadow: "0px 1px 5px 0px rgba(0,0,0,0.10)",
            width: drawerWidth,
            position: "fixed !important",
            zIndex: 1200,
            marginLeft: "1.6rem",
            marginRight: "1.6rem",
            top: layoutSize.APPBAR_HEIGHT,
            height: `calc(100vh -  ${layoutSize.APPBAR_HEIGHT}px - 1.6rem)`,
            borderRadius: theme.shape.borderRadius,
            overflow: "hidden",
            transform: "translateX(-130%)",
            transition: "all .2s ease !important",
            border: "unset",
            transitionProperty: "width, transform",
            ...(sidebarIsOpen && {
              transform: "translateX(0)",
              transition: "all .2s ease-in-out !important",
            }),
            ".content": {
              padding: "1.6rem",
              display: "flex",
              width: "100%",
              overflowX: "hidden",
              overflowY: "auto",
              flexDirection: "column",
              position: "sticky",
              marginBottom: "1.8rem",
            },
          },

          "& .MuiListItemButton-root": {
            display: "flex",
            flexDirection: COMPACT && sidebarIsOpen ? "column " : "row",
            borderRadius: theme.shape.borderRadius,
            transition: "all .2s",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
            minHeight: "44px",
            ".arrowDown": {
              rotate: "-180deg",
              transition: "all .2s",
            },
            width: "100%",
            ...(MINI && {
              flexDirection: "column",
              justifyContent: "center",
              gap: 0,
            }),
            ...(COMPACT && {
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",

              ".arrowDown": {
                display: "block",
                margin: "0 auto",
                rotate: "180deg",
                transition: "all .2s",
              },
            }),

            "& .MuiTypography-root": {
              display: "block",
              position: "relative",
              fontSize: "1.6rem",
              lineHeight: "1.75em",
              fontWeight: 400,
              textAlign: "start",
              color: theme.palette.customColors.modeColor,
              whiteSpace: "pre",
              textTransform: "unset",
              textOverflow: "ellipsis",
              overflow: "hidden",
              transition: "all .2s ease-in-out",
              width: "100%",

              ...(COMPACT && {
                display: "block",
                marginLeft: 0,
                transition: "all .2s ease-in-out",
                textTransform: "unset",
                overflow: "hidden",
                whiteSpace: "pre",
                textAlign: "center",
                textOverflow: "ellipsis",
                width: "100%",
                padding: 3,
              }),
              ...(MINI && {
                display: "none",
              }),
            },

            "& .MuiListItemIcon-root": {
              position: "relative",
              minWidth: "16px",
              transition: "all .2s ease-in-out",
              color: theme.palette.primary.main,
            },

            svg: {
              width: "24px",
              height: "24px",
              transition: "all .2s",
              color: theme.palette.primary.main,
              path: {
                transition: "all .2s",
                stroke: theme.palette.common.white,
                fill: theme.palette.primary.main,
              },
            },

            "&.Mui-selected, &.active": {
              backgroundColor: theme.palette.primary.main,
              ".MuiTypography-root": {
                color: theme.palette.common.white,
              },
              "& .MuiListItemIcon-root": {
                position: "relative",
                minWidth: "auto",
                fontSize: COMPACT && sidebarIsOpen ? "3em" : "1em",
                transition: "all .2s ease-in-out",
                color: theme.palette.common.white,

                svg: {
                  width: "2.2em",
                  height: "2.2em",

                  "path, circle": {
                    stroke: theme.palette.customColors.modeColor,
                  },
                },
              },

              "&:hover": {
                backgroundColor: alpha(theme.palette.primary.main, 0.9),
                "& .MuiTypography-root": {
                  color: theme.palette.common.white,
                },
                svg: {
                  "path, circle": {
                    stroke: theme.palette.common.white,
                    fill: theme.palette.common.white,
                  },
                },
              },
            },

            "&:hover": {
              "& .MuiTypography-root": {
                color: theme.palette.primary.main,
              },

              svg: {
                "path, circle": {
                  stroke: theme.palette.primary.main,
                  fill: theme.palette.primary.main,
                },
              },
            },
          },

          "& .MuiCollapse-root": {
            transition: "all .2s ease-in-out !important",
            ...(COMPACT && {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }),

            "& .MuiCollapse-wrapper": {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              "& .MuiList-root": {
                width: "100%",
              },
            },

            "& .MuiCollapse-wrapperInner": {
              ...(COMPACT && {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: theme.palette.background.default,
                borderRadius: "16px",
              }),

              ...(MINI &&
                !onHover && {
                  backgroundColor: theme.palette.background.default,
                  borderRadius: "16px",
                }),
              "& .MuiListItemIcon-root": {},

              "& .MuiList-root": {
                width: "100%",
              },
              ".MuiListItemButton-root": {
                svg: {
                  minWidth: "22px",
                },

                ".circle:before": {
                  opacity: 1,
                  content: `unset`,
                },
              },
            },
          },

          "& .circle": {
            display: DEFAULT && variant ? "flex" : "none",
            svg: {
              fill: "transparent",
              border: "1px solid",
              borderRadius: "50%",
              stroke: theme.palette.primary.main,
              borderColor: theme.palette.primary.main,
            },
          },

          "& .variant": {
            svg: {
              path: {
                width: "25px",
                height: "25px",
                fill: theme.palette.primary.main,
              },
              transform: variant ? "" : "rotate(90deg)",
              transition: "transform .2s",
            },
          },

          "& .logo": {
            display: "flex",
            overflow: "hidden",
            cursor: "pointer",
            alignItems: "end",
            justifyContent: "space-around",
            svg: {
              width: (COMPACT && "120px") || (MINI && "100px") || "180px",
              height: show
                ? (COMPACT && "120px") || (MINI && "100px") || "180px"
                : 0,
              zIndex: 1,
              animationName: show && sidebarIsOpen ? "rotateAndStop" : "none",
              animationDuration: "3s",
              animationIterationCount: 1,
              transition: "all .2s",

              path: {
                stroke: theme.palette.primary.main,
                fill: theme.palette.primary.main,
              },
            },

            "@keyframes rotateAndStop": {
              from: { transform: "rotate(0deg)" },
              to: { transform: "rotate(360deg)" },
            },
          },

          ...(MINI &&
            onHover &&
            sidebarIsOpen && {
              "&:hover": {
                "& .MuiPaper-root": {
                  [theme.breakpoints.up("lg")]: {
                    width:
                      DEFAULT || MINI ? layoutSize.DRAWER_WIDTH.DEFAULT : "",
                    transition: "all .2s ease-in-out ",
                  },
                  ".MuiTypography-root": {
                    ...(MINI && {
                      display: "block",
                      opacity: 1,
                      transition: "all 0.2s",
                    }),
                  },

                  "& .circle-button": {
                    display: "flex",
                  },

                  ".text": {
                    display: "inline",
                    transition: ".2s",
                  },

                  "& .circle": {
                    display: DEFAULT || MINI ? "flex" : "none",
                  },

                  "& .logo": {
                    [theme.breakpoints.up("lg")]: {
                      visibility: "visible",
                      opacity: 1,
                      overflow: "hidden",
                      svg: {
                        height: show
                          ? (COMPACT && "120px") || (MINI && "180px") || "180px"
                          : 0,
                        width:
                          (COMPACT && "120px") || (MINI && "180px") || "180px",
                        zIndex: 1,
                        animationName: sidebarIsOpen ? "rotateAndStop" : "none",
                        animationDuration: "3s",
                        animationIterationCount: 1,
                        transition: "all .2s",
                        path: {
                          stroke: (theme: Theme) => theme.palette.primary.main,
                          fill: (theme: Theme) => theme.palette.primary.main,
                        },
                      },
                      "@keyframes rotateAndStop": {
                        from: { transform: "rotate(0deg)" },
                        to: { transform: "rotate(360deg)" },
                      },
                    },
                  },
                  "& .MuiIconButton-root": {
                    opacity: 1,
                    width: "auto",
                  },
                },
                "& .MuiListItemButton-root": {
                  opacity: 1,
                  width: "100%",
                  transition: "all .2s",
                  ...(MINI && {
                    flexDirection: "row",
                    justifyContent: "center",
                    gap: "16px",
                  }),
                  "&.Mui-selected, &.active": {
                    "&:before": {
                      transition: "all .2s",
                    },

                    "&:after": {
                      content: `''`,
                    },
                  },
                  "& .MuiTypography-root": {
                    opacity: 1,
                  },
                },
              },
            }),
        },
      },
    },
  };
};

export default drawer;
