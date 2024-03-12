import { PayloadAction } from '@reduxjs/toolkit';import {
  GameConfig,
} from "./game.ts";

export type SetLevel = PayloadAction<number>;

export interface GameState {
  currentLevel: number;
  questions: GameConfig['questions'];
}