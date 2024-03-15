import { GameConfig } from "@/lib/features/Game/types/game.ts";

const getLastLevel = (levels: GameConfig['levels']) => Math.max(...Object.keys(levels).map(lvl => +lvl));

export default getLastLevel;