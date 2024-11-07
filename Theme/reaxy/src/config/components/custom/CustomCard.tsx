import {
  Card,
  CardHeader,
  CardContent,
  Chip,
  Typography,
  useTheme,
} from "@mui/material";
import { CustomCardProps } from "../models/model";
import React from "react";

export const CustomCard = ({
  title,
  label,
  chipColor = "default",
  chipOnClick,
  sx,
  icon,
  children,
  color,
  justifyContent = "center", 
}: CustomCardProps) => {
  const theme = useTheme();
  return (
    <Card
      sx={{
        ...sx,
        overflow: "hidden",
        boxShadow: 3,
        width: "100%",
        height: "100%",
        background: !color ? theme.palette.background.paper : color,
        "&.MuiPaper-root": {
          background: !color ? theme.palette.background.paper : color,
          boxShadow: theme.shadows[1],
          width: "100%",
          height: "100%",
          ".MuiCardContent-root": {
            background: "transparent",
            pb: 1,
          },

          ".MuiTypography-root": {
            color: color ? theme.palette.common.white : "",
          },
        },
      }}
    >
      <CardHeader
        sx={{
          justifyContent: justifyContent,
          alignItems: "center",
          display: "flex",
          p: 3,

          "& .MuiButtonBase-root": {
            "& .MuiChip-icon": {
              transform: "unset",
              m: "0px 8px",
              color: "white",
            },
            "& .MuiChip-label": {
              color: theme.palette.common.white,
            },
          },
          // pb: 1,
        }}
        title={
          <Typography
            sx={{
              whiteSpace: "pre",
            }}
            variant="h5"
          >
            {title}
          </Typography>
        }
        action={
          <Chip
            icon={icon}
            label={label}
            color={chipColor}
            onClick={chipOnClick}
          />
        }
      />
      <CardContent>{children}</CardContent>
    </Card>
  );
};
