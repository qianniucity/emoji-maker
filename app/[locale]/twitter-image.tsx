import { ImageResponse } from 'next/og'
import { siteConfig } from '../config/metadata'
 
export const runtime = 'edge'
export const alt = 'Emoji Maker'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'
 
export default async function Image({ params }: { params: { locale: string } }) {
  const title = params.locale === 'zh' ? 'Emoji 制作器' : 'Emoji Maker'
  const description = params.locale === 'zh' 
    ? '使用 AI 驱动的工具创建自定义表情'
    : 'Create custom emojis with AI-powered tools'

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
      </div>
    ),
    {
      ...size,
    }
  )
} 