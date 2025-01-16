'use client';

import { useRouter, usePathname } from 'next/navigation';
import { Button } from './button';
import { Globe } from 'lucide-react';
import { locales, localeMetadata } from '@/app/i18n/config/locales';
import { useTranslation } from '@/app/i18n/hooks/useTranslation';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./dropdown-menu";

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const { locale: currentLocale } = useTranslation();

  const switchLanguage = (locale: string) => {
    const newPath = pathname.replace(`/${currentLocale}`, `/${locale}`);
    router.push(newPath);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Globe className="h-5 w-5" />
          <span className="sr-only">Switch language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {locales.map((locale) => (
          <DropdownMenuItem
            key={locale}
            onClick={() => switchLanguage(locale)}
            className={locale === currentLocale ? 'bg-primary/10' : ''}
          >
            <span className="mr-2">{localeMetadata[locale].icon}</span>
            {localeMetadata[locale].localName}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}