export function ScanLine() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-x-0 h-40 animate-scan-line bg-gradient-to-b from-transparent via-accent/[0.08] to-transparent" />
    </div>
  )
}
