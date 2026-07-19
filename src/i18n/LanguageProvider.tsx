import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'
import { LanguageContext } from './LanguageContext'
import { locales, languageOptions } from './locales'
import type { LanguageCode } from './types'

const STORAGE_KEY = 'aca-language'

function isLanguageCode(value: string | null): value is LanguageCode {
  return value !== null && languageOptions.some((option) => option.code === value)
}

function getInitialLanguage(): LanguageCode {
  if (typeof window === 'undefined') return 'en'
  const stored = window.localStorage.getItem(STORAGE_KEY)
  return isLanguageCode(stored) ? stored : 'en'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<LanguageCode>(getInitialLanguage)

  useEffect(() => {
    document.documentElement.setAttribute('lang', language)
    window.localStorage.setItem(STORAGE_KEY, language)
  }, [language])

  const setLanguage = useCallback((next: LanguageCode) => {
    setLanguageState(next)
  }, [])

  const content = useMemo(() => locales[language], [language])

  return (
    <LanguageContext.Provider value={{ language, setLanguage, content }}>
      {children}
    </LanguageContext.Provider>
  )
}
