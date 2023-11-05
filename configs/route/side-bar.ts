import { role } from '@/model';
import { privateRoutes, staffRoutes } from '@/routes';
import { CalendarDaysIcon, PresentationChartBarIcon, UserCircleIcon, ViewColumnsIcon } from '@heroicons/react/24/outline';

const adminSideBar = [
  {
    name: 'courtManagement',
    title: 'Court Management',
    description: 'Manager yout court',
    icon: ViewColumnsIcon,
    path: privateRoutes.managerCourt,
    role: [role.admin],
  },
  {
    name: 'calendar',
    title: 'Calendar',
    description: 'Calendar',
    icon: CalendarDaysIcon,
    path: privateRoutes.calendar,
    role: [role.admin],
  },
  {
    name: 'staffManagement',
    title: 'Staff Management',
    description: 'Manager your staff',
    icon: ViewColumnsIcon,
    path: privateRoutes.staffManagement,
    role: [role.admin],
  },
  {
    name: 'WorkingSchedule',
    title: 'Working Schedule',
    description: 'Working Schedule',
    icon: CalendarDaysIcon,
    path: staffRoutes.workSchedule,
    role: [role.staff, role.admin],
  },
  {
    name: 'workingSlot',
    title: 'Working Slot ',
    description: 'Working Slot ',
    icon: ViewColumnsIcon,
    path: staffRoutes.workingSlot,
    role: [role.admin, role.staff],
  },
];

const profileSideBar = [
  {
    name: 'profile',
    title: 'Profile',
    icon: UserCircleIcon,
    path: privateRoutes.profile,
  },
  {
    name: 'workingProfile',
    title: 'Working Profile',
    icon: PresentationChartBarIcon,
    path: staffRoutes.workingProfile,
    role: [role.staff, role.admin],
  },
];

export { adminSideBar, profileSideBar };
