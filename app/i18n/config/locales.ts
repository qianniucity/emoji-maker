export const locales = ['en', 'zh'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export const localeMetadata = {
  en: {
    name: 'English',
    localName: 'English',
    lang: 'en-US',
    dateFormat: 'MM/DD/YYYY',
    timeFormat: 'hh:mm A',
    direction: 'ltr',
    icon: '🇺🇸',
    numberFormat: {
      currency: 'USD',
      currencyDisplay: '$',
      minimumFractionDigits: 2,
    },
    seo: {
      keywords: [
        'emoji maker',
        'ai emoji generator',
        'custom emoji creation',
        'digital stickers',
      ],
      market: 'Global',
      regionCode: 'US',
    },
  },
  zh: {
    name: 'Chinese',
    localName: '中文',
    lang: 'zh-CN',
    dateFormat: 'YYYY-MM-DD',
    timeFormat: 'HH:mm',
    direction: 'ltr',
    icon: '🇨🇳',
    numberFormat: {
      currency: 'CNY',
      currencyDisplay: '¥',
      minimumFractionDigits: 2,
    },
    seo: {
      keywords: [
        '表情制作器',
        'AI表情生成',
        '自定义表情',
        '数字贴纸',
      ],
      market: 'China',
      regionCode: 'CN',
    },
  },
} as const;

export type LocaleMetadata = typeof localeMetadata; 