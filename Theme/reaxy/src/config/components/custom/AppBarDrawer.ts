import { styled } from "@mui/material/styles";
import MuiAppBar, {
  AppBarProps as _MuiAppBarProps,
} from "@mui/material/AppBar";
import { AppBarDrawerProps } from "../models/model";
import { layoutSize } from "@config/constant";

export const AppBarDrawer = styled(MuiAppBar, {
  shouldForwardProp: (prop) =>
    prop !== "open" &&
    prop !== "variant" &&
    prop !== "drawerWidth",
})<AppBarDrawerProps>(({ theme, open, variant, drawerWidth }) => ({
  position: "relative",
  height: `${layoutSize.APPBAR_HEIGHT}px`,
  width: drawerWidth,
  display: "flex",
  left: 0,
  overflow: "hidden",
  transition: theme.transitions.create(["margin", "width", "transform"], {
    easing: theme.transitions.easing.sharp,
    duration: 300,
  }),
  ...(open &&
    variant &&
    drawerWidth && {
      width: `calc(100% - ${drawerWidth})`,
      marginLeft: `${drawerWidth}`,
      transition: theme.transitions.create(["margin", "width", "transform"], {
        easing: theme.transitions.easing.easeOut,
        duration: 300,
      }),
    }),
}));
