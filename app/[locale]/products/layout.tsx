import type { Metadata } from 'next'
import { defaultMetadata } from '../../config/metadata'

export const metadata: Metadata = {
  title: 'Pricing & Plans',
  description: 'Choose the perfect plan for your emoji creation needs',
  openGraph: {
    ...defaultMetadata.openGraph,
    title: 'Pricing & Plans | Emoji Maker',
    description: 'Choose the perfect plan for your emoji creation needs'
  }
}

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 