import { PropsWithChildren } from 'react';

interface WrapperProps extends PropsWithChildren {
  header: string;
}

export default function Wrapper({ header, children }: WrapperProps) {
  return (
    <div className="rounded-sm w-full border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
        <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
          {header}
        </h2>
        {children}
      </div>
    </div>
  );
}
