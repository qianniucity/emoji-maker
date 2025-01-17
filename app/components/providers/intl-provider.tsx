'use client';

import { NextIntlClientProvider, AbstractIntlMessages } from 'next-intl';

interface IntlProviderProps {
  children: React.ReactNode;
  locale: string;
  messages: AbstractIntlMessages;
}

export default function IntlProvider({
  children,
  locale,
  messages
}: IntlProviderProps) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
} 