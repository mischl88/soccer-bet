'use client';

import { redirect, usePathname, useRouter } from 'next/navigation';

import { PropsWithChildren, useEffect, useState } from 'react';

import { SidebarContext } from '@/contexts/Sidebar';
import { AuthContext, User } from '@/contexts/Auth';

import Loader from '@/components/Loader';

import { useRequest } from '@/hooks/useRequest';

import API_ROUTES from '@/config/apiRoutes';
import { ROUTES } from '@/config/routes';

interface ProvidersProps extends PropsWithChildren {
  redirectOnMissingUser?: boolean;
}

export default function Providers({
  children,
  redirectOnMissingUser = false,
}: ProvidersProps) {
  const { push } = useRouter();
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  // const { data: userData, isLoading, error } = useRequest<User>(API_ROUTES.ME);
  //
  // useEffect(() => {
  //   if (!user && userData) {
  //     setUser(userData);
  //     pathname.includes('auth') && push('/');
  //   }
  // }, [userData, push, pathname, user]);
  //
  // if (!isLoading && !userData && redirectOnMissingUser) {
  //   redirect(ROUTES.SIGN_IN);
  // }

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <SidebarContext.Provider
        value={{
          sidebarOpen,
          setSidebarOpen,
        }}
      >
        {children}
      </SidebarContext.Provider>
    </AuthContext.Provider>
  );
}
