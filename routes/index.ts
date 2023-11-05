const publicRoutes = {
  home: '/',
  login: '/login',
  register: '/register',
  forgotPassword: '/forgot-password',
  resetPassword: '/reset-password',
  browserCourt: '/browser-court',
};

const privateRoutes = {
  myActivities: '/my-activities',
  managerCourt: '/admin/manager-court',
  calendar: '/admin/calendar',
  setting: '/setting',
  staffManagement: '/admin/staff-management',
  profile: '/profile',
};

const adminRoutes = {
  managerCourt: '/admin/manager-court',
  calendar: '/admin/calendar',
  staffManagement: '/admin/staff-management',
  workingSlotManagement: '/admin/working-slot-management',
};

const staffRoutes = {
  workSchedule: '/staff/work-schedule',
  workingProfile: '/profile/working-profile',
  workingSlot: '/staff/working-slot',
};

export { publicRoutes, privateRoutes, adminRoutes, staffRoutes };
