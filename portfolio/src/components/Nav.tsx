import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useContent } from '../i18n/LanguageContext'
import { useActiveSection } from '../hooks/useActiveSection'
import { ThemeToggle } from './ThemeToggle'
import { LanguageSwitcher } from './LanguageSwitcher'
import { Container } from './Container'

// Href order (and ids) is identical across every locale — only the labels are translated —
// so this stays a stable module-level reference instead of being recomputed from content.nav.
const SECTION_IDS = ['about', 'impact', 'experience', 'skills', 'passions', 'community', 'education', 'contact']

export function Nav() {
  const content = useContent()
  const [mobileOpen, setMobileOpen] = useState(false)
  const activeId = useActiveSection(SECTION_IDS)

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-border bg-bg/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <a
          href="#top"
          className="font-mono text-sm font-semibold tracking-widest text-ink"
          aria-label={`${content.person.name} ${content.ui.backToTop}`}
        >
          ACA<span className="text-accent">.</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label={content.ui.primaryNav}>
          {content.nav.map((link) => {
            const id = link.href.replace('#', '')
            const isActive = id === activeId
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? 'true' : undefined}
                className={`relative px-3 py-2 font-mono text-xs uppercase tracking-wider transition-colors ${
                  isActive ? 'text-accent' : 'text-muted hover:text-ink'
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-2 -bottom-px h-px bg-accent"
                    transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                  />
                )}
              </a>
            )
          })}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <LanguageSwitcher />
          <button
            type="button"
            className="text-ink md:hidden"
            aria-label={mobileOpen ? content.ui.closeMenu : content.ui.openMenu}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            aria-label={content.ui.primaryNavMobile}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden border-b border-border bg-bg md:hidden"
          >
            <Container className="flex flex-col gap-1 py-3">
              {content.nav.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded px-2 py-2.5 font-mono text-sm uppercase tracking-wider text-muted hover:bg-surface hover:text-ink"
                >
                  {link.label}
                </a>
              ))}
            </Container>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
