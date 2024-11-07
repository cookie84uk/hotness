import * as React from "react";
import Snackbar, { SnackbarOrigin } from "@mui/material/Snackbar";
import { Button, Stack } from "@mui/material";
import { MuiCard } from '@config/components'

export interface State extends SnackbarOrigin {
  open: boolean;
}

export function Positioned() {
  // ** useState
  const [state, setState] = React.useState<State>({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;


  // ** handle methods
  const handleClick = (newState: SnackbarOrigin) => () => {
    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const buttons = (
    <React.Fragment>
      <Button
        variant="outlined"
        onClick={handleClick({
          vertical: "top",
          horizontal: "center",
        })}
      >
        Top-Center
      </Button>
      <Button
        variant="outlined"
        onClick={handleClick({
          vertical: "top",
          horizontal: "right",
        })}
      >
        Top-Right
      </Button>
      <Button
        variant="outlined"
        onClick={handleClick({
          vertical: "bottom",
          horizontal: "right",
        })}
      >
        Bottom-Right
      </Button>
      <Button
        variant="outlined"
        onClick={handleClick({
          vertical: "bottom",
          horizontal: "center",
        })}
      >
        Bottom-Center
      </Button>
      <Button
        variant="outlined"
        onClick={handleClick({
          vertical: "bottom",
          horizontal: "left",
        })}
      >
        Bottom-Left
      </Button>
      <Button
        variant="outlined"
        onClick={handleClick({
          vertical: "top",
          horizontal: "left",
        })}
      >
        Top-Left
      </Button>
    </React.Fragment>
  );

  return (
    <MuiCard title="Positioned snackbar">
      <Stack spacing={1}>
        {buttons}
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          onClose={handleClose}
          message="I love snacks"
          key={vertical + horizontal}
        />
      </Stack>
    </MuiCard>
  );
}
