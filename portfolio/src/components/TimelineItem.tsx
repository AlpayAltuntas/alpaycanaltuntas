import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import type { ExperienceEntry } from '../i18n/types'
import { useContent } from '../i18n/LanguageContext'
import { Reveal } from './Reveal'

export function TimelineItem({
  entry,
  defaultOpen = false,
  delay = 0,
}: {
  entry: ExperienceEntry
  defaultOpen?: boolean
  delay?: number
}) {
  const { ui } = useContent()
  const [open, setOpen] = useState(defaultOpen)
  const panelId = `experience-panel-${entry.id}`

  return (
    <Reveal delay={delay} className="relative pl-10 sm:pl-14">
      <div className="absolute left-0 top-1.5 flex h-full flex-col items-center sm:left-1">
        <span
          className={`z-10 h-3 w-3 rounded-full border-2 ${
            entry.current ? 'border-accent bg-accent' : 'border-border bg-bg'
          }`}
          aria-hidden
        />
        <span className="mt-1 w-px flex-1 bg-border" aria-hidden />
      </div>

      <div className="pb-10">
        <button
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
          className="flex w-full flex-col gap-1 text-left"
        >
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-lg font-semibold text-ink">{entry.company}</h3>
            {entry.current && (
              <span className="rounded-full border border-accent/40 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest text-accent">
                {ui.currentBadge}
              </span>
            )}
            <ChevronDown
              size={16}
              className={`ml-auto shrink-0 text-muted transition-transform ${open ? 'rotate-180' : ''}`}
              aria-hidden
            />
          </div>
          <p className="font-mono text-xs uppercase tracking-wider text-accent">{entry.period}</p>
          <p className="text-sm text-muted">
            {entry.location} · {entry.blurb}
          </p>
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              id={panelId}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="mt-5 space-y-6">
                {entry.roles.map((role) => (
                  <div key={role.title}>
                    <p className="text-sm font-medium text-ink">
                      {role.title}
                      <span className="ml-2 font-mono text-xs font-normal text-muted">{role.period}</span>
                    </p>
                    <ul className="mt-2 space-y-1.5">
                      {role.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-2 text-sm leading-relaxed text-muted">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Reveal>
  )
}
