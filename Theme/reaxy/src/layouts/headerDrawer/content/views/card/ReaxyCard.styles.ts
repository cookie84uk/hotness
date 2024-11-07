import { Theme, alpha } from "@mui/material";

export const styles = ({ open }: { open: boolean }) => ({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    height: "100%",
    position: "relative",
    overflow: "hidden",
    width: "100%",
  },
  content: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },

  formCard: {
    p: 3,
    display: "flex",
    flexDirection: "column ",
    borderRadius: "16px",
    background: (theme: Theme) => alpha(theme.palette.text.primary, 0.1),
    width: "100%",
    height: "380px",
    ".contentForm": {
      display: "flex",
      flexDirection: "row ",
      width: "100%",
    },
    ".logo": {
      flex: " 1 1 50%",
      boxSizing: "border-box",
      maxWidth: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      width: "100%",
      position: "relative",
      overflow: "hidden",
      ".logoText": {
        color: (theme: Theme) => theme.palette.primary.main,
        lineHeight: "2rem",
        animationName: open ? "logoName" : "none",
        animationDuration: "3s",
        "@keyframes logoName": {
          from: {
            transform: `scale(0)`,
          },
          to: {
            transform: `scale(1)`,
          },
        },
      },
      svg: {
        width: "180px",
        height: "180px",
        animationName: open ? "rotateLogo" : "none",
        animationDuration: "3s",
        animationIterationCount: 1,
        path: {
          stroke: (theme: Theme) => theme.palette.primary.main,
          fill: (theme: Theme) => theme.palette.primary.main,
        },
        "@keyframes rotateLogo": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
    },
    ".form": {
      flex: " 1 1 50%",
      boxSizing: "border-box",
      maxWidth: "50%",
      display: "flex",
      flexDirection: "column",
      gap: 3,
      ".MuiBox-root": {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 3,
        ".MuiButtonBase-root": {
          border: (theme: Theme) => `1px solid ${theme.palette.primary.main} `,
          width: "30px",
          height: "30px",
        },
        svg: {
          color: (theme: Theme) => theme.palette.primary.main,
        },
      },
    },
  },
  textHeader: {
    textAlign: "center",
    p: 1,
    color: (theme: Theme) => theme.palette.primary.main,
  },
  dividerBox: {
    p: "2rem 0",
    display: "flex",
    flexDirection: "column",
    gap: 3,
    "& .MuiDivider-root": {
      borderColor: (theme: Theme) => theme.palette.primary.main,
    },
  },
  iconBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row ",
    borderRadius: "16px",
    gap: 3,
    svg: {
      color: (theme: Theme) => theme.palette.text.primary,
      width: "32px",
      height: "32px",
    },
    ".MuiButtonBase-root": {
      content: "unset",
      "&:hover": {
        transform: "scale(1.1)",
      },
    },
  },
  info: {
    svg: {
      path: {
        fill: (theme: Theme) => theme.palette.info.main,
      },
      color: (theme: Theme) => theme.palette.info.main,
    },
  },
  twitter: {
    svg: {
      path: {
        fill: (theme: Theme) => theme.palette.customColors.twitter,
      },
      color: (theme: Theme) => theme.palette.customColors.twitter,
    },
  },

  error: {
    svg: {
      path: {
        fill: (theme: Theme) => theme.palette.error.main,
      },
      color: (theme: Theme) => theme.palette.error.main,
    },
  },
  success: {
    svg: {
      path: {
        fill: (theme: Theme) => theme.palette.success.main,
      },
      color: (theme: Theme) => theme.palette.success.main,
    },
  },
  instagram: {
    svg: {
      path: {
        fill: (theme: Theme) => theme.palette.error.dark,
      },
      color: (theme: Theme) => theme.palette.error.dark,
    },
  },

  linkedin: {
    svg: {
      path: {
        fill: (theme: Theme) => theme.palette.customColors.linkedin,
      },
      color: (theme: Theme) => theme.palette.customColors.linkedin,
    },
  },

  faceBook: {
    svg: {
      path: {
        fill: (theme: Theme) => theme.palette.customColors.facebook,
      },
      color: (theme: Theme) => theme.palette.customColors.facebook,
    },
  },

  telegram: {
    svg: {
      path: {
        fill: (theme: Theme) => theme.palette.customColors.telegram,
      },
      color: (theme: Theme) => theme.palette.customColors.telegram,
    },
  },
});
