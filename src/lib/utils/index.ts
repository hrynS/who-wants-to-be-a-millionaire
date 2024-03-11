import { DEFAULT_CURRENCY, DEFAULT_LOCALE } from "@/lib/contants.ts";

export const moneyFormatter = (num: number) => {
    const formatter = new Intl.NumberFormat(DEFAULT_LOCALE, {
        style: 'currency',
        currency: DEFAULT_CURRENCY,
        maximumFractionDigits: 0,
    });

    return formatter.format(num);
}

export const sortByNumberValue = (list: Array<string>) => {
    return list.sort((a, b) => Number(b) - Number(a));
}

export { default as loadJsonFile} from './fs.ts';