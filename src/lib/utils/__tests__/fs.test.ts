import fs from 'fs/promises';
import path from 'path';
import { describe, expect, it } from '@jest/globals';
import loadJsonFile from '../fs.ts';

jest.mock('fs/promises');
jest.mock('path', () => ({
  ...jest.requireActual('path'),
  resolve: jest.fn(),
}));

describe('fs utils', () => {
  describe('loadJsonFile', () => {
    it('loads and parses JSON file correctly', async () => {
      const mockJsonData = { key: 'value' };
      (fs.readFile as jest.Mock).mockResolvedValue(
        JSON.stringify(mockJsonData),
      );
      (path.resolve as jest.Mock).mockReturnValue('mock/path/to/file.json');

      await expect(loadJsonFile('file.json')).resolves.toEqual(mockJsonData);
    });

    it('throws an error if the file cannot be read', async () => {
      (fs.readFile as jest.Mock).mockRejectedValue(
        new Error('Failed to read file'),
      );
      (path.resolve as jest.Mock).mockReturnValue('mock/path/to/file.json');

      await expect(loadJsonFile('file.json')).rejects.toThrow(
        'Failed to read file',
      );
    });
  });
});
