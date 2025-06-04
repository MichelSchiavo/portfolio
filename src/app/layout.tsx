import './globals.css';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import type { Metadata, Viewport } from 'next';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

// SEO Otimizado - Metadados Completos
export const metadata: Metadata = {
  title: {
    default: 'Michel Schiavo | Desenvolvedor Frontend & UI/UX Designer',
    template: '%s | Michel Schiavo - Portfolio',
  },
  description:
    'Desenvolvedor Frontend especializado em React, Next.js, TypeScript e UI/UX Design. Criando experiências digitais modernas e interfaces elegantes com 3+ anos de experiência.',
  keywords: [
    'Michel Schiavo',
    'Desenvolvedor Frontend',
    'React Developer',
    'Next.js',
    'TypeScript',
    'UI/UX Designer',
    'JavaScript',
    'Tailwind CSS',
    'Frontend Developer Brasil',
    'Web Developer',
    'Portfolio',
    'Desenvolvimento Web',
    'Interface Design',
    'Responsive Design',
    'Modern Web Development',
  ],
  authors: [
    { name: 'Michel Schiavo', url: 'https://github.com/michelschiavo' },
  ],
  creator: 'Michel Schiavo',
  publisher: 'Michel Schiavo',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(
    'https://portfolio-michelschiavos-projects.vercel.app"',
  ),
  alternates: {
    canonical: '/',
    languages: {
      'pt-BR': '/pt-br',
      'en-US': '/en',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://portfolio-michelschiavos-projects.vercel.app"',
    title: 'Michel Schiavo | Desenvolvedor Frontend & UI/UX Designer',
    description:
      'Desenvolvedor Frontend especializado em React, Next.js, TypeScript e UI/UX Design. Criando experiências digitais modernas e interfaces elegantes.',
    siteName: 'Portfolio - Michel Schiavo',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Michel Schiavo - Desenvolvedor Frontend Portfolio',
        type: 'image/png',
      },
      {
        url: '/og-image-square.png',
        width: 1200,
        height: 1200,
        alt: 'Michel Schiavo - Desenvolvedor Frontend',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Michel Schiavo | Desenvolvedor Frontend & UI/UX Designer',
    description:
      'Desenvolvedor Frontend especializado em React, Next.js, TypeScript e UI/UX Design. Criando experiências digitais modernas.',
    images: ['/og-image.png'],
    creator: '@michelschiavo',
    site: '@michelschiavo',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      {
        url: '/apple-touch-icon-152x152.png',
        sizes: '152x152',
        type: 'image/png',
      },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#3B82F6',
      },
    ],
  },
  manifest: '/site.webmanifest',
  category: 'technology',
  classification: 'Business',
  referrer: 'origin-when-cross-origin',
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#1e293b' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  colorScheme: 'light dark',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        {/* Devicon Library */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link rel="preconnect" href="https://api.github.com" />
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
        {/* Additional SEO Meta Tags */}
        <meta name="application-name" content="Michel Schiavo Portfolio" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Michel Schiavo" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#3B82F6" />
        <meta name="msapplication-tap-highlight" content="no" />
        {/* Additional SEO Meta Tags */}
        <meta name="application-name" content="Michel Schiavo Portfolio" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Michel Schiavo" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#3B82F6" />
        <meta name="msapplication-tap-highlight" content="no" />

        {/* Extended Social Meta Tags */}
        <meta property="fb:app_id" content="YOUR_FACEBOOK_APP_ID" />
        <meta name="telegram:channel" content="@michelschiavo" />
        <meta
          name="whatsapp:title"
          content="Michel Schiavo | Desenvolvedor Frontend"
        />
        <meta
          name="whatsapp:description"
          content="Desenvolvedor Frontend especializado em React, Next.js, TypeScript e UI/UX Design"
        />
        <meta
          name="whatsapp:image"
          content="https://portfolio-michelschiavos-projects.vercel.app/og-image.png"
        />

        {/* LinkedIn Meta Tags */}
        <meta property="linkedin:owner" content="michelschiavo" />

        {/* Pinterest Meta Tags */}
        <meta name="pinterest" content="nopin" />

        {/* Rich Snippets Meta */}
        <meta name="rating" content="5" />
        <meta name="price" content="Consulte valores" />
        <meta name="availability" content="Available" />
        <meta name="category" content="Web Development Services" />

        {/* Technical SEO */}
        <meta httpEquiv="x-dns-prefetch-control" content="on" />
        <meta httpEquiv="x-ua-compatible" content="IE=edge" />
        <meta name="google" content="notranslate" />
        <meta
          name="format-detection"
          content="telephone=no,address=no,email=no"
        />

        {/* Performance Hints */}
        <link
          rel="preload"
          href="/fonts/inter-var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
        <link rel="modulepreload" href="/_next/static/chunks/app/layout.js" />

        {/* Critical CSS - Inline for above-the-fold content */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
            /* Critical CSS for initial render */
            body { margin: 0; font-family: 'Inter', sans-serif; }
            .hero-section { min-height: 100vh; }
            .loading-skeleton { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
            @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: .5; } }
          `,
          }}
        />

        {/* Structured Data - Person Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Michel Schiavo',
              jobTitle: 'Desenvolvedor Frontend',
              description:
                'Desenvolvedor Frontend especializado em React, Next.js, TypeScript e UI/UX Design',
              url: 'https://portfolio-michelschiavos-projects.vercel.app"',
              sameAs: [
                'https://github.com/michelschiavo',
                'https://www.linkedin.com/in/michel-schiavo-a2b3861a0/',
                'https://twitter.com/michelschiavo',
              ],
              image:
                'https://portfolio-michelschiavos-projects.vercel.app/og-image.png',
              knowsAbout: [
                'React',
                'Next.js',
                'TypeScript',
                'JavaScript',
                'UI/UX Design',
                'Frontend Development',
                'Web Development',
                'Tailwind CSS',
                'Node.js',
              ],
              worksFor: {
                '@type': 'Organization',
                name: 'Freelancer',
              },
              alumniOf: {
                '@type': 'EducationalOrganization',
                name: 'Estácio de Sá',
                description: 'Engenharia de Software',
              },
            }),
          }}
        />

        {/* Structured Data - Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Michel Schiavo Portfolio',
              description:
                'Portfolio profissional de Michel Schiavo, Desenvolvedor Frontend especializado em React, Next.js e TypeScript',
              url: 'https://portfolio-michelschiavos-projects.vercel.app',
              author: {
                '@type': 'Person',
                name: 'Michel Schiavo',
              },
              potentialAction: {
                '@type': 'SearchAction',
                target:
                  'https://portfolio-michelschiavos-projects.vercel.app/search?q={search_term_string}',
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />

        {/* Structured Data - Professional Service Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              name: 'Michel Schiavo - Desenvolvimento Frontend',
              description:
                'Serviços de desenvolvimento frontend, criação de interfaces modernas e responsivas com React, Next.js e TypeScript',
              url: 'https://portfolio-michelschiavos-projects.vercel.app',
              telephone: '+55-11-99999-9999',
              email: 'michel_dmc@hotmail.com',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'BR',
                addressRegion: 'SP',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: -23.5505,
                longitude: -46.6333,
              },
              priceRange: '$$',
              serviceType: [
                'Desenvolvimento Frontend',
                'UI/UX Design',
                'Desenvolvimento React',
                'Desenvolvimento Next.js',
                'Consultoria Web',
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
        {/* Performance & Analytics Scripts */}{' '}
        <Script id="performance-monitoring" strategy="afterInteractive">
          {`
            // Core Web Vitals reporting
            function getCLS(onPerfEntry) {
              getFCP(onPerfEntry);
              getFID(onPerfEntry);
              getLCP(onPerfEntry);
            }
            
            // Performance monitoring
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', function() {
                navigator.serviceWorker.register('/sw.js').catch(() => {});
              });
            }
            
            // Prefetch critical resources
            if ('requestIdleCallback' in window) {
              requestIdleCallback(() => {
                const link = document.createElement('link');
                link.rel = 'prefetch';
                link.href = '/og-image.png';
                document.head.appendChild(link);
              });
            }
            
            // Critical resource hints
            window.addEventListener('load', () => {
              // Preload hero section images
              const heroImages = ['/avatar.jpg', '/hero-bg.jpg'];
              heroImages.forEach(src => {
                const link = document.createElement('link');
                link.rel = 'preload';
                link.as = 'image';
                link.href = src;
                document.head.appendChild(link);
              });
            });
          `}
        </Script>
        {/* Google Analytics 4 - Replace with your GA4 ID */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            // gtag('config', 'GA_MEASUREMENT_ID', {
            //   page_title: 'Michel Schiavo Portfolio'
            // });
          `}
        </Script>{' '}
        {/* Microsoft Clarity - Replace with your Clarity ID */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            // (function(c,l,a,r,i,t,y){
            //   c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            //   t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            //   y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            // })(window, document, "clarity", "script", "CLARITY_ID");
          `}
        </Script>
      </body>
    </html>
  );
}
