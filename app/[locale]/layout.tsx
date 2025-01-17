import { headers } from 'next/headers';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { ClerkProvider } from "@clerk/nextjs";
import { cn } from '@/lib/utils';
import IntlProvider from '@/app/components/providers/intl-provider';
import { loadMessages } from '@/app/i18n/config/messages';
import { locales } from '@/app/i18n/config/locales';
import { notFound } from 'next/navigation';
import Header from "@/app/components/headers";
import { FooterSection } from '@/app/components/ui/footer-section';
import { ThemeProvider } from "@/components/theme-provider";
import Analytics from '@/app/components/analytics';
import CookieConsent from '@/app/components/analytics/cookie-consent';
import { siteConfig } from '../config/metadata';
import "../globals.css";

const bodyClassName = cn(
  "antialiased min-h-screen flex flex-col",
  GeistSans.className
);

const htmlClassName = cn(
  GeistSans.variable,
  GeistMono.variable
);

export default async function LocaleLayout({
    children,
    params: { locale }
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    const headersList = headers();
    const domain = headersList.get('host') || '';
    const fullUrl = headersList.get('referer') || '';

    if (!locales.includes(locale as "en" | "zh")) {
        notFound();
    }

    const messages = await loadMessages(locale as "en" | "zh");

    return (
        <html
            lang={locale}
            suppressHydrationWarning
            className={htmlClassName}
        >
            <head>
                <link rel="dns-prefetch" href="//api.qianniuspace.com" />
                <link rel="preconnect" href="https://api.qianniuspace.com" crossOrigin="" />
                <link
                    rel="preload"
                    href={`${siteConfig.url}/logo.png`}
                    as="image"
                />
                <link rel="canonical" href={`https://${domain}/${locale}`} />
                <meta property="og:url" content={fullUrl} />
            </head>
            <body className={bodyClassName} suppressHydrationWarning>
                <IntlProvider locale={locale} messages={messages}>
                    <ClerkProvider>
                        <ThemeProvider
                            attribute="class"
                            defaultTheme="system"
                            enableSystem
                            disableTransitionOnChange
                        >
                            <div className="flex flex-col min-h-screen">
                                <Header />
                                <main className="flex-1">
                                    {children}
                                </main>
                                <FooterSection />
                                <Analytics />
                                <CookieConsent />
                            </div>
                        </ThemeProvider>
                    </ClerkProvider>
                </IntlProvider>
            </body>
        </html>
    );
}