import NextAuth from 'next-auth';
import { User } from '../../model/user';

declare module 'next-auth' {
  interface Session {
    user: User;
    accessToken: string;
  }
}
