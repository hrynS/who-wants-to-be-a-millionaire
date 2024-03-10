import React from 'react';
import { Greeting } from '@/lib/components/index.ts';
import styles from './page.module.css';

// TODO: add appropriate background color
export default function GameOver() {
  return (
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
  );
}
