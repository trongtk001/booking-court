import { role } from '@/model';
import { privateRoutes, publicRoutes, staffRoutes } from '@/routes';

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
    name: 'profile',
    title: 'Profile',
    path: privateRoutes.profile,
  },
  {
    name: 'working-profile',
    title: 'Working profile',
    path: staffRoutes.workingProfile,
    role: [role.staff],
  },
  {
    name: 'dashboard',
    title: 'Dashboard',
    path: privateRoutes.managerCourt,
    role: [role.admin, role.staff],
  },
  {
    name: 'setting',
    title: 'Setting',
    path: privateRoutes.setting,
  },
];
