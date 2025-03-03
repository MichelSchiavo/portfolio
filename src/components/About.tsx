'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="about"
      className="py-20 px-6 md:px-12 lg:px-24 bg-white max-w-7xl mx-auto"
    >
      <div ref={ref} className="max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          Sobre Mim
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-gray-700">
              Com uma paixão por criar interfaces limpas, eficientes e amigáveis
              ao usuário, tenho me dedicado a aprimorar minhas habilidades como
              Desenvolvedor Front-end com experiência em tecnologias web
              modernas.
            </p>
            <p className="text-gray-700">
              Acredito em escrever código que resolva problemas reais e crie
              experiências agradáveis para o usuário. Minha abordagem combina
              competência técnica com resolução criativa de problemas.
            </p>
            <p className="text-gray-700">
              Quando não estou programando, você pode me encontrar explorando
              novas tecnologias, contribuindo para projetos open source, ou
              aproveitando atividades ao ar livre para manter um equilíbrio
              saudável entre vida pessoal e trabalho.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-lg space-y-6"
          >
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Formação</h3>
              <div className="space-y-3 text-gray-700">
                <div>
                  <p className="font-medium">Ignite - 2022-2023</p>
                  <p>
                    Cursando o Ignite da Rocketseat, um programa de aceleração
                    de carreira, focado em desenvolvimento web e mobile.
                  </p>
                </div>
                <div>
                  <p className="font-medium">Engenharia de Software - 2023</p>
                  <p>Cursando Engenharia de software na Estácio de Sá.</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Experiência</h3>
              <div className="space-y-1">
                <p className="font-medium text-gray-700">
                  Desenvolvedor Front-end - Workfy/Adbat, 2021-2023
                </p>
                <p className="text-gray-700">
                  Desenvolvimento de aplicações web e mobile, utilizando
                  ReactJs, NextJs, Styled-components, Strapi e Storybook, tudo
                  em typescript.
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Interesses</h3>
              <p className="text-gray-700">
                Desenvolvimento Web, Front-end, Interfaces de Usuário,
                Tecnologia, Inovação
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
