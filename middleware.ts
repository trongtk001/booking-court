import { withAuth } from 'next-auth/middleware';

export default withAuth({
  callbacks: {
    authorized({ req, token }) {
      if (req.nextUrl.pathname.includes('/admin')) {
        return token?.role === 2;
      }
      return !!token;
    },
  },
});

export const config = {
  matcher: ['/admin/:path*'],
};
