import React from "react";
import PropTypes from "prop-types";
import { Box, Stack, Typography } from "@mui/material";
import { CustomLabelProps } from "../models/model";

export const CustomLabel: React.FC<CustomLabelProps> = ({
  icon,
  name,
  color,
}) => {
  return (
    <Stack
      component="div"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        height: "30px",
        "& .MuiTypography-root": {
          color: color,
          fontSize: "12px",
          fontWeight: 400,
        },
      }}
    >
      <Box
        sx={{
          "& .MuiSvgIcon-root": { fontSize: "small", mr: 1 },
        }}
      >
        {icon}
      </Box>
      <Box>
        <Typography variant="body2">{name}</Typography>
      </Box>
    </Stack>
  );
};

CustomLabel.propTypes = {
  icon: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
};
