import { ImageResponse } from 'next/og';
import { siteConfig } from '@/app/config/metadata';

interface SocialImageProps {
  locale: string;
  showExamples?: boolean;
}

/* eslint-disable @next/next/no-img-element */
export async function generateSocialImage({ locale, showExamples = false }: SocialImageProps) {
  const title = locale === 'zh' ? 'Emoji 制作器' : 'Emoji Maker';
  const description = locale === 'zh'
    ? '使用 AI 驱动的工具创建自定义表情'
    : 'Create custom emojis with AI-powered tools';

  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(to bottom right, #3b82f6, #8b5cf6)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '48px',
        }}
      >
        <img
          src={`${siteConfig.url}/logo.png`}
          alt="Logo"
          width="120"
          height="120"
          style={{
            marginBottom: '24px',
          }}
        />
        <h1
          style={{
            fontSize: '64px',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '16px',
            textAlign: 'center',
          }}
        >
          {title}
        </h1>
        <p
          style={{
            fontSize: '32px',
            color: 'white',
            opacity: 0.8,
            textAlign: 'center',
          }}
        >
          {description}
        </p>
        {showExamples && (
          <div
            style={{
              position: 'absolute',
              bottom: '32px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <img
              src={`${siteConfig.url}/emoji-examples.png`}
              alt="Emoji Examples"
              width="200"
              height="40"
            />
          </div>
        )}
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
} 