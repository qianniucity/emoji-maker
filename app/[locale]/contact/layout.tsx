import { generateMetadata as generatePageMetadata } from '@/app/lib/metadata'

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return generatePageMetadata(locale, 'contact')
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 