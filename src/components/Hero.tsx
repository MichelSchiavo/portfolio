'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between min-h-screen px-6 md:px-12 lg:px-24 py-20 max-w-7xl mx-auto">
      <motion.div
        className="w-full lg:w-1/2 space-y-6"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.span
          className="text-blue-600 font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Olá, meu nome é
        </motion.span>
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Michel Schiavo
        </motion.h1>
        <motion.h2
          className="text-2xl md:text-3xl lg:text-4xl text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          Desenvolvedor Front-end
        </motion.h2>
        <motion.p
          className="text-gray-600 text-lg max-w-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          Eu construo interfaces web inovadoras, responsivas e intuitivas com
          tecnologias modernas.
        </motion.p>
        <motion.div
          className="flex gap-4 pt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.5 }}
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Ver Projetos
          </a>
          <a
            href="#contact"
            className="px-6 py-3 bg-transparent border border-gray-400 hover:border-blue-600 text-gray-900 rounded-md transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-1"
          >
            Entre em Contato
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="mt-12 lg:mt-0 w-full lg:w-1/2 flex justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative h-64 w-64 md:h-80 md:w-80 lg:h-96 lg:w-96">
          <div className="absolute inset-0 rounded-full bg-blue-600/20 blur-3xl"></div>
          <div className="h-full w-full relative rounded-full overflow-hidden border-4 border-white/20 shadow-xl">
            <div className="h-full w-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white text-4xl">
              MS
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
