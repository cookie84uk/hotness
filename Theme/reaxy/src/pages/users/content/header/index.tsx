import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ViewListIcon from "@mui/icons-material/ViewList";
import { Box, TextField, useTheme } from "@mui/material";
import { styles } from "./Header.styles";
import {
  setAlignment,
  setAlignments,
  setEdit,
  setIsOpen,
  setSearchUser,
} from "@config/redux/slices/userSlice";
import { useAppDispatch, useAppSelector } from "@config/hooks";
import React from "react";

export function Header() {
  // ** redux
  const { alignment, alignments, searchUser } = useAppSelector(
    (state) => state.users
  );

  // ** useDispatch
  const dispatch = useAppDispatch();

  // ** handle methods
  const handleClickOpen = () => {
    dispatch(setIsOpen(true));
    dispatch(setEdit(false));
  };

  let right = alignment === "right";

  const handleAlignment = (
    _event: React.SyntheticEvent,
    newAlignment: string
  ) => {
    if (newAlignment !== null) {
      dispatch(setAlignment(newAlignment));
    }
  };

  const handleAlignments = (
    _event: React.SyntheticEvent,
    newAlignment: string
  ) => {
    if (newAlignment !== null) {
      dispatch(setAlignments(newAlignment));
    }
  };

  // ** styles
  const theme = useTheme();
  const style = styles(theme, { right });

  return (
    <Box sx={style.container}>
      <BottomNavigation
        showLabels
        sx={style.navContainer}
        value={alignment}
        onChange={handleAlignment}
      >
        <BottomNavigationAction
          value="left"
          icon={<PersonAddIcon />}
          onClick={handleClickOpen}
        />
        <BottomNavigationAction value="right" icon={<SearchSharpIcon />} />
      </BottomNavigation>

      {right && (
        <Box sx={style.right}>
          <TextField
            value={searchUser}
            onChange={(e) => dispatch(setSearchUser(e.target.value))}
            fullWidth
            type="search"
            variant="standard"
            autoComplete="off"
            label={" Search user by name....."}
            InputLabelProps={{
              sx: { ...style.labelProps },
            }}
          />
        </Box>
      )}

      <BottomNavigation
        sx={style.navContainer}
        value={alignments}
        onChange={handleAlignments}
      >
        <BottomNavigationAction value="grid" icon={<ViewModuleIcon />} />
        <BottomNavigationAction value="list" icon={<ViewListIcon />} />
      </BottomNavigation>
    </Box>
  );
}
