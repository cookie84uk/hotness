import * as React from "react";
import { Stack } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { MuiCard } from '@config/components'

export function Determinate() {
  // ** useState
  const [progress, setProgress] = React.useState(0);

  // ** useEffect
  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <MuiCard title="Determinate progress">
      <Stack spacing={2} direction="row" padding="16px">
        <CircularProgress variant="determinate" value={25} />
        <CircularProgress variant="determinate" value={50} />
        <CircularProgress variant="determinate" value={75} />
        <CircularProgress variant="determinate" value={100} />
        <CircularProgress variant="determinate" value={progress} />
      </Stack>
    </MuiCard>
  );
}
