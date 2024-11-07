import { IconButton, Stack, useTheme } from "@mui/material";
import { styles } from "./All.styles";
import SendIcon from "@mui/icons-material/Send";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DoNotTouchOutlinedIcon from "@mui/icons-material/DoNotTouchOutlined";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { MuiCard } from "@config/components";
import { PersonIcon } from "@config/assets/icons";
import React from "react";

export function MyIconButton() {
  // ** styles
  const theme = useTheme();
  const style = styles(theme);

  return (
    <MuiCard title="Icon button">
      <Stack direction={"row"} sx={style.iconBContainer}>
        <IconButton sx={style.buttonPrimary}>
          <SendIcon />
        </IconButton>
        <IconButton sx={style.primary}>
          <FavoriteIcon />
        </IconButton>
        <IconButton sx={style.secondary}>
          <AddShoppingCartIcon />
        </IconButton>
        <IconButton sx={style.warning}>
          <WarningAmberIcon />
        </IconButton>
        <IconButton sx={style.success}>
          <CheckCircleOutlineIcon />
        </IconButton>
        <IconButton sx={style.info}>
          <PersonIcon />
        </IconButton>
        <IconButton sx={style.error}>
          <ErrorOutlineIcon />
        </IconButton>
        <IconButton disabled>
          <DoNotTouchOutlinedIcon />
        </IconButton>
      </Stack>
    </MuiCard>
  );
}
