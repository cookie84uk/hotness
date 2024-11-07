import { Box, Typography } from "@mui/material";
import { styles } from "./Header.styles";
import { useAppSelector } from "@config/hooks";
import React from "react";

export function Header({ title }: { title: string }) {
  const { isRtl } = useAppSelector((state) => state.palette);

  return (
    <Box sx={styles.container}>
      <Typography sx={{ textAlign: isRtl ? "right" : "left" }} variant="h2">
        {title}
      </Typography>
    </Box>
  );
}
