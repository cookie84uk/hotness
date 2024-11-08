import { useState } from 'react';
import { Box } from '@mui/material';
import { Sidebar } from './Sidebar';
import { Outlet } from 'react-router-dom';

export const MainLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${sidebarOpen ? 240 : 0}px)` }
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}; 