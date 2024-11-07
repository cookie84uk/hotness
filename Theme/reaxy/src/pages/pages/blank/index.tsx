import { useLayoutSize } from "@config/hooks";
import { Box, useTheme } from "@mui/material";
import React from "react";

export default function Blank() {
  const { LAYOUT_SIZE } = useLayoutSize();

  // ** styles
  const theme = useTheme();

  const styles = {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    width: "100%",
    height: LAYOUT_SIZE,
    background: theme.palette.background.paper,
    borderRadius: "16px",
    padding: "40px 16px",
  };

  return <Box sx={styles} />;
}
