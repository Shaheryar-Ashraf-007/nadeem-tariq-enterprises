import PageHeader from '../components/PageHeader'
import { divisions } from '../data/divisions'
import { FlaskConical, FileCheck, Repeat, PackageCheck } from 'lucide-react'

const pillars = [
  {
    icon: FlaskConical,
    title: 'In-house testing',
    text: 'Every division keeps its own testing bench: viscosity and colour labs for ink, fabric and safety testing for garments, cycle testing for pet hardware, functional testing for mobile parts.',
  },
  {
    icon: FileCheck,
    title: 'Documented standards',
    text: 'Specs are written down before production starts, not reconstructed afterward. Clients receive the same spec sheet we test against.',
  },
  {
    icon: Repeat,
    title: 'Batch consistency',
    text: 'Approved samples are retained physically and on file, so batch 40 is checked against the original, not against batch 39.',
  },
  {
    icon: PackageCheck,
    title: 'Pre-dispatch inspection',
    text: 'A separate inspection pass, independent of the production line, signs off before anything is palletised.',
  },
]

const compliance = [
  ['Kids Garment', 'Flame-retardancy compliance, azo-dye-free certification, tag-free construction for under-3 sizing.'],
  ['Pet Supplies', 'Non-toxic material certification for feeding and chew-adjacent products, EU REACH-aligned material sourcing.'],
  ['Offset Printing Ink', 'Low-migration formulations available for food-adjacent packaging, batch-level SDS documentation.'],
  ['Mobile Parts & Accessories', 'Cell-certified battery sourcing, RoHS-aligned component sourcing, model-specific OEM spec matching.'],
]

export default function Quality() {
  return (
    <div>
      {/* <PageHeader
        eyebrow="Quality & compliance"
        title="The same four checks, whether it's ink or a phone screen."
        description="Quality at Ravi Trading Co. isn't a single certificate on a wall. It's four separate testing benches that all report into one quality office, using the same escalation process when something fails."
      /> */}

    <div className="relative">
  {/* Background Image */}
  <img
    src="/quality.png"
    alt="Quality Hero"
    className="w-full md:h-[400px] object-cover"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Content */}
  <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-white">
    <h1 className="text-4xl md:text-7xl font-bold text-center font-body tracking-wide">
      Quality & Compliance
    </h1>

    <p className=" font-body tracking-wide mt-4 text-center max-w-2xl text-lg md:text-xl text-gray-200">
      Delivering trusted products through rigorous quality assurance,
      compliance, and continuous improvement across all our business divisions.
    </p>
  </div>
</div>
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 bg-green-600 text-white">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <div key={p.title} className="rounded-md border border-paper-line bg-paper p-6 dark:border-ink-line dark:bg-ink">
              <p.icon size={22} style={{ color: 'var(--color-brass)' }} />
              <h3 className="mt-4 text-[15px] font-body tracking-wide font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm font-body tracking-wide text-ink/65 dark:text-paper/65">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
          <span className="font-body tracking-wide text-red-600 text-xs uppercase" style={{ color: 'var(--color-brass)' }}>
            Division-specific compliance
          </span>
          <h2 className="mt-3 font-body tracking-wide text-3xl font-medium sm:text-4xl">
            What each division tests for
          </h2>
          <div className="mt-10 flex flex-col divide-y-[3px] divide-paper-line dark:divide-green-600 ">
            {compliance.map(([name, desc]) => {
              const div = divisions.find((d) => d.name === name)
              if (!div) return null
              const Icon = div.icon
              return (
                <div key={name} className="grid gap-4 py-6 sm:grid-cols-[13rem_1fr] sm:items-center">
                  <div className="flex items-center gap-3">
                    <span
                      className="flex h-9 w-9 items-center justify-center rounded-sm"
                      style={{ backgroundColor: `var(--color-${div.color}-soft)` }}
                    >
                      <Icon size={16} className='text-green-600' />
                    </span>
                    <span className="text-sm font-body tracking-wide font-semibold text-green-600">{name}</span>
                  </div>
                  <p className="text-sm font-body tracking-wide leading-relaxed text-ink/70 dark:text-paper/70">{desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}