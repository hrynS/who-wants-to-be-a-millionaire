import React from 'react';
import { Navbar } from '@/lib/components/index.ts';
import styles from '@/styles/layout.module.css';
export default function GameLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={styles.main}>
        <Navbar/>
        {children}
      </main>
  );
}
