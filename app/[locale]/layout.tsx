import { I18nProvider } from '../i18n/providers/I18nProvider';
import { loadMessages } from '../i18n/config/messages';
import { locales } from '../i18n/config/locales';
import { notFound } from 'next/navigation';
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/app/components/headers";
import { FooterSection } from '@/app/components/ui/footer-section';
import { ThemeProvider } from "@/components/theme-provider";
import { defaultMetadata } from '../config/metadata';
import "../globals.css";
import { headers } from 'next/headers'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { cn } from '@/lib/utils'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { siteConfig } from '../config/metadata'


export const metadata = defaultMetadata;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ 
  children, 
  params: { locale } 
}: { 
  children: React.ReactNode;
  params: { locale: string };
}) {
  const headersList = headers()
  const domain = headersList.get('host') || ''
  const fullUrl = headersList.get('referer') || ''

  if (!locales.includes(locale as any)) {
    notFound();
  }

  const messages = await loadMessages(locale as any);

  return (
    <ClerkProvider>
      <html 
        lang={locale} 
        suppressHydrationWarning 
        className={cn(
          GeistSans.variable,
          GeistMono.variable,
        )}
      >
        <head>
          <link rel="dns-prefetch" href="//fonts.googleapis.com" />
          <link rel="dns-prefetch" href="//api.qianniuspace.com" />
          
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          <link rel="preconnect" href="https://api.qianniuspace.com" crossOrigin="" />
          
          <link
            rel="preload"
            href="/fonts/GeistVF.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link 
            rel="preload" 
            href={`${siteConfig.url}/logo.png`}
            as="image"
          />
          
          <link rel="canonical" href={`https://${domain}/${locale}`} />
          <meta property="og:url" content={fullUrl} />
        </head>
        <body className="antialiased min-h-screen flex flex-col">
          <I18nProvider locale={locale} messages={messages}>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <Header />
              <main className="flex-1">
                {children}
              </main>
              <FooterSection />
            </ThemeProvider>
          </I18nProvider>
          <Analytics />
          <SpeedInsights />
        </body>
      </html>
    </ClerkProvider>
  );
}