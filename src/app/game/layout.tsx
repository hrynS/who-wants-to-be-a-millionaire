import React from 'react';
import { Navbar } from '@/lib/features/Game/components/index.ts';
import styles from '@/styles/layout.module.css';

export default function GameLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.wrapper}>
      <main className={styles.main}>
        <Navbar />
        {children}
      </main>
    </div>
  );
}
