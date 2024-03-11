import React from 'react';
import { Button } from '@/lib/components/index.ts';
import styles from './AnswerButton.module.css';

interface AnswerButtonProps {
  option: string;
  text: string;
}

export default function AnswerButton({ option, text }: AnswerButtonProps) {
  return (
    <li className={styles.answerButtonItem}>
      <Button className={styles.answerButton} startAdornment={option}>
        {text}
      </Button>
    </li>
  );
}
