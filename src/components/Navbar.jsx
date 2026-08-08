import { useState, useRef, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, ChevronDown, Search } from "lucide-react";
import { divisions } from "../data/divisions";

// Corporate nav links
const navLinks = [
  { to: "/about", label: "About Us" },
  { to: "/global-reach", label: "Our Businesses" },
  { to: "/quality", label: "Sustainability" },
  { to: "/testimonials", label: "Investors" },
  { to: "/contact", label: "Media" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [divOpen, setDivOpen] = useState(false);
  const divRef = useRef(null);

  // Click outside handler for dropdown
  useEffect(() => {
    function handleClick(e) {
      if (divRef.current && !divRef.current.contains(e.target))
        setDivOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const linkBase =
    "text-[15px] font-medium tracking-wide transition-colors duration-200";
  // Using the requested corporate colors for active and inactive states
  const activeClass = "text-[#003c71] font-bold";
  const inactiveClass = "text-gray-700 hover:text-[#003c71]";

  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      {/* =========================================
          2. MAIN NAVBAR
      ========================================= */}
      {/* ADDED: items-center and justify-between here to align everything properly */}
      <div className="mx-auto flex h-20 max-w-7xl gap-12 justify-between px-6 sm:px-8 lg:px-16">
        {/* LOGO LINK */}
        {/* ADDED: shrink-0 so the logo never gets squished */}
        <Link to="/" end className="shrink-0 flex items-center">
          {/* FIXED: src path and added sizing classes h-12 w-auto */}
          <img
            src="/logo1.png"
            alt="Company Logo"
            className="md:h-16 h-12 object-contain"
          />
          <span className=" leading-tight tracking-wider font-semibold text-gray-700">
            Nadeem Tariq
            <br />
            <span className="font-medium text-green-600 tracking-[0.08em]">ENTERPRISES</span>
          </span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden lg:flex items-center space-x-8">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${linkBase} ${isActive ? activeClass : inactiveClass} relative group font-semibold `
            }
          >
            Home
            <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-[#e2231a] transition-all duration-300 group-hover:w-full"></span>
          </NavLink>

          {/* DIVISIONS DROPDOWN */}
          <div className="relative" ref={divRef}>
            <button
              onClick={() => setDivOpen((v) => !v)}
              className={`${linkBase} ${divOpen ? activeClass : inactiveClass} flex items-center gap-1.5 relative group font-semibold`}
              aria-expanded={divOpen}
            >
              Divisions
              <ChevronDown
                size={14}
                className={`transition-transform duration-300 font-semibold ${divOpen ? "rotate-180" : ""}`}
              />
              <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-[#e2231a] transition-all duration-300 group-hover:w-full"></span>
            </button>

            {divOpen && (
              <div className="absolute left-1/2 top-full mt-4 w-80 -translate-x-1/2 rounded-2xl border border-gray-100 bg-white/90 p-3 shadow-2xl backdrop-blur-xl animate-fade-up">
                {/* Dropdown Arrow Pointer */}
                <div className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 border-l border-t border-gray-100 bg-white/90 backdrop-blur-xl" />

                <div className="relative z-10 grid gap-1">
                  {divisions.map((d) => (
                    <Link
                      key={d.key}
                      to={d.slug}
                      onClick={() => setDivOpen(false)}
                      className="group/item flex items-center gap-4 rounded-xl p-3 transition-all duration-300 hover:bg-gray-50 hover:shadow-md"
                    >
                      <span
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-100 bg-gradient-to-br from-gray-50 to-transparent shadow-sm transition-transform duration-300 group-hover/item:scale-110"
                        style={{
                          backgroundColor: `var(--color-${d.color}-soft)`,
                        }}
                      >
                        <d.icon
                          size={18}
                          style={{ color: `var(--color-${d.color})` }}
                        />
                      </span>
                      <span className="flex flex-col">
                        <span className="text-sm font-semibold text-[#003c71]">
                          {d.name}
                        </span>
                        <span className="font-mono text-[10px] uppercase tracking-wider text-gray-500">
                          {d.code}
                        </span>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {navLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `${linkBase} ${isActive ? activeClass : inactiveClass} relative group font-semibold`
              }
            >
              {l.label}
              <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-[#e2231a] transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
          ))}
        </nav>

        {/* RIGHT SIDE: CTA & MOBILE TOGGLE */}
        <div className="flex items-center gap-4">
          {/* Corporate CTA Button */}
          <Link
            to="/contact"
            className="hidden lg:block bg-[#e2231a] text-white px-6 py-2.5 rounded text-sm font-semibold hover:bg-[#c41d16] transition-colors"
          >
            Get in Touch
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-[#003c71] focus:outline-none"
            aria-label="Toggle Menu"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* =========================================
          3. MOBILE FROSTED GLASS MENU
      ========================================= */}
      {open && (
        <div className="lg:hidden border-t border-gray-100 bg-white/95 backdrop-blur-2xl px-6 pb-8 pt-4 max-h-[80vh] overflow-y-auto">
          <nav className="flex flex-col gap-2">
            <NavLink
              to="/"
              end
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `py-3 text-lg font-semibold ${isActive ? "text-[#003c71]" : "text-gray-700"}`
              }
            >
              Home
            </NavLink>

            {/* Mobile Divisions Grid */}
            <div className="py-3">
              <span className="mb-3 block font-mono text-[11px] uppercase tracking-[0.20em] text-[#003c71]/60">
                Divisions
              </span>
              <div className="grid grid-cols-2 gap-3">
                {divisions.map((d) => (
                  <Link
                    key={d.key}
                    to={d.slug}
                    onClick={() => setOpen(false)}
                    className="flex flex-col items-center justify-center gap-2 rounded-xl border border-gray-100 bg-gray-50/50 p-4 text-center transition-all hover:bg-gray-50 hover:border-[#003c71]/20"
                  >
                    <span
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-100 bg-white shadow-sm"
                      style={{
                        backgroundColor: `var(--color-${d.color}-soft)`,
                      }}
                    >
                      <d.icon
                        size={18}
                        style={{ color: `var(--color-${d.color})` }}
                      />
                    </span>
                    <span className="text-xs font-semibold text-[#003c71]">
                      {d.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Standard Links */}
            {navLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `py-3 text-lg font-semibold border-b border-gray-50 ${isActive ? "text-[#003c71]" : "text-gray-700"}`
                }
              >
                {l.label}
              </NavLink>
            ))}

            {/* Mobile CTA */}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 flex items-center justify-center bg-[#e2231a] text-white px-6 py-3 rounded text-base font-semibold hover:bg-[#c41d16] transition-colors"
            >
              Get in Touch
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
