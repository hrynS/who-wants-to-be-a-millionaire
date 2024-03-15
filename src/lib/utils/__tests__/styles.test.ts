import { describe, expect, it } from '@jest/globals';
import classes from '../styles.ts';

describe('styles utils', () => {
  describe('classes', () => {
    it('joins class names with a space', () => {
      expect(classes('class1', 'class2')).toBe('class1 class2');
    });

    it('omits undefined values', () => {
      expect(classes('class1', undefined, 'class2')).toBe('class1  class2');
    });

    it('returns an empty string when no classes are provided', () => {
      expect(classes()).toBe('');
    });
  });
});
