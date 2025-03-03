'use client';

import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const meta = {
  title: 'Michel Schiavo | Portfolio',
  description:
    'Desenvolvedor Front-end especializado em React, Next.js e TypeScript',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
      </head>
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
