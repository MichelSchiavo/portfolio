import './globals.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

// Usando a API de metadados oficial do Next.js
export const metadata: Metadata = {
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
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
