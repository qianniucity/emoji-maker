'use client';

import { useTranslation } from "@/app/i18n/hooks/useTranslation";
import { StructuredData } from "@/app/components/structured-data";

export { runtime } from '@/app/config/runtime';

export default function Privacy() {
  const { t, locale } = useTranslation();

  return (
    <>
      <StructuredData
        locale={locale}
        type="aboutPage"
        title={t('metadata.privacy.title')}
        description={t('metadata.privacy.description')}
        dateModified={new Date().toISOString()}
      />
      <div className="min-h-[calc(100vh-4rem)] p-8 bg-background">
        <main className="prose dark:prose-invert max-w-4xl mx-auto">
          <h1>{t('privacy.title')}</h1>
          
          <p className="text-muted-foreground">
            {t('privacy.lastUpdated')}: {t('privacy.date')}
          </p>

          <section>
            <h2>{t('privacy.sections.introduction.title')}</h2>
            <p>{t('privacy.sections.introduction.content')}</p>
          </section>

          <section>
            <h2>{t('privacy.sections.collection.title')}</h2>
            <p>{t('privacy.sections.collection.content')}</p>
            <ul>
              {Array.from({ length: 5 }).map((_, i) => (
                <li key={i}>{t(`privacy.sections.collection.items.${i}`)}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2>{t('privacy.sections.usage.title')}</h2>
            <p>{t('privacy.sections.usage.content')}</p>
            <ul>
              {Array.from({ length: 4 }).map((_, i) => (
                <li key={i}>{t(`privacy.sections.usage.items.${i}`)}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2>{t('privacy.sections.sharing.title')}</h2>
            <p>{t('privacy.sections.sharing.content')}</p>
          </section>

          <section>
            <h2>{t('privacy.sections.security.title')}</h2>
            <p>{t('privacy.sections.security.content')}</p>
          </section>

          <section>
            <h2>{t('privacy.sections.cookies.title')}</h2>
            <p>{t('privacy.sections.cookies.content')}</p>
          </section>

          <section>
            <h2>{t('privacy.sections.rights.title')}</h2>
            <p>{t('privacy.sections.rights.content')}</p>
            <ul>
              {Array.from({ length: 4 }).map((_, i) => (
                <li key={i}>{t(`privacy.sections.rights.items.${i}`)}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2>{t('privacy.sections.contact.title')}</h2>
            <p>{t('privacy.sections.contact.content')}</p>
          </section>
        </main>
      </div>
    </>
  );
} 