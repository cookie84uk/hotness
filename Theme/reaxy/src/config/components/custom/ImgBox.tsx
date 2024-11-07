import { Box, useTheme } from "@mui/material";
import React from "react";
import { CustomBoxProps } from "../models/model";
import { PersonIcon } from "@config/assets";

const customBoxStyles: React.CSSProperties = {
  position: "relative",
  borderRadius: "50%",
  width: "100px",
  height: "100px",
  overflow: "hidden",
};

const imageStyles: React.CSSProperties = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
};

export const ImgBox: React.FC<CustomBoxProps> = ({
  imageSrc,
  icon,
  iconRootSx,
  containerSx,
}) => {
  const iconStyles: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    ...(iconRootSx || {}), 
  };

  // ** theme
  const theme = useTheme();

  return (
    <Box
      sx={{
        ...customBoxStyles,
        ...(containerSx || {}),
      }}
    >
      {imageSrc ? (
        <img src={imageSrc} alt="Image" style={imageStyles} />
      ) : (
        <PersonIcon
          sx={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            background: theme.palette.background.default,
          }}
        />
      )}
      {icon && <Box sx={iconStyles}>{icon}</Box>}
    </Box>
  );
};
