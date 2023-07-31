import { useMemo } from "react";

import { ColumnDef } from "@tanstack/react-table";

type RankingItem = {
  username: string;
  points: number;
};

export const useColumnData = () => {
  return useMemo<ColumnDef<RankingItem>[]>(
    () =>
      [
        {
          accessorKey: "username",
          header: "Username",
          id: "username",
          cell: info => info.getValue(),
        },
        {
          accessorKey: "points",
          header: "Points",
          id: "points",
          cell: info => info.getValue(),
        },
      ],
    [],
  );
};
