'use client';

import { useEffect, useCallback, memo, useMemo, Suspense } from 'react';
import dynamic from 'next/dynamic';
import { useEmojiStore } from '@/app/store/emoji-store';
import { toast } from '@/app/components/ui/use-toast';

// Lazy loaded components
const EmojiCard = dynamic(() => import('./emoji-card'), {
  loading: () => <div className="aspect-square animate-pulse bg-muted rounded-lg" />,
  ssr: false
});

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

  const sortedEmojis = useMemo(() => {
    return [...emojis].sort((a, b) => 
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );
  }, [emojis]);

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
      <Suspense fallback={
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="aspect-square animate-pulse bg-muted rounded-lg" />
          ))}
        </div>
      }>
        {sortedEmojis.map((emoji) => (
          <EmojiCard
            key={emoji.id}
            emoji={emoji}
            onLike={toggleLike}
            onDownload={downloadEmoji}
            onShare={handleShare}
            isLoading={isLoading}
          />
        ))}
      </Suspense>
    </div>
  );
}