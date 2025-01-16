import Image, { ImageProps } from 'next/image'
import { cn } from '@/lib/utils'

interface OptimizedImageProps extends ImageProps {
  aspectRatio?: string
}

export function OptimizedImage({ 
  src, 
  alt, 
  className, 
  aspectRatio = 'aspect-square',
  ...props 
}: OptimizedImageProps) {
  return (
    <div className={cn('overflow-hidden', aspectRatio, className)}>
      <Image
        {...props}
        src={src}
        alt={alt}
        className={cn('object-cover w-full h-full', className)}
        loading="lazy"
        decoding="async"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  )
} 