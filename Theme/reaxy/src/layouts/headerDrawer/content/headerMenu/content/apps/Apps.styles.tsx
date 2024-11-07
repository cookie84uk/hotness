import { Theme } from "@mui/material";
import BG from "@config/assets/images/admin/headerBg.png";

export const styles = (theme: Theme) => ({
  container: {
    display: {
      lg: "flex",
      md: "none",
      sm: "none",
      xs: "none",
    },
  },
  wrapper: {
    minWidth: "270px",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: `url(${BG})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: theme.palette.primary.main,
    padding: "12px",
    minWidth: "270px",

  },
  icon: {
    "&.MuiListItemIcon-root": {
      color: theme.palette.text.secondary,
      padding: "8px",
    },
  },
  menuItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    p: 3,
    "&.MuiButtonBase-root": {
      p: 7,
    },
  },
  typographyHeader: {
    color: theme.palette.common.white,
    fontWeight: "bold",
  },
  typography: {
    color: theme.palette.text.secondary,
    fontWeight: "bold",
  },
});
