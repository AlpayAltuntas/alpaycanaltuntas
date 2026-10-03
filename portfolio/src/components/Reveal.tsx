import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

interface RevealProps {
  children: ReactNode
  delay?: number
  className?: string
  y?: number
  /** Opt-in scale-in, for the rare section that should settle rather than just fade up. */
  scale?: number
}

export function Reveal({ children, delay = 0, className = '', y = 24, scale }: RevealProps) {
  const prefersReducedMotion = usePrefersReducedMotion()

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, ...(scale !== undefined && { scale }) }}
      whileInView={{ opacity: 1, y: 0, ...(scale !== undefined && { scale: 1 }) }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: scale !== undefined ? 0.7 : 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}
