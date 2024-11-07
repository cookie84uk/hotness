import { Theme, alpha } from "@mui/material";

export const styles = (theme: Theme, { expanded }: { expanded: boolean }) => ({
  container: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    position: "relative",
  },
  headerBox: {
    display: "flex",
    alignItems: "center",
    height: "50px",
    width: "100%",
    background: theme.palette.customColors.backgroundFormHeader,
    transition: "all .2s",
    borderRadius: "16px 16px 0 0",
    padding: "16px",
    justifyContent: "space-between",
    svg: {
      color: theme.palette.customColors.modeColor,
    },
  },

  formatterBox: {
    width: "100%",
    height: "auto",
    background: !expanded ? alpha(theme.palette.background.default, 0.5) : "",
    borderRadius: "16px",
    marginBottom: expanded ? "6px" : "",
    "& .MuiCollapse-wrapperInner": {
      background: expanded
        ? theme.palette.customColors.backgroundForm
        : "transparent",
      borderBottomLeftRadius: "16px",
      borderBottomRightRadius: "16px",
    },
  },

  collapse: {
    transformOrigin: "top",
    transition: "all .2s ease-in-out",
    pre: {
      background: "transparent !important",
    },
  },

  formatter: {
    width: "100%",
    height: "100%",
    transform: expanded ? "translateY(0)" : "translateY(100%)",
  },

  showCode: {
    position: "absolute",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    ".MuiButtonBase-root": {
      borderRadius: 0,
      borderBottomRightRadius: "16px",
      borderBottomLeftRadius: "16px",
      color: expanded
        ? theme.palette.common.white
        : theme.palette.customColors.modeColor,
      backgroundColor: expanded
        ? theme.palette.common.black
        : theme.palette.background.default,
      "&:hover": {
        color: theme.palette.primary.main,
      },
    },
  },

  unShow: {
    display: "flex",
    height: "128px",
    borderRadius: "16px",
    color: theme.palette.primary.main,
    alignItems: "center",
    justifyContent: "center",
    fontSize: "16px",
    padding: "16px",
    "& p": {
      color: theme.palette.secondary.main,
      maxWidth: "400px",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "pre",
    },
    gap: "8px",
  },

  action: {
    display: "flex",
    flexDirection: "row",
    cursor: "pointer",
    "&:hover": {
      ".MuiTypography-root": {
        color: theme.palette.common.white,
        transition: "color .2s",
      },
      svg: {
        transition: "color .2s",
        color: theme.palette.common.white,
      },
    },
  },
});
