import { useMemo } from "react";

import { ColumnDef } from "@tanstack/react-table";
import { IoCreateOutline } from "react-icons/io5";
import { Icon } from "@chakra-ui/react";

import CustomLink from "@/components/customLink";

import { ROUTES } from "@/config/routes";

type Match = {
  id: number;
  matchDate: string;
  teamHome: string;
  teamAway: string;
  score: string;
  result: string;
};

export const useColumnData = () => {
  return useMemo<ColumnDef<Match>[]>(
    () =>
      [
        {
          accessorKey: "id",
          header: "ID",
          id: "id",
          cell: info => info.getValue(),
        },
        {
          accessorKey: "group",
          header: "Group",
          id: "group",
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
          accessorKey: "homeScore",
          header: "Home Score",
          id: "homeScore",
          cell: info => info.getValue(),
        },
        {
          accessorKey: "awayScore",
          header: "Away Score",
          id: "awayScore",
          cell: info => info.getValue(),
        },
        {
          accessorKey: "teamAway",
          header: "Team Away",
          id: "teamAway",
          cell: info => info.getValue(),
        },
        {
          header: "Actions",
          id: "actions",
          cell: (info) => (
            <CustomLink href={`${ROUTES.EDIT_MATCH}/${info.row.original.id}`}><Icon
              as={IoCreateOutline} /></CustomLink>
          ),
        },
      ],
    [],
  );
};
