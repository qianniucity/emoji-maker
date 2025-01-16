import { auth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import Replicate from 'replicate';
import { supabase } from '@/lib/supabase/client';
import { uploadEmojiToStorage } from '@/lib/supabase/storage';

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN!,
});

export async function POST(request: Request) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { prompt } = await request.json();

    // Generate emoji with Replicate
    let prediction = await replicate.predictions.create({
      version: "dee76b5afde21b0f01ed7925f0665b7e879c50ee718c5f78a9d38e04d523cc5e",
      input: {
        prompt: "a TOK emoji of " + prompt,
        width: 1024,
        height: 1024,
        refine: "no_refiner",
        scheduler: "K_EULER",
        lora_scale: 0.6,
        num_outputs: 1,
        guidance_scale: 7.5,
        apply_watermark: false,
        high_noise_frac: 0.8,
        negative_prompt: "",
        prompt_strength: 0.8,
        num_inference_steps: 50
      }
    });

    prediction = await replicate.wait(prediction);
    const replicateUrl = prediction.output[0];

    // Upload to Supabase storage
    const storageUrl = await uploadEmojiToStorage(replicateUrl, userId);


    // Save to emojis table
    const { error: dbError } = await supabase
      .from('emojis')
      .insert([{
        image_url: storageUrl,
        prompt,
        creator_user_Id: userId,
        likes_count: 0
      }]);


    if (dbError) throw dbError;

    return NextResponse.json({ 
      output: storageUrl 
    });

  } catch (error) {
    console.error('Generation error:', error);
    return NextResponse.json(
      { error: 'Failed to generate emoji' },
      { status: 500 }
    );
  }
} 

export const runtime = 'edge';
export const maxDuration = 300; // 5 minutes