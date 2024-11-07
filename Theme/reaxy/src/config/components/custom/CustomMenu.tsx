import React from "react";
import Menu from "@mui/material/Menu";
import IconButton from "@mui/material/IconButton";
import { Box } from "@mui/material";
import { MenuProps } from "../models/model";

export function CustomMenu({ icon: Icon, children, sx, onClose }: MenuProps) {
  const [isAnchorEl, setIsAnchorEl] = React.useState<HTMLElement | null>(null);

  const open = Boolean(isAnchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (open) {
      setIsAnchorEl(null);
    } else {
      setIsAnchorEl(event.currentTarget);
    }
  };

  const handleClose = () => {
    setIsAnchorEl(null);
    if (onClose) {
      onClose();
    }
  };

  return (
    <Box
      sx={{
        ...sx,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
    >
      <IconButton color="inherit" onClick={handleClick}>
        <Icon fontSize="large" />
      </IconButton>
      {Boolean(isAnchorEl) && (
        <Menu
          anchorEl={isAnchorEl}
          id={"aria-menu"}
          open={open}
          onClose={handleClose}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <Box onClick={handleClose}>{children}</Box>
        </Menu>
      )}
    </Box>
  );
}
