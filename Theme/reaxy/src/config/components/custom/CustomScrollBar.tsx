import React, { forwardRef, ReactNode } from "react";
import { Box, useTheme,  } from "@mui/material";

interface ScrollbarProps {
  sx?: any;
  onClick?: () => void;
  children?: ReactNode;
}

export const CustomScrollBar = forwardRef<HTMLDivElement, ScrollbarProps>(
  ({ sx, onClick, children }, ref) => {
    const handleClick = () => {
      if (onClick) {
        onClick();
      }
    };
    const theme = useTheme();

    return (
      <Box
        ref={ref}
        sx={{
          padding: 0,
          margin: 0,
          cursor: "pointer",
          zIndex: "none",
          overflowX: "hidden",
          "&::-webkit-scrollbar": {
            width: "8px",
            height: "8px",
          },
          "&::-webkit-scrollbar-track": {
            background: theme.palette.primary.light,
          },
          "&::-webkit-scrollbar-thumb": {
            background: theme.palette.primary.main,
            transition: "width 0.5s ease",
            borderRadius: "10px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            background: theme.palette.primary.dark,
            transition: "width 0.5s ease",
            width: "12px",
          },
          ...sx,
        }}
        onClick={handleClick}
      >
        {children}
      </Box>
    );
  }
);
