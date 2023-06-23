import Table, { Head, Body, Row, Cell, HeadCell } from '@/Components/flow-bite/table';
import { getSession, useSession } from 'next-auth/react';
import React from 'react';

const className = {
  tableHeadCell: 'text-primary',
};

const ManagerCourt = async () => {
  return (
    <div className="overflow-x-auto">
      <Table>
        <Head>
          <HeadCell className={className.tableHeadCell}>Product name</HeadCell>
          <HeadCell className={className.tableHeadCell}>Color</HeadCell>
          <HeadCell className={className.tableHeadCell}>Category</HeadCell>
          <HeadCell className={className.tableHeadCell}>Price</HeadCell>
          <HeadCell className={className.tableHeadCell}>
            <span className="sr-only">Edit</span>
          </HeadCell>
        </Head>
        <Body className="divide-y">
          <Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Apple MacBook Pro 17"</Cell>
            <Cell>Sliver</Cell>
            <Cell>Laptop</Cell>
            <Cell>$2999</Cell>
            <Cell>
              <a className="font-medium text-cyan-600 hover:underline dark:text-cyan-500" href="/tables">
                <p>Edit</p>
              </a>
            </Cell>
          </Row>
        </Body>
      </Table>
    </div>
  );
};

export default ManagerCourt;
