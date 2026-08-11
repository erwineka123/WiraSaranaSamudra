import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/reveal'
import type { ServiceItem } from '@/lib/services'

type ServiceDetailPageProps = {
  service: ServiceItem
}

export function ServiceDetailPage({ service }: ServiceDetailPageProps) {
  const Icon = service.icon

  return (
    <main>
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0">
          <Image
            src={service.imagePath}
            alt={service.imageAlt}
            fill
            priority
            className="object-cover -translate-y-4"
            sizes="100vw"
          />

          <div className="absolute inset-0 bg-primary/58" />

          <div className="absolute inset-0 bg-gradient-to-r from-primary/92 via-primary/76 to-primary/35" />

          <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-transparent to-primary/14" />
        </div>

        {/* Decorative grid */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.08]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
              backgroundSize: '70px 70px',
            }}
          />
        </div>

        <div className="shell relative">
          {/* Breadcrumb */}
          <Reveal>
            <div className="flex items-center gap-2 pt-8 text-sm text-primary-foreground/55">
              <Link
                href="/"
                className="transition-colors hover:text-white"
              >
                Home
              </Link>

              <ChevronRight className="size-3.5" />

              <Link
                href="/services"
                className="transition-colors hover:text-white"
              >
                Services
              </Link>

              <ChevronRight className="size-3.5" />

              <span className="text-primary-foreground/80">
                {service.shortTitle}
              </span>
            </div>
          </Reveal>

          <div className="grid min-h-[620px] items-end gap-12 pb-16 pt-20 lg:grid-cols-[1fr_320px] lg:pb-20">
            <Reveal>
              <div className="max-w-4xl">
                {/* Back */}
                <Link
                  href="/"
                  className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-primary-foreground/65 transition-colors hover:text-white"
                >
                  <ArrowLeft className="size-4" />
                  Back to Home
                </Link>

                {/* Label */}
                <div className="mb-7 flex items-center gap-3">
                  <span className="inline-flex size-11 items-center justify-center rounded-full border border-white/15 bg-white/10 backdrop-blur-sm">
                    <Icon
                      className="size-5 text-accent"
                      aria-hidden="true"
                    />
                  </span>

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-accent">
                      Marine Service
                    </p>

                    <p className="mt-1 text-sm text-primary-foreground/65">
                      {service.shortTitle}
                    </p>
                  </div>
                </div>

                <h1 className="max-w-4xl font-serif text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl lg:text-[80px]">
                  {service.title}
                </h1>

                <p className="mt-7 max-w-2xl text-base leading-8 text-primary-foreground/70 md:text-lg">
                  {service.description}
                </p>

                <div className="mt-9 flex flex-wrap gap-3">
                  <Button
                    render={<Link href="/contacts" />}
                    nativeButton={false}
                    size="lg"
                    className="gap-2"
                  >
                    Discuss This Service
                    <ArrowRight className="size-4" />
                  </Button>

                  <Button
                    render={<Link href="/services" />}
                    nativeButton={false}
                    size="lg"
                    variant="outline"
                    className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white"
                  >
                    Explore Services
                  </Button>
                </div>
              </div>
            </Reveal>

            {/* Hero side information */}
            <Reveal delay={120}>
              <div className="hidden border-l border-white/15 pl-8 lg:block">
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-primary-foreground/45">
                  Service Overview
                </p>

                <div className="mt-6 space-y-6">
                  <div>
                    <p className="font-serif text-4xl font-semibold">
                      {String(service.points.length).padStart(2, '0')}
                    </p>

                    <p className="mt-1 text-sm text-primary-foreground/55">
                      Key service capabilities
                    </p>
                  </div>

                  <div className="h-px bg-white/10" />

                  <div>
                    <p className="text-sm leading-6 text-primary-foreground/60">
                      Professional maritime support designed around operational
                      requirements, safety, and reliable service delivery.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =========================================================
          SERVICE INTRO
      ========================================================= */}
      <section className="bg-background py-20 md:py-28">
        <div className="shell">
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            {/* Left */}
            <Reveal>
              <div className="lg:sticky lg:top-28">
                <div className="flex items-center gap-3">
                  <span className="h-px w-10 bg-accent" />

                  <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--brand)]">
                    Service Overview
                  </span>
                </div>

                <h2 className="mt-6 max-w-xl font-serif text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl">
                  {service.pageTitle}
                </h2>

                <p className="mt-6 max-w-lg text-base leading-8 text-muted-foreground">
                  {service.pageSummary}
                </p>

                {/* <div className="mt-8">
                  <Link
                    href="/contacts"
                    className="group inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand)]"
                  >
                    Talk to our team
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div> */}
              </div>
            </Reveal>

            {/* Right */}
            <Reveal delay={100}>
              <div>
                <div className="border-l-2 border-accent pl-6 md:pl-8">
                  <p className="text-lg leading-8 text-foreground md:text-xl md:leading-9">
                    {service.pageNote}
                  </p>
                </div>

                <div className="mt-12 grid gap-px overflow-hidden rounded-[24px] border border-border/70 bg-border/70 sm:grid-cols-2">
                  {service.points.map((point, index) => (
                    <div
                      key={point}
                      className="group bg-background p-6 transition-colors hover:bg-secondary/60"
                    >
                      <div className="flex items-start gap-4">
                        <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-border bg-secondary text-xs font-semibold text-[var(--brand)]">
                          {String(index + 1).padStart(2, '0')}
                        </span>

                        <div>
                          <CheckCircle2
                            className="mb-3 size-4 text-accent"
                            aria-hidden="true"
                          />

                          <p className="text-sm font-medium leading-6 text-foreground">
                            {point}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =========================================================
          IMAGE + DETAIL
      ========================================================= */}
      <section className="section-band-alt py-20 md:py-28">
        <div className="shell">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            {/* Image */}
            <Reveal>
              <div className="relative">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[30px] bg-primary">
                  <Image
                    src={service.imagePath}
                    alt={service.imageAlt}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/10 to-transparent" />

                  {/* Image label */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="border border-white/15 bg-white/10 p-5 backdrop-blur-xl">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/55">
                        {service.pageEyebrow}
                      </p>

                      <p className="mt-2 font-serif text-2xl font-semibold text-white">
                        {service.shortTitle}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating card */}
                <div className="absolute -bottom-8 -right-5 hidden w-56 border border-border/70 bg-background p-5 shadow-[0_25px_70px_-35px_rgba(17,31,56,0.5)] sm:block">
                  <ShieldCheck className="size-5 text-accent" />

                  <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--brand)]">
                    Professional Standard
                  </p>

                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    Focused on dependable maritime operations and service
                    coordination.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Content */}
            <Reveal delay={120}>
              <div className="max-w-xl">
                <div className="flex items-center gap-3">
                  <span className="h-px w-10 bg-accent" />

                  <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--brand)]">
                    Our Approach
                  </span>
                </div>

                <h2 className="mt-6 font-serif text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
                  Built around your operational needs.
                </h2>

                <p className="mt-6 text-base leading-8 text-muted-foreground">
                  Our service approach combines practical maritime experience,
                  clear coordination, and attention to operational requirements.
                  Every engagement is structured to provide a dependable and
                  professional experience from planning through execution.
                </p>

                <div className="mt-10 space-y-6">
                  {[
                    {
                      number: '01',
                      title: 'Understand',
                      description:
                        'We identify the operational requirements and priorities before the service begins.',
                    },
                    {
                      number: '02',
                      title: 'Coordinate',
                      description:
                        'Our team coordinates the required resources and service activities efficiently.',
                    },
                    {
                      number: '03',
                      title: 'Deliver',
                      description:
                        'We focus on reliable execution, communication, and service quality.',
                    },
                  ].map((item) => (
                    <div
                      key={item.number}
                      className="flex gap-5 border-t border-border/70 pt-6"
                    >
                      <span className="text-xs font-semibold tracking-[0.15em] text-accent">
                        {item.number}
                      </span>

                      <div>
                        <h3 className="font-serif text-xl font-semibold">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =========================================================
          SERVICE FOCUS
      ========================================================= */}
      <section className="bg-background py-20 md:py-28">
        <div className="shell">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <div className="flex items-center justify-center gap-3">
                <span className="h-px w-10 bg-accent" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--brand)]">
                  Service Focus
                </span>

                <span className="h-px w-10 bg-accent" />
              </div>

              <h2 className="mt-6 font-serif text-4xl font-semibold tracking-tight md:text-5xl">
                A focused service for demanding operations.
              </h2>

              <p className="mt-5 text-base leading-8 text-muted-foreground">
                Every service is structured with a clear scope so clients can
                understand what we provide and how our team can support their
                operational requirements.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="mx-auto mt-14 grid max-w-5xl gap-0 overflow-hidden rounded-[28px] border border-border/70 md:grid-cols-3">
              <div className="border-b border-border/70 p-7 md:border-b-0 md:border-r">
                <p className="font-serif text-3xl font-semibold">01</p>

                <h3 className="mt-5 text-sm font-semibold uppercase tracking-[0.15em]">
                  Clear Scope
                </h3>

                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  Clearly defined service coverage and operational
                  requirements.
                </p>
              </div>

              <div className="border-b border-border/70 p-7 md:border-b-0 md:border-r">
                <p className="font-serif text-3xl font-semibold">02</p>

                <h3 className="mt-5 text-sm font-semibold uppercase tracking-[0.15em]">
                  Reliable Support
                </h3>

                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  Responsive coordination designed around the needs of each
                  operation.
                </p>
              </div>

              <div className="p-7">
                <p className="font-serif text-3xl font-semibold">03</p>

                <h3 className="mt-5 text-sm font-semibold uppercase tracking-[0.15em]">
                  Professional Delivery
                </h3>

                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  A structured approach focused on quality, communication, and
                  dependable execution.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="bg-primary py-20 text-primary-foreground md:py-28">
        <div className="shell">
          <Reveal>
            <div className="relative overflow-hidden border border-white/10 px-6 py-12 md:px-12 md:py-16">
              {/* Decorative elements */}
              <div className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full border border-white/5" />

              <div className="pointer-events-none absolute -bottom-32 -left-20 size-72 rounded-full border border-white/5" />

              <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="size-4 text-accent" />

                    <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-primary-foreground/55">
                      Next Step
                    </span>
                  </div>

                  <h2 className="mt-6 font-serif text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
                    Need support with {service.shortTitle.toLowerCase()}?
                  </h2>

                  <p className="mt-5 max-w-xl text-base leading-8 text-primary-foreground/65">
                    Tell us about your vessel, cargo, crew, or operational
                    requirements. Our team will help coordinate the next step.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                  <Button
                    render={<Link href="/contacts" />}
                    nativeButton={false}
                    size="lg"
                    variant="outline"
                    className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white"
                  >
                    Contact Our Team
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  )
}