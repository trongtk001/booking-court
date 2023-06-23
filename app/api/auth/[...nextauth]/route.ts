import { publicRoutes } from '@/routes';
import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
// import { User } from '@/model/user';

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        const { email, password } = credentials as any;

        const res = await fetch('http://localhost:3000/api/User/Login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
        });

        const user = (await res.json()).result;
        if (res.ok && user) {
          return user;
        }
        return null;
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: publicRoutes.login,
  },
  callbacks: {
    async session({ session, token, user }) {
      return session;
    },
  },
};
const authHandler = NextAuth(authOptions);

export { authHandler as GET, authHandler as POST };
