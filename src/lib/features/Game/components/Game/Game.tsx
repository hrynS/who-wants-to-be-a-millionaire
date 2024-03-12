'use client';

import styles from "@/lib/features/Game/components/Game/Game.module.css";
import { AnswerButton, Sidebar } from "@/lib/features/Game/components/index.ts";
import React from "react";
import { useAppSelector } from "@/lib/store/hooks.ts";
import { currentQuestionSelector } from "@/lib/features/Game/selectors.ts";
import useAnswerAction from "@/lib/features/Game/hooks/useAnswerAction.ts";

const Game = () => {
  const currentQuestion = useAppSelector(currentQuestionSelector);
  const { question, answers } = currentQuestion;

  const { onAnswer } = useAnswerAction();

  return <div className={styles.container}>
    <div className={styles.quizContainer}>
      <h2>{question}</h2>
      <ul className={styles.answers}>
        {answers.map(({ option, text }) => (
          <AnswerButton key={option} option={option} text={text} onAnswer={onAnswer} />
        ))}
      </ul>
    </div>
    <Sidebar />
  </div>
}

export default Game;