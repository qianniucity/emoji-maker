'use client';

import { Suspense } from 'react';
import { EmojiGrid } from "@/app/components/emoji/emoji-grid";
import { EmojiForm } from "@/app/components/emoji/emoji-form";
import { useTranslation } from "@/app/i18n/hooks/useTranslation";
import { LoadingSpinner } from "@/app/components/ui/loading-spinner";
import { Preview } from "@/app/components/ui/preview";
import { AnimatedGradientTextSection } from '@/app/components/ui/animated-gradient-text-section';


export default function HomePage() {
  const { t } = useTranslation();
  
  return (
    <div className="container mx-auto px-4 py-8">
      <main 
        className="max-w-6xl mx-auto space-y-4"
        role="main"
        aria-labelledby="main-heading"
      >
        <div className="text-center space-y-4">
          <AnimatedGradientTextSection />
          <Preview />

          <p 
            className="text-lg text-muted-foreground"
            role="doc-subtitle"
          >
            {t('common.description')}
          </p>
          <Suspense fallback={<LoadingSpinner />}>
            <EmojiForm />
          </Suspense>
          <Suspense fallback={<LoadingSpinner />}>
            <EmojiGrid />
          </Suspense>
        </div>
      </main>
    </div>
  );
}

export const runtime = 'edge'; 