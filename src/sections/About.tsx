import { about } from '../data/content'
import { Container } from '../components/Container'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { ProfileImage } from '../components/ProfileImage'

export function About() {
  return (
    <section id="about" className="scroll-mt-16 py-24 sm:py-32">
      <Container>
        <SectionHeading index="01 / About" title="Engineer, architect, product owner." />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <Reveal delay={0.1}>
            <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl border border-border">
              <ProfileImage className="h-full w-full" />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-border" aria-hidden />
            </div>
          </Reveal>

          <div>
            <Reveal delay={0.15} className="space-y-5">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-balance text-lg leading-relaxed text-muted">
                  {paragraph}
                </p>
              ))}
            </Reveal>

            <Reveal delay={0.25}>
              <dl className="mt-10 grid grid-cols-1 gap-6 border-t border-border pt-8 sm:grid-cols-3">
                {about.fastFacts.map((fact) => (
                  <div key={fact.label}>
                    <dt className="font-mono text-xs uppercase tracking-widest text-accent">{fact.label}</dt>
                    <dd className="mt-2 text-sm font-medium text-ink">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  )
}
