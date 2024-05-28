import { MouseEvent } from 'react';

import clsx from 'clsx';

import { useSidebarContext } from '@/contexts/Sidebar';

const HamburgerButton = () => {
  const { sidebarOpen, setSidebarOpen } = useSidebarContext();

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <button
      aria-controls="sidebar"
      onClick={handleClick}
      className="z-99999 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden"
    >
      <span className="relative block h-5.5 w-5.5 cursor-pointer">
        <span className="du-block absolute right-0 h-full w-full">
          <span
            className={clsx(
              'relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white',
              {
                '!w-full delay-300': !sidebarOpen,
              },
            )}
          />
          <span
            className={clsx(
              'relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white',
              {
                'delay-400 !w-full': !sidebarOpen,
              },
            )}
          />
          <span
            className={clsx(
              'relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white',
              {
                '!w-full delay-500': !sidebarOpen,
              },
            )}
          />
        </span>
        <span className="absolute right-0 h-full w-full rotate-45">
          <span
            className={clsx(
              'absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white',
              {
                '!h-0 !delay-[0]': !sidebarOpen,
              },
            )}
          />
          <span
            className={clsx(
              'delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white',
              {
                '!h-0 !delay-200': !sidebarOpen,
              },
            )}
          />
        </span>
      </span>
    </button>
  );
};

export default HamburgerButton;
