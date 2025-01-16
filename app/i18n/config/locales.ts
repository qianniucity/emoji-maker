export const locales = ['en', 'zh'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export const localeNames = {
  en: 'English',
  zh: '中文',
} as const;

export const localeConfigs = {
  en: {
    name: 'English',
    flag: '🇺🇸',
    direction: 'ltr',
  },
  zh: {
    name: '中文',
    flag: '🇨🇳',
    direction: 'ltr',
  },
} as const; 