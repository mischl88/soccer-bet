import { useMemo } from 'react';

import { ColumnDef } from '@tanstack/react-table';
import { Icon } from '@iconify/react';

import CustomLink from '@/components/customLink';

import { ROUTES } from '@/config/routes';

type User = {
  id: number;
  username: string;
  email: string;
  role: string;
};

export const useColumnData = () => {
  return useMemo<ColumnDef<User>[]>(
    () => [
      {
        accessorKey: 'username',
        header: 'Username',
        id: 'username',
        cell: (info) => info.getValue(),
      },
      {
        accessorKey: 'email',
        header: 'Email',
        id: 'email',
        cell: (info) => info.getValue(),
      },
      {
        accessorKey: 'role',
        header: 'Role',
        id: 'role',
        cell: (info) => info.getValue(),
      },
      {
        header: 'Actions',
        id: 'actions',
        cell: (info) => (
          <CustomLink href={`${ROUTES.EDIT_USER}/${info.row.original.id}`}>
            <Icon icon="tabler:edit" />
          </CustomLink>
        ),
      },
    ],
    [],
  );
};
