import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { MuiCard } from "@config/components";
import { styles } from "./All.styles";

export function ColorTabs() {
  // ** useState
  const [value, setValue] = React.useState("one");

  // ** handle method
  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <MuiCard title="Color tabs">
      <Box sx={styles.container}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor={"primary"}
          indicatorColor="secondary"
          aria-label="secondary tabs example"
        >
          <Tab value="one" label="Item One" />
          <Tab value="two" label="Item Two" />
          <Tab value="three" label="Item Three" />
        </Tabs>
      </Box>
    </MuiCard>
  );
}
