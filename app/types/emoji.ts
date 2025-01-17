export interface Emoji {
  id: string;
  image_url: string;
  prompt: string;
  likes_count: number;
  creator_user_id: string;
  created_at: string;
  liked: boolean;
}

export interface EmojiFormData {
  prompt: string;
}

export interface EmojiFormProps {
  onSubmit: (data: EmojiFormData) => Promise<void>;
  isLoading: boolean;
}

export interface EmojiGridProps {
  emojis: Emoji[];
  isLoading: boolean;
  onLike: (id: string) => Promise<void>;
  onDownload: (url: string) => Promise<void>;
  onShare: (url: string, prompt: string) => void;
}