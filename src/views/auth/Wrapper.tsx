import { PropsWithChildren } from 'react';

import clsx from 'clsx';

interface WrapperProps extends PropsWithChildren {
  header: string;
  subHeader?: string;
}

export default function Wrapper({ header, subHeader, children }: WrapperProps) {
  return (
    <div className="rounded-sm w-full border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
        <h2
          className={clsx(
            'text-2xl font-bold text-black dark:text-white sm:text-title-xl2',
            { 'mb-9': !subHeader },
          )}
        >
          {header}
        </h2>
        {subHeader && <p className="mb-9">{subHeader}</p>}
        {children}
      </div>
    </div>
  );
}
