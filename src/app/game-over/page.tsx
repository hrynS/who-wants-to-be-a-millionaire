'use client';

import React from 'react';
import { Greeting } from '@/lib/components/index.ts';
import layoutStyles from '@/styles/layout.module.css';
import styles from './page.module.css';
import { moneyFormatter } from '@/lib/utils';
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks.ts';
import { totalRewardSelector } from '@/lib/features/Game/selectors.ts';
import { resetGame } from '@/lib/features/Game/slice.ts';

// TODO: add appropriate background color
export default function GameOver() {
  const totalReward = useAppSelector(totalRewardSelector);
  const dispatch = useAppDispatch();

  return (
    <main className={layoutStyles.main}>
      <div className={styles.container}>
        <Greeting
          summaryText="Total score:"
          // TODO: get reward amount from state
          headingText={`${moneyFormatter(totalReward)} earned`}
          buttonProps={{
            label: 'Try again',
            href: '/game',
            onClick: () => {
              dispatch(resetGame());
            },
          }}
        />
      </div>
    </main>
  );
}
