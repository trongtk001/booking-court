'use client';
import { CustomFlowbiteTheme, Flowbite, Pagination as FlowbitePagination } from 'flowbite-react';
import * as React from 'react';

export interface IPaginationProps {
  className?: string;
  currentPage: number;
  totalPage: number;
  onPageChange: (page: number) => void;
}

const className = '';

export default function Pagination({ className, currentPage, totalPage, onPageChange }: IPaginationProps) {
  return (
    <FlowbitePagination
      className={className}
      currentPage={currentPage}
      totalPages={totalPage}
      onPageChange={onPageChange}
      showIcons
      nextLabel=""
      previousLabel=""
    ></FlowbitePagination>
  );
}
