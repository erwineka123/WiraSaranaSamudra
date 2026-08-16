import Link from 'next/link'
import { Anchor, ArrowUpRight, Clock3, Mail, MapPin, Phone } from 'lucide-react'
import { SiteLogo } from '@/components/site-logo'

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-primary/10 bg-[#101a31] text-primary-foreground">
      <div className="absolute inset-x-0 top-0 h-px bg-white/10" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-28 top-0 size-72 rounded-full bg-[var(--brand)]/18 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-24 bottom-0 size-72 rounded-full bg-accent/12 blur-3xl"
        aria-hidden="true"
      />

      <div className="shell relative py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.35fr_0.65fr]">
          <div>
            <SiteLogo className="h-9 w-[220px] sm:h-20 sm:w-[220px]" priority />
            <p className="mt-6 max-w-md text-base leading-relaxed text-primary-foreground/72">
              PT Wira Sarana Samudra supports vessel, cargo, and crew operations
              through reliable maritime services, responsive coordination, and a
              practical execution mindset.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-4 py-2 text-xs font-medium text-primary-foreground/82">
                <Anchor className="size-3.5 text-accent" aria-hidden="true" />
                SIUPKK Registered
              </span>
              <span className="inline-flex rounded-full border border-white/12 bg-white/6 px-4 py-2 text-xs font-medium text-primary-foreground/82">
                Jakarta Based
              </span>
              <span className="inline-flex rounded-full border border-white/12 bg-white/6 px-4 py-2 text-xs font-medium text-primary-foreground/82">
                24/7 Coordination
              </span>
            </div>
          </div>
          <div>
            <h3 className="text-base font-semibold uppercase tracking-[0.22em] text-primary-foreground/55">
              Contact
            </h3>
            <ul className="mt-5 space-y-4 text-base text-primary-foreground/72">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                <span>
                  Komplek Perkantoran Tanjung Mas Raya Blok B1 No.17 Tanjung
                  Barat, Jakarta Selatan 12530
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="size-4 shrink-0 text-accent" aria-hidden="true" />
                <a
                  href="https://wa.me/622183785852"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-primary-foreground"
                >
                  +62 21 8378 5852
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="size-4 shrink-0 text-accent" aria-hidden="true" />
                <a
                  href="mailto:info.wss@wirasarana.com"
                  className="transition-colors hover:text-primary-foreground"
                >
                  info.wss@wirasarana.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock3 className="size-4 shrink-0 text-accent" aria-hidden="true" />
                <span>Open 24 Hours</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-primary-foreground/48 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} PT Wira Sarana Samudra.</p>
          <p>Trusted maritime services for dependable operations.</p>
        </div>
      </div>
    </footer>
  )
}
