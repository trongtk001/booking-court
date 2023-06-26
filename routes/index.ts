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
};

export { publicRoutes, privateRoutes };
