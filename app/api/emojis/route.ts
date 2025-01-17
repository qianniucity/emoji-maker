import { auth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase/client';

export { runtime } from '@/app/config/runtime';

export async function GET() {
  try {
    const { userId } = await auth();

    const { data: emojis, error } = await supabase
      .from('emojis')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;

    if (userId) {
      // Get user's likes for these emojis
      const { data: userLikes } = await supabase
        .from('emoji_likes')
        .select('emoji_id')
        .eq('user_id', userId);

      const likedEmojiIds = new Set(userLikes?.map(like => like.emoji_id));

      // Add liked status to each emoji
      const emojisWithLikes = emojis.map(emoji => ({
        ...emoji,
        liked: likedEmojiIds.has(emoji.id)
      }));

      return NextResponse.json(emojisWithLikes);
    }

    // If no user, return emojis without like status
    return NextResponse.json(emojis.map(emoji => ({ ...emoji, liked: false })));
  } catch (error) {
    console.error('Failed to fetch emojis:', error);
    return NextResponse.json(
      { error: 'Failed to fetch emojis' },
      { status: 500 }
    );
  }
}


// Add these configurations
export const fetchCache = 'force-no-store'
export const revalidate = 0
export const dynamic = 'force-dynamic'