'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
  color: string;
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const frontendSkills: Skill[] = [
    { name: 'HTML', level: 90, color: 'bg-orange-500' },
    { name: 'CSS', level: 85, color: 'bg-blue-500' },
    { name: 'JavaScript', level: 85, color: 'bg-yellow-500' },
    { name: 'TypeScript', level: 80, color: 'bg-blue-700' },
    { name: 'React', level: 85, color: 'bg-cyan-500' },
    { name: 'Next.js', level: 80, color: 'bg-gray-800' },
  ];

  const otherSkills: Skill[] = [
    { name: 'Styled Components', level: 80, color: 'bg-pink-500' },
    { name: 'Strapi', level: 75, color: 'bg-purple-600' },
    { name: 'Storybook', level: 75, color: 'bg-pink-700' },
    { name: 'Tailwind CSS', level: 80, color: 'bg-cyan-600' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const skillVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: {
        duration: 1.2,
        ease: 'easeInOut',
      },
    }),
  };

  return (
    <section
      id="skills"
      className="py-20 px-6 md:px-12 lg:px-24 bg-gray-50 max-w-7xl mx-auto"
    >
      <div ref={ref} className="max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          Habilidades & Expertise
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <motion.h3
              className="text-xl font-bold mb-6 text-gray-800"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Desenvolvimento Frontend
            </motion.h3>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="space-y-6"
            >
              {frontendSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-700 font-medium">
                      {skill.name}
                    </span>
                    <span className="text-gray-600">{skill.level}%</span>
                  </div>
                  <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full ${skill.color} rounded-full`}
                      custom={skill.level}
                      variants={skillVariants}
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <div>
            <motion.h3
              className="text-xl font-bold mb-6 text-gray-800"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Outras Tecnologias
            </motion.h3>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="space-y-6"
            >
              {otherSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-700 font-medium">
                      {skill.name}
                    </span>
                    <span className="text-gray-600">{skill.level}%</span>
                  </div>
                  <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full ${skill.color} rounded-full`}
                      custom={skill.level}
                      variants={skillVariants}
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <h3 className="text-xl font-bold mb-4 text-gray-800">
            Ferramentas & Metodologias
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Git',
              'Figma',
              'VS Code',
              'Jira',
              'Scrum',
              'Agile',
              'UI/UX',
              'Responsividade',
            ].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm shadow-sm text-gray-700 hover:bg-gray-50 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
