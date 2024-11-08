import { useState } from 'react';
import {
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  Box,
  Chip
} from '@mui/material';
import { WhaleActivity } from '../../../types/common';

export const WhaleBuys = () => {
  const [whaleActivity, setWhaleActivity] = useState<WhaleActivity[]>([]);

  return (
    <Paper>
      <Box sx={{ p: 2 }}>
        <Typography variant="h6">Whale Activity</Typography>
      </Box>
      <List>
        {whaleActivity.map((activity) => (
          <ListItem key={activity.id} divider>
            <ListItemText
              primary={
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  {activity.tokenSymbol}
                  <Chip
                    label={activity.type.toUpperCase()}
                    color={activity.type === 'buy' ? 'success' : 'error'}
                    size="small"
                  />
                </Box>
              }
              secondary={
                <>
                  Amount: ${activity.amount.toLocaleString()}<br />
                  {new Date(activity.timestamp).toLocaleString()}
                </>
              }
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};