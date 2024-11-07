import BG from "@config/assets/images/admin/headerBg.png";
import { layoutSize } from "@config/constant";

export const styles = {
  container: {
    display: { xs: "none", md: "none", lg: "flex" },
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: `url(${BG})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "absolute",
    minWidth:"100%",
    minHeight:layoutSize.DRAWER_HEADER_BOX_HEIGHT - layoutSize.APPBAR_HEIGHT ,
    ".MuiGrid-container ": {
      display: "flex",
      alignItems: "center",
      height: "100%",
      p:"0 16px "
    },
    // padding: 3,
  },
};
