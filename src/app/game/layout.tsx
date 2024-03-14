import React from 'react';
import { Navbar } from '@/lib/features/Game/components/index.ts';
import styles from '@/styles/layout.module.css';
import './page.css';

export default function GameLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={styles.main}>
      <Navbar />
      {children}
    </main>
  );
}
