import { useState } from 'react'
import { person } from '../data/content'

export function ProfileImage({ className = '' }: { className?: string }) {
  const [errored, setErrored] = useState(false)

  if (errored) {
    return (
      <div
        className={`flex items-center justify-center bg-surface font-mono text-4xl font-semibold text-accent ${className}`}
        role="img"
        aria-label={`${person.name} — initials monogram`}
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
