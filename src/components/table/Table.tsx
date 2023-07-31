import { useMemo } from "react";

import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import {
  Flex,
  Table as TableComponent,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import { PaginationState, OnChangeFn } from "@tanstack/table-core";

import Pagination, { Pagination as IPagination } from "@/components/table/Pagination";

interface TableProps<T extends object> {
  columnsData: ColumnDef<T>[];
  tableData: T[];
  onPaginationChange?: (pagination: PaginationState) => void;
  pagination?: IPagination;
}

export default function Table<T extends object>({
                                                  columnsData,
                                                  tableData,
                                                  onPaginationChange,
                                                  pagination,
                                                }: TableProps<T>) {
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.100");

  const columns = useMemo(() => columnsData, [columnsData]);
  const data = useMemo(() => tableData ?? [], [tableData]);
  const handlePaginationChange: OnChangeFn<PaginationState> = (pagination) => {
    onPaginationChange && onPaginationChange(pagination as unknown as PaginationState)
  }

  const table = useReactTable(
    {
      data,
      columns,
      pageCount: pagination?.totalPages ?? -1,
      state: {
        pagination: pagination ? {
          pageSize: pagination.limit,
          pageIndex: pagination.page,
        } : undefined,
      },
      onPaginationChange: handlePaginationChange,
      getCoreRowModel: getCoreRowModel(),
      manualPagination: true,
      debugTable: true,
    },
  );

  return (
    <>
      <TableComponent variant="simple" color="gray.500" mb="24px">
        <Thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <Tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <Th key={header.id} pe="10px"
                      borderColor={borderColor}>
                    {header.isPlaceholder ? null : (
                      <Flex
                        justify="space-between"
                        align="center"
                        fontSize={{ sm: "10px", lg: "12px" }}
                        color="gray.400"
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                      </Flex>
                    )}
                  </Th>
                );
              })}
            </Tr>
          ))}
        </Thead>
        <Tbody>
          {table.getRowModel().rows.map((row) => {
            return (
              <Tr key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  return (
                    <Td key={cell.id} fontSize={{ sm: "14px" }}
                        minW={{ sm: "150px", md: "200px", lg: "auto" }}
                        borderColor="transparent">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </Td>
                  );
                })}
              </Tr>
            );
          })}
        </Tbody>
      </TableComponent>
      {pagination &&
        <Pagination limit={table.getState().pagination.pageSize} onPageChange={table.setPageIndex}
                    pagination={pagination} onPageLimitChange={table.setPageSize}
                    hasNextPage={table.getCanNextPage()}
                    hasPreviousPage={table.getCanPreviousPage()} />}
    </>
  );
}
