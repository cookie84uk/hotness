import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import { styles } from "./All.styles";
import {
  DraftsIcon,
  ExpandLess,
  ExpandMore,
  InboxIcon,
  SendIcon,
  StarBorder,
} from "@config/assets/icons";
import { MuiCard } from "@config/components";

export function NestedList() {
  // ** useState
  const [open, setOpen] = React.useState(true);

  // ** handle method
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <MuiCard title="Nested list">
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        sx={styles.container}
      >
        <ListItemButton>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText primary="Sent mail" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItemButton>
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={styles.nestedButton}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Starred" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </MuiCard>
  );
}
