import { ReactNode } from "react";

import { DM_Sans } from "next/font/google";

import DefaultLayout from "@/layouts/DefaultLayout";

import Providers from "@/components/providers";

import "@/styles/App.css";

const dMSans = DM_Sans({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "SoccerBet",
  description: "SoccerBet App",
};

export default function RootLayout({
                                     children,
                                   }: {
  children: ReactNode
}) {
  return (
    <html lang="en">
    <body className={dMSans.className}>
    <Providers>
      <DefaultLayout>
        {children}
      </DefaultLayout>
    </Providers>
    </body>
    </html>
  );
}
