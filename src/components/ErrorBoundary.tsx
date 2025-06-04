'use client';

import { Component, ReactNode } from 'react';
import Link from 'next/link';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error Boundary caught an error:', error, errorInfo);

    // Send error to analytics service
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as { gtag: (...args: unknown[]) => void }).gtag(
        'event',
        'exception',
        {
          description: error.message,
          fatal: false,
        },
      );
    }
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center px-4">
          <div className="max-w-2xl mx-auto text-center">
            {/* Error Icon */}
            <div className="mb-8">
              <div className="w-24 h-24 mx-auto bg-red-500/20 rounded-full flex items-center justify-center">
                <span className="text-4xl">⚠️</span>
              </div>
            </div>

            {/* Error Message */}
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ops! Algo deu errado
              </h1>
              <p className="text-gray-300 text-lg mb-6">
                Encontramos um problema inesperado. Nossa equipe foi notificada
                e estamos trabalhando para resolver isso.
              </p>

              {process.env.NODE_ENV === 'development' && this.state.error && (
                <details className="bg-red-900/20 border border-red-500/30 rounded-lg p-4 text-left mb-6">
                  <summary className="cursor-pointer text-red-400 font-semibold mb-2">
                    Detalhes do Erro (Desenvolvimento)
                  </summary>
                  <pre className="text-sm text-red-300 overflow-auto">
                    {this.state.error.message}
                    {'\n\n'}
                    {this.state.error.stack}
                  </pre>
                </details>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button
                onClick={() => {
                  this.setState({ hasError: false });
                  window.location.reload();
                }}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                🔄 Tentar Novamente
              </button>

              <Link
                href="/"
                className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                🏠 Voltar ao Início
              </Link>
            </div>

            {/* Suggestions */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">
                O que você pode fazer:
              </h3>
              <ul className="text-gray-300 space-y-2 text-left">
                <li>• Atualizar a página (F5)</li>
                <li>• Verificar sua conexão com a internet</li>
                <li>• Limpar o cache do navegador</li>
                <li>• Tentar novamente em alguns minutos</li>
                <li>• Entrar em contato se o problema persistir</li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="mt-8 text-center">
              <p className="text-gray-400 text-sm">
                Precisa de ajuda?{' '}
                <Link
                  href="/#contact"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Entre em contato
                </Link>
              </p>
            </div>

            {/* Structured Data for Error */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  '@context': 'https://schema.org',
                  '@type': 'WebPage',
                  name: 'Erro - Michel Schiavo Portfolio',
                  description: 'Página de erro do portfolio de Michel Schiavo',
                  url: 'https://portfolio-michelschiavos-projects.vercel.app/error',
                  isPartOf: {
                    '@type': 'WebSite',
                    name: 'Michel Schiavo Portfolio',
                    url: 'https://portfolio-michelschiavos-projects.vercel.app',
                  },
                }),
              }}
            />
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
