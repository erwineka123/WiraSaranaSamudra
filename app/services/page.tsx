import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  Anchor,
  ArrowRight,
  Boxes,
  ClipboardCheck,
  FileCheck2,
  Fuel,
  PackageCheck,
  Shirt,
  Ship,
  ShieldCheck,
  UsersRound,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Maritime Services | PT Wira Sarana Samudra',
  description:
    'Comprehensive maritime services including ship agency, cargo supervision, tug and barge, ship chandling, bunkering, running store, crew workwear, and husbandry services.',
}

const services = [
  {
    icon: Anchor,
    title: 'Ship Agency Services',
    shortTitle: 'Ship Agency',
    description:
      'Professional ship agency services to ensure smooth, efficient, and compliant vessel operations throughout port activities.',
    points: [
      'Vessel documentation and port clearance',
      'Coordination with port authorities',
      'Clearance in and clearance out',
      'Berthing and port arrangements',
      'Crew change coordination',
      'Operational support during port stay',
    ],
  },
  {
    icon: ClipboardCheck,
    title: 'Loading & Unloading Supervision',
    shortTitle: 'Cargo Supervision',
    description:
      'Professional supervision of cargo loading and unloading to keep operations safe, efficient, and properly documented.',
    points: [
      'Loading and discharging monitoring',
      'Cargo quantity recording',
      'Cargo condition inspection',
      'Stevedore coordination',
      'Operational monitoring',
      'Accurate operational reporting',
    ],
  },
  {
    icon: Ship,
    title: 'Tug & Barge Services',
    shortTitle: 'Tug & Barge',
    description:
      'Reliable tug boat and barge support for marine transportation and the movement of different cargo types.',
    points: [
      'Tug boat and barge operations',
      'Coal transportation',
      'Construction material transportation',
      'Heavy equipment transportation',
      'General cargo transportation',
      'Safety-focused marine operations',
    ],
  },
  {
    icon: PackageCheck,
    title: 'Ship Chandler Services',
    shortTitle: 'Ship Chandler',
    description:
      'Comprehensive vessel supplies delivered to support operations both at sea and while the vessel is in port.',
    points: [
      'Fresh and frozen provisions',
      'Drinking water',
      'Galley and kitchen supplies',
      'Cleaning supplies',
      'Deck and engine stores',
      'Safety equipment and operational needs',
    ],
  },
  {
    icon: Fuel,
    title: 'Bunker Services',
    shortTitle: 'Bunkering',
    description:
      'Reliable marine fuel and lubricant supply with timely delivery and procedures aligned with maritime safety requirements.',
    points: [
      'Marine fuel supply',
      'Lubricant supply',
      'Timely fuel delivery',
      'Safe bunkering procedures',
      'Operational coordination',
      'Compliance with maritime requirements',
    ],
  },
  {
    icon: Boxes,
    title: 'Running Store',
    shortTitle: 'Running Store',
    description:
      'Procurement and delivery of routine vessel consumables required for everyday onboard activities.',
    points: [
      'Office stationery',
      'Cleaning supplies',
      'Work equipment',
      'Light spare parts',
      'Operational support equipment',
      'Other routine vessel requirements',
    ],
  },
  {
    icon: Shirt,
    title: 'Crew Workwear & Uniform Supply',
    shortTitle: 'Crew Workwear',
    description:
      'Workwear and uniform solutions tailored to the specifications, comfort, durability, and safety needs of shipping companies.',
    points: [
      'Daily crew uniforms',
      'Workwear and coveralls',
      'Safety vests',
      'Jackets and outerwear',
      'Crew identification items',
      'Custom specifications and materials',
    ],
  },
  {
    icon: UsersRound,
    title: 'Husbandry Services',
    shortTitle: 'Husbandry',
    description:
      'Comprehensive husbandry support covering vessel and crew requirements throughout their stay in port.',
    points: [
      'Crew change arrangements',
      'Crew transportation',
      'Hotel reservations',
      'Medical assistance',
      'Visa and immigration documentation',
      'Document and spare parts delivery',
    ],
  },
]

const operationalAreas = [
  {
    icon: Anchor,
    title: 'Port & Vessel Operations',
    description:
      'Supporting vessels from arrival to departure through ship agency, clearance, husbandry, and daily port coordination.',
    labels: ['Ship agency', 'Clearance', 'Crew support'],
  },
  {
    icon: ClipboardCheck,
    title: 'Cargo & Marine Operations',
    description:
      'Keeping cargo activities monitored and aligned while supporting marine transportation requirements in the field.',
    labels: ['Cargo supervision', 'Tug and barge', 'Reporting'],
  },
  {
    icon: Fuel,
    title: 'Vessel Supply & Support',
    description:
      'Delivering supplies, fuel, lubricants, and onboard support needs through responsive operational coordination.',
    labels: ['Ship chandler', 'Bunkering', 'Running store'],
  },
  {
    icon: Shirt,
    title: 'Crew Support',
    description:
      'Providing uniforms, transportation, documentation, and practical support for crew requirements while in port.',
    labels: ['Workwear', 'Husbandry', 'Practical assistance'],
  },
]

