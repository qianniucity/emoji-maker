'use client';

import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';

// 获取消息的函数
async function getMessages(locale: string) {
  try {
    return (await import(`@/app/i18n/locales/${locale}.json`)).default;
  } catch {
    notFound();
  }
}

export default function IntlProvider({
  children,
  locale,
  messages
}: {
  children: React.ReactNode;
  locale: string;
  messages: Record<string, any>;
}) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
} 