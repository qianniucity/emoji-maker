'use client';

import { memo } from 'react';
import Link from 'next/link';

interface QuickLinksProps {
  t: (key: string) => string;
  locale: string;
}

const QuickLinks = memo(({ t, locale }: QuickLinksProps) => (
  <div>
    <h3 className="mb-4 text-lg font-semibold">{t('nav.quickLinks')}</h3>
    <nav className="space-y-2 text-sm">
      {[
        ['', 'home'],
        ['about', 'about'],
        ['services', 'services'],
        ['products', 'products'],
        ['contact', 'contact'],
      ].map(([path, key]) => (
        <Link 
          key={path}
          href={`/${locale}${path ? `/${path}` : ''}`} 
          className="block transition-colors hover:text-primary"
        >
          {t(`nav.${key}`)}
        </Link>
      ))}
    </nav>
  </div>
));

QuickLinks.displayName = 'QuickLinks';

export default QuickLinks; 