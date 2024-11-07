export const styles = {
  addHeader: {
    mt: 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 2,
    input: {
      fontSize: "1.5rem",
      padding: "0 8px",
      height: "40px",
    },
  },
  button: {
    "&.MuiButtonBase-root": {
      minWidth: "40px",
      width: "40px",
      height: "40px",
      borderRadius: "50%",
    },
  },
  list: {
    "& .MuiList-root": {
      p: 0,
      m: 0,
    },
  },

  text: {
    flex: "1",
    textAlign: "start",
    ".MuiTypography-root": {
      whiteSpace: "pre",
      textTransform: "unset",
      textOverflow: "ellipsis",
      overflow: "hidden",
      transition: "all .2s ease-in-out",
      width: "100%",
    },
  },

  icons: {
    p: 0,
    position: "initial",
    transform: "translateY(0%)",
    WebkitTransform: " translateY(0%)",
    svg: {
      fontSize: "larger",
    },
  },
};
