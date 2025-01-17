'use client';

import { memo } from 'react';
import Link from 'next/link';

interface LegalLinksProps {
  t: (key: string) => string;
  locale: string;
}

const LegalLinks = memo(({ t, locale }: LegalLinksProps) => (
  <nav className="flex gap-4 text-sm">
    {['privacy', 'terms', 'cookies'].map((path) => (
      <Link 
        key={path}
        href={`/${locale}/${path}`} 
        className="transition-colors hover:text-primary"
      >
        {t(`footer.legal.${path}`)}
      </Link>
    ))}
  </nav>
));

LegalLinks.displayName = 'LegalLinks';

export default LegalLinks;