import { withAuth } from 'next-auth/middleware';
import { adminRoutes, staffRoutes, privateRoutes, publicRoutes } from './routes';

export default withAuth({
  callbacks: {
    authorized({ req, token }) {
      const partname = req.nextUrl.pathname;

      const isAdminRoute = Object.values(adminRoutes).some((route) => partname.includes(route));
      const isStaffRoute = Object.values(staffRoutes).some((route) => partname.includes(route));
      const isPrivateRoute = Object.values(privateRoutes).some((route) => partname.includes(route));

      if (isPrivateRoute || isAdminRoute || isStaffRoute) {
        return !!token;
      }
      return true;
    },
  },
});
