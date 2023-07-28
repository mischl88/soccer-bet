import { ReactNode } from "react";

import { DM_Sans } from "next/font/google";

import AuthTemplate from "@/layouts/AuthLayout";

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

export default function AuthLayout({
                                     children,
                                   }: {
  children: ReactNode
}) {
  return (
    <html lang="en">
    <body className={dMSans.className}>
    <Providers>
      <AuthTemplate illustrationBackground={'/img/istockphoto-1305369487-1024x1024.jpg'}>
        {children}
      </AuthTemplate>
    </Providers>
    </body>
    </html>
  );
}
