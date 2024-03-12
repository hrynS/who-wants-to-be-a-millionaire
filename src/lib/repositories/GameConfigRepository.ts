import path from 'path';
import { GameConfig } from '@/lib/features/Game/types/game.ts';
import loadJsonFile from '@/lib/utils/fs.ts';

class GameConfigRepository {
  context: string;

  constructor() {
    if (process.env.DATA_STORAGE_PATH) {
      this.context = path.join(process.cwd(), process.env.DATA_STORAGE_PATH);
    } else {
      throw new Error(
        'Please provide the environmental variable DATA_STORAGE_PATH',
      );
    }
  }

  async getGameConfig(): Promise<GameConfig> {
    try {
      return await loadJsonFile(this.context);
    } catch {
      throw new Error('An error occured while getting the questions');
    }
  }
}

const GameConfigRepositoryInstance = new GameConfigRepository();

export default GameConfigRepositoryInstance;
