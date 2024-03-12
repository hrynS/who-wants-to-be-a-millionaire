import React from 'react';
import GameConfigRepository from "@/lib/repositories/GameConfigRepository.ts";
import StoreProvider from "@/lib/containers/StoreProvider.tsx";
import { initialState } from "@/lib/features/Game/slice.ts";
import Game from "@/lib/features/Game/components/Game/Game.tsx";

const getGameConfig = async () => {
  return GameConfigRepository.getGameConfig();
}

export default async function GamePage() {
  const { levels, questions } = await getGameConfig();


  return (
    <StoreProvider preloadedState={{game: {...initialState, levels, questions}}}>
    <Game/>
    </StoreProvider>
  );
}
