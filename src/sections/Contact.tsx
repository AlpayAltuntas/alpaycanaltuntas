import { FileDown, Github, Linkedin, Mail } from 'lucide-react'
import { socials } from '../data/content'
import { Container } from '../components/Container'
import { Reveal } from '../components/Reveal'
import { MagneticLink } from '../components/MagneticLink'

const iconFor = { github: Github, linkedin: Linkedin, mail: Mail, 'file-down': FileDown } as const

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 bg-grid py-24 sm:py-32">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="mb-4 flex items-center justify-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-accent">
            <span className="h-px w-8 bg-accent" aria-hidden />
            07 / Contact
            <span className="h-px w-8 bg-accent" aria-hidden />
          </div>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Let's build something worth shipping.
          </h2>
          <p className="mt-4 text-balance text-base leading-relaxed text-muted">
            Open to remote roles across the U.S. Reach out directly — no forms, no gatekeeping.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            {socials.map((s) => {
              const Icon = iconFor[s.icon]
              const external = s.icon === 'github' || s.icon === 'linkedin'
              return (
                <MagneticLink
                  key={s.label}
                  href={s.href}
                  variant={s.icon === 'mail' ? 'solid' : 'outline'}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noreferrer' : undefined}
                  download={s.icon === 'file-down'}
                >
                  <Icon size={16} /> {s.label}
                </MagneticLink>
              )
            })}
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
