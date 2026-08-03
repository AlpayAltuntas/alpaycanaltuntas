import { Network, Cpu, ShieldCheck, GitBranch } from 'lucide-react'
import { useContent } from '../i18n/LanguageContext'
import { Container } from '../components/Container'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'

const icons = [Network, Cpu, ShieldCheck, GitBranch]

export function Passions() {
  const { passions, sections } = useContent()

  return (
    <section id="passions" className="scroll-mt-16 bg-grid py-24 sm:py-32">
      <Container>
        <SectionHeading index={sections.passions.index} title={sections.passions.title} />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {passions.map((passion, i) => {
            const Icon = icons[i % icons.length]
            return (
              <Reveal key={passion.title} delay={i * 0.08}>
                <div className="flex gap-4 rounded-2xl border border-border bg-surface p-6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-accent/30 text-accent">
                    <Icon size={18} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-ink">{passion.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">{passion.description}</p>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
