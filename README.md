# Portfolio - Michel Schiavo

## 🇧🇷 Português

### Descrição

Este é um site de portfolio profissional desenvolvido com Next.js, React e Tailwind CSS. O site apresenta minhas habilidades, projetos e informações de contato em uma interface moderna e responsiva.

### Tecnologias Utilizadas

- **Next.js**: Framework React para renderização híbrida e geração de sites estáticos
- **React**: Biblioteca JavaScript para construção de interfaces de usuário
- **Tailwind CSS**: Framework CSS utilitário para desenvolvimento rápido
- **Framer Motion**: Biblioteca para animações fluidas
- **EmailJS**: Serviço para envio de emails diretamente do cliente
- **TypeScript**: Superset JavaScript tipado para desenvolvimento mais seguro

### Funcionalidades

- Design responsivo que se adapta a qualquer dispositivo
- Animações suaves usando Framer Motion
- Exibição automática de repositórios do GitHub
- Formulário de contato funcional integrado com EmailJS
- Navegação suave com scroll
- Otimizado para performance e SEO

### Como Executar

1. Clone o repositório:

```bash
git clone https://github.com/MichelSchiavo/portfolio.git
cd portfolio
```

2. Instale as dependências:

```bash
npm install
# ou
yarn install
```

3. Configure as variáveis de ambiente:
   Crie um arquivo `.env.local` na raiz do projeto com as seguintes variáveis:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=seu_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=seu_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=sua_public_key
NEXT_PUBLIC_REPO_URL=seus_repos
```

4. Execute o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
```

5. Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

### Estrutura do Projeto

```
/portfolio
  /public            # Assets estáticos
  /src
    /app             # Estrutura de rotas do Next.js
    /components      # Componentes React reutilizáveis
```

---

## 🇺🇸 English

### Description

This is a professional portfolio website developed with Next.js, React, and Tailwind CSS. The site showcases my skills, projects, and contact information in a modern, responsive interface.

### Technologies Used

- **Next.js**: React framework for hybrid rendering and static site generation
- **React**: JavaScript library for building user interfaces
- **Tailwind CSS**: Utility-first CSS framework for rapid development
- **Framer Motion**: Library for fluid animations
- **EmailJS**: Service for sending emails directly from the client
- **TypeScript**: Typed JavaScript superset for safer development

### Features

- Responsive design that adapts to any device
- Smooth animations using Framer Motion
- Automatic display of GitHub repositories
- Functional contact form integrated with EmailJS
- Smooth scroll navigation
- Optimized for performance and SEO

### How to Run

1. Clone the repository:

```bash
git clone https://github.com/MichelSchiavo/portfolio.git
cd portfolio
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Configure environment variables:
   Create a `.env.local` file in the project root with the following variables:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
NEXT_PUBLIC_REPO_URL=your_repos
```

4. Run the development server:

```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Project Structure

```
/portfolio
  /public            # Static assets
  /src
    /app             # Next.js route structure
    /components      # Reusable React components
```
