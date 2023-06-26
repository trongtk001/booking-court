import { privateRoutes, publicRoutes } from '@/routes';

export const headerLink = [
  {
    name: 'browse',
    title: 'Browse',
    path: publicRoutes.browserCourt,
  },
  {
    name: 'activities',
    title: 'My activities',
    path: privateRoutes.myActivities,
  },
];

export const dropdownLink = [
  {
    name: 'dashboard',
    title: 'Dashboard',
    path: privateRoutes.managerCourt,
    admin: true,
  },
  {
    name: 'setting',
    title: 'Setting',
    path: privateRoutes.setting,
  },
];
