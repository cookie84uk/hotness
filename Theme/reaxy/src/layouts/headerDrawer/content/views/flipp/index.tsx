import React from "react";

import { Box } from "@mui/material";
import { styles } from "./FlipCard.styles";
import { Form } from "./form/Form";
import { Accept } from "./form/Accept";
import { useAppSelector } from "@config/hooks";

export default function FlipCard() {
  // ** redux
  const { isFlipped } = useAppSelector((state) => state.slices.formHeaderSlice);

  // ** styles
  const style = styles();
  return (
    <Box sx={style.container}>
      <Box
        className={`flip-card ${
          isFlipped != true ? "front-flip" : "back-flip"
        }`}
      >
        <Box className="flip-card-inner">
          <Box className="flip-card-front">
            <Form />
          </Box>
          <Box className="flip-card-back">
            <Accept />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
