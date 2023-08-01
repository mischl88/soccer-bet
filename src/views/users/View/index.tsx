"use client";
import { PaginationState } from "@tanstack/table-core";
import { Flex } from "@chakra-ui/react";

import { useColumnData } from "@/views/users/useColumnData";

import Table from "@/components/table/Table";
import { Pagination } from "@/components/table/Pagination";
import CustomLink from "@/components/customLink";

import { ROUTES } from "@/config/routes";

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
    <>
      <Flex justifyContent="flex-end" mb="15px" mr="30px">
        <CustomLink href={`${ROUTES.EDIT_USER}/add`}>Add User</CustomLink>
      </Flex>
      <Table columnsData={columns} tableData={data} onPaginationChange={handlePaginationChange}
             pagination={metadata} />
    </>
  );
}
