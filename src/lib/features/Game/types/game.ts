export type GameLevel = string;

export type AnswerOption = 'A' | 'B' | 'C' | 'D';

export interface QuestionAnswer {
  option: AnswerOption;
  text: string;
}

export interface Level {
  reward: number;
}

export interface Question {
  id: string;
  level: GameLevel;
  question: string;
  answers: QuestionAnswer[];
  correctAnswer: AnswerOption;
}

export interface GameConfig {
  levels: {
    [K: GameLevel]: Level;
  };
  questions: {
    [K: GameLevel]: Question;
  };
}
