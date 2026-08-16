import Image from 'next/image'
import Link from 'next/link'
import {
  Anchor,
  ArrowRight,
  Boxes,
  Fuel,
  PackageCheck,
  ShieldCheck,
  Ship,
  ShipWheel,
  ShoppingCart,
  Users,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { Button } from '@/components/ui/button'
import { ClientImage } from '@/components/client-image'

// const stats = [
//   { value: '24/7', label: 'Responsive operational coordination' },
//   { value: '120+', label: 'Vessel movements and support handled' },
//   { value: '18', label: 'Regional maritime touchpoints' },
//   { value: '2023', label: 'Established in Jakarta, Indonesia' },
// ]

const capabilities = [
  {
    icon: ShipWheel,
    title: 'Ship Agency',
    description:
      'Port clearance, documentation, berthing coordination, and day-to-day vessel support.',
  },
  {
    icon: PackageCheck,
    title: 'Cargo Supervision',
    description:
      'Reliable loading and unloading supervision with reporting, checks, and coordination.',
  },
  {
    icon: ShoppingCart,
    title: 'Vessel Supplies',
    description:
      'Ship chandler, running store, and onboard essentials delivered with consistency.',
  },
  {
    icon: Fuel,
    title: 'Bunkering & Support',
    description:
      'Fuel, lubricant, husbandry, and practical crew support around operational needs.',
  },
]

const services = [
  {
    href: '/services/ship-agency-services',
    icon: ShipWheel,
    title: 'Ship Agency Services',
    description:
      'Professional ship agency support to keep vessel calls smooth, compliant, and well coordinated from arrival through departure.',
    points: ['Port clearance', 'Authority coordination', 'Crew changes'],
  },
  {
    href: '/services/loading-unloading-supervision',
    icon: PackageCheck,
    title: 'Loading & Unloading Supervision',
    description:
      'Operational oversight for cargo activities with careful monitoring, documentation, and field coordination.',
    points: ['Cargo monitoring', 'Condition checks', 'Operational reporting'],
  },
  {
    href: '/services/ship-chandler-services',
    icon: ShoppingCart,
    title: 'Ship Chandler Services',
    description:
      'Fresh provisions, consumables, deck and engine stores, and practical vessel requirements delivered on time.',
    points: ['Provision supply', 'Deck and engine stores', 'Safety equipment'],
  },
]

const workingStyle = [
  {
    title: 'Coordinate early',
    description:
      'We align with port stakeholders, suppliers, and operators before activity begins.',
  },
  {
    title: 'Execute clearly',
    description:
      'Our team keeps communication practical, concise, and responsive during operations.',
  },
  {
    title: 'Follow through',
    description:
      'We stay close to the details until the vessel, cargo, or crew requirement is completed.',
  },
]

const clientLogos = ['client-1', 'client-2', 'client-3', 'client-4', 'client-5']

export default function HomePage() {
  return (
    <main>
      <section className="relative isolate overflow-hidden bg-[#f7f8fc] py-16 md:py-24 lg:py-28">
  {/* =====================================================
      BACKGROUND IMAGE
  ====================================================== */}
  <div
    className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    aria-hidden="true"
  >
    <Image
      src="/images/background-home.png"
      alt=""
      fill
      priority
      className="object-cover object-center opacity-[100%]"
      sizes="100vw"
    />

    {/* Main soft overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-[#f7f8fc]/95 via-[#f7f8fc]/82 to-[#f7f8fc]/55" />

    {/* Bottom fade */}
    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#f7f8fc] via-transparent to-transparent" />

    {/* Subtle brand tint */}
    <div className="absolute -right-40 top-1/4 size-[520px] rounded-full bg-[var(--brand)]/8 blur-[120px]" />
  </div>

  {/* =====================================================
      CONTENT
  ====================================================== */}
  <div className="shell relative">
    <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">

      {/* =================================================
          LEFT CONTENT
      ================================================== */}
      <Reveal>
        <div className="max-w-3xl">

          {/* Small eyebrow */}
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-accent" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--brand)]">
              Maritime Support & Services
            </span>
          </div>

          <h1 className="headline mt-6 text-foreground">
            Reliable maritime support for smoother vessel, cargo, and crew
            operations.
          </h1>

          <p className="section-copy mt-6 max-w-xl">
            PT Wira Sarana Samudra helps ship owners, operators, and cargo
            stakeholders move with better coordination, dependable service,
            and a clean operational rhythm from port arrival to departure.
          </p>

          {/* CTA */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button
              render={<Link href="/about" />}
              nativeButton={false}
              size="lg"
            >
              About WSS
              <ArrowRight className="size-4" aria-hidden="true" />
            </Button>
          </div>

          {/* Trust badges */}
          <div className="mt-10 flex flex-wrap gap-3">
            <span className="rounded-full border border-border/80 bg-white/72 px-4 py-2 text-xs font-medium text-foreground shadow-sm backdrop-blur-sm">
              SIUPKK Registered
            </span>

            <span className="rounded-full border border-border/80 bg-white/72 px-4 py-2 text-xs font-medium text-foreground shadow-sm backdrop-blur-sm">
              Jakarta Based
            </span>

            <span className="rounded-full border border-border/80 bg-white/72 px-4 py-2 text-xs font-medium text-foreground shadow-sm backdrop-blur-sm">
              24/7 Operational Support
            </span>
          </div>
        </div>
      </Reveal>

      {/* =================================================
          RIGHT HERO IMAGE
      ================================================== */}
      <Reveal
        className="relative lg:pl-6"
        direction="left"
        delay={120}
      >
        {/* Decorative glow */}
        <div
          className="pointer-events-none absolute -left-8 top-10 hidden size-32 rounded-full bg-[var(--brand)]/14 blur-3xl md:block"
          aria-hidden="true"
        />

        <div
          className="pointer-events-none absolute -right-8 bottom-8 hidden size-28 rounded-full bg-accent/16 blur-3xl md:block"
          aria-hidden="true"
        />

        {/* Main image container */}
        <div className="relative rounded-[32px] border border-white/80 bg-white/70 p-4 shadow-[0_32px_90px_-44px_rgba(17,31,56,0.52)] backdrop-blur-xl sm:p-5">

          <div className="relative aspect-[16/10] overflow-hidden rounded-[26px] bg-primary lg:aspect-[16/9]">

            <Image
              src="/images/hero.png"
              alt="Commercial vessel at port"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 44vw"
            />

            {/* Image overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/25 to-transparent" />

            {/* Location */}
            <div className="absolute left-5 top-5 rounded-full border border-white/18 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/88 backdrop-blur-sm">
              Jakarta - Indonesia
            </div>

            {/* Image content */}
            <div className="absolute inset-x-5 bottom-5">
              <div className="max-w-sm">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60">
                  Trusted maritime partner
                </p>

                <p className="mt-2 max-w-[18ch] font-serif text-xl font-semibold leading-tight text-white sm:text-2xl">
                  Integrated support tailored around daily port operations.
                </p>
              </div>
            </div>
          </div>

          {/* =================================================
              INFO CARD BELOW IMAGE
          ================================================== */}
          <div className="mt-4 grid gap-3 rounded-[22px] border border-border/70 bg-white/70 p-4 backdrop-blur-md sm:grid-cols-[1fr_auto] sm:items-end">
            <div>
              <p className="text-[15px] font-semibold uppercase tracking-[0.22em] text-[var(--brand)]">
                Wira Sarana Samudra
              </p>

              <p className="mt-2 max-w-md text-base leading-relaxed text-muted-foreground">
                We support ship agency, cargo supervision, vessel supplies,
                bunkering, running store, and husbandry requirements through
                one coordinated team.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </div>
</section>

      <section className="section-band py-20 md:py-28 bg-grey-50">
        <div className="shell">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16">
            <Reveal className="relative order-2 lg:order-1" direction="right">
              <div className="rounded-[32px] border border-white/72 bg-white/86 p-4 shadow-[0_32px_90px_-46px_rgba(17,31,56,0.52)] backdrop-blur-xl sm:p-5">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] bg-secondary">
                  <Image
                    src="/images/content-1.png"
                    alt="Crew members working on deck"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/82 via-primary/10 to-transparent" />
                </div>
              </div>

              {/* <div className="absolute -bottom-6 right-4 max-w-[260px] rounded-[24px] border border-border/75 bg-background/92 p-5 shadow-[0_22px_60px_-38px_rgba(17,31,56,0.45)]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--brand)]">
                  Operational focus
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Clear port coordination, timely delivery, and dependable
                  follow-through for vessel and cargo support.
                </p>
              </div> */}
            </Reveal>

            <Reveal className="order-1 lg:order-2" delay={120}>
              {/* <span
                className="eyebrow border-[rgba(74,78,161,0.12)] bg-white/72 text-[var(--brand)]"
              >
                <Ship className="size-3.5 text-accent" aria-hidden="true" />
                Company Profile
              </span> */}

              <h2 className="section-title mt-6 max-w-2xl">
                A compact team with end-to-end maritime capabilities.
              </h2>

              <p className="section-copy mt-6 max-w-xl">
                We provide reliable and integrated maritime services for vessel,
                cargo, and crew operations, combining practical execution,
                responsive communication, and steady coordination across each job.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {capabilities.map((item, index) => {
                  const Icon = item.icon

                  return (
                    <Reveal key={item.title} delay={index * 80} className="h-full">
                      <div className="rounded-[28px] border border-white/72 bg-white/82 p-6 shadow-[0_24px_70px_-48px_rgba(17,31,56,0.5)]">
                        <span className="flex size-11 items-center justify-center rounded-full bg-secondary text-primary">
                          <Icon className="size-5" aria-hidden="true" />
                        </span>
                        <h3 className="mt-5 font-serif text-xl font-semibold text-foreground">
                          {item.title}
                        </h3>
                        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </Reveal>
                  )
                })}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-band-alt py-20 md:py-28 bg-[#f4f5f7]">
        <div className="shell">
          <Reveal className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <span
                className="eyebrow border-[rgba(74,78,161,0.12)] bg-white/72 text-[var(--brand)]"
              >
                <Boxes className="size-3.5 text-accent" aria-hidden="true" />
                Core Services
              </span>
              <h2 className="section-title mt-6">
                Minimal in presentation, complete in operational coverage.
              </h2>
            </div>

            <Button
              render={<Link href="/services" />}
              nativeButton={false}
              variant="outline"
              size="lg"
            >
              View All Services
              <ArrowRight className="size-4" aria-hidden="true" />
            </Button>
          </Reveal>

          <div className="mt-12 grid gap-6 xl:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon

              return (
                <Reveal key={service.title} delay={index * 100} className="h-full">
                  <article className="flex h-full flex-col rounded-[32px] border border-white/72 bg-white/86 p-7 shadow-[0_28px_80px_-48px_rgba(17,31,56,0.52)] backdrop-blur-sm">
                    <div className="flex items-start justify-between gap-6">
                      <span className="flex size-12 items-center justify-center rounded-full bg-secondary text-primary">
                        <Icon className="size-5" aria-hidden="true" />
                      </span>
                      <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--brand)]">
                        WSS Service
                      </span>
                    </div>

                    <h3 className="mt-7 font-serif text-2xl font-semibold text-foreground">
                      {service.title}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {service.points.map((point) => (
                        <span
                          key={point}
                          className="rounded-full border border-border/80 bg-secondary/70 px-3 py-1.5 text-xs font-medium text-foreground"
                        >
                          {point}
                        </span>
                      ))}
                    </div>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="shell">
          <Reveal className="overflow-hidden rounded-[38px] bg-primary px-6 py-12 text-primary-foreground shadow-[0_34px_90px_-48px_rgba(17,31,56,0.72)] md:px-10 md:py-16 lg:px-14">
            <div className="max-w-3xl">
              <span className="eyebrow border-white/14 bg-white/7 text-primary-foreground/86">
                <ShieldCheck className="size-3.5 text-accent" aria-hidden="true" />
                How We Work
              </span>
              <h2 className="section-title mt-6 text-primary-foreground">
                Built around clarity, responsiveness, and dependable follow-up.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/70 md:text-lg">
                We keep our process simple: understand the operational need,
                coordinate the moving parts, and execute with close attention to
                timing, compliance, and communication.
              </p>
            </div>

            <div className="mt-10 grid gap-4 lg:grid-cols-3">
              {workingStyle.map((item, index) => (
                <Reveal key={item.title} delay={index * 100} className="h-full">
                  <div className="rounded-[28px] border border-white/10 bg-white/6 p-6">
                    <p className="text-base font-semibold uppercase tracking-[0.2em] text-accent">
                      0{index + 1}
                    </p>
                    <h3 className="mt-4 font-serif text-2xl font-semibold">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-primary-foreground/68">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-band pb-20 pt-4 md:pb-24">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <Reveal className="max-w-xl">
              <span
                className="eyebrow border-[rgba(74,78,161,0.12)] bg-white/72 text-[var(--brand)]"
              >
                <Users className="size-3.5 text-accent" aria-hidden="true" />
                Trusted By
              </span>
              <h2 className="section-title mt-6">
                Chosen by partners who need maritime support they can count on.
              </h2>
              <p className="section-copy mt-5">
                Our clients rely on responsive service, practical coordination,
                and a team that understands the pace of maritime operations.
              </p>
              <div className="mt-8">
                <Button render={<Link href="/contacts" />} nativeButton={false} size="lg">
                  Start an Inquiry
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Button>
              </div>
            </Reveal>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-5">
              {clientLogos.map((client, index) => (
                <Reveal key={client} delay={index * 90} className="h-full">
                  <div className="flex h-[108px] items-center justify-center rounded-[28px] border border-white/72 bg-white/86 p-5 shadow-[0_24px_70px_-48px_rgba(17,31,56,0.48)] backdrop-blur-sm xl:h-[120px]">
                    <ClientImage
                      baseName={client}
                      alt={`Logo ${client.replace('-', ' ')}`}
                      priority={index === 0}
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
