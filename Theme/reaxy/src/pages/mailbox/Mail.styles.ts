import { Theme, alpha } from "@mui/material";

export const styles = (
  { LAYOUT_SIZE }: { LAYOUT_SIZE: string },
  { isOpen }: { isOpen: boolean },
  { isMdDown }: { isMdDown: any }
) => ({
  container: {
    display: "flex",
    flexDirection: "row",
    width: "100% !important",
    overflow: "hidden",
    height: LAYOUT_SIZE,
    boxShadow: "0 0 1px",
  },

  backDrop: {
    ...(isOpen && {
      transition: "all 0.3s",
      position: "absolute",
      opacity: isMdDown ? 1 : 0,
      top: "65px",
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 900,
      background: (theme: Theme) => alpha(theme.palette.primary.main, 0.4),
      borderRadius: "16px",
    }),
  },
});
