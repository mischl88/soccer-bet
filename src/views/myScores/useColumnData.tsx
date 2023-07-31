import { useMemo } from "react";

import { ColumnDef } from "@tanstack/react-table";
import { IoCreateOutline } from "react-icons/io5";
import { Icon } from "@chakra-ui/react";

import CustomLink from "@/components/customLink";

import { ROUTES } from "@/config/routes";

type MyScore = {
  id: number;
  matchDate: string;
  teamHome: string;
  teamAway: string;
  score: string;
  result: string;
};

export const useColumnData = () => {
  return useMemo<ColumnDef<MyScore>[]>(
    () =>
      [
        {
          accessorKey: "id",
          header: "ID",
          id: "id",
          cell: info => info.getValue(),
        },
        {
          accessorKey: "matchDate",
          header: "Match Date",
          id: "matchDate",
          cell: info => info.getValue(),
        },
        {
          accessorKey: "teamHome",
          header: "Team Home",
          id: "teamHome",
          cell: info => info.getValue(),
        },
        {
          accessorKey: "teamAway",
          header: "Team Away",
          id: "teamAway",
          cell: info => info.getValue(),
        },
        {
          accessorKey: "result",
          header: "Result",
          id: "result",
          cell: info => info.getValue() ?? "-",
        },
        {
          header: "Actions",
          id: "actions",
          cell: (info) => (
            <CustomLink href={`${ROUTES.EDIT_SCORE}/${info.row.original.id}`}><Icon
              as={IoCreateOutline} /></CustomLink>
          ),
        },
      ],
    [],
  );
};
