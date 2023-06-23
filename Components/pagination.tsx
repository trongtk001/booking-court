'use client';
import { CustomFlowbiteTheme, Flowbite, Pagination as FlowbitePagination } from 'flowbite-react';
import * as React from 'react';

export interface IPaginationProps {
  className?: string;
  currentPage: number;
  totalPage: number;
  onPageChange: (page: number) => void;
}

const theme: CustomFlowbiteTheme = {
  pagination: {
    pages: {
      base: 'xs:mt-0 mt-2 inline-flex items-center -space-x-px gap-2',
      next: {
        base: `opacity-50 cursor-normal ml-0 rounded-full border border-gray-300 bg-white py-2 px-2 leading-tight text-gray-500 
        hover:bg-gray-100 hover:text-gray-700 
        dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white inline-flex`,
      },
      selector: {
        active: '!bg-primary text-white !hover:bg-primaryDark hover:text-white',
        base:
          'w-9 h-9 border border-gray-300 rounded-full bg-white leading-tight text-gray-500 ' +
          ' hover:bg-gray-100 hover:text-gray-700 ' +
          ' dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white',
      },
      previous: {
        base: `opacity-50 cursor-normal ml-0 rounded-full border border-gray-300 bg-white py-2 px-2 leading-tight text-gray-500 
        hover:bg-gray-100 hover:text-gray-700 hover:cursor-pointer
        dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white inline-flex`,
      },
    },
  },
};

const className = '';

export default function Pagination({ className, currentPage, totalPage, onPageChange }: IPaginationProps) {
  return (
    <Flowbite theme={{ theme }}>
      <FlowbitePagination
        className={className}
        currentPage={currentPage}
        totalPages={totalPage}
        onPageChange={onPageChange}
        showIcons
        nextLabel=""
        previousLabel=""
      ></FlowbitePagination>
    </Flowbite>
  );
}
