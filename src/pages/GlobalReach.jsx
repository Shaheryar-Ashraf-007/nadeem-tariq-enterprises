import PageHeader from '../components/PageHeader'
import { divisions } from '../data/divisions'

const regions = [
  {
    name: 'South Asia',
    countries: 'Pakistan, India, Bangladesh, Sri Lanka',
    divisions: ['Pet Supplies', 'Kids Garment', 'Offset Printing Ink', 'Mobile Parts & Accessories'],
  },
  {
    name: 'Middle East & Gulf',
    countries: 'UAE, Saudi Arabia, Qatar, Oman',
    divisions: ['Kids Garment', 'Offset Printing Ink', 'Mobile Parts & Accessories'],
  },
  {
    name: 'East & Southeast Asia',
    countries: 'China, Vietnam, Malaysia, Indonesia',
    divisions: ['Pet Supplies', 'Mobile Parts & Accessories'],
  },
  {
    name: 'Europe',
    countries: 'Germany, Poland, Netherlands, UK',
    divisions: ['Kids Garment', 'Offset Printing Ink'],
  },
  {
    name: 'Africa',
    countries: 'Kenya, Nigeria, Egypt, South Africa',
    divisions: ['Pet Supplies', 'Kids Garment'],
  },
  {
    name: 'North America',
    countries: 'United States, Canada',
    divisions: ['Mobile Parts & Accessories', 'Pet Supplies'],
  },
]

const logistics = [
  ['Sea freight', 'FCL and LCL bookings from Karachi Port for bulk orders across all divisions.'],
  ['Air freight', 'Used for mobile parts and sample shipments where lead time matters more than cost.'],
  ['Bonded warehousing', 'Consolidation storage in Lahore before export documentation is finalised.'],
  ['Customs documentation', 'In-house team handles certificates of origin, phytosanitary and safety filings.'],
]

export default function GlobalReach() {
  return (
    <div>
      <PageHeader
        eyebrow="Global reach"
        title="Twenty-plus markets, served from one dispatch office in Lahore."
        description="Every division exports independently, but shipping, documentation and freight booking run through a single logistics desk so clients only deal with one point of contact regardless of what they're ordering."
        image="/office.jpeg"
      />

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <span className="font-bold tracking-wide lg:text-xs sm:text-xl uppercase  text-blue-600">
          Regions served
        </span>
        <h2 className="mt-3 font-bold tracking-wide lg:text-3xl  sm:text-4xl">Where our shipments land</h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {regions.map((r) => (
            <div key={r.name} className="rounded-md border text-white bg-black/90 border-paper-line bg-paper p-6 dark:border-ink-line dark:bg-ink">
              <h3 className="font-body tracking-wide lg:text-lg sm:text-2xl font-medium">{r.name}</h3>
              <p className="mt-1 lg:text-sm sm:text-md font-body tracking-wide text-ink/55 dark:text-paper/55">{r.countries}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {r.divisions.map((d) => {
                  const div = divisions.find((x) => x.name === d)
                  if (!div) return null
                  return (
                    <span
                      key={d}
                      className="rounded-full text-green-600 bg-white px-3 py-2 text-[16px] font-medium"
                     
                    >
                      {div.short}
                    </span>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-paper-line bg-paper-alt/40 dark:border-ink-line dark:bg-ink-alt/30 bg-green-600 text-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
          <span className="font-body tracking-wide lg:text-xs sm:text-xl uppercase" style={{ color: 'var(--color-brass)' }}>
            Logistics
          </span>
          <h2 className="mt-3 font-bold tracking-wide lg:text-3xl  sm:text-4xl">How orders actually move</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {logistics.map(([title, desc], i) => (
              <div key={title} className="flex gap-4">
                <span className="font-mono text-lg text-ink/35 dark:text-paper/35">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="lg:text-[15px] sm:text-2xl font-semibold">{title}</h3>
                  <p className="mt-1.5 lg:text-sm sm:text-lg leading-relaxed text-ink/65 dark:text-paper/65">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}