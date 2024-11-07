import * as React from "react";
import { Checkbox, Box, FormControlLabel } from "@mui/material";
import { MuiCard } from "@config/components";
import { styles } from "./all.styles";
export function Indeterminate() {
  // ** useState
  const [checked, setChecked] = React.useState([true, false]);

  // ** handle methods
  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, event.target.checked]);
  };

  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, checked[1]]);
  };

  const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([checked[0], event.target.checked]);
  };

  // ** component children
  const children = (
    <Box sx={styles.indeterminate}>
      <FormControlLabel
        label={"Child 1"}
        control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
      />
      <FormControlLabel
        label={"Child 2"}
        control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
      />
    </Box>
  );

  return (
    <MuiCard title={"Indeterminate checkboxes"}>
      <Box>
        <FormControlLabel
          label={"Parent"}
          control={
            <Checkbox
              checked={checked[0] && checked[1]}
              indeterminate={checked[0] !== checked[1]}
              onChange={handleChange1}
            />
          }
        />
        {children}
      </Box>
    </MuiCard>
  );
}
