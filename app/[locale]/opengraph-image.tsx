import { generateSocialImage } from '@/app/components/social-image';

export const runtime = 'edge';
export const alt = 'Emoji Maker';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image({ params }: { params: { locale: string } }) {
  return generateSocialImage({ locale: params.locale });
}