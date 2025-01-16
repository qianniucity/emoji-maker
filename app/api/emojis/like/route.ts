import { auth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase/client';

export async function POST(request: Request) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { emojiId, liked } = await request.json();

    // Check if user has already liked this emoji
    const { data: existingLike } = await supabase
      .from('emoji_likes')
      .select('*')
      .eq('user_id', userId)
      .eq('emoji_id', emojiId)
      .single();

    // If trying to like and already liked, or trying to unlike and not liked
    if ((liked && existingLike) || (!liked && !existingLike)) {
      return NextResponse.json(
        { error: 'Invalid like operation' },
        { status: 400 }
      );
    }

    // Get current likes count
    const { data: currentEmoji } = await supabase
      .from('emojis')
      .select('likes_count')
      .eq('id', emojiId)
      .single();

    if (liked) {
      // Add like record and increment count
      const { error: likeError } = await supabase
        .from('emoji_likes')
        .insert([{ user_id: userId, emoji_id: emojiId }]);

      if (likeError) throw likeError;

      const { error: updateError } = await supabase
        .from('emojis')
        .update({ 
          likes_count: (currentEmoji?.likes_count || 0) + 1 
        })
        .eq('id', emojiId);

      if (updateError) throw updateError;
    } else {
      // Remove like record and decrement count
      const { error: unlikeError } = await supabase
        .from('emoji_likes')
        .delete()
        .eq('user_id', userId)
        .eq('emoji_id', emojiId);

      if (unlikeError) throw unlikeError;

      const { error: updateError } = await supabase
        .from('emojis')
        .update({ 
          likes_count: Math.max((currentEmoji?.likes_count || 0) - 1, 0)
        })
        .eq('id', emojiId);

      if (updateError) throw updateError;
    }

    // Get updated emoji with like status
    const [{ data: emoji }, { data: userLike }] = await Promise.all([
      supabase
        .from('emojis')
        .select('*')
        .eq('id', emojiId)
        .single(),
      supabase
        .from('emoji_likes')
        .select('*')
        .eq('user_id', userId)
        .eq('emoji_id', emojiId)
        .single()
    ]);

    const response = {
      ...emoji,
      liked: !!userLike
    };
    console.log('API Response:', response);
    return NextResponse.json(response);
  } catch (error) {
    console.error('Like error:', error);
    return NextResponse.json(
      { error: 'Failed to update like' },
      { status: 500 }
    );
  }
}

// Add these configurations
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';