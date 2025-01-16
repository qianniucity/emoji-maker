import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./app/i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    experimental: {
        serverActions: true,
    },
    images: {
        domains: [
            process.env.NEXT_PUBLIC_SUPABASE_HOST || 'pyptdtlpoawkqsdgfkhj.supabase.co'
        ]
    }
};

export default withNextIntl(nextConfig);