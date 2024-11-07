import { layoutSize } from "@config/constant";
import { Theme } from "@mui/material/styles";

export const styles = (
  { fixed }: { fixed: boolean },
  { vertical }: { vertical: boolean }
) => ({
  navbar: {
    display: !vertical ? "flex" : "none",
    flexDirection: "row",
    background: (theme: Theme) => theme.palette.background.paper,
    width: "100%",
    height: `${layoutSize.APPBAR_HEIGHT}px`,
    zIndex: 2,
    alignItems: "center",
    justifyContent: "center",
    boxShadow: 3,
    position: fixed ? "relative" : "sticky",
    top: "0px",
    borderBottomLeftRadius: "24px",
    borderBottomRightRadius: "24px",
  },
});
