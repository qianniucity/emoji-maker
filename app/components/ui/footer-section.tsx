"use client"

import * as React from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Button } from "./button"
import { Input } from "./input"
import { Label } from "./label"
import { Switch } from "./switch"
import { useTranslation } from "@/app/i18n/hooks/useTranslation"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip"
import { Moon, Send, Sun, Github, X, Tv, Youtube } from "lucide-react"

function FooterSection() {
  const { t, locale } = useTranslation();
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <footer className="relative border-t bg-background text-foreground transition-colors duration-300">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="relative">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">
              {t('footer.stayConnected')}
            </h2>
            <p className="mb-6 text-muted-foreground">
              {t('footer.newsletter')}
            </p>
            <form className="relative">
              <Input
                type="email"
                placeholder={t('footer.emailPlaceholder')}
                className="pr-12 backdrop-blur-sm"
              />
              <Button
                type="submit"
                size="icon"
                className="absolute right-1 top-1 h-8 w-8 rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105"
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">{t('footer.subscribe')}</span>
              </Button>
            </form>
            <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">{t('nav.quickLinks')}</h3>
            <nav className="space-y-2 text-sm">
              <Link href={`/${locale}`} className="block transition-colors hover:text-primary">
                {t('nav.home')}
              </Link>
              <Link href={`/${locale}/about`} className="block transition-colors hover:text-primary">
                {t('nav.about')}
              </Link>
              <Link href={`/${locale}/services`} className="block transition-colors hover:text-primary">
                {t('nav.services')}
              </Link>
              <Link href={`/${locale}/products`} className="block transition-colors hover:text-primary">
                {t('nav.products')}
              </Link>
              <Link href={`/${locale}/contact`} className="block transition-colors hover:text-primary">
                {t('nav.contact')}
              </Link>
            </nav>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">{t('footer.contact.title')}</h3>
            <address className="space-y-2 text-sm not-italic">
              <p>{t('footer.contact.wechat')}</p>
              <p>{t('footer.contact.publicAccount')}</p>
              <p>{t('footer.contact.email')}</p>
            </address>
          </div>
          <div className="relative">
            <h3 className="mb-4 text-lg font-semibold">{t('footer.followUs.title')}</h3>
            <div className="mb-6 flex space-x-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full" asChild>
                      <a href="https://space.bilibili.com/12494395" target="_blank" rel="noopener noreferrer">
                        <Tv className="h-4 w-4" />
                        <span className="sr-only">Bilibili</span>
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{t('footer.followUs.bilibili')}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full" asChild>
                      <a href="https://x.com/esx_ai" target="_blank" rel="noopener noreferrer">
                        <X className="h-4 w-4" />
                        <span className="sr-only">X</span>
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on X</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full" asChild>
                      <a href="https://www.youtube.com/@brotheraitalk" target="_blank" rel="noopener noreferrer">
                        <Youtube className="h-4 w-4" />
                        <span className="sr-only">Youtube</span>
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Youtube</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full" asChild>
                      <a href="https://github.com/qianniucity/emoji-maker" target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                        <span className="sr-only">Github</span>
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Connect with us on Github</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="flex items-center space-x-2">
              <Sun className="h-4 w-4" />
              <Switch
                id="dark-mode"
                checked={theme === "dark"}
                onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
              />
              <Moon className="h-4 w-4" />
              <Label htmlFor="dark-mode" className="sr-only">
                {t('footer.darkMode')}
              </Label>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center md:flex-row">
          <p className="text-sm text-muted-foreground">
            {t('footer.copyright')}
          </p>
          <nav className="flex gap-4 text-sm">
            <Link href={`/${locale}/privacy`} className="transition-colors hover:text-primary">
              {t('footer.legal.privacy')}
            </Link>
            <Link href={`/${locale}/terms`} className="transition-colors hover:text-primary">
              {t('footer.legal.terms')}
            </Link>
            <Link href={`/${locale}/cookies`} className="transition-colors hover:text-primary">
              {t('footer.legal.cookies')}
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export { FooterSection } 