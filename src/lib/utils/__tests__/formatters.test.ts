import { describe, expect, it } from '@jest/globals';
import moneyFormatter from '../formatters.ts';

describe('formatters', () => {
  describe('moneyFormatter', () => {
    it('formats positive numbers correctly', () => {
      expect(moneyFormatter(1234)).toMatch(/^\$\d,\d{3}$/);
    });

    it('formats negative numbers correctly', () => {
      expect(moneyFormatter(-1234)).toMatch(/^-?\$\d,\d{3}$/);
    });

    it('handles zero correctly', () => {
      expect(moneyFormatter(0)).toBe('$0');
    });

    it('rounds fractional numbers correctly', () => {
      expect(moneyFormatter(1234.56)).toBe('$1,235');
    });
  });
});
