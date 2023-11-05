import React from 'react';

import AppSidebar from '@/Components/side-bar';
import BottomNavigation from '@/Components/bottom-navigation';

export interface IAdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: IAdminLayoutProps) {
  return (
    <div>
      <div className="flex divide-x">
        <AppSidebar className="mr-2 max-lg:hidden" />
        <BottomNavigation className="lg:hidden" />
        <div className="w-full min-h-200">
          <div className=" md:mx-20 ">{children}</div>
        </div>
      </div>
    </div>
  );
}
