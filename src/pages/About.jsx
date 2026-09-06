import { useRef, useState, useEffect } from "react";
import {
  Target,
  ShieldCheck,
  Handshake,
  Gauge,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const timeline = [
  {
    year: "2017",
    text: "Founded in Lahore as a single-line offset printing ink formulator, supplying two local press houses.",
  },
  {
    year: "2022",
    text: "Kids Garment division opens after a founding client asked us to source school-uniform fabric alongside ink.",
  },
  {
    year: "2015",
    text: "Pet Supplies division launches, sourcing feeding and grooming products for regional retail chains.",
  },
  {
    year: "2018",
    text: "Mobile Parts & Accessories division added to serve repair networks and retail counters directly.",
  },
  {
    year: "2022",
    text: "Testing lab consolidated across all four divisions under one shared quality office.",
  },
];

const values = [
  {
    icon: Target,
    title: "One brief, no shortcuts",
    text: "A sample approved in week one should still be the standard in the last container of a three-year contract.",
  },
  {
    icon: ShieldCheck,
    title: "Test before we promise",
    text: "We do not quote a spec we haven’t verified in-house, on our own equipment, against our own samples.",
  },
  {
    icon: Handshake,
    title: "Direct relationships",
    text: "No layered sub-agents between our factories and your order. You deal with the division desk, always.",
  },
  {
    icon: Gauge,
    title: "Honest timelines",
    text: "We quote dispatch dates we can actually hit, and flag delays the week we know about them, not the week of.",
  },
];

const slides = [
  // Removed the ./../../public path in favor of absolute path /bgimg3.jpeg
  // Added w-full h-full object-cover so images fit properly in the slider
  <div key="1" className="w-full h-full bg-transparent">
    <img
      src="/bgimg3.jpeg"
      alt=""
      className="w-full md:h-[500px] h-72 object-cover"
    />
  </div>,
  <div key="2" className="w-full h-full bg-transparent">
    <img
      src="/bgimg2.png"
      alt=""
      className="w-full md:h-[500px] h-72 object-cover"
    />
  </div>,
  <div key="3" className="w-full h-full bg-transparent">
    <img
      src="/bgimg4.jpeg"
      alt=""
      className="w-full md:h-[500px] h-72 object-cover"
    />
  </div>,
  <div key="4" className="w-full h-full bg-transparent">
    <img
      src="/bgimg1.png"
      alt=""
      className="w-full md:h-[500px] h-72 object-cover"
    />
  </div>,
];

export default function About() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Optional: Auto-play the slider every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide((index + slides.length) % slides.length);
  };

  return (
    <div>
      {/* Slider Section */}
      {/* Added relative and overflow-hidden here to make the transform work properly */}
      <div className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full flex-shrink-0">
              {slide}
            </div>
          ))}
        </div>

        {/* Slider Navigation Buttons */}
        <div className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none">
          <button
            onClick={() => goToSlide(currentSlide - 1)}
            className="pointer-events-auto p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => goToSlide(currentSlide + 1)}
            className="pointer-events-auto p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      <div className="font-bold lg:text-xs sm:text-lg uppercase tracking-[0.22em] text-blue-600 pt-12 sm:px-8">
        About the company
      </div>
      <div
        className="mt-3 font-body tracking-wide lg:text-3xl  sm: text-4xl font-medium md:px-12 px-8 text-center"
        style={{ color: "var(--color-brass)" }}
      >
        Twenty-seven years of taking on the parts of the order nobody else
        wanted.
      </div>
      <div className="mt-4 font-body tracking-wide lg:text-sm  sm:text-2xl leading-relaxed text-ink/65 dark:text-paper/65 text-center px-12 md:px-20">
        Nadeem Tariq Enterprises began as a printing ink formulator in Lahore.
        Every division since has started the same way: a client asked us to
        solve one specific sourcing problem, and we built a team around it. We
        still run each division as a fairly independent desk, but they all share
        the same quality office and testing lab, which is why we can guarantee
        the same standard of sourcing, testing and delivery across four very
        different product lines.
      </div>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <span className="font-bold tracking-wide lg:text-xs sm:text-lg uppercase text-blue-600">
              Timeline
            </span>
            <h2 className="mt-3 font-body tracking-wide lg:text-3xl sm:text-4xl font-medium tracking-tight ">
              How four divisions became one
            </h2>
            <p className="mt-4 font-body tracking-wide lg:text-sm sm:text-2xl leading-relaxed text-ink/65 dark:text-paper/65">
              Our divisions were established to address the evolving needs of
              our clients and the unique requirements of different industries.
              Rather than following a one-size-fits-all approach, each division
              was built around specialized expertise, market understanding, and
              dedicated teams focused on delivering reliable solutions.
            </p>
            <p className="mt-4 font-body tracking-wide lg:text-sm sm:text-2xl leading-relaxed text-ink/65 dark:text-paper/65">
              While each division maintains its own specialized operations, all
              teams benefit from our shared infrastructure, including
              centralized logistics, quality control systems, supplier networks,
              and testing facilities. This combination of specialized expertise
              and integrated resources enables us to deliver the flexibility of
              a focused industry partner while maintaining the reliability,
              scalability, and operational strength of an established
              organization.
            </p>
            <p className="mt-4 font-body tracking-wide lg:text-sm sm:text-2xl leading-relaxed text-ink/65 dark:text-paper/65">
              We believe strong partnerships are built through trust,
              transparency, and consistent performance. Every division works
              closely with clients to understand their requirements, improve
              processes, and deliver solutions that create long-term value. Our
              focus is not simply on expanding into new markets, but on
              strengthening the relationships we have built by continuously
              improving quality, reliability, and service excellence across
              every division we operate.
            </p>
          </div>

          <ol className="flex flex-col divide-y divide-paper-line dark:divide-ink-green/20">
            {timeline.map((t) => (
              <li
                key={t.year}
                className="grid grid-cols-[5rem_1fr] gap-4 py-5 sm:grid-cols-[6rem_1fr]"
              >
                <span className="font-body tracking-wide lg:text-xl sm:text-3xl font-bold text-green-600">
                  {t.year}
                </span>
                <p className="font-body tracking-wide lg:text-sm sm:text-2xl leading-relaxed text-ink/75 dark:text-paper/75">
                  {t.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-y border-paper-line bg-paper-alt/40 dark:border-ink-line dark:bg-ink-alt/30 bg-green-600 text-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
          <span className="font-body tracking-wide lg:text-xs sm: text-lg uppercase text-white">
            How we operate
          </span>
          <h2 className="mt-3 font-body tracking-wide lg:text-3xl font-medium sm:text-4xl">
            The four rules that survive every division
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 ">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-md font-body tracking-wide border border-paper-line bg-paper p-6 dark:border-ink-line dark:bg-ink"
              >
                <v.icon size={48} style={{ color: "var(--color-brass)" }} />
                <h3 className="mt-4 lg:text-[15px] sm:text-lg font-body tracking-wide font-semibold">
                  {v.title}
                </h3>
                <p className="mt-2 lg:text-sm sm:text-lg font-body tracking-wide leading-relaxed text-ink/65 dark:text-paper/65">
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <span className="font-bold tracking-wide lg:text-xs sm:text-xl uppercase text-blue-600">
          Leadership
        </span>
        <h2 className="mt-3 font-body tracking-wide lg:text-3xl font-medium sm:text-4xl">
          Division desks
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Ahmad Faraz", "Managing Director", "With the company since 1998"],
            [
              "Sana Riaz",
              "Head of Quality",
              "Oversees testing across all four divisions",
            ],
            [
              "Bilal Chaudhry",
              "Textiles & Garment Lead",
              "Runs the Kids Garment division",
            ],
            [
              "Nadia Kareem",
              "Electronics Sourcing Lead",
              "Runs the Mobile Parts division",
            ],
          ].map(([name, role, note]) => (
            <div
              key={name}
              className="rounded-md border border-paper-line bg-paper p-6 dark:border-ink-line dark:bg-ink bg-black/90 text-white"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full font-body tracking-wide lg:text-lg sm:text-xl italic border border-white">
                {name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <h3 className="mt-4 lg:text-[15px] sm:text-lg font-body tracking-wide font-semibold">
                {name}
              </h3>
              <p className="mt-1 lg:text-sm sm:text-lg font-body tracking-wide text-ink/60 dark:text-paper/60">
                {role}
              </p>
              <p className="mt-2 lg:text-xs sm:text-sm font-body tracking-wide leading-relaxed text-ink/50 dark:text-paper/50">
                {note}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
