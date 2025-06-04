import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title =
    searchParams.get('title') || 'Michel Schiavo | Desenvolvedor Frontend';
  const description =
    searchParams.get('description') ||
    'Especializado em React, Next.js, TypeScript e UI/UX Design';

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#1e293b',
          background:
            'linear-gradient(135deg, #1e293b 0%, #334155 50%, #475569 100%)',
          fontSize: 32,
          fontWeight: 600,
        }}
      >
        {/* Background Pattern */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.3) 0%, transparent 50%)',
          }}
        />

        {/* Content Container */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '80px',
            textAlign: 'center',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {/* Avatar/Logo */}
          <div
            style={{
              width: 120,
              height: 120,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 40,
              fontSize: 48,
              fontWeight: 'bold',
              color: 'white',
            }}
          >
            MS
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: 56,
              fontWeight: 'bold',
              color: 'white',
              marginBottom: 20,
              textAlign: 'center',
              lineHeight: 1.2,
            }}
          >
            {title}
          </div>

          {/* Description */}
          <div
            style={{
              fontSize: 24,
              color: '#94a3b8',
              textAlign: 'center',
              maxWidth: 800,
              lineHeight: 1.4,
            }}
          >
            {description}
          </div>

          {/* Tech Stack Icons */}
          <div
            style={{
              display: 'flex',
              gap: 20,
              marginTop: 40,
              fontSize: 20,
            }}
          >
            <span style={{ color: '#61dafb' }}>⚛️ React</span>
            <span style={{ color: '#000000' }}>▲ Next.js</span>
            <span style={{ color: '#3178c6' }}>🔷 TypeScript</span>
            <span style={{ color: '#38bdf8' }}>🎨 Tailwind</span>
          </div>
        </div>

        {/* Bottom Brand */}
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            right: 40,
            fontSize: 18,
            color: '#64748b',
          }}
        >
          portfolio-michelschiavos-projects.vercel.app
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
