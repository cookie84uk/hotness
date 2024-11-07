import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import { top100Films } from "@config/data";
import { Checkbox } from '@mui/material'
import { MuiCard } from '@config/components'
import { CheckBoxIcon, CheckBoxOutlineBlankIcon } from '@config/assets/icons'
import React from 'react'

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />
const checkedIcon = <CheckBoxIcon fontSize="small" />

export function Checkboxes() {
  return (
    <MuiCard title="Checkboxes autocomplete">
      <Autocomplete
        multiple
        id="checkboxes-tags-demo"
        options={top100Films}
        disableCloseOnSelect
        getOptionLabel={(option) => option.label}
        renderOption={(props, option, { selected }) => (
          <li {...props}>
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              style={{ marginRight: 8 }}
              checked={selected}
            />
            {option.label}
          </li>
        )}
        fullWidth
        renderInput={(params) => (
          <TextField {...params} label="Checkboxes" placeholder="Favorites" />
        )}
      />
    </MuiCard>
  )
}
