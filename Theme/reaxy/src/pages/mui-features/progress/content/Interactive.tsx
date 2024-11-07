import { Box, Button, CircularProgress } from "@mui/material";
import React from "react";
import { green } from "@mui/material/colors";
import Fab from "@mui/material/Fab";
import CheckIcon from "@mui/icons-material/Check";
import SaveIcon from "@mui/icons-material/Save";
import { MuiCard } from '@config/components'

export function Interactive() {
  // ** useState
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  // ** useRef
  const timer = React.useRef<number>();

  // ** useEffect
  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  // ** handle method
  const handleButtonClick = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = window.setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 2000);
    }
  };
  // ** mui styled
  const buttonSx = {
    ...(success && {
      bgcolor: green[500],
      "&:hover": {
        bgcolor: green[700],
      },
    }),
  };

  return (
    <MuiCard title="Interactive progress">
      <Box>
        <Box sx={{ m: 1, position: "relative" }}>
          <Fab
            aria-label="save"
            color="primary"
            sx={buttonSx}
            onClick={handleButtonClick}
          >
            {success ? <CheckIcon /> : <SaveIcon />}
          </Fab>
          {loading && (
            <CircularProgress
              size={68}
              color="primary"
              sx={{
                position: "absolute",
                top: -6,
                left: -6,
                zIndex: 1,
              }}
            />
          )}
        </Box>
        <Box sx={{ m: 1, position: "relative" }}>
          <Button
            variant="contained"
            sx={buttonSx}
            disabled={loading}
            onClick={handleButtonClick}
          >
            Accept terms
          </Button>
          {loading && (
            <CircularProgress
              size={24}
              color="secondary"
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                marginTop: "-12px",
                marginLeft: "-12px",
              }}
            />
          )}
        </Box>
      </Box>
    </MuiCard>
  );
}
