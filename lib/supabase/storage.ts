import { supabase } from './client';

export async function uploadEmojiToStorage(imageUrl: string, userId: string) {
  try {
    // Fetch image from Replicate URL
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    
    // Generate unique filename
    const filename = `${userId}-${Date.now()}.png`;
    
    // Upload to Supabase storage
    const { error } = await supabase.storage
      .from('emojis')
      .upload(filename, blob, {
        contentType: 'image/png',
        cacheControl: '3600'
      });

    if (error) throw error;

    // Get public URL
    const { data: { publicUrl } } = supabase.storage
      .from('emojis')
      .getPublicUrl(filename);

    return publicUrl;
  } catch (error) {
    console.error('Storage upload error:', error);
    throw error;
  }
} 