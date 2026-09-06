import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'
import { divisions } from '../data/divisions'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative z-20 bg-gray-100 dark:bg-gray-50">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
              
              <span className="font-body tracking-wide w-12 text-base font-semibold sm:text-4xl lg:text-2xl ">Nadeem Tariq Enterprises</span>
              <br />
            
            <span className="mt-4 max-w-xs lg:text-md sm:text-2xl leading-relaxed text-ink/65 dark:text-paper/65 ">
              A diversified trading house operating four independent <br />
              divisions from one shared
              standard of sourcing, testing <br /> and delivery, since 2011.
            </span>

        <div className="pt-12 grid gap-6 md:grid-cols-3 grid-cols-2">

          <div>
            <h4 className="font-body text-red-600 sm:text-lg lg:text-lg font-bold uppercase tracking-wide text-ink/50 dark:text-paper/50">
              Divisions
            </h4>
            <ul className="mt-4 flex flex-col gap-2.5">
              {divisions.map((d) => (
                <li key={d.key}>
                  <Link
                    to={d.slug}
                    className=" hover:text-red-600 text-lg font-body tracking-wide text-ink/75 transition-colors hover:text-brass dark:text-paper/75"
                  >
                    {d.short}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-body text-red-600  font-bold uppercase tracking-wide text-ink/50 dark:text-paper/50">
              Company
            </h4>
            <ul className="mt-4 flex flex-col gap-2.5">
              {[
                ['About', '/about'],
                ['Global Reach', '/global-reach'],
                ['Quality', '/quality'],
                ['Reviews', '/testimonials'],
                ['Contact', '/contact'],
              ].map(([label, to]) => (
                <li key={to}>
                  <Link to={to} className=" hover:text-red-600 text-lg text-ink/75 transition-colors hover:text-brass dark:text-paper/75">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-body text-red-600 sm:text-lg lg: text-xl font-bold uppercase tracking-wide text-ink/50 dark:text-paper/50">
              Reach us
            </h4>
            <ul className="mt-4 flex flex-col gap-3 text-lg text-ink/75 dark:text-paper/75">
              <li className="flex items-start gap-2.5">
                <MapPin size={24} className="mt-0.5 shrink-0 text-red-600"  />
                <span>Office 12 3rd Floor Lucky Centre 7-8 Jail Road Lahore- Pakistan</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={24} className="shrink-0 text-red-600" />
                <span>+92 323 419 9648</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={24} className="shrink-0 text-red-600" />
                <span>info@nadeementerprises.com.pk</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={24} className="shrink-0 text-red-600" />
                <span>nadeem.enterprises@hotmail.com</span>


              </li>
            </ul>
          </div>
        </div>

        
      </div>
      <div className=" bg-black text-white py-4 md:px-16 sm:px-4 ">
          <span className="lg:text-md sm:text-sm">&copy; {year} nadeementerprises.com.pk All rights reserved.</span>
        </div>
    </footer>
  )
}
