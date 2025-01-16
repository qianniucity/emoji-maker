import { create } from 'zustand'

interface Emoji {
  id: string;
  image_url: string;
  prompt: string;
  likes_count: number;
  creator_user_id: string;
  created_at: string;
  liked: boolean;
}

interface EmojiState {
  emojis: Emoji[];
  isLoading: boolean;
  fetchEmojis: () => Promise<void>;
  addEmoji: (emoji: Emoji) => void;
  toggleLike: (id: string) => Promise<void>;
  setLoading: (loading: boolean) => void;
  downloadEmoji: (url: string) => Promise<void>;
}

export const useEmojiStore = create<EmojiState>((set, get) => ({
  emojis: [],
  isLoading: false,
  fetchEmojis: async () => {
    try {
      const response = await fetch('/api/emojis');
      if (!response.ok) throw new Error('Failed to fetch emojis');
      const emojis = await response.json();
      console.log('Fetched emojis:', emojis);
      set({ emojis });
    } catch (error) {
      console.error('Error fetching emojis:', error);
    }
  },
  addEmoji: (emoji) => set((state) => ({
    emojis: [emoji, ...state.emojis]
  })),
  toggleLike: async (id: string) => {
    const currentEmoji = get().emojis.find(e => e.id === id);
    if (!currentEmoji) return;

    try {
      // Optimistically update UI
      set((state) => ({
        emojis: state.emojis.map(emoji =>
          emoji.id === id
            ? {
                ...emoji,
                liked: !emoji.liked,
                likes_count: emoji.liked ? emoji.likes_count - 1 : emoji.likes_count + 1
              }
            : emoji
        )
      }));

      const response = await fetch('/api/emojis/like', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          emojiId: id, 
          liked: !currentEmoji.liked
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to update like');
      }

      const updatedEmoji = await response.json();
      console.log('Updated emoji:', updatedEmoji);

      // Update with server response
      set((state) => ({
        emojis: state.emojis.map(emoji =>
          emoji.id === id 
            ? {
                ...emoji,
                ...updatedEmoji,
                likes_count: updatedEmoji.likes_count // Explicitly set likes_count
              }
            : emoji
        )
      }));
    } catch (error) {
      console.error('Error toggling like:', error);
      // Revert on error
      set((state) => ({
        emojis: state.emojis.map(emoji =>
          emoji.id === id
            ? {
                ...emoji,
                liked: !emoji.liked,
                likes_count: emoji.liked ? emoji.likes_count - 1 : emoji.likes_count + 1
              }
            : emoji
        )
      }));
    }
  },
  setLoading: (loading) => set({ isLoading: loading }),
  downloadEmoji: async (url) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = `emoji-${Date.now()}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error('Download failed:', error);
    }
  },
})) 