// components/CustomMenu.tsx
import { useAppSelector, useOnClickOutside } from "@config/hooks";
import { Box, IconButton, useTheme } from "@mui/material";
import React, { useState, MouseEvent, useRef } from "react";

interface CustomMenuProps {
  children: React.ReactNode;
  icon: any;
  header: React.ReactNode;
  sx?: object;
}
export function MenuCustom({
  children,
  icon: Icon,
  header,
  sx,
}: CustomMenuProps) {
  // **redux
  const { isRtl } = useAppSelector((state) => state.palette);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleMenuClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  const menuRef = useRef<HTMLElement | null>(null);

  useOnClickOutside({ ref: menuRef, handler: handleMenuItemClick });

  const theme = useTheme();

  return (
    <Box sx={{ position: "relative" }} ref={menuRef}>
      <IconButton
        onClick={handleMenuClick}
        sx={{
          padding: 1,
          color: "#fff",
          border: "none",
          cursor: "pointer",
        }}
      >
        <Icon fontSize="large" />
      </IconButton>
      <Box
        sx={{
          position: "absolute",
          background: "#fff",
          zIndex: 1,
          boxShadow: 3,
          borderRadius: !isRtl ? "16px 0 16px 16px" : " 0 16px 16px 16px",
          opacity: isMenuOpen ? 1 : 0,
          visibility: isMenuOpen ? "visible" : "hidden",
          minWidth: "150px",
          marginTop: "12px",
          overflow: "hidden",
          right: "0",
          ...(isRtl && {
            left: 0,
            right: "auto",
          }),
          top: "100%",
          backgroundColor: theme.palette.background.paper,
          transition: "all .2s",
          ".MuiButtonBase-root": {
            border: "none",
            width: "100%",
          },
          "& a": {
            display: "block",
            padding: "8px",
            color: "#000",
            textDecoration: "none",
            "&:hover": {
              backgroundColor: theme.palette.background.default,
            },
          },
          ...sx,
        }}
      >
        <Box>{header && header}</Box>
        <Box onClick={() => handleMenuItemClick()}>{children}</Box>
      </Box>
    </Box>
  );
}
