import { layoutSize } from "@config/constant";
import { Theme } from "@mui/material";

export const styles = (
  { drawerWidth }: { drawerWidth: string },
  { sidebarIsOpen }: { sidebarIsOpen: any },
  { isRtl }: { isRtl: boolean },
  { footer }: { footer: boolean },
  { vertical }: { vertical: boolean },
  { variant }: { variant: boolean }
) => ({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: layoutSize.FOOTER_HEIGHT,
    zIndex: 1200,
    width:
      sidebarIsOpen && variant
        ? `calc(100% - (${drawerWidth} + 52px))`
        : `calc(100% - 36px)`,
    ...(!vertical && {
      width: `calc(100% - 36px)`,
    }),
    position: "fixed",
    bottom: footer ? "1.6rem" : "-100%",
    transition:
      "width .2s, bottom 1s, opacity .2s, right .2s, left .2s, background .2s, border-radius .2s",
    right: `calc(1.5rem + ${layoutSize.SCROLL_WIDTH})`,
    ...(isRtl && {
      left: `calc(1.5rem + ${layoutSize.SCROLL_WIDTH})`,
      right: "auto",
    }),
    background: (theme: Theme) => theme.palette.background.paper,
    borderRadius: (theme: Theme) => `${theme.shape.borderRadius}px`,
    boxShadow: 3,
  },
  content: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    height: layoutSize.FOOTER_HEIGHT,
    position: "relative",
    width: "100%",
  },
});
