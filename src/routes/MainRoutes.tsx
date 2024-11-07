import { lazy } from 'react';
import MainLayout from 'layout/MainLayout';
import Loadable from 'components/Loadable';

const HotnessDashboard = Loadable(lazy(() => import('pages/dashboard/hotness/HotnessDashboard')));

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'dashboard/default',
      element: <DashboardDefault />
    },
    {
      path: 'dashboard/hotness',
      element: <HotnessDashboard />
    }
  ]
};

export default MainRoutes; 