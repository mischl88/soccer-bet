import Link, { LinkProps } from 'next/link';

import { PropsWithChildren } from 'react';

import clsx from 'clsx';
import { Icon } from '@iconify/react';

interface MenuItemProps extends PropsWithChildren {
  label: string;
  icon?: string;
  isActive?: boolean;
  href: LinkProps['href'];
}

const MenuItem = ({ label, icon, href, isActive }: MenuItemProps) => {
  return (
    <li>
      <Link
        href={href}
        className={clsx(
          'group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4',
          {
            'bg-graydark dark:bg-meta-4': isActive,
          },
        )}
      >
        {icon && <Icon fontSize={22} icon={icon} />}
        {label}
      </Link>
    </li>
  );
};

export default MenuItem;
