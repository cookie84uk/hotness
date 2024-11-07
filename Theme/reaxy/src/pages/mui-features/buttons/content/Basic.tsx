import React from "react";
import { styles } from "./All.styles";
import { MuiCard } from "@config/components";
import { Button, Stack, useTheme } from "@mui/material";

export function Basic() {
  // ** styles
  const theme = useTheme();
  const style = styles(theme);

  return (
    <MuiCard title="Basic buttons">
      <Stack direction="row" sx={style.container}>
        <Button sx={style.basic} variant="text">
          Basic
        </Button>
        <Button sx={style.primary} variant="text">
          Primary
        </Button>
        <Button sx={style.secondary} variant="text">
          Secondary
        </Button>
        <Button sx={style.warning} variant="text">
          Warn
        </Button>
        <Button sx={style.success} variant="text">
          Success
        </Button>
        <Button sx={style.info} variant="text">
          info
        </Button>
        <Button sx={style.error} variant="text">
          Error
        </Button>
        <Button sx={style.disabled} variant="text" disabled>
          Disabled
        </Button>
      </Stack>
    </MuiCard>
  );
}
