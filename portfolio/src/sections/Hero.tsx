import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, FileDown, Github, Linkedin, Mail } from 'lucide-react'
import { useContent } from '../i18n/LanguageContext'
import { Container } from '../components/Container'
import { HeroCanvas } from '../components/HeroCanvas'
import { GlowOrbs } from '../components/GlowOrbs'
import { ScanLine } from '../components/ScanLine'
import { MagneticLink } from '../components/MagneticLink'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

const iconFor = { github: Github, linkedin: Linkedin, mail: Mail, 'file-down': FileDown } as const

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
}

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
}

export function Hero() {
  const { person, socials, ui } = useContent()
  const prefersReducedMotion = usePrefersReducedMotion()
  const resume = socials.find((s) => s.icon === 'file-down')
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] })
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 90])
  const parallaxOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative flex min-h-screen items-center overflow-hidden bg-grid pt-16"
    >
      <GlowOrbs />

      <div className="pointer-events-none absolute inset-0">
        <HeroCanvas />
      </div>

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 55% at 50% 45%, rgb(var(--color-bg) / 0.55) 0%, transparent 70%)',
        }}
      />

      <ScanLine />

      <motion.div
        style={prefersReducedMotion ? undefined : { y: parallaxY, opacity: parallaxOpacity }}
        className="relative z-10 w-full"
      >
        <Container>
          <motion.div
            variants={prefersReducedMotion ? undefined : container}
            initial={prefersReducedMotion ? undefined : 'hidden'}
            animate={prefersReducedMotion ? undefined : 'show'}
            className="mx-auto flex max-w-3xl -translate-y-6 flex-col items-center text-center sm:-translate-y-10 lg:-translate-y-14"
          >
            <motion.p
              variants={prefersReducedMotion ? undefined : item}
              className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-accent"
            >
              <span className="relative flex h-1.5 w-1.5" aria-hidden>
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              {person.availability}
            </motion.p>

            <motion.h1
              variants={prefersReducedMotion ? undefined : item}
              className="text-balance text-5xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-6xl lg:text-7xl xl:text-8xl mt-6"
            >
              {person.name}
            </motion.h1>

            <motion.p
              variants={prefersReducedMotion ? undefined : item}
              className="mt-4 font-mono text-xs uppercase tracking-[0.2em] text-muted sm:text-sm"
            >
              {person.roleLine}
            </motion.p>

            <motion.p
              variants={prefersReducedMotion ? undefined : item}
              className="mx-auto mt-6 max-w-xl text-balance text-lg leading-relaxed text-muted sm:text-xl"
            >
              {person.positioning}
              <span
                className="ml-1 inline-block h-[1.1em] w-[2px] translate-y-[0.15em] animate-blink bg-accent align-middle"
                aria-hidden
              />
            </motion.p>

            <motion.p variants={prefersReducedMotion ? undefined : item} className="mt-3 font-mono text-xs text-muted">
              {person.location}
            </motion.p>

            <motion.div variants={prefersReducedMotion ? undefined : item} className="mt-10 flex justify-center">
              <MagneticLink href="#experience">{ui.viewWork}</MagneticLink>
            </motion.div>

            <motion.div
              variants={prefersReducedMotion ? undefined : item}
              className="mt-4 flex flex-wrap items-center justify-center gap-3"
            >
              {resume && (
                <MagneticLink href={resume.href} variant="outline" download>
                  <FileDown size={16} /> {ui.downloadResume}
                </MagneticLink>
              )}
              {socials
                .filter((s) => s.icon === 'github' || s.icon === 'linkedin' || s.icon === 'mail')
                .map((s) => {
                  const Icon = iconFor[s.icon]
                  const external = s.icon === 'github' || s.icon === 'linkedin'
                  return (
                    <MagneticLink
                      key={s.label}
                      href={s.href}
                      variant="outline"
                      target={external ? '_blank' : undefined}
                      rel={external ? 'noreferrer' : undefined}
                    >
                      <Icon size={16} /> {s.label}
                    </MagneticLink>
                  )
                })}
            </motion.div>
          </motion.div>
        </Container>
      </motion.div>

      <motion.a
        href="#about"
        aria-label={ui.scrollToAbout}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-muted transition-colors hover:text-accent"
        initial={prefersReducedMotion ? undefined : { opacity: 0 }}
        animate={prefersReducedMotion ? undefined : { opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { duration: 0.6, delay: 0.9 },
          y: { duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.9 },
        }}
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  )
}
