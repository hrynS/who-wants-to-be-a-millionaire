'use client';

import React from 'react';
import { Greeting } from '@/lib/components/index.ts';
import layoutStyles from '@/styles/layout.module.css';
import { moneyFormatter } from '@/lib/utils/index.ts';
import { useAppSelector } from '@/lib/store/hooks.ts';
import { totalRewardSelector } from '@/lib/features/Game/selectors/index.ts';
import styles from './page.module.css';

export default function GameOver() {
  const totalReward = useAppSelector(totalRewardSelector);

  return (
    <div className={layoutStyles.wrapper}>
      <main className={layoutStyles.main}>
        <div className={styles.container}>
          <Greeting
            summaryText="Total score:"
            headingText={`${moneyFormatter(totalReward)} earned`}
            buttonProps={{
              label: 'Try again',
              href: '/game',
            }}
          />
        </div>
      </main>
    </div>
  );
}
