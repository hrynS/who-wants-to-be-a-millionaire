export const sortByNumberValue = (list: Array<string>) => {
  return list.sort((a, b) => Number(b) - Number(a));
};

export const isServerSide = () => typeof window === 'undefined';

export { default as moneyFormatter } from './formatters.ts';
