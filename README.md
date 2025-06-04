# 🚀 Professional Portfolio - Michel Schiavo

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

> A modern, SEO-optimized, and performance-focused portfolio website built with cutting-edge web technologies.

## ✨ Features

### 🎨 **Modern UI/UX**

- **Responsive Design**: Seamlessly adapts to all device sizes
- **Dark/Light Mode**: Automatic theme switching based on user preference
- **Smooth Animations**: Powered by Framer Motion for fluid interactions
- **Glassmorphism Effects**: Modern frosted glass design elements
- **Interactive Components**: Engaging user experience with hover effects

### 🔍 **SEO & Performance**

- **Perfect SEO Score**: Comprehensive meta tags, Open Graph, and Twitter Cards
- **Structured Data**: Rich snippets with JSON-LD schema markup
- **PWA Ready**: Progressive Web App with offline functionality
- **Core Web Vitals**: Optimized for Google's performance metrics
- **Dynamic OG Images**: Auto-generated social media preview images

### 🛡️ **Security & Standards**

- **Security Headers**: CSP, HSTS, and XSS protection
- **TypeScript**: Fully typed for enhanced code quality
- **Error Boundaries**: Graceful error handling and recovery
- **Middleware Protection**: Advanced request filtering and security

### 📱 **Progressive Web App**

- **Service Worker**: Smart caching and offline functionality
- **Web Manifest**: Native app-like experience
- **Push Notifications**: Ready for future engagement features
- **Installable**: Can be installed on mobile devices

## 🛠️ Technology Stack

### **Core Framework**

- **Next.js 14**: App Router with Server/Client Components
- **React 18**: Latest features with concurrent rendering
- **TypeScript**: Full type safety and developer experience

### **Styling & Animation**

- **Tailwind CSS**: Utility-first styling framework
- **Framer Motion**: Advanced animations and gestures
- **CSS Variables**: Dynamic theming support

### **Development & Build**

- **ESLint**: Code quality and consistency
- **Prettier**: Code formatting
- **Husky**: Git hooks for quality control
- **Bundle Analyzer**: Performance optimization

### **External Services**

- **EmailJS**: Contact form email delivery
- **GitHub API**: Dynamic repository showcase
- **Vercel Analytics**: Performance monitoring

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm/yarn/pnpm package manager
- Git

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/MichelSchiavo/portfolio.git
cd portfolio
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Environment Setup**
   Create a `.env.local` file in the root directory:

```env
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key

# GitHub Integration
NEXT_PUBLIC_GITHUB_USERNAME=your_github_username
GITHUB_TOKEN=your_github_personal_access_token

# Analytics (Optional)
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

4. **Development Server**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. **Open in Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
portfolio/
├── public/                 # Static assets
│   ├── images/            # Image assets
│   ├── icons/             # Icon files
│   ├── site.webmanifest   # PWA manifest
│   ├── sw.js              # Service worker
│   └── offline.html       # Offline page
│
├── src/
│   ├── app/               # Next.js App Router
│   │   ├── api/           # API routes
│   │   │   └── og/        # OpenGraph image generation
│   │   ├── globals.css    # Global styles
│   │   ├── layout.tsx     # Root layout with SEO
│   │   ├── page.tsx       # Home page
│   │   ├── loading.tsx    # Loading UI
│   │   ├── not-found.tsx  # 404 page
│   │   ├── robots.ts      # Robots.txt generation
│   │   └── sitemap.ts     # Sitemap generation
│   │
│   ├── components/        # Reusable components
│   │   ├── ui/            # UI primitives
│   │   ├── sections/      # Page sections
│   │   ├── ErrorBoundary.tsx
│   │   └── ...
│   │
│   ├── lib/               # Utilities and configurations
│   │   ├── structured-data.ts  # Schema.org data
│   │   ├── utils.ts       # Helper functions
│   │   └── constants.ts   # App constants
│   │
│   ├── types/             # TypeScript type definitions
│   └── middleware.ts      # Next.js middleware
│
├── next.config.ts         # Next.js configuration
├── tailwind.config.ts     # Tailwind CSS config
├── tsconfig.json          # TypeScript config
└── package.json           # Dependencies and scripts
```

## 🎯 Key Sections

### **Hero Section**

- Dynamic typing animation
- Professional introduction
- Call-to-action buttons
- Social media links

### **About Section**

- Personal background
- Professional journey
- Skills and expertise
- Downloadable resume

### **Skills Section**

- Technical proficiencies
- Interactive skill bars
- Technology categories
- Experience levels

### **Projects Section**

- Featured work portfolio
- GitHub integration
- Live demo links
- Technology stack details

### **Contact Section**

- Contact form with validation
- Social media integration
- Professional email
- Location information

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Create production build
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking

# Analysis & Optimization
npm run analyze      # Bundle size analysis
npm run lighthouse   # Performance audit
```

## 🌐 SEO Features

### **Meta Tags & Open Graph**

- Dynamic page titles and descriptions
- Social media preview optimization
- Structured data markup
- Canonical URL management

### **Performance Optimization**

- Image optimization with Next.js
- Font optimization and preloading
- Code splitting and lazy loading
- Service worker caching

### **Search Engine Features**

- XML sitemap generation
- Robots.txt configuration
- Schema.org structured data
- Breadcrumb navigation

## 🚀 Deployment

### **Vercel (Recommended)**

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### **Other Platforms**

The project is compatible with:

- Netlify
- AWS Amplify
- Digital Ocean
- Railway

## 📊 Performance Metrics

- **Lighthouse Score**: 100/100
- **Core Web Vitals**: All green
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Michel Schiavo**

- Website: [https://michelschiavo.vercel.app](https://michelschiavo.vercel.app)
- Email: michelschiavo@gmail.com
- LinkedIn: [linkedin.com/in/michelschiavo](https://linkedin.com/in/michelschiavo)
- GitHub: [@MichelSchiavo](https://github.com/MichelSchiavo)

---

⭐ **If you found this project helpful, please give it a star!**
