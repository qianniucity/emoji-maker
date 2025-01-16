export function ServicesStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Emoji Maker AI",
    "description": "AI-powered emoji creation service",
    "provider": {
      "@type": "Organization",
      "name": "Emoji Maker",
      "url": "https://emojo.qianniuspace.com"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
} 