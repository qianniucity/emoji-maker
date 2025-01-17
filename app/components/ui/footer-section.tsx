"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { useTranslation } from "@/app/i18n/hooks/useTranslation"
import dynamic from 'next/dynamic'

// Lazy loaded components
const NewsletterSection = dynamic(() => import('./footer/newsletter-section'), {
  loading: () => <div className="h-[200px] animate-pulse bg-muted rounded-lg" />,
  ssr: false
})

const QuickLinks = dynamic(() => import('./footer/quick-links'), {
  loading: () => <div className="h-[200px] animate-pulse bg-muted rounded-lg" />,
  ssr: false
})

const ContactSection = dynamic(() => import('./footer/contact-section'), {
  loading: () => <div className="h-[200px] animate-pulse bg-muted rounded-lg" />,
  ssr: false
})

const SocialSection = dynamic(() => import('./footer/social-section'), {
  loading: () => <div className="h-[200px] animate-pulse bg-muted rounded-lg" />,
  ssr: false
})

const LegalLinks = dynamic(() => import('./footer/legal-links'), {
  loading: () => <div className="h-[40px] animate-pulse bg-muted rounded-lg" />,
  ssr: false
})

function FooterSection() {
  const { t, locale } = useTranslation();
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const handleThemeChange = React.useCallback((checked: boolean) => {
    setTheme(checked ? "dark" : "light")
  }, [setTheme])

  if (!mounted) {
    return null
  }

  return (
    <footer className="relative border-t bg-background text-foreground transition-colors duration-300">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <NewsletterSection t={t} />
          <QuickLinks t={t} locale={locale || 'en'} />
          <ContactSection t={t} />
          <SocialSection t={t} theme={theme || 'light'} onThemeChange={handleThemeChange} />
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center md:flex-row">
          <p className="text-sm text-muted-foreground">
            {t('footer.copyright')}
          </p>
          <LegalLinks t={t} locale={locale || 'en'} />
        </div>
      </div>
    </footer>
  )
}

export { FooterSection } 