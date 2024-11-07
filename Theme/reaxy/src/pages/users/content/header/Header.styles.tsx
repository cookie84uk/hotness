import { Theme } from "@mui/material";

export const styles = (theme: Theme, { right }: { right: boolean }) => ({
  container: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    "& .MuiBottomNavigation-root": {
      width: "120px",
      m: 0,
      p: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  navContainer: {
    boxShadow: 3,
    "&.MuiBottomNavigation-root": {
      borderRadius: "16px",
      height: 0,
      padding: "24px 0",
    },
    svg: {
      fontSize: "24px",
    },
    ".MuiButtonBase-root": {
      width: "auto",
      minWidth: "60px",
    },
  },
  right: {
    width: "100%",
    "& .MuiInputBase-root": {
      display: right ? "block" : "none",
      right: 0,
      fontWeight: 500,
      margin: "0px",
      height: "47px",
      alignItems: "center",
      justifyContent: "center",
      transition: "transform 2s ease-in-out",
      "& .MuiInputBase-input": {
        textAlign: "center",
        position: "absolute",
        bottom: "4px",
      },
    },
  },

  labelProps: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    transform: "translate(0, 50%)",
    transition: "transform 200ms ease-in-out",
    "&.MuiFormLabel-root": {
      fontSize: { lg: "1.4rem", md: "1.2rem", sm: "1.2rem", xl: "1.2rem" },
      transition: "all .2s",
    },
    "&.Mui-focused.MuiFormLabel-root": {
      transform: "translate(0, -30%)",
      color: theme.palette.primary.main,
      fontSize: { lg: "1.6rem", md: "1.4rem", sm: "1.4rem", xs: "1.4rem" },
    },

    "&.MuiFormLabel-filled": {
      transform: "translateY(-30%)",
    },
  },
});
