import React from "react";
import { useState } from "react";
import { Box } from "@mui/material";
import { useAppSelector, useThemeConstants } from "@config/hooks";
import { INavDataProps } from "@config/models";
import Nav from "./Nav";

export default function App() {
  // ** redux
  const { itemData } = useAppSelector((state) => state.slices.dynamicMenu);

  // ** useState
  const [show, setShow] = useState<string | null>(null);

  // ** hooks
  const { COMPACT, MINI, DEFAULT } = useThemeConstants();

  // ** size data 
  const size = COMPACT ? 32 : DEFAULT ? 24 : MINI ? 32 : "";

  return (
    <Box sx={{ display: "flex" }}>
      {itemData && (
        <>
          {itemData
            .filter((i: { parentId: string | null }) => i.parentId === null)
            .map((item: INavDataProps) => (
              <Nav
                key={item.id}
                item={item}
                size={size}
                index={0}
                show={show}
                setShow={setShow}
              />
            ))}
        </>
      )}
    </Box>
  );
}
