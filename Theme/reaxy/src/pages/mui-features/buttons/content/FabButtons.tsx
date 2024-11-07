import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NavigationIcon from "@mui/icons-material/Navigation";
import DoNotTouchOutlinedIcon from "@mui/icons-material/DoNotTouchOutlined";
import { styles } from "./All.styles";
import { Stack, useTheme } from "@mui/material";
import { MuiCard } from "@config/components";
import React from "react";

export function FabButtons() {
  // ** styles
  const theme = useTheme();
  const style = styles(theme);

  return (
    <MuiCard title="Fab button">
      <Stack direction={"row"} sx={style.fabS}>
        <Fab color="primary" sx={style.secondary} aria-label="like">
          <FavoriteIcon />
        </Fab>

        <Fab color="secondary" aria-label="edit">
          <EditIcon />
        </Fab>
        <Fab variant="extended">
          <NavigationIcon sx={{ mr: 1 }} />
          Navigate
        </Fab>
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
        <Fab disabled aria-label="like">
          <DoNotTouchOutlinedIcon />
        </Fab>
      </Stack>
    </MuiCard>
  );
}
