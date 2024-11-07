import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import { Box } from "@mui/material";
import { MuiCard } from "@config/components";

// ** mui styled
const CustomWidthTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: 500,
  },
});

// ** mui styled
const NoMaxWidthTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: "none",
  },
});

const longText = `
Aliquam eget finibus ante, non facilisis lectus. Sed vitae dignissim est, vel aliquam tellus.
Praesent non nunc mollis, fermentum neque at, semper arcu.
Nullam eget est sed sem iaculis gravida eget vitae justo.
`;

export function Variable() {
  return (
    <MuiCard sx={{ p: 2 }} title="Variable tooltip">
      <Box>
        <Tooltip title={longText}>
          <Button sx={{ m: 1 }}>Default Width [300px]</Button>
        </Tooltip>
        <CustomWidthTooltip title={longText}>
          <Button sx={{ m: 1 }}>Custom Width [500px]</Button>
        </CustomWidthTooltip>
        <NoMaxWidthTooltip title={longText}>
          <Button sx={{ m: 1 }}>No wrapping</Button>
        </NoMaxWidthTooltip>
      </Box>
    </MuiCard>
  );
}
