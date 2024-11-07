import { Box } from "@mui/material";
import { Content, Footer, Header, Skins } from "./content";
import { styles } from "./Landing.styles";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLanding } from "@config/hooks";
import { handleReset } from "@config/redux";
import React from "react";

export default function Landing() {
  // ** dispatch
  const dispatch = useDispatch();

  // ** All landing methods are located in the useLanding hook
  const { setPrimaryMode } = useLanding();

  // ** handleReset => Returns all states to their initial value
  useEffect(() => {
    dispatch(handleReset());
    setPrimaryMode("BLUE_LIGHT");
  }, [dispatch]);

  // ** styles
  const style = styles();

  return (
    <Box sx={style.container}>
      <Header />
      <Content />
      <Skins />
      <Footer />
    </Box>
  );
}
