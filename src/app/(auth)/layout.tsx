import { ReactNode } from 'react';

import { DM_Sans } from 'next/font/google';

import AuthTemplate from '@/layouts/AuthLayout';

import Providers from '@/components/Providers';

import 'react-toastify/dist/ReactToastify.min.css';
import '@/styles/App.css';

const dMSans = DM_Sans({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['400', '500', '700'],
});

export const metadata = {
  title: 'SoccerBet',
  description: 'SoccerBet App',
};

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={dMSans.className}>
        <Providers>
          <AuthTemplate>{children}</AuthTemplate>
        </Providers>
      </body>
    </html>
  );
}
