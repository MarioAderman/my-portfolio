'use client'

import Image from 'next/image'
import { cn } from '@/lib/utils'

interface ThemeIconProps {
  src: string
  alt: string
  size?: number
  className?: string
  invertInDark?: boolean
}

export default function ThemeIcon({
  src,
  alt,
  size = 20,
  className,
  invertInDark = true,
}: ThemeIconProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={cn(
        'object-contain',
        invertInDark && 'dark:invert',
        className
      )}
    />
  )
}
