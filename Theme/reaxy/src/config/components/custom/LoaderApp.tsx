import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { GridLoader } from "react-spinners";

export const LoaderApp: React.FC = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        width: "100% !important",
        position: "relative",
        background: theme.palette.background.paper,
        gap: "50px",
      }}
    >
      <GridLoader size={32} color={theme.palette.primary.main} />
      <Typography fontWeight={500} color={"primary"} variant="h3">
        Loading .....
      </Typography>
    </Box>
  );
};
