import { Award, GraduationCap } from 'lucide-react'
import { affiliation, certifications, education } from '../data/content'
import { Container } from '../components/Container'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'

export function Education() {
  return (
    <section id="education" className="scroll-mt-16 border-t border-border py-24 sm:py-32">
      <Container>
        <SectionHeading index="07 / Education" title="Certifications & education." />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="flex items-center gap-3">
              <GraduationCap size={20} className="text-accent" />
              <h3 className="font-mono text-xs uppercase tracking-widest text-accent">Education</h3>
            </div>
            <div className="mt-5 rounded-2xl border border-border bg-surface p-6">
              <p className="text-lg font-semibold text-ink">{education.degree}</p>
              <p className="mt-1 text-sm text-muted">
                {education.school} · {education.date}
              </p>
              <ul className="mt-4 space-y-1.5">
                {education.honors.map((honor) => (
                  <li key={honor} className="flex gap-2 text-sm leading-relaxed text-muted">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
                    {honor}
                  </li>
                ))}
              </ul>
              <p className="mt-5 border-t border-border pt-4 font-mono text-xs text-muted">{affiliation}</p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex items-center gap-3">
              <Award size={20} className="text-accent" />
              <h3 className="font-mono text-xs uppercase tracking-widest text-accent">Certifications</h3>
            </div>
            <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {certifications.map((cert) => (
                <li
                  key={cert.name}
                  className="flex items-center justify-between gap-3 rounded-xl border border-border bg-surface px-4 py-3"
                >
                  <span className="text-sm text-ink">{cert.name}</span>
                  <span className="shrink-0 font-mono text-xs text-muted">{cert.year}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
