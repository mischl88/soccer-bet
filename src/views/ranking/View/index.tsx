"use client";
import { PaginationState } from "@tanstack/table-core";

import { useColumnData } from "@/views/ranking/useColumnData";

import Table from "@/components/table/Table";
import { Pagination } from "@/components/table/Pagination";

interface RankingViewProps {
  data: any[];
  metadata?: Pagination;
}

export default function RankingView({ data, metadata }: RankingViewProps) {
  const columns = useColumnData();

  const handlePaginationChange = (pagination: PaginationState) => {
    console.log(pagination);
  };

  return (
    <>
      <Table columnsData={columns} tableData={data} onPaginationChange={handlePaginationChange}
             pagination={metadata} />
    </>
  );
}
