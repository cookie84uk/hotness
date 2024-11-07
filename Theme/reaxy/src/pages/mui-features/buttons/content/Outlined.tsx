import { Button, Stack, useTheme } from "@mui/material";
import { styles } from "./All.styles";
import { MuiCard } from "@config/components";
import React from "react";

export function Outlined() {
  // ** styles
  const theme = useTheme();
  const style = styles(theme);

  return (
    <MuiCard title="Outlined buttons">
      <Stack direction={"row"} sx={style.container}>
        <Button sx={style.basic} variant="outlined">
          Basic
        </Button>
        <Button sx={style.primary} variant="outlined">
          Primary
        </Button>
        <Button sx={style.secondary} color="secondary" variant="outlined">
          Secondary
        </Button>
        <Button sx={style.warning} color="warning" variant="outlined">
          Warn
        </Button>
        <Button sx={style.success} color="success" variant="outlined">
          Success
        </Button>
        <Button sx={style.info} color="success" variant="outlined">
          Info
        </Button>
        <Button sx={style.error} color="error" variant="outlined">
          Error
        </Button>
        <Button sx={style.disabled} variant="outlined" disabled>
          Disabled
        </Button>
      </Stack>
    </MuiCard>
  );
}
