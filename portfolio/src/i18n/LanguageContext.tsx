import { createContext, useContext } from 'react'
import type { LanguageCode, LocaleContent } from './types'

export interface LanguageContextValue {
  language: LanguageCode
  setLanguage: (language: LanguageCode) => void
  content: LocaleContent
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider')
  return ctx
}

export function useContent(): LocaleContent {
  return useLanguage().content
}
