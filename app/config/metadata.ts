import { Metadata } from 'next'

export const siteConfig = {
  name: 'Emoji Maker',
  description: 'Create custom emojis with AI-powered tools',
  url: 'https://emojo.qianniuspace.com', // 替换为实际域名
  ogImage: 'https://emojo.qianniuspace.com/og.png', // 替换为实际 OG 图片
  links: {
    twitter: 'https://x.com/esx_ai',
    github: 'https://github.com/qianniucity/emoji-maker'
  }
}

export const defaultMetadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
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
  robots: {
    index: true,
    follow: true
  }
} 