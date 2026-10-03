import { Reveal } from './Reveal'

interface SectionHeadingProps {
  index: string
  title: string
  description?: string
  /** Reserved for one section only: lets the title carry the Hero→content handoff
      at full display strength instead of repeating the same scale everywhere. */
  emphasis?: boolean
}

export function SectionHeading({ index, title, description, emphasis = false }: SectionHeadingProps) {
  return (
    <Reveal className="mb-14 max-w-2xl" y={emphasis ? 32 : 24} scale={emphasis ? 0.96 : undefined}>
      <div className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-accent">
        <span className="h-px w-8 bg-accent" aria-hidden />
        {index}
      </div>
      <h2
        className={`text-balance font-semibold tracking-tight text-ink ${
          emphasis ? 'text-4xl sm:text-5xl lg:text-6xl' : 'text-3xl sm:text-4xl'
        }`}
      >
        {title}
      </h2>
      {description && <p className="mt-4 text-balance text-base leading-relaxed text-muted">{description}</p>}
    </Reveal>
  )
}
