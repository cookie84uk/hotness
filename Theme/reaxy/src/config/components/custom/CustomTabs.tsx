import React, { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import { useAppMediaQuery } from "@config/hooks";

interface CustomUserTabsProps {
  children: Array<React.ReactNode>;
  names: Array<string>;
}

export function CustomTabs({ children, names }: CustomUserTabsProps) {
  // ** useState
  const [value, setValue] = useState(0);

  // **hooks
  const { isMdDown } = useAppMediaQuery();

  // ** handle method
  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ display: "flex", p: 2, flexDirection: isMdDown ? "column" : "row" }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        orientation={isMdDown ? "horizontal" : "vertical"}
        sx={{
          borderRight: isMdDown ? 0 : 1,
          borderBottom: isMdDown ? 1 : 0,
          borderColor: "divider",
          minWidth: "120px",
          ".MuiTabs-flexContainer": {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            overflow: "hidden",
            flexWrap: "wrap",
          },
        }}
      >
        {children.map((_child, index) => (
          <Tab label={names[index]} key={index} />
        ))}
      </Tabs>
      <div style={{ flexGrow: 1 }}>{children[value]}</div>
    </Box>
  );
}
