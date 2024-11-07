import { DashboardOutlined, LineChartOutlined } from '@ant-design/icons';

const dashboard = {
  id: 'group-dashboard',
  title: 'Navigation',
  type: 'group',
  children: [
    {
      id: 'default',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboard/default',
      icon: DashboardOutlined,
      breadcrumbs: false
    },
    {
      id: 'hotness',
      title: 'Hotness Tracker',
      type: 'item',
      url: '/dashboard/hotness',
      icon: LineChartOutlined,
      breadcrumbs: false
    }
  ]
};

export default dashboard; 