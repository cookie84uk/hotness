import { layoutSize } from "@config/constant";
import { Theme } from "@mui/material";

export const styles = (
  { fixed }: { fixed: boolean },
  { isRtl }: { isRtl: boolean },
  { vertical }: { vertical: boolean },
  { drawerWidth }: { drawerWidth: string },
  { isScroll }: { isScroll: boolean },
  { footer }: { footer: boolean }
) => ({
  mainLayout: {
    direction: isRtl ? "rtl" : "ltr",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%",
    position: "absolute",
    overflowY: "auto",
    overflowX: "hidden",
    background: (theme: Theme) => theme.palette.background.default,
    ...(!fixed && {
      position: "absolute",
      width: "100%",
    }),
  },

  content: {
    display: "flex",
    width: "100%",
    overflow: "hidden",
    position: "absolute",
    marginTop: `${layoutSize.APPBAR_HEIGHT}px`,
    top: vertical ? "" : `calc(16px + ${layoutSize.APPBAR_HEIGHT}px)`,
  },

  containerFluid: {
    width: "100%",
    height: "100%",
    ml: "16px",
  },

  presentation: {
    visibility: isScroll ? "visible" : "hidden",
    opacity: isScroll ? 1 : 0,
    transition: "all .2s",
    position: "fixed",
    bottom: footer ? `calc(${layoutSize.FOOTER_HEIGHT} + 32px)` : "16px",
    zIndex: 1000,
    ...(isRtl
      ? {
          left: "1.6rem",
        }
      : {
          right: "1.6rem",
        }),
    svg: {
      color: (theme: Theme) => theme.palette.common.white,
    },
  },

  container: {
    height: "100%",
    width: `calc(100vw - ${drawerWidth})`,
    transition: "width 7s ease",

    ml: "16px",
    ...(isRtl && {
      ml: 0,
      mr: "16px",
    }),
    ...(!vertical && {
      ml: 0,
      mr: 0,
    }),

    overflow: "hidden",
  },
});
