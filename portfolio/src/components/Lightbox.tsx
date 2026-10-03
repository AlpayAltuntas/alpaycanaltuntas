import { useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import type { CommunityPhoto } from '../i18n/types'
import { useContent } from '../i18n/LanguageContext'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

const FOCUSABLE_SELECTOR = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'

interface LightboxProps {
  photos: CommunityPhoto[]
  index: number | null
  onClose: () => void
  onIndexChange: (index: number) => void
}

export function Lightbox({ photos, index, onClose, onIndexChange }: LightboxProps) {
  const { ui } = useContent()
  const prefersReducedMotion = usePrefersReducedMotion()
  const isOpen = index !== null
  const dialogRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLElement | null>(null)

  // Lifecycle only: capture/restore focus and lock scroll once per open/close,
  // not on every arrow-key photo navigation (which also changes `index`).
  useEffect(() => {
    if (!isOpen) return

    triggerRef.current = document.activeElement as HTMLElement | null
    dialogRef.current?.focus()
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = ''
      triggerRef.current?.focus()
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowRight') onIndexChange(((index as number) + 1) % photos.length)
      if (event.key === 'ArrowLeft') onIndexChange(((index as number) - 1 + photos.length) % photos.length)
      if (event.key === 'Tab') {
        const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
        if (!focusable || focusable.length === 0) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, index, photos.length, onClose, onIndexChange])

  return (
    <AnimatePresence>
      {isOpen && index !== null && (
        <motion.div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label={photos[index].caption}
          tabIndex={-1}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: prefersReducedMotion ? 0.01 : 0.2 }}
          onClick={onClose}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-bg/95 p-4 backdrop-blur-md outline-none sm:p-10"
        >
          <motion.figure
            onClick={(event) => event.stopPropagation()}
            initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
            transition={{ duration: prefersReducedMotion ? 0.01 : 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative max-h-full max-w-4xl"
          >
            <picture>
              <source srcSet={photos[index].src.replace(/\.jpg$/, '.webp')} type="image/webp" />
              <img
                src={photos[index].src}
                alt={photos[index].alt}
                className="max-h-[75vh] w-auto rounded-xl border border-border object-contain"
              />
            </picture>
            <figcaption className="mt-4 text-center font-mono text-xs text-muted">
              {photos[index].caption}
            </figcaption>

            <button
              type="button"
              aria-label={ui.closePhoto}
              onClick={onClose}
              className="absolute -top-4 -right-4 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-ink transition-colors hover:border-accent hover:text-accent"
            >
              <X size={18} />
            </button>

            {photos.length > 1 && (
              <>
                <button
                  type="button"
                  aria-label={ui.previousPhoto}
                  onClick={() => onIndexChange((index - 1 + photos.length) % photos.length)}
                  className="absolute left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-surface/90 text-ink transition-colors hover:border-accent hover:text-accent sm:-left-14"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  aria-label={ui.nextPhoto}
                  onClick={() => onIndexChange((index + 1) % photos.length)}
                  className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-surface/90 text-ink transition-colors hover:border-accent hover:text-accent sm:-right-14"
                >
                  <ChevronRight size={18} />
                </button>
              </>
            )}
          </motion.figure>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
