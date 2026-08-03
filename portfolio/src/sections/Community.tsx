import { useState } from 'react'
import { Maximize2 } from 'lucide-react'
import { useContent } from '../i18n/LanguageContext'
import { Container } from '../components/Container'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { Lightbox } from '../components/Lightbox'

export function Community() {
  const { community, sections, ui } = useContent()
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section id="community" className="scroll-mt-16 border-t border-border py-24 sm:py-32">
      <Container>
        <SectionHeading index={sections.community.index} title={community.title} description={community.kicker} />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <Reveal>
            <div className="space-y-5">
              {community.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-balance text-base leading-relaxed text-muted">
                  {paragraph}
                </p>
              ))}
            </div>

            <ul className="mt-8 flex flex-wrap gap-2 border-t border-border pt-6">
              {community.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="rounded-full border border-border px-3 py-1.5 font-mono text-xs text-ink"
                >
                  {highlight}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {community.photos.map((photo, i) => (
                <button
                  key={photo.src}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  aria-label={`${ui.viewLargerPhoto}: ${photo.caption}`}
                  className={`group relative overflow-hidden rounded-2xl border border-border ${
                    photo.wide ? 'col-span-2 aspect-[16/9]' : 'aspect-[4/3]'
                  }`}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-black/0 to-black/0 p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <p className="text-left text-xs leading-snug text-white">{photo.caption}</p>
                  </div>
                  <div className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-black/50 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <Maximize2 size={13} />
                  </div>
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>

      <Lightbox
        photos={community.photos}
        index={activeIndex}
        onClose={() => setActiveIndex(null)}
        onIndexChange={setActiveIndex}
      />
    </section>
  )
}
