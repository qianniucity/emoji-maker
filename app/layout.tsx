import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

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
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
