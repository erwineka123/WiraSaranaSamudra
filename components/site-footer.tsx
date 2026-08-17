import Link from 'next/link'
import { Anchor, ArrowUpRight, Clock3, Mail, MapPin, Phone } from 'lucide-react'
import { SiteLogo } from '@/components/site-logo-footer'

export function SiteFooter() {
  return (
    <footer
      className="
        relative isolate overflow-hidden
        border-t border-white/10
        bg-[#07172F]
        text-primary-foreground
      "
    >
      {/* ========================================
          BACKGROUND
          ======================================== */}

      {/* Main radial navy gradient */}
      <div
        className="
          pointer-events-none absolute inset-0
          bg-[radial-gradient(circle_at_50%_0%,#174A9C_0%,#0D357C_30%,#092653_58%,#07172F_100%)]
        "
        aria-hidden="true"
      />

      {/* Soft top blue glow */}
      <div
        className="
          pointer-events-none absolute
          left-1/2 top-[-180px]
          size-[620px]
          -translate-x-1/2
          rounded-full
          bg-[#1B55A5]/20
          blur-[120px]
        "
        aria-hidden="true"
      />

      {/* Right subtle glow */}
      <div
        className="
          pointer-events-none absolute
          -right-40 top-20
          size-[420px]
          rounded-full
          bg-[#174A9C]/15
          blur-[110px]
        "
        aria-hidden="true"
      />

      {/* Left subtle glow */}
      <div
        className="
          pointer-events-none absolute
          -left-40 bottom-20
          size-[400px]
          rounded-full
          bg-[#0D357C]/20
          blur-[110px]
        "
        aria-hidden="true"
      />

      {/* Very subtle grid texture */}
      <div
        className="
          pointer-events-none absolute inset-0
          opacity-[0.018]
          [background-image:linear-gradient(135deg,white_1px,transparent_1px)]
          [background-size:42px_42px]
        "
        aria-hidden="true"
      />

      {/* Top highlight */}
      <div
        className="
          pointer-events-none absolute inset-x-0 top-0 h-px
          bg-gradient-to-r
          from-transparent
          via-white/25
          to-transparent
        "
        aria-hidden="true"
      />

      {/* ========================================
          CONTENT
          ======================================== */}

      <div className="shell relative py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.35fr_0.65fr]">
          
          {/* ====================================
              COMPANY INFORMATION
              ==================================== */}

          <div>
            <SiteLogo
              className="h-9 w-[220px] sm:h-20 sm:w-[220px]"
              priority
            />

            <p
              className="
                mt-6 max-w-md
                text-base leading-relaxed
                text-primary-foreground/72
              "
            >
              PT Wira Sarana Samudra supports vessel, cargo, and crew operations
              through reliable maritime services, responsive coordination, and a
              practical execution mindset.
            </p>

            {/* Badges */}
            <div className="mt-8 flex flex-wrap gap-3">
              
              {/* SIUPKK */}
              <span
                className="
                  inline-flex items-center gap-2
                  rounded-full
                  border border-white/10
                  bg-white/[0.055]
                  px-4 py-2
                  text-xs font-medium
                  text-primary-foreground/82
                  backdrop-blur-sm
                  transition-colors
                  hover:border-white/20
                  hover:bg-white/[0.08]
                "
              >
                <Anchor
                  className="size-3.5 text-accent"
                  aria-hidden="true"
                />

                SIUPKK Registered
              </span>

              {/* Jakarta */}
              <span
                className="
                  inline-flex
                  rounded-full
                  border border-white/10
                  bg-white/[0.055]
                  px-4 py-2
                  text-xs font-medium
                  text-primary-foreground/82
                  backdrop-blur-sm
                  transition-colors
                  hover:border-white/20
                  hover:bg-white/[0.08]
                "
              >
                Jakarta Based
              </span>

              {/* 24/7 */}
              <span
                className="
                  inline-flex
                  rounded-full
                  border border-white/10
                  bg-white/[0.055]
                  px-4 py-2
                  text-xs font-medium
                  text-primary-foreground/82
                  backdrop-blur-sm
                  transition-colors
                  hover:border-white/20
                  hover:bg-white/[0.08]
                "
              >
                24/7 Coordination
              </span>
            </div>
          </div>

          {/* ====================================
              CONTACT
              ==================================== */}

          <div>
            <h3
              className="
                text-base
                font-semibold
                uppercase
                tracking-[0.22em]
                text-primary-foreground/55
              "
            >
              Contact
            </h3>

            <ul
              className="
                mt-5
                space-y-4
                text-base
                text-primary-foreground/72
              "
            >
              {/* Address */}
              <li className="flex items-start gap-3">
                <MapPin
                  className="
                    mt-0.5
                    size-4
                    shrink-0
                    text-accent
                  "
                  aria-hidden="true"
                />

                <span>
                  Komplek Perkantoran Tanjung Mas Raya Blok B1 No.17 Tanjung
                  Barat, Jakarta Selatan 12530
                </span>
              </li>

              {/* Phone */}
              <li className="flex items-center gap-3">
                <Phone
                  className="
                    size-4
                    shrink-0
                    text-accent
                  "
                  aria-hidden="true"
                />

                <a
                  href="https://wa.me/622183785852"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    transition-colors
                    hover:text-white
                  "
                >
                  +62 21 8378 5852
                </a>
              </li>

              {/* Email */}
              <li className="flex items-center gap-3">
                <Mail
                  className="
                    size-4
                    shrink-0
                    text-accent
                  "
                  aria-hidden="true"
                />

                <a
                  href="mailto:info.wss@wirasarana.com"
                  className="
                    transition-colors
                    hover:text-white
                  "
                >
                  info.wss@wirasarana.com
                </a>
              </li>

              {/* Operating Hours */}
              <li className="flex items-center gap-3">
                <Clock3
                  className="
                    size-4
                    shrink-0
                    text-accent
                  "
                  aria-hidden="true"
                />

                <span>Open 24 Hours</span>
              </li>
            </ul>
          </div>
        </div>

        {/* ========================================
            DIVIDER
            ======================================== */}

        <div
          className="
            mt-14
            border-t border-white/10
            pt-6
          "
        >
          <div
            className="
              flex flex-col gap-3
              text-xs
              text-primary-foreground/48
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <p>
              &copy; {new Date().getFullYear()} PT Wira Sarana Samudra.
            </p>

            <p>
              Trusted maritime services for dependable operations.
            </p>
          </div>
        </div>
      </div>

      {/* ========================================
          OCEAN WAVE
          ======================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          z-0
          h-40
          overflow-hidden
          opacity-[0.055]
        "
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1440 320"
          className="absolute bottom-[-20px] h-48 w-full"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="
              M0,224
              C120,180 220,150 360,208
              C500,266 580,292 720,220
              C860,148 940,140 1080,196
              C1220,252 1320,258 1440,188
              L1440,320
              L0,320
              Z
            "
          />
        </svg>
      </div>

      {/* Secondary wave */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          z-0
          h-28
          overflow-hidden
          opacity-[0.025]
        "
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1440 320"
          className="absolute bottom-[-45px] h-40 w-full"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="
              M0,250
              C180,180 300,180 480,240
              C660,300 780,280 920,220
              C1060,160 1190,180 1440,250
              L1440,320
              L0,320
              Z
            "
          />
        </svg>
      </div>
    </footer>
  )
}