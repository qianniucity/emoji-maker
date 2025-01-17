declare global {
  interface Window {
    gtag: (
      command: string,
      target: string,
      config?: Record<string, unknown>
    ) => void;
    dataLayer: Array<Record<string, unknown>>;
  }
}

export interface GoogleAnalyticsProps {
  GA_MEASUREMENT_ID: string;
}

// 更具体的 gtag 事件类型
export interface GtagEvent {
  action: string;
  category: string;
  label: string;
  value?: number;
} 