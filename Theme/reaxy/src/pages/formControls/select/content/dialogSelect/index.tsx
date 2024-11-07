import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { MuiCard } from "@config/components";
import { styles } from "../All.styles";

export function DialogSelect() {
  // ** useState
  const [open, setOpen] = React.useState(false);
  const [age, setAge] = React.useState<number | string>("");

  // ** handle methods
  const handleChange = (event: SelectChangeEvent<typeof age>) => {
    setAge(Number(event.target.value) || "");
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (
    _event: React.SyntheticEvent<unknown>,
    reason?: string
  ) => {
    if (reason !== "backdropClick") {
      setOpen(false);
    }
  };

  return (
    <MuiCard title="Dialog Select">
      <Box>
        <Button variant="contained" onClick={handleClickOpen}>
          Open select dialog
        </Button>
        <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
          <DialogTitle>Fill the form</DialogTitle>
          <DialogContent>
            <Box component="form" sx={styles.dialog}>
              <FormControl fullWidth>
                <InputLabel htmlFor="demo-dialog-native">Age</InputLabel>
                <Select
                  fullWidth
                  native
                  value={age}
                  onChange={handleChange}
                  input={<OutlinedInput label="Age" id="demo-dialog-native" />}
                >
                  <option aria-label="None" value="" />
                  <option value={10}>Ten</option>
                  <option value={20}>Twenty</option>
                  <option value={30}>Thirty</option>
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel id="demo-dialog-select-label">Age</InputLabel>
                <Select
                  labelId="demo-dialog-select-label"
                  id="demo-dialog-select"
                  value={age}
                  onChange={handleChange}
                  input={<OutlinedInput label="Age" />}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose}>Ok</Button>
          </DialogActions>
        </Dialog>
      </Box>
    </MuiCard>
  );
}
