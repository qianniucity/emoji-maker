'use client';

import { useTranslation } from "@/app/i18n/hooks/useTranslation";
import { StructuredData } from "@/app/components/structured-data";

export { runtime } from '@/app/config/runtime';

export default function Cookies() {
  const { t, locale } = useTranslation();

  return (
    <>
      <StructuredData
        locale={locale}
        type="aboutPage"
        title={t('metadata.cookies.title')}
        description={t('metadata.cookies.description')}
        dateModified={new Date().toISOString()}
      />
      <div className="min-h-[calc(100vh-4rem)] p-8 bg-background">
        <main className="prose dark:prose-invert max-w-4xl mx-auto">
          <h1>{t('cookies.title')}</h1>
          
          <p className="text-muted-foreground">
            {t('cookies.lastUpdated')}: {t('cookies.date')}
          </p>

          <section>
            <h2>{t('cookies.sections.introduction.title')}</h2>
            <p>{t('cookies.sections.introduction.content')}</p>
          </section>

          <section>
            <h2>{t('cookies.sections.what.title')}</h2>
            <p>{t('cookies.sections.what.content')}</p>
          </section>

          <section>
            <h2>{t('cookies.sections.types.title')}</h2>
            <p>{t('cookies.sections.types.content')}</p>
            <ul>
              {Array.from({ length: 4 }).map((_, i) => (
                <li key={i}>{t(`cookies.sections.types.items.${i}`)}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2>{t('cookies.sections.control.title')}</h2>
            <p>{t('cookies.sections.control.content')}</p>
          </section>

          <section>
            <h2>{t('cookies.sections.contact.title')}</h2>
            <p>{t('cookies.sections.contact.content')}</p>
          </section>
        </main>
      </div>
    </>
  );
} 