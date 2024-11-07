import { Drawer, List, ListItem, ListItemIcon, ListItemText, Box, Typography, useTheme } from '@mui/material';
import { TrendingUp, Timeline, ShowChart, Settings } from '@mui/icons-material';

const DRAWER_WIDTH = 240;

const menuItems = [
  { text: 'Hot Tokens', icon: <TrendingUp /> },
  { text: 'Market', icon: <ShowChart /> },
  { text: 'Analytics', icon: <Timeline /> },
  { text: 'Settings', icon: <Settings /> },
];

export const Sidebar = () => {
  const theme = useTheme();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: DRAWER_WIDTH,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: DRAWER_WIDTH,
          boxSizing: 'border-box',
          backgroundColor: 'background.paper',
          borderRight: '1px solid',
          borderColor: 'divider',
        },
      }}
    >
      <Box sx={{ p: 2 }}>
        <Typography variant="h6" sx={{ color: 'primary.main' }}>
          🔥 Hotness
        </Typography>
      </Box>
      
      <List>
        {menuItems.map((item) => (
          <ListItem button key={item.text}>
            <ListItemIcon sx={{ color: 'primary.main' }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};
