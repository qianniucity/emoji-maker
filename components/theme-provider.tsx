"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"
import { useThemeStore } from "@/app/store/theme-store"
import { useEffect } from "react"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const { theme, setTheme } = useThemeStore()

  useEffect(() => {
    // 添加主题切换动画
    document.documentElement.style.setProperty('--theme-transition', 'background-color 0.2s ease-in-out, color 0.2s ease-in-out')
  }, [])

  return (
    <NextThemesProvider
      {...props}
      defaultTheme={theme}
      onValueChange={(newTheme) => setTheme(newTheme)}
    >
      {children}
    </NextThemesProvider>
  )
}
