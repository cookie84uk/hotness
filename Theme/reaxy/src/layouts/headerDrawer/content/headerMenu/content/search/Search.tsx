import React from "react";
import { useRef, useState } from "react";
import { Box, IconButton, TextField, useTheme } from "@mui/material";
import { styles } from "./Search.styles";
import { SearchIcon } from "@config/assets/icons";
import { useOnClickOutside } from "@config/hooks";

export function Search() {
  // ** useState
  const [show, hide] = useState<boolean>();

  const [value, setValue] = useState<string>("");

  // ** method
  const toggle = () => hide((prev: any) => !prev);

  // ** style
  const theme = useTheme();
  const style = styles(theme, { show });

  // @ outside
  // ** handler methods
  const handler = () => {
    hide(false);
    setValue("");
  };

  // ** ref
  const searchRef = useRef<HTMLElement | null>(null);

  useOnClickOutside({ ref: searchRef, handler });

  return (
    <Box sx={style.container} ref={searchRef}>
      <TextField
        value={value}
        onChange={(e) => setValue(e.target.value)}
        sx={style.textField}
        placeholder="search..."
      />
      <IconButton onClick={() => toggle()}>
        <SearchIcon sx={style.icon} />
      </IconButton>
    </Box>
  );
}
