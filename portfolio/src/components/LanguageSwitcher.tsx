import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Check, ChevronDown } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import { languageOptions } from '../i18n/locales'

export function LanguageSwitcher() {
  const { language, setLanguage, content } = useLanguage()
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const current = languageOptions.find((option) => option.code === language) ?? languageOptions[0]

  useEffect(() => {
    if (!open) return

    const handlePointerDown = (event: PointerEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open])

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={content.ui.languageSelector}
        onClick={() => setOpen((v) => !v)}
        className="flex h-8 items-center gap-1 rounded-full border border-border bg-surface px-2.5 text-sm transition-colors hover:border-accent focus-visible:outline-2"
      >
        <span aria-hidden className="leading-none">
          {current.flag}
        </span>
        <ChevronDown
          size={12}
          strokeWidth={2.5}
          className={`text-muted transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            role="listbox"
            aria-label={content.ui.languageSelector}
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="absolute right-0 top-full z-30 mt-2 w-40 overflow-hidden rounded-xl border border-border bg-surface py-1 shadow-lg"
          >
            {languageOptions.map((option) => {
              const isActive = option.code === language
              return (
                <li key={option.code}>
                  <button
                    type="button"
                    role="option"
                    aria-selected={isActive}
                    onClick={() => {
                      setLanguage(option.code)
                      setOpen(false)
                    }}
                    className={`flex w-full items-center gap-2.5 px-3 py-2 text-left text-sm transition-colors hover:bg-bg ${
                      isActive ? 'text-accent' : 'text-ink'
                    }`}
                  >
                    <span aria-hidden className="leading-none">
                      {option.flag}
                    </span>
                    <span className="flex-1">{option.label}</span>
                    {isActive && <Check size={14} aria-hidden />}
                  </button>
                </li>
              )
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}
