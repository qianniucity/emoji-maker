'use client';

import { useState, useCallback, memo } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Loader2 } from 'lucide-react';
import { useEmojiStore } from '@/app/store/emoji-store';
import { useProfile } from '@/app/hooks/use-profile';
import { toast } from '@/app/components/ui/use-toast';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/app/components/ui/dialog";
import type { FormEvent, ChangeEvent } from 'react';
import { SignInButton } from '@clerk/nextjs';
// Memoized submit button component
const SubmitButton = memo(({ isLoading }: { isLoading: boolean }) => (
  <Button 
    type="submit" 
    disabled={isLoading}
    aria-label={isLoading ? 'Generating emoji...' : 'Generate emoji'}
  >
    {isLoading ? (
      <>
        <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
        Generating...
      </>
    ) : (
      'Generate'
    )}
  </Button>
));

SubmitButton.displayName = 'SubmitButton';

// Memoized input component
const PromptInput = memo(({ 
  value, 
  onChange, 
  isLoading 
}: { 
  value: string; 
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  isLoading: boolean;
}) => (
  <Input
    type="text"
    placeholder="Enter a prompt to generate an emoji"
    value={value}
    onChange={onChange}
    className="flex-1"
    disabled={isLoading}
    required
    minLength={3}
    maxLength={100}
    aria-label="Emoji prompt input"
  />
));

PromptInput.displayName = 'PromptInput';

export function EmojiForm() {
  const { profile } = useProfile();
  const [prompt, setPrompt] = useState('');
  const { isLoading, setLoading, addEmoji } = useEmojiStore();
  const [showLoginDialog, setShowLoginDialog] = useState(false);

  

  const handlePromptChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setPrompt(e.target.value);
  }, []);

  
  const handleSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!profile) {
      setShowLoginDialog(true);
      return;
    }

    if (profile.credits <= 0) {
      toast({
        title: 'No Credits',
        description: 'Please upgrade your plan to generate more emojis',
        variant: 'destructive',
      });
      return;
    }

    if (!prompt.trim()) {
      return;
    }

    setLoading(true);
    
    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: prompt.trim() }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to generate emoji');
      }
      
      const { output } = await response.json();

      addEmoji({
        id: Date.now().toString(),
        image_url: output,
        prompt: prompt.trim(),
        likes_count: 0,
        creator_user_id: profile.user_id,
        created_at: new Date().toISOString(),
        liked: false
      });

      setPrompt('');
      toast({
        title: 'Success',
        description: 'Emoji generated successfully!',
      });
      
    } catch (error) {
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Failed to generate emoji',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  }, [profile, prompt, setLoading, addEmoji]);

  return (
    <>
      <form 
        onSubmit={handleSubmit} 
        className="w-full max-w-xl mx-auto"
        aria-label="Emoji generation form"
      >
        <div className="flex gap-2">
          <PromptInput
            value={prompt}
            onChange={handlePromptChange}
            isLoading={isLoading}
          />
          <SubmitButton isLoading={isLoading} />
        </div>
      </form>

      <Dialog open={showLoginDialog} onOpenChange={setShowLoginDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Login Required</DialogTitle>
            <DialogDescription>
              Please sign in to generate emojis. It only takes a few seconds!
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end space-x-2 pt-4">
            <Button
              variant="outline"
              onClick={() => setShowLoginDialog(false)}
            >
              Cancel
            </Button>
            <SignInButton mode="modal">
            <Button>
              Sign In
            </Button>
          </SignInButton>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}