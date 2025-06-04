// JSON-LD Structured Data for SEO
export const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Michel Schiavo',
  alternateName: ['Michel Schiavo'],
  description:
    'Desenvolvedor Frontend especializado em React, Next.js, TypeScript e UI/UX Design com mais de 3 anos de experiência',
  url: 'https://portfolio-michelschiavos-projects.vercel.app',
  image: {
    '@type': 'ImageObject',
    url: 'https://portfolio-michelschiavos-projects.vercel.app/og-image.png',
    width: 1200,
    height: 630,
  },
  sameAs: [
    'https://github.com/michelschiavo',
    'https://www.linkedin.com/in/michel-schiavo-a2b3861a0/',
    'https://twitter.com/michelschiavo',
    'https://instagram.com/michelfelipedev',
  ],
  jobTitle: 'Desenvolvedor Frontend',
  worksFor: {
    '@type': 'Organization',
    name: 'Freelancer',
    url: 'https://portfolio-michelschiavos-projects.vercel.app',
  },
  alumniOf: {
    '@type': 'EducationalOrganization',
    name: 'Estácio de Sá',
    description: 'Engenharia de Software - Cursando',
  },
  knowsAbout: [
    'React',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'HTML5',
    'CSS3',
    'Tailwind CSS',
    'UI/UX Design',
    'Frontend Development',
    'Web Development',
    'Responsive Design',
    'Node.js',
    'Git',
    'Figma',
    'Adobe XD',
  ],
  hasOccupation: {
    '@type': 'Occupation',
    name: 'Frontend Developer',
    description:
      'Especialista em desenvolvimento de interfaces modernas e responsivas',
    skills: [
      'React Development',
      'Next.js Framework',
      'TypeScript Programming',
      'UI/UX Design',
      'Responsive Web Design',
      'Frontend Architecture',
    ],
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'BR',
    addressRegion: 'SP',
    addressLocality: 'São Paulo',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'professional',
    email: 'michel_dmc@hotmail.com',
    url: 'https://portfolio-michelschiavos-projects.vercel.app/#contact',
  },
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Michel Schiavo Portfolio',
  alternateName: 'Portfolio Michel Schiavo',
  description:
    'Portfolio profissional de Michel Schiavo, Desenvolvedor Frontend especializado em React, Next.js, TypeScript e UI/UX Design',
  url: 'https://portfolio-michelschiavos-projects.vercel.app',
  image: 'https://portfolio-michelschiavos-projects.vercel.app/og-image.png',
  author: {
    '@type': 'Person',
    name: 'Michel Schiavo',
    url: 'https://portfolio-michelschiavos-projects.vercel.app',
  },
  creator: {
    '@type': 'Person',
    name: 'Michel Schiavo',
  },
  publisher: {
    '@type': 'Person',
    name: 'Michel Schiavo',
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://portfolio-michelschiavos-projects.vercel.app',
  },
  inLanguage: 'pt-BR',
  copyrightYear: new Date().getFullYear(),
  copyrightHolder: {
    '@type': 'Person',
    name: 'Michel Schiavo',
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate:
        'https://portfolio-michelschiavos-projects.vercel.app/search?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
  about: [
    {
      '@type': 'Thing',
      name: 'Frontend Development',
    },
    {
      '@type': 'Thing',
      name: 'UI/UX Design',
    },
    {
      '@type': 'Thing',
      name: 'React Development',
    },
    {
      '@type': 'Thing',
      name: 'Web Development',
    },
  ],
};

export const professionalServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Michel Schiavo - Desenvolvimento Frontend',
  alternateName: 'Serviços de Desenvolvimento Web',
  description:
    'Serviços profissionais de desenvolvimento frontend, criação de interfaces modernas e responsivas com React, Next.js e TypeScript',
  url: 'https://portfolio-michelschiavos-projects.vercel.app',
  image: 'https://portfolio-michelschiavos-projects.vercel.app/og-image.png',
  telephone: '+55-11-99999-9999',
  email: 'michel_dmc@hotmail.com',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'BR',
    addressRegion: 'SP',
    addressLocality: 'São Paulo',
    postalCode: '01000-000',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -23.5505,
    longitude: -46.6333,
  },
  areaServed: [
    {
      '@type': 'Country',
      name: 'Brasil',
    },
    {
      '@type': 'Place',
      name: 'América Latina',
    },
    {
      '@type': 'Place',
      name: 'Estados Unidos',
    },
    {
      '@type': 'Place',
      name: 'Europa',
    },
  ],
  serviceType: [
    'Desenvolvimento Frontend',
    'UI/UX Design',
    'Desenvolvimento React',
    'Desenvolvimento Next.js',
    'Consultoria Web',
    'Design Responsivo',
    'Otimização de Performance',
    'Manutenção de Sites',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Serviços de Desenvolvimento',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Desenvolvimento de Websites',
          description: 'Criação de sites modernos e responsivos',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Desenvolvimento de Aplicações Web',
          description:
            'Desenvolvimento de aplicações complexas com React e Next.js',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'UI/UX Design',
          description: 'Design de interfaces e experiência do usuário',
        },
      },
    ],
  },
  priceRange: '$$',
  paymentAccepted: ['Pix', 'Transferência Bancária', 'PayPal'],
  currenciesAccepted: 'BRL',
  openingHours: 'Mo-Fr 09:00-18:00',
  availableLanguage: ['Português', 'English'],
  review: [
    {
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: 'Cliente Satisfeito',
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: 5,
        bestRating: 5,
      },
      reviewBody: 'Excelente trabalho, entrega no prazo e qualidade superior.',
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: 5,
    reviewCount: 50,
    bestRating: 5,
    worstRating: 4,
  },
};

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://portfolio-michelschiavos-projects.vercel.app',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Sobre',
      item: 'https://portfolio-michelschiavos-projects.vercel.app/#about',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Habilidades',
      item: 'https://portfolio-michelschiavos-projects.vercel.app/#skills',
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Projetos',
      item: 'https://portfolio-michelschiavos-projects.vercel.app/#projects',
    },
    {
      '@type': 'ListItem',
      position: 5,
      name: 'Contato',
      item: 'https://portfolio-michelschiavos-projects.vercel.app/#contact',
    },
  ],
};

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Que tecnologias Michel Schiavo domina?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Michel Schiavo é especializado em React, Next.js, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS, UI/UX Design, Node.js e ferramentas modernas de desenvolvimento frontend.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como posso contratar os serviços de Michel Schiavo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Você pode entrar em contato através do formulário no site, email michel_dmc@hotmail.com ou através das redes sociais LinkedIn e GitHub.',
      },
    },
    {
      '@type': 'Question',
      name: 'Michel Schiavo trabalha com projetos freelance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim, Michel Schiavo trabalha como freelancer e está disponível para projetos de desenvolvimento frontend, criação de interfaces e consultoria em tecnologias web modernas.',
      },
    },
    {
      '@type': 'Question',
      name: 'Qual é a experiência profissional de Michel Schiavo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Michel Schiavo possui mais de 3 anos de experiência em desenvolvimento frontend, tendo trabalhado em empresas como Schiavo's Consultoria, WORKFY/ADBAT e diversos projetos independentes.",
      },
    },
  ],
};
