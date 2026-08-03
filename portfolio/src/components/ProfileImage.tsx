import { useState } from 'react'
import { useContent } from '../i18n/LanguageContext'

export function ProfileImage({ className = '' }: { className?: string }) {
  const { person, ui } = useContent()
  const [errored, setErrored] = useState(false)

  if (errored) {
    return (
      <div
        className={`flex items-center justify-center bg-surface font-mono text-4xl font-semibold text-accent ${className}`}
        role="img"
        aria-label={`${person.name} ${ui.initialsMonogram}`}
      >
        {person.initials}
      </div>
    )
  }

  return (
    <img
      src={person.photo}
      alt={person.name}
      loading="lazy"
      decoding="async"
      onError={() => setErrored(true)}
      className={`object-cover ${className}`}
    />
  )
}
