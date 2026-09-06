import Image from 'next/image'
import { Anchor, Clock3, Mail, MapPin, Phone } from 'lucide-react'
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
          FOOTER BACKGROUND IMAGE
          ======================================== */}

      <Image
        src="/images/footer-background.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="
          pointer-events-none
          absolute
          inset-0
          z-0
          h-full
          w-full
          object-cover
          object-center
        "
        aria-hidden="true"
      />

      {/* ========================================
          BACKGROUND OVERLAY
          Keeps text readable while preserving
          the original background design
          ======================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[1]
          bg-[#06172F]/10
        "
        aria-hidden="true"
      />

      {/* Subtle top highlight */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          z-[2]
          h-px
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

      <div className="shell relative z-10 py-16 md:py-20">
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
                mt-6
                max-w-md
                text-base
                leading-relaxed
                text-primary-foreground/75
              "
            >
              PT Wira Sarana Samudra supports vessel, cargo, and crew operations
              through reliable maritime services, responsive coordination, and a
              practical execution mindset.
            </p>

            {/* ====================================
                COMPANY BADGES
                ==================================== */}

            <div className="mt-8 flex flex-wrap gap-3">

              {/* SIUPKK */}
              <span
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/15
                  bg-[#07172F]/35
                  px-4
                  py-2
                  text-xs
                  font-medium
                  text-primary-foreground/85
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:border-white/25
                  hover:bg-[#07172F]/50
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
                  items-center
                  rounded-full
                  border
                  border-white/15
                  bg-[#07172F]/35
                  px-4
                  py-2
                  text-xs
                  font-medium
                  text-primary-foreground/85
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:border-white/25
                  hover:bg-[#07172F]/50
                "
              >
                Jakarta Based
              </span>

              {/* 24/7 */}
              <span
                className="
                  inline-flex
                  items-center
                  rounded-full
                  border
                  border-white/15
                  bg-[#07172F]/35
                  px-4
                  py-2
                  text-xs
                  font-medium
                  text-primary-foreground/85
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:border-white/25
                  hover:bg-[#07172F]/50
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
                text-primary-foreground/70
              "
            >
              Contact
            </h3>

            <ul
              className="
                mt-5
                space-y-4
                text-base
                text-primary-foreground/75
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
                    duration-200
                    hover:text-white
                  "
                >
                  +62 821 2816 7689
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
                    duration-200
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
            BOTTOM DIVIDER
            ======================================== */}

        <div
          className="
            mt-14
            border-t
            border-white/15
            pt-6
          "
        >
          <div
            className="
              flex
              flex-col
              gap-3
              text-xs
              text-primary-foreground/55
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
    </footer>
  )
}