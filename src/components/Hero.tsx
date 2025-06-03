'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <section className="relative min-h-screen overflow-x-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Interactive Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 80%)`,
        }}
      />

      {/* Animated Background Blobs - Contained within viewport */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-2 sm:left-8 w-48 sm:w-60 md:w-72 h-48 sm:h-60 md:h-72 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob"></div>
        <div className="absolute top-40 right-2 sm:right-8 w-48 sm:w-60 md:w-72 h-48 sm:h-60 md:h-72 bg-gradient-to-r from-purple-400 to-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-2 sm:left-16 w-48 sm:w-60 md:w-72 h-48 sm:h-60 md:h-72 bg-gradient-to-r from-pink-400 to-rose-300 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/3 right-1/4 w-40 sm:w-48 md:w-64 h-40 sm:h-48 md:h-64 bg-gradient-to-r from-indigo-400 to-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-6000"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px',
          }}
        />
      </div>

      {/* Enhanced Floating Particles - Constrained positioning */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Particles */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-3 sm:w-4 md:w-6 h-3 sm:h-4 md:h-6 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-70 shadow-lg"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute top-3/4 right-1/4 w-2 sm:w-3 md:w-4 h-2 sm:h-3 md:h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-70 shadow-lg"
          animate={{
            y: [0, 15, 0],
            x: [0, -15, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-2 sm:w-2 md:w-3 h-2 sm:h-2 md:h-3 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full opacity-70 shadow-lg"
          animate={{
            y: [0, -25, 0],
            x: [0, 10, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />
        <motion.div
          className="absolute top-1/6 left-1/2 w-2 h-2 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-full opacity-60"
          animate={{
            y: [0, -10, 0],
            x: [0, 5, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 3,
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/3 w-2 sm:w-3 md:w-5 h-2 sm:h-3 md:h-5 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full opacity-60 shadow-lg"
          animate={{
            y: [0, 20, 0],
            x: [0, -5, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1.5,
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen gap-12 lg:gap-8">
          {/* Content Section */}
          <motion.div
            className="w-full lg:w-1/2 space-y-8 lg:pr-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Enhanced Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center px-6 py-3 bg-white/90 backdrop-blur-md rounded-full border border-blue-200/50 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative">
                <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mr-3 animate-pulse shadow-lg"></div>
                <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full mr-3 animate-ping opacity-20"></div>
              </div>
              <span className="text-sm font-semibold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
                ✨ Disponível para projetos incríveis
              </span>
            </motion.div>

            {/* Enhanced Main Heading */}
            <div className="space-y-6">
              <motion.span
                className="inline-block text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                👋 Olá, eu sou o
              </motion.span>

              <motion.h1
                className="text-6xl md:text-7xl lg:text-8xl font-black text-gray-900 leading-none tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                Michel
                <motion.span
                  className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  Schiavo
                  <motion.div
                    className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-indigo-600/20 rounded-2xl blur-xl opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.span>
              </motion.h1>

              <motion.div
                className="flex items-center gap-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <div className="h-1.5 w-16 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-full shadow-lg"></div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl text-gray-700 font-light">
                  <span className="font-semibold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
                    Desenvolvedor Frontend
                  </span>
                  <span className="block text-lg text-gray-600 mt-1">
                    & UI/UX Enthusiast
                  </span>
                </h2>
              </motion.div>
            </div>

            {/* Enhanced Description */}
            <motion.p
              className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              Especializado em criar{' '}
              <span className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                experiências digitais excepcionais
              </span>{' '}
              com React, Next.js e tecnologias modernas.
              <span className="block mt-2 text-lg text-gray-500">
                Transformo ideias complexas em interfaces elegantes, intuitivas
                e de alta performance.
              </span>
            </motion.p>

            {/* Enhanced Stats */}
            <motion.div
              className="grid grid-cols-3 gap-8 py-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              <motion.div
                className="text-center group cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="relative">
                  <div className="text-4xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:from-purple-600 group-hover:to-indigo-600 transition-all duration-300">
                    3+
                  </div>
                  <div className="absolute inset-0 text-4xl font-black text-blue-600 opacity-0 group-hover:opacity-20 animate-pulse transition-opacity duration-300">
                    3+
                  </div>
                </div>
                <div className="text-sm font-semibold text-gray-600 mt-2 group-hover:text-gray-800 transition-colors">
                  Anos Experiência
                </div>
              </motion.div>
              <motion.div
                className="text-center group cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2, delay: 0.1 }}
              >
                <div className="relative">
                  <div className="text-4xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent group-hover:from-pink-600 group-hover:to-rose-600 transition-all duration-300">
                    50+
                  </div>
                  <div className="absolute inset-0 text-4xl font-black text-purple-600 opacity-0 group-hover:opacity-20 animate-pulse transition-opacity duration-300">
                    50+
                  </div>
                </div>
                <div className="text-sm font-semibold text-gray-600 mt-2 group-hover:text-gray-800 transition-colors">
                  Projetos Entregues
                </div>
              </motion.div>
              <motion.div
                className="text-center group cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2, delay: 0.2 }}
              >
                <div className="relative">
                  <div className="text-4xl font-black bg-gradient-to-r from-pink-600 to-indigo-600 bg-clip-text text-transparent group-hover:from-indigo-600 group-hover:to-blue-600 transition-all duration-300">
                    100%
                  </div>
                  <div className="absolute inset-0 text-4xl font-black text-pink-600 opacity-0 group-hover:opacity-20 animate-pulse transition-opacity duration-300">
                    100%
                  </div>
                </div>
                <div className="text-sm font-semibold text-gray-600 mt-2 group-hover:text-gray-800 transition-colors">
                  Satisfação Cliente
                </div>
              </motion.div>
            </motion.div>

            {/* Enhanced CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6 pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.6 }}
            >
              <motion.a
                href="#projects"
                className="group relative inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 text-white font-bold rounded-2xl transition-all duration-500 shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-2 hover:scale-105 overflow-hidden"
                whileHover={{ y: -8, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative z-10 mr-3">✨ Ver Meus Projetos</span>
                <motion.svg
                  className="relative z-10 w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </motion.svg>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
              </motion.a>

              <motion.a
                href="#contact"
                className="group relative inline-flex items-center justify-center px-10 py-5 bg-white/90 backdrop-blur-md hover:bg-white border-2 border-gray-200 hover:border-blue-300 text-gray-700 hover:text-blue-600 font-bold rounded-2xl transition-all duration-500 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105"
                whileHover={{ y: -8, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <motion.svg
                  className="mr-3 w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </motion.svg>
                <span>💬 Vamos Conversar</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Visual Section */}
          <motion.div
            className="mt-12 lg:mt-0 w-full lg:w-1/2 flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="relative max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl">
              {/* Main Avatar */}
              <motion.div
                className="relative z-10 w-80 h-80 sm:w-96 sm:h-96 lg:w-[450px] lg:h-[450px]"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl transform rotate-6 shadow-2xl"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl transform -rotate-6 shadow-2xl"></div>
                <div className="relative h-full w-full bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
                  {/* Code Pattern Overlay */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-4 left-4 text-white/60 text-xs font-mono">
                      {'<Developer />'}
                    </div>
                    <div className="absolute top-8 right-4 text-white/60 text-xs font-mono">
                      {'{...props}'}
                    </div>
                    <div className="absolute bottom-8 left-4 text-white/60 text-xs font-mono">
                      {'const skills = [...]'}
                    </div>
                    <div className="absolute bottom-4 right-4 text-white/60 text-xs font-mono">
                      {'export default Michel'}
                    </div>
                  </div>

                  {/* Enhanced Center Content */}
                  <div className="flex items-center justify-center h-full relative">
                    <div className="text-center text-white relative z-10">
                      <motion.div
                        className="text-9xl font-black mb-6 relative"
                        animate={{
                          textShadow: [
                            '0 0 20px rgba(255,255,255,0.5)',
                            '0 0 40px rgba(255,255,255,0.8)',
                            '0 0 20px rgba(255,255,255,0.5)',
                          ],
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        MS
                        <div className="absolute inset-0 text-9xl font-black bg-gradient-to-r from-white/20 to-transparent bg-clip-text text-transparent animate-pulse">
                          MS
                        </div>
                      </motion.div>
                      <div className="text-2xl font-semibold opacity-95 mb-2 tracking-wide">
                        Frontend Developer
                      </div>
                      <div className="text-sm font-light opacity-80 mb-8">
                        React • Next.js • TypeScript
                      </div>
                      <div className="flex justify-center mt-6 space-x-3">
                        <motion.div
                          className="w-4 h-4 bg-gradient-to-r from-blue-300 to-cyan-300 rounded-full shadow-lg"
                          animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.6, 1, 0.6],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: 0,
                          }}
                        />
                        <motion.div
                          className="w-4 h-4 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full shadow-lg"
                          animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.6, 1, 0.6],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: 0.3,
                          }}
                        />
                        <motion.div
                          className="w-4 h-4 bg-gradient-to-r from-pink-300 to-rose-300 rounded-full shadow-lg"
                          animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.6, 1, 0.6],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: 0.6,
                          }}
                        />
                      </div>
                    </div>

                    {/* Floating Code Snippets */}
                    <motion.div
                      className="absolute top-8 left-8 text-xs font-mono text-white/40 bg-white/10 px-3 py-2 rounded-lg backdrop-blur-sm"
                      animate={{ y: [0, -5, 0], opacity: [0.4, 0.7, 0.4] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    >
                      const dev = "awesome"
                    </motion.div>

                    <motion.div
                      className="absolute bottom-8 right-8 text-xs font-mono text-white/40 bg-white/10 px-3 py-2 rounded-lg backdrop-blur-sm"
                      animate={{ y: [0, 5, 0], opacity: [0.4, 0.7, 0.4] }}
                      transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                    >
                      return &lt;Magic /&gt;
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Enhanced Floating Tech Icons - Responsively positioned */}
              <motion.div
                className="absolute -top-4 sm:-top-6 lg:-top-8 -left-4 sm:-left-6 lg:-left-8 w-12 sm:w-16 lg:w-20 h-12 sm:h-16 lg:h-20 bg-gradient-to-br from-white via-blue-50 to-cyan-50 rounded-3xl shadow-2xl flex items-center justify-center border border-blue-100/50 backdrop-blur-sm"
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 8, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                whileHover={{ scale: 1.2, rotate: 15 }}
              >
                <span className="text-xl sm:text-2xl lg:text-3xl filter drop-shadow-lg">
                  ⚛️
                </span>
              </motion.div>

              <motion.div
                className="absolute -top-2 sm:-top-3 lg:-top-4 -right-6 sm:-right-8 lg:-right-12 w-10 sm:w-14 lg:w-18 h-10 sm:h-14 lg:h-18 bg-gradient-to-br from-white via-purple-50 to-pink-50 rounded-3xl shadow-2xl flex items-center justify-center border border-purple-100/50 backdrop-blur-sm"
                animate={{
                  y: [0, 20, 0],
                  rotate: [0, -8, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1,
                }}
                whileHover={{ scale: 1.2, rotate: -15 }}
              >
                <span className="text-lg sm:text-xl lg:text-2xl filter drop-shadow-lg">
                  🚀
                </span>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 sm:-bottom-6 lg:-bottom-8 -right-2 sm:-right-3 lg:-right-4 w-10 sm:w-14 lg:w-16 h-10 sm:h-14 lg:h-16 bg-gradient-to-br from-white via-green-50 to-emerald-50 rounded-3xl shadow-2xl flex items-center justify-center border border-green-100/50 backdrop-blur-sm"
                animate={{
                  y: [0, -25, 0],
                  rotate: [0, 12, 0],
                  scale: [1, 1.08, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 2,
                }}
                whileHover={{ scale: 1.2, rotate: 20 }}
              >
                <span className="text-lg sm:text-xl lg:text-2xl filter drop-shadow-lg">
                  💻
                </span>
              </motion.div>

              <motion.div
                className="absolute -bottom-2 sm:-bottom-3 lg:-bottom-4 -left-6 sm:-left-8 lg:-left-12 w-10 sm:w-14 lg:w-18 h-10 sm:h-14 lg:h-18 bg-gradient-to-br from-white via-pink-50 to-rose-50 rounded-3xl shadow-2xl flex items-center justify-center border border-pink-100/50 backdrop-blur-sm"
                animate={{
                  y: [0, 18, 0],
                  rotate: [0, -10, 0],
                  scale: [1, 1.06, 1],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.5,
                }}
                whileHover={{ scale: 1.2, rotate: -18 }}
              >
                <span className="text-lg sm:text-xl lg:text-2xl filter drop-shadow-lg">
                  🎨
                </span>
              </motion.div>

              {/* Additional Tech Icons */}
              <motion.div
                className="absolute top-1/4 -right-4 sm:-right-6 lg:-right-8 w-8 sm:w-12 lg:w-14 h-8 sm:h-12 lg:h-14 bg-gradient-to-br from-white via-indigo-50 to-blue-50 rounded-2xl shadow-xl flex items-center justify-center border border-indigo-100/50 backdrop-blur-sm"
                animate={{
                  y: [0, -12, 0],
                  x: [0, 8, 0],
                  rotate: [0, 6, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 3,
                }}
                whileHover={{ scale: 1.15 }}
              >
                <span className="text-sm sm:text-lg lg:text-xl filter drop-shadow-lg">
                  ⚡
                </span>
              </motion.div>

              <motion.div
                className="absolute bottom-1/4 -left-3 sm:-left-4 lg:-left-6 w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 bg-gradient-to-br from-white via-yellow-50 to-orange-50 rounded-2xl shadow-xl flex items-center justify-center border border-yellow-100/50 backdrop-blur-sm"
                animate={{
                  y: [0, 10, 0],
                  x: [0, -5, 0],
                  rotate: [0, -4, 0],
                }}
                transition={{
                  duration: 5.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 2.5,
                }}
                whileHover={{ scale: 1.15 }}
              >
                <span className="text-xs sm:text-sm lg:text-lg filter drop-shadow-lg">
                  🔥
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
