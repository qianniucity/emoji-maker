import type { locales } from './locales';

export type Locale = typeof locales[number];

export type Messages = {
  common: {
    title: string;
    description: string;
  };
  nav: {
    home: string;
    about: string;
    services: string;
  };
  emoji: {
    generate: string;
    download: string;
    like: string;
    share: string;
  };
};

export async function loadMessages(locale: Locale): Promise<Messages> {
  try {
    return (await import(`../locales/${locale}.json`)).default;
  } catch (error) {
    console.error(`Failed to load messages for locale: ${locale}`, error);
    return (await import(`../locales/en.json`)).default;
  }
} 