import { User } from '@/model/user';
import { publicRoutes } from '@/routes';
import login from '@/service/server/login';
import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const { email, password } = credentials as any;

        try {
          const response = await login(email, password);
          const user = response.result;
          if (response.status == 'OK' && user) {
            return user;
          }
        } catch (error) {
          console.log('authOptions', error);
          throw new Error('Invalid credentials');
        }
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: publicRoutes.login,
    error: publicRoutes.login,
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      return { ...token, ...user };
    },
    session: async ({ session, token, user }) => {
      session.user = { email: token.email, id: token.id, userName: token.userName, role: token.role } as User;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
