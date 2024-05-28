import Link from 'next/link';
import Image from 'next/image';

import HamburgerButton from '@/components/Header/HamburgerButton';

import DropdownUser from './DropdownUser';
import DarkModeSwitcher from './DarkModeSwitcher';

const Header = () => {
  return (
    <header className="sticky top-0 z-999 flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
      <div className="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          <HamburgerButton />

          <Link className="block flex-shrink-0 lg:hidden" href="/">
            <Image src="/img/logo-icon.svg" width={32} height={32} alt="Logo" />
          </Link>
        </div>

        <h2 className="text-title-md2 font-semibold text-black dark:text-bodydark1">
          Dashboard
        </h2>

        <div className="flex items-center gap-3 2xsm:gap-7">
          <ul className="flex items-center gap-2 2xsm:gap-4">
            <DarkModeSwitcher />
          </ul>

          <DropdownUser />
        </div>
      </div>
    </header>
  );
};

export default Header;
