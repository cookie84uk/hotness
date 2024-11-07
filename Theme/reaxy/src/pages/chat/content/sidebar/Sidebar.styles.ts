import { Theme } from "@mui/material";

const APP_HEIGHT = "56px";

export const styles = (
  theme: Theme,
  { isOpen }: { isOpen: boolean },
  { LAYOUT_SIZE }: { LAYOUT_SIZE: string },
  { isRtl }: { isRtl: boolean }
) => ({
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
    zIndex: 1000,
    height: LAYOUT_SIZE,
    borderRadius: isRtl ? "0 16px 16px 0" : "16px  0 0 16px",
    ...(isRtl && {
      borderRight: 0,
      borderLeft: `0.01px solid ${theme.palette.background.default}`,
    }),
    border: !isOpen ? 0 : "",
  },

  header: {
    display: "flex",
    position: "fixed",
    height: APP_HEIGHT,
    width: "100%",
    background: theme.palette.primary.main,
    boxShadow: 3,
    transition: "all 0.4s ease-in-out, padding 0.4s ease-in-out",
    padding: "8px",
  },

  content: {
    height: "100%",
    overflow: "auto",
    overflowX: "hidden",
    boxShadow: 3,
    paddingTop: "16px",
    ".MuiButtonBase-root": {
      borderRadius: "16px",
    },
  },
  listItem: {
    display: "flex",
    alignItems: "center",
    gap: 2,
    p: 1,
  },

  headerSidebar: {
    display: "flex",
    position: "sticky",
    height: APP_HEIGHT,
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    background: theme.palette.primary.main,
    borderRight: "0.01px solid grey",
    transition: "all 0.4s ease-in-out, padding 0.4s ease-in-out",
    padding: "16px",
    ".MuiSvgIcon-root": {
      color: theme.palette.common.white,
      fontSize: "24px",
    },
  },

  menuItem: {
    overflow: "hidden",
    ".MuiButtonBase-root": {
      padding: "16px",
      height: "40px",
    },
  },

  listButton: {
    "&.active": {
      background: theme.palette.primary.main,
      "& .MuiTypography-root": { color: theme.palette.common.white },

      fontFamily: "Roboto, sans-serif",
    },
  },

  img: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    objectFit: "cover",
    mr: "8px",
  },
  text: {
    display: "flex",
    flexDirection: "column",
  },
  onlineContainer: {
    display: "flex",
    alignItems: "center",
    gap: 0.5,
    svg: {
      fontSize: "8px",
      width: "8px",
      height: "8px",
    },
  },
  online: {
    "&.MuiSvgIcon-root": {
      fontSize: "8px",
    },
  },
  time: {
    "&.MuiSvgIcon-root": {
      fontSize: "8px",
    },
  },
});
