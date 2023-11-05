'use client';
import Button from '@/Components/button';
import Table, { Body, Cell, Head, HeadCell, Row } from '@/Components/flow-bite/table';
import httpMethods from '@/service/client/fetcher';
import dayjs from 'dayjs';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import useSWR from 'swr';
import CreateWorkingSlotModal from '../../admin/calendar/modal';
import Pagination from '@/Components/pagination';
import { dA } from '@fullcalendar/core/internal-common';

type Props = {};

const className = {
  tableHeadCell: 'text-primary',
  row: 'bg-white dark:border-gray-700 dark:bg-gray-800',
};

const WorkingSlot = (props: Props) => {
  const user = useSession().data?.user;

  const [openModal, setOpenModal] = useState(false);
  const [pageIndex, setPageIndex] = useState(1);

  const { data, error, isLoading, mutate } = useSWR(
    `/WorkingSlotInAMonth/GetAllWorkingSlotInAMonth?/WorkingSlotInAMonth/GetAllWorkingSlotInAMonth>pageNumber?pageNumber=${pageIndex}&pageSize=10`,
    {
      refreshInterval: 0,
    }
  );

  const handleSelect = async (item: any) => {
    const res = await httpMethods.post(`/UserSlot/${user?.id}/${item.id}`);

    if (res.status === 'OK') {
      toast.success('Select slot successfully');
    } else {
      toast.error('Select slot failed');
    }
  };

  const handleCLoseModal = () => {
    setOpenModal(false);
    mutate();
  };

  console.log(data?.result.items);

  return (
    data?.result && (
      <div>
        <div className="flex justify-end">
          <Button onClick={() => setOpenModal(true)} className=" my-5" size={'small'}>
            Create
          </Button>
        </div>
        <CreateWorkingSlotModal isOpen={openModal} onClose={handleCLoseModal} />

        <Table>
          <Head>
            <HeadCell className={className.tableHeadCell}>start Time</HeadCell>
            <HeadCell className={className.tableHeadCell}>end Time</HeadCell>
            <HeadCell className={className.tableHeadCell}>slot Hour</HeadCell>
            <HeadCell className={className.tableHeadCell}>slot Salary</HeadCell>
            <HeadCell className={className.tableHeadCell}>basic Salary Base</HeadCell>
            <HeadCell className={className.tableHeadCell}>
              <span className="sr-only">Edit</span>
            </HeadCell>
          </Head>
          <Body className="divide-y">
            {data.result.items.map((item: any, i: number) => (
              <Row key={i} className={className.row}>
                <Cell>{dayjs(item.startTime).format('YYYY/MM/DD HH:mm')}</Cell>
                <Cell>{dayjs(item.endTime).format('YYYY/MM/DD HH:mm')}</Cell>
                <Cell>{item.slotHour}</Cell>
                <Cell>{item.slotSalary}</Cell>
                <Cell>{item.basicSalaryBase}</Cell>
                <Table.Cell>
                  <a onClick={() => handleSelect(item)} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500" href="#">
                    <p>Select</p>
                  </a>
                </Table.Cell>
              </Row>
            ))}
          </Body>
        </Table>

        {/* pagination */}
        {data.result.totalPagesCount > 1 && (
          <Pagination
            currentPage={pageIndex}
            totalPage={data.result.totalPagesCount}
            onPageChange={(page) => {
              setPageIndex(page);
            }}
          />
        )}
      </div>
    )
  );
};

export default WorkingSlot;
