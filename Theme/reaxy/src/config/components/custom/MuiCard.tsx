import React from "react";
import {
  Card,
  CardHeader,
  Typography,
  CardContent,
  Theme,
} from "@mui/material";
import { MuiCardProps } from "../models/model";

export const MuiCard: React.FC<MuiCardProps> = ({
  title,
  children,
  sx,
  textAlign,
}) => {
  return (
    <Card
      sx={{
        height: "100%",
        width: "100%",
        background: (theme: Theme) => theme.palette.background.paper,
        boxShadow: 3,
        ".MuiDivider-root": {
          borderColor: (theme: Theme) => theme.palette.text.primary,
        },
        "&.MuiTypography-root": {
          fontWeight: 600,
          color: (theme: Theme) => theme.palette.text.primary,
        },

        "& .MuiStack-root": {
          display: "flex",
          flexWrap: "wrap",
          gap: "16px",
          padding: "8px 0",
        },
      }}
    >
      <CardHeader
        sx={{
          display: "flex",
        }}
        title={
          <Typography
            sx={{
              textAlign: { textAlign },
              "&.MuiTypography-root": {
                color: (theme: Theme) => theme.palette.primary.main,
              },
            }}
            variant="h5"
          >
            {title}
          </Typography>
        }
      />
      <CardContent sx={sx}>{children}</CardContent>
    </Card>
  );
};
