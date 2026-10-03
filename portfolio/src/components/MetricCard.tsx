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
  tr: 'tr-TR',
}

export function MetricCard({
  metric,
  delay = 0,
  featured = false,
}: {
  metric: Metric
  delay?: number
  /** One lead stat per section may use this to read as the headline, not a fifth identical tile. */
  featured?: boolean
}) {
  const { language } = useLanguage()
  const { ref, value } = useCountUp(metric.value)
  const formatted = value >= 1000 ? value.toLocaleString(LOCALE_TAG[language]) : String(value)

  return (
    <Reveal delay={delay} className={featured ? 'h-full' : undefined}>
      <div
        ref={ref}
        className={`group relative h-full overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-accent/50 ${
          featured ? 'p-8 sm:p-10' : 'p-6 sm:p-8'
        }`}
      >
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-0 transition-opacity group-hover:opacity-100" />
        <p
          className={`relative font-mono font-semibold tabular-nums text-accent ${
            featured ? 'text-5xl sm:text-6xl lg:text-7xl' : 'text-4xl sm:text-5xl'
          }`}
        >
          {metric.prefix}
          {formatted}
          {metric.suffix}
        </p>
        <p className={`relative mt-3 font-medium text-ink ${featured ? 'text-base' : 'text-sm'}`}>{metric.label}</p>
        <p className="relative mt-1 text-sm leading-relaxed text-muted">{metric.detail}</p>
      </div>
    </Reveal>
  )
}
