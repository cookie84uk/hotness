import { Theme } from "@mui/material";

export const styles = (
  { isRtl }: { isRtl: boolean },
  { isClicked }: { isClicked: boolean },
  { sidebarIsOpen }: { sidebarIsOpen: any }
) => ({
  section: {
    mt: 3,
    display: "flex",
    width: "100%",
    background: (theme: Theme) => theme.palette.background.paper,
    borderRadius: "16px",
    gap: "16px",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    background: (theme: Theme) => theme.palette.background.default,
    padding: 3,
    borderRadius: "16px",
    // width: "auto",
    marginLeft: "16px",
    a: {
      margin: "16px 0",
      textDecoration: "none",
      color: (theme: Theme) => theme.palette.info.main,
      fontSize: "16px",
      marginRight: "16px",
      marginLeft: "auto",
      ...(isRtl && {
        marginRight: "auto",
        marginLeft: "16px",
      }),
    },
  },

  headerText: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
    padding: "16px",
    ".MuiTypography-root": {
      color: (theme: Theme) => theme.palette.primary.main,
    },
  },

  copyBox: {
    borderRadius: "16px",
    marginRight: 0,
    marginLeft: "auto",
    ...(isRtl && {
      marginRight: "auto",
      marginLeft: 0,
    }),

    width: "100%",
    ".MuiTypography-root": {},
    "& .MuiTabs-root": {
      width: "100%",
    },
  },
  tabHeader: {
    backgroundColor: (theme: Theme) => theme.palette.background.default,
    borderRadius: "16px 16px 0 0",
    display: "flex",
    flexDirection: "row",
  },

  packageManager: {
    color: (theme: Theme) => theme.palette.error.main,
    direction: "rtl",
  },

  copyText: {
    direction: "ltr",
    whiteSpace: "pre",
    textTransform: "unset",
    textOverflow: "ellipsis",
    overflow: "hidden",
    transition: "all .2s ease-in-out",
    maxWidth: sidebarIsOpen ? "80%" : "100%",
  },

  copyBoxWrapper: {
    //
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    svg: {
      color: (theme: Theme) => theme.palette.customColors.modeColor,
    },
  },

  textBox: {
    display: "flex",
    flexDirection: "row",
    gap: 1,
    maxWidth: "80%",
    ".MuiTypography-root": {
      whiteSpace: "pre",
    },
  },

  buttonBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 1,
    ".MuiButtonBase-root": {
      height: "46px",
      width: "46px",
      borderRadius: "12px",
      "&:hover": {
        background: (theme: Theme) => theme.palette.customColors.modeColor,
        svg: {
          color: (theme: Theme) =>
            theme.palette.mode === "light"
              ? theme.palette.common.white
              : theme.palette.common.black,
        },
      },
      svg: {
        transform: isClicked ? "scale(0.8)" : "none",
      },
    },
  },
});
