import type { Metadata } from 'next'
import { defaultMetadata } from '../../config/metadata'

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Explore our AI-powered emoji creation services and enterprise solutions',
  openGraph: {
    ...defaultMetadata.openGraph,
    title: 'Our Services | Emoji Maker',
    description: 'Explore our AI-powered emoji creation services and enterprise solutions'
  }
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 