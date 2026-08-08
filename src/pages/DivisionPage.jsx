import { useParams, Navigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { getDivisionByKey } from "../data/divisions";
import React from "react";

export default function DivisionPage() {
  const { key } = useParams();
  const division = getDivisionByKey(key);

  if (!division) return <Navigate to="/" replace />;

  const Icon = division.icon;

  return (
    <div className="bg-white">

      {/* Hero */}
      <section
  className="relative md:h-[300px] h-[220px] bg-cover bg-center"
  style={{
    backgroundImage: `url(${division.headerImage})`,
  }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/50" />

  {/* Content */}
  <div className="relative z-10 flex h-full flex-col items-center justify-center text-white px-6">
    <h1 className="text-4xl md:text-7xl font-bold text-center font-body tracking-wide">
      {division.name}
    </h1>

    <p className="mt-4 max-w-3xl text-center text-lg tracking-wide font-body">
      {division.tagline}
    </p>
  </div>
</section>
      {/* Summary */}
      <section className="">
        <div className="mt-12 md:px-28 px-6">
          <p className="text-center md:text-xl text-sm font-body tracking-wide">
            {division.summary}
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#ffff] py-14 font-body tracking-wide">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">

          {division.stats.map((item) => (
            <div
              key={item.label}
              className="bg-black rounded-xl shadow-sm p-8 text-center font-body tracking-wide"
            >
              <h3 className="text-4xl font-bold text-green-600">
                {item.value}
              </h3>

              <p className="mt-3 text-[#ffff]">
                {item.label}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* Product Lines */}
      <section className="max-w-7xl mx-auto px-6 font-body tracking-wide">

        <div className="flex items-center gap-3 mb-10">
          <Icon className="text-green-600" size={28} />
          <h2 className="text-3xl font-bold font-body tracking-wide">
            Product Lines
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
  {division.lines.map((line) => (
    <div
      key={line.title}
      className="relative h-[350px] rounded-2xl overflow-hidden group font-body tracking-wide"
      style={{
        backgroundImage: `url(${line.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/55 group-hover:bg-black/40 transition duration-300" />

      <div className="absolute bottom-0 p-8 text-white z-10">
        <h3 className="text-3xl font-bold font-body tracking-wide">{line.title}</h3>

        <p className="mt-3 text-gray-200 font-body tracking-wide">
          {line.desc}
        </p>
      </div>
    </div>
  ))}
</div>
      </section>

      {/* Process */}
      <section className="bg-white py-20 font-body tracking-wide">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-3xl font-bold mb-10">Our Process</h2>

    <div className="flex flex-wrap md:flex-nowrap items-center justify-between gap-4">
      {division.process.map((step, index) => (
        <React.Fragment key={step}>
          <div className="flex-1 min-w-[180px] border rounded-xl p-6 bg-gray-100 dark:bg-gray-50 shadow-sm hover:shadow-lg transition">
            <span className="text-green-600 text-3xl font-bold font-body tracking-wide">
              {String(index + 1).padStart(2, "0")}
            </span>

            <p className="mt-5 leading-7 text-black font-body tracking-wide">{step}</p>
          </div>

          {index !== division.process.length - 1 && (
            <div className="hidden md:flex items-center justify-center">
              <ArrowRight
                size={34}
                className="text-green-600"
                strokeWidth={2.5}
              />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  </div>
</section>

    </div>
  );
}