import { Twitter, Facebook, Linkedin, Link2 } from 'lucide-react'
import { Button } from './ui/button'
import { toast } from 'sonner'
import { useTranslation } from '@/app/i18n/hooks/useTranslation'

interface ShareButtonsProps {
  url: string
  title: string
  description: string
  image?: string
}

export function ShareButtons({ url, title, description }: ShareButtonsProps) {
  const { t } = useTranslation()

  const shareData = {
    title,
    text: description,
    url,
  }

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share(shareData)
      } else {
        await navigator.clipboard.writeText(url)
        toast.success(t('common.copied'))
      }
    } catch (error) {
      console.error('Error sharing:', error)
    }
  }

  const shareToTwitter = () => {
    const tweetText = encodeURIComponent(`${title}\n\n${description}`)
    const tweetUrl = `https://twitter.com/intent/tweet?text=${tweetText}&url=${encodeURIComponent(url)}&via=esx_ai`
    window.open(tweetUrl, '_blank')
  }

  const shareToFacebook = () => {
    const fbUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
    window.open(fbUrl, '_blank')
  }

  const shareToLinkedIn = () => {
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
    window.open(linkedInUrl, '_blank')
  }

  return (
    <div className="flex gap-2">
      <Button
        size="icon"
        variant="ghost"
        onClick={shareToTwitter}
        aria-label={t('common.shareOnTwitter')}
      >
        <Twitter className="h-4 w-4" />
      </Button>
      <Button
        size="icon"
        variant="ghost"
        onClick={shareToFacebook}
        aria-label={t('common.shareOnFacebook')}
      >
        <Facebook className="h-4 w-4" />
      </Button>
      <Button
        size="icon"
        variant="ghost"
        onClick={shareToLinkedIn}
        aria-label={t('common.shareOnLinkedIn')}
      >
        <Linkedin className="h-4 w-4" />
      </Button>
      <Button
        size="icon"
        variant="ghost"
        onClick={handleShare}
        aria-label={t('common.copyLink')}
      >
        <Link2 className="h-4 w-4" />
      </Button>
    </div>
  )
} 