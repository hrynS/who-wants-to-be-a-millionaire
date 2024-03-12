import React from 'react';
import { Navbar } from "@/lib/components/index.ts";
import styles from '@/styles/layout.module.css';
import StoreProvider from "@/lib/containers/StoreProvider.tsx";

export default function GameLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
    <main className={styles.main}>
        <Navbar/>
        {children}
    </main>
    </StoreProvider>
  );
}
