import { useEffect, useRef } from 'react'
import { useTheme } from '../hooks/useTheme'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

interface Node {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
}

interface Comet {
  x: number
  y: number
  vx: number
  vy: number
  life: number
  maxLife: number
}

const NODE_COUNT = 110
const LINK_DISTANCE = 150
const CURSOR_RADIUS = 210
const COMET_MIN_INTERVAL = 3500
const COMET_MAX_INTERVAL = 7000

function readColor(varName: string): string {
  const raw = getComputedStyle(document.documentElement).getPropertyValue(varName).trim()
  return raw ? raw.split(' ').join(', ') : '0, 0, 0'
}

export function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()
  const prefersReducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = 0
    let height = 0
    let dpr = Math.min(window.devicePixelRatio || 1, 2)
    let nodes: Node[] = []
    let comets: Comet[] = []
    let mouse = { x: -9999, y: -9999 }
    let frameId = 0
    let nextCometAt = 0
    let elapsed = 0
    let lastTime = 0

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      width = rect.width
      height = rect.height
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const seed = () => {
      const count = width < 640 ? Math.round(NODE_COUNT * 0.45) : NODE_COUNT
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
        radius: 1.1 + Math.random() * 1.3,
      }))
      nextCometAt = COMET_MIN_INTERVAL + Math.random() * (COMET_MAX_INTERVAL - COMET_MIN_INTERVAL)
    }

    const spawnComet = () => {
      const fromLeft = Math.random() > 0.5
      const startY = Math.random() * height * 0.6
      const speed = 6 + Math.random() * 4
      const angle = (fromLeft ? 1 : -1) * (0.35 + Math.random() * 0.25)
      comets.push({
        x: fromLeft ? -40 : width + 40,
        y: startY,
        vx: Math.cos(angle) * speed * (fromLeft ? 1 : -1),
        vy: Math.sin(angle) * speed,
        life: 0,
        maxLife: 90,
      })
    }

    const draw = (time: number) => {
      const accent = readColor('--color-accent')
      const lineColor = readColor('--grid-line')
      ctx.clearRect(0, 0, width, height)

      if (!prefersReducedMotion) {
        const delta = lastTime ? time - lastTime : 16.7
        lastTime = time
        elapsed += delta
        if (elapsed >= nextCometAt) {
          spawnComet()
          elapsed = 0
          nextCometAt = COMET_MIN_INTERVAL + Math.random() * (COMET_MAX_INTERVAL - COMET_MIN_INTERVAL)
        }
      }

      for (const node of nodes) {
        if (!prefersReducedMotion) {
          node.x += node.vx
          node.y += node.vy
          if (node.x < 0 || node.x > width) node.vx *= -1
          if (node.y < 0 || node.y > height) node.vy *= -1

          const dx = node.x - mouse.x
          const dy = node.y - mouse.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < CURSOR_RADIUS) {
            const force = (1 - dist / CURSOR_RADIUS) * 0.9
            node.x += (dx / (dist || 1)) * force
            node.y += (dy / (dist || 1)) * force
          }
        }
      }

      // Soft halo following the cursor.
      if (mouse.x > -100 && !prefersReducedMotion) {
        const halo = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, CURSOR_RADIUS)
        halo.addColorStop(0, `rgba(${accent}, 0.1)`)
        halo.addColorStop(1, `rgba(${accent}, 0)`)
        ctx.fillStyle = halo
        ctx.beginPath()
        ctx.arc(mouse.x, mouse.y, CURSOR_RADIUS, 0, Math.PI * 2)
        ctx.fill()
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i]
          const b = nodes[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < LINK_DISTANCE) {
            const midX = (a.x + b.x) / 2
            const midY = (a.y + b.y) / 2
            const cdx = midX - mouse.x
            const cdy = midY - mouse.y
            const cursorDist = Math.sqrt(cdx * cdx + cdy * cdy)
            const nearCursor = cursorDist < CURSOR_RADIUS
            const base = (1 - dist / LINK_DISTANCE) * (nearCursor ? 0.6 : 0.28)
            ctx.strokeStyle = nearCursor ? `rgba(${accent}, ${base})` : `rgba(${lineColor}, ${base})`
            ctx.lineWidth = nearCursor ? 1.3 : 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      for (const node of nodes) {
        const dx = node.x - mouse.x
        const dy = node.y - mouse.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        const near = dist < CURSOR_RADIUS
        if (near) {
          ctx.save()
          ctx.shadowColor = `rgba(${accent}, 0.9)`
          ctx.shadowBlur = 10
          ctx.fillStyle = `rgba(${accent}, 0.95)`
          ctx.beginPath()
          ctx.arc(node.x, node.y, node.radius + 0.6, 0, Math.PI * 2)
          ctx.fill()
          ctx.restore()
        } else {
          ctx.fillStyle = `rgba(${lineColor}, 0.55)`
          ctx.beginPath()
          ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      comets = comets.filter((comet) => comet.life < comet.maxLife)
      for (const comet of comets) {
        comet.x += comet.vx
        comet.y += comet.vy
        comet.life += 1
        const fade = 1 - comet.life / comet.maxLife
        const trailLength = 14
        ctx.save()
        ctx.shadowColor = `rgba(${accent}, 0.8)`
        ctx.shadowBlur = 12
        const gradient = ctx.createLinearGradient(
          comet.x,
          comet.y,
          comet.x - comet.vx * trailLength,
          comet.y - comet.vy * trailLength,
        )
        gradient.addColorStop(0, `rgba(${accent}, ${0.9 * fade})`)
        gradient.addColorStop(1, `rgba(${accent}, 0)`)
        ctx.strokeStyle = gradient
        ctx.lineWidth = 1.5
        ctx.beginPath()
        ctx.moveTo(comet.x, comet.y)
        ctx.lineTo(comet.x - comet.vx * trailLength, comet.y - comet.vy * trailLength)
        ctx.stroke()
        ctx.restore()
      }

      if (!prefersReducedMotion) {
        frameId = requestAnimationFrame(draw)
      }
    }

    const handlePointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse = { x: event.clientX - rect.left, y: event.clientY - rect.top }
    }

    const handlePointerLeave = () => {
      mouse = { x: -9999, y: -9999 }
    }

    resize()
    seed()
    draw(0)

    window.addEventListener('resize', resize)
    canvas.addEventListener('pointermove', handlePointerMove)
    canvas.addEventListener('pointerleave', handlePointerLeave)

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('resize', resize)
      canvas.removeEventListener('pointermove', handlePointerMove)
      canvas.removeEventListener('pointerleave', handlePointerLeave)
    }
  }, [theme, prefersReducedMotion])

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />
}
