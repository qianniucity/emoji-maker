'use client';

import Link from 'next/link';
import { useTranslation } from "@/app/i18n/hooks/useTranslation";

export default function About() {
  const { t } = useTranslation();
  
  const getSteps = () => {
    const steps = [];
    for (let i = 0; i < 5; i++) {
      steps.push(t(`about.howItWorks.steps.${i}`));
    }
    return steps;
  };

  const getTechItems = () => {
    const items = [];
    for (let i = 0; i < 5; i++) {
      items.push(t(`about.techStack.items.${i}`));
    }
    return items;
  };
  
  return (
    <div className="min-h-screen p-8">
      <main className="max-w-3xl mx-auto prose prose-zinc dark:prose-invert">
        <h1>{t('about.title')}</h1>
        
        <h2>{t('about.greeting')}</h2>
        <p>{t('about.intro')}</p>

        <h2>{t('about.features.title')}</h2>
        <p>{t('about.features.description')}</p>

        <h2>{t('about.howItWorks.title')}</h2>
        <ul>
          {getSteps().map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ul>

        <h2>{t('about.forCreators.title')}</h2>
        <p>{t('about.forCreators.description')}</p>

        <h2>{t('about.community.title')}</h2>
        <p>{t('about.community.description')}</p>

        <h2>{t('about.techStack.title')}</h2>
        <p>{t('about.techStack.intro')}</p>
        <ul>
          {getTechItems().map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h2>{t('about.getStarted.title')}</h2>
        <p>
          {t('about.getStarted.description')}{' '}
          <Link href="/" className="text-blue-600 hover:text-blue-800">
            {t('about.getStarted.homepageLink')}
          </Link>
          {' '}{t('about.getStarted.and')}
        </p>

        <h2>{t('about.contact.title')}</h2>
        <p>
          {t('about.contact.description')}{' '}
          <a href={`mailto:${t('about.contact.email')}`} className="text-blue-600 hover:text-blue-800">
            {t('about.contact.email')}
          </a>
        </p>

        <div className="mt-12 text-sm text-gray-600">
          <p>{t('about.footer.madeWith')}</p>
        </div>
      </main>
    </div>
  );
}