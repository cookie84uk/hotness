import React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { styles } from "./All.styles";
import { MuiCard } from "@config/components";
import {
  DoneIcon,
  ErrorIcon,
  FoundationIcon,
  SixtyFpsSelectIcon,
  WarningIcon,
} from "@config/assets/icons";
import { useTheme } from "@mui/material";

export function Custom() {
  // ** handle methods
  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  // ** styles
  const theme = useTheme();
  const style = styles(theme);

  return (
    <MuiCard title="Custom chip">
      <Stack direction="column" spacing={1} sx={style.container}>
        <Chip
          sx={style.basic}
          label="Clickable Basic"
          onClick={handleClick}
          onDelete={handleDelete}
          deleteIcon={<FoundationIcon />}
          variant="filled"
        />
        <Chip
          sx={style.primary}
          label="Clickable primary"
          onClick={handleClick}
          onDelete={handleDelete}
          deleteIcon={<DoneIcon />}
          variant="filled"
        />
        <Chip
          sx={style.secondary}
          label="Clickable secondary"
          onClick={handleClick}
          onDelete={handleDelete}
          deleteIcon={<SixtyFpsSelectIcon />}
          variant="filled"
        />
        <Chip
          sx={style.error}
          label="Clickable error"
          onClick={handleClick}
          onDelete={handleDelete}
          deleteIcon={<ErrorIcon />}
          variant="filled"
        />
        <Chip
          sx={style.success}
          label="Clickable success"
          onClick={handleClick}
          onDelete={handleDelete}
          deleteIcon={<DoneIcon />}
          variant="filled"
        />
        <Chip
          sx={style.info}
          label="Clickable info"
          onClick={handleClick}
          onDelete={handleDelete}
          deleteIcon={<WarningIcon />}
          variant="filled"
        />
        <Chip
          sx={style.warning}
          label="Clickable warning"
          onClick={handleClick}
          onDelete={handleDelete}
          deleteIcon={<WarningIcon />}
          variant="filled"
        />
      </Stack>
    </MuiCard>
  );
}
