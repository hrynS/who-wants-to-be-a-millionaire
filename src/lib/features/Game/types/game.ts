export type Level = number;

export type AnswerOption = 'A' | 'B' | 'C' | 'D';

export interface QuestionAnswer {
  option: AnswerOption;
  text: string;
}

export interface GameLevel {
  reward: number;
}

export interface Question {
  id: string;
  level: Level;
  question: string;
  answers: QuestionAnswer[];
  correctAnswers: AnswerOption[];
}

export interface GameConfig {
  levels: {
    [K: Level]: GameLevel;
  };
  questions: {
    [K: Level]: Question;
  };
}
