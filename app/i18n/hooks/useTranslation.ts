'use client';

import { useLocale, useTranslations } from 'next-intl';

export function useTranslation() {
  const locale = useLocale();
  const t = useTranslations();
  
  return { t, locale };
} 