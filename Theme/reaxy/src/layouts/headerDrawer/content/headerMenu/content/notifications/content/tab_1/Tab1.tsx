import {
  Box,
  ListItemIcon,
  MenuItem,
  Typography,
  useTheme,
} from "@mui/material";
import { data } from "./data";
import { styles } from "./Tab_1.styles";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useAppSelector } from "@config/hooks";
import React from "react";

export function Tab1({ handleClose }: any) {
  // ** redux
  const { isRtl } = useAppSelector((state) => state.palette);

  // ** style
  const theme = useTheme();
  const style = styles(theme, { isRtl });

  return (
    <Box
      sx={{
        width: "300px",
        ".MuiButtonBase-root": {
          padding: "16px",
        },
      }}
    >
      {data.map((item: any, index: any) => (
        <MenuItem
          onClick={() => {
            handleClose();
          }}
          key={index}
        >
          <Box sx={style.container}>
            <Box sx={style.img} component={"img"} src={item.img} />
            <Box sx={style.wrapper}>
              <Box sx={style.headerTitle}>
                <Box>
                  <Typography sx={style.name} variant="h6">
                    {item.name}
                  </Typography>
                </Box>
                <Box sx={style.timeWrapper}>
                  <ListItemIcon sx={style.icon}>
                    <AccessTimeIcon
                      sx={{ fontSize: "12px", width: "14px", height: "14px" }}
                    />
                  </ListItemIcon>
                  <Typography sx={style.titleTime} variant="subtitle1">
                    {item.time}
                  </Typography>
                </Box>
              </Box>
              <Box sx={style.typographyBox}>
                <Typography sx={style.typography} variant="caption">
                  {item.text}
                </Typography>
              </Box>
            </Box>
          </Box>
        </MenuItem>
      ))}
    </Box>
  );
}
