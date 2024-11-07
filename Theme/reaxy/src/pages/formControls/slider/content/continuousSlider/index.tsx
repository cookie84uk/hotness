import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeUp from "@mui/icons-material/VolumeUp";
import { MuiCard } from "@config/components";

export function ContinuousSlider() {
  // ** useState
  const [value, setValue] = React.useState<number>(30);

  // ** handle method
  const handleChange = (_event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  return (
    <MuiCard title="Continuous Slider">
      <Box sx={{ maxWidth: "100%" }}>
        <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
          <VolumeDown />
          <Slider aria-label="Volume" value={value} onChange={handleChange} />
          <VolumeUp />
        </Stack>
        <Slider disabled defaultValue={30} aria-label="Disabled slider" />
      </Box>
    </MuiCard>
  );
}
