import { authOptions } from '@/configs/next-auth/authOptions';
import { role } from '@/model';
import { getServerSession } from 'next-auth';
import React from 'react';

type Props = {
  children: React.ReactNode;
};
export default async function AdminLayout({ children }: Props) {
  const user = (await getServerSession(authOptions))?.user;

  if (user?.role !== role.admin) {
    return (
      <div className="w-full h-30 text-center">
        <h4 className="text-lg font-bold my-auto">Access Denied</h4>
      </div>
    );
  }

  return <>{children}</>;
}
