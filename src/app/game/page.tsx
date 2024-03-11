import React from 'react';
import { AnswerButton, Sidebar } from '@/lib/features/Game/components/index.ts';
import styles from './page.module.css';

// TODO: add appropriate background color
export default function Game() {
  return (
    <div className={styles.container}>
      <div className={styles.quizContainer}>
        <h2>
          How old your elder brother was 10 years before you was born, mate?
        </h2>
        <ul className={styles.answers}>
          <AnswerButton option={'A'} text={'10 years'} />
          <AnswerButton option={'B'} text={'11 years'} />
          <AnswerButton option={'C'} text={'12 years'} />
          <AnswerButton option={'D'} text={'14 years'} />
        </ul>
      </div>
        <Sidebar/>
    </div>
  );
}
