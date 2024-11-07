import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { MuiCard } from "@config/components";
import { Box } from "@mui/material";
import { useAppMediaQuery } from "@config/hooks";

export function Responsive() {
  // ** useState
  const [open, setOpen] = React.useState(false);

  // ** hook
  const { isMdDown } = useAppMediaQuery();

  // ** handle method
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <MuiCard title="Responsive dialog">
      <Box>
        <Button fullWidth variant="outlined" onClick={handleClickOpen}>
          Open responsive dialog
        </Button>
        <Dialog
          fullScreen={isMdDown}
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">
            {"Use Google's location service?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Let Google help apps determine location. This means sending
              anonymous location data to Google, even when no apps are running.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose}>
              Disagree
            </Button>
            <Button onClick={handleClose} autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </MuiCard>
  );
}
