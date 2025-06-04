'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="about"
      className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-200 rounded-full blur-3xl"></div>
      </div>

      <div ref={ref} className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sobre Mim
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="space-y-12"
        >
          {/* Introdução */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100"
          >
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mx-auto flex items-center justify-center mb-6">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <p className="text-xl text-gray-700 leading-relaxed">
                Com mais de{' '}
                <span className="font-semibold text-blue-600">
                  4 anos de experiência
                </span>{' '}
                em desenvolvimento front-end, tenho me dedicado a criar
                interfaces modernas, eficientes e centradas no usuário,
                utilizando as mais recentes tecnologias do mercado.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Minha trajetória inclui desenvolvimento de aplicações web
                complexas, desde plataformas corporativas até sites
                institucionais, sempre priorizando performance, acessibilidade e
                uma excelente experiência do usuário.
              </p>
            </div>
          </motion.div>

          {/* Grid principal */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Experiência Profissional */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100"
            >
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Experiência Profissional
                </h3>
              </div>

              <div className="space-y-6">
                <div className="relative pl-8 border-l-2 border-blue-200">
                  <div className="absolute -left-2 top-2 w-4 h-4 bg-blue-500 rounded-full"></div>
                  <div className="bg-blue-50 rounded-xl p-6">
                    <h4 className="font-bold text-gray-900 text-lg">
                      Desenvolvedor Front End
                    </h4>
                    <p className="text-blue-600 font-semibold mb-2">
                      Schiavo&lsquo;s Consultoria
                    </p>
                    <p className="text-sm text-gray-500 mb-3">
                      Setembro 2023 - Janeiro 2025
                    </p>
                    <p className="text-gray-700">
                      Desenvolvimento de aplicações web com React, Next.js e
                      tecnologias modernas de front-end.
                    </p>
                  </div>
                </div>

                <div className="relative pl-8 border-l-2 border-purple-200">
                  <div className="absolute -left-2 top-2 w-4 h-4 bg-purple-500 rounded-full"></div>
                  <div className="bg-purple-50 rounded-xl p-6">
                    <h4 className="font-bold text-gray-900 text-lg">
                      Desenvolvedor Front End
                    </h4>
                    <p className="text-purple-600 font-semibold mb-2">
                      WORKFY/ADBAT
                    </p>
                    <p className="text-sm text-gray-500 mb-3">
                      Outubro 2021 - Junho 2023
                    </p>
                    <p className="text-gray-700">
                      Atuação no desenvolvimento de interfaces responsivas e
                      experiências de usuário utilizando React e bibliotecas
                      relacionadas.
                    </p>
                  </div>
                </div>

                <div className="relative pl-8 border-l-2 border-green-200">
                  <div className="absolute -left-2 top-2 w-4 h-4 bg-green-500 rounded-full"></div>
                  <div className="bg-green-50 rounded-xl p-6">
                    <h4 className="font-bold text-gray-900 text-lg">
                      Desenvolvedor de Jogos
                    </h4>
                    <p className="text-green-600 font-semibold mb-2">
                      Projetos Independentes
                    </p>
                    <p className="text-sm text-gray-500 mb-3">
                      Projetos diversos
                    </p>
                    <p className="text-gray-700">
                      Desenvolvimento de interfaces de usuário para jogos
                      utilizando Lua, JavaScript, HTML e CSS.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Formação e Projetos */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Formação */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Formação</h3>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
                  <h4 className="font-bold text-gray-900 text-lg mb-2">
                    Engenharia de Software
                  </h4>
                  <p className="text-green-600 font-semibold mb-1">Estácio</p>
                  <span className="inline-block bg-green-500 text-white text-sm px-3 py-1 rounded-full">
                    Cursando
                  </span>
                </div>
              </div>

              {/* Projetos */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19.428 15.5l-7.33 4.2a2 2 0 01-2.097 0L2.57 15.5M12 7.5l7.428 4.2a2 2 0 010 3.464L12 19.5l-7.428-4.336a2 2 0 010-3.464L12 7.5z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Projetos Destaque
                  </h3>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    {
                      name: 'Unitok',
                      url: 'https://www.unitok.com',
                      desc: 'Plataforma React moderna',
                      color: 'blue',
                    },
                    {
                      name: 'Canopus',
                      url: 'https://www.canopus.com.br',
                      desc: 'Plataforma construção civil',
                      color: 'purple',
                    },
                    {
                      name: 'Construtora Patriani',
                      url: 'https://www.construtorapatriani.com.br',
                      desc: 'Plataforma construção civil',
                      color: 'green',
                    },
                    {
                      name: 'Restaurante Piselli',
                      url: 'https://www.restaurante.piselli.com.br',
                      desc: 'Site gastronômico responsivo',
                      color: 'orange',
                    },
                  ].map((project, index) => (
                    <a
                      key={index}
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group bg-gradient-to-r from-${project.color}-50 to-${project.color}-100 p-4 rounded-xl border border-${project.color}-200 hover:border-${project.color}-300 hover:shadow-md transition-all duration-300`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4
                            className={`font-bold text-gray-900 group-hover:text-${project.color}-600 transition-colors`}
                          >
                            {project.name}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {project.desc}
                          </p>
                        </div>
                        <svg
                          className={`w-5 h-5 text-${project.color}-500 group-hover:translate-x-1 transition-transform`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
