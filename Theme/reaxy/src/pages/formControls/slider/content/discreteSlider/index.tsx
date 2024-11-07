import React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { MuiCard } from "@config/components";

function valuetext(value: number) {
  return `${value}°C`;
}

export function DiscreteSlider() {
  return (
    <MuiCard title="Discrete Slider">
      <Box sx={{ maxWidth: "100%" }}>
        <Slider
          aria-label="Temperature"
          defaultValue={30}
          getAriaValueText={valuetext}
          valueLabelDisplay="auto"
          step={10}
          marks
          min={10}
          max={110}
        />
        <Slider defaultValue={30} step={10} marks min={10} max={110} disabled />
      </Box>
    </MuiCard>
  );
}
