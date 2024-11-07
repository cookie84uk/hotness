import React from "react";
import { Box, MenuItem, Typography, useTheme } from "@mui/material";
import { data } from "./data";
import { styles } from "./Tab_3.styles";
import { useAppSelector } from "@config/hooks";

export function Tab3({ handleClose }: any) {
  // ** redux
  const { isRtl } = useAppSelector((state) => state.palette);

  // ** style
  const theme = useTheme();
  const style = styles(theme, { isRtl });

  return (
    <Box sx={{ width: "300px" }}>
      {data.map((item, index) => (
        <MenuItem onClick={handleClose} key={index} sx={style.container}>
          <Box sx={style.wrapper}>
            <Typography sx={style.boldTitle} variant="h6">
              {item.date}
            </Typography>
            <Typography sx={style.boldTitle} variant="h6">
              {item.month}
            </Typography>
          </Box>
          <Box sx={style.wrapperMessage}>
            <Typography sx={style.boldTitle} variant="h6">
              {item.nameMessage}
            </Typography>
            <Typography sx={style.typographyBox} variant="h6">
              {item.message}
            </Typography>
          </Box>
        </MenuItem>
      ))}
    </Box>
  );
}
