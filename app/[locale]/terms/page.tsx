'use client';

import { useTranslation } from "@/app/i18n/hooks/useTranslation";
import { StructuredData } from "@/app/components/structured-data";

export default function Terms() {
  const { t, locale } = useTranslation();

  return (
    <>
      <StructuredData
        locale={locale}
        type="aboutPage"
        title={t('metadata.terms.title')}
        description={t('metadata.terms.description')}
        dateModified={new Date().toISOString()}
      />
      <div className="min-h-[calc(100vh-4rem)] p-8 bg-background">
        <main className="prose dark:prose-invert max-w-4xl mx-auto">
          <h1>{t('terms.title')}</h1>
          
          <p className="text-muted-foreground">
            {t('terms.lastUpdated')}: {t('terms.date')}
          </p>

          <section>
            <h2>{t('terms.sections.acceptance.title')}</h2>
            <p>{t('terms.sections.acceptance.content')}</p>
          </section>

          <section>
            <h2>{t('terms.sections.services.title')}</h2>
            <p>{t('terms.sections.services.content')}</p>
          </section>

          <section>
            <h2>{t('terms.sections.accounts.title')}</h2>
            <p>{t('terms.sections.accounts.content')}</p>
            <ul>
              {Array.from({ length: 4 }).map((_, i) => (
                <li key={i}>{t(`terms.sections.accounts.items.${i}`)}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2>{t('terms.sections.content.title')}</h2>
            <p>{t('terms.sections.content.content')}</p>
            <ul>
              {Array.from({ length: 5 }).map((_, i) => (
                <li key={i}>{t(`terms.sections.content.items.${i}`)}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2>{t('terms.sections.payment.title')}</h2>
            <p>{t('terms.sections.payment.content')}</p>
          </section>

          <section>
            <h2>{t('terms.sections.termination.title')}</h2>
            <p>{t('terms.sections.termination.content')}</p>
          </section>

          <section>
            <h2>{t('terms.sections.disclaimer.title')}</h2>
            <p>{t('terms.sections.disclaimer.content')}</p>
          </section>

          <section>
            <h2>{t('terms.sections.contact.title')}</h2>
            <p>{t('terms.sections.contact.content')}</p>
          </section>
        </main>
      </div>
    </>
  );
} 