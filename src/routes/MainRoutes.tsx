import { lazy } from 'react';
import { MainLayout } from '../layouts/MainLayout';
import { Navigate } from 'react-router-dom';

const DashboardDefault = lazy(() => import('../components/DashboardDefault'));

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <Navigate to="/dashboard" />
    },
    {
      path: 'dashboard',
      element: <DashboardDefault />
    }
  ]
};

export default MainRoutes; 