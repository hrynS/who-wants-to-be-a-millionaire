import { PayloadAction } from '@reduxjs/toolkit';
import { GameConfig } from './game.ts';

export type SetLevel = PayloadAction<number>;

export type SetShouldShowAnswers = PayloadAction<boolean>;

export interface GameState {
  currentLevel: number;
  shouldShowAnswers: boolean;
  questions: GameConfig['questions'];
}
