import React from 'react';
import { Greeting } from '@/lib/components/index.ts';
import layoutStyles from '@/styles/layout.module.css';
import styles from './page.module.css';

// TODO: add appropriate background color
export default function GameOver() {
  return (
      <main className={layoutStyles.main}>
    <div className={styles.container}>
      <Greeting
        summaryText="Total score:"
        // TODO: get reward amount from state
        headingText="$8,000 earned"
        buttonProps={{
          label: 'Try again',
          href: '/game',
        }}
      />
    </div>
      </main>
  );
}
