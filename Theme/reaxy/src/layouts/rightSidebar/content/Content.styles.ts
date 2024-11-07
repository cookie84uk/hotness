import { Theme } from "@mui/material/styles";
import BG from "@config/assets/images/admin/headerBg.png";
import { layoutSize } from "@config/constant";

export const styles = {
  container: {
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    gap: 4,
    padding: 3,
    zIndex: 1204,
    "& > *": {
      marginBottom: (theme: Theme) => theme.spacing(3),
    },
  },
  containerGrid: {
    height: "100%",
    width: "100%",
    bottom: "65px",
    position: "absolute",
    p: 3,
    top: 0,
    pb: `calc(32px + ${layoutSize.APPBAR_HEIGHT}px)`,
    backgroundImage: `url(${BG})`,
  },
  divider: {
    borderColor: (theme: Theme) => theme.palette.text.primary,
  },

  contentGrid: {
    padding: "1rem",
  },

  wrapper: {
    display: "flex",
    flexDirection: "row",
    placeContent: "center",
    justifyContent: "space-between",
    alignItems: "center",
    boxSizing: "border-box",
  },
  wrapperMenu: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    boxSizing: "border-box",
  },
  wrapperMode: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    boxSizing: "border-box",
  },

  text: {
    fontWeight: "bold",
    marginBottom: 2,
  },
};
