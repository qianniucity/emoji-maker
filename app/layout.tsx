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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
