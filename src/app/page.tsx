'use client';

import { useEffect, useState } from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects, { Repository } from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { AnimatePresence } from 'framer-motion';

const repo = process.env.NEXT_PUBLIC_REPO_URL;

export default function Home() {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        const response = await fetch(`${repo}`);
        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }
        const data = await response.json();
        const filteredRepos = data
          .filter((repo: Repository) => !repo.fork && !repo.archived)
          .sort(
            (a: Repository, b: Repository) =>
              b.stargazers_count - a.stargazers_count,
          );
        setRepos(filteredRepos);
      } catch (error) {
        console.error('Error fetching GitHub repositories:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGithubData();
  }, []);

  return (
    <AnimatePresence>
      <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
        <Hero />
        <About />
        <Skills />
        <Projects repos={repos} isLoading={isLoading} />
        <Contact />
        <Footer />
      </div>
    </AnimatePresence>
  );
}
