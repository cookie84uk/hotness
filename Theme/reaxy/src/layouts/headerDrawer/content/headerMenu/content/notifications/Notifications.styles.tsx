import { Theme, alpha } from "@mui/material";
import BG from "@config/assets/images/admin/headerBg.png";

export const styles = (theme: Theme) => ({
  container: {
    display: {
      lg: "flex",
      md: "flex",
      sm: "flex",
      xs: "none",
    },
    "& .MuiButtonBase-root": {
      width: "100%",
      height: "unset !important",
    },
  },
  root: {},
  tabRoot: {
    "&.MuiTabPanel-root": {
      padding: "0px",
    },
  },
  tabHeader: {
    borderBottom: 1,
    borderColor: "divider",
    background: theme.palette.primary.main,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: `url(${BG})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: theme.palette.primary.main,
    width: "100%",
    "& .MuiButtonBase-root": {
      width: "unset !important",
    },
  },
  wrapper: {
    height: "250px",
    overflowY: "auto",
    overflowX: "hidden",
  },
  icon: {
    ".MuiSvgIcon-root": {
      color: alpha(theme.palette.common.white, 0.5),
    },
    "&.MuiTab-root": {
      "&.MuiTab-root.Mui-selected": {
        ".MuiSvgIcon-root": {
          color: theme.palette.common.white,
        },
        color: alpha(theme.palette.common.white, 0.5),
      },
    },
    color: theme.palette.common.white,
  },
  menu: {
    // "& .MuiPaper-root": {
    //   elevation: 0,
    //   overflow: "hidden",
    //   width: "300px",
    //   filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
    //   mt: 1.2,
    //   "& .MuiAvatar-root": {
    //     width: 32,
    //     height: 32,
    //     ml: -0.5,
    //     mr: 1,
    //   },
    //   "&:before": {
    //     content: '""',
    //     display: "block",
    //     position: "absolute",
    //     top: 0,
    //     right: 14,
    //     width: 10,
    //     height: 10,
    //     bgcolor: theme.palette.background.paper,
    //     transform: "translateY(-50%) rotate(45deg)",
    //     zIndex: 0,
    //   },
    // },
  },
});
