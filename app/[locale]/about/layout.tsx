import { generateMetadata as generatePageMetadata } from '@/app/lib/metadata'

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return generatePageMetadata(locale, 'about')
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 