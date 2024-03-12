import { DEFAULT_START_LEVEL } from '@/lib/constants.ts';
import { GameState, SetLevel, SetShouldShowAnswers } from "@/lib/features/Game/types/slice.ts";
import { createSlice } from '@reduxjs/toolkit';

const initialState: GameState = {
  currentLevel: DEFAULT_START_LEVEL,
  shouldShowAnswers: false,
  questions: {
    '1': {
      id: '11',
      level: 1,
      question:
        'Which of these chemical elements is not named after a scientist?',
      answers: [
        { option: 'A', text: 'Einsteinium' },
        { option: 'B', text: 'Curium' },
        { option: 'C', text: 'Fermium' },
        { option: 'D', text: 'Gallium' },
      ],
      correctAnswer: 'D',
    },
    '2': {
      id: '22',
      level: 2,
      question: 'What is the loudest animal on Earth?',
      answers: [
        { option: 'A', text: 'Blue whale' },
        { option: 'B', text: 'African elephant' },
        { option: 'C', text: 'Howler monkey' },
        { option: 'D', text: 'Sperm whale' },
      ],
      correctAnswer: 'D',
    },
  },
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setLevel(state: GameState, { payload: level }: SetLevel) {
      // eslint-disable-next-line no-param-reassign
      state.currentLevel = level;
      state.shouldShowAnswers = false;
    },
    setShouldShowAnswers(state: GameState, { payload: shouldShowAnswers }: SetShouldShowAnswers) {
      state.shouldShowAnswers = shouldShowAnswers;
    },
    resetGame() {
      return initialState;
    },
  },
});

export const { setLevel, setShouldShowAnswers, resetGame } = gameSlice.actions;

export const gameReducer = gameSlice.reducer;
