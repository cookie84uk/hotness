import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

export const MainLayout = () => {
  return (
    <Box sx={{ 
      display: 'flex', 
      minHeight: '100vh',
      bgcolor: 'background.default',
      background: 'linear-gradient(45deg, #1a237e 30%, #311b92 90%)',
    }}>
      <Box component="main" sx={{ 
        flexGrow: 1, 
        p: 4,
        overflow: 'auto'
      }}>
        <Outlet />
      </Box>
    </Box>
  );
}; 