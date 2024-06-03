'use client';

import { PropsWithChildren } from 'react';
import { ToastContainer } from 'react-toastify';

interface AuthLayoutProps extends PropsWithChildren {}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
      <div className="flex h-screen overflow-hidden">
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <main className="h-full flex justify-center items-center">
            <div className="max-w-2xl basis-full">{children}</div>
          </main>
        </div>
      </div>
      <ToastContainer position="top-center" />
    </div>
  );
}
