'use client';
import CourtCard from '@/Components/card';
import Pagination from '@/Components/pagination';
import { Court, PaginationResponse } from '@/model';
import { useState } from 'react';
import useSWR from 'swr';
import SideBar from './side-bar';
import Loading from '@/Components/loading';

export interface IBrowserCourtProps {}

const className = {};

export default function BrowserCourt(props: IBrowserCourtProps) {
  const [pageIndex, setPageIndex] = useState(1);
  const { data, error, isLoading } = useSWR(`/court?pageIndex=${pageIndex - 1}&pageSize=9`);
  const { totalItemsCount, pageSize, totalPagesCount, items }: PaginationResponse<Court> = data?.result || {
    totalPagesCount: 1,
    items: [],
  };

  if (isLoading) return <Loading />;

  return (
    <div className="container mx-auto">
      <h5 className="capitalize text-2xl font-bold">browser court</h5>
      <div className=" flex">
        <SideBar className="w-52 h-full ml-1 mr-5 max-sm:hidden" />
        <div className="flex flex-col flex-grow items-center py-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {!data ? (
              <h5 className="capitalize text-lg ">No court found</h5>
            ) : (
              items.map((item, i) => (
                <div key={i} className=" w-auto">
                  <CourtCard item={item} />
                </div>
              ))
            )}
          </div>
          {/* pagination */}
          {totalPagesCount > 1 && (
            <Pagination
              currentPage={pageIndex}
              totalPage={totalPagesCount}
              onPageChange={(page) => {
                setPageIndex(page);
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
