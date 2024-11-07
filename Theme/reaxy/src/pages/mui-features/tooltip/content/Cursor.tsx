import * as React from "react";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import { MuiCard } from "@config/components";

export function Cursor() {
  return (
    <MuiCard title="Cursor tooltips">
      <Tooltip title="You don't have permission to do this" followCursor>
        <Box sx={{ bgcolor: "text.disabled", color: "background.paper", p: 2 }}>
          Disabled Action
        </Box>
      </Tooltip>
    </MuiCard>
  );
}
