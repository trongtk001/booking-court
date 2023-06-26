import { authOptions } from '@/configs/next-auth/authOptions';
import NextAuth from 'next-auth/next';

export const config = {
  api: {
    externalResolver: true,
  },
};

const handle = NextAuth(authOptions);

export default handle;
