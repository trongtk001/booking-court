'use client';
import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import React from 'react';

interface IProps {
  children: React.ReactNode;
  session: Session;
}

const AuthProvider = ({ children, session }: IProps) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default AuthProvider;
