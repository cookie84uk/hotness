import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import Slide, { SlideProps } from "@mui/material/Slide";
import { Box, Button, useTheme } from "@mui/material";
import { MuiCard } from "@config/components";
import { styles } from "./styles";

// ** type model
type TransitionProps = Omit<SlideProps, "direction">;

// ** functions
function TransitionLeft(props: TransitionProps) {
  return <Slide {...props} direction="left" />;
}

function TransitionUp(props: TransitionProps) {
  return <Slide {...props} direction="up" />;
}

function TransitionRight(props: TransitionProps) {
  return <Slide {...props} direction="right" />;
}

function TransitionDown(props: TransitionProps) {
  return <Slide {...props} direction="down" />;
}

export function SlideDirection() {
  // ** useState
  const [open, setOpen] = React.useState(false);
  const [transition, setTransition] = React.useState<
    React.ComponentType<TransitionProps> | undefined
  >(undefined);

  // ** handle methods
  const handleClick =
    (Transition: React.ComponentType<TransitionProps>) => () => {
      setTransition(() => Transition);
      setOpen(true);
    };

  const handleClose = () => {
    setOpen(false);
  };

  // ** styles
  const theme = useTheme();
  const style = styles(theme);

  return (
    <MuiCard title="Positioned slide snackbar">
      <Box sx={style.wrap}>
        <Button
          fullWidth
          variant="outlined"
          onClick={handleClick(TransitionLeft)}
        >
          Right
        </Button>
        <Button
          fullWidth
          variant="outlined"
          onClick={handleClick(TransitionUp)}
        >
          Up
        </Button>
        <Button
          fullWidth
          variant="outlined"
          onClick={handleClick(TransitionRight)}
        >
          Left
        </Button>
        <Button
          fullWidth
          variant="outlined"
          onClick={handleClick(TransitionDown)}
        >
          Down
        </Button>
        <Snackbar
          open={open}
          onClose={handleClose}
          TransitionComponent={transition}
          message="I love snacks"
          key={transition ? transition.name : ""}
        />
      </Box>
    </MuiCard>
  );
}
