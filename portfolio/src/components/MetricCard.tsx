import type { Metric } from '../i18n/types'
import { useLanguage } from '../i18n/LanguageContext'
import { useCountUp } from '../hooks/useCountUp'
import { Reveal } from './Reveal'

const LOCALE_TAG: Record<string, string> = {
  en: 'en-US',
  de: 'de-DE',
  fr: 'fr-FR',
  es: 'es-ES',
  pt: 'pt-PT',
}

export function MetricCard({ metric, delay = 0 }: { metric: Metric; delay?: number }) {
  const { language } = useLanguage()
  const { ref, value } = useCountUp(metric.value)
  const formatted = value >= 1000 ? value.toLocaleString(LOCALE_TAG[language]) : String(value)

  return (
    <Reveal delay={delay}>
      <div
        ref={ref}
        className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/50 sm:p-8"
      >
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-0 transition-opacity group-hover:opacity-100" />
        <p className="relative font-mono text-4xl font-semibold tabular-nums text-accent sm:text-5xl">
          {metric.prefix}
          {formatted}
          {metric.suffix}
        </p>
        <p className="relative mt-3 text-sm font-medium text-ink">{metric.label}</p>
        <p className="relative mt-1 text-sm leading-relaxed text-muted">{metric.detail}</p>
      </div>
    </Reveal>
  )
}
