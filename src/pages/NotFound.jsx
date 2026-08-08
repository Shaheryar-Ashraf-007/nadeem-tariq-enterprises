import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-start justify-center px-5 py-24 sm:px-8">
      <span className="font-mono text-xs uppercase tracking-[0.22em]" style={{ color: 'var(--color-brass)' }}>
        Ledger Entry Not Found
      </span>
      <h1 className="mt-3 font-display text-5xl font-medium tracking-tight sm:text-6xl">404</h1>
      <p className="mt-4 text-base leading-relaxed text-ink/65 dark:text-paper/65">
        This page isn&rsquo;t indexed in our catalog. It may have moved, or the entry never existed.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center gap-2 rounded-sm px-6 py-3 text-sm font-medium text-paper"
        style={{ backgroundColor: 'var(--color-brass)' }}
      >
        <ArrowLeft size={16} />
        Back to home
      </Link>
    </div>
  )
}
