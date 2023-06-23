'use client';
import React, { BaseHTMLAttributes, use } from 'react';
import { CustomFlowbiteTheme, Flowbite, Sidebar } from 'flowbite-react';
import { ViewColumnsIcon, UserIcon } from '@heroicons/react/24/outline';

export interface ISidebarProps extends React.BaseHTMLAttributes<HTMLBaseElement> {}

const customTheme: CustomFlowbiteTheme = {
  sidebar: {
    root: {
      base: 'mt-16',
      inner: 'bg-white ml-4',
    },
    item: {
      active: 'border-primary text-primary',
      base:
        'h-16 w-60 border flex items-center justify-center rounded-2xl p-2 text-base font-normal text-gray-900' +
        ' hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700',
      icon: {
        base: 'h-10 w-10 p-2.5 rounded-xl bg-gray-400 flex-shrink-0 text-white transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white',
        active: 'bg-primary',
      },
    },
  },
};

const className = {
  label: {
    title: 'text-sm font-bold leading-5 ',
    content: 'text-xs font-normal leading-4',
  },
};

export default function AppSidebar(props: ISidebarProps) {
  return (
    <Flowbite theme={{ theme: customTheme }}>
      <Sidebar className={props.className}>
        <Sidebar.Items className="h-full">
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#" icon={UserIcon}>
              <h5 className={className.label.title}>Court Management</h5>
              <p className={className.label.content}>Manage your courts</p>
            </Sidebar.Item>
            <Sidebar.Item active href="#" icon={ViewColumnsIcon}>
              <h5 className={className.label.title}>Court Management</h5>
              <p className={className.label.content}>Manage your courts</p>
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </Flowbite>
  );
}
