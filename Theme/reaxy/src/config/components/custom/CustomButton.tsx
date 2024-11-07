import { Box } from "@mui/material";
import { ButtonBoxProps } from "../models/model";
import React from "react";

export function CustomButton({ onClick, children, sx }: ButtonBoxProps) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <Box
      component="button"
      sx={{
        ...sx,
        fontFamily: "monospace",
        appearance: "none",
        display: "inline-block",
        textAlign: "center",
        lineHeight: "inherit",
        textDecoration: "none",
        border: 0,
        borderRadius: "4px",
        cursor: "pointer",
        boxSizing: "border-box",
        backgroundColor: "#fff",
        color: "#fff",
        "&:hover": {
          backgroundColor: "#fefefe",
        },
        "&:active": {
          backgroundColor: "#e8eaf6",
        },
      }}
      onClick={handleClick}
    >
      {children}
    </Box>
  );
}
