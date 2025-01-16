'use client';

import { useEffect, useState } from 'react';
import GoogleAnalytics from './google-analytics';
import GoogleAds from './google-ads';

export default function Analytics() {
  const [consent, setConsent] = useState<string | null>(null);

  useEffect(() => {
    setConsent(localStorage.getItem('cookie-consent'));
  }, []);

  if (consent !== 'accepted') return null;

  return (
    <>
      <GoogleAnalytics 
        GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_ID || ''} 
      />
      <GoogleAds 
        GOOGLE_ADS_ID={process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || ''} 
      />
    </>
  );
} 