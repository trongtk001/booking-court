'use client';
import { signOut } from 'next-auth/react';

interface ILogoutBtnProps {
  children: React.ReactNode;
  className?: string;
}

const LogoutBtn = ({ children, className }: ILogoutBtnProps) => {
  return (
    <div className={className} onClick={() => signOut()}>
      {children}
    </div>
  );
};

export default LogoutBtn;
