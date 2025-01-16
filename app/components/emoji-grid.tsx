'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { Download, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEmojiStore } from '@/app/store/emoji-store';

export function EmojiGrid() {
  const { emojis, fetchEmojis, toggleLike, downloadEmoji, isLoading } = useEmojiStore();

  useEffect(() => {
    fetchEmojis();
  }, [fetchEmojis]);

  if (!emojis.length) {
    return (
      <div className="text-center text-gray-500">
        No emojis generated yet. Be the first to create one!
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      {emojis.map((emoji) => (
        <div key={emoji.id} className="relative group bg-white rounded-lg p-3 shadow-md">
          {/* Image Container */}
          <div className="relative aspect-square mb-2">
            <Image
              src={emoji.image_url}
              alt={emoji.prompt}
              fill
              className="rounded-lg object-cover"
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center gap-2">
              <Button 
                size="icon" 
                variant="ghost" 
                className="text-white hover:bg-white/20"
                onClick={() => downloadEmoji(emoji.image_url)}
              >
                <Download className="h-5 w-5" />
              </Button>
              <Button 
                size="icon" 
                variant="ghost" 
                className="text-white hover:bg-white/20"
                onClick={() => toggleLike(emoji.id)}
                disabled={isLoading}
              >
                <Heart 
                  className={`h-5 w-5 ${isLoading ? 'animate-pulse' : ''}`}
                  fill={emoji.liked ? "white" : "none"} 
                />
              </Button>
            </div>
          </div>
          
          {/* Footer Info */}
          <div className="flex justify-between items-center px-1">
            <span className="text-sm text-gray-600 truncate max-w-[70%]" title={emoji.prompt}>
              {emoji.prompt}
            </span>
            <div className="flex items-center gap-1">
              <Heart 
                className="h-4 w-4 text-gray-500" 
                fill={emoji.liked ? "currentColor" : "none"} 
              />
              <span className="text-sm text-gray-500">
                {typeof emoji.likes_count === 'number' ? emoji.likes_count : 0}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
} 