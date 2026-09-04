import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import { divisions } from '../data/divisions'
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react'
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', division: '', message: '' })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const SERVICE_ID = "service_druhq9c";
  const TEMPLATE_ID = "template_jobwrb6";
  const PUBLIC_KEY = "25l-rTXo6ha4ytlEq";

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        await emailjs.sendForm(
            SERVICE_ID,
            TEMPLATE_ID,
            e.target,
            PUBLIC_KEY
        );

        alert("Message sent successfully!");
        e.target.reset();

    } catch (error) {
        console.error("EmailJS Error:", error);
        alert("Failed to send message. Please try again.");
    }
};

  return (
    <div>
      {/* <PageHeader
        eyebrow="Contact"
        title="Tell us which division, and we'll route it there directly."
        description="No general inbox holding pattern. Messages go straight to the desk that handles the division you select below."
      /> */}

       <div className="relative">
  {/* Background Image */}
  <img
    src="/contact.png"
    alt="Quality Hero"
    className="w-full md:h-[400px]"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Content */}
  <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-white">
    <h1 className="md:text-4xl text-xl font-bold text-center">
      Tell us which division, and we'll route it there directly.
   </h1>

    <p className="mt-4 text-center text-md max-w-2xl md:text-xl text-gray-200">
      No general inbox holding pattern. Messages go straight to the desk that handles the division you select below.
    </p>
  </div>
</div>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <div>
            <h2 className="font-body tracking-wide text-2xl font-medium ">Reach us directly</h2>
            <ul className="mt-6 flex flex-col gap-5">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0" style={{ color: 'var(--color-brass)' }} />
                <div>
                  <div className="text-sm font-body tracking-wide font-medium">Head office</div>
                  <div className="mt-0.5 text-sm text-ink/65 dark:text-paper/65 font-body tracking-wide ">
                    Office 12 3rd Floor Lucky Centre 7-8 Jail Road Lahore- Pakistan
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="mt-0.5 shrink-0" style={{ color: 'var(--color-brass)' }} />
                <div>
                  <div className="text-sm font-body tracking-wide font-medium">Phone</div>
                  <div className="mt-0.5 text-sm text-ink/65 dark:text-paper/65 font-body tracking-wide">
                    +92 323 419 9648
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="mt-0.5 shrink-0" style={{ color: 'var(--color-brass)' }} />
                <div>
                  <div className="text-sm font-body tracking-wide font-medium">Email</div>
                  <div className="mt-0.5 text-sm text-ink/65 dark:text-paper/65 font-body tracking-wide">
                    trade@nadeementerprises.com
                  </div>
                </div>
              </li>
            </ul>

            <div className="mt-10 rounded-md border border-paper-line bg-paper-alt/50 p-5 dark:border-ink-line dark:bg-ink-alt/40 bg-red-800 text-white">
              <h3 className="text-sm font-semibold">Office hours</h3>
              <p className="mt-1.5 text-sm text-ink/65 dark:text-paper/65">
                Monday &ndash; Saturday, 9:00 AM &ndash; 6:00 PM PKT
              </p>
              <p className="mt-1 text-sm text-ink/65 dark:text-paper/65">Closed Sundays and public holidays</p>
            </div>
          </div>

          <div className="rounded-md border border-paper-line bg-paper p-6 dark:border-ink-line dark:bg-ink sm:p-8 bg-black/90 text-white">
            {submitted ? (
              <div className="flex flex-col items-start gap-3 py-10">
                <CheckCircle2 size={32} style={{ color: 'var(--color-brass)' }} />
                <h3 className="font-body tracking-wide text-xl font-medium">Message received</h3>
                <p className="text-sm leading-relaxed text-ink/65 dark:text-paper/65">
                  Thanks, {form.name || 'there'}. The relevant division desk will reply within three
                  working days.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false)
                    setForm({ name: '', email: '', division: '', message: '' })
                  }}
                  className="mt-2 text-sm font-body tracking-wide font-medium underline underline-offset-4"
                  style={{ color: 'var(--color-brass)' }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5 font-body tracking-wide">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="flex flex-col gap-1.5 text-sm">
                    Name
                    <input
                      required
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      type="text"
                      placeholder="Your full name"
                      className="rounded-sm border border-paper-line bg-transparent px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-brass dark:border-ink-line"
                    />
                  </label>
                  <label className="flex flex-col gap-1.5 text-sm">
                    Email
                    <input
                      required
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      type="email"
                      placeholder="you@company.com"
                      className="rounded-sm border border-paper-line bg-transparent px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-brass dark:border-ink-line"
                    />
                  </label>
                </div>

                <label className="flex flex-col gap-1.5 text-sm">
                  Division
                  <select
                    required
                    name="division"
                    value={form.division}
                    onChange={handleChange}
                    className="rounded-sm border border-paper-line bg-transparent px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-brass dark:border-ink-line"
                  >
                    <option value="" disabled>
                      Select a division
                    </option>
                    {divisions.map((d) => (
                      <option key={d.key} value={d.name} className="text-black">
                        {d.name}
                      </option>
                    ))}
                    <option value="General">General enquiry</option>
                  </select>
                </label>

                <label className="flex flex-col gap-1.5 text-sm">
                  Message
                  <textarea
                    required
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell us what you're looking to source, target volumes, and destination market."
                    className="resize-none rounded-sm border border-paper-line bg-transparent px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-brass dark:border-ink-line"
                  />
                </label>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3 text-sm font-medium text-paper transition-transform hover:-translate-y-0.5 bg-green-600 cursor-pointer"
                >
                  Send message
                  <Send size={15} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
