import React, { useState } from "react";
import {
  Box,
  Button,
  CardContent,
  Fab,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { styles } from "@pages/pages/styles/Pages.styles";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { useAppSelector } from "@config/hooks";
import { INavDataProps } from "@config/models";
import { AnimatePresence } from "@config/components";

export default function PageNotFound() {
  // ** redux
  const { itemData } = useAppSelector((state) => state.slices.dynamicMenu);

  // ** navigate
  const navigate = useNavigate();

  // ** styles
  const theme = useTheme();
  const style = styles(theme);

  // ** useState
  const [searchKeyword, setSearchKeyword] = useState("");
  const [error, setError] = useState("");

  // ** methods
  const handleSearch = () => {
    if (searchKeyword.trim() === "") {
      setError("Please enter a search keyword.");
    } else {
      setError("");

      const matchingItem = itemData.find(
        (item: INavDataProps) =>
          item.path.toLowerCase() === `/${searchKeyword.toLowerCase()}`
      );

      if (matchingItem) {
        navigate(`/${searchKeyword}`);
      } else {
        navigate(`/search?keyword=${searchKeyword}`);
      }
    }
  };

  return (
    <Box sx={style.container}>
      <AnimatePresence direction={"center"} duration={1}>
        <Box sx={style.wrapper}>
          <Box sx={style.header}>
            <Fab color="error" aria-label="add">
              <ErrorOutlineIcon />
            </Fab>
            <Typography color={theme.palette.common.white} variant="h1">
              404
            </Typography>
            <CardContent sx={style.cardContent}>
              <Box sx={style.form}>
                <Typography variant="h4" fontWeight={600} >
                  Oops, it seems that this page does not exist.
                </Typography>
                <Typography variant="h5" >
                  If you are sure it should, search for it.
                </Typography>
                <TextField
                  fullWidth
                  variant="filled"
                  type="search"
                  required
                  id="search"
                  name="search"
                  placeholder="Enter search keyword..."
                  value={searchKeyword}
                  onChange={(e) => setSearchKeyword(e.target.value)}
                  error={!!error}
                  helperText={error}
                  autoFocus
                />
              </Box>
              <Button
                onClick={handleSearch}
                variant="contained"
                sx={style.button}
              >
                Submit
              </Button>
            </CardContent>
          </Box>
        </Box>
      </AnimatePresence>
    </Box>
  );
}
