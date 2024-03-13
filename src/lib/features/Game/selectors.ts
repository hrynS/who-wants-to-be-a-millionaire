import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@/lib/store/index.ts';

export const gameSelector = (state: RootState) => state.game;

export const questionsSelector = createSelector(
  gameSelector,
  (game) => game.questions,
);

export const levelsSelector = createSelector(
  gameSelector,
  (game) => game.levels,
);

export const currentLevelSelector = createSelector(
  gameSelector,
  (game) => game.currentLevel,
);

export const currentQuestionSelector = createSelector(
  [questionsSelector, currentLevelSelector],
  (questions, currentLevel) => questions[currentLevel],
);

export const shouldShowAnswersSelector = createSelector(
  gameSelector,
  (game) => game.shouldShowAnswers,
);
