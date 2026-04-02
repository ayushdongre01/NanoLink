import type { ReactNode } from "react"

type PageShellProps = {
  children: ReactNode
  className?: string
}

/**
 * Shared page frame: full-height main, centered content, subtle decorative background.
 */
export default function PageShell({ children, className = "" }: PageShellProps) {
  return (
    <main
      className={`relative min-h-[calc(100vh-4rem)] overflow-hidden px-4 py-10 sm:px-6 lg:px-8 ${className}`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(124,58,237,0.18),transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-1/4 -z-10 h-96 w-96 rounded-full bg-fuchsia-400/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 bottom-0 -z-10 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl"
      />
      <div className="relative mx-auto w-full max-w-5xl">{children}</div>
    </main>
  )
}
