'use client';

import React from 'react';
import { Button } from '@/lib/components/index.ts';
import styles from './AnswerButton.module.css';
import useAnswerAction from '@/lib/features/Game/hooks/useAnswerAction.ts';
import { AnswerOption } from '@/lib/features/Game/types/game.ts';
import { useAppSelector } from "@/lib/store/hooks.ts";
import { currentQuestionSelector, shouldShowAnswersSelector } from "@/lib/features/Game/selectors.ts";
import classes from "@/lib/utils/styles.ts";

interface AnswerButtonProps {
  option: AnswerOption;
  text: string;
}

export default function AnswerButton({ option, text }: AnswerButtonProps) {
  const { onAnswer } = useAnswerAction();
  const currentQuestion = useAppSelector(currentQuestionSelector);
  const shouldShowAnswers = useAppSelector(shouldShowAnswersSelector);

  const answerClass =  option === currentQuestion.correctAnswer ? styles.answerButtonCorrect : styles.answerButtonWrong;
  return (
    <li className={styles.answerButtonItem}>
      <Button
        className={classes(styles.answerButton, shouldShowAnswers ? answerClass : undefined)}
        startAdornment={option}
        onClick={() => onAnswer(option)}
      >
        {text}
      </Button>
    </li>
  );
}
