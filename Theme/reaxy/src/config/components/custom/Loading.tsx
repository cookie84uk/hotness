import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { HashLoader } from "react-spinners";
import { useLayoutSize } from "@config/hooks";

export const Loading: React.FC = () => {
  const { LAYOUT_SIZE } = useLayoutSize();
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: LAYOUT_SIZE,
        position: "relative",
        gap: "50px",
        borderRadius: `${theme.shape.borderRadius}px`,

      }}
    >
        <HashLoader size={120} color={theme.palette.primary.main} />
        <Typography fontWeight={500} color={"primary"} variant="h3">
          Loading .....
        </Typography>
    </Box>
  );
};
