import { useMemo } from 'react';

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { OnChangeFn, PaginationState } from '@tanstack/table-core';
import { Icon } from '@iconify/react';

import Pagination, {
  Pagination as IPagination,
} from '@/components/table/Pagination';
import Loader from '@/components/Loader';

interface TableProps<T extends object> {
  columnsData: ColumnDef<T>[];
  tableData: T[];
  isLoading?: boolean;
  onPaginationChange?: (pagination: PaginationState) => void;
  pagination?: IPagination;
}

export default function Table<T extends object>({
  columnsData,
  tableData,
  isLoading,
  onPaginationChange,
  pagination,
}: TableProps<T>) {
  const columns = useMemo(() => columnsData, [columnsData]);
  const data = useMemo(() => tableData ?? [], [tableData]);

  const handlePaginationChange: OnChangeFn<PaginationState> = (pagination) => {
    onPaginationChange &&
      onPaginationChange(pagination as unknown as PaginationState);
  };

  const table = useReactTable({
    data,
    columns,
    pageCount: pagination?.totalPages ?? -1,
    state: {
      pagination: pagination
        ? {
            pageSize: pagination.limit,
            pageIndex: pagination.page,
          }
        : undefined,
    },
    onPaginationChange: handlePaginationChange,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
    debugTable: true,
  });

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <table className="table w-full">
        <thead className="h-12">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="md:px-6 2xl:px-7.5">
              {headerGroup.headers.map((header) => {
                return (
                  <th key={header.id} className="font-medium py-3 px-2">
                    {header.isPlaceholder ? null : (
                      <div>
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                      </div>
                    )}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => {
            return (
              <tr
                key={row.id}
                className="border-t border-stroke dark:border-strokedark md:px-6 2xl:px-7.5"
              >
                {row.getVisibleCells().map((cell) => {
                  return (
                    <td key={cell.id} className="font-medium py-3 px-2">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      {!isLoading && data.length === 0 && (
        <div className="font-medium text-md my-4 flex justify-center items-center">
          <Icon icon="tabler:database-x" fontSize={30} className="mr-2" /> No
          data
        </div>
      )}
      {isLoading && <Loader size="md" className="mt-4" />}
      {pagination && (
        <Pagination
          limit={table.getState().pagination.pageSize}
          onPageChange={table.setPageIndex}
          pagination={pagination}
          onPageLimitChange={table.setPageSize}
          hasNextPage={table.getCanNextPage()}
          hasPreviousPage={table.getCanPreviousPage()}
        />
      )}
    </div>
  );
}
