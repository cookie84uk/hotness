import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import Fade from "@mui/material/Fade";
import Slide, { SlideProps } from "@mui/material/Slide";
import Grow, { GrowProps } from "@mui/material/Grow";
import { TransitionProps } from "@mui/material/transitions";
import { Box, Button, useTheme } from "@mui/material";
import { MuiCard } from "@config/components";
import { styles } from "./styles";

// ** functions
function SlideTransition(props: SlideProps) {
  return <Slide {...props} direction="up" />;
}

function GrowTransition(props: GrowProps) {
  return <Grow {...props} />;
}

export function Transition() {
  // ** useState
  const [state, setState] = React.useState<{
    open: boolean;
    Transition: React.ComponentType<
      TransitionProps & {
        children: React.ReactElement<any, any>;
      }
    >;
  }>({
    open: false,
    Transition: Fade,
  });

  // ** handle method
  const handleClick =
    (
      Transition: React.ComponentType<
        TransitionProps & {
          children: React.ReactElement<any, any>;
        }
      >
    ) =>
    () => {
      setState({
        open: true,
        Transition,
      });
    };

  // ** handle method
  const handleClose = () => {
    setState({
      ...state,
      open: false,
    });
  };

  // ** styles
  const theme = useTheme();
  const style = styles(theme);

  return (
    <MuiCard title="Transition snackbar">
      <Box sx={style.wrap}>
        <Button
          fullWidth
          variant="outlined"
          onClick={handleClick(GrowTransition)}
        >
          Grow Transition
        </Button>
        <Button fullWidth variant="outlined" onClick={handleClick(Fade)}>
          Fade Transition
        </Button>
        <Button
          fullWidth
          variant="outlined"
          onClick={handleClick(SlideTransition)}
        >
          Slide Transition
        </Button>
        <Snackbar
          open={state.open}
          onClose={handleClose}
          TransitionComponent={state.Transition}
          message="I love snacks"
          key={state.Transition.name}
        />
      </Box>
    </MuiCard>
  );
}
