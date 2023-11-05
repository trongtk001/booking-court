'use client';
import Button from '@/Components/button';
import Table, { Body, Cell, Head, HeadCell, Row } from '@/Components/flow-bite/table';
import Loading from '@/Components/loading';
import Pagination from '@/Components/pagination';
import { gender, PaginationResponse, Staff } from '@/model';
import { signOut } from 'next-auth/react';
import React, { useState } from 'react';
import useSWR from 'swr';

type Props = {};

const className = {
  tableHeadCell: 'text-primary',
  row: 'bg-white dark:border-gray-700 dark:bg-gray-800',
};

const StaffManagerPage = (props: Props) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [pageIndex, setPageIndex] = useState(1);
  const { data, error, isLoading } = useSWR(`/GetStaff?pageIndex=${pageIndex - 1}&pageSize=10`);
  if (error?.message.status === 401) {
    signOut();
  }

  const { totalItemsCount, pageSize, totalPagesCount, items }: PaginationResponse<Staff> = data?.result || {};

  if (isLoading) return <Loading />;

  return (
    <div className="">
      <h5 className="capitalize text-2xl font-bold mb-8">staff management</h5>

      {/* modal */}
      <div className="flex justify-end">
        <Button onClick={() => setIsOpenModal(true)} className=" my-5" size={'small'}>
          Create new
        </Button>
      </div>

      <div className="overflow-x-scroll shadow-md">
        <Table>
          <Head>
            <HeadCell className={className.tableHeadCell}>USERNAME</HeadCell>
            <HeadCell className={className.tableHeadCell}>EMAIL</HeadCell>
            <HeadCell className={className.tableHeadCell}>GENDER</HeadCell>
            <HeadCell className={className.tableHeadCell}>DOB</HeadCell>
          </Head>
          <Body className="divide-y">
            {items &&
              items.map((item, i) => {
                const dob = new Date(item.dob);
                return (
                  <Row key={i} className={className.row}>
                    <Cell>{item.userName}</Cell>
                    <Cell>{item.email}</Cell>
                    <Cell>{gender[item.gender]}</Cell>
                    <Cell>{dob.toDateString()}</Cell>
                  </Row>
                );
              })}
          </Body>
        </Table>
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
  );
};

export default StaffManagerPage;
