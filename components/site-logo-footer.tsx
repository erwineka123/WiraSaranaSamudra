import Image from 'next/image'
import { cn } from '@/lib/utils'

type SiteLogoProps = {
  className?: string
  priority?: boolean
}

export function SiteLogo({ className, priority = false }: SiteLogoProps) {
  return (
    <span className={cn('relative block h-10 w-[220px] sm:h-11 sm:w-[220px]', className)}>
      <Image
        src="/images/logo-footer.png"
        alt="Wira Sarana Samudra Logo"
        fill
        priority={priority}
        sizes="(max-width: 640px) 220px, 250px"
        className="object-contain object-left"
      />
    </span>
  )
}
