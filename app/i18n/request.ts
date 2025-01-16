import { getRequestConfig } from 'next-intl/server';
import { locales } from './config/locales';

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) {
    return {
      messages: (await import(`./locales/en.json`)).default
    };
  }

  return {
    messages: (await import(`./locales/${locale}.json`)).default
  };
}); 