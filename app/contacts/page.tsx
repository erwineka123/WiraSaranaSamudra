import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Clock3, Mail, MapPin, Phone, ShipWheel } from 'lucide-react'
import { ContactInquiryForm } from '@/components/contact-inquiry-form'
import { Reveal } from '@/components/reveal'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Contact Us | PT Wira Sarana Samudra',
  description:
    'Get in touch with PT Wira Sarana Samudra for reliable maritime services and operational support.',
}

const contactDetails = [
  {
    icon: MapPin,
    label: 'Office',
    value:
      'Komplek Perkantoran Tanjung Mas Raya Blok B1 No.17 Tanjung Barat, Jakarta Selatan 12530',
  },
  {
    icon: Phone,
    label: 'Phone / WhatsApp',
    value: '+62 21 8378 5852',
    href: 'https://wa.me/622183785852',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info.wss@wirasarana.com',
    href: 'mailto:info.wss@wirasarana.com',
  },
  {
    icon: Clock3,
    label: 'Office Hours',
    value: 'Open 24 Hours',
  },
]

const inquiryTips = [
  'Share vessel name, ETA, or operational timeline if available.',
  'Mention the service required, such as agency, cargo supervision, bunkering, or crew support.',
  'Include the best contact person so coordination can continue quickly.',
]

export default function ContactPage() {
  return (
    <main>
      <section className="pb-18 pt-8 md:pb-24 md:pt-10">
        <div className="shell">
          <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
            <Reveal className="rounded-[36px] bg-primary p-8 text-primary-foreground shadow-[0_34px_90px_-48px_rgba(17,31,56,0.72)] md:p-10 lg:p-12">
              <span className="eyebrow border-white/14 bg-white/7 text-primary-foreground/86">
                <ShipWheel className="size-3.5 text-accent" aria-hidden="true" />
                Contact WSS
              </span>

              <h1 className="headline mt-6 text-primary-foreground">
                Let&apos;s discuss your maritime requirements with less back and forth.
              </h1>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/72 md:text-lg">
                Whether you need port agency, cargo supervision, vessel supplies,
                bunkering, or other maritime support, our team is ready to
                coordinate the next step with you.
              </p>

              {/* <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  render={
                    <Link
                      href="https://wa.me/622183785852"
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  }
                  nativeButton={false}
                  size="lg"
                  className="bg-white text-primary hover:bg-white/92"
                >
                  WhatsApp Us
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Button>
                <Button
                  render={<Link href="mailto:info.wss@wirasarana.com" />}
                  nativeButton={false}
                  size="lg"
                  variant="outline"
                  className="border-white/18 bg-white/6 text-primary-foreground hover:bg-white/10 hover:text-primary-foreground"
                >
                  Email Our Team
                </Button>
              </div> */}

              <div className="mt-10 grid gap-4">
                {contactDetails.map((item, index) => {
                  const Icon = item.icon

                  return (
                    <Reveal key={item.label} delay={index * 90}>
                      <div className="rounded-[26px] border border-white/10 bg-white/6 p-5">
                        <div className="flex items-start gap-4">
                          <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-accent">
                            <Icon className="size-5" aria-hidden="true" />
                          </span>

                          <div>
                            <p className="text-base font-semibold text-primary-foreground">
                              {item.label}
                            </p>
                            {item.href ? (
                              <a
                                href={item.href}
                                target={item.href.startsWith('http') ? '_blank' : undefined}
                                rel={
                                  item.href.startsWith('http')
                                    ? 'noopener noreferrer'
                                    : undefined
                                }
                                className="mt-2 block text-base leading-relaxed text-primary-foreground/68 transition-colors hover:text-primary-foreground"
                              >
                                {item.value}
                              </a>
                            ) : (
                              <p className="mt-2 text-base leading-relaxed text-primary-foreground/68">
                                {item.value}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </Reveal>
                  )
                })}
              </div>
            </Reveal>

            <Reveal
              className="rounded-[36px] border border-white/72 bg-white/88 p-6 shadow-[0_32px_90px_-48px_rgba(17,31,56,0.48)] backdrop-blur-sm md:p-8 lg:p-10"
              direction="left"
              delay={140}
            >
              <div className="max-w-2xl">
                <span
                  className="eyebrow border-[rgba(74,78,161,0.12)] bg-secondary/70 text-[var(--brand)]"
                >
                  <Mail className="size-3.5 text-accent" aria-hidden="true" />
                  Start an Inquiry
                </span>
                <h2 className="mt-6 font-serif text-3xl font-semibold text-foreground md:text-4xl">
                  Tell us what you need and choose the channel that suits you.
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                  Fill in the details below, then send your inquiry directly by
                  email or WhatsApp with the prepared message.
                </p>
              </div>

              <div className="mt-8">
                <ContactInquiryForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* <section className="section-band pb-20 pt-4 md:pb-24">
        <div className="shell">
          <Reveal className="rounded-[36px] border border-white/72 bg-white/86 px-7 py-10 shadow-[0_32px_90px_-48px_rgba(17,31,56,0.45)] backdrop-blur-sm md:px-10 md:py-12 lg:px-12">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div className="max-w-xl">
                <span
                  className="eyebrow border-[rgba(74,78,161,0.12)] bg-secondary/70 text-[var(--brand)]"
                >
                  <Phone className="size-3.5 text-accent" aria-hidden="true" />
                  Helpful Details
                </span>
                <h2 className="section-title mt-6">
                  A few details help us coordinate faster.
                </h2>
                <p className="section-copy mt-5">
                  The clearer your first message is, the easier it becomes for our
                  team to understand the requirement and prepare the right follow-up.
                </p>
              </div>

              <div className="grid gap-4">
                {inquiryTips.map((tip, index) => (
                  <Reveal key={tip} delay={index * 90}>
                    <div className="rounded-[26px] border border-border/75 bg-secondary/45 px-5 py-5">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--brand)]">
                        0{index + 1}
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-foreground">{tip}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section> */}
    </main>
  )
}
