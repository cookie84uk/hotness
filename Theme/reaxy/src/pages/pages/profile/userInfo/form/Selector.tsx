import React from "react";
import { MenuItem, TextField } from "@mui/material";
import { Controller } from "react-hook-form";

interface Option {
  value: string;
  label: string;
}

interface SelectorProps {
  name: string;
  options: Option[];
  control: any;
  defaultValue: string;
  label: string;
  error?: boolean;
  required?: boolean;
  helperText?: string;
}

const Selector: React.FC<SelectorProps> = ({
  name,
  options,
  control,
  defaultValue,
  label,
  error = false,
  required = false,
  helperText = "",
}) => {
  return (
    <div>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field }) => (
          <TextField
            {...field}
            label={label}
            fullWidth
            select
            required={required}
            error={!!error}
            helperText={helperText}
          >
            <MenuItem disabled value="">
              <em>none</em>
            </MenuItem>
            {options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        )}
      />
    </div>
  );
};

export default Selector;
