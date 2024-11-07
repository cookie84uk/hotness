import React from 'react';
import { 
  Box, 
  Typography, 
  List, 
  ListItem, 
  ListItemText,
  ListItemIcon 
} from '@mui/material';
import { Signal } from '../../types/Signal';

interface Props {
  signals: Signal[];
}

export default function SignalList({ signals }: Props) {
  return (
    <Box>
      <Typography variant="h6">Recent Signals</Typography>
      <List>
        {signals.map((signal, index) => (
          <ListItem key={index}>
            <ListItemIcon>
              {/* Add icon based on signal type */}
            </ListItemIcon>
            <ListItemText 
              primary={signal.type}
              secondary={new Date(signal.timestamp).toLocaleString()}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
} 