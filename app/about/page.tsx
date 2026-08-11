import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  Anchor,
  ArrowRight,
  Award,
  Building2,
  Eye,
  Flag,
  Network,
  ShieldCheck,
  ShipWheel,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'PT Wira Sarana Samudra is a trusted maritime services provider delivering integrated solutions for vessel, cargo, and port operations.',
}

const whyWss = [
  {
    icon: Anchor,
    title: 'One-Stop Maritime Services',
    description:
      'From ship agency and cargo handling to vessel supplies, bunkering, and tug support, we coordinate practical solutions under one team.',
  },
  {
    icon: Award,
    title: 'Industry Experience',
    description:
      'Our team understands the daily realities of vessel calls, cargo operations, suppliers, and the stakeholders behind them.',
  },
  {
    icon: ShieldCheck,
    title: 'Reliable & Responsive',
    description:
      'We stay close to timing, communication, and operational detail so clients can move with more confidence.',
  },
  {
    icon: Network,
    title: 'Strong Operational Network',
    description:
      'We work with port authorities, service providers, and maritime partners to keep coordination efficient and clear.',
  },
]

const companyLegalities = [
  {
    label: 'Company Name',
    value: 'PT WIRA SARANA SAMUDRA',
  },
  {
    label: 'Address',
    value:
      'Komplek Perkantoran Tanjung Mas Raya Blok B1 No.17 Tanjung Barat, Jakarta Selatan 12530',
  },
  {
    label: 'Telephone',
    value: '+62 21 8378 5852',
  },
  {
    label: 'Business License',
    value: 'SIUPKK: AL.310/670/DA-2024',
  },
  {
    label: 'Deed of Establishment',
    value: 'Akta No. 98, Notaris Nurlisa Uke Desy S.H, M.Kn',
  },
  {
    label: 'Ministry Decree',
    value: 'AHU-0094928.AH.01.01.TAHUN 2023',
  },
  {
    label: 'NPWP',
    value: '99.462.821.2-068.000',
  },
]

export default function AboutPage() {
  return (
    <main>
      <section className="relative isolate overflow-hidden py-16 md:py-24 lg:py-28">
  {/* Background image */}
  <div
    className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    aria-hidden="true"
  >
    <Image
      src="/images/background-about-us.png"
      alt=""
      fill
      className="object-cover object-center opacity-[100%]"
      sizes="100vw"
    />

    {/* Soft overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-[#f7f8fa]/95 via-[#f7f8fa]/85 to-[#f7f8fa]/65" />

    {/* Bottom fade */}
    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#f7f8fa] via-transparent to-transparent" />

    {/* Subtle brand glow */}
    <div
      className="absolute -right-40 top-1/4 size-[520px] rounded-full bg-[var(--brand)]/8 blur-[120px]"
      aria-hidden="true"
    />
  </div>

  <div className="shell relative">
    <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">

      {/* LEFT */}
      <Reveal>
        <div className="max-w-3xl">
          <h1 className="headline mt-6 text-foreground">
            Moving maritime operations forward with trusted, practical support.
          </h1>

          <p className="section-copy mt-6 max-w-xl">
            PT. Wira Sarana Samudra wasestablished in the year 2023
            to serve the growing demand for shipping & logistics transport
            services in Indonesia
          </p>
        </div>
      </Reveal>

      {/* RIGHT */}
      <Reveal
        className="rounded-[32px] border border-white/80 bg-white/75 p-6 shadow-[0_32px_90px_-46px_rgba(17,31,56,0.5)] backdrop-blur-xl md:p-8"
        direction="left"
        delay={120}
      >
        <div className="flex items-center gap-3">
          <span className="flex size-12 items-center justify-center rounded-full bg-secondary text-primary">
            <Building2 className="size-5" aria-hidden="true" />
          </span>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--brand)]">
              Company Snapshot
            </p>

            <p className="mt-1 font-serif text-2xl font-semibold text-foreground">
              PT Wira Sarana Samudra
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-[24px] border border-border/75 bg-white/65 p-5 backdrop-blur-sm">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--brand)]">
              Established
            </p>

            <p className="mt-2 font-serif text-3xl font-semibold text-foreground">
              2023
            </p>
          </div>

          <div className="rounded-[24px] border border-border/75 bg-white/65 p-5 backdrop-blur-sm">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--brand)]">
              Core Focus
            </p>

            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Vessel, cargo, crew, and port operational support.
            </p>
          </div>

          <div className="rounded-[24px] border border-border/75 bg-white/65 p-5 backdrop-blur-sm md:col-span-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--brand)]">
              Address
            </p>

            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Komplek Perkantoran Tanjung Mas Raya Blok B1 No.17 Tanjung
              Barat, Jakarta Selatan 12530
            </p>
          </div>
        </div>

        <div className="mt-8 rounded-[24px] bg-primary px-5 py-5 text-primary-foreground">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
            Service Principle
          </p>

          <p className="mt-3 text-sm leading-relaxed text-primary-foreground/72">
            Reliable services, seamless operations, and practical support
            that stays close to real operational needs.
          </p>
        </div>
      </Reveal>
    </div>
  </div>
