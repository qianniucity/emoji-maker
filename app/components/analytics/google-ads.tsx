'use client';

import Script from 'next/script';

export default function GoogleAds({
  GOOGLE_ADS_ID,
}: {
  GOOGLE_ADS_ID: string;
}) {
  return (
    <Script
      id="google-ads"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GOOGLE_ADS_ID}');
        `,
      }}
    />
  );
} 