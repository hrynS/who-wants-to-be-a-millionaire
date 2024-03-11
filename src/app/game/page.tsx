import React from 'react';
import { AnswerButton, Sidebar } from '@/lib/features/Game/components/index.ts';
import styles from './page.module.css';
import GameConfigRepository from "@/lib/repositories/GameConfigRepository.ts";

const getGameConfig = async () => {
  return GameConfigRepository.getGameConfig();
}

export default async function Game() {
  const { levels, questions } = await getGameConfig();
  const currentQuestion = questions[1];
  const {  question, answers} = currentQuestion;

  return (
    <div className={styles.container}>
      <div className={styles.quizContainer}>
        <h2>
          {question}
        </h2>
        <ul className={styles.answers}>
          {answers.map(({ option, text}) => <AnswerButton key={option} option={option} text={text} />)}
        </ul>
      </div>
        <Sidebar levels={levels}/>
    </div>
  );
}
