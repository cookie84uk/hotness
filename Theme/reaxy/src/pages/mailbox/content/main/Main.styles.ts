import { Theme } from "@mui/material";
const APP_HEIGHT = "56px";

export const styles = (theme: Theme) => ({
  // ** main
  container: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    transition: "all 0.3s ease-in-out",
    overflow: "hidden",
    background: theme.palette.background.default,
    BorderBottom: "1px solid",
  },

  content: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    transition: "all 0.3s ease-in-out",
    overflowX: "hidden",
  },

  senderHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(2),
  },

  senderName: {
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-between",
    padding: theme.spacing(2),
  },
  senderText: { flexDirection: "row", display: "flex" },

  senderImg: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    objectFit: "cover",
    mr: "8px",
  },

  senderSubText: { fontSize: "1.1rem", color: theme.palette.text.secondary },

  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    ".MuiTypography-root": {
      whiteSpace: "pre",
      textTransform: "unset",
      textOverflow: "ellipsis",
      overflow: "hidden",
      transition: "all .2s ease-in-out",
      width: "100%",
      textAlign: "center",
    },

    svg: {
      fontSize: { lg: "300px", md: "250px", sm: "150px", xs: "100px" },
      width: { lg: "300px", md: "250px", sm: "150px", xs: "150px" },
      height: { lg: "300px", md: "250px", sm: "150px", xs: "150px" },
      color: theme.palette.text.secondary,
    },
  },

  icon: {
    fontSize: "300px",
    color: theme.palette.text.secondary,
  },

  // ** header main

  headerMain: {
    display: "flex",
    height: APP_HEIGHT,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    background: theme.palette.primary.main,
    transition: "all .2s",
    padding: "16px",

    ".MuiSvgIcon-root": {
      color: theme.palette.common.white,
    },
  },

  headerBox: {
    display: "flex",
    gap: "16px",
    flexDirection: "row",
    svg: {
      fontSize: "24px",
    },
  },

  listItem: {
    overflow: "hidden",
    ".MuiButtonBase-root": {
      padding: "16px",
      height: "40px",
    },
  },

  headerButton: {
    display: "flex",
    gap: "8px",
    color: "white",
    background: theme.palette.secondary.main,
    "& .MuiSvgIcon-root": {
      color: "white",
      path: {
        stroke: "white",
      },
    },
    "&:hover": {
      background: theme.palette.secondary.dark,
      color: "white",
    },
  },

  iconButton: {
    width: "40px",
    height: "40px",
  },

  buttonBox: {
    ".MuiButtonBase-root": {
      padding: "unset",
      height: "40px",
      "& .MuiSvgIcon-root": {
        color: "white",
        path: {
          stroke: "white",
        },
      },
      "&:hover": {
        transform: "scale(1.01)",
        "& .MuiSvgIcon-root": {
          color: "white",
          transform: "scale(1.1)",
          path: {
            stroke: "white",
          },
        },
      },
    },
  },
});
