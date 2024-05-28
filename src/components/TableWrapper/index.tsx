import { PropsWithChildren } from 'react';

import { Icon } from '@iconify/react';

import CustomLink from '@/components/customLink';

interface TableWrapperProps extends PropsWithChildren {
  url: string;
}

export default function TableWrapper({ children, url }: TableWrapperProps) {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex justify-end mb-2 mr-3">
        <CustomLink href={url} className="flex flex-row items-center gap-x-2">
          <Icon icon="tabler:plus" fontSize={22} /> Add new
        </CustomLink>
      </div>
      {children}
    </div>
  );
}
