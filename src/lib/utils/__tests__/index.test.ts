import { describe, expect, it } from '@jest/globals';
import { sortByNumberValue, isServerSide } from '../index.ts';

describe('utils', () => {
  describe('sortByNumberValue', () => {
    it('sorts an array of strings representing numbers in descending order', () => {
      const list = ['3', '1', '4', '2'];
      expect(sortByNumberValue(list)).toEqual(['4', '3', '2', '1']);
    });

    it('handles an array with negative numbers correctly', () => {
      const list = ['-1', '-3', '-2', '0'];
      expect(sortByNumberValue(list)).toEqual(['0', '-1', '-2', '-3']);
    });

    it('returns an empty array when given an empty array', () => {
      expect(sortByNumberValue([])).toEqual([]);
    });
  });

  describe('isServerSide', () => {
    it('returns true if running on server-side', () => {
      Object.defineProperty(global, 'window', {
        value: undefined,
        writable: true,
      });
      expect(isServerSide()).toBe(true);
    });

    it('returns false if running on client-side', () => {
      Object.defineProperty(global, 'window', { value: {}, writable: true });
      expect(isServerSide()).toBe(false);
    });
  });
});
