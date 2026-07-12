import { useRef, type PointerEvent as ReactPointerEvent } from 'react'
import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion'
import { ArrowDown, FileDown, Github, Linkedin, Mail } from 'lucide-react'
import { person, socials } from '../data/content'
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
  const prefersReducedMotion = usePrefersReducedMotion()
  const resume = socials.find((s) => s.icon === 'file-down')
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] })
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 90])
  const parallaxOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  const tiltX = useMotionValue(0)
  const tiltY = useMotionValue(0)
  const springTiltX = useSpring(tiltX, { stiffness: 150, damping: 20, mass: 0.5 })
  const springTiltY = useSpring(tiltY, { stiffness: 150, damping: 20, mass: 0.5 })

  const handlePointerMove = (event: ReactPointerEvent<HTMLElement>) => {
    if (prefersReducedMotion) return
    const rect = event.currentTarget.getBoundingClientRect()
    const relX = (event.clientX - rect.left) / rect.width - 0.5
    const relY = (event.clientY - rect.top) / rect.height - 0.5
    tiltY.set(relX * 6)
    tiltX.set(relY * -6)
  }

  const handlePointerLeave = () => {
    tiltX.set(0)
    tiltY.set(0)
  }

  return (
    <section
      id="top"
      ref={sectionRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={{ perspective: 1200 }}
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
            'linear-gradient(100deg, rgb(var(--color-bg)) 0%, rgb(var(--color-bg)) 32%, rgb(var(--color-bg) / 0.55) 52%, transparent 78%)',
        }}
      />

      <ScanLine />

      <motion.div
        style={
          prefersReducedMotion
            ? undefined
            : { y: parallaxY, opacity: parallaxOpacity, rotateX: springTiltX, rotateY: springTiltY }
        }
        className="relative z-10 w-full"
      >
        <Container>
          <motion.div
            variants={prefersReducedMotion ? undefined : container}
            initial={prefersReducedMotion ? undefined : 'hidden'}
            animate={prefersReducedMotion ? undefined : 'show'}
            className="max-w-3xl"
          >
            <motion.p
              variants={prefersReducedMotion ? undefined : item}
              className="mb-5 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-accent"
            >
              <span className="relative flex h-1.5 w-1.5" aria-hidden>
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              {person.roleLine}
            </motion.p>

            <motion.h1
              variants={prefersReducedMotion ? undefined : item}
              className="text-balance text-5xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl"
            >
              {person.name}
            </motion.h1>

            <motion.p
              variants={prefersReducedMotion ? undefined : item}
              className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-muted sm:text-xl"
            >
              {person.positioning}
              <span
                className="ml-1 inline-block h-[1.1em] w-[2px] translate-y-[0.15em] animate-blink bg-accent align-middle"
                aria-hidden
              />
            </motion.p>

            <motion.div
              variants={prefersReducedMotion ? undefined : item}
              className="mt-4 flex flex-col gap-1 font-mono text-xs text-muted sm:flex-row sm:gap-4"
            >
              <span>{person.location}</span>
              <span className="hidden sm:inline text-border">/</span>
              <span>{person.availability}</span>
            </motion.div>

            <motion.div
              variants={prefersReducedMotion ? undefined : item}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <MagneticLink href="#experience">View Work</MagneticLink>
              {resume && (
                <MagneticLink href={resume.href} variant="outline" download>
                  <FileDown size={16} /> Download Résumé
                </MagneticLink>
              )}
              <div className="flex items-center gap-1">
                {socials
                  .filter((s) => s.icon === 'github' || s.icon === 'linkedin' || s.icon === 'mail')
                  .map((s) => {
                    const Icon = iconFor[s.icon]
                    return (
                      <motion.a
                        key={s.label}
                        href={s.href}
                        target={s.icon !== 'mail' ? '_blank' : undefined}
                        rel={s.icon !== 'mail' ? 'noreferrer' : undefined}
                        aria-label={s.label}
                        whileHover={prefersReducedMotion ? undefined : { y: -4, scale: 1.08 }}
                        whileTap={prefersReducedMotion ? undefined : { scale: 0.94 }}
                        transition={{ type: 'spring', stiffness: 420, damping: 16 }}
                        className="rounded-full border border-border p-3 text-ink transition-colors hover:border-accent hover:text-accent"
                      >
                        <Icon size={18} />
                      </motion.a>
                    )
                  })}
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
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
