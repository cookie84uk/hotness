import { Button, Stack, useTheme } from "@mui/material";
import { styles } from "./All.styles";
import { MuiCard } from "@config/components";
import React from "react";

export function Contained() {
  // ** styles
  const theme = useTheme();
  const style = styles(theme);

  return (
    <MuiCard title="Contained button">
      <Stack direction="row" sx={style.container}>
        <Button sx={style.basic} variant="contained">
          Basic
        </Button>
        <Button sx={style.primary} variant="contained">
          Primary
        </Button>
        <Button sx={style.secondary} variant="contained">
          Secondary
        </Button>
        <Button sx={style.warning} variant="contained">
          Warn
        </Button>
        <Button sx={style.success} variant="contained">
          Success
        </Button>
        <Button sx={style.info} variant="contained">
          Info
        </Button>
        <Button sx={style.error} variant="contained">
          Error
        </Button>
        <Button sx={style.disabled} disabled variant="contained">
          Disabled
        </Button>
      </Stack>
    </MuiCard>
  );
}
