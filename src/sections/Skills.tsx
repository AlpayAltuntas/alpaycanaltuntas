import { useContent } from '../i18n/LanguageContext'
import { Container } from '../components/Container'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { SpotlightCard } from '../components/SpotlightCard'

export function Skills() {
  const { skillGroups, spokenLanguages, sections } = useContent()

  return (
    <section id="skills" className="scroll-mt-16 border-t border-border py-24 sm:py-32">
      <Container>
        <SectionHeading
          index={sections.skills.index}
          title={sections.skills.title}
          description={sections.skills.description}
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.06}>
              <SpotlightCard>
                <h3 className="font-mono text-xs uppercase tracking-widest text-accent">{group.title}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-border px-3 py-1.5 text-sm text-ink transition-colors group-hover:border-accent/30"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-12">
          <h3 className="font-mono text-xs uppercase tracking-widest text-accent">
            {sections.skills.spokenLanguagesLabel}
          </h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {spokenLanguages.map((language) => (
              <span
                key={language.name}
                className="flex items-center gap-2 rounded-full bg-surface px-4 py-2 text-sm text-ink"
              >
                {language.name}
                <span className="font-mono text-xs text-accent">{language.level}</span>
              </span>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
