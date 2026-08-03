import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { usePrefersReducedMotion } from './usePrefersReducedMotion'

export function useCountUp(target: number, durationMs = 1400) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })
  const prefersReducedMotion = usePrefersReducedMotion()
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return

    if (prefersReducedMotion) {
      setValue(target)
      return
    }

    let frame: number
    const start = performance.now()

    const tick = (now: number) => {
      const progress = Math.min((now - start) / durationMs, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(eased * target))
      if (progress < 1) {
        frame = requestAnimationFrame(tick)
      }
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, target, durationMs, prefersReducedMotion])

  return { ref, value }
}
