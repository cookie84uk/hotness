import { Theme, alpha } from "@mui/material/styles";
import TM from "@config/assets/images/pages/mailbox/monster.jpg";

export const styles = (theme: Theme) => ({
  footer: {
    "&.MuiToolbar-root": {
      display: "flex",
      flexFlow: "row",
      minHeight: "56px",
      height: "auto",
      alignItems: "center",
      justifyContent: "center",
      background: theme.palette.customColors.main,
      bottom: "0px !important",
      width: "100%",
      position: "relative",
    },
  },

  text: {
    "&.MuiTypography-root": {
      whiteSpace: "nowrap",
      textTransform: "unset",
      textOverflow: "ellipsis",
      overflow: "hidden",
      transition: "all .2s ease-in-out",
      width: "100%",
    },
  },

  wrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: "1200px",
    width: "100%",
  },
  action: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: "16px",
    ".MuiTypography-root": {
      color: theme.palette.common.white,
      whiteSpace: "nowrap",
    },
    "& .MuiButton-root": {
      backgroundImage: `url(${TM})`,
      backgroundSize: "40px",
      backgroundPosition: "start",
      backgroundRepeat: "no-repeat",
      height: "40px",
      width: "200px",
      color: "#fff",
      borderRadius: "20px",
      backgroundColor: alpha(theme.palette.primary.light, 0.5),
      boxShadow: 3,
      transition: "all .2s ease-in-out",

      ":hover": {
        // backgroundSize: "100%",
        // transform: "scale(1.01)",
        backgroundColor: alpha(theme.palette.primary.light, 0.8),
        boxShadow: 3,
        transition: "all .2s ease-in-out",
      },
      "&:active": {
        border: "1px solid white",
        backgroundColor: alpha(theme.palette.customColors.modeColor, 0.2),
      },
    },
  },
});
