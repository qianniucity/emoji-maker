'use client';

import Script from 'next/script'
import { siteConfig } from '@/app/config/metadata'

type StructuredDataType = 'aboutPage' | 'product' | 'service' | 'organization'

interface StructuredDataProps {
  locale: string
  type: StructuredDataType
  title: string
  description: string
  dateModified?: string
  images?: string[]
  price?: {
    amount: number
    currency: string
  }
  rating?: {
    ratingValue: number
    ratingCount: number
  }
}

export function StructuredData({
  locale,
  type,
  title,
  description,
  dateModified,
  images,
  price,
  rating,
}: StructuredDataProps) {
  const baseJsonLd = {
    '@context': 'https://schema.org',
    '@type': type === 'aboutPage' ? 'AboutPage' : type.charAt(0).toUpperCase() + type.slice(1),
    name: title,
    description,
    inLanguage: locale === 'zh' ? 'zh-CN' : 'en-US',
    ...(dateModified && { dateModified }),
    ...(images && { image: images }),
    url: `${siteConfig.url}/${locale}`,
    provider: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/logo.png`
      }
    }
  }

  const jsonLd = {
    ...baseJsonLd,
    ...(price && {
      offers: {
        '@type': 'Offer',
        price: price.amount,
        priceCurrency: price.currency,
        availability: 'https://schema.org/InStock'
      }
    }),
    ...(rating && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: rating.ratingValue,
        ratingCount: rating.ratingCount
      }
    })
  }

  return (
    <Script id={`structured-data-${type}`} type="application/ld+json">
      {JSON.stringify(jsonLd)}
    </Script>
  )
} 