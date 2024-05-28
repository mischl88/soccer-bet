import Link from 'next/link';

import { PropsWithChildren } from 'react';

interface CustomLinkProps extends PropsWithChildren {
  href: string;
  className?: string;
}

export default function CustomLink({
  href,
  className,
  children,
}: CustomLinkProps) {
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
