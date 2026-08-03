export function GlowOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="animate-glow-pulse absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-accent/20 blur-[100px]" />
      <div
        className="animate-glow-pulse absolute -right-16 top-2/3 h-64 w-64 rounded-full bg-accent/[0.15] blur-[100px]"
        style={{ animationDelay: '2.5s' }}
      />
    </div>
  )
}
