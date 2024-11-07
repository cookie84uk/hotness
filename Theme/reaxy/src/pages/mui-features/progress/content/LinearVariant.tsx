import {
  Box,
  LinearProgress,
  LinearProgressProps,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { MuiCard } from "@config/components";

// ** function
function LinearProgressWithLabel(
  props: LinearProgressProps & { value: number }
) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

export function LinearVariant() {
  // ** useState
  const [progress, setProgress] = React.useState(0);
  const [progressBuffer, setProgressBuffer] = React.useState(0);
  const [buffer, setBuffer] = React.useState(10);
  const [progressLabel, setProgressLabel] = React.useState(10);

  // ** useRef
  const progressRef = React.useRef(() => {});

  // ** useEffect
  React.useEffect(() => {
    const progressTimer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    const bufferTimer = setInterval(() => {
      progressRef.current();
    }, 500);

    const labelTimer = setInterval(() => {
      setProgressLabel((prevProgress) =>
        prevProgress >= 100 ? 10 : prevProgress + 10
      );
    }, 800);

    return () => {
      clearInterval(progressTimer);
      clearInterval(bufferTimer);
      clearInterval(labelTimer);
    };
  }, []);

  React.useEffect(() => {
    progressRef.current = () => {
      if (progressBuffer > 100) {
        setProgressBuffer(0);
        setBuffer(10);
      } else {
        const diff = Math.random() * 10;
        const diff2 = Math.random() * 10;
        setProgressBuffer(progressBuffer + diff);
        setBuffer(progressBuffer + diff + diff2);
      }
    };
  });

  return (
    <MuiCard title="Linear & color">
      <Stack spacing={2}>
        <Box>
          <Typography variant="h6">Determinate</Typography>
          <LinearProgress
            variant="determinate"
            color="error"
            value={progress}
          />
        </Box>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h6">Buffer</Typography>
          <LinearProgress
            variant="buffer"
            value={progress}
            color="primary"
            valueBuffer={buffer}
          />
        </Box>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h6">Buffer</Typography>
          <LinearProgressWithLabel color="secondary" value={progressLabel} />
        </Box>
      </Stack>
    </MuiCard>
  );
}
