'use client';
import { adminSideBar } from '@/configs/route';
import { role } from '@/model';
import { CustomFlowbiteTheme, Flowbite, Sidebar } from 'flowbite-react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export interface ISidebarProps extends React.BaseHTMLAttributes<HTMLBaseElement> {}

const className = {
  label: {
    title: 'text-sm font-bold leading-5 ',
    content: 'text-xs font-normal leading-4',
  },
};

const theme: CustomFlowbiteTheme = {
  sidebar: {
    root: {
      base: 'mt-16',
      inner: 'bg-white ml-4',
    },
    item: {
      active: 'border-primary text-primary',
      base:
        'border flex items-center justify-center rounded-2xl p-2 text-base font-normal text-gray-900' +
        ' hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700',
      icon: {
        base: 'h-10 w-10 p-2.5 rounded-xl bg-gray-400 flex-shrink-0 text-white transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white',
        active: 'bg-primary',
      },
      collapsed: {
        insideCollapse: 'border-none',
      },
    },
  },
};

export default function AppSidebar(props: ISidebarProps) {
  const pathname = usePathname();
  const user = useSession().data?.user;
  return (
    <Flowbite theme={{ theme }}>
      <Sidebar className={props.className}>
        <Sidebar.Items className="h-full">
          <Sidebar.ItemGroup>
            {adminSideBar.map(
              (item, index) =>
                !item?.role ||
                (item.role?.includes(user?.role as role) && (
                  <Sidebar.Item as={Link} href={item.path} active={pathname === item.path} key={index} icon={item.icon}>
                    <h5 className={className.label.title}>{item.title}</h5>
                    <p className={className.label.content}>{item.description}</p>
                  </Sidebar.Item>
                ))
            )}
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </Flowbite>
  );
}
