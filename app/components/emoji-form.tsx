'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Loader2 } from 'lucide-react';
import { useEmojiStore } from '@/app/store/emoji-store';
import { useProfile } from '@/app/hooks/use-profile';

export function EmojiForm() {
  const { profile } = useProfile();
  const [prompt, setPrompt] = useState('');
  const { isLoading, setLoading, addEmoji } = useEmojiStore();
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!profile) {
      console.error('No profile found');
      return;
    }

    if (profile.credits <= 0) {
      console.error('No credits remaining');
      // You might want to show a modal or message to upgrade
      return;
    }

    setLoading(true);
    
    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });
      
      if (!response.ok) {
        throw new Error('Generation failed');
      }
      
      const { output } = await response.json();

      addEmoji({
        id: Date.now().toString(),
        image_url: output,
        prompt,
        likes_count: 0,
        creator_user_id: profile.user_id,
        created_at: new Date().toISOString(),
        liked: false
      });
      
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto">
      <div className="flex gap-2">
        <Input
          placeholder="Enter a prompt to generate an emoji"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="flex-1"
        />
        <Button type="submit" disabled={isLoading || !prompt}>
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Generating...
            </>
          ) : (
            'Generate'
          )}
        </Button>
      </div>
    </form>
  );
}