'use client'

import Image from 'next/image'
import { useState } from 'react'
import { cn } from '@/lib/utils'

const imageExtensions = ['jpeg', 'jpg', 'png', 'webp', 'svg'] as const

type ClientImageProps = {
  baseName: string
  alt: string
  priority?: boolean
  className?: string
}

export function ClientImage({
  baseName,
  alt,
  priority = false,
  className,
}: ClientImageProps) {
  const [index, setIndex] = useState(0)
  const [exhausted, setExhausted] = useState(false)

  if (exhausted) {
    return (
      <div
        className={cn(
          'flex h-full w-full items-center justify-center rounded-2xl border border-dashed border-border bg-muted/35 px-6 py-10 text-center text-sm font-medium text-muted-foreground',
          className,
        )}
      >
        {baseName}
      </div>
    )
  }

  const src = `/images/${baseName}.${imageExtensions[index]}`

  return (
    <div className={cn('relative h-full w-full', className)}>
      <Image
        key={src}
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, 420px"
        className="object-contain"
        onError={() => {
          if (index < imageExtensions.length - 1) {
            setIndex((current) => current + 1)
            return
          }

          setExhausted(true)
        }}
      />
    </div>
  )
}
