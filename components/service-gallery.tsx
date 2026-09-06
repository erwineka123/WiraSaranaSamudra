'use client'

import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import type { ServiceGalleryImage } from '@/lib/services'

type ServiceGalleryProps = {
  images: ServiceGalleryImage[]
  fallbackImage: string
  serviceName: string
}

export function ServiceGallery({
  images,
  fallbackImage,
  serviceName,
}: ServiceGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [unavailableImages, setUnavailableImages] = useState<string[]>([])

  const activeImage = images[activeIndex]
  const activeImageSource = unavailableImages.includes(activeImage.src)
    ? fallbackImage
    : activeImage.src

  function showPrevious() {
    setActiveIndex((current) => (current - 1 + images.length) % images.length)
  }

  function showNext() {
    setActiveIndex((current) => (current + 1) % images.length)
  }

  return (
    <section className="section-band py-20 md:py-28">
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-[0.74fr_1.26fr] lg:items-start lg:gap-16">
          <div className="max-w-xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-accent" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--brand)]">
                Operation Gallery
              </span>
            </div>
            <h2 className="mt-6 font-serif text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl">
              A closer look at {serviceName.toLowerCase()} operations.
            </h2>
            <p className="mt-5 text-base leading-8 text-muted-foreground md:text-lg">
              Browse the gallery to see the type of marine transport support and coordination we provide.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[32px] border border-white/80 bg-primary p-3 shadow-[0_34px_90px_-48px_rgba(11,31,58,0.62)] sm:p-4">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[24px] bg-primary">
              <Image
                key={activeImageSource}
                src={activeImageSource}
                alt={activeImage.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 58vw"
                onError={() => {
                  setUnavailableImages((current) =>
                    current.includes(activeImage.src)
                      ? current
                      : [...current, activeImage.src],
                  )
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/82 via-primary/8 to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 sm:bottom-6 sm:left-6 sm:right-6">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/60">
                    {activeImage.label}
                  </p>
                  <p className="mt-2 font-serif text-2xl font-semibold text-white sm:text-3xl">
                    Tug &amp; Barge Services
                  </p>
                </div>
                <p className="hidden text-xs font-semibold tracking-[0.18em] text-white/70 sm:block">
                  {String(activeIndex + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
                </p>
              </div>

              <div className="absolute inset-x-4 top-1/2 flex -translate-y-1/2 items-center justify-between sm:inset-x-5">
                <button
                  type="button"
                  onClick={showPrevious}
                  className="inline-flex size-11 items-center justify-center rounded-full border border-white/24 bg-primary/72 text-white backdrop-blur-sm transition-colors hover:bg-[var(--signal)]"
                  aria-label="Show previous gallery image"
                >
                  <ChevronLeft className="size-5" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={showNext}
                  className="inline-flex size-11 items-center justify-center rounded-full border border-white/24 bg-primary/72 text-white backdrop-blur-sm transition-colors hover:bg-[var(--signal)]"
                  aria-label="Show next gallery image"
                >
                  <ChevronRight className="size-5" aria-hidden="true" />
                </button>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between gap-4 px-1 pb-1">
              <div className="flex gap-2" aria-label="Gallery image selector">
                {images.map((image, index) => (
                  <button
                    key={image.src}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`h-1.5 rounded-full transition-all ${
                      index === activeIndex
                        ? 'w-9 bg-[var(--signal)]'
                        : 'w-3 bg-white/28 hover:bg-white/55'
                    }`}
                    aria-label={`Show image ${index + 1}: ${image.label}`}
                    aria-current={index === activeIndex ? 'true' : undefined}
                  />
                ))}
              </div>
              <p className="text-xs text-primary-foreground/58">
                Use the arrows to browse
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
