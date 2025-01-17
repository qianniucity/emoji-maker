'use client';

import { memo } from 'react';

interface ContactSectionProps {
  t: (key: string) => string;
}

const ContactSection = memo(({ t }: ContactSectionProps) => (
  <div>
    <h3 className="mb-4 text-lg font-semibold">{t('footer.contact.title')}</h3>
    <address className="space-y-2 text-sm not-italic">
      <p>{t('footer.contact.wechat')}</p>
      <p>{t('footer.contact.publicAccount')}</p>
      <p>{t('footer.contact.email')}</p>
    </address>
  </div>
));

ContactSection.displayName = 'ContactSection';

export default ContactSection; 