const approach = [
  {
    icon: ShieldCheck,
    title: 'Safety & Compliance',
    description:
      'Operations are carried out with attention to regulations, safe procedures, and established maritime standards.',
  },
  {
    icon: FileCheck2,
    title: 'Reliable Coordination',
    description:
      'We align authorities, suppliers, operators, and documentation so activities can move with less friction.',
  },
  {
    icon: PackageCheck,
    title: 'Quality Delivery',
    description:
      'From supplies to support services, we focus on timeliness, accuracy, and practical execution on site.',
  },
  {
    icon: UsersRound,
    title: 'Client-Focused Support',
    description:
      'Our services are tailored to the operational context of vessel owners, operators, and maritime stakeholders.',
  },
]

export default function ServicesPage() {
  return (
    <main>
      <section className="pb-18 pt-8 md:pb-24 md:pt-10">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            <Reveal className="max-w-2xl">
              <span
                className="eyebrow border-[rgba(74,78,161,0.12)] bg-white/72 text-[var(--brand)]"
              >
                <Anchor className="size-3.5 text-accent" aria-hidden="true" />
                Maritime Services
              </span>

              <h1 className="headline mt-6 text-foreground">
                Comprehensive support designed around real maritime operations.
              </h1>

              <p className="section-copy mt-6 max-w-xl">
                From port agency and cargo activity to vessel supplies, bunkering,
                crew support, and husbandry, we provide integrated services for
                operational teams who need clarity and dependable delivery.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button render={<Link href="#services" />} nativeButton={false} size="lg">
                  Explore Core Services
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Button>
                <Button
                  render={<Link href="/contacts" />}
                  nativeButton={false}
                  size="lg"
                  variant="outline"
                >
                  Discuss Requirements
                </Button>
              </div>
            </Reveal>

            <Reveal className="relative lg:pl-6" direction="left" delay={120}>
              <div className="rounded-[32px] border border-white/72 bg-white/86 p-4 shadow-[0_32px_90px_-46px_rgba(17,31,56,0.52)] backdrop-blur-xl sm:p-5">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] bg-primary">
                  <Image
                    src="/images/service-hero.png"
                    alt="Maritime service operations"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 44vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/94 via-primary/28 to-transparent" />

                  <div className="absolute bottom-5 left-5 right-5">
                    <div className="max-w-sm rounded-[28px] border border-white/14 bg-white/12 p-5 text-white backdrop-blur-md">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/68">
                        Service Coverage
                      </p>
                      <p className="mt-3 font-serif text-2xl font-semibold">
                        One operational partner across vessel, cargo, and crew needs.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-[22px] border border-border/75 bg-secondary/58 px-4 py-4">
                    <p className="font-serif text-2xl font-semibold text-foreground">8</p>
                    <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                      Core services
                    </p>
                  </div>
                  <div className="rounded-[22px] border border-border/75 bg-secondary/58 px-4 py-4">
                    <p className="font-serif text-2xl font-semibold text-foreground">24/7</p>
                    <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                      Coordination
                    </p>
                  </div>
                  <div className="rounded-[22px] border border-border/75 bg-secondary/58 px-4 py-4">
                    <p className="font-serif text-2xl font-semibold text-foreground">100%</p>
                    <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                      Compliance focus
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="services" className="section-band py-20 scroll-mt-28 md:py-28">
        <div className="shell">
          <Reveal className="max-w-2xl">
            <span
              className="eyebrow border-[rgba(74,78,161,0.12)] bg-white/72 text-[var(--brand)]"
            >
              <Boxes className="size-3.5 text-accent" aria-hidden="true" />
              Core Services
            </span>
            <h2 className="section-title mt-6">
              Reliable solutions for every stage of your operation.
            </h2>
            <p className="section-copy mt-5 max-w-xl">
              Each service is built to work well on its own and even better when
              coordinated as part of a wider operational requirement.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 xl:grid-cols-2">
            {services.map((service, index) => {
              const Icon = service.icon

              return (
                <Reveal key={service.shortTitle} delay={index * 90} className="h-full">
                  <article className="rounded-[32px] border border-white/72 bg-white/86 p-7 shadow-[0_28px_80px_-48px_rgba(17,31,56,0.48)] backdrop-blur-sm md:p-8">
                    <div className="flex items-start justify-between gap-6">
                      <span className="flex size-12 items-center justify-center rounded-full bg-secondary text-primary">
                        <Icon className="size-5" aria-hidden="true" />
                      </span>
                      <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--brand)]">
                        {service.shortTitle}
                      </span>
                    </div>

                    <h3 className="mt-7 font-serif text-2xl font-semibold text-foreground">
                      {service.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                      {service.description}
                    </p>

                    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                      {service.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-3 rounded-[20px] border border-border/75 bg-secondary/45 px-4 py-3 text-sm text-foreground"
                        >
                          <span
                            className="mt-1.5 size-2 shrink-0 rounded-full bg-accent"
                            aria-hidden="true"
                          />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section-band-alt py-20 md:py-28">
        <div className="shell">
          <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:gap-14">
            <Reveal className="max-w-xl">
              <span
                className="eyebrow border-[rgba(74,78,161,0.12)] bg-white/72 text-[var(--brand)]"
              >
                <Ship className="size-3.5 text-accent" aria-hidden="true" />
                Integrated Support
              </span>
              <h2 className="section-title mt-6">
                Connected services across port, vessel, cargo, and crew needs.
              </h2>
              <p className="section-copy mt-5">
              Our coverage allows clients to simplify coordination and work
              through one trusted maritime partner instead of several fragmented
              contacts.
            </p>
            </Reveal>

            <div className="grid items-stretch gap-6 md:grid-cols-2">
              {operationalAreas.map((area, index) => {
                const Icon = area.icon

                return (
                  <Reveal key={area.title} delay={index * 90} className="h-full">
                    <div className="flex h-full flex-col rounded-[30px] border border-white/72 bg-white/86 p-6 shadow-[0_24px_70px_-48px_rgba(17,31,56,0.45)]">
                      <span className="flex size-12 items-center justify-center rounded-full bg-secondary text-primary">
                        <Icon className="size-5" aria-hidden="true" />
                      </span>
                      <h3 className="mt-6 font-serif text-2xl font-semibold text-foreground">
                        {area.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {area.description}
                      </p>
                      <div className="mt-auto flex flex-wrap gap-2 pt-5">
                        {area.labels.map((label) => (
                          <span
                            key={label}
                            className="rounded-full border border-border/80 bg-secondary/60 px-3 py-1.5 text-xs font-medium text-foreground"
                          >
                            {label}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="shell">
          <Reveal className="overflow-hidden rounded-[38px] bg-primary px-6 py-12 text-primary-foreground shadow-[0_34px_90px_-48px_rgba(17,31,56,0.72)] md:px-10 md:py-16 lg:px-14">
            <div className="max-w-2xl">
              <span className="eyebrow border-white/14 bg-white/7 text-primary-foreground/86">
                <ShieldCheck className="size-3.5 text-accent" aria-hidden="true" />
                Our Approach
              </span>
              <h2 className="section-title mt-6 text-primary-foreground">
                Every operation deserves support that is clear, timely, and reliable.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/70 md:text-lg">
                We focus on safe execution, strong follow-up, and coordination that
                helps clients stay close to what is happening on the ground.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {approach.map((item, index) => {
                const Icon = item.icon

                return (
                  <Reveal key={item.title} delay={index * 90} className="h-full">
                    <div className="rounded-[28px] border border-white/10 bg-white/6 p-6">
                      <Icon className="size-6 text-accent" aria-hidden="true" />
                      <h3 className="mt-5 font-serif text-2xl font-semibold">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-primary-foreground/68">
                        {item.description}
                      </p>
                    </div>
                  </Reveal>
                )
              })}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-band pb-20 pt-4 md:pb-24">
        <div className="shell">
          <Reveal className="rounded-[36px] border border-white/72 bg-white/86 px-7 py-10 shadow-[0_32px_90px_-48px_rgba(17,31,56,0.48)] backdrop-blur-sm md:px-10 md:py-12 lg:px-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-2xl">
                <span
                  className="eyebrow border-[rgba(74,78,161,0.12)] bg-secondary/70 text-[var(--brand)]"
                >
                  <UsersRound className="size-3.5 text-accent" aria-hidden="true" />
                  Work With WSS
                </span>
                <h2 className="section-title mt-6">
                  Let us support your next maritime operation.
                </h2>
                <p className="section-copy mt-5 max-w-xl">
                  Tell us the service requirement, vessel context, or operational
                  challenge and we will help coordinate the next steps.
                </p>
              </div>

              <Button render={<Link href="/contacts" />} nativeButton={false} size="lg">
                Discuss Your Requirements
                <ArrowRight className="size-4" aria-hidden="true" />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
