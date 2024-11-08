import React from 'react';
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Chip
} from '@mui/material';
import { AccountBalance } from '@mui/icons-material';

export const WhaleActivity = () => {
  const whaleActivities = [
    {
      wallet: '0x1234...5678',
      action: 'Buy',
      token: 'BONK',
      amount: '1,000,000',
      value: '$50,000',
      time: '5 mins ago'
    },
    // Add more whale activities
  ];

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Whale Activity
      </Typography>
      
      <List>
        {whaleActivities.map((activity, index) => (
          <ListItem key={index}>
            <ListItemIcon>
              <AccountBalance />
            </ListItemIcon>
            <ListItemText
              primary={
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Typography variant="body1">
                    {activity.wallet}
                  </Typography>
                  <Chip
                    label={activity.action}
                    color={activity.action === 'Buy' ? 'success' : 'error'}
                    size="small"
                  />
                </Box>
              }
              secondary={`${activity.amount} ${activity.token} (${activity.value}) - ${activity.time}`}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}; 