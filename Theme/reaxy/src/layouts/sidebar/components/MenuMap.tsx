import React from "react";
import { useState } from "react";
import { ItemMap } from "./ItemMap";
import { Box } from "@mui/material";
import { useAppSelector, useThemeConstants } from "@config/hooks";
import { INavDataProps } from "@config/models";

export function MenuMap() {
  const { itemData } = useAppSelector((state) => state.slices.dynamicMenu);

  const [show, setShow] = useState<string | null>(null);

  const { COMPACT, MINI, DEFAULT } = useThemeConstants();

  const size = COMPACT ? 50 : DEFAULT || MINI ? 24 : "";

  return (
    <Box>
      {itemData && (
        <>
          {itemData
            .filter((i: { parentId: string | null }) => i.parentId === null)
            .map((item: INavDataProps) => (
              <ItemMap
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
