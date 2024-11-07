import { Box, Checkbox } from "@mui/material";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BatteryCharging20Icon from "@mui/icons-material/BatteryCharging20";
import BatteryChargingFullIcon from "@mui/icons-material/BatteryChargingFull";
import React from "react";
import { MuiCard } from "@config/components";
// ** label
const label = { inputProps: { "aria-label": "Checkbox demo" } };

export function Icon() {
  return (
    <MuiCard title={"Icon checkboxes"}>
      <Box>
        <Checkbox
          {...label}
          checked
          icon={<FavoriteBorder />}
          checkedIcon={<Favorite />}
        />
        <Checkbox
          {...label}
          icon={<BookmarkBorderIcon />}
          checkedIcon={<BookmarkIcon />}
        />
        <Checkbox
          {...label}
          icon={<BatteryCharging20Icon />}
          checkedIcon={<BatteryChargingFullIcon />}
        />
      </Box>
    </MuiCard>
  );
}
