import { ReactNode } from 'react';

import { DM_Sans } from 'next/font/google';

import MainLayout from '@/layouts/MainLayout';

import Providers from '@/components/Providers';

import '@/styles/App.css';
import '@/styles/DateTimePicker.css';

const dMSans = DM_Sans({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['400', '500', '700'],
});

export const metadata = {
  title: 'SoccerBet',
  description: 'SoccerBet App',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={dMSans.className}>
        <Providers redirectOnMissingUser>
          <MainLayout>{children}</MainLayout>
        </Providers>
      </body>
    </html>
  );
}
