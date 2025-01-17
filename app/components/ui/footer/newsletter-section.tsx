'use client';

import { useState, useCallback, memo } from 'react';
import { Button } from '../button';
import { Input } from '../input';
import { Send } from 'lucide-react';

interface NewsletterSectionProps {
  t: (key: string) => string;
}

const NewsletterSection = memo(({ t }: NewsletterSectionProps) => {
  const [email, setEmail] = useState('');
  
  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    // Add newsletter subscription logic here
    setEmail('');
  }, []);

  return (
    <div className="relative">
      <h2 className="mb-4 text-3xl font-bold tracking-tight">
        {t('footer.stayConnected')}
      </h2>
      <p className="mb-6 text-muted-foreground">
        {t('footer.newsletter')}
      </p>
      <form className="relative" onSubmit={handleSubmit}>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t('footer.emailPlaceholder')}
          className="pr-12 backdrop-blur-sm"
        />
        <Button
          type="submit"
          size="icon"
          className="absolute right-1 top-1 h-8 w-8 rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105"
        >
          <Send className="h-4 w-4" />
          <span className="sr-only">{t('footer.subscribe')}</span>
        </Button>
      </form>
      <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
    </div>
  );
});

NewsletterSection.displayName = 'NewsletterSection';

export default NewsletterSection; 