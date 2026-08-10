'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowRight, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { SiteLogo } from '@/components/site-logo'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/contacts', label: 'Contact' },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-4 z-50 px-4">
      <div className="mx-auto max-w-[1460px]">
        <div className="rounded-[28px] border border-black/25 bg-background/88 shadow-[0_26px_70px_-42px_rgba(17,31,56,0.55)] backdrop-blur-xl">
          <div className="flex h-[76px] items-center justify-between px-5 sm:px-6 md:px-8">
            <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
              <SiteLogo className="h-9 w-[190px] sm:h-10 sm:w-[220px]" priority />
            </Link>

            <nav
              className="hidden items-center gap-1 rounded-full border border-border/70 bg-white/80 p-1 md:flex"
              aria-label="Primary navigation"
            >
              {navItems.map((item) => {
                const active = pathname === item.href

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'rounded-full px-4 py-2 text-sm font-medium transition-all',
                      active
                        ? 'bg-primary text-primary-foreground shadow-[0_12px_24px_-18px_rgba(17,31,56,0.65)]'
                        : 'text-muted-foreground hover:text-foreground',
                    )}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </nav>

            <div className="hidden items-center gap-3 md:flex">
              <span className="text-sm text-muted-foreground">Need fast coordination?</span>
              <Button render={<Link href="/contacts" />} nativeButton={false} size="lg">
                Contact Us
                <ArrowRight className="size-4" aria-hidden="true" />
              </Button>
            </div>

            <button
              type="button"
              className="inline-flex size-11 items-center justify-center rounded-full border border-border/70 bg-white/80 text-foreground md:hidden"
              onClick={() => setOpen((value) => !value)}
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
                        'rounded-2xl px-4 py-3 text-sm font-medium transition-colors',
                        active
                          ? 'bg-primary text-primary-foreground'
                          : 'text-muted-foreground hover:bg-secondary hover:text-foreground',
                      )}
                    >
                      {item.label}
                    </Link>
                  )
                })}

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
