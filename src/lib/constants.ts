export const LOCALE_TO_CURRENCY: Record<string, string> = {
  'en-US': 'USD',
};

export const DEFAULT_LOCALE = process.env.LOCALE || 'en-US';

export const DEFAULT_CURRENCY = LOCALE_TO_CURRENCY[DEFAULT_LOCALE] ?? 'USD';

export const DEFAULT_START_LEVEL = 1;

export const GAME_OVER_URL = '/game-over';
