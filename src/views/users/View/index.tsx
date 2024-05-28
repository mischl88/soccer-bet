'use client';
import { PaginationState } from '@tanstack/table-core';

import { useColumnData } from '@/views/users/useColumnData';

import Table from '@/components/table/Table';
import { Pagination } from '@/components/table/Pagination';
import TableWrapper from '@/components/TableWrapper';

import { ROUTES } from '@/config/routes';

interface UsersViewProps {
  data: any[];
  metadata?: Pagination;
}

export default function UsersView({ data, metadata }: UsersViewProps) {
  const columns = useColumnData();

  const handlePaginationChange = (pagination: PaginationState) => {
    console.log(pagination);
  };

  return (
    <TableWrapper url={`${ROUTES.EDIT_USER}/add`}>
      <Table
        columnsData={columns}
        tableData={data}
        onPaginationChange={handlePaginationChange}
        pagination={metadata}
      />
    </TableWrapper>
  );
}
