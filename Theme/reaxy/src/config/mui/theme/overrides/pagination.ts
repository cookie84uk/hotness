// ** MUI Imports

const pagination = (isRtl: boolean) => {
  return {
    MuiPagination: {
      styleOverrides: {
        root: {
       
          "& .MuiPaper-root": {
            height: "20px !important",
          },
        },
      },
      defaultProps: {
        dir: isRtl ? "ltr" : " rtl",
      },
    },
  };
};

export default pagination;
