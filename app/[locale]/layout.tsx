import { I18nProvider } from '../i18n/providers/I18nProvider';
import { loadMessages } from '../i18n/config/messages';
import { locales } from '../i18n/config/locales';
import { notFound } from 'next/navigation';
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/app/components/headers";
import { FooterSection } from '@/app/components/ui/footer-section';
import { ThemeProvider } from "@/components/theme-provider";
import { defaultMetadata } from '../config/metadata';
import localFont from "next/font/local";
import "../globals.css";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

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
  if (!locales.includes(locale as any)) {
    notFound();
  }

  const messages = await loadMessages(locale as any);

  return (
    <ClerkProvider>
      <html lang={locale} suppressHydrationWarning>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>
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
        </body>
      </html>
    </ClerkProvider>
  );
}