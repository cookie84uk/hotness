import { Box, Radio, Typography } from "@mui/material";
import { styles } from "../../Content.styles";
import {
  useAppDispatch,
  useAppMediaQuery,
  useAppSelector,
} from "@config/hooks";
import React, { useEffect } from "react";
import { handleVertical, setThemeOptions } from "@config/redux";

export function Content() {
  // ** redux
  const { vertical } = useAppSelector((state) => state.palette);

  // ** dispatch
  const dispatch = useAppDispatch();

  // ** hook
  const { isLgDown } = useAppMediaQuery();

  // ** useEffect
  useEffect(() => {
    if (isLgDown) {
      dispatch(handleVertical(true));
    }
  }, [isLgDown]);

  const handleVerticalB = () => {
    dispatch(handleVertical(false));
    dispatch(setThemeOptions({ onHover: false }));
  };

  return (
    <>
      <Box sx={styles.wrapperMenu}>
        <Radio
          disabled={isLgDown}
          checked={vertical === true}
          onClick={() => dispatch(handleVertical(true))}
          value={vertical}
        />
        <Typography variant={"h4"}>vertical</Typography>
      </Box>
      <Box sx={styles.wrapperMenu}>
        <Radio
          disabled={isLgDown}
          checked={vertical === false}
          onClick={() => handleVerticalB()}
          value={!vertical}
        />
        <Typography variant={"h4"}>horizontal</Typography>
      </Box>
    </>
  );
}
