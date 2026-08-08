import { motion } from 'framer-motion'
import { useContent } from '../i18n/LanguageContext'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

export function HeroStatusCard() {
  const { person, ui } = useContent()
  const prefersReducedMotion = usePrefersReducedMotion()

  return (
    <motion.div
      initial={prefersReducedMotion ? undefined : { opacity: 0, y: 16 }}
      animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="pointer-events-none absolute right-16 top-1/2 z-10 hidden w-80 -translate-y-1/2 xl:block"
    >
      <div className="overflow-hidden rounded-xl border border-border bg-surface/70 shadow-2xl shadow-black/20 backdrop-blur-sm">
        <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-accent" aria-hidden />
          <span className="h-2.5 w-2.5 rounded-full bg-border" aria-hidden />
          <span className="h-2.5 w-2.5 rounded-full bg-border" aria-hidden />
          <span className="ml-2 font-mono text-[11px] text-muted">status.sh</span>
        </div>

        <div className="space-y-3 p-5 font-mono text-xs leading-relaxed">
          <div>
            <p className="text-muted">$ whoami</p>
            <p className="text-ink">&gt; {person.name}</p>
          </div>
          <div>
            <p className="text-muted">$ role</p>
            <p className="text-ink">&gt; {person.title}</p>
          </div>
          <div>
            <p className="text-muted">$ status</p>
            <p className="text-ink">&gt; {person.availability}</p>
            <p className="mt-1.5 flex items-center gap-2 text-accent">
              <span className="relative flex h-1.5 w-1.5" aria-hidden>
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              {ui.availableStatus}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
