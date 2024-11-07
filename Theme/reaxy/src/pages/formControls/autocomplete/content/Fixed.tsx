import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Chip } from "@mui/material";
import { MuiCard } from '@config/components'
import { top100Films } from "@config/data";

export function Fixed() {
  // ** const
  const fixedOptions = [top100Films[6]];

  // ** useState
  const [value, setValue] = React.useState([...fixedOptions, top100Films[13]]);
  
  return (
    <MuiCard title="Fixed autocomplete">
      <Autocomplete
        multiple
        id="fixed-tags-demo"
        value={value}
        onChange={(_event, newValue) => {
          setValue([
            ...fixedOptions,
            ...newValue.filter((option) => fixedOptions.indexOf(option) === -1),
          ]);
        }}
        options={top100Films}
        getOptionLabel={(option) => option.label}
        renderTags={(tagValue, getTagProps) =>
          tagValue.map((option, index) => (
            <Chip
              label={option.label}
              {...getTagProps({ index })}
              disabled={fixedOptions.indexOf(option) !== -1}
            />
          ))
        }
        fullWidth
        renderInput={(params) => (
          <TextField {...params} label="Fixed tag" placeholder="Favorites" />
        )}
      />
    </MuiCard>
  );
}
