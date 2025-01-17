'use client';

import { memo, useCallback } from 'react';
import Image from 'next/image';
import { Download, Heart, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { Emoji } from '@/app/types/emoji';

// Memoized action button component
const ActionButton = memo(({ 
  icon: Icon, 
  onClick, 
  label, 
  disabled = false 
}: { 
  icon: typeof Download | typeof Heart | typeof Twitter;
  onClick: () => void;
  label: string;
  disabled?: boolean;
}) => (
  <Button 
    size="icon" 
    variant="ghost" 
    className="text-white hover:bg-white/20"
    onClick={onClick}
    disabled={disabled}
    aria-label={label}
  >
    <Icon className="h-5 w-5" aria-hidden="true" />
  </Button>
));

ActionButton.displayName = 'ActionButton';

interface EmojiCardProps {
  emoji: Emoji;
  onLike: (id: string) => void;
  onDownload: (url: string) => void;
  onShare: (url: string, prompt: string) => void;
  isLoading: boolean;
}

const EmojiCard = memo(({ 
  emoji, 
  onLike, 
  onDownload, 
  onShare, 
  isLoading 
}: EmojiCardProps) => {
  const handleLike = useCallback(() => onLike(emoji.id), [emoji.id, onLike]);
  const handleDownload = useCallback(() => onDownload(emoji.image_url), [emoji.image_url, onDownload]);
  const handleShare = useCallback(() => onShare(emoji.image_url, emoji.prompt), [emoji.image_url, emoji.prompt, onShare]);

  return (
    <div 
      className="relative group bg-white rounded-lg p-3 shadow-md"
      role="article"
      aria-label={`Emoji: ${emoji.prompt}`}
    >
      <div className="relative aspect-square mb-2">
        <Image
          src={emoji.image_url}
          alt={emoji.prompt}
          fill
          priority
          sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
          className="rounded-lg object-cover"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center gap-2">
          <ActionButton
            icon={Download}
            onClick={handleDownload}
            label="Download emoji"
          />
          <ActionButton
            icon={Twitter}
            onClick={handleShare}
            label="Share on Twitter"
          />
          <ActionButton
            icon={Heart}
            onClick={handleLike}
            disabled={isLoading}
            label={emoji.liked ? 'Unlike emoji' : 'Like emoji'}
          />
        </div>
      </div>
      
      <div className="flex justify-between items-center px-1">
        <span className="text-sm text-gray-600 truncate max-w-[70%]" title={emoji.prompt}>
          {emoji.prompt}
        </span>
        <div className="flex items-center gap-1" aria-label={`${emoji.likes_count} likes`}>
          <Heart 
            className="h-4 w-4 text-gray-500" 
            fill={emoji.liked ? "currentColor" : "none"}
            aria-hidden="true"
          />
          <span className="text-sm text-gray-500">
            {emoji.likes_count ?? 0}
          </span>
        </div>
      </div>
    </div>
  );
});

EmojiCard.displayName = 'EmojiCard';

export default EmojiCard;