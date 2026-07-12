import { experience } from '../data/content'
import { Container } from '../components/Container'
import { SectionHeading } from '../components/SectionHeading'
import { TimelineItem } from '../components/TimelineItem'

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-16 py-24 sm:py-32">
      <Container>
        <SectionHeading
          index="03 / Experience"
          title="Where I've built."
          description="Enterprise architecture, security, and product ownership — end to end."
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
