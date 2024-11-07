import { Theme } from "@mui/material";

const APP_HEIGHT = "56px";

export const styles = (
  theme: Theme,
  { isOpen }: { isOpen: boolean },
  { LAYOUT_SIZE }: { LAYOUT_SIZE: string },
  { isRtl }: { isRtl: boolean }
) => ({
  // ** sidebar
  container: {
    display: "flex",
    flexDirection: "column",
    transition: "all .2s",
    width: isOpen
      ? { lg: "350px", md: "350px", sm: "250px", xs: "250px" }
      : "0px",
    boxSizing: "border-box",
    position: { xs: "fixed", sm: "fixed", lg: "relative", md: "relative" },
    overflow: "hidden",
    borderRight: `0.01px solid ${theme.palette.background.default}`,
    background: theme.palette.background.paper,
    zIndex: { lg: 1000, md: 1000, xs: 1000, sm: 1000 },
    height: LAYOUT_SIZE,
    borderRadius: isRtl ? "0 16px 16px 0" : "16px  0 0 16px",
    ...(isRtl && {
      borderRight: 0,
      borderLeft: `0.01px solid ${theme.palette.background.default}`,
    }),
    border: !isOpen ? 0 : "",
  },

  content: {
    height: "100%",
    overflow: "auto",
    overflowX: "hidden",
    boxShadow: 3,
    zIndex: 1000,

    paddingTop: "16px",
    ".MuiButtonBase-root": {
      borderRadius: "16px",
    },
  },

  listButton: {
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    "&.active": {
      background: theme.palette.primary.main,
      color: theme.palette.common.white,
      fontFamily: "Roboto, sans-serif",
      "&:hover": {
        background: theme.palette.primary.dark,
      },
      "& .MuiTypography-root": {
        color: theme.palette.common.white,
      },
    },
  },

  img: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    objectFit: "cover",
    mr: "8px",
  },

  textContainer: {
    display: "flex",
    flexDirection: "column",
    placeContent: "center",
    width: "100%",
    overflow: "hidden",

    ".MuiTypography-root": {
      width: "auto",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
  },

  textWrapper: {
    display: "flex",
    placeContent: "space-between",
    alignItems: "center",
    width: "100%",
  },

  subText: {
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    width: "250px",
    color: theme.palette.text.secondary,
    overflow: "hidden",
    fontWeight: 100,
  },

  // ** header sidebar

  headerSidebar: {
    display: "flex",
    position: "sticky",
    height: APP_HEIGHT,
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    whiteSpace: "nowrap",
    background: theme.palette.primary.main,
    transition: "all 0.4s ease-in-out, padding 0.4s ease-in-out",
    padding: "16px",
    zIndex: 1000,
    gap: "16px",
    ".MuiSvgIcon-root": {
      color: theme.palette.common.white,
      fontSize: "2.4rem",
    },
  },
  menuItem: {
    overflow: "auto",
    ".MuiButtonBase-root": {
      padding: "16px",
      height: "40px",
    },
  },

  listItem: {
    display: "flex",
    alignItems: "center",
    gap: 2,
    // p: 1,
  },

  inputBox: {
    p: 0,
    zIndex: 10,
    width: "100%",
    input: {
      width: "100%",
      background: "#fff",
      color: theme.palette.common.black,
      p: "5px",
      border: "none",
      boxShadow: 3,
    },
  },
});
