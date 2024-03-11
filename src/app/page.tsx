import React from 'react';
import { Greeting } from '@/lib/components/index.ts';
import styles from './page.module.css';

export default function Home() {
  return (
      <main className={styles.main}>
    <div className={styles.container}>
        <Greeting
        headingText="Who wants to be a millionaire?"
        buttonProps={{
          label: 'Start',
          href: '/game',
        }}
      />
    </div>
      </main>
  );
}
