import { FileDown, Github, Linkedin, Mail } from 'lucide-react'
import { useContent } from '../i18n/LanguageContext'
import { Container } from '../components/Container'
import { Reveal } from '../components/Reveal'
import { MagneticLink } from '../components/MagneticLink'
import { ProfileImage } from '../components/ProfileImage'
import { GlowOrbs } from '../components/GlowOrbs'

const iconFor = { github: Github, linkedin: Linkedin, mail: Mail, 'file-down': FileDown } as const

export function Contact() {
  const { socials, sections } = useContent()
  const primary = socials.find((s) => s.icon === 'mail')
  const secondary = socials.filter((s) => s.icon !== 'mail')

  return (
    <section id="contact" className="relative scroll-mt-16 overflow-hidden bg-grid py-24 sm:py-32">
      <GlowOrbs />
      <Container>
        <Reveal className="relative mx-auto max-w-2xl text-center">
          <div className="mb-6 flex justify-center">
            <div
              className="h-16 w-16 overflow-hidden rounded-full border border-border ring-1 ring-inset ring-border/80"
              aria-hidden
            >
              <ProfileImage className="h-full w-full" />
            </div>
          </div>

          <div className="mb-4 flex items-center justify-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-accent">
            <span className="h-px w-8 bg-accent" aria-hidden />
            {sections.contact.index}
            <span className="h-px w-8 bg-accent" aria-hidden />
          </div>
          <h2 className="text-balance text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            {sections.contact.title}
          </h2>
          <p className="mt-5 text-balance text-lg leading-relaxed text-muted">
            {sections.contact.description}
          </p>

          {primary && (
            <div className="mt-10 flex justify-center">
              <MagneticLink href={primary.href} className="px-8 py-4 text-base">
                <Mail size={18} /> {primary.label}
              </MagneticLink>
            </div>
          )}

          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            {secondary.map((s) => {
              const Icon = iconFor[s.icon]
              const external = s.icon === 'github' || s.icon === 'linkedin'
              return (
                <MagneticLink
                  key={s.label}
                  href={s.href}
                  variant="outline"
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
