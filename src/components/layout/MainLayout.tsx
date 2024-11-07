import { Box } from '@mui/material';
import { Header } from './Header';
import { Sidebar } from './Sidebar';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Box sx={{ 
      display: 'flex',
      minHeight: '100vh',
      backgroundColor: 'background.default'
    }}>
      <Sidebar />
      <Box sx={{ 
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden'
      }}>
        <Header />
        <Box component="main" sx={{ 
          flexGrow: 1,
          p: 3,
          overflow: 'auto'
        }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
}; 