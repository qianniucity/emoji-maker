'use client';

import { NextIntlClientProvider } from 'next-intl';
import { ReactNode } from 'react';
import { Messages } from '../config/messages';

interface I18nProviderProps {
  locale: string;
  messages: Messages;
  children: ReactNode;
}

export function I18nProvider({ locale, messages, children }: I18nProviderProps) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
} 