export const modeCodeString = `
import React from "react";
import { useAppDispatch } from "@config/hooks";
import { Stack } from "@mui/material";
import { setPrimaryMode } from "@config/redux";
import { myPrimaryMode } from "@config/constant";
import SkinApp from "@config/assets/images/rightSidebar/SkinApp";
import { styles } from "./Content.styles";

export function Content() {
  // ** dispatch
  const dispatch = useAppDispatch();

  return (
    <Stack sx={styles.container}>
      {Object.values(myPrimaryMode).map((mode) => (
        <Stack spacing={1} key={mode.value}>
          <SkinApp
            onClick={() => dispatch(setPrimaryMode(mode.value))}
            width={"120px"}
            height={"100px"}
            color1={mode.primary}
            color2={mode.default}
          />
        </Stack>
      ))}
    </Stack>
  );
}
`;
