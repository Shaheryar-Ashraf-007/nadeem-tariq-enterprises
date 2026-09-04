import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { divisions } from "../data/divisions";
import { Link } from "react-router-dom";
import VideoBackground from "./../components/Hero3dback";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollContainerRef = useRef(null);

  // Generate 40 random particles only once on mount
  const particles = useMemo(() => {
    return Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      size: Math.random() * 6 + 2,
      left: Math.random() * 100,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 10,
      opacity: Math.random() * 0.5 + 0.3,
    }));
  }, []);

  // Your exact divs in an array
  const slides = [
    <div className=" w-full aurora bg-transparent">
      <img src="/pets.png" alt="" />
    </div>,
    <div className=" w-full bg-transparent">
      <img src="/mobile.png" alt="" />
    </div>,
    <div className=" w-full bg-transparent">
      <img src="/ink.png" alt="" />
    </div>,
    <div className=" w-full bg-transparent">
      <img src="/kids.png" alt="" />
    </div>,
  ];

  const images = [
    "/conference.png",
    "/image2.png",
    "/image3.png",
    "/image4.png",
  ];

  const divisionCardImages = [
    "/division-1.png",
    "/division-2.png",
    "/division-3.png",
    "/division-4.png",
  ];
  const ethosImages = {
    topRight: "/ethos-top.png",
    bottomLeft: "/ethos-bottom.png",
  };

  // Auto-slide logic using useEffect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const amount = direction === "left" ? -300 : 300;
      scrollContainerRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  return (
    // Wrap the entire page in your VideoBackground component.
    // We pass override classes to ensure the page can scroll and isn't cut off at 700px
    // ADDED: [font-family:var(--font-display)] to apply your CSS font globally to this page
    <VideoBackground className="!h-auto !overflow-x-hidden min-h-screen [font-family:var(--font-display)]">
      
      {/* The old fixed background (blobs + particles) has been removed 
          because the VideoBackground is now providing the background. */}

      {/* Slider Track */}
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

      {/* ADDED bg-transparent here */}
      <section className=" mt-8 py-14 sm:py-20 lg:py-0 bg-transparent bg-[#ffff]">
        <div className="max-w-6xl mx-auto px-4 md:px-4 grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="flex flex-col gap-6">
            <span className="text-sm font-semibold tracking-widest text-blue-600 uppercase">
              Who We Are
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-black leading-tight">
              Delivering Quality Across Diverse Industries
            </h2>
            <p className="text-lg leading-relaxed tracking-wider font-body">
              We are a diversified business committed to delivering premium
              products across multiple industries. From high-quality pet
              supplies and innovative mobile accessories to professional offset
              printing inks and stylish kids' garments, we focus on providing
              products that combine quality, reliability, and value.
            </p>
            <p className="text-lg text-black leading-relaxed tracking-wider font-body">
              With a customer-first approach and strong partnerships with
              trusted manufacturers worldwide, we continuously strive to meet
              evolving market demands. Our dedication to excellence, innovation,
              and long-term relationships enables us to serve businesses and
              customers with products they can trust every day.
            </p>

            <div className="flex gap-8 mt-4 font-body tracking-wide">
              <div>
                <h3 className="text-3xl font-bold text-black">4</h3>
                <p className="text-black">Core Business Units</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-black">Global</h3>
                <p className="text-black">Sourcing Network</p>
              </div>
            </div>
          </div>

          {/* Image Content */}
          <div className="relative">
            <div className="relative w-full h-[450px] overflow-hidden rounded-2xl shadow-xl">
              <div
                className="flex w-full h-full transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {images.map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt={`Our Team ${index + 1}`}
                    className="w-full h-[450px] object-cover flex-shrink-0"
                  />
                ))}
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-blue-100 rounded-2xl -z-10 hidden md:block"></div>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-8 lg:py-24 bg-transparent overflow-hidden text-white font-display">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10 lg:px-16 ">
          <div className="flex items-end justify-between mb-8 sm:mb-12 text-black">
            <div>
              <span className="text-sm font-semibold tracking-widest text-blue-600 uppercase">
                Our Portfolio
              </span>
              <h2 className="mt-2 sm:mt-3 text-2xl sm:text-4xl font-bold tracking-tight lg:text-5xl text-black">
                Four industries, indexed
              </h2>
            </div>
            <div className="hidden sm:flex items-center gap-2 shrink-0 ">
              <button
                onClick={() => scroll("left")}
                aria-label="Scroll left"
                className="p-3 border border-ink/10 dark:border-paper/10 hover:bg-ink/5 dark:hover:bg-paper/5 transition-colors rounded-sm"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => scroll("right")}
                aria-label="Scroll right"
                className="p-3 border border-ink/10 dark:border-paper/10 hover:bg-ink/5 dark:hover:bg-paper/5 transition-colors rounded-sm"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        <div
          ref={scrollContainerRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto  scrollbar-hide px-4 sm:px-6 md:px-10 lg:px-16 pb-4"
        >
          {divisions.map((d, i) => {
            return (
              <Link
                key={d.key}
                to={d.slug}
                className="group relative snap-start shrink-0 min-w-[80vw] sm:min-w-[55vw] md:min-w-[40vw] lg:min-w-[30vw] h-[380px] sm:h-[440px] lg:h-[500px] overflow-hidden rounded-sm"
              >
                <img
                  src={divisionCardImages[i] || "/fallback.jpg"}
                  alt={d.name}
                  className="absolute inset-0 h-full w-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 z-10 transition-transform duration-500 group-hover:-translate-y-2">
                  <span className="text-blue-600 font-body text-xs uppercase tracking-widest">
                    {d.code}
                  </span>
                  <h3 className="mt-2 text-xl sm:text-2xl lg:text-3xl font-body font-bold text-paper">
                    {d.name}
                  </h3>
                  <div className="mt-3 sm:mt-4 flex items-center gap-2 text-paper/70 text-sm opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
                    View Catalog <ArrowUpRight size={14} />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ADDED bg-transparent here */}
      <section className="py-14 sm:py-20 lg:py-0 bg-transparent font-body">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-sm font-semibold tracking-widest uppercase text-[#e2231a]">
                Our Ethos
              </span>
              <h2 className="mt-3 sm:mt-4 text-2xl sm:text-4xl font-bold tracking-wider lg:text-5xl leading-tight">
                Different products. The same three questions, every time.
              </h2>
              <div className="mt-6 sm:mt-10 space-y-6 sm:space-y-8 tracking-wide">
                {[
                  [
                    "Can it be tested?",
                    "Every division runs incoming and outgoing QA specific to its own materials and standards.",
                  ],
                  [
                    "Can it be repeated?",
                    "Formulas, cuts, and specs are logged so batch 400 matches the approved sample from batch one.",
                  ],
                  [
                    "Can it be traced?",
                    "Lot numbers, mill sources and press logs are kept for every shipment, not just the flagged ones.",
                  ],
                ].map(([q, a]) => (
                  <div key={q} className="flex gap-4 sm:gap-5">
                    <CheckCircle2
                      size={22}
                      className="text-[#e2231a] shrink-0 mt-1"
                    />
                    <div>
                      <h3 className="text-base sm:text-lg font-bold">{q}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-ink/60 dark:text-paper/60">
                        {a}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-[360px] sm:h-[480px] lg:h-[600px] w-full mt-4 lg:mt-0">
              <div className="absolute top-0 right-0 w-3/4 h-3/4 overflow-hidden rounded-sm shadow-2xl z-10">
                <img
                  src={ethosImages.topRight}
                  alt="Industrial"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 w-3/4 h-3/4 overflow-hidden rounded-sm shadow-2xl border-4 border-paper dark:border-ink">
                <img
                  src={ethosImages.bottomLeft}
                  alt="Quality Control"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 lg:py-24 bg-transparent text-white ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10 lg:px-16 ">
          <div className="relative overflow-hidden rounded-sm bg-black p-6 sm:p-12 lg:p-20">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-[-20deg] translate-x-32 pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 sm:gap-10 rounded-full ">
              <div className="max-w-2xl">
                <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white tracking-wide leading-tight">
                  Have a spec sheet or a sample in mind?
                </h2>
                <p className="mt-3 sm:mt-4 text-paper/80 text-base sm:text-lg tracking-wide">
                  Send it to any division and we&rsquo;ll reply with sourcing
                  timeline and a sample quote within three working days.
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex w-full sm:w-auto shrink-0 items-center rounded-full justify-center gap-2 bg-[#e2231a] rounded=md text-white px-8 sm:px-10 py-4 sm:py-5 text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                Start a conversation
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
    </VideoBackground>
  );
};

export default Home;