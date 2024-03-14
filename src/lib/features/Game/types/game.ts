export type Level = number;

export type AnswerOption = 'A' | 'B' | 'C' | 'D';

export interface QuestionAnswer {
  option: AnswerOption;
  text: string;
}

export interface GameLevel {
  level: Level;
  reward: number;
}

export interface Question {
  id: string;
  level: Level;
  question: string;
  answers: QuestionAnswer[];
  correctAnswer: AnswerOption;
}

export interface GameConfig {
  levels: GameLevel[];
  questions: {
    [K: Level]: Question;
  };
}
