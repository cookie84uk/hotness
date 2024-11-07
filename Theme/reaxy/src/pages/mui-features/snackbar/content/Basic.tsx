import * as React from "react";
import { Button, Snackbar, IconButton, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { MuiCard } from "@config/components";

export function Basic() {
  // ** useState
  const [open, setOpen] = React.useState(false);

  // ** handle methods
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (
    _event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button  color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <MuiCard title="Basic snackbar">
      <Box>
        <Button fullWidth variant="outlined" onClick={handleClick}>
          Open simple snackbar
        </Button>
        <Snackbar
          sx={{
            ".MuiPaper-root": {
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            },
          }}
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message="Note archived"
          action={action}
        />
      </Box>
    </MuiCard>
  );
}
