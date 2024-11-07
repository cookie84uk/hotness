import { Theme, alpha } from "@mui/material";

export const styles = (theme: Theme) => ({
  img: {
    maxHeight: "400px",
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  textName: { fontWeight: 600, color: theme.palette.primary.main },
  textPosition: { fontWeight: 400, color: theme.palette.primary.main },
  textAbout: {
    fontWeight: 600,
    color: theme.palette.text.primary,
    textAlign: "start",
  },
  textAboutContent: { color: theme.palette.text.secondary },
  cardAction: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "end",
  },

  btn: {
    border: `1px solid ${theme.palette.common.white}`,
    height: "30px",
    minWidth: "100px",
    display: "flex",
    borderRadius: "16px",
    "&:hover": {
      border: `1px solid ${theme.palette.primary.main}`,
    },
  },

  btnText: {
    fontWeight: 900,
    color: theme.palette.primary.main,
  },

  center: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(1),
  },
  centerContent: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  textPrimary: { fontWeight: 600, color: theme.palette.primary.main },

  fabContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    ".facebook": {
      background: (theme: Theme) => theme.palette.customColors.facebook,
      color: (theme: Theme) => theme.palette.common.white,
      ":hover": {
        background: (theme: Theme) =>
          alpha(theme.palette.customColors.facebook, 0.7),
      },
    },

    ".twitter": {
      background: (theme: Theme) => theme.palette.customColors.twitter,
      color: (theme: Theme) => theme.palette.common.white,
      ":hover": {
        background: (theme: Theme) =>
          alpha(theme.palette.customColors.twitter, 0.7),
      },
    },

    ".linkedin": {
      background: (theme: Theme) => theme.palette.customColors.linkedin,
      color: (theme: Theme) => theme.palette.common.white,
      ":hover": {
        background: (theme: Theme) =>
          alpha(theme.palette.customColors.linkedin, 0.7),
      },
    },

    ".google": {
      background: (theme: Theme) => theme.palette.error.main,
      color: (theme: Theme) => theme.palette.common.white,
      ":hover": {
        background: (theme: Theme) => alpha(theme.palette.error.main, 0.7),
      },
    },
  },
});
