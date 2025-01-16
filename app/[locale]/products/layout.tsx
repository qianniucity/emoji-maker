import { generateMetadata as generatePageMetadata } from '@/app/lib/metadata'

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return generatePageMetadata(locale, 'products')
}

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 