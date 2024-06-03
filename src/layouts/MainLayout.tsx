'use client';

import { PropsWithChildren } from 'react';
import { ToastContainer } from 'react-toastify';

import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

import routes from '@/config/routes';

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
      <div className="flex h-screen overflow-hidden">
        <Sidebar routes={routes} />

        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <Header />

          <main className="h-full">
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10 h-full">
              {children}
            </div>
          </main>
        </div>
      </div>
      <ToastContainer position="top-center" />
    </div>
  );
}
