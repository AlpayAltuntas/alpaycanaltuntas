import { Github, Package, Shield } from 'lucide-react'
import { useContent } from '../i18n/LanguageContext'
import { Container } from '../components/Container'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { SpotlightCard } from '../components/SpotlightCard'
import { MagneticLink } from '../components/MagneticLink'

const iconFor = { github: Github, npm: Package } as const

export function Projects() {
  const { projects, sections } = useContent()

  return (
    <section id="projects" className="scroll-mt-16 border-t border-border py-24 sm:py-32">
      <Container>
        <SectionHeading
          index={sections.projects.index}
          title={sections.projects.title}
          description={sections.projects.description}
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.name} delay={i * 0.08}>
              <SpotlightCard>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-accent/30 text-accent">
                    <Shield size={18} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-ink">{project.name}</h3>
                    <p className="mt-1 text-sm text-accent">{project.tagline}</p>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-muted">{project.description}</p>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.badges.map((badge) => (
                    <li
                      key={badge}
                      className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted"
                    >
                      {badge}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-3">
                  {project.links.map((link) => {
                    const Icon = iconFor[link.icon]
                    return (
                      <MagneticLink
                        key={link.href}
                        href={link.href}
                        variant="outline"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Icon size={16} /> {link.label}
                      </MagneticLink>
                    )
                  })}
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
