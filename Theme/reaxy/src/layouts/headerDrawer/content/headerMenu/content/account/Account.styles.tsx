import { Theme } from "@mui/material";
import BG from "@config/assets/images/admin/headerBg.png";

export const styles = (theme: Theme) => ({
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundImage: `url(${BG})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: theme.palette.primary.main,
    padding: "8px",
    minWidth: "240px",
    borderRadius: "4px",
  },
  boxImage: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    border: " 1px solid rgba(0,0,0,.2)",
    objectFit: "cover",
  },
  boxText: {
    textAlign: "center",
    // lineHeight: 2,
    color: theme.palette.common.white,
  },
  typography: {
    color: theme.palette.common.white,
  },
  listItem: {
    display: "flex",
    alignItems: "center",
    gap: 2,
    p: 1,
    ".MuiSvgIcon-root": {
      color: (theme: Theme) => theme.palette.text.primary,
    },
  },
  divider: {
    color: theme.palette.primary.main,
    background: theme.palette.common.white,
  },
});
