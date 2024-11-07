import React from "react";
import { MuiCard } from "@config/components";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { styles } from "../All.styles";

export function MultilineTextFields() {
  return (
    <MuiCard title="Multiline Text Fields">
      <Box component="form" sx={styles.content} noValidate autoComplete="off">
      <Box>
          <TextField
            label="Multiline"
            multiline
            fullWidth
            maxRows={4}
            variant="filled"
          />
          <TextField
            label="Multiline Placeholder"
            placeholder="Placeholder"
            fullWidth
            multiline
            variant="filled"
          />
          <TextField
            label="Multiline"
            multiline
            fullWidth
            rows={4}
            defaultValue="Default Value"
            variant="filled"
          />
        </Box>
        <Box>
          <TextField
            label="Multiline"
            multiline
            maxRows={4}
            fullWidth
          />
          <TextField
            label="Multiline Placeholder"
            placeholder="Placeholder"
            fullWidth
            multiline
          />
          <TextField
            label="Multiline"
            fullWidth
            multiline
            rows={4}
            defaultValue="Default Value"
          />
        </Box>
    
        <Box>
          <TextField
            label="Multiline"
            multiline
            fullWidth
            maxRows={4}
            variant="standard"
          />
          <TextField
            label="Multiline Placeholder"
            placeholder="Placeholder"
            fullWidth
            multiline
            variant="standard"
          />
          {/* <TextField
            id="standard-multiline-static"
            label="Multiline"
            multiline
            fullWidth
            rows={4}
            defaultValue="Default Value"
            variant="standard"
          /> */}
        </Box>
      </Box>
    </MuiCard>
  );
}
