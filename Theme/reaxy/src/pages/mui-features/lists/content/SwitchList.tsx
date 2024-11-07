import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { styles } from "./All.styles";
import Switch from "@mui/material/Switch";

import {
  BluetoothIcon,
  FlightIcon,
  LteMobiledataIcon,
  WifiIcon,
} from "@config/assets/icons";
import { MuiCard } from "@config/components";

export function SwitchList() {
  // ** useState
  const [checked, setChecked] = React.useState(["wifi"]);

  // ** handle method
  const handleToggle = (value: string) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <MuiCard title="Switch list">
      <List sx={styles.container}>
        <ListItem>
          <ListItemIcon>
            <WifiIcon />
          </ListItemIcon>
          <ListItemText id="switch-list-label-wifi" primary="Wi-Fi" />
          <Switch
            edge="end"
            onChange={handleToggle("wifi")}
            checked={checked.indexOf("wifi") !== -1}
            inputProps={{
              "aria-labelledby": "switch-list-label-wifi",
            }}
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <BluetoothIcon />
          </ListItemIcon>
          <ListItemText id="switch-list-label-bluetooth" primary="Bluetooth" />
          <Switch
            edge="end"
            onChange={handleToggle("bluetooth")}
            checked={checked.indexOf("bluetooth") !== -1}
            inputProps={{
              "aria-labelledby": "switch-list-label-bluetooth",
            }}
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <LteMobiledataIcon />
          </ListItemIcon>
          <ListItemText
            id="switch-list-label-bluetooth"
            primary="Mobile Data"
          />
          <Switch
            edge="end"
            onChange={handleToggle("Mobile Data")}
            checked={checked.indexOf("Mobile Data") !== -1}
            inputProps={{
              "aria-labelledby": "switch-list-label-bluetooth",
            }}
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <FlightIcon />
          </ListItemIcon>
          <ListItemText id="switch-list-label-bluetooth" primary="Pilot" />
          <Switch
            edge="end"
            onChange={handleToggle("Pilot")}
            checked={checked.indexOf("Pilot") !== -1}
            inputProps={{
              "aria-labelledby": "switch-list-label-bluetooth",
            }}
          />
        </ListItem>
      </List>
    </MuiCard>
  );
}
