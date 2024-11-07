const datePicker = () => {
  return {
    MuiPickersCalendarHeader: {
      styleOverrides: {
        root: {
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          "& .MuiButtonBase-root": {
            fontSize: "large",
          },
          "& .MuiSvgIcon-root": {
            fontSize: "32px",
          },
          switchHeader: {
            flex: "1 1 auto",
            textAlign: "center",
          },
          switchHeaderItem: {
            display: "inline-flex",
            alignItems: "center",
            cursor: "pointer",
            "&:hover": {
              color: "#1976d2",
            },
          },
          switchHeaderItemSelected: {
            color: "#1976d2",
          },
          iconButton: {
            backgroundColor: "transparent",
            "&:hover": {
              backgroundColor: "transparent",
            },
          },
        },
      },
    },
  };
};

export default datePicker;
