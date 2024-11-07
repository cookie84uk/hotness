import React from "react";
import { Box, LinearProgress, MenuItem, Typography } from "@mui/material";
import { styles } from "./Tab_2.styles";
import { data } from "./data";

export function Tab2({ handleClose }: any) {
  return (
    <Box sx={{ width: "300px" }}>
      {data.map((item, index) => (
        <MenuItem onClick={handleClose} key={index} sx={styles.menuItem}>
          <Box sx={styles.title}>
            <Typography sx={styles.typography} variant="h6">
              {item.label}
            </Typography>
            <Typography variant="h6">{item.size}</Typography>
          </Box>
          <Box sx={{ width: "100%" }}>
            <LinearProgress color={item.color as any} />
          </Box>
        </MenuItem>
      ))}
    </Box>
  );
}
