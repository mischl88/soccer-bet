'use client';
import { PaginationState } from '@tanstack/table-core';

import { useColumnData } from '@/views/matches/useColumnData';

import Table from '@/components/table/Table';
import { Pagination } from '@/components/table/Pagination';
import TableWrapper from '@/components/TableWrapper';

import { ROUTES } from '@/config/routes';

interface MatchesViewProps {
  data: any[];
  metadata?: Pagination;
}

export default function MatchesView({ data, metadata }: MatchesViewProps) {
  const columns = useColumnData();

  const handlePaginationChange = (pagination: PaginationState) => {
    console.log(pagination);
  };

  return (
    <TableWrapper url={`${ROUTES.EDIT_MATCH}/add`}>
      <Table
        columnsData={columns}
        tableData={data}
        onPaginationChange={handlePaginationChange}
        pagination={metadata}
      />
    </TableWrapper>
  );
}
