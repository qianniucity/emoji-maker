'use client';

import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';

// 获取消息的函数
async function getMessages(locale: string) {
  try {
    return (await import(`@/app/i18n/locales/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
}

export default async function IntlProvider({
  children,
  locale
}: {
  children: React.ReactNode;
  locale: string;
}) {
  const messages = await getMessages(locale);
  
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
} 