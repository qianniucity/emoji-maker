'use client';

import { useEffect, useCallback, memo } from 'react';
import Image from 'next/image';
import { Download, Heart, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEmojiStore } from '@/app/store/emoji-store';
import { toast } from '@/app/components/ui/use-toast';
import type { Emoji } from '@/app/types/emoji';

const EmojiCard = memo(({ emoji, onLike, onDownload, onShare, isLoading }: {
  emoji: Emoji;
  onLike: (id: string) => void;
  onDownload: (url: string) => void;
  onShare: (url: string, prompt: string) => void;
  isLoading: boolean;
}) => (
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
        <Button 
          size="icon" 
          variant="ghost" 
          className="text-white hover:bg-white/20"
          onClick={() => onDownload(emoji.image_url)}
          aria-label="Download emoji"
        >
          <Download className="h-5 w-5" aria-hidden="true" />
        </Button>
        <Button 
          size="icon" 
          variant="ghost" 
          className="text-white hover:bg-white/20"
          onClick={() => onShare(emoji.image_url, emoji.prompt)}
          aria-label="Share on Twitter"
        >
          <Twitter className="h-5 w-5" aria-hidden="true" />
        </Button>
        <Button 
          size="icon" 
          variant="ghost" 
          className="text-white hover:bg-white/20"
          onClick={() => onLike(emoji.id)}
          disabled={isLoading}
          aria-label={emoji.liked ? 'Unlike emoji' : 'Like emoji'}
        >
          <Heart 
            className={`h-5 w-5 ${isLoading ? 'animate-pulse' : ''}`}
            fill={emoji.liked ? "white" : "none"}
            aria-hidden="true"
          />
        </Button>
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
));

EmojiCard.displayName = 'EmojiCard';

export function EmojiGrid() {
  const { emojis, fetchEmojis, toggleLike, downloadEmoji, isLoading } = useEmojiStore();

  useEffect(() => {
    fetchEmojis().catch((error) => {
      toast({
        title: 'Error',
        description: 'Failed to fetch emojis',
        variant: 'destructive',
      });
    });
  }, [fetchEmojis]);

  const handleShare = useCallback((imageUrl: string, prompt: string) => {
    const tweetText = encodeURIComponent(`AI-generated emoji: "${prompt}"`);
    const tweetUrl = `https://twitter.com/intent/tweet?text=${tweetText}&url=${encodeURIComponent(imageUrl)}&via=esx_ai`;
    window.open(tweetUrl, '_blank', 'noopener,noreferrer');
  }, []);

  if (!emojis.length) {
    return (
      <div 
        className="text-center text-gray-500"
        role="status"
        aria-label="No emojis available"
      >
        No emojis generated yet. Be the first to create one!
      </div>
    );
  }

  return (
    <div 
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
      role="feed"
      aria-label="Generated emojis grid"
    >
      {emojis.map((emoji) => (
        <EmojiCard
          key={emoji.id}
          emoji={emoji}
          onLike={toggleLike}
          onDownload={downloadEmoji}
          onShare={handleShare}
          isLoading={isLoading}
        />
      ))}
    </div>
  );
} 