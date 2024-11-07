import React from 'react';
import { 
  Box, 
  Paper, 
  Typography, 
  List, 
  ListItem, 
  ListItemText,
  useTheme,
  alpha
} from '@mui/material';

interface TopTokenCardProps {
  title: string;
  icon: React.ReactNode;
  items: any[];
  renderItem: (item: any) => {
    primary: string;
    secondary: React.ReactNode;
  };
  iconColor: string;
}

const TopTokenCard: React.FC<TopTokenCardProps> = ({ 
  title, 
  icon, 
  items, 
  renderItem,
  iconColor 
}) => {
  const theme = useTheme();
  
  return (
    <Paper 
      elevation={3}
      sx={{ 
        p: 2, 
        height: '100%',
        background: `linear-gradient(135deg, 
          ${alpha(theme.palette.background.paper, 0.9)} 0%, 
          ${alpha(iconColor, 0.15)} 100%)`,
        boxShadow: `
          inset 0 2px 4px ${alpha('#fff', 0.1)},
          0 4px 8px ${alpha('#000', 0.4)}
        `,
        border: `1px solid ${alpha(iconColor, 0.2)}`,
        borderRadius: 2
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Box sx={{ color: iconColor, mr: 1 }}>
          {icon}
        </Box>
        <Typography variant="h6" fontWeight="bold">
          {title}
        </Typography>
      </Box>
      
      <List dense>
        {items.map((item, index) => {
          const { primary, secondary } = renderItem(item);
          return (
            <ListItem
              key={index}
              sx={{
                borderBottom: index < items.length - 1 ? 
                  `1px solid ${alpha(theme.palette.divider, 0.1)}` : 'none',
                py: 1
              }}
            >
              <ListItemText
                primary={
                  <Typography variant="body1" fontWeight="bold">
                    {primary}
                  </Typography>
                }
                secondary={
                  <Box sx={{ 
                    mt: 0.5, 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: 1,
                    fontFamily: 'monospace'
                  }}>
                    {secondary}
                  </Box>
                }
              />
            </ListItem>
          );
        })}
      </List>
    </Paper>
  );
};

export default TopTokenCard; 