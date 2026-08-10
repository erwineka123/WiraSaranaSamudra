'use client'

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type HTMLAttributes,
  type ReactNode,
} from 'react'
import { cn } from '@/lib/utils'

type RevealDirection = 'up' | 'down' | 'left' | 'right'

type RevealProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
  delay?: number
  duration?: number
  distance?: number
  direction?: RevealDirection
  once?: boolean
  threshold?: number
}

const directionMap: Record<RevealDirection, { x: string; y: string }> = {
  up: { x: '0px', y: '28px' },
  down: { x: '0px', y: '-28px' },
  left: { x: '28px', y: '0px' },
  right: { x: '-28px', y: '0px' },
}

export function Reveal({
  children,
  className,
  style,
  delay = 0,
  duration = 720,
  distance = 28,
  direction = 'up',
  once = true,
  threshold = 0.18,
  ...props
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const element = ref.current

    if (!element) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)

          if (once) {
            observer.unobserve(entry.target)
          }

          return
        }

        if (!once) {
          setVisible(false)
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -10% 0px',
      }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [once, threshold])

  const offset = directionMap[direction]
  const revealStyle = {
    '--reveal-delay': `${delay}ms`,
    '--reveal-duration': `${duration}ms`,
    '--reveal-x': offset.x === '0px' ? '0px' : `${Math.sign(parseFloat(offset.x)) * distance}px`,
    '--reveal-y': offset.y === '0px' ? '0px' : `${Math.sign(parseFloat(offset.y)) * distance}px`,
    ...style,
  } as CSSProperties

  return (
    <div
      ref={ref}
      data-visible={visible ? 'true' : 'false'}
      className={cn('reveal', className)}
      style={revealStyle}
      {...props}
    >
      {children}
    </div>
  )
}
