import { redirect } from 'next/navigation';
import { defaultLocale } from './i18n/config/locales';

// 防止重定向循环
export default function RootPage() {
  const destination = `/${defaultLocale}`;
  if (typeof window === 'undefined') {
    redirect(destination);
  }
  return null;
}