'use client';
import { useRouter } from 'next/navigation';

import { PropsWithChildren } from 'react';

import Button from '@/components/Button';

export default function Wrapper({ children }: PropsWithChildren) {
  const router = useRouter();

  return (
    <div className="flex flex-col p-6.5 gap-y-4 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      {children}
      <div className="flex flex-between">
        <Button type="button" onClick={() => router.back()} label="Back" />
        <Button label="Save" />
      </div>
    </div>
  );
}
