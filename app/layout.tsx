import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: 'Emoji Maker',
  description: 'Create custom emojis with AI-powered tools',
  keywords: ['emoji maker', 'ai emoji', 'custom emoji', 'emoji generator', 'ai emoji maker', 'emoji creation', 'custom stickers', 'emoji design'],
  authors: [{ name: 'qianniucity' }],
  creator: 'qianniucity',
  publisher: 'qianniucity',
  metadataBase: new URL('https://emoji.qianniuspace.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://emoji.qianniuspace.com',
    title: 'Emoji Maker',
    description: 'Create custom emojis with AI-powered tools',
    siteName: 'Emoji Maker'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Emoji Maker',
    description: 'Create custom emojis with AI-powered tools',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return children
}
