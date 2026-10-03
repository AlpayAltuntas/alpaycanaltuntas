import { useCallback, useEffect, useState, type ReactNode } from 'react'
import { ThemeContext, type Theme } from '../hooks/useTheme'

const STORAGE_KEY = 'aca-theme'
const EXPLICIT_KEY = 'aca-theme-explicit'

function getSystemTheme(): Theme {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function hasExplicitChoice(): boolean {
  return window.localStorage.getItem(EXPLICIT_KEY) === '1'
}

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'dark'
  if (hasExplicitChoice()) {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === 'light' || stored === 'dark') return stored
  }
  const attr = document.documentElement.getAttribute('data-theme')
  if (attr === 'light' || attr === 'dark') return attr
  return getSystemTheme()
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  // Follow the OS theme live as long as the visitor hasn't made an explicit choice.
  useEffect(() => {
    if (hasExplicitChoice()) return
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (e: MediaQueryListEvent) => setTheme(e.matches ? 'dark' : 'light')
    media.addEventListener('change', handleChange)
    return () => media.removeEventListener('change', handleChange)
  }, [])

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark'
      window.localStorage.setItem(STORAGE_KEY, next)
      window.localStorage.setItem(EXPLICIT_KEY, '1')
      return next
    })
  }, [])

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}
