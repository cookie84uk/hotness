import { Button, Stack, useTheme } from "@mui/material";
import { styles } from "./All.styles";

import {
  AddShoppingCartIcon,
  CheckCircleOutlineIcon,
  DoNotTouchOutlinedIcon,
  ErrorOutlineIcon,
  FavoriteBorderOutlinedIcon,
  SendIcon,
  WarningAmberIcon,
} from "@config/assets/icons";
import { MuiCard } from "@config/components";
import React from "react";

export function ButtonWithIcons() {
  // ** styles
  const theme = useTheme();
  const style = styles(theme);

  return (
    <MuiCard title="Buttons with icons and label">
      <Stack direction="row" sx={style.container}>
        <Button sx={style.basic} startIcon={<SendIcon />}>
          Basic
        </Button>
        <Button sx={style.primary} endIcon={<FavoriteBorderOutlinedIcon />}>
          Primary
        </Button>
        <Button sx={style.secondary} startIcon={<AddShoppingCartIcon />}>
          Secondary
        </Button>
        <Button sx={style.warning} endIcon={<WarningAmberIcon />}>
          Warn
        </Button>
        <Button sx={style.success} startIcon={<CheckCircleOutlineIcon />}>
          Success
        </Button>
        <Button sx={style.error} endIcon={<ErrorOutlineIcon />}>
          Error
        </Button>
        <Button
          sx={style.disabled}
          disabled
          startIcon={<DoNotTouchOutlinedIcon />}
        >
          Disabled
        </Button>
      </Stack>
    </MuiCard>
  );
}
