import { generateMetadata as generatePageMetadata } from '@/app/lib/metadata'

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return generatePageMetadata(locale, 'services')
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 