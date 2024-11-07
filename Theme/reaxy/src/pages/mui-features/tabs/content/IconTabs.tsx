import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { MuiCard } from "@config/components";
import {
  AccessTimeIcon,
  AirplanemodeActiveIcon,
  FavoriteIcon,
  PersonPinIcon,
  PhoneIcon,
} from "@config/assets/icons";

export function IconTabs() {
  // ** useState
  const [value, setValue] = React.useState(0);

  // ** handle method
  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <MuiCard title="Icon tabs">
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="icon label tabs example"
      >
        <Tab icon={<PhoneIcon color="primary" />} label="RECENTS" />
        <Tab icon={<FavoriteIcon color="error" />} label="FAVORITES" />
        <Tab icon={<AccessTimeIcon color="warning" />} label="Time" />
        <Tab icon={<PersonPinIcon color="success" />} label="NEARBY" />
        <Tab
          icon={<AirplanemodeActiveIcon color="secondary" />}
          label="Pilot"
        />
      </Tabs>
    </MuiCard>
  );
}
