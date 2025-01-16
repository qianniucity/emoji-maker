import { Metadata } from 'next'

export const siteConfig = {
  name: 'Emoji Maker',
  description: 'Create custom emojis with AI-powered tools',
  url: 'https://emoji.qianniuspace.com',
  ogImage: 'https://emoji.qianniuspace.com/og.png',
  links: {
    twitter: 'https://x.com/esx_ai',
    github: 'https://github.com/qianniucity/emoji-maker'
  },
  keywords: [
    'emoji maker',
    'ai emoji',
    'custom emoji',
    'emoji generator',
    'ai emoji maker',
    'emoji creation',
    'custom stickers',
    'emoji design'
  ],
  author: 'qianniucity',
  themeColor: '#3b82f6'
}

export const defaultMetadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author }],
  creator: siteConfig.author,
  publisher: siteConfig.author,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en',
      'zh-CN': '/zh'
    }
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@二师兄'
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1
  },
  themeColor: siteConfig.themeColor,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  }
} 