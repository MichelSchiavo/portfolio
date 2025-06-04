'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

export interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  stargazers_count: number;
  language: string;
  topics: string[];
  fork: string;
  archived: boolean;
}

interface ProjectsProps {
  repos: Repository[];
  isLoading: boolean;
}

export default function Projects({ repos, isLoading }: ProjectsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = repos.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(repos.length / projectsPerPage);

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const languageColors: Record<string, string> = {
    JavaScript: 'bg-yellow-400',
    TypeScript: 'bg-blue-500',
    HTML: 'bg-orange-500',
    CSS: 'bg-blue-400',
    Python: 'bg-green-500',
    Java: 'bg-red-600',
    'C#': 'bg-purple-500',
    PHP: 'bg-indigo-600',
    Ruby: 'bg-red-500',
    Go: 'bg-cyan-500',
    Rust: 'bg-orange-700',
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden"
    >
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px',
          }}
        />
      </div>

      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-2xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto">
        {/* Enhanced Header Section */}
        <div className="text-center mb-16">
          <motion.div
            className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-md rounded-full border border-blue-200/50 shadow-lg mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mr-3 shadow-lg"
              animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-sm font-semibold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
              💻 Portfólio de Projetos
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Meus{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent relative">
              Projetos
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-full"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              />
            </span>
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Uma coleção cuidadosamente selecionada dos meus{' '}
            <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              projetos mais significativos
            </span>
            . Cada um representa uma jornada de aprendizado, inovação e paixão
            pelo desenvolvimento.
          </motion.p>

          {/* Stats Section */}
          <motion.div
            className="flex justify-center items-center gap-8 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="text-center">
              <div className="text-2xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {repos.length}+
              </div>
              <div className="text-sm text-gray-600 font-medium">
                Repositórios
              </div>
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {repos.reduce((acc, repo) => acc + repo.stargazers_count, 0)}
              </div>
              <div className="text-sm text-gray-600 font-medium">
                Stars GitHub
              </div>
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl font-black bg-gradient-to-r from-pink-600 to-indigo-600 bg-clip-text text-transparent">
                {
                  new Set(repos.map((repo) => repo.language).filter(Boolean))
                    .size
                }
                +
              </div>
              <div className="text-sm text-gray-600 font-medium">
                Tecnologias
              </div>
            </div>
          </motion.div>
        </div>{' '}
        {isLoading ? (
          <motion.div
            className="flex flex-col justify-center items-center h-64"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-200"></div>
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-600 absolute top-0 left-0"></div>
            </div>
            <motion.p
              className="mt-4 text-gray-600 font-medium"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Carregando projetos incríveis...
            </motion.p>
          </motion.div>
        ) : repos.length === 0 ? (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center">
              <svg
                className="w-12 h-12 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2M4 13h2m8-5v2m0 4h0"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Nenhum repositório encontrado
            </h3>
            <p className="text-gray-500">
              Parece que não há projetos disponíveis no momento.
            </p>
          </motion.div>
        ) : (
          <>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
              >
                {currentProjects.map((repo, index) => (
                  <motion.div
                    key={repo.id}
                    variants={itemVariants}
                    className="group relative bg-white/80 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200/50 flex flex-col transform hover:-translate-y-2"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Enhanced Project Header */}
                    <div className="relative h-52 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 overflow-hidden">
                      <div className="absolute inset-0 bg-black/20"></div>

                      {/* Animated Background Pattern */}
                      <motion.div
                        className="absolute inset-0 opacity-30"
                        style={{
                          backgroundImage: `
                            linear-gradient(45deg, rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(-45deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                          `,
                          backgroundSize: '20px 20px',
                        }}
                        animate={{
                          backgroundPosition: ['0 0', '20px 20px'],
                        }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: 'linear',
                        }}
                      />

                      {/* Project Icon/Letter */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl border border-white/30 flex items-center justify-center shadow-2xl"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          <span className="text-3xl font-black text-white drop-shadow-lg">
                            {repo.name.charAt(0).toUpperCase()}
                          </span>
                        </motion.div>
                      </div>

                      {/* Floating particles */}
                      <motion.div
                        className="absolute top-4 right-4 w-2 h-2 bg-white/60 rounded-full"
                        animate={{
                          y: [0, -10, 0],
                          opacity: [0.6, 1, 0.6],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: index * 0.2,
                        }}
                      />
                      <motion.div
                        className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-white/40 rounded-full"
                        animate={{
                          y: [0, -8, 0],
                          x: [0, 5, 0],
                          opacity: [0.4, 0.8, 0.4],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          delay: index * 0.3,
                        }}
                      />
                    </div>

                    {/* Enhanced Content Section */}
                    <div className="p-8 flex-grow">
                      <div className="mb-6">
                        <motion.h3
                          className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          {repo.name}
                        </motion.h3>
                        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 min-h-[4rem]">
                          {repo.description ||
                            'Projeto desenvolvido com muito carinho e dedicação. Explore o código para descobrir mais detalhes.'}
                        </p>
                      </div>

                      {/* Enhanced Tech Stack & Stats */}
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          {repo.language && (
                            <div className="flex items-center bg-gray-50 rounded-full px-3 py-1.5 border border-gray-200">
                              <motion.span
                                className={`w-3 h-3 rounded-full ${
                                  languageColors[repo.language] || 'bg-gray-400'
                                } mr-2 shadow-sm`}
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  delay: index * 0.1,
                                }}
                              />
                              <span className="text-xs font-semibold text-gray-700">
                                {repo.language}
                              </span>
                            </div>
                          )}

                          <div className="flex items-center bg-yellow-50 rounded-full px-3 py-1.5 border border-yellow-200">
                            <motion.svg
                              className="w-3.5 h-3.5 text-yellow-500 mr-1.5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              animate={{ rotate: [0, 10, -10, 0] }}
                              transition={{
                                duration: 4,
                                repeat: Infinity,
                                delay: index * 0.15,
                              }}
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </motion.svg>
                            <span className="text-xs font-semibold text-yellow-700">
                              {repo.stargazers_count}
                            </span>
                          </div>
                        </div>

                        {/* Enhanced Topics */}
                        {repo.topics && repo.topics.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {repo.topics
                              .slice(0, 3)
                              .map((topic, topicIndex) => (
                                <motion.span
                                  key={topicIndex}
                                  className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 rounded-full border border-blue-200/50 hover:border-blue-300 transition-colors cursor-default"
                                  whileHover={{ scale: 1.05, y: -2 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  #{topic}
                                </motion.span>
                              ))}
                            {repo.topics.length > 3 && (
                              <span className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-full border border-gray-200">
                                +{repo.topics.length - 3}
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Enhanced Action Button */}
                    <div className="p-8 pt-0">
                      <motion.a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 text-white rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl font-semibold text-sm relative overflow-hidden"
                        whileHover={{ y: -2, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                        <motion.svg
                          className="w-4 h-4 mr-2 relative z-10"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          animate={{ x: [0, 3, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </motion.svg>
                        <span className="relative z-10">Ver Projeto</span>
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover/btn:opacity-100 blur-lg transition-opacity duration-300"></div>
                      </motion.a>
                    </div>

                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-indigo-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>{' '}
            {totalPages > 1 && (
              <motion.div
                className="flex justify-center items-center mt-16 px-4"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.7, delay: 0.6 }}
              >
                <div className="bg-white/80 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-gray-200/50 flex items-center space-x-2">
                  {/* Previous Button */}
                  <motion.button
                    onClick={prevPage}
                    disabled={currentPage === 1}
                    className={`group flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 relative overflow-hidden ${
                      currentPage === 1
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 cursor-pointer shadow-lg hover:shadow-xl'
                    }`}
                    whileHover={currentPage === 1 ? {} : { scale: 1.05, y: -2 }}
                    whileTap={currentPage === 1 ? {} : { scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    aria-label="Página anterior"
                    title="Ir para a página anterior"
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 ${
                        currentPage !== 1 ? 'group-hover:opacity-100' : ''
                      } transition-opacity duration-300`}
                    ></div>
                    <motion.svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 relative z-10"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      animate={currentPage !== 1 ? { x: [-1, 0, -1] } : {}}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </motion.svg>
                  </motion.button>

                  {/* Page Numbers */}
                  <div className="flex items-center space-x-1">
                    {pageNumbers.map((number) => (
                      <motion.button
                        key={number}
                        onClick={() => goToPage(number)}
                        className={`relative w-12 h-12 rounded-xl font-semibold transition-all duration-300 cursor-pointer overflow-hidden ${
                          currentPage === number
                            ? 'bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white shadow-lg'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900'
                        }`}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        aria-label={`Ir para a página ${number}`}
                        title={`Ir para a página ${number}`}
                      >
                        {currentPage === number && (
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0, 0.3, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                        )}
                        <span className="relative z-10">{number}</span>
                        {currentPage === number && (
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 opacity-20 blur-lg"></div>
                        )}
                      </motion.button>
                    ))}
                  </div>

                  {/* Next Button */}
                  <motion.button
                    onClick={nextPage}
                    disabled={currentPage === totalPages}
                    className={`group flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 relative overflow-hidden ${
                      currentPage === totalPages
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white hover:from-purple-600 hover:to-indigo-600 cursor-pointer shadow-lg hover:shadow-xl'
                    }`}
                    whileHover={
                      currentPage === totalPages ? {} : { scale: 1.05, y: -2 }
                    }
                    whileTap={currentPage === totalPages ? {} : { scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    aria-label="Próxima página"
                    title="Ir para a próxima página"
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 ${
                        currentPage !== totalPages
                          ? 'group-hover:opacity-100'
                          : ''
                      } transition-opacity duration-300`}
                    ></div>
                    <motion.svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 relative z-10"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      animate={
                        currentPage !== totalPages ? { x: [1, 0, 1] } : {}
                      }
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </motion.svg>
                  </motion.button>
                </div>

                {/* Page Info */}
                <motion.div
                  className="ml-6 bg-gradient-to-r from-blue-50 to-purple-50 px-4 py-2 rounded-xl border border-blue-200/50"
                  initial={{ opacity: 0, x: 20 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
                  }
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Página {currentPage} de {totalPages}
                  </span>
                </motion.div>
              </motion.div>
            )}
          </>
        )}{' '}
        {/* Enhanced GitHub Section */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
          }
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div className="relative inline-block">
            <motion.a
              href="https://github.com/MichelSchiavo"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center px-8 py-4 bg-white/80 backdrop-blur-md border-2 border-gray-200/50 rounded-2xl hover:border-blue-300/50 transition-all duration-500 shadow-lg hover:shadow-2xl overflow-hidden"
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
            >
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* GitHub Icon with animation */}
              <motion.div
                className="relative mr-4"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
              >
                <svg
                  className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.163 6.839 9.489.5.092.682-.217.682-.48v-1.877c-2.782.605-3.369-1.343-3.369-1.343-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.699 1.028 1.592 1.028 2.683 0 3.841-2.337 4.687-4.565 4.934.359.31.678.92.678 1.855v2.751c0 .265.18.575.688.48C19.138 20.16 22 16.416 22 12c0-5.523-4.477-10-10-10z"></path>
                </svg>

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full bg-blue-600/20 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300"></div>
              </motion.div>

              {/* Text content */}
              <div className="relative">
                <span className="text-lg font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                  Ver Todos os Projetos no GitHub
                </span>
                <div className="text-sm text-gray-500 group-hover:text-blue-600 transition-colors duration-300 mt-1">
                  Explore mais de {repos.length} repositórios
                </div>
              </div>

              {/* Arrow with animation */}
              <motion.svg
                className="w-5 h-5 ml-4 text-gray-600 group-hover:text-blue-600 transition-colors duration-300"
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
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </motion.svg>

              {/* Hover border animation */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
            </motion.a>

            {/* Floating particles around the button */}
            <motion.div
              className="absolute -top-2 -right-2 w-2 h-2 bg-blue-400/60 rounded-full"
              animate={{
                y: [0, -10, 0],
                opacity: [0.6, 1, 0.6],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className="absolute -bottom-2 -left-2 w-1.5 h-1.5 bg-purple-400/60 rounded-full"
              animate={{
                y: [0, 8, 0],
                x: [0, -5, 0],
                opacity: [0.4, 0.8, 0.4],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1,
              }}
            />
          </div>

          {/* Additional info */}
          <motion.p
            className="mt-6 text-gray-500 text-sm"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            🚀 Constantemente atualizando com novos projetos e ideias
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
