import { Theme } from "@mui/material";

const APP_HEIGHT = "56px";

export const FOOTER_HEIGHT = "88px";

export const styles = (theme: Theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100% ",
    transition: "all 0.4s ease-in-out",
    overflow: "hidden",
    background: theme.palette.background.default,
  },

  content: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    transition: "all 0.3s ease-in-out",
    overflow: "auto",
    position: "relative",
  },

  headerMain: {
    display: "flex",
    height: APP_HEIGHT,
    width: "100%",
    justifyContent: "space-between",
    background: theme.palette.primary.main,
    transition: "all 0.4s ease-in-out, padding 0.4s ease-in-out",
    padding: "16px",
    zIndex: 1,
    ".MuiSvgIcon-root": {
      color: theme.palette.common.white,
      fontSize: "24px",
    },
  },
  headerBox: {
    display: "flex",
    gap: 3,
  },
  headerActions: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
    img: {
      cursor: "pointer",
    },
  },

  menuItem: {
    overflow: "hidden",
    ".MuiButtonBase-root": {
      padding: "16px",
      height: "40px",
    },
  },
  listItem: {
    display: "flex",
    alignItems: "center",
    gap: 2,
    p: 1,
  },

  scroll: {
    p: 2,
    maxHeight: `calc(100% - ${FOOTER_HEIGHT})`,
    width: "100%",
    overflowY: "auto",
    paddingBottom: "8px",
    scrollMarginBottom: "auto",
  },
  mainContent: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    justifyContent: "center",
    ".MuiTypography-root": {
      whiteSpace: "pre",
      textTransform: "unset",
      textOverflow: "ellipsis",
      overflow: "hidden",
      transition: "all .2s ease-in-out",
      width: "100%",
      textAlign: "center",
    },
    ".MuiSvgIcon-root": {
      fontSize: { lg: "300px", md: "250px", sm: "150px", xs: "100px" },
      width: { lg: "300px", md: "250px", sm: "150px", xs: "150px" },
      height: { lg: "300px", md: "250px", sm: "150px", xs: "150px" },
      color: theme.palette.text.secondary,
    },
  },

  boxColumn: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },

  inputContainer: {
    // p: 2,
    display: "flex",
    gap: "16px",
    width: "100%",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    // borderTop: `1px solid ${theme.palette.text.secondary}`,
    background: theme.palette.background.paper,
  },
  img: {
    width: "40px",
    height: "40px",
    objectFit: "cover",
    borderRadius: "50%",
  },

  users: { display: "flex", flexDirection: "row" },
  listAdmin: { display: "flex", flexDirection: "row" },

  boxText: {
    p: "0px 16px",
    display: "flex",
    alignItems: "center",
    borderRadius: "5px",
  },
  admintext: {
    color: theme.palette.common.white,
    p: 1,
    background: theme.palette.primary.main,
    borderRadius: "5px",
  },
  usertext: {
    color: theme.palette.common.white,
    p: 1,
    background: theme.palette.secondary.main,
    borderRadius: "5px",
  },

  input: {
    display: "flex",
    width: "100%",
    mt: "auto",
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 10,
    color: theme.palette.text.secondary,
  },

  action: {
    display: "flex",
    flexDirection: "row",
    gap: 2,
    ".MuiButtonBase-root": {
      padding: "1.2rem",
    },
  },

  send: {
    background: theme.palette.primary.main,
    color: theme.palette.common.white,
    "&:hover": {
      background: theme.palette.primary.light,
    },
    "&:active": {
      background: theme.palette.primary.dark,
    },
  },

  file: {
    background: theme.palette.secondary.main,
    color: theme.palette.common.white,
    "&:hover": {
      background: theme.palette.secondary.light,
    },
    "&:active": {
      background: theme.palette.secondary.dark,
    },
  },
});
