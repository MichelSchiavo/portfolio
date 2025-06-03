'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface Skill {
  name: string;
  icon: string; // Devicon class string
  bgColor: string; // Background gradient classes
  iconColor: string; // Icon color class
  category: string;
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skillCategories = {
    Frontend: [
      {
        name: 'HTML5',
        category: 'Frontend',
        bgColor: 'from-slate-800 to-slate-900',
        iconColor: 'text-orange-500',
        icon: 'devicon-html5-plain',
      },
      {
        name: 'CSS3',
        category: 'Frontend',
        bgColor: 'from-slate-800 to-slate-900',
        iconColor: 'text-blue-400',
        icon: 'devicon-css3-plain',
      },
      {
        name: 'JavaScript',
        category: 'Frontend',
        bgColor: 'from-slate-800 to-slate-900',
        iconColor: 'text-yellow-400',
        icon: 'devicon-javascript-plain',
      },
      {
        name: 'TypeScript',
        category: 'Frontend',
        bgColor: 'from-slate-800 to-slate-900',
        iconColor: 'text-blue-400',
        icon: 'devicon-typescript-plain',
      },
      {
        name: 'React',
        category: 'Frontend',
        bgColor: 'from-slate-800 to-slate-900',
        iconColor: 'text-cyan-400',
        icon: 'devicon-react-original',
      },
      {
        name: 'Next.js',
        category: 'Frontend',
        bgColor: 'from-slate-800 to-slate-900',
        iconColor: 'text-white [&>*]:fill-white [&>svg]:fill-white',
        icon: 'devicon-nextjs-plain',
      },
    ],
    Styling: [
      {
        name: 'Tailwind CSS',
        category: 'Styling',
        bgColor: 'from-slate-800 to-slate-900',
        iconColor: 'text-teal-400',
        icon: 'devicon-tailwindcss-original',
      },
      {
        name: 'Sass',
        category: 'Styling',
        bgColor: 'from-slate-800 to-slate-900',
        iconColor: 'text-pink-400',
        icon: 'devicon-sass-original',
      },
      {
        name: 'Styled Components',
        category: 'Styling',
        bgColor: 'from-slate-800 to-slate-900',
        iconColor: 'text-pink-400',
        icon: 'devicon-css3-plain',
      },
    ],
    Tools: [
      {
        name: 'Git',
        category: 'Tools',
        bgColor: 'from-slate-800 to-slate-900',
        iconColor: 'text-orange-500',
        icon: 'devicon-git-plain',
      },
      {
        name: 'GitHub',
        category: 'Tools',
        bgColor: 'from-slate-800 to-slate-900',
        iconColor: 'text-white',
        icon: 'devicon-github-original',
      },
      {
        name: 'VS Code',
        category: 'Tools',
        bgColor: 'from-slate-800 to-slate-900',
        iconColor: 'text-blue-400',
        icon: 'devicon-vscode-plain',
      },
      {
        name: 'Vite',
        category: 'Tools',
        bgColor: 'from-slate-800 to-slate-900',
        iconColor: 'text-purple-400',
        icon: 'devicon-vite-original',
      },
    ],
    Testing: [
      {
        name: 'Jest',
        category: 'Testing',
        bgColor: 'from-slate-800 to-slate-900',
        iconColor: 'text-red-400',
        icon: 'devicon-jest-plain',
      },
    ],
  };

  // Flatten all skills for display
  const skills: Skill[] = Object.values(skillCategories).flat();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };
  return (
    <section
      id="skills"
      className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500 rounded-full blur-xl"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-purple-500 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-green-500 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-18 h-18 bg-orange-500 rounded-full blur-xl"></div>
      </div>

      <div ref={ref} className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          Habilidades & Expertise
        </motion.h2>{' '}
        <motion.p
          className="text-center text-gray-600 mb-16 max-w-3xl mx-auto text-lg"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Tecnologias e ferramentas que utilizo no desenvolvimento de projetos
          modernos e eficientes.
        </motion.p>{' '}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 sm:gap-4 mb-16"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative overflow-hidden bg-white rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${skill.bgColor} opacity-0 group-hover:opacity-90 transition-opacity duration-300`}
              ></div>
              <div className="relative z-10 flex flex-col items-center text-center space-y-2">
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${skill.bgColor} p-3 flex items-center justify-center shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300 border border-gray-700`}
                >
                  <i
                    className={`${skill.icon} text-3xl ${skill.iconColor} group-hover:scale-110 transition-transform duration-300`}
                  ></i>
                </div>
                <div className="group-hover:text-white transition-colors duration-300">
                  <h3 className="font-semibold text-gray-900 text-xs mb-1 group-hover:text-white">
                    {skill.name}
                  </h3>
                  <span className="text-xs text-gray-500 uppercase tracking-wide font-medium group-hover:text-gray-200">
                    {skill.category}
                  </span>
                </div>
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gray-100 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <h3 className="text-xl font-bold mb-6 text-gray-800">
            Ferramentas & Metodologias
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Git & GitHub',
              'Figma',
              'VS Code',
              'Jira',
              'Scrum',
              'Agile',
              'UI/UX Design',
              'Responsive Design',
              'API REST',
              'Webpack',
              'ESLint',
              'Prettier',
            ].map((tech, index) => (
              <motion.span
                key={index}
                className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm shadow-sm text-gray-700 hover:bg-gray-50 hover:border-blue-300 hover:shadow-md transition-all duration-300 cursor-default"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
        <motion.div
          className="mt-12 bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 1.2 }}
        >
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Sempre Aprendendo
            </h3>
            <p className="text-gray-600">
              Estou constantemente me atualizando com as últimas tecnologias e
              melhores práticas do desenvolvimento web.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <div className="w-12 h-12 bg-blue-100 rounded-lg mx-auto flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-blue-600"
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
              <h4 className="font-semibold text-gray-800">Estudando</h4>
              <p className="text-sm text-gray-600">React Native, nodeJs</p>
            </div>

            <div className="space-y-2">
              <div className="w-12 h-12 bg-green-100 rounded-lg mx-auto flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-800">Performance</h4>
              <p className="text-sm text-gray-600">Otimização e Web Vitals</p>
            </div>

            <div className="space-y-2">
              <div className="w-12 h-12 bg-purple-100 rounded-lg mx-auto flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-800">Inovação</h4>
              <p className="text-sm text-gray-600">AI, Web3, PWAs</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
