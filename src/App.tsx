import { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Box, CircularProgress } from '@mui/material';
import { ErrorBoundary } from './components/ErrorBoundary';
import { MainLayout } from './layouts/MainLayout';
import { DashboardDefault } from './components/DashboardDefault';

function App() {
  console.log('App rendering');

  return (
    <ErrorBoundary>
      <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
        <Suspense
          fallback={
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
              <CircularProgress />
            </Box>
          }
        >
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Navigate to="/dashboard" replace />} />
              <Route path="dashboard" element={<DashboardDefault />} />
            </Route>
          </Routes>
        </Suspense>
      </Box>
    </ErrorBoundary>
  );
}

export default App;
