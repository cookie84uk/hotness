import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { MuiCard } from "@config/components";
import React from "react";

export function SliderSizes() {
  return (
    <MuiCard title="Slider Sizes">
      <Box sx={{ maxWidth: "100%" }}>
        <Slider
          size="small"
          defaultValue={70}
          aria-label="Small"
          valueLabelDisplay="auto"
        />
        <Slider
          defaultValue={50}
          aria-label="Default"
          valueLabelDisplay="auto"
        />
      </Box>
    </MuiCard>
  );
}
