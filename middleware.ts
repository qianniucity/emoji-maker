import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import createIntlMiddleware from 'next-intl/middleware';
import { NextResponse } from "next/server";
import { locales, defaultLocale } from '@/app/i18n/config/locales';

const isProtectedRoute = createRouteMatcher(['/']);
const intlMiddleware = createIntlMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'always'
});

export default clerkMiddleware(async (auth, req) => {
    const { userId, redirectToSignIn } = await auth();
    const pathname = new URL(req.url).pathname;

    // 如果是 API 请求，直接处理，不进行国际化
    if (pathname.startsWith('/api/')) {
        return NextResponse.next();
    }

    // 处理根路径重定向
    if (pathname === '/') {
      return NextResponse.redirect(new URL(`/${defaultLocale}`, req.url));
    }

    // 处理国际化
    const response = await intlMiddleware(req);
    
    // 检查认证
    if (!userId && isProtectedRoute(req)) {
        return redirectToSignIn({returnBackUrl: `/${defaultLocale}`});
    }

    return response;
});

export const config = {
  matcher: [
    // API 路由
    '/api/:path*',
    // 页面路由
    '/((?!api|_next|_vercel|.*\\..*).*)',
  ]
};