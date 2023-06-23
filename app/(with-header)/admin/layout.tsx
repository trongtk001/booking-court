'use client';
import React from 'react';

import AppSidebar from '@/Components/site-bar';

export interface IAdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: IAdminLayoutProps) {
  return (
    <div>
      <div className="flex divide-x">
        <AppSidebar className="mr-2 max-[1024px]:hidden" />
        <div className="w-full h-200">
          <div className="mx-20">{children}</div>
        </div>
      </div>
    </div>
  );
}
