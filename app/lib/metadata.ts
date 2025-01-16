import { Metadata } from 'next'
import { defaultMetadata, siteConfig } from '../config/metadata'

export function generateMetadata(locale: string, page: string = 'default'): Metadata {
  const messages = require(`../i18n/locales/${locale}.json`);
  
  return {
    ...defaultMetadata,
    title: {
      default: messages.metadata[page].title,
      template: `%s | ${messages.metadata.default.title}`
    },
    description: messages.metadata[page].description,
    openGraph: {
      ...defaultMetadata.openGraph,
      locale: locale === 'zh' ? 'zh_CN' : 'en_US',
      title: messages.metadata[page].title,
      description: messages.metadata[page].description,
      siteName: messages.metadata.default.title,
    },
    twitter: {
      ...defaultMetadata.twitter,
      title: messages.metadata[page].title,
      description: messages.metadata[page].description,
    }
  }
} 