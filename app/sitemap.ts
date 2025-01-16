import { MetadataRoute } from 'next'
import { siteConfig } from './config/metadata'
import { locales } from './i18n/config/locales'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/about',
    '/services',
    '/products',
    '/contact',
  ]

  return routes.flatMap(route => 
    locales.map(locale => ({
      url: `${siteConfig.url}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: route === '' ? 1 : 0.8,
    }))
  )
} 