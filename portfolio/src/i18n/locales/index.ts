import type { LanguageCode, LocaleContent } from '../types'
import en from './en'
import de from './de'
import fr from './fr'
import es from './es'
import pt from './pt'

export const locales: Record<LanguageCode, LocaleContent> = { en, de, fr, es, pt }

export interface LanguageOption {
  code: LanguageCode
  label: string
  flag: string
}

export const languageOptions: LanguageOption[] = [
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'pt', label: 'Português', flag: '🇵🇹' },
]
