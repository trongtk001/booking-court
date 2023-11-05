'use client';
import Button from '@/Components/button';
import Table, { Body, Cell, Head, HeadCell, Row } from '@/Components/flow-bite/table';
import Loading from '@/Components/loading';
import Pagination from '@/Components/pagination';
import { Court, PaginationResponse } from '@/model';
import { signOut } from 'next-auth/react';
import Image from 'next/image';
import { useState } from 'react';
import useSWR from 'swr';
import CreateCourtModal from './create-new';

type Props = {};

const className = {
  tableHeadCell: 'text-primary',
  row: 'bg-white dark:border-gray-700 dark:bg-gray-800',
};

const ManagerCourtTable = (props: Props) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [pageIndex, setPageIndex] = useState(1);
  const { data, error, isLoading } = useSWR(`/court?pageIndex=${pageIndex - 1}&pageSize=10`);
  if (error?.message.status === 401) {
    signOut();
  }

  const { totalItemsCount, pageSize, totalPagesCount, items }: PaginationResponse<Court> = data?.result || {};

  if (isLoading) return <Loading />;

  return (
    <>
      {/* modal */}
      <div className="flex justify-end">
        <Button onClick={() => setIsOpenModal(true)} className=" my-5" size={'small'}>
          Create new
        </Button>
      </div>
      <CreateCourtModal isOpen={isOpenModal} closeModal={() => setIsOpenModal(false)} />

      {/* table */}
      <div className="overflow-x-scroll shadow-md">
        <Table>
          <Head>
            <HeadCell className={className.tableHeadCell}>COURT CODE</HeadCell>
            <HeadCell className={className.tableHeadCell}>DESCRIPTION</HeadCell>
            <HeadCell className={className.tableHeadCell}>IMAGE</HeadCell>
            <HeadCell className={className.tableHeadCell}>PRICE</HeadCell>
            <HeadCell className={className.tableHeadCell}>RESERVATION STATUS</HeadCell>
            <HeadCell className={className.tableHeadCell}>TOTAL PERSON</HeadCell>
            <HeadCell className={className.tableHeadCell}>AVAILABLE STATUS</HeadCell>
            <HeadCell className={className.tableHeadCell}>
              <span className="sr-only">Edit</span>
            </HeadCell>
          </Head>
          <Body className="divide-y">
            {items &&
              items.map((item, i) => (
                <Row key={i} className={className.row}>
                  <Cell>{item.courtCode}</Cell>
                  <Cell>{item.description}</Cell>
                  <Cell>{item.imageURI && <Image src={item.imageURI} alt="image" className="w-20" width={80} height={40} />}</Cell>
                  <Cell className="text-right">{item.price}$</Cell>
                  <Cell>{item.reservationStatus}</Cell>
                  <Cell>{item.totalPerson}</Cell>
                  <Cell className={item.availableStatus == 'Available' ? 'text-green-400' : 'text-red-400'}>{item.availableStatus}</Cell>
                  <Table.Cell>
                    <a className="font-medium text-cyan-600 hover:underline dark:text-cyan-500" href="/tables">
                      <p>Edit</p>
                    </a>
                  </Table.Cell>
                </Row>
              ))}
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
    </>
  );
};

export default ManagerCourtTable;
