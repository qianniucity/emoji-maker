'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/app/components/ui/button';
import { useTranslation } from '@/app/i18n/hooks/useTranslation';

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowConsent(false);
    window.location.reload(); // 重新加载以启用分析
  };

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t p-4 shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          {t('cookies.consent.message')}
        </p>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={declineCookies}
          >
            {t('cookies.consent.decline')}
          </Button>
          <Button
            size="sm"
            onClick={acceptCookies}
          >
            {t('cookies.consent.accept')}
          </Button>
        </div>
      </div>
    </div>
  );
} 