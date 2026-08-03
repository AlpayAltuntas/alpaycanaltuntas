import { useContent } from '../i18n/LanguageContext'
import { Container } from '../components/Container'
import { SectionHeading } from '../components/SectionHeading'
import { TimelineItem } from '../components/TimelineItem'

export function Experience() {
  const { experience, sections } = useContent()

  return (
    <section id="experience" className="scroll-mt-16 py-24 sm:py-32">
      <Container>
        <SectionHeading
          index={sections.experience.index}
          title={sections.experience.title}
          description={sections.experience.description}
        />

        <div className="max-w-3xl">
          {experience.map((entry, i) => (
            <TimelineItem key={entry.id} entry={entry} defaultOpen={i === 0} delay={i * 0.08} />
          ))}
        </div>
      </Container>
    </section>
  )
}
