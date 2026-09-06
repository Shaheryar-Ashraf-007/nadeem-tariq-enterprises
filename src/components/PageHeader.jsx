export default function PageHeader({
  eyebrow,
  title,
  description,
  image,
}) {
  return (
    <section className="border-b border-paper-line bg-paper-alt/40 dark:border-ink-line dark:bg-ink-alt/30">
      <div className="mx-auto max-w-7xl px-5 pb-14 pt-16 sm:px-8 sm:pt-20 lg:px-10">

        <div className=" lg:flex lg:flex-row items-center justify-between gap-10 animate-fade-up">

          {/* Content */}
          <div className="flex-1">
            {eyebrow && (
              <span className="font-mono font-bold lg:text-xs  sm:text-xl text-blue-600 uppercase tracking-[0.22em]">
                {eyebrow}
              </span>
            )}

            <h1 className="mt-3 max-w-3xl font-display font-medium leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              {title}
            </h1>

            {description && (
              <p className="mt-5 sm:mb-8 w-full lg:text-base sm:text-2xl leading-relaxed text-ink/70 dark:text-paper/70  ">
                {description}
              </p>
            )}
          </div>


          {/* Image */}
          {image && (
            <div className="flex-1 flex justify-center md:justify-end">
              <img
                src={image}
                alt={title}
                className="w-full max-w-md rounded-2xl object-cover shadow-lg"
              />
            </div>
          )}

        </div>

      </div>
    </section>
  )
}