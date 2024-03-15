import React from 'react';
import GameConfigRepository from '@/lib/repositories/GameConfigRepository.ts';
import Game from '@/lib/features/Game/components/Game/Game.tsx';

const getGameConfig = async () => {
  return GameConfigRepository.getGameConfig();
};

export default async function GamePage() {
  const { levels, questions } = await getGameConfig();

  return <Game levels={levels} questions={questions} />;
}
