import { motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      onClick={toggleTheme}
      className="relative flex h-8 w-14 shrink-0 items-center rounded-full border border-border bg-surface px-1 transition-colors focus-visible:outline-2"
    >
      <Sun size={13} strokeWidth={2} className="absolute left-1.5 text-muted" aria-hidden />
      <Moon size={13} strokeWidth={2} className="absolute right-1.5 text-muted" aria-hidden />
      <motion.span
        layout
        transition={{ type: 'spring', stiffness: 500, damping: 32 }}
        className="z-10 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-accent-ink shadow-sm"
        style={{ marginLeft: isDark ? 'auto' : 0 }}
      >
        {isDark ? <Moon size={13} strokeWidth={2.5} /> : <Sun size={13} strokeWidth={2.5} />}
      </motion.span>
    </button>
  )
}
