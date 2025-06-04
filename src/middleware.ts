import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Security and SEO Middleware
export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Security Headers
  response.headers.set('X-DNS-Prefetch-Control', 'on');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('X-Frame-Options', 'SAMEORIGIN');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'origin-when-cross-origin');
  response.headers.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=()',
  );

  // HSTS (HTTP Strict Transport Security)
  response.headers.set(
    'Strict-Transport-Security',
    'max-age=31536000; includeSubDomains; preload',
  );

  // Content Security Policy
  const csp = [
    "default-src 'self'",
    "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://www.clarity.ms https://vercel.live",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdn.jsdelivr.net",
    "img-src 'self' data: blob: https: http:",
    "font-src 'self' https://fonts.gstatic.com https://cdn.jsdelivr.net",
    "connect-src 'self' https://api.github.com https://www.google-analytics.com https://vercel.live wss:",
    "frame-ancestors 'self'",
    "base-uri 'self'",
    "form-action 'self'",
    "manifest-src 'self'",
    "worker-src 'self'",
  ].join('; ');

  response.headers.set('Content-Security-Policy', csp);

  // Performance and SEO Headers
  if (request.nextUrl.pathname.startsWith('/api/')) {
    // API Routes - shorter cache
    response.headers.set(
      'Cache-Control',
      'public, max-age=3600, s-maxage=3600',
    );
  } else if (
    request.nextUrl.pathname.startsWith('/_next/static/') ||
    request.nextUrl.pathname.includes('.js') ||
    request.nextUrl.pathname.includes('.css') ||
    request.nextUrl.pathname.includes('.woff2') ||
    request.nextUrl.pathname.includes('.png') ||
    request.nextUrl.pathname.includes('.jpg') ||
    request.nextUrl.pathname.includes('.jpeg') ||
    request.nextUrl.pathname.includes('.webp') ||
    request.nextUrl.pathname.includes('.avif')
  ) {
    // Static assets - long cache
    response.headers.set(
      'Cache-Control',
      'public, max-age=31536000, immutable',
    );
  } else {
    // HTML pages - moderate cache with revalidation
    response.headers.set(
      'Cache-Control',
      'public, max-age=3600, must-revalidate',
    );
  }

  // SEO-friendly redirects
  const url = request.nextUrl.clone();

  // Canonical URL enforcement (trailing slash removal)
  if (url.pathname.endsWith('/') && url.pathname !== '/') {
    url.pathname = url.pathname.slice(0, -1);
    return NextResponse.redirect(url, 301);
  }

  // Old URL redirects for SEO
  if (url.pathname === '/home') {
    url.pathname = '/';
    return NextResponse.redirect(url, 301);
  }

  if (url.pathname === '/portfolio') {
    url.pathname = '/#projects';
    return NextResponse.redirect(url, 301);
  }

  if (url.pathname === '/about-me') {
    url.pathname = '/#about';
    return NextResponse.redirect(url, 301);
  }

  // Force HTTPS in production
  if (
    process.env.NODE_ENV === 'production' &&
    request.headers.get('x-forwarded-proto') !== 'https'
  ) {
    const httpsUrl = new URL(request.url);
    httpsUrl.protocol = 'https:';
    return NextResponse.redirect(httpsUrl, 301);
  }

  // Add helpful headers for debugging
  if (process.env.NODE_ENV === 'development') {
    response.headers.set('X-Middleware-Debug', 'active');
    response.headers.set('X-Cache-Status', 'MISS');
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (public folder)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*|sw.js|site.webmanifest|robots.txt|sitemap.xml|offline.html).*)',
  ],
};
