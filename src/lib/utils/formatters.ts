import { DEFAULT_CURRENCY, DEFAULT_LOCALE } from '@/lib/constants.ts';

const moneyFormatter = (num: number) => {
  const formatter = new Intl.NumberFormat(DEFAULT_LOCALE, {
    style: 'currency',
    currency: DEFAULT_CURRENCY,
    maximumFractionDigits: 0,
  });

  return formatter.format(num);
};

export default moneyFormatter;
