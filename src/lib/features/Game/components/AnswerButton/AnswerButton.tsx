import React from 'react';
import { Button } from '@/lib/components/index.ts';
import styles from './AnswerButton.module.css';
import { AnswerOption, Question } from "@/lib/features/Game/types/game.ts";
import { useAppSelector } from '@/lib/store/hooks.ts';
import { shouldShowAnswersSelector } from '@/lib/features/Game/selectors.ts';
import classes from '@/lib/utils/styles.ts';
import PolygonButtonIcon from '../../../../../../public/polygon-button.svg';

interface AnswerButtonProps {
  option: AnswerOption;
  text: string;
  onAnswer: (arg0: AnswerOption) => void;
  currentQuestion: Question;
}

export default function AnswerButton({
  option,
  text,
  onAnswer,
  currentQuestion,
}: AnswerButtonProps) {
  const shouldShowAnswers = useAppSelector(shouldShowAnswersSelector);

  const answerClass =
    option === currentQuestion.correctAnswer
      ? styles.answerButtonCorrect
      : styles.answerButtonWrong;
  return (
    <li className={styles.answerButtonItem}>
      <Button
        className={classes(
          styles.answerButton,
          shouldShowAnswers ? answerClass : undefined,
        )}
        startAdornment={option}
        onClick={() => onAnswer(option)}
      >
        <PolygonButtonIcon className={styles.polygonSvg} />
        {text}
      </Button>
    </li>
  );
}
