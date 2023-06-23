'use client';
import CourtCard from '@/Components/card';
import Pagination from '@/Components/pagination';
import * as React from 'react';
import { useState } from 'react';
import SideBar from './side-bar';

export interface IBrowserCourtProps {}

const className = {};

export default function BrowserCourt(props: IBrowserCourtProps) {
  const [page, setPage] = useState(1);

  return (
    <div className="container  mx-auto flex">
      <SideBar className="w-52 h-full ml-1 mr-5 max-sm:hidden" />
      <div className="flex flex-col flex-grow items-center py-4">
        <div className=" w-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          <CourtCard />
          <CourtCard />
          <CourtCard />
          <CourtCard />
          <CourtCard />
          <CourtCard />
          <CourtCard />
        </div>
        <Pagination
          currentPage={page}
          totalPage={5}
          onPageChange={(page) => {
            setPage(page);
          }}
        />
      </div>
    </div>
  );
}
