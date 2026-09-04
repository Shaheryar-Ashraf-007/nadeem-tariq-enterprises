import { divisions } from '../data/divisions'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Colour match on our spot inks has held steady across eleven reorders now. That consistency is the whole reason we stopped shopping around.',
    name: 'Farrukh Iqbal',
    role: 'Production Head, Meridian Press House',
    division: 'Offset Printing Ink',
  },
  {
    quote:
      'They flagged a fabric batch that failed their own flame-retardancy test before we ever saw it. That call cost them a week of schedule and saved us a recall.',
    name: 'Layla Haidari',
    role: 'Buyer, Northgate Kids Retail Group',
    division: 'Kids Garment',
  },
  {
    quote:
      'We switched three SKUs to their feeding line after a single durability test. Return rate on those lines dropped by more than half.',
    name: 'Omar Sheikh',
    role: 'Category Manager, PetWell Stores',
    division: 'Pet Supplies',
  },
  {
    quote:
      'Screen assemblies arrive graded and labelled by model, which sounds basic until you\u2019ve dealt with a supplier who doesn\u2019t bother.',
    name: 'Priya Nair',
    role: 'Operations Lead, FixPoint Repair Network',
    division: 'Mobile Parts',
  },
  {
    quote:
      'Their logistics desk handles four completely different product categories from us and somehow every shipment still lands on the date they quoted.',
    name: 'Grace Mwangi',
    role: 'Import Manager, Savanna Distribution',
    division: 'Multiple divisions',
  },
  {
    quote:
      'We asked for a low-migration ink for food packaging and got a full SDS and batch trace back within days, not the usual runaround.',
    name: 'Tomasz Nowak',
    role: 'Procurement Director, Baltic Print Group',
    division: 'Offset Printing Ink',
  },
]

export default function Testimonials() {
  return (
    <div>
      {/* <PageHeader
        eyebrow="Reviews"
        title="What buyers say after the second and third order, not just the first."
        description="Anyone can impress on a sample run. These are notes from clients who have reordered at least twice."
      /> */}


    <div className="relative">
  {/* Background Image */}
  <img
    src="/reviews.png"
    alt="Quality Hero"
    className="w-full md:h-[400px]"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Content */}
  <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-white">
    <h1 className="md:text-4xl text-xl font-bold text-center">
What buyers say after the second and third order, not just the first.    </h1>

    <p className="mt-4 text-center text-md max-w-2xl md:text-xl text-gray-200">
      Anyone can impress on a sample run. These are notes from clients who have reordered at least twice.
    </p>
  </div>
</div>
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 ">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => {
            const div = divisions.find((d) => d.name === t.division)
            return (
              <figure
                key={t.name}
                className="flex flex-col justify-between rounded-md bg-black/95 text-white border border-paper-line bg-paper p-6 dark:border-ink-line dark:bg-ink"
              >
                <div>
                  <Quote size={22} className="text-green-600 font-body tracking-wide" />
                  <blockquote className="mt-4 font-body tracking-wide text-sm leading-relaxed text-ink/80 dark:text-paper/80">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                </div>
                <figcaption className="mt-6  flex items-center justify-between border-t border-paper-line pt-4 dark:border-ink-line">
                  <div>
                    <div className="text-sm font-body tracking-wide font-semibold">{t.name}</div>
                    <div className="text-xs font-body tracking-wide text-ink/55 dark:text-paper/55">{t.role}</div>
                  </div>
                  <span
                    className="rounded-full px-2.5 py-1 text-[11px] font-medium  bg-white text-black"
                    
                  >
                    {t.division}
                  </span>
                </figcaption>
              </figure>
            )
          })}
        </div>
      </section>
    </div>
  )
}
