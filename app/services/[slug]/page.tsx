import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/reveal'
import { serviceBySlug, services } from '@/lib/services'

type ServicePageProps = {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }))
}

export function generateMetadata({ params }: ServicePageProps): Metadata {
  const service = serviceBySlug[params.slug]

  if (!service) {
    return {
      title: 'Service Not Found | PT Wira Sarana Samudra',
    }
  }

  return {
    title: `${service.title} | PT Wira Sarana Samudra`,
    description: service.description,
  }
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = serviceBySlug[params.slug]

  if (!service) {
    notFound()
  }

  const Icon = service.icon

  return (
    <main>
      <section className="pb-0 pt-6 md:pt-8">
        <div className="shell">
          <Reveal className="max-w-3xl">
            <Button render={<Link href="/" />} nativeButton={false} variant="outline" size="sm">
              <ArrowLeft className="size-4" aria-hidden="true" />
              Back to Home
            </Button>
          </Reveal>
        </div>
      </section>

      <section className="pb-16 pt-6 md:pb-20">
        <div className="shell">
          <Reveal>
            <div className="relative overflow-hidden rounded-[36px] border border-white/72 bg-primary shadow-[0_34px_90px_-48px_rgba(17,31,56,0.72)]">
              <div className="absolute inset-0">
                <Image
                  src={service.imagePath}
                  alt={service.imageAlt}
                  fill
                  className="object-cover opacity-25"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/92 via-primary/80 to-primary/60" />
              </div>

              <div className="relative px-6 py-12 md:px-10 md:py-16 lg:px-14">
                <div className="max-w-3xl text-primary-foreground">
                  <span className="eyebrow border-white/14 bg-white/7 text-primary-foreground/86">
                    <Icon className="size-3.5 text-accent" aria-hidden="true" />
                    {service.shortTitle}
                  </span>

                  <h1 className="mt-6 font-serif text-4xl font-semibold tracking-tight md:text-6xl">
                    {service.title}
                  </h1>

                  <p className="mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/72 md:text-lg">
                    {service.description}
                  </p>

                  <div className="mt-8 flex flex-wrap items-center gap-3 text-sm font-medium text-primary-foreground/80">
                    <Link href="/" className="transition-colors hover:text-white">
                      Home
                    </Link>
                    <span className="size-1.5 rounded-full bg-white/60" aria-hidden="true" />
                    <Link href="/services" className="transition-colors hover:text-white">
                      Services
                    </Link>
                    <span className="size-1.5 rounded-full bg-white/60" aria-hidden="true" />
                    <span>{service.shortTitle}</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="shell">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16">
            <Reveal className="order-2 lg:order-1">
              <div className="max-w-xl">
                <span className="eyebrow border-[rgba(74,78,161,0.12)] bg-white/72 text-[var(--brand)]">
                  <Icon className="size-3.5 text-accent" aria-hidden="true" />
                  Service Overview
                </span>

                <h2 className="section-title mt-6">
                  {service.pageTitle}
                </h2>

                <p className="section-copy mt-5 max-w-xl">
                  {service.pageSummary}
                </p>

                <div className="mt-6 rounded-[26px] border border-white/72 bg-white/86 p-5 shadow-[0_24px_70px_-48px_rgba(17,31,56,0.4)]">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--brand)]">
                    What this service covers
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {service.pageNote}
                  </p>
                </div>

                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                  {service.points.map((point) => (
                    <div
                      key={point}
                      className="rounded-[22px] border border-white/72 bg-white/86 px-4 py-4 shadow-[0_24px_70px_-48px_rgba(17,31,56,0.4)]"
                    >
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                        <p className="text-sm leading-relaxed text-foreground">{point}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10 rounded-[30px] border border-white/72 bg-primary p-6 text-primary-foreground shadow-[0_28px_80px_-48px_rgba(17,31,56,0.45)]">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
                    Service focus
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-primary-foreground/72 md:text-base">
                    Each service page is written to be shared separately, so the
                    visitor sees a clear scope, a focused description, and the exact
                    items that are relevant for that service.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120} className="order-1 lg:order-2">
              <div className="rounded-[34px] border border-white/72 bg-white/86 p-4 shadow-[0_28px_80px_-48px_rgba(17,31,56,0.5)] backdrop-blur-sm sm:p-5">
                <div className="overflow-hidden rounded-[28px] border border-border/70 bg-secondary">
                  <div className="relative aspect-[4/5] bg-primary">
                    <Image
                      src={service.imagePath}
                      alt={service.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 44vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/88 via-primary/18 to-transparent" />

                    <div className="absolute inset-x-5 bottom-5">
                      <div className="rounded-[26px] border border-white/14 bg-white/12 p-5 text-white backdrop-blur-md">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/68">
                            {service.pageEyebrow}
                        </p>
                        <p className="mt-3 font-serif text-2xl font-semibold">
                          {service.shortTitle}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-band-alt py-20 md:py-28">
        <div className="shell">
          <Reveal className="overflow-hidden rounded-[38px] bg-primary px-6 py-12 text-primary-foreground shadow-[0_34px_90px_-48px_rgba(17,31,56,0.72)] md:px-10 md:py-16 lg:px-14">
            <div className="max-w-2xl">
              <span className="eyebrow border-white/14 bg-white/7 text-primary-foreground/86">
                <ShieldCheck className="size-3.5 text-accent" aria-hidden="true" />
                Next Step
              </span>
              <h2 className="section-title mt-6 text-primary-foreground">
                Discuss this service with our team.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/70 md:text-lg">
                If you need this service for a vessel, cargo, or crew requirement,
                contact us and we will help coordinate the next step.
              </p>
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button render={<Link href="/contacts" />} nativeButton={false} size="lg">
                Discuss This Service
                <ArrowRight className="size-4" aria-hidden="true" />
              </Button>
              <Button render={<Link href="/services" />} nativeButton={false} size="lg" variant="outline">
                View All Services
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
