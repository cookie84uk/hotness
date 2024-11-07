import { layoutSize } from "@config/constant";
import { Theme } from "@mui/material";

export const styles = (
  { COMPACT }: { COMPACT: boolean },
  { DEFAULT }: { DEFAULT: boolean },
  { MINI }: { MINI: boolean },
  { show }: { show: any },
  { level }: { level: number },
  { isRtl }: { isRtl: boolean }
) => ({
  container: {
    position: "relative",
    height: "auto",
    borderBottomLeftRadius: (theme: Theme) => `${theme.shape.borderRadius}px `,
    borderBottomRightRadius: (theme: Theme) => `${theme.shape.borderRadius}px `,
    "& .MuiButtonBase-root": {
      width: MINI ? "80px" : "170px",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: DEFAULT ? "8px" : "",
      height: level ? "40px" : `${layoutSize.APPBAR_HEIGHT}px`,
      ...(COMPACT && { display: "flex", flexDirection: "column" }),
      borderBottomLeftRadius: (theme: Theme) =>
        `${theme.shape.borderRadius}px `,
      borderBottomRightRadius: (theme: Theme) =>
        `${theme.shape.borderRadius}px `,

      "&:hover + ul": {
        visibility: "visible",
      },

      "& .MuiTypography-root": {
        whiteSpace: "pre",
        textTransform: "unset",
        textOverflow: "ellipsis",
        overflow: "hidden",
        color: (theme: Theme) => theme.palette.text.primary,
        display: MINI ? "none" : "block",
      },
      "& .MuiListItemIcon-root": {
        color: (theme: Theme) => theme.palette.primary.main,
        minWidth: "0px",
      },
      "&.Mui-selected, &.active": {
        background: (theme: Theme) => theme.palette.background.default,
      },
      "& .arrowRight": {
        position: "absolute",
        right: MINI ? "4px" : "16px",
        ...(isRtl && {
          right: "auto",
          left: MINI ? "4px" : "16px",
          transform: "rotate(180deg)",
        }),
      },
    },

    "& .MuiListItemIcon-root": {
      margin: "0px",
      padding: "0 8px",
      color: (theme: Theme) => theme.palette.text.primary,
    },
    "&:hover ul": {
      visibility: show && "visible",
    },

    ul: {
      visibility: "hidden",
      position: "absolute",
      background: (theme: Theme) => theme.palette.background.paper,
      top: level ? 0 : `calc(${layoutSize.APPBAR_HEIGHT}px - 10px)`,
      left: level ? "100%" : 0,

      ...(isRtl && {
        right: level ? "100%" : 0,
        left: "auto",
      }),
      padding: "16px 0",
      zIndex: 3000,
      borderRadius: "0 0 16px 16px",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
      "&:hover": {
        visibility: "visible",
      },
      "& .MuiButtonBase-root": {
        height: "40px",
        ...(COMPACT && { display: "flex", flexDirection: "row" }),
        ...(COMPACT && { display: "flex", flexDirection: "row" }),
        justifyContent: MINI ? "center" : "start",
        padding: "16px",
        borderRadius: (theme: Theme) => `${theme.shape.borderRadius}px `,
        "& .MuiIcon-root": {
          color: (theme: Theme) => theme.palette.primary.main,
          fontSize: MINI ? "28px" : "24px",
        },
      },
    },
  },
});
