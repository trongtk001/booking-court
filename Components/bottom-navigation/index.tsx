import { adminSideBar } from '@/configs/route';
import Image from 'next/image';
import React from 'react';
import { twMerge } from 'tailwind-merge';

type Props = {
  className?: string;
};

const style = {
  root: 'fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 bg-white border border-gray-200 rounded-full bottom-4 left-1/2 dark:bg-gray-700 dark:border-gray-600',
  button:
    ' grow inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group first:rounded-l-full last:rounded-r-full',
  icon: 'w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary dark:group-hover:text-blue-500',
};

const BottomNavigation = ({ className }: Props) => {
  return (
    <div className={twMerge(style.root, className)}>
      <div className="flex flex-row justify-between h-full mx-auto ">
        {adminSideBar.map((item, index) => (
          <button key={index} className={style.button}>
            <item.icon className={style.icon} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default BottomNavigation;
