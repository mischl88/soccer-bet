'use client';
import { PaginationState } from '@tanstack/table-core';

import { useColumnData } from '@/views/myScores/useColumnData';

import Table from '@/components/table/Table';
import { Pagination } from '@/components/table/Pagination';
import TableWrapper from '@/components/TableWrapper';

import { ROUTES } from '@/config/routes';

interface MyScoresViewProps {
  data: any[];
  metadata?: Pagination;
}

export default function MyScoresView({ data, metadata }: MyScoresViewProps) {
  const columns = useColumnData();

  const handlePaginationChange = (pagination: PaginationState) => {
    console.log(pagination);
  };

  return (
    <TableWrapper url={`${ROUTES.EDIT_SCORE}/add`}>
      <Table
        columnsData={columns}
        tableData={data}
        onPaginationChange={handlePaginationChange}
        pagination={metadata}
      />
    </TableWrapper>
  );
}
