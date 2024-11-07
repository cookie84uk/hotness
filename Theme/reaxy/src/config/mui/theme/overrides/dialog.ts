// ** MUI Imports

const dialog = () => {
  return {
    MuiDialog: {
      styleOverrides: {
        container: {
          "& .MuiPaper-root": {
            height: "auto",
          },
        },
      },
    },
  };
};

export default dialog;
