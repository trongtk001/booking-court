import { User } from '@/model/user';
import { publicRoutes } from '@/routes';
import { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: AuthOptions = {
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
          const response = await fetch(process.env.NEXTAUTH_URL + '/api/User/Login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
          });
          const user = (await response.json()).result;
          if (response.ok && user) {
            return user;
          }
        } catch (error) {
          console.log('authOptions', error);
          throw new Error('Invalid credentials');
        }
        // return null;
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
