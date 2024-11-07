import { styled } from "@mui/material";
import { MainProps } from "./../models/model";

export const MuiMain = styled("main", {
  shouldForwardProp: (prop) =>
    prop !== "open" &&
    prop !== "drawerWidth" &&
    prop !== "variant" &&
    prop !== "isRtl" &&
    prop !== "vertical" &&
    prop !== "onHover",
})<MainProps>(
  ({ theme, open, drawerWidth, variant, isRtl, vertical, onHover }) => ({
    flexGrow: 1,
    top: 0,
    overflow: "hidden",
    padding:" 0 1.6rem",
    transition: "all .2s ease !important",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    ...(open &&
      variant &&
      vertical && {
        transition: "all .2s ease-in-out !important",
        ...(isRtl
          ? { marginRight: `calc(${theme.spacing(3)} + ${drawerWidth})` }
          : { marginLeft: `calc(${theme.spacing(3)} + ${drawerWidth})` }),
      }),

    ...(onHover &&
      variant &&
      open && {
        transition: "all .2s ease-in-out !important",
        ...(isRtl
          ? { marginRight: `calc(${theme.spacing(3)} + ${drawerWidth})` }
          : { marginLeft: `calc(${theme.spacing(3)} + ${drawerWidth})` }),
      }),
  })
);
