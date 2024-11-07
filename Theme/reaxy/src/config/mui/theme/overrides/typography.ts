const typography = ({ isRtl }: { isRtl: boolean }) => {
  return {
    MuiTypography: {
      styleOverrides: {
        root: {
          direction: isRtl ? "rtl" : "ltr",
          letterSpacing: "0.52px"
        },
      },
    },
  };
};

export default typography;
