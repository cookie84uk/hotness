import { styled } from "@mui/material/styles";
import { AppBarProps } from "../models/model";
import MuiAppBar from "@mui/material/AppBar";
import { layoutSize } from "@config/constant";

export const MyAppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) =>
    prop !== "open" &&
    prop !== "drawerWidth" &&
    prop !== "fixed" &&
    prop !== "variant" &&
    prop !== "isRtl" &&
    prop !== "vertical",
})<AppBarProps>(({ open, drawerWidth, fixed, variant, isRtl, vertical }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  height: layoutSize.APPBAR_HEIGHT,
  position: fixed ? "fixed" : "relative",
  boxShadow: 0,
  zIndex: 1000,
  padding:"8px 16px",
  transition: "all .2 s",
  ...(open &&
    variant &&
    vertical && {
      width: `calc(100% - ${drawerWidth})`,
      ...(isRtl
        ? { marginRight: `${drawerWidth}` }
        : { marginLeft: `${drawerWidth}` }),
        transition: "all .2 s",
      }),
}));
