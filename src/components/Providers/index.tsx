'use client';

import { usePathname, useRouter } from 'next/navigation';

import { PropsWithChildren, useEffect, useState } from 'react';

import { Amplify, Auth } from 'aws-amplify';

import { SidebarContext } from '@/contexts/Sidebar';
import { AuthContext, AuthContextType } from '@/contexts/Auth';

import awsConfig from './../../aws-exports';

import { ROUTES } from '@/config/routes';

Amplify.configure(awsConfig);
Auth.configure(awsConfig);

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
  const [user, setUser] = useState<AuthContextType['user'] | null>(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        const currentUser = await Auth.currentAuthenticatedUser();
        if (currentUser) {
          setUser(currentUser);
          pathname.includes('auth') && push('/');
        }
      } catch {
        if (redirectOnMissingUser) {
          push(ROUTES.SIGN_IN);
        }
      }
    };
    getUser();
  }, [redirectOnMissingUser, pathname, push]);

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
