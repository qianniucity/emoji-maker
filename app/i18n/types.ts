export type LocaleType = 'en' | 'zh';

export interface TranslationMessages {
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
} 