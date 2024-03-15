'use client';

import styles from '@/lib/features/Game/components/Game/Game.module.css';
import { AnswerButton, Sidebar } from '@/lib/features/Game/components/index.ts';
import React from 'react';
import { useAppSelector } from '@/lib/store/hooks.ts';
import { currentLevelSelector } from '@/lib/features/Game/selectors/index.ts';
import useAnswerAction from '@/lib/features/Game/hooks/useAnswerAction.ts';
import { GameConfig } from '@/lib/features/Game/types/game.ts';

interface GameProps {
  questions: GameConfig['questions'];
  levels: GameConfig['levels'];
}

const Game = ({ levels, questions }: GameProps) => {
  const currentLevel = useAppSelector(currentLevelSelector);
  const currentQuestion = questions[currentLevel];

  const { onAnswer } = useAnswerAction(levels, currentQuestion);

  if (!currentQuestion) return null;

  const { question, answers } = currentQuestion;

  return (
    <div className={styles.container}>
      <div className={styles.quizContainer}>
        <h2>{question}</h2>
        <ul className={styles.answers}>
          {answers &&
            answers.map(({ option, text }) => (
              <AnswerButton
                key={option}
                option={option}
                text={text}
                onAnswer={onAnswer}
                currentQuestion={currentQuestion}
              />
            ))}
        </ul>
      </div>
      <Sidebar levels={levels} />
    </div>
  );
};

export default Game;
