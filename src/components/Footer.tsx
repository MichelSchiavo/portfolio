'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const programmingQuote =
    'O código que você escreve hoje é o legado que outros desenvolvedores herdarão amanhã.';

  return (
    <footer className="bg-gray-900 text-white py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold">Michel Schiavo</h3>
            <p className="text-gray-400 max-w-xs">
              Desenvolvedor Front-end apaixonado por criar interfaces modernas e
              responsivas.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="https://github.com/MichelSchiavo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="inline-block text-gray-400 hover:text-white transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.163 6.839 9.489.5.092.682-.217.682-.48v-1.877c-2.782.605-3.369-1.343-3.369-1.343-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.699 1.028 1.592 1.028 2.683 0 3.841-2.337 4.687-4.565 4.934.359.31.678.92.678 1.855v2.751c0 .265.18.575.688.48C19.138 20.16 22 16.416 22 12c0-5.523-4.477-10-10-10z"></path>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/michel-schiavo-a2b3861a0/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-block text-gray-400 hover:text-white transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                </svg>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold">Links Rápidos</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href="#"
                className="inline-block text-gray-400 hover:text-white transition-colors w-fit"
              >
                Início
              </Link>
              <Link
                href="#about"
                className="inline-block text-gray-400 hover:text-white transition-colors w-fit"
              >
                Sobre
              </Link>
              <Link
                href="#skills"
                className="inline-block text-gray-400 hover:text-white transition-colors w-fit"
              >
                Habilidades
              </Link>
              <Link
                href="#projects"
                className="inline-block text-gray-400 hover:text-white transition-colors w-fit"
              >
                Projetos
              </Link>
              <Link
                href="#contact"
                className="inline-block text-gray-400 hover:text-white transition-colors w-fit"
              >
                Contato
              </Link>
            </nav>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 text-sm">
            © {currentYear} Michel Schiavo. Todos os direitos reservados.
          </p>
          <p className="text-gray-400 text-sm mt-4 md:mt-0 italic">
            &quot;{programmingQuote}&quot;
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
