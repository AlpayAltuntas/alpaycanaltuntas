import { FileDown, Github, Linkedin, Mail } from 'lucide-react'
import { useContent } from '../i18n/LanguageContext'
import { Container } from '../components/Container'
import { Reveal } from '../components/Reveal'
import { MagneticLink } from '../components/MagneticLink'

const iconFor = { github: Github, linkedin: Linkedin, mail: Mail, 'file-down': FileDown } as const

export function Contact() {
  const { socials, sections } = useContent()

  return (
    <section id="contact" className="scroll-mt-16 bg-grid py-24 sm:py-32">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="mb-4 flex items-center justify-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-accent">
            <span className="h-px w-8 bg-accent" aria-hidden />
            {sections.contact.index}
            <span className="h-px w-8 bg-accent" aria-hidden />
          </div>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            {sections.contact.title}
          </h2>
          <p className="mt-4 text-balance text-base leading-relaxed text-muted">
            {sections.contact.description}
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
