import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { useEffect, useRef, useState } from 'react';

import clsx from 'clsx';
import { Icon } from '@iconify/react';
import { Auth } from 'aws-amplify';

import { useAuthContext } from '@/contexts/Auth';

import { ROUTES } from '@/config/routes';

const DropdownUser = () => {
  const { push } = useRouter();
  const { user } = useAuthContext();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const trigger = useRef<any>(null);
  const dropdown = useRef<any>(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!dropdown.current) {
        return;
      }
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      ) {
        return;
      }
      setDropdownOpen(false);
    };

    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ key }: KeyboardEvent) => {
      if (!dropdownOpen || key !== 'Escape') {
        return;
      }
      setDropdownOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  const handleLogout = async () => {
    await Auth.signOut();
    push(ROUTES.SIGN_IN);
  };

  return (
    <div className="relative">
      <Link
        ref={trigger}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-4"
        href="#"
      >
        <span className="hidden text-right lg:block">
          <span className="block text-sm font-medium text-black dark:text-bodydark1">
            {user?.getUsername()}
          </span>
        </span>

        <span className="h-12 w-12 rounded-full">
          <Image src="/img/user-01.png" width={48} height={48} alt="User" />
        </span>

        <Icon
          icon="iconamoon:arrow-down-2-light"
          fontSize={23}
          className={clsx({ hidden: dropdownOpen })}
        />
        <Icon
          icon="iconamoon:arrow-up-2-light"
          fontSize={23}
          className={clsx({ hidden: !dropdownOpen })}
        />
      </Link>

      {/* <!-- Dropdown Start --> */}
      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={clsx(
          'absolute right-0 mt-4 flex w-62.5 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark',
          {
            block: dropdownOpen,
            hidden: !dropdownOpen,
          },
        )}
      >
        <ul className="flex flex-col gap-5 border-b border-stroke px-6 py-7.5 dark:border-strokedark">
          <li>
            <Link
              href="/profile"
              className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
            >
              <Icon icon="tabler:user" fontSize={23} />
              My Profile
            </Link>
          </li>
          <li>
            <Link
              href="/pages/settings"
              className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
            >
              <Icon icon="tabler:settings" fontSize={23} />
              Account Settings
            </Link>
          </li>
        </ul>
        <button
          type="button"
          onClick={handleLogout}
          className="flex items-center gap-3.5 px-6 py-4 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
        >
          <Icon icon="tabler:logout-2" fontSize={23} />
          Log Out
        </button>
      </div>
      {/* <!-- Dropdown End --> */}
    </div>
  );
};

export default DropdownUser;