</section>

      <section className="section-band-alt py-20 md:py-28">
        <div className="shell">
          <Reveal className="max-w-2xl">
            <span
              className="eyebrow border-[rgba(74,78,161,0.12)] bg-white/72 text-[var(--brand)]"
            >
              <Anchor className="size-3.5 text-accent" aria-hidden="true" />
              Why WSS
            </span>
            <h2 className="section-title mt-6">
              Trusted expertise and a cleaner way to manage maritime operations.
            </h2>
            <p className="section-copy mt-5 max-w-xl">
              We combine maritime know-how, integrated services, and reliable
              communication to reduce friction around vessel and cargo activity.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {whyWss.map((item, index) => {
              const Icon = item.icon

              return (
                <Reveal key={item.title} delay={index * 90} className="h-full">
                  <article className="rounded-[32px] border border-white/72 bg-white/86 p-7 shadow-[0_28px_80px_-48px_rgba(17,31,56,0.48)] backdrop-blur-sm">
                    <span className="flex size-12 items-center justify-center rounded-full bg-secondary text-primary">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <h3 className="mt-6 font-serif text-2xl font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section-band py-20 md:py-28">
        <div className="shell">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16">
            <Reveal className="relative" direction="right">
              <div className="rounded-[32px] border border-white/72 bg-white/86 p-4 shadow-[0_32px_90px_-46px_rgba(17,31,56,0.5)] backdrop-blur-xl sm:p-5">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] bg-secondary">
                  <Image
                    src="/images/experience.png"
                    alt="Maritime operations and vessel support"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 44vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/86 via-primary/12 to-transparent" />
                </div>
              </div>

              {/* <div className="absolute -bottom-6 right-4 max-w-[250px] rounded-[24px] border border-border/75 bg-background/92 p-5 shadow-[0_22px_60px_-38px_rgba(17,31,56,0.45)]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--brand)]">
                  Operating mindset
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  We value timing, coordination, compliance, and follow-through in
                  every service we deliver.
                </p>
              </div> */}
            </Reveal>

            <Reveal className="max-w-2xl" delay={120}>
              <span
                className="eyebrow border-[rgba(74,78,161,0.12)] bg-white/72 text-[var(--brand)]"
              >
                <Award className="size-3.5 text-accent" aria-hidden="true" />
                Our Experience
              </span>

              <h2 className="section-title mt-6">
                Built on experience, driven by dependable service.
              </h2>

              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                <p>
                  PT Wira Sarana Samudra was established to support the growing
                  needs of Indonesia&apos;s maritime and shipping industry through
                  coordinated, practical, and responsive services.
                </p>
                <p>
                  Our capabilities cover ship agency, loading and unloading
                  supervision, ship chandler, bunkering, running store, crew
                  workwear, husbandry, and other related operational support.
                </p>
                <p>
                  Through experienced teams and a dependable network of partners,
                  we help clients manage vessel, cargo, and crew requirements with
                  better clarity and continuity.
                </p>
              </div>

              <div className="mt-8 rounded-[24px] border border-border/75 bg-secondary/58 p-6">
                <p className="font-serif text-xl font-semibold text-foreground">
                  Trusted expertise. Seamless maritime operations.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  A practical maritime partner for vessel support, cargo activity,
                  and port-side coordination.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="shell">
          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal className="h-full">
              <div className="h-full rounded-[34px] bg-primary p-8 text-primary-foreground shadow-[0_34px_90px_-48px_rgba(17,31,56,0.72)] md:p-10">
                <span className="flex size-12 items-center justify-center rounded-full bg-white/8 text-accent">
                  <Eye className="size-5" aria-hidden="true" />
                </span>
                <h2 className="mt-6 font-serif text-3xl font-semibold">Vision</h2>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-primary-foreground/72 md:text-lg">
                  To be one of the most preferrable, reliable and trusted
                  maritime logistics providers in Asia Pacific.
                </p>
              </div>
            </Reveal>

            <Reveal className="h-full" delay={120}>
              <div className="h-full rounded-[34px] border border-white/72 bg-white/86 p-8 shadow-[0_28px_80px_-48px_rgba(17,31,56,0.48)] backdrop-blur-sm md:p-10">
                <span className="flex size-12 items-center justify-center rounded-full bg-secondary text-primary">
                  <Flag className="size-5" aria-hidden="true" />
                </span>
                <h2 className="mt-6 font-serif text-3xl font-semibold text-foreground">
                  Mission
                </h2>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                  To deliver efficient and effective logistic solutions to customers by
                  creating innovations and providing variational solutions within predictable time,
                  guarenteed quality and competitive price.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-band pb-20 pt-4 md:pb-24">
        <div className="shell">
          <Reveal className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <span
                className="eyebrow border-[rgba(74,78,161,0.12)] bg-white/72 text-[var(--brand)]"
              >
                <Building2 className="size-3.5 text-accent" aria-hidden="true" />
                Company Legalities
              </span>
              <h2 className="section-title mt-6">
                 Company Legalities & Information.
              </h2>
            </div>

            {/* <Button
              render={<Link href="/contacts" />}
              nativeButton={false}
              variant="outline"
              size="lg"
            >
              Talk With Our Team
              <ArrowRight className="size-4" aria-hidden="true" />
            </Button> */}
          </Reveal>

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {companyLegalities.map((item, index) => (
              <Reveal key={item.label} delay={index * 70} className="h-full">
                <div className="rounded-[28px] border border-white/72 bg-white/86 p-6 shadow-[0_24px_70px_-48px_rgba(17,31,56,0.45)]">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--brand)]">
                    {item.label}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-foreground">
                    {item.value}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
