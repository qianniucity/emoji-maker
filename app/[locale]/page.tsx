'use client';

import { EmojiGrid } from "@/app/components/emoji-grid";
import { EmojiForm } from "@/app/components/emoji-form";
import { useTranslation } from "@/app/i18n/hooks/useTranslation";

export default function HomePage() {
  const { t } = useTranslation();
  
  return (
    <div className="container mx-auto px-4 py-8">
      <main className="max-w-6xl mx-auto space-y-4">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">😊 {t('common.title')}</h1>
          <p className="text-lg text-muted-foreground">
            {t('common.description')}
          </p>
          <EmojiForm />
          <EmojiGrid />
        </div>
      </main>
    </div>
  );
}
