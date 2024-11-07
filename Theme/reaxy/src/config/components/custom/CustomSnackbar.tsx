// CustomSnackbar.tsx
import React, { useState, useEffect } from "react";
import { Snackbar, Alert, useTheme } from "@mui/material";

type CustomSnackbarProps = {
  severity: "success" | "error" | "warning" | "info";
  title: string;
  icon?: JSX.Element;
  sx?: object;
};

const CustomSnackbar: React.FC<CustomSnackbarProps> = ({
  severity,
  title,
  icon,
  sx,
}) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      const timeout = setTimeout(() => {
        setOpen(false);
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [open]);

  return (
    <Snackbar
      open={open}
      autoHideDuration={null}
      onClose={() => setOpen(false)}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      sx={{
        ...sx,
        bottom: theme.spacing(2),
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      <Alert
        elevation={6}
        variant="filled"
        onClose={() => setOpen(false)}
        severity={severity}
        icon={icon}
      >
        {title}
      </Alert>
    </Snackbar>
  );
};

export default CustomSnackbar;
