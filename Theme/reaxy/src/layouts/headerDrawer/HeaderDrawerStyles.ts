import { layoutSize } from "@config/constant";
import { Theme, alpha } from "@mui/material";

export const styles = (
  { open }: { open: boolean },
  { fixed }: { fixed: boolean }
) => ({
  container: {
    height: `${layoutSize.APPBAR_HEIGHT}px`,
  },
  sidebar: {
    position: fixed ? "fixed" : "relative",
    height: layoutSize.DRAWER_HEADER_BOX_HEIGHT,
    width: "100%",
    transform: `${
      open
        ? "translateY(0px)"
        : `translateY(calc(-${
            layoutSize.DRAWER_HEADER_BOX_HEIGHT - layoutSize.APPBAR_HEIGHT
          }px))`
    }`,

    zIndex: 1202,
    transition: "all 0.3s ease",
    borderBottomLeftRadius: (theme: Theme) => `${theme.shape.borderRadius}px `,
    borderBottomRightRadius: (theme: Theme) => `${theme.shape.borderRadius}px `,
    background: open
      ? (theme: Theme) => theme.palette.background.default
      : (theme: Theme) => theme.palette.background.default,
  },

  appBar: {
    background: !open
      ? (theme: Theme) => theme.palette.background.default
      : (theme: Theme) => theme.palette.background.paper,
    display: "flex",
    flexFlow: "row",
    bottom: 0,
    position: "absolute",
    width: "100%",
    height: `${layoutSize.APPBAR_HEIGHT}px`,
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomLeftRadius: (theme: Theme) => `${theme.shape.borderRadius}px `,
    borderBottomRightRadius: (theme: Theme) => `${theme.shape.borderRadius}px `,
    p: "2rem",
    ".MuiButtonBase-root": {
      border: (theme: Theme) => `1px solid ${theme.palette.primary.main} `,
      width: "40px",
      height: "40px",
    },
    expand: {
      display: { xs: "none", md: "none", lg: "flex" },
      ".MuiSvgIcon-root": {
        transform: open ? "rotate(180deg)" : 0,
      },
    },

    ".MuiSvgIcon-root": {
      fontSize: "2.4rem",
      color: (theme: Theme) => theme.palette.primary.main,
    },
  },
  start: {
    display: "flex",
    gap: 2,
  },

  organization: {
    display: {
      xs: "none",
      lg: "flex",
    },
    visibility: open ? "hidden" : "visible",
    flexFlow: "row",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 3,
  },
  organizationName: {
    fontSize: "1.4rem",
    fontWeight: 600,
    lineHeight: "1.14em",
    margin: "0",
  },
  position: {
    fontSize: "1rem",
    fontWeight: 500,
    lineHeight: "1.2em",
    margin: ".4em 0 0 0",
  },

  backDrop: {
    ...(open && {
      transition: "all 0.3s",
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 1201,
      background: (theme: Theme) => alpha(theme.palette.primary.main, 0.4),
    }),
  },
});
