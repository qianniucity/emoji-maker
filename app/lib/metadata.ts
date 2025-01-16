import { Metadata } from 'next'
import { defaultMetadata, siteConfig } from '../config/metadata'
import { locales, localeMetadata } from '../i18n/config/locales'

export function generateMetadata(locale: string, page: string = 'default'): Metadata {
  const messages = require(`../i18n/locales/${locale}.json`)
  const currentLocale = locale === 'zh' ? 'zh-CN' : 'en-US'
  
  const alternateLanguages = locales.reduce((acc, lang) => {
    acc[localeMetadata[lang].lang] = `/${lang}`
    return acc
  }, {} as Record<string, string>)

  return {
    ...defaultMetadata,
    title: {
      default: messages.metadata[page].title,
      template: `%s | ${messages.metadata.default.title}`
    },
    description: messages.metadata[page].description,
    keywords: [
      ...siteConfig.keywords,
      ...(messages.metadata[page].keywords || [])
    ],
    alternates: {
      canonical: `${siteConfig.url}/${locale}`,
      languages: alternateLanguages
    },
    openGraph: {
      ...defaultMetadata.openGraph,
      locale: currentLocale,
      alternateLocale: Object.values(alternateLanguages),
      title: messages.metadata[page].title,
      description: messages.metadata[page].description,
      siteName: messages.metadata.default.title,
    },
    twitter: {
      ...defaultMetadata.twitter,
      title: messages.metadata[page].title,
      description: messages.metadata[page].description,
    },
    other: {
      'google-site-verification': process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? '',
    }
  }
} 