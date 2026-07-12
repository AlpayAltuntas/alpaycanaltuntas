import { countryCoverage, metrics } from '../data/content'
import { Container } from '../components/Container'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { MetricCard } from '../components/MetricCard'
import { useCountUp } from '../hooks/useCountUp'

function CountryCoverage() {
  const { ref, value } = useCountUp(countryCoverage.to)
  const progress = Math.min(value / countryCoverage.to, 1)

  return (
    <Reveal delay={0.2}>
      <div ref={ref} className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <p className="text-sm font-medium text-ink">{countryCoverage.label}</p>
          <p className="font-mono text-2xl font-semibold tabular-nums text-accent">
            {countryCoverage.from} → {value}
          </p>
        </div>
        <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-border">
          <div
            className="h-full rounded-full bg-accent transition-[width] duration-300 ease-out"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
      </div>
    </Reveal>
  )
}

export function Impact() {
  return (
    <section id="impact" className="scroll-mt-16 border-t border-border bg-grid py-24 sm:py-32">
      <Container>
        <SectionHeading
          index="02 / Impact"
          title="Results, not just responsibilities."
          description="Measured outcomes from the systems I've architected and shipped."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {metrics.map((metric, i) => (
            <MetricCard key={metric.label} metric={metric} delay={i * 0.08} />
          ))}
        </div>

        <div className="mt-5">
          <CountryCoverage />
        </div>
      </Container>
    </section>
  )
}
