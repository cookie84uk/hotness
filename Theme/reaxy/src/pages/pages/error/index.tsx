import {
  Box,
  Button,
  CardContent,
  Fab,
  Typography,
  useTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { styles } from "@pages/pages/styles/Pages.styles";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import React from "react";
import { AnimatePresence } from "@config/components";

export default function Error() {
  // navigate
  const navigate = useNavigate();

  // ** style
  const theme = useTheme();
  const style = styles(theme);

  return (
    <Box sx={style.container}>
      <AnimatePresence direction={"center"} duration={1}>
        <Box sx={style.wrapper}>
          <Box sx={style.header}>
            <Fab color="secondary" aria-label="add">
              <WarningAmberIcon />
            </Fab>
            <Typography
              color={theme.palette.common.white}
              variant="h1"
              fontWeight={700}
              fontSize={theme.typography.pxToRem(48)}
            >
              500
            </Typography>
            <CardContent sx={style.cardContent}>
              <Box sx={style.form}>
                <Typography variant="h4" fontWeight={600} >INTERNAL SERVER ERROR</Typography>
                <Typography variant="h6" >
                  Opps, something went wrong.
                </Typography>
                <Typography variant="h6" >You can go to home page.</Typography>
              </Box>
              <Button
                onClick={() => {
                  navigate("/");
                }}
                variant="contained"
                sx={style.button}
              >
                Go Home
              </Button>
            </CardContent>
          </Box>
        </Box>
      </AnimatePresence>
    </Box>
  );
}
