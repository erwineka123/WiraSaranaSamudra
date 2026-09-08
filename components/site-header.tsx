'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowRight, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { SiteLogo } from '@/components/site-logo'
import { serviceMenuItems } from '@/lib/services'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  // { href: '/contacts', label: 'Contact' },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const serviceActive = pathname.startsWith('/services')

  const openServices = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current)
      closeTimerRef.current = null
    }

    setServicesOpen(true)
  }

  const closeServices = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current)
    }

    closeTimerRef.current = setTimeout(() => {
      setServicesOpen(false)
    }, 140)
  }

  return (
    <header className="sticky top-0 z-50">
      <div className="mx-auto max-w-full">
        <div className="border-b border-black/10 backdrop-blur-[2px] bg-white/80 backdrop-saturate-150">
          <div className="mx-auto max-w-[1460px] flex h-[76px] items-center justify-between px-5 sm:px-6 md:px-8">
            <Link
              href="/"
              className="flex items-center"
              onClick={() => {
                setOpen(false)
                setServicesOpen(false)
              }}
            >
              <SiteLogo className="h-9 w-[220px] sm:h-17   sm:w-[220px]" priority />
            </Link>

            <nav
              className="hidden items-center gap-1 rounded-full border border-border/70 bg-white/80 p-1 md:ml-4 md:flex lg:ml-6"
              aria-label="Primary navigation"
            >
              {navItems.map((item) => {
                const active = pathname === item.href

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'rounded-full px-4 py-2 text-base font-medium transition-all',
                      active
                        ? 'bg-primary text-primary-foreground shadow-[0_12px_24px_-18px_rgba(17,31,56,0.65)]'
                        : 'text-muted-foreground hover:text-foreground',
                    )}
                  >
                    {item.label}
                  </Link>
                )
              })}

              <div
                className="relative"
                onMouseEnter={openServices}
                onMouseLeave={closeServices}
              >
                <button
                  type="button"
                  className={cn(
                    'inline-flex items-center gap-1 rounded-full px-4 py-2 text-base font-medium transition-all',
                    serviceActive
                      ? 'bg-primary text-primary-foreground shadow-[0_12px_24px_-18px_rgba(17,31,56,0.65)]'
                      : 'text-muted-foreground hover:text-foreground',
                  )}
                  onClick={() => setServicesOpen((value) => !value)}
                  onFocus={openServices}
                  aria-expanded={servicesOpen}
                  aria-haspopup="menu"
                >
                  Services
                  <ArrowRight className="size-3.5 rotate-90" aria-hidden="true" />
                </button>

                {servicesOpen && (
                  <div className="absolute left-1/2 top-[calc(100%+10px)] z-50 w-[340px] -translate-x-1/2 rounded-[28px] border border-border/70 bg-white/96 p-3 shadow-[0_28px_70px_-44px_rgba(17,31,56,0.45)] backdrop-blur-xl">
                    <div className="grid gap-1 rounded-[22px] p-1">
                      {serviceMenuItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setServicesOpen(false)}
                          className="rounded-2xl px-3 py-3 text-base font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </nav>

            <div className="hidden items-center gap-3 md:flex">
              <span className="text-base text-muted-foreground">Need fast coordination?</span>
              <Button render={<Link href="/contacts" />} nativeButton={false} size="lg">
                Contact Us
                <ArrowRight className="size-4" aria-hidden="true" />
              </Button>
            </div>

            <button
              type="button"
              className="inline-flex size-11 items-center justify-center rounded-full border border-border/70 bg-white/80 text-foreground md:hidden"
              onClick={() => {
                setOpen((value) => !value)
                setServicesOpen(false)
              }}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>

          {open && (
            <div className="border-t border-border/60 px-4 pb-4 md:hidden">
              <nav
                className="mt-4 flex flex-col gap-2 rounded-[24px] border border-white/70 bg-white/80 p-3 shadow-[0_20px_50px_-36px_rgba(17,31,56,0.45)]"
                aria-label="Mobile navigation"
              >
                {navItems.map((item) => {
                  const active = pathname === item.href

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        'rounded-2xl px-4 py-3 text-base font-medium transition-colors',
                        active
                          ? 'bg-primary text-primary-foreground'
                          : 'text-muted-foreground hover:bg-secondary hover:text-foreground',
                      )}
                    >
                      {item.label}
                    </Link>
                  )
                })}

                <div className="rounded-[22px] border border-border/70 bg-white/70 p-2">
                  <div className="flex items-center justify-between px-2 py-2 text-base font-semibold text-foreground">
                    <span>Services</span>
                    <button
                      type="button"
                      className="rounded-full px-3 py-1.5 text-xs font-medium text-muted-foreground hover:bg-secondary hover:text-foreground"
                      onClick={() => setServicesOpen((value) => !value)}
                      aria-expanded={servicesOpen}
                    >
                      {servicesOpen ? 'Hide' : 'Show'}
                    </button>
                  </div>

                  {servicesOpen && (
                    <div className="mt-1 grid gap-1 p-1">
                      {serviceMenuItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className="rounded-2xl px-3 py-3 text-base font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Button
                  render={<Link href="/contacts" onClick={() => setOpen(false)} />}
                  nativeButton={false}
                  size="lg"
                  className="mt-2"
                >
                  Start an Inquiry
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Button>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
