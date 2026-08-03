import { useRef, type MouseEvent, type ReactNode } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

interface MagneticLinkProps {
  href: string
  children: ReactNode
  className?: string
  variant?: 'solid' | 'outline'
  target?: string
  rel?: string
  download?: boolean
}

export function MagneticLink({
  href,
  children,
  className = '',
  variant = 'solid',
  target,
  rel,
  download,
}: MagneticLinkProps) {
  const ref = useRef<HTMLAnchorElement>(null)
  const prefersReducedMotion = usePrefersReducedMotion()

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 300, damping: 20, mass: 0.5 })
  const springY = useSpring(y, { stiffness: 300, damping: 20, mass: 0.5 })

  const handleMouseMove = (event: MouseEvent<HTMLAnchorElement>) => {
    if (prefersReducedMotion || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const relX = event.clientX - rect.left - rect.width / 2
    const relY = event.clientY - rect.top - rect.height / 2
    x.set(relX * 0.25)
    y.set(relY * 0.4)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  const base =
    'inline-flex items-center gap-2 rounded-full px-6 py-3 font-sans text-sm font-medium transition-colors'
  const variants =
    variant === 'solid'
      ? 'bg-accent text-accent-ink hover:opacity-90'
      : 'border border-border text-ink hover:border-accent hover:text-accent'

  return (
    <motion.a
      ref={ref}
      href={href}
      target={target}
      rel={rel}
      download={download}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`${base} ${variants} ${className}`}
    >
      {children}
    </motion.a>
  )
}
