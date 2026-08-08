import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

export default function DivisionTile({ division }) {
  const Icon = division.icon
  return (
    <Link
      to={division.slug}
      className="group relative flex flex-col justify-between overflow-hidden rounded-md border border-paper-line bg-paper p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-ink-line dark:bg-ink-alt sm:p-7"
    >
      <div
        className="absolute -right-8 -top-8 h-28 w-28 rounded-full opacity-20 transition-transform duration-500 group-hover:scale-125"
        style={{ backgroundColor: `var(--color-${division.color})` }}
      />
      <div className="relative">
        <div className="flex items-center justify-between">
          <span
            className="flex h-11 w-11 items-center justify-center rounded-sm"
            style={{ backgroundColor: `var(--color-${division.color}-soft)` }}
          >
            <Icon size={20} style={{ color: `var(--color-${division.color})` }} />
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/40 dark:text-paper/40">
            {division.code}
          </span>
        </div>
        <h3 className="mt-5 font-display text-xl font-medium tracking-tight">{division.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink/65 dark:text-paper/65">{division.tagline}</p>
      </div>
      <div className="relative mt-6 flex items-center gap-1.5 text-sm font-medium" style={{ color: `var(--color-${division.color})` }}>
        Explore division
        <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </Link>
  )
}
