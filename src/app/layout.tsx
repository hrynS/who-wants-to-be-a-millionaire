import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import StoreProvider from '@/lib/containers/StoreProvider.tsx';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Who wants to be a millionaire?',
  description: 'Challenge yourself and win 1 million dollars',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
