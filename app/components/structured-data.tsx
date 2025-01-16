'use client';

import Script from 'next/script';

interface StructuredDataProps {
  locale: string;
  type: 'aboutPage' | 'product';
  title: string;
  description: string;
  dateModified?: string;
  images?: string[];
}

export function StructuredData({ locale, type, title, description, dateModified, images }: StructuredDataProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': type === 'aboutPage' ? 'AboutPage' : 'Product',
    name: title,
    description,
    inLanguage: locale,
    ...(dateModified && { dateModified }),
    ...(images && { image: images }),
  };

  return (
    <Script id="structured-data" type="application/ld+json">
      {JSON.stringify(jsonLd)}
    </Script>
  );
}

export function ServicesStructuredData() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Emoji Maker AI',
    description: 'AI-powered emoji creation service',
    provider: {
      '@type': 'Organization',
      name: 'Emoji Maker',
      url: 'https://emoji.qianniuspace.com'
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock'
    }
  };

  return (
    <Script id="services-structured-data" type="application/ld+json">
      {JSON.stringify(jsonLd)}
    </Script>
  );
} 