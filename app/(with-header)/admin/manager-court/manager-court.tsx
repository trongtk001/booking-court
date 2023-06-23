'use client';
import React from 'react';
import Table, { Body, Cell, Head, HeadCell, Row } from '@/Components/flow-bite/table';

type Props = {};

const ManagerCourtTable = (props: Props) => {
  return (
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
          <Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Apple MacBook Pro 17&quot;</Cell>
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
  );
};

const className = {
  tableHeadCell: 'text-primary',
};

export default ManagerCourtTable;
