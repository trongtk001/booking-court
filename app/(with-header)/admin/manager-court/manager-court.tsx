'use client';
import Button from '@/Components/button';
import Table, { Body, Cell, Head, HeadCell, Row } from '@/Components/flow-bite/table';
import Pagination from '@/Components/pagination';
import { Court, PaginationResponse } from '@/model';
import { signOut } from 'next-auth/react';
import Image from 'next/image';
import React, { useState } from 'react';
import useSWR from 'swr';

type Props = {};

const ManagerCourtTable = (props: Props) => {
  const [pageIndex, setPageIndex] = useState(1);
  const { data, error, isLoading } = useSWR(`/court?pageIndex=${pageIndex - 1}&pageSize=10`, { revalidateOnFocus: false });
  if (error?.message.status === 401) {
    signOut();
  }

  const { totalItemsCount, pageSize, totalPagesCount, items }: PaginationResponse<Court> = data?.result || {
    items: [],
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <div className="flex justify-end">
        <Button className=" my-5" size={'small'}>
          Create new
        </Button>
      </div>
      <Table>
        <Head>
          <HeadCell className={className.tableHeadCell}>COURTCODE</HeadCell>
          <HeadCell className={className.tableHeadCell}>DESCRIPTION</HeadCell>
          <HeadCell className={className.tableHeadCell}>IMAGE</HeadCell>
          <HeadCell className={className.tableHeadCell}>PRICE</HeadCell>
          <HeadCell className={className.tableHeadCell}>RESERVATIONSTATUS</HeadCell>
          <HeadCell className={className.tableHeadCell}>TOTALPERSON</HeadCell>
          <HeadCell className={className.tableHeadCell}>AVAILABLESTATUS</HeadCell>
          <HeadCell className={className.tableHeadCell}>
            <span className="sr-only">Edit</span>
          </HeadCell>
        </Head>
        <Body className="divide-y">
          {items.map((item, i) => (
            <Row key={i} className={className.row}>
              <Cell>{item.courtCode}</Cell>
              <Cell>{item.description}</Cell>
              <Cell>
                {/* <Image src={item.imageURI} alt="image" width={20} height={20} /> */}
                {item.imageURI}
              </Cell>
              <Cell>{item.price} $</Cell>
              <Cell className={item.reservationStatus ? 'text-red-400' : 'text-green-400'}>
                {item.reservationStatus ? 'booked' : 'available'}
              </Cell>
              <Cell>{item.totalPerson}</Cell>
              <Cell className={item.availableStatus ? 'text-green-400' : 'text-red-400'}>
                {item.availableStatus ? 'available' : 'not available'}
              </Cell>
              <Table.Cell>
                <a className="font-medium text-cyan-600 hover:underline dark:text-cyan-500" href="/tables">
                  <p>Edit</p>
                </a>
              </Table.Cell>
            </Row>
          ))}
        </Body>
      </Table>
      {totalPagesCount > 1 && (
        <Pagination
          currentPage={pageIndex}
          totalPage={totalPagesCount}
          onPageChange={(page) => {
            setPageIndex(page);
          }}
        />
      )}
    </>
  );
};

const className = {
  tableHeadCell: 'text-primary',
  row: 'bg-white dark:border-gray-700 dark:bg-gray-800',
};

export default ManagerCourtTable;
